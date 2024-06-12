import { getXataClient } from '@/libs/xata'
import type { Metadata } from 'next'
import Head from 'next/head'
import { usePathname } from 'next/navigation'

const xata = getXataClient()
export async function generateMetadata({
  params,
}: {
  params: { username: string }
}): Promise<Metadata> {
  const username = decodeURIComponent(params.username).substring(1)
  const data = await xata.db.pages
    .filter('userId.username', username)
    .getFirst()
  return {
    title: data?.title,
    description: data?.description,
    icons: data?.pictureUrl?.url
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased text-sm font-sans">{children}</body>
    </html>
  )
}
