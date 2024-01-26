import { BlockData, ContentData } from "@gocontento/client";
import Link from "next/link";

export default function Footer({ footerNav }: { footerNav: ContentData }) {
  return (
    <div className="w-full flex flex-col md:flex-row space-y-9 md:space-y-0 md:justify-between md:items-center px-6 md:px-28 py-9 bg-zinc-200/40">
      <FooterNav footerNav={footerNav} />
      <div>
        <p className="text-md text-zinc-600 font-semibold">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
}

function FooterNav({ footerNav }: { footerNav: ContentData }) {
  return (
    <div className="flex-col md:flex-row flex gap-6">
      {footerNav.fields.nav_links.blocks &&
        footerNav.fields.nav_links.blocks.map((link: BlockData) => (
          <Link
            href={link.fields.link_url.text}
            className="text-zinc-600 hover:opacity-80 text-md font-semibold block"
            target={link.fields.open_in_new_tab.is_on ? "_blank" : ""}
            key={link.fields.link_text.text}
          >
            {link.fields.link_text.text}
          </Link>
        ))}
    </div>
  );
}
