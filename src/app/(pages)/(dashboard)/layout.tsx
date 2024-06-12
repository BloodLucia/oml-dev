import { DashboardHeader } from '@/components/DashboardHeader'

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardHeader />
      <main className="mt-[60px] w-full h-[calc(100vh-60px)] bg-stone-100">
        <div className="h-full grid grid-flow-col auto-cols-auto">
          <aside className='bg-white flex justify-center items-center'>PagePreview</aside>
          <section className='overflow-y-auto h-screen'>
            <div></div>
          </section>
        </div>
      </main>
    </>
  )
}
