import NavLink from './NavLink'
import type { User } from 'types/types'

interface Props {
  user: User
}

const UserLink = ({ user }: Props) => {
  return (
    <li key={user.id}>
      <NavLink
        href={`/new-users/${user.id}`}
        className='block mb-2'
        activeClassName='text-teal-500'
      >
        {user.username}
      </NavLink>
    </li>
  )
}

export default UserLink
