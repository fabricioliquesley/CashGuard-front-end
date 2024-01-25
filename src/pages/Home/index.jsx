import { Container, Content } from "./style"
import { Menu } from "../../components/Menu"
import { Header } from "../../components/Header";
import { TransactionsBalances } from "../../components/TransactionsBalances";
import { Transaction } from "../../components/Transaction";

import { FcBullish, FcBearish } from "react-icons/fc";
import { MdHistory } from "react-icons/md";

export function Home() {
    return (
        <Container>
            <Content>
                <Header />
                <section className="card">
                    <div className="accountBalance">
                        <span>saldo da conta</span>
                        <h3>R$ 120.00</h3>
                    </div>
                    <div className="transactionsBalances">
                        <TransactionsBalances
                            icon={FcBearish}
                            title={"Despesas"}
                            value={80}
                            type={"expenses"}
                        />
                        <TransactionsBalances
                            icon={FcBullish}
                            title={"Receitas"}
                            value={200}
                        />
                    </div>
                </section>
                <h3><MdHistory /> Transações mais recentes</h3>
                <section className="transactions">
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
                    <Transaction
                        type={"incomes"}
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