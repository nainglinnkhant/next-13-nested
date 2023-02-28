import { LinkProps } from 'next/link'

interface NavItem {
  name: string
  path: LinkProps
}

interface TabItem extends NavItem {}

interface User {
  id: number
  username: string
  name: string
  email: string
  phone: string
  website: string
}

export type { NavItem, TabItem, User }
