import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.menu`
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.GRAY_500};
    padding: 1.66666666rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 65%;

        a {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        a[data-active="true"] {
            color: ${({ theme }) => theme.COLORS.BLUE_100};
        }
    }
`;

export const Button = styled(Link)`
    display: grid;
    place-content: center;
    background: ${({ theme }) => theme.COLORS.BLUE_100};
    border: 0.6rem solid ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 50%;
    padding: 1rem;
    margin-bottom: 60px;

    > svg {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
`;  