'use client'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import LoadingSpinner from '../UI/LoadingSpinner'
import { toast } from 'react-toastify'
import { Input, TextArea } from '../UI/Input'
import { useTranslation } from 'react-i18next'

export default function ContactUs() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  const { t } = useTranslation()

  const toggleChat = () => setIsOpen((prev) => !prev)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!form.current) return

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          toast.success(t('contact-us.alert.success'))
          form.current?.reset()
          setIsOpen(false)
        },
        (error) => {
          console.error(error.text)
          toast.error(t('contact-us.alert.error'))
        },
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="bg-main-champagne shadow-lg rounded-lg p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-main-dark-green">
              {t('contact-us.title')}
            </h2>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <Input
              label={t('contact-us.name')}
              type="text"
              name="user_name"
              id="user_name"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-main-dark-green"
              required
            />

            <Input
              label="Email"
              type="email"
              name="user_email"
              id="user_email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-main-dark-green"
              required
            />
            <TextArea
              label={t('contact-us.message')}
              name="message"
              id="message"
              rows={4}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-black">{t('contact-us.alert.response')}</p>

            <div className="text-right">
              {isSubmitting ? (
                <LoadingSpinner />
              ) : (
                <input
                  type="submit"
                  value={t('contact-us.send')}
                  className="bg-main-green text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                />
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
