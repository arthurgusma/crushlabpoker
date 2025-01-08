import HomeForm from '@/components/HomeForm'
import Image from 'next/image'
import logo from '@/assets/logo/full-logo.png'
import logoPositivo from '@/assets/logo/logo-fundo-positivo.png'

export default async function App() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section
        className="md:flex items-center justify-between w-full"
        style={{ height: 'calc(100vh - 64px)' }}
      >
        <div className="hidden md:flex flex-col items-center justify-center w-6/12 h-full bg-main-light-green">
          <Image
            src={logo}
            alt="Crush Lab Poker Logo"
            width={800}
            height={800}
          />
        </div>
        <div className="md:w-6/12 flex items-center justify-center bg-main-champagne h-full">
          <div className="place-content-center text-center">
            <Image
              src={logoPositivo}
              alt="Crush Lab Poker Logo"
              width={200}
              height={200}
              className="md:hidden mb-14 mx-auto"
            />
            <HomeForm />
          </div>
        </div>
      </section>
    </main>
  )
}
