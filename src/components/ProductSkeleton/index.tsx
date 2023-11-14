import React from 'react'
import  { Skeleton } from '@mui/material';

const index = () => {
  return (
    <div>
        <Skeleton data-testid='skeleton-image' variant="rounded" width={210} height={130} />
        <Skeleton data-testid='skeleton-text' sx={{ fontSize: '1rem' }} variant="text" />
        <Skeleton data-testid='skeleton-rounded' variant="rounded" width={110} height={13} />
        <Skeleton data-testid='skeleton-button' sx={{marginTop:1}} variant="rounded" width={210} height={35} />
    </div>
  )
}

export default index