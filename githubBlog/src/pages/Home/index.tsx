import { Card } from '../../components/Card'
import { Container, ContainerSearch, GridContainer, Main } from './styles'
import { CardContent } from './components/CardContent'
import SearchInput from '../../components/SearchInput'
import { useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../contexts/PostsContexts'

export function Home() {
  const [search, setSearch] = useState('')

  const posts = useContextSelector(PostsContext, (context) => {
    return context.posts
  })

  const fetchPosts = useContextSelector(PostsContext, (context) => {
    return context.fetchPosts
  })

  useEffect(() => {
    const temp = search.split(' ')
    if (temp.length > 0) {
      temp.forEach((item, index) => {
        if (index === 0) {
          setSearch(item)
        } else {
          setSearch((prev) => prev + '%20' + item)
        }
      })
    }
    fetchPosts(search)
  }, [search, fetchPosts])

  return (
    <Main>
      <Card />
      <Container>
        <ContainerSearch>
          <h3>Publicações</h3>
          <span>{posts.length} publicações</span>
        </ContainerSearch>
        <SearchInput
          value={search}
          onChange={(event) => setSearch(event)}
          placeholder="Buscar Contéudo"
        />
        <GridContainer>
          {posts?.map((post) => (
            <CardContent
              key={post.title}
              title={post.title}
              body={post.body}
              updated_at={post.updated_at}
              number={post.number}
            />
          ))}
        </GridContainer>
      </Container>
    </Main>
  )
}
