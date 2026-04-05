import {ProductListHeader} from "@/components/product-list/product-list-header.tsx";
import {DataTable} from "@/components/product-list/data-table.tsx";
import {columns} from "@/components/product-list/product-list-columns.tsx"
import type {Product} from "@/components/product-list/product-list-columns.tsx"
import {Card} from "@/components/ui/card.tsx";

const products: Product[] = [
    {id: "a3f9c1", name: "Yonex Aerosensa 50", category: "shuttlecock", stock: 240, price: 14.99},
    {id: "b7d2e8", name: "Victor AS-Heavy Shuttlecock", category: "shuttlecock", stock: 4, price: 22.5},
    {id: "c1a4f6", name: "Yonex Astrox 88S Pro", category: "racket", stock: 31, price: 189.99},
    {id: "d9b3c2", name: "Li-Ning Turbo Charging 75D", category: "racket", stock: 0, price: 149.99},
    {id: "e5f7a1", name: "Yonex Power Cushion 65 Z2", category: "shoes", stock: 18, price: 124.99},
    {id: "f2c8d4", name: "Yonex BG 65 String", category: "string", stock: 95, price: 8.99},
    {id: "g6e1b9", name: "Victor Overgrip Comfort", category: "grip", stock: 7, price: 4.49},
    {id: "h4d5f3", name: "Yonex Team Series Racket Bag", category: "bag", stock: 12, price: 54.99},
    {id: "i8c2a7", name: "Victor Thruster K 9000", category: "racket", stock: 9, price: 219.99},
    {id: "j3f6e1", name: "Li-Ning N99 Carbon Racket", category: "racket", stock: 14, price: 179.99},
    {id: "k5b9d3", name: "Yonex Mavis 350 Nylon Shuttle", category: "shuttlecock", stock: 180, price: 11.99},
    {id: "l1e4c8", name: "Victor SH-A920 Shoes", category: "shoes", stock: 0, price: 99.99},
    {id: "m7a3f2", name: "Li-Ning AYPP004 Badminton Bag", category: "bag", stock: 23, price: 69.99},
    {id: "n2d8b6", name: "Yonex BG 80 Power String", category: "string", stock: 62, price: 12.49},
    {id: "o9f1c5", name: "Victor Tacky Towel Grip x5", category: "grip", stock: 3, price: 6.99}
]

export default function ProductList() {
    return (
        <Card className="gap-4 p-4">
            <ProductListHeader/>
            <DataTable columns={columns} data={products}/>
        </Card>
    )
}