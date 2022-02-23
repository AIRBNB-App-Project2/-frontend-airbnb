import Navbar from '../components/navbar'
import Sliders from '../components/slidersImage'

const callouts = [
  {
    name: 'Bali',
    description: 'Wonderfull Indonesia',
    imageSrc: 'https://media.istockphoto.com/photos/hindu-temple-in-bali-picture-id653953140?b=1&k=20&m=653953140&s=170667a&w=0&h=IMHSniMal35EVl0aM3Syi6o8pvyVoaU1X9brGGGYbVI=',
    imageAlt: '',
    href: '#',
  },
  {
    name: 'Lombok',
    description: 'Wonderfull Indonesia',
    imageSrc: 'https://media.istockphoto.com/photos/beautiful-ksamil-beach-in-albania-picture-id517869683?k=20&m=517869683&s=612x612&w=0&h=HiL1pONDwoPgAP_DMGLhZlos6qNhYnnhXwhw6CbYjTk=',
    imageAlt: '',
    href: '#',
  },
  {
    name: 'Bekasi',
    description: 'Wonderfull Indonesia',
    imageSrc: 'https://media.istockphoto.com/photos/city-landmarks-from-the-air-picture-id1276789193?b=1&k=20&m=1276789193&s=170667a&w=0&h=7Tlq3sNkAthn7Bv5OsXRuyGjpR2Ac2BJ8IrIxCyswpE=',
    imageAlt: '',
    href: '#',
  },
  {
    name: 'Malang',
    description: 'Wonderfull Indonesia',
    imageSrc: 'https://media.istockphoto.com/photos/malang-tugu-square-with-blue-sky-and-beautiful-garden-flower-park-is-picture-id1357870414?b=1&k=20&m=1357870414&s=170667a&w=0&h=XNyyQ_3ciE9UCx9P20tQXQv1Lm8JEAOOH9nY90z3FxQ=',
    imageAlt: '',
    href: '#',
  },
]

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1526928878027-1cf28c1405ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGFnZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1580156761943-5bd3b300114e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGFnZSUyMGhvdXNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1633602108759-40f528b59111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGFnZSUyMGhvdXNlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1556837675-f48f2f7d3882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpbGxhZ2UlMjBob3VzZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Slider Images */}
      <div className='max-w-screen-xl m-auto bg-gray-200'>
        <Sliders />
      </div>
      {/* Kategori Card */}
      <div className='max-w-screen-xl m-auto'>
        <div className='py-5 px-20 mt-10'>
          <h2 className='text-2xl font-semibold select-none'>Temukan Kenyamanan Anda</h2>
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-3">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-48 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                  <div className='absolute w-full py-2.5 bottom-0 inset-x-0 bg-elemen2/80 text-center leading-4'>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href={callout.href}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='max-w-screen-xl m-auto'>
        <div className='py-5 px-20 mt-10'>
          <h2 className='text-2xl font-semibold select-none'>Yang Paling Menarik</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
