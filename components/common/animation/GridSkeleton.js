import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const ProfileCardSkeleton = styled(Box)(({ theme }) => ({
  width: '180px',
  height: '327px',
  backgroundColor: '#FFF',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px',
}));

const SkeletonWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '15px',
  '& > div': {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
}));

const ProfileSkeletonLoader = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <ProfileCardSkeleton key={index}>
          <Skeleton variant="text" width={120} height={30} />
          <Skeleton variant="circular" width={102} height={102} />
          <Skeleton variant="text" width={110} height={24} />
          <Skeleton variant="text" width={90} height={20} />
          <Skeleton variant="text" width={90} height={20} />
          <SkeletonWrapper>
            <Skeleton variant="circular" />
            <Skeleton variant="circular" />
            <Skeleton variant="circular" />
          </SkeletonWrapper>
        </ProfileCardSkeleton>
      ))}
    </>
  );
};

export default ProfileSkeletonLoader;
