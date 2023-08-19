import { Box } from '@mui/material'
import Image from 'next/image'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded'
import { useRouter } from 'next/router'

const AudioCard = () => {
  const router = useRouter()

  const navToBlogPost = () => {
    router.push('/blog/1')
  }

  return (
    <Box display={'flex'} p={2} bgcolor="#F4F7FD" borderRadius="24px" width={'31%'} mx="auto" my={2} alignItems={'center'}>
      <Box width="50%" borderRadius={'50%'} boxShadow={'1px 1px 1px 1px  #f4f7fd'}>
        <Image src="/AudioPicture1.png" alt="Audio Picture" layout="responsive" height={148} width={148} style={{ borderRadius: '50%', cursor: 'pointer' }} />
      </Box>
      <Box pl={2}>
        <Box fontWeight={700} color="#2C2C2C" lineHeight={'1.5rem'} fontSize={'1.3rem'}>
          Lorem ipsum dolor, sit amet conset adipisicing elit.
        </Box>

        <Box display={'flex'} alignItems={'center'} py={2} onClick={navToBlogPost} sx={{ cursor: 'pointer' }}>
          <PlayArrowRoundedIcon sx={{ color: '#95A8D3', bgcolor: '#fff', borderRadius: '50%' }} />
          <Box component={'span'} px={1} fontWeight={700} fontSize={'0.8rem'}>
            Listen now
          </Box>
          <Box color="#B6B9C0" component="span">
            10 minutes
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AudioCard
