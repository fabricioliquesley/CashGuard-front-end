import { styled } from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-rows: 1fr 60px;
    width: 100%;
    min-height: 100vh;
`;

export const Content = styled.section`
    padding: 1.66666rem;

    > h2 {
        color: ${({theme}) => theme.COLORS.GRAY_200};
    }

    > section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const Filter = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0 2rem;
    
    svg {
        color: ${({theme}) => theme.COLORS.BLUE_100};
    }
`;