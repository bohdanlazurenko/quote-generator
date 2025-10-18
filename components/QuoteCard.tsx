import { Quote } from '@/types/quote'

interface QuoteCardProps {
  quote: Quote
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
      <svg className="w-8 h-8 text-indigo-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className="text-xl font-medium text-gray-800 mb-4">
        "{quote.text}"
      </blockquote>
      <cite className="text-gray-600 font-semibold not-italic">
        — {quote.author}
      </cite>
    </div>
  )
}