import { ReactNode } from 'react'

import Tabs from '@components/Tabs'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Tabs />

      <div className='mt-5 ml-2'>{children}</div>
    </>
  )
}

export default Layout
