import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type ProductListSelectProps = {
    data: {
        label: string
        placeholder: string
        items: Record<string, string>
    }
    value?: string
    onValueChange?: (value: string) => void
}

export function ProductListSelect({ data, value, onValueChange }: ProductListSelectProps) {
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder={data.placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{data.label}</SelectLabel>
                    {Object.entries(data.items).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                            {label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
