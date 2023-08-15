import { Container, MyLink } from './styles'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostInterface } from '../../../../contexts/PostsContexts'

export function CardContent({
  title,
  body,
  updated_at,
  number,
}: PostInterface) {
  return (
    <MyLink to={`/issues/${number}`}>
      <Container>
        <header>
          <h3>{title}</h3>
          <time
            title={format(new Date(updated_at), "dd MMM yyyy 'ás' HH:mm'h", {
              locale: ptBR,
            })}
            dateTime={new Date(updated_at).toISOString()}
          >
            {formatDistanceToNow(new Date(updated_at), { locale: ptBR })}
          </time>
        </header>
        <main>
          <span>{body}</span>
        </main>
      </Container>
    </MyLink>
  )
}
