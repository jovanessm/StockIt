import {ProductList} from "@/components/product-list/product-list.tsx";

export default function ProductListPage(){
    return(
        <>
            <div className="@container/main flex flex-1 flex-col gap-4 py-6">
                <ProductList/>
            </div>
        </>
    )
}