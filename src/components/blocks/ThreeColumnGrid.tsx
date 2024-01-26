import { BlockData } from "@gocontento/client";
import Link from "next/link";

export default function ThreeColumnGrid({ block }: { block: BlockData }) {
  return (
    <div className="py-9 md:py-16">
      <div className="prose">
        <h2 className="text-3xl font-semibold mb-5">
          {block.fields.title.text}
        </h2>
        {block.fields.text.text && (
          <p className="text-lg">{block.fields.text.text}</p>
        )}
      </div>
      <div className="grid md:grid-cols-3 md:space-x-6 space-y-4 md:space-y-0 pt-9 prose max-w-none">
        {block.fields.content.blocks.map((card: BlockData) => (
          <div
            key={card.fields.title.text}
            className="bg-zinc-100 p-6 flex flex-col"
          >
            <h3 className="font-semibold text-xl">{card.fields.title.text}</h3>
            <p className="text-lg">{card.fields.text.text}</p>
            {card.fields.button.blocks.length > 0 && (
              <Link
                href={card.fields.button.blocks[0].fields.button_url.text}
                className="text-zinc-600 text-md font-semibold my-5 hover:opacity-80 not-prose"
                target={
                  card.fields.button.blocks[0].fields.open_in_new_tab.is_on
                    ? "_blank"
                    : ""
                }
              >
                {card.fields.button.blocks[0].fields.button_text.text}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
