import { Container, Header, Content, Form, List, Option } from "./style";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { DropDown } from "../../components/DropDown";

import { FiArrowLeft } from "react-icons/fi";
import { MdOutlineTitle } from "react-icons/md";
import { TbCurrencyReal } from "react-icons/tb";

import { IoTrendingUpOutline, IoTrendingDownOutline, IoHome, IoWineSharp, IoAirplaneSharp, IoStorefrontOutline, IoFastFoodOutline, IoBarChartOutline, IoEllipsisHorizontalSharp, IoCheckmarkSharp, IoCloseOutline } from "react-icons/io5";

import { useState } from "react";

export function Create() {
    const [selectedType, setSelectedType] = useState("Despesa");
    const [selectedCategory, setSelectedCategory] = useState("Casa");
    const [selectedStatus, setSelectedStatus] = useState("Não pago");


    function selectedValueType(selected) {
        setSelectedType(selected);
    }

    function selectedValueCategory(selected) {
        setSelectedCategory(selected);
    }

    function selectedValueStatus(selected) {
        setSelectedStatus(selected);
    }

    return (
        <Container>
            <Header to={-1}>
                <FiArrowLeft />
                <h3>Create</h3>
            </Header>
            <Content>
                <Form>
                    <label htmlFor="type">Tipo de transação</label>
                    <DropDown selected={selectedType} id={"type"}>
                        <List>
                            <Option
                                data-value={"Despesa"}
                                onClick={(e) => selectedValueType(e.target.dataset.value)}
                            >
                                <IoTrendingDownOutline />
                                Despesa
                            </Option>
                            <Option
                                data-value={"Receita"}
                                onClick={(e) => selectedValueType(e.target.dataset.value)}
                            >
                                <IoTrendingUpOutline />
                                Receita
                            </Option>
                        </List>
                    </DropDown>
                    <label htmlFor="title">Título</label>
                    <Input
                        icon={MdOutlineTitle}
                        placeholder={"Título"}
                        id={"title"}
                    />
                    <label htmlFor="description">Descrição</label>
                    <TextArea
                        placeholder={"Descrição"}
                        id={"description"}
                    />
                    <label htmlFor="category">Categoria</label>
                    <DropDown selected={selectedCategory} id={"category"}>
                        <List>
                            <Option
                                data-value={"Casa"}
                                onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                            >
                                <IoHome />
                                Casa
                            </Option>
                            <Option
                                data-value={"Bar"}
                                onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                            >
                                <IoWineSharp />
                                Bar
                            </Option>
                            <Option
                                data-value={"Viagem"}
                                onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                            >
                                <IoAirplaneSharp />
                                Viagem
                            </Option>
                            <Option
                                data-value={"Compras"}
                                onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                            >
                                <IoStorefrontOutline />
                                Compras
                            </Option>
                            <Option
                                data-value={"Alimentação"}
                                onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                            >
                                <IoFastFoodOutline />
                                Alimentação
                            </Option>
                            <Option
                                data-value={"Investimentos"}
                                onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                            >
                                <IoBarChartOutline />
                                Investimentos
                            </Option>
                            <Option
                                data-value={"Outros"}
                                onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                            >
                                <IoEllipsisHorizontalSharp />
                                Outros
                            </Option>
                        </List>
                    </DropDown>
                    <label htmlFor="value">Valor</label>
                    <Input
                        icon={TbCurrencyReal}
                        placeholder={"Valor"}
                        type={"number"}
                        id={"value"}
                    />
                    <label htmlFor="date">Data</label>
                    <Input
                        type={"date"}
                        id={"date"}
                    />
                    <label htmlFor="status">Status</label>
                    <DropDown selected={selectedStatus} id={"status"}>
                        <List>
                            <Option
                                data-value={"Não pago"}
                                onClick={(e) => selectedValueStatus(e.target.dataset.value)}
                            >
                                <IoCloseOutline />
                                Não pago
                            </Option>
                            <Option
                                data-value={"Pago"}
                                onClick={(e) => selectedValueStatus(e.target.dataset.value)}
                            >
                                <IoCheckmarkSharp />
                                Pago
                            </Option>
                        </List>
                    </DropDown>
                </Form>
                <Button title={"Criar"} />
            </Content>
        </Container>
    )
}