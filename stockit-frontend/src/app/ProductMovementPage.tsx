import {ProductMovementFilterGroup} from "@/components/product-movement/product-movement-filter-group.tsx";
import {ProductMovementSearchBar} from "@/components/product-movement/product-movement-search-bar.tsx";
import {ProductMovementTransactionForm} from "@/components/product-movement/product-movement-transaction-form.tsx";

export default function ProductMovementPage() {
    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
            <div className="lg:w-[70%]">
                <ProductMovementSearchBar/>
                <ProductMovementFilterGroup/>
            </div>
            <div className="lg:w-[30%]">
                <ProductMovementTransactionForm/>
            </div>
        </div>
    )
}