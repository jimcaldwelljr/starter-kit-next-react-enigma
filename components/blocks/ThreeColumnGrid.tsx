import Icons from '@/utils/Icons'
import { BlockData } from '@gocontento/client'
import Link from 'next/link'

export default function ThreeColumnGrid({ block }: { block: BlockData }) {
  return (
    <div className="px-4 py-9 md:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="prose max-w-none gap-x-6 space-y-9 pt-6 md:gap-y-16 md:space-y-0 md:pt-16 lg:grid lg:grid-cols-3">
          {block.fields.content.blocks.map((card: BlockData) => (
            <div
              key={card.fields.title.text}
              className="mx-auto flex max-w-sm flex-col bg-slate-900 py-4 md:max-w-2xl md:flex-grow md:p-6 lg:pl-0"
            >
              <div className="mb-5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500">
                <Icons
                  iconName={card.fields.icon.selected_option.value}
                  className="h-6 w-6 text-white"
                />
              </div>
              <h3 className="mt-3 font-header text-xl font-semibold text-white lg:text-2xl">
                {card.fields.title.text}
              </h3>
              <p className="text-pretty text-base text-white/80">
                {card.fields.text.text}
              </p>
              {card.fields.cta.blocks.length > 0 && (
                <Link
                  href={card.fields.cta.blocks[0].fields.link_url.text}
                  className="text-md not-prose mt-4 flex font-semibold text-white/80 hover:text-teal-200 md:flex-grow md:items-end"
                  target={
                    card.fields.cta.blocks[0].fields.open_in_new_tab.is_on
                      ? '_blank'
                      : ''
                  }
                >
                  {card.fields.cta.blocks[0].fields.link_text.text}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
