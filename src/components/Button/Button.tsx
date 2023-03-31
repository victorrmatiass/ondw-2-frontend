import classNames from 'classnames'

type Props = {
  variant?: "primary"|'link'
  children: React.ReactNode
}

export function Button({ variant='primary',children }: Props) {
  return <button className={classNames(
    "rounded-md px-3 py-3 bg-brand-primary-300 hover:bg-brand-primary-400 text-white transition-colors")}>{children}</button>
}