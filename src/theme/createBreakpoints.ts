import { IBreakpoints, sizeUnits } from '@types'

const mediaQueries = ['xSmall', 'small', 'medium', 'large', 'xLarge'] as const
type MediaQueries = typeof mediaQueries[number]

const breakpointsDefaultConfig = {
  keys: {
    xSmall: 0,
    small: 576,
    medium: 768,
    large: 992,
    xLarge: 1200
  },
  unit: sizeUnits[0],
  step: 5,
  up: (key: MediaQueries) => `${key}`,
  down: (key: MediaQueries) => `${key}`,
  between: (start: MediaQueries, end: MediaQueries) => `${start}${end}`,
  only: (key: MediaQueries) => `${key}`,
  width: (width: number) => `${width}`
}

type QueryTypes = 'min' | 'max'

const createBreakpoints = (breakpoints = breakpointsDefaultConfig): IBreakpoints => {
  const { keys, unit, step } = breakpoints

  const generateMediaQuery = (type: QueryTypes, width: number) => {
    return `@media (${type}-width:${width}${unit})`
  }

  const getKeyValue = (key: MediaQueries): number => {
    const keyValue = keys[key] ? keys[key] : 0
    return keyValue
  }

  const getKeyIndex = (key: MediaQueries): number => {
    const keyIndex = mediaQueries.indexOf(key)
    return keyIndex
  }

  const up = (key: MediaQueries) => {
    const width = getKeyValue(key)
    return generateMediaQuery('min', width)
  }

  const down = (key: MediaQueries) => {
    const width = getKeyValue(key)
    return generateMediaQuery('max', width - step / 100)
  }

  const between = (start: MediaQueries, end: MediaQueries) => {
    const startValue = getKeyValue(start)
    const endValue = getKeyIndex(end) !== -1 ? getKeyValue(end) : 0

    return (
      `${generateMediaQuery('min', startValue)} and ` +
      `${generateMediaQuery('max', endValue - step / 100)}`
    )
  }

  const only = (key: MediaQueries) => {
    const keyLength = Object.keys(keys).length

    const start = key
    const end = mediaQueries[getKeyIndex(key) + 1]

    if (getKeyIndex(key) + 1 < keyLength) {
      return between(start, end)
    }

    return up(key)
  }

  const width = (width: number) => {
    return generateMediaQuery('min', width)
  }

  return {
    keys,
    unit,
    step,
    up,
    down,
    between,
    only,
    width
  }
}

export default createBreakpoints
