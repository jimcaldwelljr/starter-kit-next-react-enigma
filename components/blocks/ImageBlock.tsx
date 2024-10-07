import { BlockData } from '@gocontento/client'
import Image from 'next/image'

export default function ImageBlock({ block }: { block: BlockData }) {
  return block.fields.image.assets.length > 0 ? (
    <div className="mx-auto max-w-5xl py-9">
      <Image
        src={block.fields.image.assets[0].asset.url}
        alt={block.fields.image.assets[0].asset.description}
        className="h-full w-full object-cover"
        width={1000}
        height={1000}
      />
    </div>
  ) : null
}
