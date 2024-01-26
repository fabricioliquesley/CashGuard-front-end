import { Container, Selected } from "./style";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoHome, IoWineSharp } from "react-icons/io5";

export function DropDown({ children, selected }) {
    function selectIcon() {
        switch (selected) {
            case "Bar":
                return <IoWineSharp />
            case "Home":
                return <IoHome />
            default:
                return <IoHome />
        }
    }

    return (
        <Container>
            <div>
                <Selected>
                    <div>
                        {selectIcon()}
                        <p>{selected}</p>
                    </div>
                    <MdOutlineKeyboardArrowDown />
                </Selected>
                {children}
            </div>
        </Container>
    )
}