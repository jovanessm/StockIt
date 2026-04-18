import { InfoIcon, PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button.tsx";
import { Card } from "@/components/ui/card.tsx";

export type ProductMovementCatalogItem = {
    id: string;
    imageSrc: string;
    name: string;
    info: string;
};

type ProductMovementGalleryProps = {
    items: ProductMovementCatalogItem[];
    onAdd: (item: ProductMovementCatalogItem) => void;
};

export function ProductMovementGallery({ items, onAdd }: ProductMovementGalleryProps) {
    const navigate = useNavigate();

    return (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
                <Card
                    key={item.id}
                    className="gap-0 overflow-hidden border-border bg-muted/70 p-3 shadow-sm"
                >
                    <div className="flex h-full flex-col gap-3">
                        <div className="overflow-hidden rounded-2xl bg-card">
                            <img
                                src={item.imageSrc}
                                alt={item.name}
                                className="aspect-[4/3] w-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        <div className="flex items-center justify-between gap-3 px-1 pb-1">
                            <div className="min-w-0">
                                <p className="truncate text-base font-medium leading-tight text-foreground">
                                    {item.name}
                                </p>
                                <p className="mt-1 truncate text-xs text-muted-foreground">{item.info}</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon-sm"
                                    className="rounded-full"
                                    onClick={() => navigate(`/product/${item.id}`)}
                                    aria-label={`View details for ${item.name}`}
                                >
                                    <InfoIcon className="size-3.5" />
                                </Button>
                                <Button
                                    type="button"
                                    size="icon-sm"
                                    className="rounded-full"
                                    onClick={() => onAdd(item)}
                                    aria-label={`Add ${item.name} to transaction list`}
                                >
                                    <PlusIcon className="size-3.5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
}

