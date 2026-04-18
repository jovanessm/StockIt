import { SearchIcon } from "lucide-react";

import { Field } from "@/components/ui/field.tsx";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group.tsx";

export function ProductMovementSearchBar() {
  return (
    <Field>
      <InputGroup className="w-full">
        <InputGroupInput placeholder="Filter products..." />
        <InputGroupAddon align="inline-end">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
