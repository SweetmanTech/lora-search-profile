import { Badge } from '../ui/Badge'
import SocialBadge from './SocialBadge'

const SocialBadges = ({ result }) => (
  <div className="mt-1 flex flex-wrap gap-1">
    {result.extension?.links?.twitter && (
      <a
        href={`https://twitter.com/${result.extension.links.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialBadge platform="Twitter" username={result.extension.links.twitter} />
      </a>
    )}
    {result.extension?.links?.instagram && (
      <a
        href={`https://instagram.com/${result.extension.links.instagram}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialBadge platform="Instagram" username={result.extension.links.instagram} />
      </a>
    )}
    {result.extension?.links?.farcaster && (
      <a
        href={`https://warpcast.com/${result.extension.links.farcaster}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialBadge platform="Farcaster" username={result.extension.links.farcaster} />
      </a>
    )}
    {result.extension?.links?.website && (
      <Badge variant="outline" className="ml-2 text-white border-white">
        <a
          href={result.extension.links.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          Website
        </a>
      </Badge>
    )}
  </div>
)

export default SocialBadges
