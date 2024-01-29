import { Container, Selected } from "./style";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoTrendingUpOutline, IoTrendingDownOutline, IoHome, IoWineSharp, IoAirplaneSharp, IoStorefrontOutline, IoFastFoodOutline, IoBarChartOutline, IoEllipsisHorizontalSharp, IoCheckmarkSharp, IoCloseOutline } from "react-icons/io5";

export function DropDown({ children, selected, variant, ...rest }) {
    function selectIcon() {
        switch (selected) {
            case "Despesa":
                return <IoTrendingDownOutline />
            case "Receita":
                return <IoTrendingUpOutline />
            case "Casa":
                return <IoHome />
            case "Bar":
                return <IoWineSharp />
            case "Viagem":
                return <IoAirplaneSharp />
            case "Compras":
                return <IoStorefrontOutline />
            case "Alimentação":
                return <IoFastFoodOutline />
            case "Investimentos":
                return <IoBarChartOutline />
            case "Não pago":
                return <IoCloseOutline />
            case "Pago":
                return <IoCheckmarkSharp />
            default:
                return <IoEllipsisHorizontalSharp />
        }
    }

    return (
        <Container {...rest} $variant={variant}>
            <div>
                <Selected>
                    <div>
                        {selectIcon()}
                        <p>{selected}</p>
                    </div>
                    {
                        variant ? null : <MdOutlineKeyboardArrowDown />
                    }
                </Selected>
                {children}
            </div>
        </Container>
    )
}