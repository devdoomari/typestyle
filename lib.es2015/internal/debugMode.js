export function isDebugMode(env) {
    return env['NODE_ENV'] !== 'production' ||
        env['TYPESTYLE_ENV'] === 'debug';
}
