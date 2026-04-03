import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

type StockStatus = "out-of-stock" | "low-stock" | "in-stock"

const data = [
    {name: "Yonex AS-50 Shuttlecock", units: 0},
    {name: "Li-Ning Ultra Grip", units: 0},
    {name: "Victor Brave Sword 12", units: 4},
    {name: "Yonex BG 65 String", units: 39},
]

export function StockAlerts() {
    const getStockStatus = (units: number): StockStatus => {
        if (units === 0) return "out-of-stock"
        if (units < 20) return "low-stock"
        return "in-stock"
    }

    const getStatusLabel = (status: StockStatus, units: number) => {
        if (status === "out-of-stock") return "Out of stock"
        if (status === "low-stock") return `Low-${units} left`
        return "In stock"
    }

    const getBadgeVariant = (status: StockStatus): "destructive" | "warning" | "outline" => {
        if (status === "out-of-stock") return "destructive"
        if (status === "low-stock") return "warning"
        return "outline"
    }

    return (
        <Card className="border-border/60 bg-card/95 text-card-foreground">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg font-medium">
                    Stock alerts
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-0 px-4 pb-3 pt-0">
                <div className="grid grid-cols-1 gap-4">
                    {data.map((product, index) => {
                        const status = getStockStatus(product.units)

                        return (
                        <div key={product.name}>
                            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-1.5">
                                <div className="min-w-0 truncate text-sm">
                                    {product.name}
                                </div>
                                <div className="flex items-center gap-3 justify-self-end">
                                    <Badge variant={getBadgeVariant(status)}>
                                        {getStatusLabel(status, product.units)}
                                    </Badge>
                                </div>
                            </div>
                            {index < data.length - 1 ? (
                                <Separator className="bg-border/70"/>
                            ) : null}
                        </div>
                    )})}
                </div>
            </CardContent>
        </Card>
    )
}