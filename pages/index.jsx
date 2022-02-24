import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import Sliders from '../components/slidersImage'
import CurrencyFormat from 'react-currency-format';
import axios from 'axios'
import Link from 'next/link';

// local category
const callouts = [
  {
    name: 'Standart',
    description: 'Wonderfull Indonesia',
    imageSrc: 'https://test-upload-s3-rogerdev.s3.ap-southeast-1.amazonaws.com/6216503718eb9324b8213a1f.png',
    imageAlt: '',
    href: 'standart',
  },
  {
    name: 'Deluxe',
    description: 'Wonderfull Indonesia',
    imageSrc: 'https://test-upload-s3-rogerdev.s3.ap-southeast-1.amazonaws.com/6216503718eb9324b8213a1f.png',
    imageAlt: '',
    href: 'deluxe',
  },
  {
    name: 'Superior',
    description: 'Wonderfull Indonesia',
    imageSrc: 'https://test-upload-s3-rogerdev.s3.ap-southeast-1.amazonaws.com/6216503718eb9324b8213a1f.png',
    imageAlt: '',
    href: 'superior',
  },
  {
    name: 'Luxury',
    description: 'Wonderfull Indonesia',
    imageSrc: 'https://test-upload-s3-rogerdev.s3.ap-southeast-1.amazonaws.com/6216503718eb9324b8213a1f.png',
    imageAlt: '',
    href: 'luxury',
  },
]


export default function Home(props) {

  const router = useRouter()
  const rooms = props.rooms.data.slice(0, 8)

  console.log(rooms);

  return (
    <>
      <Navbar />
      {/* Slider Images */}
      <div className='max-w-screen-xl m-auto bg-gray-200 z-0'>
        <Sliders />
      </div>
      {/* Kategori Card */}
      <div className='max-w-screen-xl m-auto'>
        <div className='py-5 px-20 mt-10'>
          <h2 className='text-2xl font-semibold select-none'>Temukan Kenyamanan Anda</h2>
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-3">
            {callouts.map((callout) => (
              <Link href={`/category?category=${callout.href}`}>
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-48 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover" />
                    <div className='absolute w-full py-2.5 bottom-0 inset-x-0 bg-elemen2/80 text-center leading-4'>
                      <h3 className="mt-6 text-base font-semibold text-gray-900">
                        <a href={callout.href}>
                          <span className="absolute inset-0" />
                          {callout.name}
                        </a>
                      </h3>
                      <p className=" text-sm text-gray-500">{callout.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='max-w-screen-xl m-auto'>
        <div className='py-5 px-20 my-10'>
          <h2 className='text-2xl font-semibold select-none'>Yang Paling Menarik</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {rooms.map((room) => (
              <div key={room.room_uid} className="group relative cursor-pointer" onClick={() => { console.log("Click me") }}>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {room.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500"></p>
                  </div>
                  <p className="text-sm font-medium text-gray-900"><CurrencyFormat value={room.price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get("http://18.140.1.124:8081/room");
  const rooms = await res.data;
  return {
    props: {
      rooms,
    }, // will be passed to the page component as props
  };
}