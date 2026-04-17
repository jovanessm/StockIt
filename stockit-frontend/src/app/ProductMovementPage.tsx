import {Field} from "@/components/ui/field.tsx";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import {SearchIcon} from "lucide-react";

export default function ProductMovementPage() {
    return (
        <div className="flex flex-row">
            <div className="lg:w-[70%]">
                <Field>
                    <InputGroup className="w-full">
                        <InputGroupInput
                            placeholder="Filter products..."
                        />
                        <InputGroupAddon align="inline-end">
                            <SearchIcon/>
                        </InputGroupAddon>
                    </InputGroup>
                </Field>
            </div>
        </div>
    )
}