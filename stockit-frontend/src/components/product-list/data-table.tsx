import type {ColumnDef, ColumnFiltersState} from "@tanstack/react-table"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {useState} from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Button} from "@/components/ui/button"
import {Field} from "@/components/ui/field.tsx";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import {SearchIcon} from "lucide-react";
import {ProductListSelect} from "@/components/product-list/product-list-select.tsx";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
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

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                         }: DataTableProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [statusFilter, setStatusFilter] = useState("all")
    const [categoryFilter, setCategoryFilter] = useState("all")

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        }
    })

    const handleStatusChange = (value: string) => {
        setStatusFilter(value)
        table.getColumn("stock")?.setFilterValue(value === "all" ? undefined : value)
    }

    const handleCategoryChange = (value: string) => {
        setCategoryFilter(value)
        table.getColumn("category")?.setFilterValue(value === "all" ? undefined : value)
    }

    return (
        <div className="px-4">
            <div className="flex flex-col gap-3 pb-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex w-full sm:w-48 lg:w-[31.5rem] items-center">
                    <Field>
                        <InputGroup className="w-full">
                            <InputGroupInput placeholder="Filter products..."
                                             value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                                             onChange={(event) =>
                                                 table.getColumn("name")?.setFilterValue(event.target.value)
                                             }/>
                            <InputGroupAddon align="inline-end">
                                <SearchIcon/>
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                </div>
                <div className="flex flex-col lg:flex-row gap-3">
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
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 pt-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    )
}
