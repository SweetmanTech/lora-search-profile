import { useEffect, useState } from 'react'

const useProfileSearch = () => {
  const [results, setResults] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchResults = async () => {
      if (search.length > 0) {
        try {
          const encodedSearch = encodeURIComponent(search)
          const fetchUrl = `/api/profile?address=${encodedSearch}`
          console.log('SWEETS fetchUrl...', fetchUrl)

          const response = await fetch(fetchUrl)
          console.log('Response status:', response.status)

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }

          const data = await response.json()
          console.log('SWEETS RESPONSE', data.zoraProfile.avatar)
          setResults([data.zoraProfile])
        } catch (error) {
          console.error('Error fetching profile:', error)
          setResults([])
        }
      } else {
        setResults([])
      }
    }

    fetchResults()
  }, [search])

  return { results, search, setSearch }
}

export default useProfileSearch
