import * as React from 'react'

import { createContext, ReactNode, useContext, useState } from 'react'

interface LoadingContextInterface {
  loading: boolean
  setLoading: (b: boolean) => void
}

const LoadingContext = createContext<LoadingContextInterface | null>(null)

export interface LoadingProviderProps {
  children: ReactNode
  component?: ReactNode
}

export function LoadingProvider({ children, component }: LoadingProviderProps) {
  const [loading, setLoading] = useState(false)
  const value = { loading, setLoading }
  return (
    <LoadingContext.Provider value={value}>
      {loading && component}
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider')
  }
  return context
}

export function useAsync(func: () => Promise<any>) {
  const { setLoading } = useLoading()
  return async () => {
    setLoading(true)
    func().finally(() => setLoading(false))
  }
}
