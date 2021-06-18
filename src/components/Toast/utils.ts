export const NOOP = () => {}

export function generateUEID() {
  let first = Math.random() * 46656 || 0
  let second = Math.random() * 46656 || 0
  first = Number(`000${first.toString(36)}`.slice(-3))
  second = Number(`000${second.toString(36)}`.slice(-3))
  return first + second
}
