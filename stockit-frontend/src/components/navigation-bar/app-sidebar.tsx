import * as React from "react"
import {
    IconCamera,
    IconHistory,
    IconDashboard,
    IconFileAi,
    IconFileDescription,
    IconFolder,
    IconHelp,
    IconListDetails,
    IconSearch,
    IconSettings,
    IconUsers,
} from "@tabler/icons-react"
import { Link } from "react-router-dom"

import {NavMain} from "@/components/navigation-bar/nav-main.tsx"
import {NavSecondary} from "@/components/navigation-bar/nav-secondary.tsx"
import {NavUser} from "@/components/navigation-bar/nav-user.tsx"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar.tsx"
import {StockItLogo} from "@/components/StockItLogo.tsx";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/home",
            icon: IconDashboard,
        },
        {
            title: "Product List",
            url: "/product-list",
            icon: IconFolder,
        },
        {
            title: "Product Movement",
            url: "/product-movement",
            icon: IconListDetails,
        },
        {
            title: "Transaction History",
            url: "/transaction-history",
            icon: IconHistory,
        },

        {
            title: "Team",
            url: "#",
            icon: IconUsers,
        },
    ],
    navClouds: [
        {
            title: "Capture",
            icon: IconCamera,
            isActive: true,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Proposal",
            icon: IconFileDescription,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Prompts",
            icon: IconFileAi,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: "Settings",
            url: "#",
            icon: IconSettings,
        },
        {
            title: "Get Help",
            url: "#",
            icon: IconHelp,
        },
        {
            title: "Search",
            url: "#",
            icon: IconSearch,
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:p-1.5!"
                        >
                            <Link to="/home">
                                <StockItLogo size={"xs"} withTagline={false} withTitle={false} surface={"light"}/>
                                <span className="text-base font-semibold">Stock-IT</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                <NavSecondary items={data.navSecondary} className="mt-auto"/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
        </Sidebar>
    )
}
