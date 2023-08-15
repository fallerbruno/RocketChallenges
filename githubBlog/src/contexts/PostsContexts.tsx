import { ReactNode, useEffect, useState, useCallback } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

export interface PostInterface {
  title: string
  body: string
  updated_at: string
  number: number
  comments?: number
  user?: { login: string }
  created_at?: any
  html_url?: string
}

interface PostContextType {
  posts: PostInterface[]
  fetchPosts: (query?: string) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostContextType)

export function PostsProvider({ children }: TransactionProviderProps) {
  const [posts, setPosts] = useState<PostInterface[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    api
      .get(`/search/issues?q=${query}%20repo:fallerbruno/CoffeeDelivery`)
      .then((response) => {
        setPosts(response.data.items)
      })
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
