import { Badge } from '../ui/Badge'

const SocialBadge = ({ platform, username }) => (
  <Badge variant="outline" className="ml-2 text-white border-white">
    {platform}: {username}
  </Badge>
)

export default SocialBadge
