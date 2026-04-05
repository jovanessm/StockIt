import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Progress} from "@/components/ui/progress"
import {Separator} from "@/components/ui/separator"

const topSellingProducts = [
    {name: "Yonex AS-50 Shuttlecock", units: 84},
    {name: "Li-Ning Ultra Grip", units: 59},
    {name: "Victor Brave Sword 12", units: 44},
    {name: "Yonex BG 65 String", units: 34},
    {name: "Yonex Super Grap", units: 9},
    {name: "Li-Ning A+ 300 Nylon", units: 6},
    {name: "Victor Badminton Racket Bag BR9308", units: 4}
]

export function TopSellingRanking() {

    const maxUnits = Math.max(...topSellingProducts.map((product) => product.units))
    const minUnits = Math.min(...topSellingProducts.map((product) => product.units))

    const getProgress = (units: number) => {
        if (maxUnits === minUnits) return 100
        return 20 + ((units - minUnits) / (maxUnits - minUnits)) * 80
    }

    return (
        <Card className="border-border/60 bg-card/95 text-card-foreground">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg font-medium">
                    Top selling products
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-0 px-4 pb-4 pt-0">
                <div className="grid grid-cols-1 gap-4">
                    {topSellingProducts.map((product, index) => (
                        <div key={product.name}>
                            <div className="grid grid-cols-[1.5rem_minmax(0,1fr)_5rem] items-center gap-3 py-1.5">
                                <div className="text-sm text-muted-foreground">
                                    {index + 1}
                                </div>
                                <div className="min-w-0 truncate text-sm">
                                    {product.name}
                                </div>
                                <div className="flex items-center gap-3 justify-self-end">
                                    <Progress value={getProgress(product.units)} className="h-2 w-16"/>
                                    <div className="w-20 text-right text-sm text-muted-foreground">
                                        {product.units} units
                                    </div>
                                </div>
                            </div>
                            {index < topSellingProducts.length - 1 ? (
                                <Separator className="bg-border/70"/>
                            ) : null}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}


