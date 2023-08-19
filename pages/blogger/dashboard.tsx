import { Box } from '@mui/material'
import Layout from '../../components/blogger/BloggerLayout'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useRouter } from 'next/router'
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'

const Dashboard = () => {
  const router = useRouter()

  const navToBlogger = (section: string) => {
    router.push('/blogger/' + section)
  }

  const stats = [
    {
      Icon: TimelineRoundedIcon,
      figure: 70,
      metric: 'Number of Blog Posts',
    },
    {
      Icon: FavoriteRoundedIcon,
      figure: 15.6,
      metric: 'Average like per post',
    },
    {
      Icon: ForumRoundedIcon,
      figure: 70,
      metric: 'Average comment per post',
    },
    {
      Icon: VisibilityRoundedIcon,
      figure: 70,
      metric: 'Average views per post',
    },
  ]

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
          <Box
            display={'flex'}
            alignItems={'center'}
            p={1}
            onClick={() => navToBlogger('new-blog')}
            bgcolor={'#fff'}
            width="max-content"
            fontWeight={700}
            sx={{ cursor: 'pointer' }}
          >
            <AddCircleOutlineIcon color="primary" />
            <Box component="span" px={1}>
              Create a new Blog
            </Box>
          </Box>
        </Box>
        <Box width="100%" display="flex" justifyContent={'space-between'} flexWrap={'wrap'} my={1}>
          {stats.map((stat, index) => {
            const { Icon, figure, metric } = stat
            return (
              <Box display="flex" bgcolor={'#fff'} width="48%" my={1} p={2}>
                <Box width="40%">
                  <Icon color="primary" sx={{ fontSize: '108px', bgcolor: '#F4F7FD', borderRadius: '50%', p: 2 }} />
                </Box>
                <Box textAlign={'center'} width="100%">
                  <Box fontSize="2rem" fontWeight={700}>
                    {figure}
                  </Box>
                  <Box fontSize="1.5rem">{metric}</Box>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Layout>
  )
}

export default Dashboard
