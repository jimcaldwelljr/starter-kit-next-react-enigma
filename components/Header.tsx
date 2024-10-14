'use client'

import { BlockData, ContentData } from '@gocontento/client'
import EnigmaLogo from '@/images/EnigmaLogo'
import Link from 'next/link'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { usePathname } from 'next/navigation'
import { classNames } from '@/utils/ClassNames'
import { useState } from 'react'

export default function Header({ mainNav }: { mainNav: ContentData }) {
  const pathName = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-slate-900">
      <nav
        aria-label="Global"
        className="mx-auto flex h-20 items-center justify-between px-4 sm:px-6 md:px-20 lg:h-32"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="inline-block w-[128px] hover:opacity-80 lg:-mt-2.5 lg:w-[150px]"
          >
            <span className="sr-only">Enigma</span>
            <EnigmaLogo className="h-auto w-full" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white/80"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden items-center lg:flex lg:gap-x-12">
          {mainNav.fields.nav_links.blocks.map((item: BlockData) => {
            if (item.fields.button.is_on) {
              return (
                <Link
                  key={item.fields.link_text.text}
                  href={item.fields.link_url.text}
                  className="my-9 inline-block rounded-md bg-indigo-500 px-9 py-3 text-white hover:bg-teal-200 hover:text-slate-900"
                  target={item.fields.open_in_new_tab.is_on ? '_blank' : ''}
                >
                  {item.fields.link_text.text}
                </Link>
              )
            } else {
              return (
                <Link
                  key={item.fields.link_text.text}
                  href={item.fields.link_url.text}
                  className={classNames(
                    pathName.startsWith(item.fields.link_url.text)
                      ? 'border-b border-b-teal-200 text-teal-200'
                      : 'border-b border-b-transparent text-white hover:border-b hover:border-b-teal-200 hover:text-teal-200',
                    'text-md font-semibold',
                  )}
                  target={item.fields.open_in_new_tab.is_on ? '_blank' : ''}
                >
                  {item.fields.link_text.text}
                </Link>
              )
            }
          })}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-900 px-4 sm:px-6">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className="inline-block w-[128px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Enigma</span>
              <EnigmaLogo className="h-auto w-full" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-12">
            <div className="flex flex-col items-center space-y-5 py-6">
              {mainNav.fields.nav_links.blocks.map((item: BlockData) => {
                if (item.fields.button.is_on) {
                  return (
                    <div key={item.fields.link_text.text} className="pt-7">
                      <Link
                        href={item.fields.link_url.text}
                        onClick={() => setMobileMenuOpen(false)}
                        className="inline-block rounded-md bg-indigo-500 px-9 py-3 text-center text-white"
                        target={
                          item.fields.open_in_new_tab.is_on ? '_blank' : ''
                        }
                      >
                        {item.fields.link_text.text}
                      </Link>
                    </div>
                  )
                } else {
                  return (
                    <Link
                      key={item.fields.link_text.text}
                      href={item.fields.link_url.text}
                      onClick={() => setMobileMenuOpen(false)}
                      className={classNames(
                        pathName.startsWith(item.fields.link_url.text)
                          ? 'border-b border-b-teal-200 text-teal-200'
                          : 'border-b border-b-transparent text-white',
                        'text-md font-semibold',
                      )}
                      target={item.fields.open_in_new_tab.is_on ? '_blank' : ''}
                    >
                      {item.fields.link_text.text}
                    </Link>
                  )
                }
              })}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
