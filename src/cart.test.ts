import { beforeEach, describe, expect, it, vi } from 'vitest'
import { calculateCheckoutDiscounts, createFictionalOrder, loadCart, PAYABLE_TOTAL, pickStoryId, PROMO_CODE } from './cart'
import { products } from './catalog'

describe('zero-charge cart rules', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', { getItem: vi.fn(), setItem: vi.fn(), removeItem: vi.fn(), key: vi.fn(), clear: vi.fn(), length: 0 })
  })

  it('keeps the payable total at numeric zero', () => {
    expect(PAYABLE_TOTAL).toBe(0)
  })

  it('applies code 7s as 90% off while the payable total remains zero', () => {
    expect(PROMO_CODE).toBe('7s')
    expect(calculateCheckoutDiscounts(1000,'7s')).toEqual({promoApplied:true,promoDiscountHkd:900,experienceDiscountHkd:100,payableHkd:0})
    expect(calculateCheckoutDiscounts(249,' 7S ')).toEqual({promoApplied:true,promoDiscountHkd:224,experienceDiscountHkd:25,payableHkd:0})
  })

  it('rejects any other discount code without changing the zero-charge invariant', () => {
    expect(calculateCheckoutDiscounts(1000,'orbit')).toEqual({promoApplied:false,promoDiscountHkd:0,experienceDiscountHkd:1000,payableHkd:0})
  })

  it('rejects malformed persisted cart data', () => {
    vi.mocked(localStorage.getItem).mockReturnValue('{not-json')
    expect(loadCart()).toEqual({})
  })

  it('keeps only bounded positive integer quantities', () => {
    vi.mocked(localStorage.getItem).mockReturnValue(JSON.stringify({ whale: 2, bad: -1, fraction: 1.5, huge: 99 }))
    expect(loadCart()).toEqual({ whale: 2 })
  })

  it('creates a local fictional order that can only charge zero', () => {
    vi.stubGlobal('crypto', { randomUUID: () => '12345678-abcd-4000-8000-123456789abc' })
    vi.mocked(localStorage.getItem).mockReturnValue('[]')
    const order = createFictionalOrder({ whale: 2 }, 498, '九龍', 1)
    expect(order).toMatchObject({ id: 'LO-12345678', imaginarySubtotalHkd: 498, chargedHkd: 0, district: '九龍', storyId: 1 })
    expect(order.items).toEqual([{ productId: 'whale', quantity: 2 }])
    expect(localStorage.setItem).toHaveBeenCalled()
  })

  it('chooses a bounded delivery story', () => {
    vi.stubGlobal('crypto', { getRandomValues: (values: Uint32Array) => { values[0] = 8; return values } })
    expect(pickStoryId(3)).toBe(2)
    expect(pickStoryId(0)).toBe(0)
  })

  it('uses a unique optimized image path for every catalog product', () => {
    const paths = products.map(product => product.image)
    expect(paths).toHaveLength(50)
    expect(new Set(paths).size).toBe(50)
    expect(paths.every(path => path.endsWith('.webp'))).toBe(true)
  })
})
