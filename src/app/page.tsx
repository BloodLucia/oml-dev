import { MaxWidthWrapper } from '@/components/MaxWidthWrapper'

export default function Home() {
  return (
    <>
      <header className="w-full bg-white h-16 border-b fixed top-0 left-0 right-0 shadow-md">
        <MaxWidthWrapper className="h-full flex justify-between items-center">
          <div>
            <a href="/">LOGO</a>
          </div>
        </MaxWidthWrapper>
      </header>
      <main className="mt-16 w-full">
        <MaxWidthWrapper>
          <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
        </MaxWidthWrapper>
      </main>
    </>
  )
}
