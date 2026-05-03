import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

type ProductMovementFilterGroupProps = {
    value: string;
    onValueChange: (value: string) => void;
    categories?: string[];
}

const DEFAULT_CATEGORIES = ["all", "shuttlecock", "racket", "bag", "shoes", "string", "grip"];

export function ProductMovementFilterGroup({ value, onValueChange, categories = DEFAULT_CATEGORIES }: ProductMovementFilterGroupProps) {
    const formatLabel = (category: string) => {
        return category.charAt(0).toUpperCase() + category.slice(1);
    };

    return (
        <ToggleGroup
            type="single"
            size="lg"
            value={value}
            onValueChange={(nextValue) => onValueChange(nextValue || "all")}
            variant="outline"
            spacing={5}
            className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:inline-grid! xl:w-max! xl:grid-flow-col xl:auto-cols-fr"
        >
            {categories.map((category) => (
                <ToggleGroupItem 
                    key={category} 
                    value={category} 
                    aria-label={`Toggle ${category}`} 
                    className="w-full"
                >
                    {formatLabel(category)}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    )
}
