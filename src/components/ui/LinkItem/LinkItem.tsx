import { Links } from '@/libs/xata'
import s from './LinkItem.module.scss'
import cn from 'classnames'

interface Props {
  linkItem: Links
}
const LinkItem: React.FC<Props> = ({ linkItem }) => {
  return (
    <div className="relative rounded shadow-[4px_4px_0_#222222] transition-all duration-[0.14s] ease-out delay-0 box-border cursor-pointer hover:shadow-none hover:translate-x-1 hover:translate-y-1">
      <div className="border-2 border-black bg-white rounded box-border h-full w-full absolute left-0 top-0 -z-10"></div>
      <a
        href={linkItem.url ?? '/'}
        className="text-base font-normal text-black rounded min-h-[60px] box-border p-[10px] overflow-hidden decoration-none flex justify-center items-center"
      >
        {linkItem.title}
      </a>
    </div>
  )
}

export default LinkItem
