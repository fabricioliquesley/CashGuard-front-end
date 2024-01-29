import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Transactions } from "../pages/Transactions";
import { Create } from "../pages/Create";
import { Details } from "../pages/Details";
import { UpdateProfile } from "../pages/UpdateProfile";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/profile" element={<UpdateProfile />} />
        </Routes>
    )
}