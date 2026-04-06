import {Routes, Route} from "react-router-dom";
import {AppLayout} from "@/components/layout/app-layout.tsx";
import {ThemeProvider} from "@/components/theme/theme-provider.tsx";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";

import ProductListPage from "@/app/ProductListPage.tsx";
import DashboardPage from "@/app/DashboardPage.tsx";
import LoginPage from "@/app/LoginPage.tsx";
import ProductDetailPage from "@/app/ProductDetailPage.tsx";

export default function App() {
    return (
        <ThemeProvider defaultTheme={"dark"} storageKey="vite-ui-theme">
            <TooltipProvider>
                <Routes>
                    <Route path="/"
                           element={<div>main</div>}/>
                    <Route path="/login"
                           element={<LoginPage/>}/>
                    <Route path="/home"
                           element={<AppLayout headerTitle="Stock-IT Dashboard"><DashboardPage/></AppLayout>}/>
                    <Route path="/product-list"
                           element={<AppLayout headerTitle="Stock-IT Product List"><ProductListPage/></AppLayout>}/>
                    <Route path="/product/:id"
                           element={<AppLayout headerTitle="Stock-IT Product Detail"><ProductDetailPage/></AppLayout>}/>
                </Routes>
            </TooltipProvider>
        </ThemeProvider>
    )
}