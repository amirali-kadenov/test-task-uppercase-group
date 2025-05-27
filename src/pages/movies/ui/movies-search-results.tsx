type Props = {
  search: string
  totalResults: string | undefined
}

export const MoviesSearchResults = ({ search, totalResults }: Props) => {
  return (
    <p>
      You searched for: {search}
      <span className="bg-primary ml-1 text-primary-foreground px-1 py-0.5 rounded text-sm">
        {totalResults} results
      </span>
    </p>
  )
}
