import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";

import axios from "axios";

export default function formHost() {
  const router = useRouter();
  const [cities, setCities] = useState([]);

  const [villaName, setVillaName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    axios
      .get("http://18.140.1.124:8081/city")
      .then(({ data }) => {
        setCities(data.data);
      })
      .catch((err) => {
        console.log(err, "cannot get data city");
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const body = {
      name: villaName,
      category: category,
      address: address,
      city_id: city,
      price: price,
      status: status,
      description: description,
    };
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post("http://18.140.1.124:8081/room", body, config)
      .then(({ data }) => {
        if (data) {
          router.push("/hosted");
        }
      })
      .catch((err) => {
        console.log(err, "error");
      })
      .finally(() => {});
  }

  return (
    <>
      <Navbar />
      <div className="my-16 flex justify-center sm:mt-0">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST" className="w-[600px]">
            <div className="overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h1 className="text-xl font-bold">
                  Silahkan input informasi villa anda :
                </h1>
                <div className="col-span-6 sm:col-span-4 mt-7">
                  <label
                    htmlFor="villa-name"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Nama Villa
                  </label>
                  <input
                    type="text"
                    name="villa-name"
                    id="villa-name"
                    autoComplete="off"
                    required
                    className="mt-1 border focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2"
                    onChange={(e) => {
                      setVillaName(e.target.value);
                    }}
                    value={villaName}
                  />
                </div>

                <div className="col-span-6 sm:col-span-4 mt-5">
                  <label
                    htmlFor="adress"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Alamat
                  </label>
                  <input
                    type="text"
                    name="adress"
                    id="adress"
                    autoComplete="off"
                    required
                    className="mt-1 border focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    value={address}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 mt-5">
                  <label
                    htmlFor="city"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Kota
                  </label>
                  <select
                    id="city"
                    name="city"
                    autoComplete="off"
                    required
                    className="mt-1 block w-full py-2 px-3 border border-secondary bg-white shadow-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary sm:text-sm"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    value={city}
                  >
                    <option selected disabled>
                      Pilih Kota
                    </option>
                    {cities.map((city, i) => (
                      <option key={i} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3 mt-5">
                  <label
                    htmlFor="category"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Kategori
                  </label>
                  <select
                    id="category"
                    name="category"
                    autoComplete="off"
                    required
                    className="mt-1 block w-full py-2 px-3 border border-secondary bg-white shadow-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary sm:text-sm"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    value={category}
                  >
                    <option selected disabled>
                      Pilih Kategori
                    </option>
                    <option value="standart">Standart</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="superior">Superior</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-4 mt-5">
                  <label
                    htmlFor="description"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Deskripsi Fasilitas
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    autoComplete="off"
                    required
                    className="mt-1 border  focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                  />
                </div>

                <div className="col-span-6 sm:col-span-4 mt-5">
                  <label
                    htmlFor="price"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Harga
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    autoComplete="off"
                    required
                    className="mt-1 border focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    value={price}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 mt-5">
                  <label
                    htmlFor="status"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    autoComplete="off"
                    required
                    className="mt-1 block w-full py-2 px-3 border border-secondary bg-white shadow-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary sm:text-sm"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                    value={status}
                  >
                    <option selected disabled>
                      Pilih Status
                    </option>
                    <option value="open">Open</option>
                    <option value="close">Close</option>
                  </select>
                </div>

                <div className="fallback col-span-6 sm:col-span-4 mt-5">
                  <label
                    htmlFor="status"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Foto Detail Villa
                  </label>
                  <input
                    name="file"
                    type="file"
                    multiple
                    className="mt-1 border focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary block w-full shadow-sm sm:text-sm border-secondary px-3 py-2"
                  />
                </div>
                <div className="dz-message" data-dz-message></div>
              </div>
              <div className="px-4 py-3 text-left sm:px-6">
                <a>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2"
                    onClick={handleSubmit}
                  >
                    Create Room
                  </button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
