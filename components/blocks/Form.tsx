import { BlockData } from '@gocontento/client'
import Link from 'next/link'

export default function ContactForm({ block }: { block: BlockData }) {
  return (
    <div className="px-4 md:py-16">
      {/* FORM EXAMPLE - REPLACE WITH YOUR OWN FORM HANDLER */}
      <form className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-x-9 gap-x-9 gap-y-3 md:flex-row">
          <div className="w-full">
            <label
              className="mb-2 block font-semibold text-white/80"
              htmlFor="contact-full-name"
            >
              Full Name
            </label>
            <input
              className="w-full rounded-md border border-white/80 bg-slate-900 px-4 py-2 text-white/80"
              id="contact-full-name"
              type="text"
            />
          </div>
          <div className="w-full">
            <label
              className="mb-2 block font-semibold text-white/80"
              htmlFor="contact-email"
            >
              Email
            </label>
            <input
              className="w-full rounded-md border border-white/80 bg-slate-900 px-4 py-2 text-white/80"
              id="contact-email"
              type="email"
            />
          </div>
        </div>
        <div className="mt-8 w-full">
          <label
            className="mb-2 block font-semibold text-white/80"
            htmlFor="contact-message"
          >
            Message
          </label>
          <textarea
            className="min-h-[200px] w-full rounded-md border border-white/80 bg-slate-900 px-4 py-2 text-white/80"
            id="contact-message"
          />
        </div>
        <div className="mt-6 flex flex-shrink-0 md:mt-12">
          <button
            className="rounded-md bg-indigo-500 px-8 py-3 text-white hover:bg-teal-200 hover:text-slate-900"
            type="button"
          >
            Submit
          </button>
        </div>
        <p className="mt-12 text-sm font-semibold text-white">
          By submitting this form you agree to our{' '}
          <Link href="/" className="text-teal-200 underline">
            terms
          </Link>{' '}
          and{' '}
          <Link href="/" className="text-teal-200 underline">
            privacy policy
          </Link>
        </p>
      </form>
    </div>
  )
}
