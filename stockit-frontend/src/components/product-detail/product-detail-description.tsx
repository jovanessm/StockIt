import {Rating} from "@/components/ui/rating.tsx";
import {Badge} from "@/components/ui/badge.tsx"
import {Card} from "@/components/ui/card.tsx"

type ProductDetailDescriptionProps = {
    title: string,
    description: string,
    rating: number,
    category: string[],
    stock: number,
    price: number
}

export default function ProductDetailDescription({
                                                     title,
                                                     description,
                                                     rating,
                                                     category,
                                                     stock,
                                                     price,
                                                 }: ProductDetailDescriptionProps) {
    const stockLabel = stock <= 0 ? "Out of stock" : stock <= 10 ? `Low - ${stock} left` : "In stock"
    const stockVariant = stock <= 0 ? "destructive" : stock <= 10 ? "warning" : "default"

    return (
        <Card className="gap-0">
            <div className="flex flex-col gap-5 p-5">
                <div className="space-y-2">
                    <h1 className="font-heading text-2xl leading-tight font-semibold md:text-3xl">{title}</h1>
                    <p className="leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <Rating rate={rating} showScore />
                    <Badge variant={stockVariant}>{stockLabel}</Badge>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                    <div className={"grid gap-1"}>
                        <p className="text-md text-muted-foreground">Price</p>
                        <p className="text-2xl font-semibold">${price.toFixed(2)}</p>
                    </div>
                    <div className={"grid gap-1"}>
                        <p className="text-md text-muted-foreground">Available Units</p>
                        <p className="text-2xl font-semibold">{stock}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {category.map((cat) => (
                        <Badge key={cat} variant="secondary">{cat}</Badge>
                    ))}
                </div>
            </div>
        </Card>
    )
}