import type { BreakpointOptions, ResponsiveClassMap } from "./types";
export * from "./types";
export declare const breakpoints: (keyof BreakpointOptions<any>)[];
export declare const breakpointMediaQueries: {
    readonly mobile: "(max-width: 640px)";
    readonly tablet: "(max-width: 768px)";
    readonly tabletWide: "(max-width: 1024px)";
    readonly laptop: "(max-width: 1280px)";
    readonly desktop: "(max-width: 1536px)";
    readonly desktopWide: any;
};
export declare const breakpointTailwindModifiers: {
    readonly mobile: "";
    readonly tablet: "sm:";
    readonly tabletWide: "md:";
    readonly laptop: "lg:";
    readonly desktop: "xl:";
    readonly desktopWide: "2xl:";
};
/**
 * Returns all needed class names for a given property to satisfy the user-specified breakpoints.
 * @param property - The property to generate the class names for
 * @param options - The user-specified breakpoint options for the property
 * @returns The generated class names
 */
export declare function responsiveClassNameBuilder<T extends ResponsiveClassMap>(classMap: T): (property: keyof T, breakpointOptions: Partial<BreakpointOptions<any>>) => string;
/**
 * Generates CSS variables for a given property based on the user-specified breakpoint options.
 * @param variableName - The name of the variable, excluding the `--` prefix
 * @param breakpointOptions - The user-specified breakpoint options for the property
 * @returns The generated CSS variables
 */
export declare function getResponsiveCSSVariables<T>(variableName: string, breakpointOptions: BreakpointOptions<T>): Record<string, T>;
/**
 * Helper to build a CSS variable name.
 * @param variableName - The name of the variable, excluding the `--` prefix
 * @param breakpoint - The breakpoint to build the variable for
 * @returns The full CSS variable name
 */
export declare function buildResponsiveCSSVariable(variableName: string, breakpoint: keyof BreakpointOptions<any>): string;
/**
 * Fills in missing breakpoint options with the closest valid breakpoint value (looking backwards at smaller breakpoints)
 * @param options - The breakpoint options to fill
 * @param fallback - The fallback value to use if no previous value is found
 * @returns The filled options
 */
export declare function fillMissingBreakpoints<T>(options: BreakpointOptions<T>, fallback: any): BreakpointOptions<T>;
//# sourceMappingURL=index.d.ts.map