import { Chart } from "@/components/Chart";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <Chart isFirstToAct={true} />
    </main>
  );
}