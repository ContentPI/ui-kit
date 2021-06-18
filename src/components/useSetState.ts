import { useState, useRef, useEffect, useCallback } from 'react'

const useSetState = (initVal: any) => {
  const [val, setVal] = useState(initVal)
  const cbRef = useRef(() => null)
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }

    if (typeof cbRef.current === 'function') {
      cbRef.current()
    }
  }, [val])

  const setValCB = useCallback((newVal, cb) => {
    cbRef.current = cb
    setVal(newVal)
  }, [])

  return [val, setValCB]
}

export default useSetState
