import Link from "next/link";

export default function Photo() {
  return (
    <div className="mx-auto text-center min-h-screen flex flex-col justify-center items-center">
      <h1 className='text-xl font-bold'>Silahkan upload 5 foto detail villa anda :</h1>
        <div className="mt-1 w-[600px] mx-auto flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label forHtml="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-elemen1 hover:font-bold focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-secondary">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG or JPG</p>
          </div>
        </div>
        <div className="px-4 py-3 text-right sm:px-6">
                <Link href="/hosted/photo/">
                  <a>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2">Sewakan</button>
                  </a>
                </Link>
              </div>
    </div>
  )
}