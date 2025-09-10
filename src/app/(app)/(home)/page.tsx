import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-3xl font-bold">Wellcome to Marketswall</h1>
        <p>Find your own tenant here</p>
        <Button variant="elevated">Get started</Button>
      </main>
    </div>
  );
}
