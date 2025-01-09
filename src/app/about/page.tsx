'use client'

import VideoPlayer from '@/components/VideoPlayer'
import { useTranslation } from 'react-i18next'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <main className="md:m-16">
      <section className="flex justify-center">
        <div className="md:w-1/2 max-sm:mx-4">
          <h1 className="text-main-gold font-thin text-5xl mb-2">
            {t('about-page.title')}
          </h1>
          <p>{t('about-page.content')}</p>
        </div>
      </section>
      <section className="flex justify-center mt-10">
        <VideoPlayer />
      </section>
    </main>
  )
}
