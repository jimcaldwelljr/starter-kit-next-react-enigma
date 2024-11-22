import './globals.css'
import { createClient } from '@/lib/contento'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Space_Grotesk, Raleway } from 'next/font/google'
import AnnouncementBar from '@/components/blocks/AnnouncementBar'

const SpaceGroteskFont = Space_Grotesk({
  variable: '--font-space-grotesk',
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
})

const RalewayFont = Raleway({
  variable: '--font-raleway',
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const mainNavId = process.env.SITE_MAIN_NAV_ID ?? false
  const footerNavId = process.env.SITE_FOOTER_NAV_ID ?? false

  if (!mainNavId) {
    throw new Error(
      'No mainNav ID found - SITE_MAIN_NAV_ID - Please ensure you have created one in Contento and copied the ID to your .env file.',
    )
  }

  if (!footerNavId) {
    throw new Error(
      'No FooterNav ID found - SITE_FOOTER_NAV_ID - Please ensure you have created one in Contento and copied the ID to your .env file.',
    )
  }

  const mainNav = await createClient()
    .getContentById(mainNavId)
    .catch(() => {
      throw new Error(
        'No main nav found in Contento that matches the SITE_MAIN_NAV_ID',
      )
    })

  const footerNav = await createClient()
    .getContentById(footerNavId)
    .catch(() => {
      throw new Error(
        'No footer nav found in Contento that matches the SITE_FOOTER_NAV_ID',
      )
    })

  const announcementBar = await createClient().getContentByType({
    contentType: 'announcement_bar',
  })

  return (
    <html
      lang="en"
      className={`${SpaceGroteskFont.variable} ${RalewayFont.variable} h-full font-sans antialiased`}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-slate-900">
        <div className="flex w-full flex-col">
          {announcementBar && (
            <AnnouncementBar block={announcementBar.content[0]} />
          )}
          <Header mainNav={mainNav} />
          <main className="flex-auto">{children}</main>
          <Footer footerNav={footerNav} />
        </div>
      </body>
    </html>
  )
}
