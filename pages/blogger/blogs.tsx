import { Box, Stack } from '@mui/material'
import Layout from '../../components/blogger/BloggerLayout'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useRouter } from 'next/router'
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import SearchIcon from '@mui/icons-material/Search'
import PreviewIcon from '@mui/icons-material/Preview'
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import Image from 'next/image'

const Dashboard = () => {
  const router = useRouter()

  return (
    <Layout>
      <Box>
        <Box display={'flex'} justifyContent={'space-between'} py={2}>
          <Box>
            <Box fontSize={'1.5rem'} fontWeight={700}>
              Welcome back, Smith Yarn!
            </Box>
            <Box fontSize={'1.2rem'} color="#C0C0C0">
              Lorem ipsum dolor sit amet, consecte turcing elit.{' '}
            </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'} py={1} px={1} bgcolor={'#fff'} m={1} borderRadius={'4px'}>
            <SearchIcon />
            <input
              id="searchBlogs"
              placeholder="Search Blogs"
              style={{
                color: '#C0C0C0',
                padding: '4px 8px',
                height: '40px',
                borderRadius: '4px 0px 0px 4px',
                outline: 'none',
                border: 'none',
                width: '100%',
                fontSize: '1.25rem',
                fontFamily: 'Cormorant Garamond',
                backgroundColor: '#fff',
              }}
            />
          </Box>
        </Box>
        <Box width="100%" my={1}>
          <Box px={2} py={1} width="100%" display="flex" justifyContent={'space-around'} alignItems={'center'} bgcolor="#fff" my={'2px'}>
            <Box width="50%">Blog Post </Box>
            <Box width="15%" textAlign={'center'}>
              Date Published
            </Box>
            <Box width="15%" textAlign={'center'}>
              Status
            </Box>
            <Box width="15%" textAlign={'center'}>
              Action
            </Box>
          </Box>
          {[1, 2, 3].map((element) => (
            <Box key={element} px={2} py={1} width="100%" display="flex" justifyContent={'space-around'} alignItems={'center'} bgcolor="#fff" my={'2px'}>
              <Box width="50%" display={'flex'} p={1} alignItems={'center'} height="100%">
                <Box width="20%">
                  <Image
                    src="/AboutPicture.png"
                    alt="being marvel logo"
                    layout="responsive"
                    width={60}
                    height={60}
                    style={{ cursor: 'pointer', borderRadius: '50%' }}
                  />
                </Box>
                <Box px={2}>
                  <Box fontSize={'1.5rem'} fontWeight={700}>
                    Lorem ip
                  </Box>
                  <Box>Lorem ipsum dolor sit</Box>
                </Box>
              </Box>
              <Box width="15%" textAlign={'center'}>
                20 Jun, 2023
              </Box>
              <Box width="15%" display="flex" justifyContent={'center'}>
                <Box bgcolor={'#F4F7FD'} p={1} width={'max-content'}>
                  Published
                </Box>
              </Box>
              <Stack width="15%" direction={'row'} justifyContent={'center'} spacing={1}>
                <PreviewIcon fontSize="large" sx={{ color: '#95A8D3', cursor: 'pointer' }} />
                <EditNoteRoundedIcon fontSize="large" sx={{ color: '#6E87DC', cursor: 'pointer' }} />
                <DeleteForeverRoundedIcon fontSize="large" sx={{ color: '#FF000077', cursor: 'pointer' }} />
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  )
}

export default Dashboard
