import { SearchIcon } from "lucide-react";

import { Field } from "@/components/ui/field.tsx";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group.tsx";

type ProductMovementSearchBarProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export function ProductMovementSearchBar({
  value,
  onValueChange,
}: ProductMovementSearchBarProps) {
  return (
    <Field>
      <InputGroup className="w-full">
        <InputGroupInput
          placeholder="Filter products..."
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
        />
        <InputGroupAddon align="inline-end">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
