'use client'

import { Fragment } from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'

import { changeToSegment } from 'utils'

const Breadcrumb = () => {
  const layoutSegments = useSelectedLayoutSegments()
  const segments = layoutSegments.map((segment) => changeToSegment(segment))

  return (
    <div className='mb-5 text-gray-500'>
      <span>Home</span>

      {segments?.map((segment) => (
        <Fragment key={segment}>
          <span className='mx-4'>/</span>

          <span>{segment}</span>
        </Fragment>
      ))}
    </div>
  )
}

export default Breadcrumb
