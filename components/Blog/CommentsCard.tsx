import { Box, Button } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ChatIcon from '@mui/icons-material/Chat'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ForumIcon from '@mui/icons-material/Forum'
import Image from 'next/image'
import SubCommentsCard from './SubCommentsCard'
import { useState } from 'react'

type CommentsCardProps = {
  comment: any
  subComments: any[]
}

const CommentsCard = ({ comment, subComments }: CommentsCardProps) => {
  const [toComment, setToComment] = useState<boolean>(false)
  return (
    <Box py={1}>
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
                <Box display="flex" alignItems={'center'} px={1} onClick={() => setToComment((prev) => !prev)}>
                  <Box px={1}>Reply</Box>
                  <ChatIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>
        {subComments.map((element, index) => (
          <SubCommentsCard key={index} subComment={element} />
        ))}
      </Box>
      {toComment && (
        <Box width={'85%'} mx="auto" my={2} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
          <textarea
            id="contactMessage"
            placeholder="Write a comment"
            rows={6}
            style={{
              color: '#302F2F',
              backgroundColor: '#fff',
              padding: '16px',
              borderRadius: '4px 0px 0px 4px',
              // outline: 'none',
              // border: 'none',
              width: '100%',
              fontSize: '1.25rem',
              fontFamily: 'Cormorant Garamond',
            }}
          />
          <Box display={'flex'} justifyContent={'space-evenly'}>
            <Button
              sx={{
                bgcolor: '#fff',
                color: '#3367DC',
                p: '8px 16px',
                mx: 'auto',
                my: 2,
                width: 'max-content',
                border: 1,
              }}
              onClick={() => setToComment(false)}
            >
              Cancel
            </Button>
            <Button
              sx={{
                color: '#fff',
                bgcolor: '#3367DC',
                p: '8px 16px',
                mx: 'auto',
                my: 2,
                width: 'max-content',
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default CommentsCard
