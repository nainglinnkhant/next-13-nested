export const changeToSegment = (layoutSegment: string) => {
  const cleanedSegment = layoutSegment.replace(/[^\w\s\d]/gi, ' ')?.trim()

  return cleanedSegment
    .split(' ')
    .map((segment) => `${segment[0].toUpperCase()}${segment.slice(1)}`)
    .join(' ')
}
