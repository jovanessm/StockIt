import {Field} from "@/components/ui/field.tsx"
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx"
import {SearchIcon} from "lucide-react"
import {ProductListSelect} from "@/components/product-list/product-list-select.tsx"

const statusSelectData = {
    label: "Status",
    placeholder: "Status",
    items: {
        all: "All",
        inStock: "In stock",
        lowStock: "Low stock",
        outOfStock: "Out of stock",
    },
}

const categorySelectData = {
    label: "Category",
    placeholder: "Category",
    items: {
        all: "All",
        racket: "Racket",
        bag: "Bag",
        grip: "Grip",
        other: "Other",
    },
}

export function ProductListHeader() {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
                <Field>
                    <InputGroup>
                        <InputGroupInput placeholder="Search Product" />
                        <InputGroupAddon align="inline-end">
                            <SearchIcon />
                        </InputGroupAddon>
                    </InputGroup>
                </Field>
            </div>
            <div className="flex flex-col lg:flex-row gap-3">
                <ProductListSelect data={statusSelectData} />
                <ProductListSelect data={categorySelectData} />
            </div>
        </div>
    )
}