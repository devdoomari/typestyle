/** Raf for node + browser */
export var raf = typeof requestAnimationFrame === 'undefined' ? setTimeout : requestAnimationFrame.bind(window);
/**
 * Utility to join classes conditionally
 */
export function classes() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(function (c) { return !!c; }).join(' ');
}
/**
 * Merges various styles into a single style object.
 * Note: if two objects have the same property the last one wins
 */
export function extend() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    /** The final result we will return */
    var result = WeakMap ? new WeakMap() : {};
    for (var _a = 0, objects_1 = objects; _a < objects_1.length; _a++) {
        var object = objects_1[_a];
        if (object == null || object === false) {
            continue;
        }
        for (var key in object) {
            /** Falsy values except a explicit 0 is ignored */
            var val = object[key];
            if (!val && val !== 0) {
                continue;
            }
            /** if nested media or pseudo selector */
            if (key === '$nest' && val) {
                result[key] = result['$nest'] ? extend(result['$nest'], val) : val;
            }
            else if ((key.indexOf('&') !== -1 || key.indexOf('@media') === 0)) {
                result[key] = result[key] ? extend(result[key], val) : val;
            }
            else {
                result[key] = val;
            }
        }
    }
    return result;
}
/**
 * Utility to help customize styles with media queries. e.g.
 * ```
 * style(
 *  media({maxWidth:500}, {color:'red'})
 * )
 * ```
 */
export var media = function (mediaQuery) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    var mediaQuerySections = [];
    if (mediaQuery.type)
        mediaQuerySections.push(mediaQuery.type);
    if (mediaQuery.orientation)
        mediaQuerySections.push(mediaQuery.orientation);
    if (mediaQuery.minWidth)
        mediaQuerySections.push("(min-width: " + mediaQuery.minWidth + "px)");
    if (mediaQuery.maxWidth)
        mediaQuerySections.push("(max-width: " + mediaQuery.maxWidth + "px)");
    if (mediaQuery.minHeight)
        mediaQuerySections.push("(min-height: " + mediaQuery.minHeight + "px)");
    if (mediaQuery.maxHeight)
        mediaQuerySections.push("(max-height: " + mediaQuery.maxHeight + "px)");
    var stringMediaQuery = "@media " + mediaQuerySections.join(' and ');
    var object = {
        $nest: (_a = {},
            _a[stringMediaQuery] = extend.apply(void 0, objects),
            _a)
    };
    return object;
    var _a;
};
