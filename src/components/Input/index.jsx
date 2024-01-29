import { Container } from "./style";

export function Input({ icon: Icon, variant = false, ...rest }) {
    return (
        <Container $variant={variant}>
            {Icon && <Icon />}
            <input type="text" {...rest} autoComplete="none" readOnly={variant}/>
        </Container>
    )
}