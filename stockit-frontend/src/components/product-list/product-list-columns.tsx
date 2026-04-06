import type {ColumnDef} from "@tanstack/react-table"
import {MoreHorizontal} from "lucide-react";
import {Link} from "react-router-dom";

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
    id: string
    name: string
    category: string
    stock: number
    price: number
}

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "category",
        header: "Category",
        filterFn: (row, columnId, filterValue) => {
            if (!filterValue) {
                return true
            }

            return row.getValue<string>(columnId) === filterValue
        },
    },
    {
        accessorKey: "stock",
        header: "Stock",
        filterFn: (row, columnId, filterValue) => {
            if (!filterValue) {
                return true
            }

            const stock = row.getValue<number>(columnId)

            if (filterValue === "outOfStock") {
                return stock === 0
            }

            if (filterValue === "lowStock") {
                return stock > 0 && stock <= 10
            }

            if (filterValue === "inStock") {
                return stock > 10
            }

            return true
        },
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Price</div>,
        cell: ({row}) => {
            const price = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(price)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        cell:
            ({row}) => {
                const product = row.original
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className={"min-w-40"}>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(product.id)}
                            >
                                Copy product ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem asChild>
                                <Link to={`/product/${product.id}`}>View product details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Delete product</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            }
    }
]