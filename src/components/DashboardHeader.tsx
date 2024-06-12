
import cn from 'classnames'
import { MaxWidthWrapper } from './MaxWidthWrapper'
export const DashboardHeader: React.FC<{className?: string}> = ({className}) => {
  return (
    <header className={cn('w-full h-[60px] fixed top-0 left-0 right-0 border-b bg-white', className)}>
      <div className='flex justify-between items-center h-full max-w-7xl max-sm:px-6 max-sm:w-full mx-auto'>
        header
      </div>
    </header>
  )
}