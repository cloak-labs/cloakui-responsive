export type BreakpointOptions<T> = {
  /* Applies to all screen sizes (mobile-first approach), like using Tailwind classes without a breakpoint modifier */
  mobile?: T;
  /* Applies to smaller tablet and wider screens (i.e. Tailwind's 'sm' breakpoint) */
  tablet?: T;
  /* Applies to larger tablet and wider screens (i.e. Tailwind's 'md' breakpoint) */
  tabletWide?: T;
  /* Applies to laptop and wider screens (i.e. Tailwind's 'lg' breakpoint) */
  laptop?: T;
  /* Applies to desktop and wider screens (i.e. Tailwind's 'xl' breakpoint) */
  desktop?: T;
  /* Applies to larger desktop and wider screens (i.e. Tailwind's '2xl' breakpoint) */
  desktopWide?: T;
};

export type OptionalBreakpointOptions<T> = T | BreakpointOptions<T>;

export type ResponsiveClassMap = {
  [key: string]: {
    [key in keyof BreakpointOptions<any>]: string;
  };
};
