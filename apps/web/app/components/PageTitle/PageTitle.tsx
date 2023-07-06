import title from 'title'

interface IPageTitleProps {
  children: string | string[]
}

export const PageTitle = ({ children = '' }: IPageTitleProps) => {
  const pageTitle = Array.isArray(children) ? children.join(' ') : children

  return (
  <h2 className="text-3xl font-bold tracking-tight mb-4">{title(pageTitle)}</h2>
)}
