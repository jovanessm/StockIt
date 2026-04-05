import {ProductListHeader} from "@/components/product-list/product-list-header.tsx";
import {DataTable} from "@/components/product-list/data-table.tsx";
import {columns} from "@/components/product-list/product-list-columns.tsx"
import type {Product} from "@/components/product-list/product-list-columns.tsx"
import {Card} from "@/components/ui/card.tsx";

async function getProducts() : Promise<Product[]> {
    return [
        { "id": "a3f9c1", "name": "Yonex Aerosensa 50",          "category": "shuttlecock", "stock": 240, "price": 14.99 },
        { "id": "b7d2e8", "name": "Victor AS-Heavy Shuttlecock",  "category": "shuttlecock", "stock": 4,   "price": 22.50 },
        { "id": "c1a4f6", "name": "Yonex Astrox 88S Pro",        "category": "racket",      "stock": 31,  "price": 189.99 },
        { "id": "d9b3c2", "name": "Li-Ning Turbo Charging 75D",  "category": "racket",      "stock": 0,   "price": 149.99 },
        { "id": "e5f7a1", "name": "Yonex Power Cushion 65 Z2",   "category": "shoes",       "stock": 18,  "price": 124.99 },
        { "id": "f2c8d4", "name": "Yonex BG 65 String",          "category": "string",      "stock": 95,  "price": 8.99 },
        { "id": "g6e1b9", "name": "Victor Overgrip Comfort",     "category": "grip",        "stock": 7,   "price": 4.49 },
        { "id": "h4d5f3", "name": "Yonex Team Series Racket Bag","category": "bag",         "stock": 12,  "price": 54.99 }
    ]
}

export default async function ProductList(){
    const products = await getProducts()
    return(
        <Card className="p-4 gap-4">
            <ProductListHeader/>
            <DataTable columns={columns} data={products}/>
        </Card>
    )
}