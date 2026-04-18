import { useState } from "react";

import { ProductMovementFilterGroup } from "@/components/product-movement/product-movement-filter-group.tsx";
import {
    ProductMovementGallery,
    type ProductMovementCatalogItem,
} from "@/components/product-movement/product-movement-gallery.tsx";
import { ProductMovementSearchBar } from "@/components/product-movement/product-movement-search-bar.tsx";
import {
    ProductMovementTransactionForm,
    type TransactionItem,
} from "@/components/product-movement/product-movement-transaction-form.tsx";
import { Card } from "@/components/ui/card.tsx";

const productItems: ProductMovementCatalogItem[] = [
    {
        id: "yonex-astrox-88s-pro",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1000.jpg",
        name: "Yonex Astrox 88S Pro",
        info: "Control-oriented doubles racket",
    },
    {
        id: "yonex-aerosensa-50",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1001.jpg",
        name: "Yonex Aerosensa 50",
        info: "Premium feather shuttlecock",
    },
    {
        id: "yonex-power-cushion-65-z2",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1002.jpg",
        name: "Yonex Power Cushion 65 Z2",
        info: "Lightweight indoor court shoes",
    },
    {
        id: "yonex-bg-65-string",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1003.jpg",
        name: "Yonex BG 65 String",
        info: "Durable all-round string set",
    },
    {
        id: "victor-overgrip-comfort",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1004.jpg",
        name: "Victor Overgrip Comfort",
        info: "Soft grip tape for control",
    },
    {
        id: "yonex-team-series-bag",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1005.jpg",
        name: "Yonex Team Series Bag",
        info: "Racket bag with extra storage",
    },
];

const initialTransactionItems: TransactionItem[] = [
    {
        id: "yonex-astrox-88s-pro",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1000.jpg",
        title: "Yonex Astrox 88S Pro",
        subtitle: "Control-oriented doubles racket",
        quantity: 2,
    },
    {
        id: "yonex-aerosensa-50",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1001.jpg",
        title: "Yonex Aerosensa 50",
        subtitle: "Premium feather shuttlecock",
        quantity: 1,
    },
    {
        id: "yonex-power-cushion-65-z2",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1002.jpg",
        title: "Yonex Power Cushion 65 Z2",
        subtitle: "Lightweight indoor court shoes",
        quantity: 3,
    },
    {
        id: "yonex-bg-65-string",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1003.jpg",
        title: "Yonex BG 65 String",
        subtitle: "Durable all-round string set",
        quantity: 1,
    },
];

export default function ProductMovementPage() {
    const [transactionItems, setTransactionItems] = useState(initialTransactionItems);

    const addToTransaction = (item: ProductMovementCatalogItem) => {
        setTransactionItems((prevItems) => {
            const existingItem = prevItems.find((transactionItem) => transactionItem.id === item.id);

            if (existingItem) {
                return prevItems.map((transactionItem) =>
                    transactionItem.id === item.id
                        ? { ...transactionItem, quantity: transactionItem.quantity + 1 }
                        : transactionItem,
                );
            }

            return [
                ...prevItems,
                {
                    id: item.id,
                    imageSrc: item.imageSrc,
                    title: item.name,
                    subtitle: item.info,
                    quantity: 1,
                },
            ];
        });
    };

    const updateQuantity = (id: string, delta: number) => {
        setTransactionItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item,
            ),
        );
    };

    const removeItem = (id: string) => {
        setTransactionItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <Card className="m-4 p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                <div className="flex w-full flex-col gap-4 lg:w-[70%]">
                    <ProductMovementSearchBar />
                    <ProductMovementFilterGroup />
                    <ProductMovementGallery items={productItems} onAdd={addToTransaction} />
                </div>
                <div className="w-full lg:w-[30%]">
                    <ProductMovementTransactionForm
                        items={transactionItems}
                        onIncrement={(id) => updateQuantity(id, 1)}
                        onDecrement={(id) => updateQuantity(id, -1)}
                        onRemove={removeItem}
                    />
                </div>
            </div>
        </Card>
    );
}