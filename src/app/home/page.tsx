import Aside from "@/components/Aside";
import ChartOptions from "@/components/ChartOptions";

export default async function Home() {
  return (
      <main className="flex px-20 p-16">
        <Aside />
        <div className="flex place-items-center justify-around w-full">
          <ChartOptions />
        </div>
      </main>
  );
}