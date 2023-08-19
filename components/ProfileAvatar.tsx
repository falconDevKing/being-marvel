import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import { Box, Stack, SxProps, Theme } from '@mui/material'

interface AvatarProps {
  name?: string
  bgColor?: string
  sx?: SxProps<Theme> | undefined
  hasIcon?: boolean
  hasImage?: boolean
  src?: string
  icon?: React.ReactNode
}

export const stringToColor = (string: string) => {
  let hash = 0
  let i
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }
  let color = '#'
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */
  return color
}

export default function ProfileAvatar({ name, icon, hasIcon, hasImage, src, sx }: AvatarProps) {
  const stringAvatar = (name: string) => {
    const initials =
      name?.split(' ')?.reduce((accumulator, currentValue, index) => {
        if (index <= 1 && currentValue) {
          return accumulator + currentValue[0]
        } else {
          return accumulator
        }
      }, '' as string) || ''

    return {
      sx: {
        fontWeight: {
          xs: 600,
          sm: 500,
        },
      },
      children: initials.toUpperCase(),
    }
  }

  console.log({ src: src })
  return (
    <>
      <Stack direction={'row'} alignItems="center" spacing={1}>
        {!hasIcon && !hasImage && name && <Avatar {...stringAvatar(name)} />}
        {hasIcon && <Avatar sx={{ ...sx }}>{icon}</Avatar>}
        {src && hasImage && <Avatar sx={{ ...sx }} alt={name} src={src} />}
        <Box fontSize="1.5rem" px={2} fontWeight={600}>
          {name}
        </Box>
      </Stack>
    </>
  )
}
