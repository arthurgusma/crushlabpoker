import Aside from "@/components/Aside";
import ChartOptions from "@/components/ChartOptions";

export default async function HomePage() {
  return (
      <main className="flex px-20 py-16">
        <Aside />
        <div className="flex place-items-center justify-around w-full">
          <ChartOptions />
        </div>
      </main>
  );
}