import { styled } from "styled-components";
import { DEVICE_BREAKPOINT } from "../../style/deviceBreakPoint";

export const Container = styled.main`
    display: grid;
    grid-template-rows: max-content max-content auto;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.GRAY_500};

    > div {
        position: relative;
        display: grid;
        place-content: center;
        width: 8.33333333rem;
        height: 8.33333333rem;
        border: 2px solid ${({ theme }) => theme.COLORS.BLUE_100};
        border-radius: 50%;
        margin: 2rem auto;

        svg {
            font-size: 4.166666rem;
            color: ${({ theme }) => theme.COLORS.BLUE_100};
        }

        input {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 2rem;
            height: 2rem;
            opacity: 0;
        }
        
        &::before {
            position: absolute;
            display: grid;
            place-content: center;
            bottom: 0;
            right: 0;
            content: '🖊';
            width: 2rem;
            height: 2rem;
            background: ${({ theme }) => theme.COLORS.GRAY_400};
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.BLUE_100};
            border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
            border-radius: 50%;
            cursor: pointer;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.6666666rem;
    
    > a {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > button {
        display: grid;
        place-content: center;
        font-size: 1.5rem;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.RED_100};
        border: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
        width: 100%;
        max-width: 37.5rem;
        margin: 0 auto;
        padding: 1.6666666rem 0;
    }
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    width: 100%;
    background: ${({ theme }) => theme.COLORS.GRAY_400};
    border-radius: 2rem 2rem 0 0;
    padding: 1.6666666rem;
    
    > fieldset {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: none;
    }

    @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
        width: 100%;
        max-width: 37.5rem;
        margin: 0 auto;
    }
`;