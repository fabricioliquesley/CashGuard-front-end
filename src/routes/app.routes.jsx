import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Transactions } from "../pages/Transactions";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
        </Routes>
    )
}