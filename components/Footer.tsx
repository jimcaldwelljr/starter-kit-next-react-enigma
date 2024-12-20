import EnigmaIcon from '@/images/EnigmaIcon'
import { BlockData, ContentData } from '@gocontento/client'
import Link from 'next/link'

export default function Footer({ footerNav }: { footerNav: ContentData }) {
  return (
    <div className="flex w-full flex-col space-y-9 border-t border-indigo-500 bg-slate-900 px-6 py-12 md:flex-row md:items-center md:justify-between md:space-y-0 md:px-20">
      <div>
        <EnigmaIcon className="mb-7 h-10 w-10" />
        <p className="text-md mb-12 w-2/3 text-white/80">
          The Next.js <span className="text-teal-200">Enigma</span> starter kit
          by{'  '}
          <Link
            href="https://www.contento.io"
            className="hover:text-teal-200 hover:underline"
          >
            Contento
          </Link>
        </p>
        <p className="flex flex-col gap-y-4 text-xs text-white/80 lg:flex-row">
          <span>
            &copy; {new Date().getFullYear()}{' '}
            <Link href="https://www.contento.io">Contento</Link>{' '}
          </span>
          <span className="hidden px-4 text-teal-200 lg:block">|</span>
          <span className="leading-snug">
            Images Copyright (c) 2021{' '}
            <Link href="https://www.creative-tim.com/learning-lab/react/overview/vision-ui-dashboard/">
              Creative Tim
            </Link>
          </span>
        </p>
      </div>
      <FooterNav footerNav={footerNav} />
    </div>
  )
}

function FooterNav({ footerNav }: { footerNav: ContentData }) {
  return (
    <div className="md:self-end">
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
