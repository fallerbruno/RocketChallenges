import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
    display: flex;
    margin-top: -6rem;
`

export const CardContainer = styled.div`
    display: flex;
    width: 54rem ;
    gap: 32px;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${(props) => props.theme['base-profile']};
    
`
export const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 9px;

    header {
        display: flex;
        justify-content: space-between;

        span {
            font-size: 1.5rem;
            color: ${(props) => props.theme['base-title']};
            font-weight: bold;
        }

        button {
            background: transparent;
            border: 0;
            cursor: pointer;
            color: ${(props) => props.theme.blue};
            text-transform: uppercase;
            font-size: 0.75rem;
            display: flex;
            gap: 5px;
            align-items: center;
        }
    }

    footer {
        display: flex;
        gap: 20px;

        span{
            display: flex;
            gap: 5px;
            justify-content: center;
            align-items: center;
            color: ${(props) => props.theme['base-subTitle']};
        }
    }
`
export const Main = styled.main`
    min-height: 80px;
`

export const Avatar = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
`
