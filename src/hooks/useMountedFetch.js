import { useEffect } from 'react'
import '@lib/types'

/**
 * @template T
 * @template S
 * @param { UseMountedFetchHandlerType<T, S>[]} handlers
 * @returns
 */
export const useMountedFetch = handlers => {
  handlers.forEach(({ initiator, handler, dependencies }) => {
    useEffect(() => {
      const handleMountedRequests = async () => {
        const data = await initiator()
        handler(data)
      }

      handleMountedRequests()
    }, dependencies)
  })
}
