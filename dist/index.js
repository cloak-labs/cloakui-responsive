export * from "./types";
export const breakpoints = [
    "mobile",
    "tablet",
    "tabletWide",
    "laptop",
    "desktop",
    "desktopWide",
];
export const breakpointMediaQueries = {
    mobile: "(max-width: 640px)",
    tablet: "(max-width: 768px)",
    tabletWide: "(max-width: 1024px)",
    laptop: "(max-width: 1280px)",
    desktop: "(max-width: 1536px)",
    desktopWide: null,
};
export const breakpointTailwindModifiers = {
    mobile: "",
    tablet: "sm:",
    tabletWide: "md:",
    laptop: "lg:",
    desktop: "xl:",
    desktopWide: "2xl:",
};
/**
 * Returns all needed class names for a given property to satisfy the user-specified breakpoints.
 * @param property - The property to generate the class names for
 * @param options - The user-specified breakpoint options for the property
 * @returns The generated class names
 */
export function responsiveClassNameBuilder(classMap) {
    return (property, breakpointOptions) => {
        return breakpoints
            .map((breakpoint) => {
            const className = classMap[property][breakpoint];
            return className && breakpointOptions?.[breakpoint] !== undefined
                ? className
                : "";
        })
            .filter(Boolean)
            .join(" ");
    };
}
/**
 * Generates CSS variables for a given property based on the user-specified breakpoint options.
 * @param variableName - The name of the variable, excluding the `--` prefix
 * @param breakpointOptions - The user-specified breakpoint options for the property
 * @returns The generated CSS variables
 */
export function getResponsiveCSSVariables(variableName, breakpointOptions) {
    if (breakpointOptions === undefined)
        return null;
    return breakpoints.reduce((acc, breakpoint) => {
        const value = breakpointOptions[breakpoint];
        if (value !== undefined) {
            acc[buildResponsiveCSSVariable(variableName, breakpoint)] = value;
        }
        return acc;
    }, {});
}
/**
 * Helper to build a CSS variable name.
 * @param variableName - The name of the variable, excluding the `--` prefix
 * @param breakpoint - The breakpoint to build the variable for
 * @returns The full CSS variable name
 */
export function buildResponsiveCSSVariable(variableName, breakpoint) {
    return `--${variableName}${breakpoint === "mobile"
        ? ""
        : `-${{
            tablet: "sm",
            tabletWide: "md",
            laptop: "lg",
            desktop: "xl",
            desktopWide: "2xl",
        }[breakpoint]}`}`;
}
/**
 * Fills in missing breakpoint options with the closest valid breakpoint value (looking backwards at smaller breakpoints)
 * @param options - The breakpoint options to fill
 * @param fallback - The fallback value to use if no previous value is found
 * @returns The filled options
 */
export function fillMissingBreakpoints(options, fallback) {
    return breakpoints.reduce((acc, bp) => {
        // If this breakpoint has a value, use it
        if (options[bp] !== undefined && options[bp] !== "") {
            acc[bp] = options[bp];
            return acc;
        }
        // Otherwise look through all previous breakpoints until we find a value
        for (let i = breakpoints.indexOf(bp) - 1; i >= 0; i--) {
            const prevValue = options[breakpoints[i]];
            if (prevValue !== undefined && prevValue !== "") {
                acc[bp] = prevValue;
                return acc;
            }
        }
        // If no previous values found, default to provided fallback
        acc[bp] = fallback;
        return acc;
    }, {});
}
