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
    description: 'Single bed, 1 porsi sarapan',
    imageSrc: 'https://pix10.agoda.net/hotelImages/259/25972253/25972253_210715112100103696998.jpg?s=1024x768',
    imageAlt: '',
    href: 'standart',
  },
  {
    name: 'Deluxe',
    description: 'Twin bed, 2 porsi sarapan, Tv',
    imageSrc: 'https://picture-origin.rumah123.com/news-content/img/2021/11/10150540/desain-vila-kecil-minimalis-pinterest-1.jpg',
    imageAlt: '',
    href: 'deluxe',
  },
  {
    name: 'Superior',
    description: 'Twin bed XL, 4 porsi sarapan, AC, Wifi, TV ',
    imageSrc: 'https://www.watermark-bali.com/wp-content/uploads/2017/09/superior-room2.jpg',
    imageAlt: '',
    href: 'superior',
  },
  {
    name: 'Luxury',
    description: 'Twin bed XXL, 6 porsi sarapan, AC, Wifi, TV, Kolam Renang, Ruang Bioskop',
    imageSrc: 'https://i.pinimg.com/originals/c7/be/b4/c7beb487b2b54736cfcb842d02463724.jpg',
    imageAlt: '',
    href: 'luxury',
  },
]


export default function Home(props) {

  const router = useRouter()
  const rooms = props.rooms.data

  return (
    <>
      <Navbar />
      {/* Slider Images */}
      <div className='max-w-screen-xl m-auto bg-gray-200/30 z-0'>
        <Sliders />
      </div>
      {/* Kategori Card */}
      <div className='max-w-screen-xl m-auto'>
        <div className='py-5 px-20 mt-10'>
          <h2 className='text-2xl font-semibold select-none'>Temukan Kenyamanan Anda</h2>
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-3">
            {callouts.map((callout) => (
              <Link href={`/category?category=${callout.href}`}>
                <div key={callout.name} className="group relative cursor-pointer" >
                  <div className="relative w-full h-48 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover" />
                    <div className='absolute w-full h-24 py-5 bottom-0 inset-x-0 bg-elemen2/80 text-center leading-4 animate-pulse hover:animate-none'>
                      <h3 className="text-md font-semibold text-gray-900">
                        <a>
                          <span className="absolute inset-0" />
                          {callout.name}
                        </a>
                      </h3>
                      <p className=" text-sm text-gray-500 px-2">{callout.description}</p>
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
              <div key={room.room_uid} className="group relative cursor-pointer" onClick={() => { console.log(router.push(`/category/detail/${room.room_uid}`)) }}>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className='w-44'>
                    <h3 className="text-md text-gray-700 font-semibold">
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {room.name}
                      </a>
                    </h3>
                    <p className="text-sm font-medium text-gray-900 truncate">{room.description}</p>
                  </div>
                  <p className="mt-1 text-md font-bold text-gray-500"><CurrencyFormat value={room.price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} /></p>
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
  const res = await axios.get("http://18.140.1.124:8081/room?length=100");
  const rooms = await res.data;
  return {
    props: {
      rooms,
    }, // will be passed to the page component as props
  };
}