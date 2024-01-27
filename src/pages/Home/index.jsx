import { Container, Content } from "./style"
import { Menu } from "../../components/Menu"
import { Header } from "../../components/Header";
import { TransactionsBalances } from "../../components/TransactionsBalances";
import { Transaction } from "../../components/Transaction";

import { FcBullish, FcBearish } from "react-icons/fc";
import { MdCalendarMonth } from "react-icons/md";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

export function Home() {
    const [expensesValue, setExpensesValue] = useState(0);
    const [incomesValue, setIncomesValue] = useState(0);
    const [total, setTotal] = useState(0);

    const [recentTransaction, setRecentTransaction] = useState([]);

    async function getExpensesValue(type) {
        try {
            const response = await api.get(`/transactions/${type}`);
            let totalTransactions = response.data.reduce((prevValue, transaction) => prevValue + transaction.value, 0);

            if (type == "incomes") return setIncomesValue(totalTransactions);

            setExpensesValue(totalTransactions);
        } catch (error) {
            console.error("Erro ao obter valores:", error);
        }
    }

    getExpensesValue("incomes");
    getExpensesValue("expenses");

    useEffect(() => {
        setTotal(incomesValue - expensesValue)

        async function fetchRecenteTransactions() {
            try {
                const response = await api.get("/transactions/recent");

                setRecentTransaction(response.data);
            } catch (error) {   
                console.error(error);
            }
        }

        fetchRecenteTransactions();
    }, [expensesValue, incomesValue])

    return (
        <Container>
            <Content>
                <Header />
                <section className="card">
                    <div className="accountBalance">
                        <span>saldo da conta</span>
                        <h3>R$ {total}</h3>
                    </div>
                    <div className="transactionsBalances">
                        <TransactionsBalances
                            icon={FcBearish}
                            title={"Despesas"}
                            value={expensesValue}
                            type={"expenses"}
                        />
                        <TransactionsBalances
                            icon={FcBullish}
                            title={"Receitas"}
                            value={incomesValue}
                        />
                    </div>
                </section>
                <h3><MdCalendarMonth /> Transações próximas do vencimento</h3>
                <section className="transactions">
                    {
                        recentTransaction &&
                        recentTransaction.map((transaction) => (
                            <Transaction
                                key={transaction.id}
                                type={transaction.type}
                                title={transaction.title}
                                value={transaction.value}
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