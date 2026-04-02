import {Routes, Route} from "react-router-dom";
import {LoginPage} from "@/pages/LoginPage.tsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<div>Home</div>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}