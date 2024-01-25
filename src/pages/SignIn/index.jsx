import { Container, Form, Message, BgEffect } from "./style";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiKey } from "react-icons/fi";

import coin from "../../assets/coins-fill.svg";
import dollar from "../../assets/currency-circle-dollar-fill.svg";
import pig from "../../assets/piggy-bank-fill.svg";

export function SignIn() {
    return (
        <Container>
            <BgEffect src={coin} className="sprite1"/>
            <Message>
                <h2>Frase da semana</h2>
                <q>
                    Pequenas economias diárias acumulam-se em grandes conquistas financeiras. Controle seus gastos e veja seu dinheiro trabalhar a seu favor.
                </q>
            </Message>
            <BgEffect src={pig} className="sprite2"/>
            <Form>
                <Input
                    icon={FiMail}
                    placeholder={"E-mail"}
                />
                <Input
                    icon={FiKey}
                    placeholder={"Senha"}
                />
                <Button
                    title={"Entrar"}
                />
                <Link to={"/register"}>
                    não tem uma conta? cadastre-se agora
                </Link>
            </Form>
            <BgEffect src={dollar} className="sprite3"/>
        </Container>
    )
}