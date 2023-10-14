import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold font-serif my-6 text-center hover:scale-110 transition cursor-pointer">
        Hey There!
      </h1>

      <Button />
    </main>
  );
}
