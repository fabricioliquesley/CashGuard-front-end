import { styled } from "styled-components";

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding: 1.66666666rem;
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    > a {
        text-align: center;
        color: ${({theme}) => theme.COLORS.BLUE_100};
    }
`;