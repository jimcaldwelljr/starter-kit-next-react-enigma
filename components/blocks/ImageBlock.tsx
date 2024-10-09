import { BlockData } from '@gocontento/client'
import Image from '@/utils/Image'

export default function ImageBlock({ block }: { block: BlockData }) {
  return (
    <>
      {block.fields.mob_image.assets ? (
        <div className="mx-auto max-w-5xl px-4 py-9">
          <Image
            asset={block.fields.mob_image.assets[0].asset}
            className="h-full w-full object-cover md:hidden"
            apiParams="fit=crop&w=650&dpr=2"
          />
          <Image
            asset={block.fields.image.assets[0].asset}
            className="hidden h-full w-full object-cover md:block"
            apiParams="fit=crop&w=1200&dpr=2"
          />
        </div>
      ) : (
        <div className="mx-auto max-w-5xl px-4 py-9">
          <Image
            asset={block.fields.image.assets[0].asset}
            className="h-full w-full object-cover"
            apiParams="fit=crop&w=1200&dpr=2"
          />
        </div>
      )}
    </>
  )
}
