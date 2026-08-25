export type Cart = Record<string, number>
export const PAYABLE_TOTAL = 0
export const PROMO_CODE = '7s'
const KEY = 'little-orbit:cart:v1'
const ORDER_KEY = 'little-orbit:orders:v1'

export type CheckoutDiscounts = {
  promoApplied: boolean
  promoDiscountHkd: number
  experienceDiscountHkd: number
  payableHkd: 0
}

export function calculateCheckoutDiscounts(subtotalHkd: number, code: string): CheckoutDiscounts {
  const subtotal = Math.max(0, Math.trunc(subtotalHkd))
  const promoApplied = code.trim().toLowerCase() === PROMO_CODE
  const promoDiscountHkd = promoApplied ? Math.round(subtotal * .9) : 0
  return {promoApplied,promoDiscountHkd,experienceDiscountHkd:subtotal-promoDiscountHkd,payableHkd:PAYABLE_TOTAL}
}

export type FictionalOrder = {
  id: string
  createdAt: string
  items: Array<{ productId: string; quantity: number }>
  imaginarySubtotalHkd: number
  chargedHkd: 0
  district?: string
  storyId: number
}

export function loadCart(): Cart {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(KEY) ?? '{}')
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}
    return Object.fromEntries(Object.entries(parsed).filter(([id, qty]) => id.length > 0 && Number.isInteger(qty) && (qty as number) > 0 && (qty as number) <= 20)) as Cart
  } catch { return {} }
}

export function saveCart(cart: Cart) {
  try { localStorage.setItem(KEY, JSON.stringify(cart)) } catch { /* storage may be unavailable */ }
}

export function clearLocalData() {
  try { Object.keys(localStorage).filter(key => key.startsWith('little-orbit:')).forEach(key => localStorage.removeItem(key)) } catch { /* storage may be unavailable */ }
}

export function createFictionalOrder(cart: Cart, imaginarySubtotalHkd: number, district: string, storyId: number): FictionalOrder {
  const order: FictionalOrder = {
    id: `LO-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    items: Object.entries(cart).map(([productId, quantity]) => ({ productId, quantity })),
    imaginarySubtotalHkd,
    chargedHkd: 0,
    district: district || undefined,
    storyId,
  }
  try {
    const existing: unknown = JSON.parse(localStorage.getItem(ORDER_KEY) ?? '[]')
    const orders = Array.isArray(existing) ? existing.slice(-9) : []
    localStorage.setItem(ORDER_KEY, JSON.stringify([...orders, order]))
  } catch { /* storage may be unavailable */ }
  return order
}

export function pickStoryId(storyCount: number): number {
  if (!Number.isInteger(storyCount) || storyCount <= 0) return 0
  const value = new Uint32Array(1)
  crypto.getRandomValues(value)
  return value[0] % storyCount
}
