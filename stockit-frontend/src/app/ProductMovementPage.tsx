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
        id: "spicy-tuna-roll",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1000.jpg",
        name: "Spicy Tuna Roll",
        info: "Extra avocado, spicy mayo",
    },
    {
        id: "chicken-teriyaki-bento",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1001.jpg",
        name: "Chicken Teriyaki Bento",
        info: "Extra sauce, no pickled ginger",
    },
    {
        id: "california-roll",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1002.jpg",
        name: "California Roll",
        info: "Extra avocado",
    },
    {
        id: "salmon-nigiri",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1003.jpg",
        name: "Salmon Nigiri",
        info: "No wasabi",
    },
    {
        id: "dragon-roll",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1004.jpg",
        name: "Dragon Roll",
        info: "Extra cucumber",
    },
    {
        id: "tuna-sashimi",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1005.jpg",
        name: "Tuna Sashimi",
        info: "Soy sauce on the side",
    },
];

const initialTransactionItems: TransactionItem[] = [
    {
        id: "spicy-tuna-roll",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1000.jpg",
        title: "Spicy Tuna Roll",
        subtitle: "Extra avocado, spicy mayo",
        quantity: 2,
    },
    {
        id: "chicken-teriyaki-bento",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1001.jpg",
        title: "Chicken Teriyaki Bento",
        subtitle: "Extra sauce, no pickled ginger",
        quantity: 1,
    },
    {
        id: "california-roll",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1002.jpg",
        title: "California Roll",
        subtitle: "Extra avocado",
        quantity: 3,
    },
    {
        id: "salmon-nigiri",
        imageSrc: "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs/image-1003.jpg",
        title: "Salmon Nigiri",
        subtitle: "No wasabi",
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