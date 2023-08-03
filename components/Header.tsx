import { Box, Stack } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'

type HeaderProps = {
  width: string
}

const Header = ({ width }: HeaderProps) => {
  const router = useRouter()

  const activePath: string =
    router.pathname === '/contact'
      ? 'contact'
      : router.pathname === '/blog'
      ? 'blog'
      : router.pathname === '/about'
      ? 'about'
      : router.pathname === '/'
      ? 'home'
      : ''

  const selectedNav = {
    color: '#302F2F',
    fontSize: '1.2rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    cursor: 'pointer',
  }
  const unSelectedNav = {
    color: '#D8D6D6',
    fontSize: '1.2rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    cursor: 'pointer',
  }

  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={width} mx="auto" py={2}>
      <Image src="/BeingMarvelLogo.png" alt="being marvel logo" width={100} height={50} style={{ cursor: 'pointer' }} />
      <Stack spacing={2} direction={'row'}>
        <Box sx={activePath === 'home' ? selectedNav : unSelectedNav}>HOME</Box>
        <Box sx={activePath === 'about' ? selectedNav : unSelectedNav}>ABOUT</Box>
        <Box sx={activePath === 'blog' ? selectedNav : unSelectedNav}>BLOG</Box>
        <Box sx={activePath === 'contact' ? selectedNav : unSelectedNav}>CONTACT</Box>
      </Stack>
      <Box sx={selectedNav}>SIGN IN</Box>
    </Box>
  )
}

export default Header
