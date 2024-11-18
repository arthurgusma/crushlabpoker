import HomeForm from "@/components/HomeForm";
import Image from "next/image";
import logo from '@/assets/logo/full-logo.png'

export default async function LogIn() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="flex items-center justify-between w-full" style={{ height: 'calc(100vh - 64px)' }}>
        <div className="flex flex-col items-center justify-center w-6/12 h-full bg-main-light-green">
          <Image src={logo} alt="Crush Lab Poker Logo" width={800} height={800} />
        </div>
        <div className="w-6/12 flex items-center justify-center bg-main-champagne h-full">
          <div>
            <HomeForm />
          </div>
        </div>
      </section>
    </main>
  );
}
