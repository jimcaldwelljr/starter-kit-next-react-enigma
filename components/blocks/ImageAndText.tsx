import { BlockData } from '@gocontento/client'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa'

export default function ImageAndText({ block }: { block: BlockData }) {
  const image =
    block.fields.image.assets.length > 0 ? (
      <div className="col-span-2">
        <Image
          src={block.fields.image.assets[0].asset.url}
          alt={block.fields.image.assets[0].asset.description}
          className="h-full w-full object-cover"
          width={600}
          height={600}
        />
      </div>
    ) : null
  return (
    <div className="py-9">
      <div className="grid items-center space-y-6 md:grid-cols-3 md:space-x-12">
        {block.fields.image_side.selected_option.value === 'left' && (
          <>{image}</>
        )}
        <div className="prose col-span-1">
          <h2 className="font-header text-4xl font-semibold text-white md:text-5xl">
            {block.fields.title.text}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
            className="text-lg text-white/80"
          />
          {block.fields.button.blocks.length > 0 &&
            block.fields.button.blocks.map((button: BlockData) => {
              return (
                <Link
                  className="not-prose group mt-9 flex items-center gap-x-3 text-lg font-semibold text-white/80"
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
          <>{image}</>
        )}
      </div>
    </div>
  )
}
