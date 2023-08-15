import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BodyContainer,
  CardContainer,
  CardHeader,
  Container,
  MarkDown,
  SocialContainer,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import github from '../../../assets/github.svg'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../contexts/PostsContexts'
import { useLocation } from 'react-router-dom'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Card() {
  const location = useLocation()
  let path = location.pathname
  path = path.split('/')[2]

  const posts = useContextSelector(PostsContext, (context) => {
    const temp = context.posts.filter((post) => post.number === Number(path))
    return temp[0]
  })

  if (posts === undefined) {
    window.location.href = '/'
  }

  function voltar() {
    window.history.back()
  }

  function gitHub() {
    window.open(posts.html_url, '_blank')
  }

  return (
    <Container>
      <CardContainer>
        <CardHeader>
          <button onClick={voltar}>
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </button>
          <button onClick={gitHub}>
            Ver no GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </CardHeader>
        <h2>{posts?.title}</h2>
        <SocialContainer>
          <span>
            <img src={github} alt="" />
            {posts?.user?.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />{' '}
            {posts && (
              <time
                title={format(
                  new Date(posts?.created_at),
                  "dd MMM yyyy 'ás' HH:mm'h",
                  {
                    locale: ptBR,
                  },
                )}
                dateTime={new Date(posts?.created_at).toISOString()}
              >
                {formatDistanceToNow(new Date(posts?.created_at), {
                  locale: ptBR,
                })}
              </time>
            )}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {posts?.comments} Comentarios
          </span>
        </SocialContainer>
        <BodyContainer>
          <MarkDown>{posts?.body}</MarkDown>
        </BodyContainer>
      </CardContainer>
    </Container>
  )
}
