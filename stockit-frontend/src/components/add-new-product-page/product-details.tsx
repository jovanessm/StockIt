import { Card } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx";
import { X } from "lucide-react";

interface ProductDetailsProps {
    product: {
        name: string;
        category: string;
        price: string;
        stock: string;
        description: string;
        tags: string[];
    };
    onProductChange: (
        key: keyof ProductDetailsProps["product"],
        value: string | string[],
    ) => void;
    tagInput: string;
    onTagInputChange: (value: string) => void;
    onAddTag: () => void;
    onRemoveTag: (tag: string) => void;
    categories: string[];
}

export function ProductDetails({
    product,
    onProductChange,
    tagInput,
    onTagInputChange,
    onAddTag,
    onRemoveTag,
    categories,
}: ProductDetailsProps) {
    return (
        <div className="space-y-4">
            {/* Product Name */}
            <Card className="p-4">
                <div className="space-y-2">
                    <Label htmlFor="product-name">Product Name</Label>
                    <Input
                        id="product-name"
                        placeholder="Yonex Power Cushion 65 Z2"
                        value={product.name}
                        onChange={(e) =>
                            onProductChange("name", e.target.value)
                        }
                    />
                </div>
            </Card>

            {/* Category */}
            <Card className="p-4">
                <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                        value={product.category}
                        onValueChange={(value) =>
                            onProductChange("category", value)
                        }
                    >
                        <SelectTrigger id="category">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                    {cat}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </Card>

            {/* Price */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <Card className="p-4">
                    <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                                $
                            </span>
                            <Input
                                id="price"
                                type="number"
                                placeholder="175"
                                value={product.price}
                                onChange={(e) =>
                                    onProductChange("price", e.target.value)
                                }
                                step="0.01"
                                min="0"
                            />
                        </div>
                    </div>
                </Card>
                <Card className="p-4">
                    <div className="space-y-2">
                        <Label htmlFor="stock">Stock</Label>
                        <div className="flex items-center gap-2">
                            <Input
                                id="stock"
                                type="number"
                                placeholder="100"
                                value={product.stock}
                                onChange={(e) =>
                                    onProductChange("stock", e.target.value)
                                }
                                step="0.01"
                                min="0"
                            />
                        </div>
                    </div>
                </Card>
            </div>

            {/* Description */}
            <Card className="p-4">
                <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        placeholder="The Yonex Power Cushion 65 Z2 is designed for players seeking a blend of comfort and performance."
                        value={product.description}
                        onChange={(e) =>
                            onProductChange("description", e.target.value)
                        }
                        className="resize-none"
                    />
                </div>
            </Card>

            {/* Tags */}
            <Card className="p-4">
                <div className="space-y-3">
                    <Label htmlFor="tags">Tags</Label>
                    <div className="flex gap-2">
                        <Input
                            id="tags"
                            placeholder="Add a tag"
                            value={tagInput}
                            onChange={(e) => onTagInputChange(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    onAddTag();
                                }
                            }}
                        />
                        <Button
                            type="button"
                            onClick={onAddTag}
                            variant="outline"
                            size="sm"
                        >
                            Add
                        </Button>
                    </div>

                    {/* Tags Display */}
                    <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="default"
                                className="gap-1 cursor-pointer hover:bg-primary/90"
                            >
                                {tag}
                                <button
                                    onClick={() => onRemoveTag(tag)}
                                    className="ml-1 hover:opacity-70"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </Badge>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    );
}
