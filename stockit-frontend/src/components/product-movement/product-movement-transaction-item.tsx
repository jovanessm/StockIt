import { MinusIcon, PlusIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button.tsx";

type ProductMovementTransactionItemProps = {
    imageSrc: string;
    title: string;
    subtitle: string;
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onRemove: () => void;
};

export function ProductMovementTransactionItem({
    imageSrc,
    title,
    subtitle,
    quantity,
    onIncrement,
    onDecrement,
    onRemove,
}: ProductMovementTransactionItemProps) {
    return (
        <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-3">
            <img
                src={imageSrc}
                alt={title}
                className="h-16 w-16 shrink-0 rounded-xl object-cover"
                loading="lazy"
            />

            <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                        <p className="truncate font-medium leading-tight text-foreground">{title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
                    </div>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        className="shrink-0 rounded-full text-muted-foreground hover:text-foreground"
                        onClick={onRemove}
                        aria-label={`Remove ${title}`}
                    >
                        <XIcon className="size-4" />
                    </Button>
                </div>

                <div className="mt-3 flex items-center gap-2">
                    <Button
                        type="button"
                        variant="outline"
                        size="icon-sm"
                        className="rounded-full"
                        onClick={onDecrement}
                        disabled={quantity <= 1}
                        aria-label={`Decrease ${title} quantity`}
                    >
                        <MinusIcon className="size-3.5" />
                    </Button>

                    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-muted px-2 text-sm font-medium">
                        {quantity}
                    </span>

                    <Button
                        type="button"
                        size="icon-sm"
                        className="rounded-full"
                        onClick={onIncrement}
                        aria-label={`Increase ${title} quantity`}
                    >
                        <PlusIcon className="size-3.5" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
