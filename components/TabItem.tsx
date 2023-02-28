import NavLink from './NavLink'
import type { TabItem as TabItemType } from 'types/types'

interface Props {
  tab: TabItemType
}

const TabItem = ({ tab }: Props) => {
  return (
    <li className='inline-block'>
      <NavLink
        href={tab.path}
        className='inline-block px-5 py-2 rounded-2xl mr-5 text-sm bg-gray-100 '
        inactiveClassName='hover:bg-gray-200'
        activeClassName='bg-gray-300'
      >
        {tab.name}
      </NavLink>
    </li>
  )
}

export default TabItem
