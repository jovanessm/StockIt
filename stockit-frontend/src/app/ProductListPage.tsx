import ProductList from "@/components/product-list/product-list.tsx";

export default function ProductListPage() {
    return (
        <>
            <div className="@container/main flex flex-1 flex-col gap-6 px-6 py-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold text-foreground">
                        Product List
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        View and manage all products in one place
                    </p>
                </div>
                <ProductList />
            </div>
        </>
    );
}
