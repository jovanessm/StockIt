import { useState } from "react";

import { Button } from "@/components/ui/button.tsx";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { ProductMovementTransactionItem } from "@/components/product-movement/product-movement-transaction-item.tsx";

type TransactionItem = {
    id: string;
    imageSrc: string;
    title: string;
    subtitle: string;
    quantity: number;
};

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

export function ProductMovementTransactionForm() {
    const [items, setItems] = useState(initialTransactionItems);

    const updateQuantity = (id: string, delta: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item,
            ),
        );
    };

    const removeItem = (id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <Card className="flex h-full min-h-[42rem] bg-muted/80 py-5">
            <CardHeader>
                <CardTitle className="text-3xl font-medium text-primary">Transaction List</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col h-full flex-1">
                <form className="flex h-full flex-col flex-1 gap-6 justify-between">
                    <div className="space-y-3">
                        {items.map((item) => (
                            <ProductMovementTransactionItem
                                key={item.id}
                                imageSrc={item.imageSrc}
                                title={item.title}
                                subtitle={item.subtitle}
                                quantity={item.quantity}
                                onIncrement={() => updateQuantity(item.id, 1)}
                                onDecrement={() => updateQuantity(item.id, -1)}
                                onRemove={() => removeItem(item.id)}
                            />
                        ))}
                    </div>

                    <Button type="button" className="mt-auto h-14 w-full rounded-2xl text-base">
                        Save Transaction
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}