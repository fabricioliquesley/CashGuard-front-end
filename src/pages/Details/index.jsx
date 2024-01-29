import { Container, Header, Controls } from "./style";
import { Link } from "react-router-dom";
import { DropDown } from "../../components/DropDown";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

import { FiArrowLeft, FiTrash } from "react-icons/fi";
import { FaPencil } from "react-icons/fa6";
import { IoTrendingUpOutline, IoTrendingDownOutline, IoHome, IoWineSharp, IoAirplaneSharp, IoStorefrontOutline, IoFastFoodOutline, IoBarChartOutline, IoEllipsisHorizontalSharp, IoCheckmarkSharp, IoCloseOutline } from "react-icons/io5";
import { MdOutlineTitle } from "react-icons/md";
import { TbCurrencyReal } from "react-icons/tb";

import { useState } from "react";

export function Details() {
    const [selectedType, setSelectedType] = useState("Despesa");
    const [selectedCategory, setSelectedCategory] = useState("Casa");
    const [selectedStatus, setSelectedStatus] = useState("Não pago");
    const [readOnly, setReadOnly] = useState(true);

    function selectedValueType(selected) {
        setSelectedType(selected);
    }

    function selectedValueCategory(selected) {
        setSelectedCategory(selected);
    }

    function selectedValueStatus(selected) {
        setSelectedStatus(selected);
    }

    function changeReadOnly(){
        setReadOnly(false);
    }

    return (
        <Container>
            <Header>
                <Link to={-1}>
                    <FiArrowLeft />
                    <h3>Voltar</h3>
                </Link>
                <Controls>
                    <button
                        onClick={changeReadOnly}
                    >
                        <FaPencil />
                    </button>
                    <button>
                        <FiTrash />
                    </button>
                </Controls>
            </Header>
            <section>
                <label htmlFor="type">Tipo de transação</label>
                <DropDown selected={selectedType} id={"type"} variant={readOnly}>
                    <ul>
                        <li
                            data-value={"Despesa"}
                            onClick={(e) => selectedValueType(e.target.dataset.value)}
                        >
                            <IoTrendingDownOutline />
                            Despesa
                        </li>
                        <li
                            data-value={"Receita"}
                            onClick={(e) => selectedValueType(e.target.dataset.value)}
                        >
                            <IoTrendingUpOutline />
                            Receita
                        </li>
                    </ul>
                </DropDown>
                <label htmlFor="title">Título</label>
                <Input
                    icon={MdOutlineTitle}
                    placeholder={"Título"}
                    id={"title"}
                    value={"Água"}
                    variant={readOnly}
                />
                <label htmlFor="description">Descrição</label>
                <TextArea
                    placeholder={"Descrição"}
                    id={"description"}
                    value={"Conta de água do apartamento"}
                    variant={readOnly}
                />
                <label htmlFor="category">Categoria</label>
                <DropDown selected={selectedCategory} id={"category"} variant={readOnly}>
                    <ul>
                        <li
                            data-value={"Casa"}
                            onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                        >
                            <IoHome />
                            Casa
                        </li>
                        <li
                            data-value={"Bar"}
                            onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                        >
                            <IoWineSharp />
                            Bar
                        </li>
                        <li
                            data-value={"Viagem"}
                            onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                        >
                            <IoAirplaneSharp />
                            Viagem
                        </li>
                        <li
                            data-value={"Compras"}
                            onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                        >
                            <IoStorefrontOutline />
                            Compras
                        </li>
                        <li
                            data-value={"Alimentação"}
                            onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                        >
                            <IoFastFoodOutline />
                            Alimentação
                        </li>
                        <li
                            data-value={"Investimentos"}
                            onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                        >
                            <IoBarChartOutline />
                            Investimentos
                        </li>
                        <li
                            data-value={"Outros"}
                            onClick={(e) => selectedValueCategory(e.target.dataset.value)}
                        >
                            <IoEllipsisHorizontalSharp />
                            Outros
                        </li>
                    </ul>
                </DropDown>
                <label htmlFor="value">Valor</label>
                <Input
                    icon={TbCurrencyReal}
                    placeholder={"Valor"}
                    type={"number"}
                    value={26.89}
                    id={"value"}
                    variant={readOnly}
                />
                <label htmlFor="date">Data</label>
                <Input
                    type={"date"}
                    id={"date"}
                    value={"2024-01-28"}
                    variant={readOnly}
                />
                <label htmlFor="status">Status</label>
                <DropDown selected={selectedStatus} id={"status"} variant={readOnly}>
                    <ul>
                        <li
                            data-value={"Não pago"}
                            onClick={(e) => selectedValueStatus(e.target.dataset.value)}
                        >
                            <IoCloseOutline />
                            Não pago
                        </li>
                        <li
                            data-value={"Pago"}
                            onClick={(e) => selectedValueStatus(e.target.dataset.value)}
                        >
                            <IoCheckmarkSharp />
                            Pago
                        </li>
                    </ul>
                </DropDown>
                {
                    readOnly ? null : <Button title={"Salvar"}/>  
                }
            </section>
        </Container>
    )
}