import { Box } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatIcon from '@mui/icons-material/Chat'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ForumIcon from '@mui/icons-material/Forum'
import Image from 'next/image'

const CommentsCard = () => {
  return (
    <Box border="1px solid #C0C0C0" p={2} borderRadius={'16px'} display={'flex'} my={1}>
      <Box width="60px" height="60px">
        <Image src="/AudioPicture1.png" alt="commenter's picture" layout="responsive" width={148} height={148} style={{ borderRadius: '50%' }} />
      </Box>
      <Box px={2} width="100%">
        <Box>Name</Box>
        <Box py={1}>Thank you soooo much!</Box>
        <Box display={'flex'} justifyContent={'space-between'} width="100%">
          <Box display="flex" alignItems={'center'} color={'#C0C0C0'}>
            <Box display="flex" alignItems={'center'} px={1}>
              <AccessTimeIcon />
              <Box px={1}>2 months ago</Box>
            </Box>

            <Box display="flex" alignItems={'center'} color={'#C0C0C0'} px={1}>
              <Box display="flex" alignItems={'center'}>
                <FavoriteIcon />
                <Box px={1}>750 likes</Box>
              </Box>
              <Box display="flex" alignItems={'center'} px={1}>
                <ForumIcon />
                <Box px={1}>28 replies</Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems={'center'} color={'#C0C0C0'}>
            <Box display="flex" alignItems={'center'} color={'#C0C0C0'} px={1}>
              <Box display="flex" alignItems={'center'}>
                <Box px={1}>Like</Box>
                <FavoriteBorderIcon />
              </Box>
              <Box display="flex" alignItems={'center'} px={1}>
                <Box px={1}>Reply</Box>
                <ChatIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CommentsCard
