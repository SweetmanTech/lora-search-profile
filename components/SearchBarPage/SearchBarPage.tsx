'use client'

import { Input } from '@/components/ui/Input'
import { SearchIcon } from 'lucide-react'
import { Avatar, AvatarImage } from '@/components/ui/Avatar'
import { Badge } from '../ui/Badge'
import useProfileSearch from '@/hooks/useProfileSearch'

const SearchBarPage = () => {
  const { results, search, setSearch } = useProfileSearch()

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 text-center">
      <h1 className="text-4xl font-bold text-white mb-2">Search a Zora Profile</h1>
      <div className="relative">
        <Input
          type="text"
          placeholder="Search any username, ENS, or 0x..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

        {results.length > 0 && (
          <div className="absolute w-full mt-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {results.map((result) => (
              <div
                key={result.profileId}
                className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
              >
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src={result.avatar} />
                </Avatar>
                <div className="flex-grow">
                  <div className="text-sm font-medium text-white">{result.displayName}</div>
                  <div className="text-xs text-gray-400">{result.description}</div>
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
