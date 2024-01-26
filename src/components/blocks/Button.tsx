import { BlockData } from "@gocontento/client";
import Link from "next/link";

export default function Button({ button }: { button: BlockData }) {
  return (
    <Link
      href={button.fields.button_url.text}
      className="bg-zinc-700 px-6 py-3 text-white inline-block my-5 hover:opacity-80 not-prose"
      target={button.fields.open_in_new_tab.is_on ? "_blank" : ""}
    >
      {button.fields.button_text.text}
    </Link>
  );
}
