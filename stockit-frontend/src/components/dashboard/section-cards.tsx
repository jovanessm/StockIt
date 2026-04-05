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
                    <CardDescription>Total Monthly Revenue</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[200px]/card:text-3xl">
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
                    <CardDescription>Total Inventory Value</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        $67,676.00
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
                    <CardDescription>Total SKUs</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        157
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
                    <CardDescription>Low-stock Product</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        3
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
                    <CardDescription>Out-of-stock Product</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        2
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
