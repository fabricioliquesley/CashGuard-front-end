import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        background: ${({theme}) => theme.COLORS.GRAY_500};
    }
`;