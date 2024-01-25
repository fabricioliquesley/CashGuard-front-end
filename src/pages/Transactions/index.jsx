import { Container, Content, Filter } from "./style";
import { Menu } from "../../components/Menu";
import { Transaction } from "../../components/Transaction";
import { ButtonFilter } from "../../components/ButtonFilter";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";

export function Transactions() {
    const [buttonSelected, setButtonSelected] = useState("");

    function handleSelectedButton(button){
        setButtonSelected(button);
    }

    return (
        <Container>
            <Content>
                <h2>Transações</h2>
                <Filter>
                    <FaFilter />
                    <ButtonFilter
                        name={"todas"} 
                        isActive={buttonSelected === "" || buttonSelected === "all"}
                        onClick={() => handleSelectedButton("all")}
                    />
                    <ButtonFilter 
                        name={"receitas"}
                        isActive={buttonSelected === "incomes"}
                        onClick={() => handleSelectedButton("incomes")}
                    />
                    <ButtonFilter 
                        name={"despesas"}
                        isActive={buttonSelected === "expenses"}
                        onClick={() => handleSelectedButton("expenses")}
                    />
                </Filter>
                <section>
                    <Transaction
                        type={"expenses"}
                        title={"Água"}
                        value={20.56}
                        date={"2024-01-24"}
                    />
                    <Transaction
                        type={"incomes"}
                        title={"Água"}
                        value={20.56}
                        date={"2024-01-24"}
                    />
                    <Transaction
                        type={"expenses"}
                        title={"Água"}
                        value={20.56}
                        date={"2024-01-24"}
                    />
                    <Transaction
                        type={"incomes"}
                        title={"Água"}
                        value={20.56}
                        date={"2024-01-24"}
                    />
                    <Transaction
                        type={"expenses"}
                        title={"Água"}
                        value={20.56}
                        date={"2024-01-24"}
                    />
                </section>
            </Content>
            <Menu />
        </Container>
    )
}