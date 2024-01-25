import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    background: ${({theme}) => theme.COLORS.BLUE_100};
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
`;