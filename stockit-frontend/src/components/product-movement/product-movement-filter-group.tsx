import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function ProductMovementFilterGroup() {
    return (
        <ToggleGroup
            type="single"
            size="lg"
            defaultValue="all"
            variant="outline"
            spacing={5}
            className="!inline-grid !w-max grid-flow-col auto-cols-fr"
        >
            <ToggleGroupItem value="all" aria-label="Toggle all" className="w-full">
                All
            </ToggleGroupItem>
            <ToggleGroupItem value="shuttlecock" aria-label="Toggle shuttlecock" className="w-full">
                Shuttlecock
            </ToggleGroupItem>
            <ToggleGroupItem value="racket" aria-label="Toggle racket" className="w-full">
                Racket
            </ToggleGroupItem>
            <ToggleGroupItem value="bag" aria-label="Toggle bag" className="w-full">
                Bag
            </ToggleGroupItem>
            <ToggleGroupItem value="shoes" aria-label="Toggle shoes" className="w-full">
                Shoes
            </ToggleGroupItem>
            <ToggleGroupItem value="string" aria-label="Toggle string" className="w-full">
                String
            </ToggleGroupItem>
            <ToggleGroupItem value="grip" aria-label="Toggle grip" className="w-full">
                Grip
            </ToggleGroupItem>
        </ToggleGroup>
    )
}
