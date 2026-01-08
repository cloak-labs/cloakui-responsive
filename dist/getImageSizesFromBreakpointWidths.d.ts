import type { BreakpointOptions } from "./types";
/**
 * Returns a 'sizes' string for <img sizes="..."> given a map of breakpoint width percentages, removing redundant rules.
 */
export declare const getImageSizesFromBreakpointWidths: (width: BreakpointOptions<string>, options?: {
    /** A function that can be used to filter the resulting size, enabling custom logic/overrides. Return a number to apply the "vw" unit, or a string to apply a custom unit or calculation. */
    filter?: (width: number, context: {
        breakpoint: keyof BreakpointOptions<string>;
        query: string;
    }) => number | string;
}) => string;
//# sourceMappingURL=getImageSizesFromBreakpointWidths.d.ts.map