'use client'

import { useState } from 'react'
import { quotes } from '@/lib/quotes'
import QuoteCard from './QuoteCard'

export default function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0])

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <QuoteCard quote={currentQuote} />
      <button
        onClick={generateRandomQuote}
        className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 active:scale-95"
      >
        Generate New Quote
      </button>
    </div>
  )
}