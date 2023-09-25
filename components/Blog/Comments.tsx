import { Box } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CommentsCard from './CommentsCard'

const Comments = () => {
  return (
    <Box width={'100%'} my={8}>
      <Box width={'85%'} mx="auto">
        {[
          { comment: 'mainComment', subComments: [1, 2] },
          { comment: 'mainComment', subComments: [] },
          { comment: 'mainComment', subComments: [1] },
          { comment: 'mainComment', subComments: [1, 2, 3] },
        ].map((element, index) => {
          const { comment, subComments } = element

          return <CommentsCard key={index} comment={comment} subComments={subComments} />
        })}
      </Box>
    </Box>
  )
}

export default Comments
