import Image from 'next/image'
import { DM_Serif_Display } from 'next/font/google'

const dm = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-dm",
})

export default function Home() {
  return (
    <div className="Homewrap">
      <h1>Tigers are the King of Cats</h1>
        <h3 className={`${dm.variable} text-white`}> Help keep these magnificent beasts alive! </h3>
          <button>Donate Now</button>
    </div>
  )
}
