import './globals.css'
import { Cinzel } from 'next/font/google'
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const cinzel = Cinzel({ subsets: ['latin'], weight: ['700']})

export const metadata = {
  title: 'Tiger Website',
  description: 'A Tiger Appreciation Website',
}

export default function RootLayout({ children }) {
  return (
    <div className="page-container" >
   <div className="content-wrap">
      <Navbar />
      {children}
      </div>
      <Footer />
    </div>
        
    
  )
}