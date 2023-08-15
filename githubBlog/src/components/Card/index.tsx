import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Avatar,
  CardContainer,
  Container,
  ContentContainer,
  Main,
} from './styles'
import github from '../../assets/github.svg'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface UserInterface {
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
  name: string
  login: string
}

export function Card() {
  const [user, setUser] = useState({} as UserInterface)

  function getUser() {
    api.get('users/fallerbruno').then((res) => {
      setUser(res.data)
    })
  }

  function redirecToGit() {
    window.open(user.html_url, '_blank')
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <Container>
      <CardContainer>
        <Avatar src={user.avatar_url} alt="" />
        <ContentContainer>
          <header>
            <span>{user.name}</span>
            <button onClick={redirecToGit}>
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </button>
          </header>
          <Main>
            <span>{user.bio}</span>
          </Main>
          <footer>
            <span>
              <img src={github} alt="" />
              {user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {user.company}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {user.followers}
            </span>
          </footer>
        </ContentContainer>
      </CardContainer>
    </Container>
  )
}
