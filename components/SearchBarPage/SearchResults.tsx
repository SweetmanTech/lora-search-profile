import { Avatar, AvatarImage } from '../ui/Avatar'
import { Badge } from '../ui/Badge'
import SocialBadges from './SocialBadges'

const SearchResults = ({ results }) => (
  <div className="absolute w-full mt-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    {results.map((result) => (
      <div
        key={result.profileId}
        className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
      >
        <Avatar className="w-10 h-10 mr-3">
          <AvatarImage src={result.avatar} />
        </Avatar>
        <div className="flex-grow text-left">
          <div className="text-sm font-medium text-white">
            {result.displayName || result.username || result.ensName || 'Unknown User'}
          </div>
          <div className="text-xs text-gray-400">{result.description}</div>
          <SocialBadges result={result} />
        </div>
        <Badge variant="secondary" className="ml-2 text-white">
          {result.type}
        </Badge>
      </div>
    ))}
  </div>
)

export default SearchResults
