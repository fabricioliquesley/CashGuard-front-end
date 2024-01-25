import { PHRASES } from "../../utils/phrases";

import { Container, Form, Message, BgEffect } from "./style";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiKey } from "react-icons/fi";

import coin from "../../assets/coins-fill.svg";
import dollar from "../../assets/currency-circle-dollar-fill.svg";
import pig from "../../assets/piggy-bank-fill.svg";
import { useEffect, useState } from "react";

export function SignIn() {
    const [randomNumber, setRandomNumber] = useState();

    useEffect(() => {
        function generateRandomNumber(){
            let random = Math.floor(Math.random() * 10)

            return random;
        } 

        setRandomNumber(generateRandomNumber());
    }, [])

    return (
        <Container>
            <BgEffect src={coin} className="sprite1" />
            <Message>
                <h2>Frase do dia</h2>
                <q>
                    {PHRASES[randomNumber]}
                </q>
            </Message>
            <BgEffect src={pig} className="sprite2" />
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
                    Não tem uma conta? cadastre-se agora.
                </Link>
            </Form>
            <BgEffect src={dollar} className="sprite3" />
        </Container>
    )
}