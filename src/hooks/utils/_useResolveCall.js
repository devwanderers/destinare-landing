import isDeepEqual from 'fast-deep-equal/react'
import { useCallback, useMemo, useState, useRef } from 'react'

export const _useResolveCall = (
    call,
    initialData = null,
    params = {},
    autoFetch = false
) => {
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(initialData)
    const paramsRef = useRef(params)

    if (!isDeepEqual(paramsRef.current, params)) {
        paramsRef.current = params
    }

    const fetch = useCallback(
        async ({
            throwOnError = true,
            params: fetchParams,
            onComplete,
            onError,
            onSuccess,
        } = {}) => {
            const combinedParams = {
                ...params,
                ...fetchParams,
            }
            try {
                setIsFetching(true)
                setError(null)
                const results = await call(combinedParams)

                setData(results)
                if (onSuccess) {
                    onSuccess(results)
                }
                return results
            } catch (error) {
                setData(initialData)
                setError(error)
                if (throwOnError) {
                    throw error
                }
                if (onError) {
                    onError(error)
                }
            } finally {
                setIsFetching(false)
                if (onComplete) {
                    onComplete()
                }
            }
        },
        [call, paramsRef.current]
    )

    const isEmpty = useMemo(() => {
        if (data == null) {
            return true
        }
        if (Array.isArray(data) && data.length === 0) {
            return true
        }
        return false
    }, [data])

    const isLoading = useMemo(() => {
        return isFetching && isEmpty
    }, [isEmpty, isFetching])

    return { isFetching, fetch, isLoading, error, data, setData }
}
