import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

export function PopoverDefault({content}) {
  return (
    <Popover>
      <PopoverHandler>
        <Button>عمليات</Button>
      </PopoverHandler>
      <PopoverContent>
        {content}
      </PopoverContent>
    </Popover>
  );
}
