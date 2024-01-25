import { Container, Form } from "./style";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiUser, FiMail, FiKey } from "react-icons/fi";

export function SignUp(){
    return (
        <Container>
            <h1></h1>
            <Form>
                <Input
                    icon={FiUser}
                    placeholder={"Nome"}
                />
                <Input
                    icon={FiMail}
                    placeholder={"E-mail"}
                />
                <Input
                    icon={FiKey}
                    placeholder={"Senha"}
                />
                <Button
                    title={"Cadastrar"}
                />
                <Link to={"/"}>
                    Já tem uma conta? faça login
                </Link>
            </Form>
        </Container>
    )
}