//import Image from 'next/image'
import Location from "./components/location/Location";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Location />
    </main>
  )
}
