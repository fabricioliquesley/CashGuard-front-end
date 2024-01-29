import { styled } from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    > section {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        padding: 1.66666666rem;

        > label {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }

        ul {
            max-height: 12.5rem;
            background: ${({ theme }) => theme.COLORS.GRAY_400};
            margin-top: 2px;
            border: 1px solid ${({ theme }) => theme.COLORS.BLUE_100};
            border-radius: 1rem;
            
            overflow: auto;

            li {
                padding: 0.7rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                cursor: pointer;

                &:hover {
                    background: ${({ theme }) => theme.COLORS.GRAY_500};
                }

                > svg {
                    font-size: 1.2rem;
                }
            }
        }

        button {
            margin-top: 2rem;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6666666rem;
    
    > a {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        svg, h3 {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
    
`;

export const Controls = styled.menu`
    display: flex;
    align-items: center;
    gap: 0.7rem;

    > button {
        display: grid;
        place-content: center;
        background: transparent;
        border: none;
        font-size: 1.4rem;

        > svg {
            color: ${({ theme }) => theme.COLORS.BLUE_100}
        }
    }

    > :last-child {
        > svg {
            color: ${({ theme }) => theme.COLORS.RED_100};
        }
    }
`;