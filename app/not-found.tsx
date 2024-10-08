import Link from 'next/link'
import { TbExclamationCircle } from 'react-icons/tb'

export default function NotFound() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center px-4 py-9 sm:px-6 md:px-20 md:py-16">
      <div className="mb-9 flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500">
        <TbExclamationCircle className="h-6 w-6 text-white" />
      </div>
      <h2 className="font-5xl mb-5 font-header font-bold text-white lg:text-6xl">
        Not Found
      </h2>
      <p className="text-white">Could not find requested resource</p>
      <Link
        href="/"
        className="my-9 inline-block rounded-md bg-indigo-500 px-6 py-3 text-white hover:bg-teal-200 hover:text-slate-900"
      >
        Return Home
      </Link>
    </div>
  )
}
