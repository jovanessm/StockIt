import * as React from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarProvider,
} from "@/components/ui/sidebar"

type AppLayoutProps = {
    children: React.ReactNode
    headerTitle?: string
}

export function AppLayout({
    children,
    headerTitle = "StockIt",
}: AppLayoutProps) {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="sidebar" />
            <div className="flex flex-1 flex-col">
                <SiteHeader title={headerTitle} />
                {children}
            </div>
        </SidebarProvider>
    )
}


