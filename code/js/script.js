function externalFunc() {
  return 'I\'m external function'
}
export const config = {}
export function sayHi() { console.log(`HI ${config.user}`) }
export default config