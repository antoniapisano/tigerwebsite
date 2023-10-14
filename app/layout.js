import './globals.css'
import { Inter } from 'next/font/google'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tiger Website',
  description: 'A Tiger Appreciation Website',
}

export default function RootLayout({ children }) {
  return (
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
        
    
  )
}