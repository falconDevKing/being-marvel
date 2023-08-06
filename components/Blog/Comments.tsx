import { Box } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CommentsCard from './CommentsCard'

const Comments = () => {
  return (
    <Box width={'100%'} my={8}>
      <Box width={'85%'} mx="auto">
        {[1, 2, 3, 4].map((element, index) => (
          <CommentsCard key={element} />
        ))}
      </Box>
    </Box>
  )
}

export default Comments
