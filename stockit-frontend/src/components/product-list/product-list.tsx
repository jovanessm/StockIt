import {ProductListHeader} from "@/components/product-list/product-list-header.tsx";
import {ProductListDataGrid} from "@/components/product-list/product-list-data-grid.tsx";

export function ProductList(){
    return(
        <>
            <ProductListHeader/>
            <ProductListDataGrid/>
        </>
    )
}