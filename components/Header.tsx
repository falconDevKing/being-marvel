import { Box, Stack } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
      <Link href={'/'}>
        <a>
          <Image src="/BeingMarvelLogo.png" alt="being marvel logo" width={100} height={50} style={{ cursor: 'pointer' }} />
        </a>
      </Link>

      <Stack spacing={2} direction={'row'}>
        <Link href={'/'}>
          <a>
            <Box sx={activePath === 'home' ? selectedNav : unSelectedNav}>HOME</Box>
          </a>
        </Link>
        <Link href={'/about'}>
          <a>
            <Box sx={activePath === 'about' ? selectedNav : unSelectedNav}>ABOUT</Box>
          </a>
        </Link>
        <Link href={'/blog'}>
          <a>
            <Box sx={activePath === 'blog' ? selectedNav : unSelectedNav}>BLOG</Box>
          </a>
        </Link>
        <Link href={'/contact'}>
          <a>
            <Box sx={activePath === 'contact' ? selectedNav : unSelectedNav}>CONTACT</Box>
          </a>
        </Link>
      </Stack>
      <Link href={'/'}>
        <a>
          <Box sx={selectedNav}>SIGN IN</Box>
        </a>
      </Link>
    </Box>
  )
}

export default Header
