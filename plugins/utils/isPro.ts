export function isProduction(){

    const node_env = process.env.NODE_ENV || 'development';

    return node_env  === 'production'
}