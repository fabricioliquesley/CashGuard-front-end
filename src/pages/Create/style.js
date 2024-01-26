import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Header = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    padding: 1.666666rem;

    > svg {
        font-size: 1.2rem;
    }
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    gap: 6rem;
    width: 100%;
    height: 40rem;
    padding: 1.666666rem;
    background: ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 2rem 2rem 0 0;
    overflow-y: auto;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    > label {
        color: ${({theme}) => theme.COLORS.GRAY_200};
    }
`;

export const List = styled.ul`
    max-height: 12.5rem;
    background: ${({ theme }) => theme.COLORS.GRAY_400};
    margin-top: 0.5rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
    border-radius: 1rem;
    
    overflow: auto;
    `;

export const Option = styled.li`
    padding: 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        background: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    > svg {
        font-size: 1.2rem;
    }
`;