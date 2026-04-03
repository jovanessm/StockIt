import {Routes, Route} from "react-router-dom";
import {LoginPage} from "@/pages/LoginPage.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";

export default function App() {
    return (
        <ThemeProvider defaultTheme={"dark"} storageKey="vite-ui-theme">
            <Routes>
                <Route path="/" element={<div>Home</div>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </ThemeProvider>

    )
}