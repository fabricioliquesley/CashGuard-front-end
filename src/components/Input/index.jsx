import { Container } from "./style";

export function Input({ icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon />}
            <input type="text" {...rest} autoComplete="none"/>
        </Container>
    )
}