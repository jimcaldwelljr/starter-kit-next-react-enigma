import { BlockData } from '@gocontento/client'
import Button from './Button'
import { FaArrowCircleRight } from 'react-icons/fa'
import Link from 'next/link'
import { IoInformation } from 'react-icons/io5'

export default function Text({ block }: { block: BlockData }) {
  return (
    <div className="py-9 md:py-16">
      <div className="mx-auto flex flex-col items-center text-center">
        <div className="mb-9 flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500">
          <IoInformation className="h-6 w-6 text-white" />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
          className="prose-headings:font-header prose prose-invert"
        />
        {block.fields.button.blocks &&
          block.fields.button.blocks.map((button: BlockData) => {
            return (
              <Link
                className="not-prose group mx-auto mt-12 flex items-center gap-x-3 text-lg font-semibold text-white/80"
                target={button.fields.open_in_new_tab.is_on ? '_blank' : ''}
                href={button.fields.button_url.text}
              >
                <FaArrowCircleRight className="h-5 w-5 text-indigo-400 group-hover:text-teal-200" />
                <span>{button.fields.button_text.text}</span>
              </Link>
            )
          })}
      </div>
    </div>
  )
}
