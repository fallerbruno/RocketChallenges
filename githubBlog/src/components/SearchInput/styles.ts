import { styled } from 'styled-components'

export const Input = styled.input`
    width: 54rem;
    height: 3rem;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 0.5rem;
    margin-top: 0.75rem;
    margin-bottom: 3rem;
    color: ${(props) => props.theme['base-text']};
    padding-left: 1rem;

    &::placeholder {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-label']};
    }
`
