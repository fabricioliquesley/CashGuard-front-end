import { FiHome, FiPlus } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr"

import { MenuContainer, Button } from "./style"
import { Link } from "react-router-dom";

export function Menu() {
    return (
        <MenuContainer>
            <div>
                <Link to={"/"} data-active="true">
                    <FiHome />
                </Link>
                <Link to={"/transactions"} >
                    <GrTransaction />
                </Link>
            </div>
            <Button to={"/create"}>
                <FiPlus />
            </Button>
        </MenuContainer>
    )
}