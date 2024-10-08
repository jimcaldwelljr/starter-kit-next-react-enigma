'use client'

import { BlockData, ContentData } from '@gocontento/client'
import EnigmaLogo from '@/images/EnigmaLogo'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { usePathname } from 'next/navigation'
import { classNames } from '@/utils/ClassNames'
import { useLockBodyScroll } from '@uidotdev/usehooks'

function Logo() {
  return (
    <Link
      href="/"
      className="inline-block w-[128px] hover:opacity-80 lg:-mt-2.5 lg:w-[150px]"
    >
      <EnigmaLogo className="h-auto w-full" />
    </Link>
  )
}

export default function Header({ mainNav }: { mainNav: ContentData }) {
  const pathName = usePathname()
  return (
    <Disclosure as="nav" className="bg-slate-900">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 md:px-20">
            <div className="flex h-20 items-center justify-between md:h-32">
              {/* Logo */}
              <div className="flex flex-shrink-0 items-center">
                <Logo />
              </div>
              <div>
                {/* Desktop Nav */}
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-16">
                  {mainNav.fields.nav_links.blocks.map((item: BlockData) => {
                    if (item.fields.button.is_on) {
                      return (
                        <Disclosure.Button
                          key={item.fields.link_text.text}
                          as={Link}
                          href={item.fields.link_url.text}
                          className="my-9 inline-block rounded-md bg-indigo-500 px-9 py-3 text-white hover:bg-teal-200 hover:text-slate-900"
                          target={
                            item.fields.open_in_new_tab.is_on ? '_blank' : ''
                          }
                        >
                          {item.fields.link_text.text}
                        </Disclosure.Button>
                      )
                    } else {
                      return (
                        <Disclosure.Button
                          key={item.fields.link_text.text}
                          as={Link}
                          href={item.fields.link_url.text}
                          className={classNames(
                            pathName.startsWith(item.fields.link_url.text)
                              ? 'border-b border-b-teal-200 text-teal-200'
                              : 'border-b border-b-transparent text-white hover:border-b hover:border-b-teal-200 hover:text-teal-200',
                            'text-md font-semibold',
                          )}
                          target={
                            item.fields.open_in_new_tab.is_on ? '_blank' : ''
                          }
                        >
                          {item.fields.link_text.text}
                        </Disclosure.Button>
                      )
                    }
                  })}
                </div>
                <div className="flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center text-zinc-600">
                    <span className="absolute" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>
          <MobileNav mainNav={mainNav} pathName={pathName} />
        </>
      )}
    </Disclosure>
  )
}

function MobileNav({
  mainNav,
  pathName,
}: {
  mainNav: ContentData
  pathName: any
}) {
  useLockBodyScroll()
  return (
    <Disclosure.Panel className="absolute h-[calc(100vh-5rem)] w-full border-b border-b-8 border-b-teal-200 bg-slate-900 md:hidden">
      {/* Mobile Nav */}
      <div className="flex flex-col items-center space-y-5 px-4 pb-6 pt-16 sm:px-3">
        {mainNav.fields.nav_links.blocks.map((item: BlockData) => {
          if (item.fields.button.is_on) {
            // This is a toggle in the navLink block in the CMS - it turns the link into a button
            return (
              <div key={item.fields.link_text.text} className="pt-7">
                <Disclosure.Button
                  as={Link}
                  href={item.fields.link_url.text}
                  className="block max-w-max rounded-md bg-indigo-500 px-6 py-3 text-center font-semibold text-white hover:opacity-80"
                  target={item.fields.open_in_new_tab.is_on ? '_blank' : ''}
                >
                  {item.fields.link_text.text}
                </Disclosure.Button>
              </div>
            )
          } else {
            return (
              <Disclosure.Button
                key={item.fields.link_text.text}
                as={Link}
                href={item.fields.link_url.text}
                className={classNames(
                  pathName.startsWith(item.fields.link_url.text)
                    ? 'text-teal-200'
                    : 'text-white hover:text-teal-200',
                  'text-md block font-semibold',
                )}
                target={item.fields.open_in_new_tab.is_on ? '_blank' : ''}
              >
                {item.fields.link_text.text}
              </Disclosure.Button>
            )
          }
        })}
      </div>
    </Disclosure.Panel>
  )
}
