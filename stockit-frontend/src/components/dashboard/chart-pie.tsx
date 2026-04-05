import {Pie, PieChart} from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
    {category: "racket", sold: 275, fill: "var(--color-racket)"},
    {category: "shuttlecock", sold: 200, fill: "var(--color-shuttlecock)"},
    {category: "bag", sold: 187, fill: "var(--color-bag)"},
    {category: "shoes", sold: 173, fill: "var(--color-shoes)"},
    {category: "other", sold: 90, fill: "var(--color-other)"},
]

const chartConfig = {
    sold: {
        label: "Sold",
    },
    racket: {
        label: "Racket",
        color: "var(--chart-1)",
    },
    shuttlecock: {
        label: "Shuttlecock",
        color: "var(--chart-2)",
    },
    bag: {
        label: "Bag",
        color: "var(--chart-3)",
    },
    shoes: {
        label: "Shoes",
        color: "var(--chart-4)",
    },
    other: {
        label: "Other",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig

export function ChartPieLabelCustom() {
    return (
        <Card className="flex flex-col justify-between border border-border ring-0">
            <CardHeader className="items-center pb-0">
                <CardTitle>Sold Items by Category</CardTitle>
                <CardDescription>January - June 2026</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[320px] px-0"
                >
                    <PieChart>
                        <ChartTooltip
                            content={<ChartTooltipContent nameKey="payload" hideLabel/>}
                        />
                        <Pie
                            data={chartData}
                            dataKey="sold"
                            labelLine={false}
                            label={({payload, ...props}) => {
                                return (
                                    <text
                                        cx={props.cx}
                                        cy={props.cy}
                                        x={props.x}
                                        y={props.y}
                                        textAnchor={props.textAnchor}
                                        dominantBaseline={props.dominantBaseline}
                                        fill="var(--foreground)"
                                    >
                                        {payload.sold}
                                    </text>
                                )
                            }}
                            nameKey="category"
                        />
                        <ChartLegend
                            content={<ChartLegendContent nameKey="category" />}
                            className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
