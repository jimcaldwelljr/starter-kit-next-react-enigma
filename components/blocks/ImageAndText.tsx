import { BlockData } from '@gocontento/client'
import Image from '@/utils/Image'
import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa'

export default function ImageAndText({ block }: { block: BlockData }) {
  const image =
    block.fields.image.assets.length > 0 ? (
      <Image
        asset={block.fields.image.assets[0].asset}
        className="h-full w-full object-cover"
        apiParams="fit=crop&w=750&dpr=2"
      />
    ) : null
  return (
    <div className="px-4 pb-9 lg:py-9">
      <div className="mx-auto flex flex-col gap-y-6 lg:grid lg:max-w-7xl lg:flex-none lg:grid-cols-5 lg:items-center">
        {block.fields.image_side.selected_option.value === 'left' && (
          <div className="col-span-3 lg:-translate-x-[60px]">{image}</div>
        )}
        <div className="prose prose-invert lg:col-span-2">
          <h2 className="text-pretty font-header font-semibold text-white md:text-4xl/[1.1em]">
            {block.fields.title.text}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
            className="text-pretty text-base text-white/80 md:text-lg"
          />
          {block.fields.button.blocks.length > 0 &&
            block.fields.button.blocks.map((button: BlockData) => {
              return (
                <Link
                  key={`button-${button.fields.button_url.text}`}
                  className="not-prose group mt-12 flex items-center gap-x-3 text-lg font-semibold text-white/80"
                  target={button.fields.open_in_new_tab.is_on ? '_blank' : ''}
                  href={button.fields.button_url.text}
                >
                  <FaArrowCircleRight className="h-5 w-5 text-indigo-400 group-hover:text-teal-200" />
                  <span>{button.fields.button_text.text}</span>
                </Link>
              )
            })}
        </div>
        {block.fields.image_side.selected_option.value === 'right' && (
          <div className="order-first lg:order-none lg:col-span-3 lg:translate-x-[60px]">
            {image}
          </div>
        )}
      </div>
    </div>
  )
}
