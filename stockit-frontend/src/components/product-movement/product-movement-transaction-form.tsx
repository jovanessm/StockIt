import { Button } from "@/components/ui/button.tsx";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { ProductMovementTransactionItem } from "@/components/product-movement/product-movement-transaction-item.tsx";

export type TransactionItem = {
    id: string;
    imageSrc: string;
    title: string;
    subtitle: string;
    quantity: number;
};

type ProductMovementTransactionFormProps = {
    items: TransactionItem[];
    onIncrement: (id: string) => void;
    onDecrement: (id: string) => void;
    onRemove: (id: string) => void;
};

export function ProductMovementTransactionForm({
    items,
    onIncrement,
    onDecrement,
    onRemove,
}: ProductMovementTransactionFormProps) {
    return (
        <Card className="flex h-full min-h-[42rem] flex-col bg-muted/80 py-4">
            <CardHeader>
                <CardTitle className="text-3xl font-semibold text-primary">Transaction List</CardTitle>
            </CardHeader>
            <CardContent className="flex min-h-0 flex-1 flex-col">
                <form onSubmit={() => {}} className="flex min-h-0 flex-1 flex-col gap-6">
                    <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                        {items.map((item) => (
                            <ProductMovementTransactionItem
                                key={item.id}
                                imageSrc={item.imageSrc}
                                title={item.title}
                                subtitle={item.subtitle}
                                quantity={item.quantity}
                                onIncrement={() => onIncrement(item.id)}
                                onDecrement={() => onDecrement(item.id)}
                                onRemove={() => onRemove(item.id)}
                            />
                        ))}
                    </div>
                    <Button type="submit" className="h-14 w-full rounded-2xl text-base">
                        Save Transaction
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}