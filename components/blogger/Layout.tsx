import { Box, Divider } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import ListAltIcon from '@mui/icons-material/ListAlt'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()

  const navToBlogger = (section: string) => {
    router.push('/blogger/' + section)
  }

  const activePath: string =
    router.pathname === '/blogger/dashboard'
      ? 'dashboard'
      : router.pathname === '/blogger/new-blog'
      ? 'new-blog'
      : router.pathname === '/blogger/blogs'
      ? 'blogs'
      : router.pathname === '/blogger/profile'
      ? 'profile'
      : ''

  const selectedNav = {
    color: '#302F2F',
    fontSize: '1.2rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    cursor: 'pointer',
    '&:hover': {
      bgcolor: '#F9FBFE',
    },
  }

  const unSelectedNav = {
    // color: '#D8D6D6',
    fontSize: '1.2rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    cursor: 'pointer',
    '&:hover': {
      bgcolor: '#F9FBFE',
    },
  }

  return (
    <Box display="flex">
      <Box width={'20%'} p={'32px 16px 16px 32px'} height="100vh">
        <Link href={'/'}>
          <a>
            <Image src="/BeingMarvelLogo.png" alt="being marvel logo" width={100} height={50} style={{ cursor: 'pointer' }} />
          </a>
        </Link>
        <Box pt={2}>
          <Box py={3}>
            <Box
              display={'flex'}
              alignItems={'center'}
              p={1}
              sx={activePath === 'dashboard' ? selectedNav : unSelectedNav}
              onClick={() => navToBlogger('dashboard')}
            >
              <SpaceDashboardIcon color="primary" />
              <Box component="span" px={1}>
                Dashboard
              </Box>
            </Box>
          </Box>
          <Box>
            <Box py={2}>
              <Box>Manage Blog Posts</Box>
              <Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  p={1}
                  sx={activePath === 'new-blog' ? selectedNav : unSelectedNav}
                  onClick={() => navToBlogger('new-blog')}
                >
                  <AddCircleOutlineIcon color="primary" />
                  <Box component="span" px={1}>
                    New Blog
                  </Box>
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  p={1}
                  sx={activePath === 'blogs' ? selectedNav : unSelectedNav}
                  onClick={() => navToBlogger('blogs')}
                >
                  <ListAltIcon color="primary" />
                  <Box component="span" px={1}>
                    Blogs
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box py={2}>
              <Box>Manage Account</Box>
              <Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  p={1}
                  sx={activePath === 'profile' ? selectedNav : unSelectedNav}
                  onClick={() => navToBlogger('profile')}
                >
                  <PersonOutlineIcon color="primary" />
                  <Box component="span" px={1}>
                    Profile
                  </Box>
                </Box>
                <Box display={'flex'} alignItems={'center'} p={1} sx={activePath === 'logout' ? selectedNav : unSelectedNav}>
                  <LogoutIcon color="primary" />
                  <Box component="span" px={1}>
                    Logout
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box width="100%" borderLeft={'1px solid #CCC'}>
        <Box bgcolor="#F4F7FD" height="100%">
          <Box bgcolor="#fff" display={'flex'} justifyContent={'flex-end'} alignItems={'center'} px={2} py={1} borderBottom={'1px solid #CCC'}>
            <Box display={'flex'} alignItems={'center'}>
              <Box width="60px">
                <Image src="/AboutPicture.png" alt="being marvel logo" width={60} height={60} style={{ cursor: 'pointer', borderRadius: '50%' }} />
              </Box>
              <Box fontSize={'1.5rem'} px={2}>
                Smith Yarn
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box px={2} py={1} bgcolor={'#6E87DC88'} mx={2} color="#fff" fontWeight={700}>
              Logout
            </Box>
          </Box>
          <Box p={4}>{children}</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
