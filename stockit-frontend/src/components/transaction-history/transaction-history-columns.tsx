import type { ColumnDef } from "@tanstack/react-table"
import { Copy, Link as LinkIcon, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type TransactionRow = {
    transactionId: string
    productId: string
    productName: string
    dateTime: string
    stockBefore: number
    stockAfter: number
    method: "restock" | "adjustment" | "sale"
    status: "completed" | "pending" | "cancelled"
}

const formatIsoDateTimeForUi = (value: string) => {
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return value

    const year = date.getUTCFullYear()
    const month = String(date.getUTCMonth() + 1).padStart(2, "0")
    const day = String(date.getUTCDate()).padStart(2, "0")
    const hour = String(date.getUTCHours()).padStart(2, "0")
    const minute = String(date.getUTCMinutes()).padStart(2, "0")

    return `${year}-${month}-${day} ${hour}:${minute}`
}

const getMethodBadgeVariant = (method: string) => {
    if (method === "restock") return "default"
    if (method === "adjustment") return "secondary"
    if (method === "sale") return "outline"
    return "outline"
}

const getStatusBadgeVariant = (status: string) => {
    if (status === "completed") return "default"
    if (status === "pending") return "secondary"
    return "outline"
}

export const columns: ColumnDef<TransactionRow>[] = [
    {
        accessorKey: "transactionId",
        header: "TRANSACTION ID",
    },
    {
        accessorKey: "productId",
        header: "PRODUCT ID",
    },
    {
        accessorKey: "productName",
        header: "PRODUCT NAME",
    },
    {
        accessorKey: "dateTime",
        header: "DATETIME",
        cell: ({ row }) => formatIsoDateTimeForUi(row.original.dateTime),
    },
    {
        accessorKey: "stockBefore",
        header: "STOCK BEFORE",
    },
    {
        accessorKey: "stockAfter",
        header: "STOCK AFTER",
    },
    {
        accessorKey: "method",
        header: "METHOD",
        cell: ({ row }) => {
            const method = row.original.method
            return (
                <Badge variant={getMethodBadgeVariant(method)}>
                    {method.charAt(0).toUpperCase() + method.slice(1)}
                </Badge>
            )
        },
    },
    {
        accessorKey: "status",
        header: "STATUS",
        cell: ({ row }) => {
            const status = row.original.status
            return (
                <Badge variant={getStatusBadgeVariant(status)}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </Badge>
            )
        },
    },
    {
        id: "actions",
        header: "ACTION",
        cell: ({ row }) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="min-w-40">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(row.original.transactionId)}
                        >
                            <Copy className="mr-2 h-4 w-4" />
                            Copy Transaction ID
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(row.original.productId)}
                        >
                            <Copy className="mr-2 h-4 w-4" />
                            Copy Product ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <a href={`/product/${row.original.productId}`} className="flex items-center">
                                <LinkIcon className="mr-2 h-4 w-4" />
                                Go to Product Details
                            </a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

