import { BlockData } from '@gocontento/client'
import Button from './Button'
import Markdown from 'react-markdown'
import { FaArrowCircleRight } from 'react-icons/fa'
import Image from '@/utils/Image'

export default function Hero({ block }: { block: BlockData }) {
  return (
    <div className="px-4 pb-9 md:pb-6 lg:pb-9">
      <div className="mx-auto flex flex-col items-center gap-y-2 text-center">
        <div className="prose prose-invert max-w-7xl">
          {block.fields.subtitle.text && (
            <div className="mb-7 inline-flex max-w-max items-center gap-x-3 rounded-full border py-1 pl-1 pr-3 text-sm font-semibold text-white/80">
              <FaArrowCircleRight className="h-5 w-5 text-indigo-400" />
              <span>{block.fields.subtitle.text}</span>
            </div>
          )}
          <h1 className="max-w-4xl text-pretty font-header text-4xl font-bold text-white md:text-5xl/[1.2em] lg:text-7xl/[1.2em] [&>strong]:text-teal-200 [&>strong]:[font-weight:inherit]">
            <Markdown disallowedElements={['p']} unwrapDisallowed={true}>
              {block.fields.title.text}
            </Markdown>
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: block.fields.text.text }}
            className="mx-auto max-w-prose text-pretty text-base text-white/80 md:text-lg"
          />
          {block.fields.button.blocks &&
            block.fields.button.blocks.map((button: BlockData) => {
              return (
                <Button key={button.fields.button_text.text} button={button} />
              )
            })}
        </div>
        {block.fields.image.assets.length > 0 && (
          <div className="max-w-7xl">
            <Image
              asset={block.fields.image.assets[0].asset}
              className="h-full w-full object-cover"
              apiParams="fit=crop&w=1200&dpr=2"
            />
          </div>
        )}
      </div>
    </div>
  )
}
