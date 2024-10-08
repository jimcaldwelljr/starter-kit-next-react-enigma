import { BlockData } from '@gocontento/client'
import Image from 'next/image'

export default function ImageBlock({ block }: { block: BlockData }) {
  return (
    <>
      {block.fields.mob_image.assets ? (
        <div className="mx-auto max-w-5xl py-9">
          <Image
            src={block.fields.mob_image.assets[0].asset.url}
            alt={block.fields.mob_image.assets[0].asset.description}
            className="h-full w-full object-cover md:hidden"
            width={600}
            height={600}
          />
          <Image
            src={block.fields.image.assets[0].asset.url}
            alt={block.fields.image.assets[0].asset.description}
            className="hidden h-full w-full object-cover md:block"
            width={1000}
            height={1000}
          />
        </div>
      ) : (
        <div className="mx-auto max-w-5xl py-9">
          <Image
            src={block.fields.image.assets[0].asset.url}
            alt={block.fields.image.assets[0].asset.description}
            className="hidden h-full w-full object-cover md:block"
            width={1000}
            height={1000}
          />
        </div>
      )}
    </>
  )
}
