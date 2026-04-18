import {ProductMovementFilterGroup} from "@/components/product-movement/product-movement-filter-group.tsx";
import {ProductMovementSearchBar} from "@/components/product-movement/product-movement-search-bar.tsx";
import {ProductMovementTransactionForm} from "@/components/product-movement/product-movement-transaction-form.tsx";
import {Card} from "@/components/ui/card.tsx";

export default function ProductMovementPage() {
    return (
        <Card className={"m-4 p-4"}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                <div className="lg:w-[70%] flex flex-col gap-4 items-center">
                    <ProductMovementSearchBar/>
                    <ProductMovementFilterGroup/>
                </div>
                <div className="lg:w-[30%]">
                    <ProductMovementTransactionForm/>
                </div>
            </div>
        </Card>
    )
}