import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", revenue: 186, profit: 80 },
    { month: "February", revenue: 305, profit: 200 },
    { month: "March", revenue: 220, profit: 100 },
    { month: "April", revenue: 240, profit: 190 },
    { month: "May", revenue: 209, profit: 130 },
    { month: "June", revenue: 214, profit: 140 },
]

const chartConfig = {
    revenue: {
        label: "Revenue",
        color: "var(--chart-1)",
    },
    profit: {
        label: "Profit",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function ChartAreaLegend() {
    return (
        <Card className="flex flex-col justify-between border border-border ring-0">
            <CardHeader>
                <CardTitle>Semester Revenue Overview</CardTitle>
                <CardDescription>
                    Showing total revenue for the last 6 months
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="profit"
                            type="natural"
                            fill="var(--color-profit)"
                            fillOpacity={0.4}
                            stroke="var(--color-profit)"
                            stackId="a"
                        />
                        <Area
                            dataKey="revenue"
                            type="natural"
                            fill="var(--color-revenue)"
                            fillOpacity={0.4}
                            stroke="var(--color-revenue)"
                            stackId="a"
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 leading-none font-medium">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            January - June 2026
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
