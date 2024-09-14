import { useEffect, useState } from 'react'

// Mock data for demonstration
const mockResults = [
  { id: 1, title: 'LNRZ - FREE .03 [ sweetman.eth remix ]', subtitle: '0x02...5aef', type: 'NFT' },
  {
    id: 2,
    title: 'Exploring the Developer-Creator Relationship with Sweetman.eth ...',
    subtitle: '0xef...04db',
    type: 'NFT',
  },
]

const useProfileSearch = () => {
  const [results, setResults] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search.length > 0) {
      // In a real application, this would be an API call
      setResults(
        mockResults.filter((result) => result.title.toLowerCase().includes(search.toLowerCase())),
      )
    } else {
      setResults([])
    }
  }, [search])

  return { results, search, setSearch }
}

export default useProfileSearch
