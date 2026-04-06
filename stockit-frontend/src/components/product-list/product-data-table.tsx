import type {ColumnDef} from "@tanstack/react-table"
import {useState} from "react"
import {SearchIcon} from "lucide-react"

import {Field} from "@/components/ui/field.tsx"
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx"
import {DataTable} from "@/components/ui/data-table.tsx"
import {ProductListSelect} from "@/components/product-list/product-list-select.tsx"
import type {Product} from "@/components/product-list/product-list-columns.tsx"

type ProductDataTableProps = {
    columns: ColumnDef<Product, unknown>[]
    data: Product[]
}

const statusSelectData = {
    label: "Status",
    placeholder: "Status",
    items: {
        all: "All stock status",
        inStock: "In stock",
        lowStock: "Low stock",
        outOfStock: "Out of stock",
    },
}

const categorySelectData = {
    label: "Category",
    placeholder: "Category",
    items: {
        all: "All categories",
        shuttlecock: "Shuttlecock",
        racket: "Racket",
        bag: "Bag",
        shoes: "Shoes",
        string: "String",
        grip: "Grip",
    },
}

export function ProductDataTable({columns, data}: ProductDataTableProps) {
    const [statusFilter, setStatusFilter] = useState("all")
    const [categoryFilter, setCategoryFilter] = useState("all")

    return (
        <DataTable
            columns={columns}
            data={data}
            className="px-4"
            renderToolbar={(table) => {
                const handleStatusChange = (value: string) => {
                    setStatusFilter(value)
                    table.getColumn("stock")?.setFilterValue(value === "all" ? undefined : value)
                }

                const handleCategoryChange = (value: string) => {
                    setCategoryFilter(value)
                    table.getColumn("category")?.setFilterValue(value === "all" ? undefined : value)
                }

                return (
                    <div className="flex flex-col gap-3 pb-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex w-full items-center sm:w-48 lg:w-[31.5rem]">
                            <Field>
                                <InputGroup className="w-full">
                                    <InputGroupInput
                                        placeholder="Filter products..."
                                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                                        onChange={(event) =>
                                            table.getColumn("name")?.setFilterValue(event.target.value)
                                        }
                                    />
                                    <InputGroupAddon align="inline-end">
                                        <SearchIcon/>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Field>
                        </div>
                        <div className="flex flex-col gap-3 lg:flex-row">
                            <ProductListSelect
                                data={statusSelectData}
                                value={statusFilter}
                                onValueChange={handleStatusChange}
                            />
                            <ProductListSelect
                                data={categorySelectData}
                                value={categoryFilter}
                                onValueChange={handleCategoryChange}
                            />
                        </div>
                    </div>
                )
            }}
        />
    )
}


