import HomeForm from "@/components/HomeForm";

export default async function LogIn() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="flex items-center justify-between w-full" style={{ height: 'calc(100vh - 64px)' }}>
        <div className="flex flex-col items-center justify-center w-6/12 h-full ">
          <h1 className="text-4xl font-bold">Crush Lab Poker</h1>
          <p className="text-lg">Level up your poker skills</p>
        </div>
        <div className="w-6/12 flex items-center justify-center bg-main-champagne h-full">
          <HomeForm />
        </div>
      </section>
    </main>
  );
}
