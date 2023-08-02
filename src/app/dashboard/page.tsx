import { FC } from 'react';

import TopNav from './components/TopNav';
import SpaceMenu from './components/SpaceMenu';

interface dashboardProps {}

const dashboard: FC<dashboardProps> = () => {
  return (
    <>
  <TopNav />
  <SpaceMenu />
    </>
  )
}

export default dashboard;