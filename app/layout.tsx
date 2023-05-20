import './globals.css'
import { Roboto } from 'next/font/google'
import { Baloo_2 } from "next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: '400'
})

const baloo = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baloo',
})

export const metadata = {
  title: 'Coffee Delivery',
  description: 'O café perfeito para qualquer hora do dia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baloo.variable}`}>{children}</body>
    </html>
  )
}
