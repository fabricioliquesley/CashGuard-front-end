import { Container, Content, Filter } from "./style";
import { Menu } from "../../components/Menu";
import { Transaction } from "../../components/Transaction";
import { ButtonFilter } from "../../components/ButtonFilter";
import { Profile } from "../../components/Profile";
import { Input } from "../../components/Input";
import { FaFilter, FaSearch } from "react-icons/fa";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Transactions() {
    const [buttonSelected, setButtonSelected] = useState("all");
    const [search, setSearch] = useState("");
    const [transactions, setTransactions] = useState([]);

    function handleSelectedButton(button) {
        setButtonSelected(button);
    }

    useEffect(() => {
        async function fetchTransactions() {
            try {
                let response;

                if(buttonSelected == "all"){
                    response = await api.get(`/transactions?title=${search}`);
                } else {
                    response = await api.get(`/transactions/${buttonSelected}?title=${search}`);
                }
    
                setTransactions(response.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchTransactions();
    }, [search, buttonSelected])

    return (
        <Container>
            <Content>
                <div>
                    <h2>Transações</h2>
                    <Profile />
                </div>
                <Input
                    icon={FaSearch}
                    placeholder={"Pesquisar"}
                    className={"search"}
                    onChange={(e) => setSearch(e.target.value)}
                />
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
                    {
                        transactions &&
                        transactions.map((transaction) => (
                            <Transaction
                                key={transaction.id}
                                type={transaction.type}
                                title={transaction.title}
                                value={transaction.value.toFixed(2)}
                                date={transaction.date}
                            />
                        ))
                    }
                </section>
            </Content>
            <Menu />
        </Container>
    )
}