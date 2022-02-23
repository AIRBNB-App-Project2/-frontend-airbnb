import Navbar from '../components/navbar'
import Sliders from '../components/slidersImage'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='max-w-screen-xl m-auto bg-gray-200'>
        <Sliders />
      </div>
    </>
  )
}
