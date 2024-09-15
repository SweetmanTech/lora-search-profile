'use client'

import { Input } from '@/components/ui/Input'
import { SearchIcon } from 'lucide-react'
import useProfileSearch from '@/hooks/useProfileSearch'
import SearchResults from './SearchResults'

const SearchBarPage = () => {
  const { results, search, setSearch } = useProfileSearch()
  console.log(results)

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 text-center">
      <h1 className="text-4xl font-bold mb-2">Search a Zora Profile</h1>
      <div className="relative">
        <Input
          type="text"
          placeholder="Search any username, ENS, or 0x..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {results.length > 0 && <SearchResults results={results} />}
      </div>
    </div>
  )
}

export default SearchBarPage
