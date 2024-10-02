
import HomeForm from "@/components/HomeForm";
import "./global.css";
import SignInButton from "@/components/SignInButton";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <section className="flex items-center justify-between mx-10">
        <div className="flex flex-col items-center justify-center  w-6/12">
          <h1 className="text-4xl font-bold">Crush Lab Poker</h1>
          <p className="text-lg">Level up your poker skills</p>
        </div>
        <div className="w-6/12 flex items-center justify-center">
          <HomeForm />
        </div>
      </section>
    </main>
  );
}
