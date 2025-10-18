import QuoteGenerator from '@/components/QuoteGenerator'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Quote Generator
        </h1>
        <QuoteGenerator />
      </div>
    </main>
  )
}