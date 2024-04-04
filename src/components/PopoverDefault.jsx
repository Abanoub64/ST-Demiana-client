import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { CiMenuKebab } from "react-icons/ci";

export function PopoverDefault({ content }) {
  return (
    <Popover>
      <PopoverHandler>
        <Button size="sm" className=" text-xl font-bold" variant="text">
          <CiMenuKebab />
        </Button>
      </PopoverHandler>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  );
}
