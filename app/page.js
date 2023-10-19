import Image from 'next/image'
import { dm } from './fonts'
import { cinzel } from './fonts'


export default function Home() {
  return (
    <div className="Homewrap">
      <h1 className={cinzel.className}>Tigers are the King of Cats</h1>
        <h3 className={dm.className}>Help keep these magnificent beasts alive! </h3>
          <button className={dm.className}>Donate Now</button>
    </div>
  )
}
