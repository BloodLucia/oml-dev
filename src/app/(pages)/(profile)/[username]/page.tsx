'use client'
import { redirect, usePathname } from 'next/navigation'
import { Links, Pages } from '@/libs/xata'
import useSWR from 'swr'
import axios from 'axios'
import Image from 'next/image'
import { cache } from 'react'
import { JetBrains_Mono } from 'next/font/google'
import cn from 'classnames'
import LinkItem from '@/components/ui/LinkItem'

const jetBrains = JetBrains_Mono({ subsets: ['latin'], weight: '400' })

type ProfileData = {
  profile: Pages
  links: Links[]
}

export default ({ params }: { params: { username: string } }) => {
  const path = usePathname()
  const username = decodeURIComponent(params.username).substring(1)

  if (!path.startsWith('/@')) {
    const newPath = `/@${path.replace(/^\//, '')}`
    return redirect(newPath)
  }

  const { data, isLoading, error } = useSWR(
    `/api/profile/${username}`,
    cache(async (path: string) => {
      console.log(path)
      const data = (await axios.get<ProfileData>(path)).data
      return data
    })
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>error...</div>
  }

  if (data) {
    // document.title = data.profile.title!
    return (
      <div
        className={cn('flex justify-center min-h-screen', jetBrains.className)}
      >
        <div className=" mt-8 pb-[100px] w-[680px] max-sm:px-6 z-10">
          <Image
            className="block w-24 h-24 rounded-full mx-auto object-cover cursor-pointer"
            src={data.profile.pictureUrl!.url!}
            alt={data.profile.title!}
            width={96}
            height={96}
            decoding="async"
            loading="lazy"
          />
          <h1 className="text-center font-bold text-xl mt-4">
            {data.profile.title}
          </h1>
          <h2 className="text-center font-normal text-base leading-[22px] mt-3 text-wrap">
            {data.profile.description}
          </h2>
          <div className="mt-8 flex flex-col items-stretch gap-6">
            {data.links &&
              data.links.map((link) => {
                return <LinkItem key={link.id} linkItem={link} />
              })}
          </div>
        </div>
      </div>
    )
  }
}
