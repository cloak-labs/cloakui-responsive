import { breakpointMediaQueries } from ".";
/**
 * Returns a 'sizes' string for <img sizes="..."> given a map of breakpoint width percentages, removing redundant rules.
 */
export const getImageSizesFromBreakpointWidths = (width, options = {}) => {
    const { filter = (w) => w } = options;
    const bpEntries = Object.entries(width).map(([bpKey, percentageWidth]) => {
        const breakpoint = bpKey;
        const query = breakpointMediaQueries[breakpoint];
        const widthNum = filter(Math.min(parseFloat(parseInt(percentageWidth).toFixed(2)), 100), { breakpoint, query });
        const sizeValue = typeof widthNum === "number" ? `${widthNum}vw` : widthNum;
        return { query, sizeValue };
    });
    // Remove redundant side-by-side breakpoints with the same size value:
    const filtered = bpEntries.filter((item, i, arr) => {
        // keep the last item (default, has no query)
        if (!item.query || i === arr.length - 1)
            return true;
        // if next size is different, keep this one; if same, skip this one (let bigger range cover)
        const next = arr[i + 1];
        return item.sizeValue !== next.sizeValue;
    });
    // Assemble the sizes string
    return filtered
        .map(({ query, sizeValue }, i, arr) => {
        // last breakpoint with no query stays as default
        if (!query || i === arr.length - 1)
            return sizeValue;
        return `${query} ${sizeValue}`;
    })
        .join(", ");
};
