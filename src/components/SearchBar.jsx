import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search } from "lucide-react"

const SearchBar = ({className}) => {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?query=${query}`)
      setQuery("")
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className={`relative flex items-center ${className}`}
    >
      <input
        type="text"
        placeholder="Hledat ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-1 
                  rounded-lg border border-tawny-olive 
                  bg-scarabeus-sacer/50 text-more-than-a-week placeholder-more-than-a-week 
                  focus:outline-none focus:ring-2 focus:ring-corn-harvest w-64 lg:w-96"
      />
      <button type="submit">
        <Search className=" text-tawny-olive mx-3 w-6 h-6 cursor-pointer" />
      </button>
    </form>
  )
}

export default SearchBar