import { Container } from "./style";

export function TextArea({ variant, ...rest }) {
    return (
        <Container {...rest} $variant={variant} readOnly={variant}>

        </Container>
    )
}