import { styled } from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: -6rem;
  align-items: center;
  justify-content: center;
`

export const CardContainer = styled.div`
    display: flex;
    width: 64rem;
    background: ${(props) => props.theme['base-profile']};
    flex-direction: column;
    border-radius: 10px;
    padding: 2rem;
    gap: 1rem;

    h2{
       font-size : 1.5rem;
       color: ${(props) => props.theme['base-title']};
    }
`
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        color: ${(props) => props.theme.blue};  
        display: flex;
        gap: 10px;
        justify-content: center;
        align-content: center;
        align-items: center;
        border: 0;
        background-color: transparent;
        font-size: 0.75rem;
        cursor: pointer;
    }
`

export const SocialContainer = styled.div`
    display: flex;
    gap: 1rem;


    span {
        color: ${(props) => props.theme['base-text']};
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
`

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const MarkDown = styled(ReactMarkdown)`
  white-space: pre-line;
`
