import { createClient, generateSeo } from '@/lib/contento'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import GeneralPage from '@/components/pages/GeneralPage'
import { ContentData } from '@gocontento/client'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return await createClient()
    .getContentBySlug('home', 'general_page')
    .then((content: ContentData) => {
      return generateSeo(content, {}, content.url?.replace('/home', ''))
    })
    .catch(() => {
      return {}
    })
}

export default async function page() {
  const content = await createClient(draftMode().isEnabled)
    .getContentBySlug('home', 'general_page')
    .catch(() => {
      notFound()
    })

  return <GeneralPage initialContent={content} />
}
