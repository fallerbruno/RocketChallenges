import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 8px;
  padding: 2rem;
  min-height: 16.25rem;
  max-height: 16.25rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-title']};

    h3 {
      font-size: 1.25rem;
      width: 17rem;
      color: ${(props) => props.theme['base-title']};
    }

    time {
      font-size: 0.6rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  main {
    span {
      display: -webkit-box;
      max-width: 600px;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`

export const MyLink = styled(Link)`
  text-decoration: none;

  color: ${(props) => props.theme['base-subTitle']};

  :visited {
    color: ${(props) => props.theme['base-text']};
  }

  :hover {
    color: ${(props) => props.theme.blue};
  }
`
