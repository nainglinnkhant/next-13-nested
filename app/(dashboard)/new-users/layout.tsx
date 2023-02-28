import { ReactNode, use } from 'react'

import UserLink from '@components/UserLink'
import type { User } from 'types/types'

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

const Layout = ({ children }: { children: ReactNode }) => {
  const users = use(getUsers()) as User[]

  return (
    <div className='flex'>
      <ul className='w-64'>
        {users.map((user) => (
          <UserLink key={user.id} user={user} />
        ))}
      </ul>

      {children}
    </div>
  )
}

export default Layout
