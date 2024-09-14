'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { SearchIcon } from 'lucide-react'
import { Avatar, AvatarImage } from '@/components/ui/Avatar'
import { Badge } from '../ui/Badge'
import useProfileSearch from '@/hooks/useProfileSearch'

const filterOptions = ['Ethereum', 'Optimism', 'Base', 'Zora', 'POAP']

const SearchBarPage = () => {
  const [activeFilters, setActiveFilters] = useState(['Ethereum'])
  const { results, search, setSearch } = useProfileSearch()

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter],
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 text-center">
      <h1 className="text-4xl font-bold text-white mb-2">Search to discover actionable insights</h1>
      <p className="text-gray-400 mb-6">
        Analyze NFTs, ERC20s, POAPs, Lens & Farcaster @handles, Warpcast /channels
      </p>
      <div className="relative">
        <Input
          type="text"
          placeholder="Search or paste contracts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

        {results.length > 0 && (
          <div className="absolute w-full mt-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-2 flex flex-wrap gap-2 border-b border-gray-700">
              {filterOptions.map((filter) => (
                <Badge
                  key={filter}
                  variant={activeFilters.includes(filter) ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => toggleFilter(filter)}
                >
                  {filter}
                </Badge>
              ))}
            </div>
            {results.map((result) => (
              <div
                key={result.id}
                className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
              >
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage
                    src={`https://api.dicebear.com/6.x/initials/svg?seed=${result.title}`}
                  />
                </Avatar>
                <div className="flex-grow">
                  <div className="text-sm font-medium text-white">{result.title}</div>
                  <div className="text-xs text-gray-400">{result.subtitle}</div>
                </div>
                <Badge variant="secondary" className="ml-2">
                  {result.type}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBarPage
