import EnigmaIcon from '@/images/EnigmaIcon'
import { BlockData, ContentData } from '@gocontento/client'
import Link from 'next/link'

export default function Footer({ footerNav }: { footerNav: ContentData }) {
  return (
    <div className="flex w-full flex-col space-y-9 border-t border-indigo-500 bg-slate-900 px-6 py-12 md:flex-row md:items-center md:justify-between md:space-y-0 md:px-28">
      <div>
        <EnigmaIcon className="mb-7 h-10 w-10" />
        <p className="text-md mb-12 w-2/3 text-white/80">
          The Next.js starter kit by{'  '}
          <Link
            href="https://www.contento.io"
            className="font-bold text-teal-200"
          >
            Contento
          </Link>
        </p>
        <p className="text-xs text-white/80">
          &copy; {new Date().getFullYear()} Enigma.
        </p>
      </div>
      <FooterNav footerNav={footerNav} />
    </div>
  )
}

function FooterNav({ footerNav }: { footerNav: ContentData }) {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-teal-200">Links</h3>
      <div className="grid gap-y-4 sm:grid-cols-2 md:gap-x-16">
        {footerNav.fields.nav_links.blocks &&
          footerNav.fields.nav_links.blocks.map((link: BlockData) => (
            <Link
              href={link.fields.link_url.text}
              className="text-md block text-white/80 hover:text-teal-200"
              target={link.fields.open_in_new_tab.is_on ? '_blank' : ''}
              key={link.fields.link_text.text}
            >
              {link.fields.link_text.text}
            </Link>
          ))}
      </div>
    </div>
  )
}
