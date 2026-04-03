import {IconTrendingDown, IconTrendingUp} from "@tabler/icons-react"

import {Badge} from "@/components/ui/badge.tsx"
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx"

export function SectionCards() {
    return (
        // TODO(Jovan, 03.04.2026): Refactor to map with data const instead of hardcoded value
        <div
            className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-5 dark:*:data-[slot=card]:bg-card">
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Total Revenue</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[200px]/card:text-2xl">
                        $1,250.00
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp/>
                            +12.5%
                        </Badge>
                    </CardAction>
                </CardHeader>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>New Customers</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        1,234
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingDown/>
                            -20%
                        </Badge>
                    </CardAction>
                </CardHeader>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Active Accounts</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        45,678
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp/>
                            +12.5%
                        </Badge>
                    </CardAction>
                </CardHeader>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Growth Rate</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        4.5%
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp/>
                            +4.5%
                        </Badge>
                    </CardAction>
                </CardHeader>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Growth Rate</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        4.5%
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp/>
                            +4.5%
                        </Badge>
                    </CardAction>
                </CardHeader>
            </Card>
        </div>
    )
}
