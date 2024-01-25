import { Container } from "./style";

import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export function Transaction({ type, title, value, date }) {
    const newDate = date.split("-").reverse().join("/");

    return (
        <Container $type={type}>
            <div>
                {
                    type === "expenses" ? <CiCircleMinus /> : <CiCirclePlus />
                }
                <div>
                    <h5>{title}</h5>
                    <p>{newDate}</p>
                </div>
            </div>
            <p>R$ {value}</p>
        </Container>
    )
}