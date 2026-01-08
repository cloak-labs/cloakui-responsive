export type BreakpointOptions<T> = {
    mobile?: T;
    tablet?: T;
    tabletWide?: T;
    laptop?: T;
    desktop?: T;
    desktopWide?: T;
};
export type OptionalBreakpointOptions<T> = T | BreakpointOptions<T>;
export type ResponsiveClassMap = {
    [key: string]: {
        [key in keyof BreakpointOptions<any>]: string;
    };
};
//# sourceMappingURL=types.d.ts.map