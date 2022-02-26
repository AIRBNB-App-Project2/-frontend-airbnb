
import Link from "next/link"
import Navbar from '../../components/navbar'
import Link from "next/link";
import axios from "axios";

export default function formHost(props) {
const city = props.citys.data;

  return (
    <>
      <Navbar />
      <div className="my-16 flex justify-center sm:mt-0">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST" className='w-[600px]'>
            <div className="overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h1 className='text-xl font-bold'>Silahkan input informasi villa anda :</h1>
                <div className="col-span-6 sm:col-span-4 mt-7">
                  <label htmlFor="villa-name" className="block text-sm font-bold text-gray-700">Nama Villa</label>
                  <input type="text" name="villa-name" id="villa-name" autoComplete="off" required className="mt-1 border focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2" />
                </div>

                <div className="col-span-6 sm:col-span-4 mt-5">
                  <label htmlFor="adress" className="block text-sm font-bold text-gray-700">Alamat</label>
                  <input type="text" name="adress" id="adress" autoComplete="off" required className="mt-1 border focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2" />
                </div>

                <div className="col-span-6 sm:col-span-3 mt-5">
                  <label htmlFor="city" className="block text-sm font-bold text-gray-700">Kota</label>
                  <select id="city" name="city" autoComplete="off" required className="mt-1 block w-full py-2 px-3 border border-secondary bg-white shadow-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary sm:text-sm">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3 mt-5">
                  <label htmlFor="category" className="block text-sm font-bold text-gray-700">Kategori</label>
                  <select id="category" name="category" autoComplete="off" required className="mt-1 block w-full py-2 px-3 border border-secondary bg-white shadow-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary sm:text-sm">
                    <option>Standart</option>
                    <option>Deluxe</option>
                    <option>Superior</option>
                    <option>Luxury</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-4 mt-5">
                  <label htmlFor="description" className="block text-sm font-bold text-gray-700">Deskripsi Fasilitas</label>
                  <input type="text" name="description" id="description" autoComplete="off" required className="mt-1 border  focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2" />
                </div>

                <div className="col-span-6 sm:col-span-4 mt-5">
                  <label htmlFor="price" className="block text-sm font-bold text-gray-700">Harga</label>
                  <input type="text" name="price" id="price" autoComplete="off" required className="mt-1 border focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2" />
                </div>
                  <div className="col-span-6 sm:col-span-4 mt-7">
                    <label htmlFor="villa-name" className="block text-sm font-bold text-gray-700">Nama Villa</label>
                    <input type="text" name="villa-name" id="villa-name" autoComplete="off" required className="mt-1 border focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2" />
                  </div>

                  <div className="col-span-6 sm:col-span-4 mt-5">
                    <label htmlFor="adress" className="block text-sm font-bold text-gray-700">Alamat</label>
                    <input type="text" name="adress" id="adress" autoComplete="off" required className="mt-1 border focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2" />
                  </div>

                  <div className="col-span-6 sm:col-span-3 mt-5">
                    <label htmlFor="city" className="block text-sm font-bold text-gray-700">Kota</label>
                    <select id="city" name="city" autoComplete="off" required className="mt-1 block w-full py-2 px-3 border border-secondary bg-white shadow-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary sm:text-sm">
                    <option selected disabled>Pilih Kota</option>
                    {city.map((city) => (

                      <>
                      <option>{city.name}</option>
  </>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3 mt-5">
                    <label htmlFor="category" className="block text-sm font-bold text-gray-700">Kategori</label>
                    <select id="category" name="category" autoComplete="off"  required className="mt-1 block w-full py-2 px-3 border border-secondary bg-white shadow-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary sm:text-sm">
                      <option selected disabled>Pilih Kategori</option>
                      <option>Standart</option>
                      <option>Deluxe</option>
                      <option>Superior</option>
                      <option>Luxury</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-4 mt-5">
                    <label htmlFor="description" className="block text-sm font-bold text-gray-700">Deskripsi Fasilitas</label>
                    <input type="text" name="description" id="description" autoComplete="off" required className="mt-1 border  focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2" />
                  </div>

                  <div className="col-span-6 sm:col-span-4 mt-5">
                    <label htmlFor="price" className="block text-sm font-bold text-gray-700">Harga</label>
                    <input type="text" name="price" id="price" autoComplete="off" required className="mt-1 border focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2" />
                  </div>
                  
                  <div className="col-span-6 sm:col-span-3 mt-5">
                    <label htmlFor="status" className="block text-sm font-bold text-gray-700">Status</label>
                    <select id="status" name="status" autoComplete="off"  required className="mt-1 block w-full py-2 px-3 border border-secondary bg-white shadow-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary sm:text-sm">
                      <option selected disabled>Pilih Status</option>
                      <option>Open</option>
                      <option>Close</option>
                    </select>
                  </div>
                   
                  <div className="fallback col-span-6 sm:col-span-4 mt-5"> 
                  <label htmlFor="status" className="block text-sm font-bold text-gray-700">Foto Detail Villa</label>
                  <input name="file" type="file" multiple className="mt-1 border focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2" />
                  </div>
                  <div className="dz-message" data-dz-message>
                  </div>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <Link href="/hosted/photo/">
                  <a>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2">Selanjutnya</button>
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get("http://18.140.1.124:8081/city");
  const citys = await res.data;
  return {
    props: {
      citys,
    },
  };
}