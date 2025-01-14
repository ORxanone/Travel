import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "~/lib/utils";
import { ButtonProps } from "~/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "sm",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      className,
      "flex h-8 w-8 items-center justify-center rounded-full border",
      `${isActive ? "bg-sky-800 text-white" : "bg-transparent"}`,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn("rounded-full", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn("rounded-full", className)}
    {...props}
  >
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
function buttonVariants(arg0: {
  variant: string;
  size:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "2xs"
    | "xs"
    | ("sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | null | undefined)[]
    | {
        _hover?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _active?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _focus?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _focusWithin?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _focusVisible?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _disabled?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _visited?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _target?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _readOnly?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _readWrite?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _empty?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _checked?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _enabled?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _expanded?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _highlighted?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _complete?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _incomplete?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _dragging?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _before?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _after?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _firstLetter?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _firstLine?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _marker?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _selection?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _file?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _backdrop?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _first?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _last?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _notFirst?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _notLast?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _only?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _even?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _odd?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _peerFocus?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _peerHover?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _peerActive?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _peerFocusWithin?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _peerFocusVisible?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _peerDisabled?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _peerChecked?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _peerInvalid?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _peerExpanded?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _peerPlaceholderShown?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _groupFocus?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _groupHover?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _groupActive?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _groupFocusWithin?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _groupFocusVisible?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _groupDisabled?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _groupChecked?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _groupExpanded?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _groupInvalid?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _indeterminate?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _required?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _valid?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _invalid?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _autofill?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _inRange?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _outOfRange?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _placeholder?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _placeholderShown?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _pressed?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _selected?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _grabbed?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _underValue?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _overValue?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _atValue?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _default?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _optional?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _open?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _closed?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _fullscreen?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _loading?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _hidden?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _current?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _currentPage?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _currentStep?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _today?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _unavailable?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _rangeStart?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _rangeEnd?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _now?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _topmost?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _motionReduce?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _motionSafe?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _print?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _landscape?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _portrait?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _dark?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _light?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _osDark?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _osLight?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _highContrast?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _lessContrast?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _moreContrast?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _ltr?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _rtl?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _scrollbar?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _scrollbarThumb?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _scrollbarTrack?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _horizontal?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _vertical?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _icon?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        _starting?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        sm?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        smOnly?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        smDown?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        md?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        mdOnly?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        mdDown?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        lg?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        lgOnly?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        lgDown?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        xl?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        xlOnly?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        xlDown?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        "2xl"?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        "2xlOnly"?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        "2xlDown"?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        smToMd?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        smToLg?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        smToXl?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        smTo2xl?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        mdToLg?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        mdToXl?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        mdTo2xl?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        lgToXl?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        lgTo2xl?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        xlTo2xl?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
        base?: import("@chakra-ui/react").ConditionalValue<
          "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined
        >;
      };
}): import("clsx").ClassValue {
  throw new Error("Function not implemented.");
}
