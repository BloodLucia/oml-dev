import cn from 'classnames'

export const MaxWidthWrapper: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'max-sm:max-w-5xl max-sm:px-6 max-w-6xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}
