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
}

export function ProductListSelect({ data }: ProductListSelectProps) {
    return (
        <Select>
            <SelectTrigger className="w-full max-w-48">
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
