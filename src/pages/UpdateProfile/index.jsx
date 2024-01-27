import { Container, Header, Content } from "./style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { FiArrowLeft, FiUser, FiMail, FiKey } from "react-icons/fi";
import { RxExit } from "react-icons/rx";

import { useAuth } from "../../hook/auth";
import { useNavigate } from "react-router-dom";

export function UpdateProfile() {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    function logOut() {
        navigate("/");

        signOut();
    }

    return (
        <Container>
            <Header>
                <Link to={-1}>
                    <FiArrowLeft />
                    <h3>Perfil</h3>
                </Link>
                <button onClick={logOut}>
                    <RxExit />
                </button>
            </Header>
            <div>
                <FiUser />
                <input type="file" />
            </div>
            <Content>
                <fieldset>
                    <Input
                        icon={FiUser}
                        placeholder={"Nome"}
                    />
                    <Input
                        icon={FiMail}
                        placeholder={"Nome"}
                    />
                    <Input
                        icon={FiKey}
                        placeholder={"Nome"}
                    />
                </fieldset>
                <Button
                    title={"salvar"}
                />
            </Content>
        </Container>
    )
}