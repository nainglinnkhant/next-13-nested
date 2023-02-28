import { use } from 'react'

import UserInfo from '@components/UserInfo'
import type { User } from 'types/types'

const getUser = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return response.json()
}

const Page = ({ params }: { params: { id: string } }) => {
  const user = use(getUser(params.id)) as User

  return (
    <div>
      <UserInfo label='Name' value={user.name} />
      <UserInfo label='Email' value={user.email} />
      <UserInfo label='Phone' value={user.phone} />
      <UserInfo label='Website' value={user.website} />
    </div>
  )
}

export default Page
