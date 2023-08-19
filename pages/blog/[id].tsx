import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Stack } from '@mui/material'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BlogCaption from '../../components/Blog/BlogCaption'
import BlogContent from '../../components/Blog/BlogContent'
import TrendingBlog from '../../components/Blog/TrendingBlog'
import FeaturedBlog from '../../components/Blog/FeaturedBlog'
import Comments from '../../components/Blog/Comments'
import Comment from '../../components/Blog/Comment'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'

const BlogPost = () => {
  const [openSignin, setOpenSignin] = useState<boolean>(false)

  const closeSignin = () => {
    setOpenSignin(false)
  }

  return (
    <Box color="#2c2c2c">
      <Head>
        <title>Being Marvel</title>
        <meta name="description" content="A lifestyle Blog" />
        <link rel="icon" href="/BeingMarvelLogo.png" />
      </Head>

      <Header width={'85%'} />

      <Box display={'flex'} width={'85%'} mx={'auto'} mt={4} py={1}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/">HOME</Link>
          <Link href="/blog">BLOG</Link>
          <Box color="black" fontWeight={600}>
            FIRST BLOG POST
          </Box>
        </Breadcrumbs>
      </Box>
      <BlogCaption />
      <Box width={'85%'} mx={'auto'} py={4}>
        <Box display="flex" alignItems={'center'} color={'#C0C0C0'}>
          <Box display="flex" alignItems={'center'}>
            <AccessTimeIcon /> <Box px={1}>2 months ago</Box>
          </Box>
          <Box display="flex" alignItems={'center'} px={1}>
            <FavoriteBorderIcon /> <Box px={1}>750 likes</Box>
          </Box>
        </Box>
        <Box fontSize={'1.5rem'} fontWeight={700} color="#000">
          FIRST BLOG POST
        </Box>
      </Box>

      <Box display={'flex'} width="85%" mx={'auto'} py={1} justifyContent={'space-between'}>
        <Box width={'65%'}>
          <BlogContent />
        </Box>
        <Box width="33%">
          <Box>
            <TrendingBlog />
          </Box>
          <Box>
            <FeaturedBlog />
          </Box>
        </Box>
      </Box>

      <Comment />

      <Comments />

      <Footer width={'85%'} />
    </Box>
  )
}

export default BlogPost
