# Quote Generator

A simple and elegant quote generator built with Next.js 14, TypeScript, and Tailwind CSS. Get inspired with random quotes from famous personalities.

## Features

- Display random quotes from a curated collection
- Beautiful and responsive design with Tailwind CSS
- Smooth animations and hover effects
- Type-safe implementation with TypeScript
- Clean and modern UI

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
quote-generator/
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── QuoteCard.tsx
│   └── QuoteGenerator.tsx
├── lib/
│   └── quotes.ts
├── types/
│   └── quote.ts
├── .gitignore
├── README.md
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Usage

Click the "Generate New Quote" button to display a random quote from the collection. Each quote is displayed in an elegant card format with the author's name.

## API Endpoint

The application includes a health check endpoint at `/api/ping` that returns a JSON response with the current timestamp.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).