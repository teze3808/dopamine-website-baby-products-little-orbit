import {beforeEach,describe,expect,it,vi} from 'vitest'
import {copies,currencyOptions,formatMoney,localeOptions} from './i18n'
import {loadPreferences,savePreferences} from './preferences'

describe('locale and currency preferences',()=>{
  beforeEach(()=>vi.stubGlobal('localStorage',{getItem:vi.fn(),setItem:vi.fn(),removeItem:vi.fn(),key:vi.fn(),clear:vi.fn(),length:0}))

  it('ships a complete core journey for every enabled locale',()=>{
    expect(localeOptions.map(option=>option.value)).toEqual(['zh-HK','zh-CN','ja','en'])
    for(const {value} of localeOptions){
      const copy=copies[value]
      expect([copy.shop,copy.cart,copy.checkout,copy.acknowledgement,copy.order,copy.success]).not.toContain('')
      expect(copy.categoryNames).toHaveProperty('睡眠星系')
      expect(copy.deliveryStories).toHaveLength(3)
    }
  })

  it('formats a zero payable total in every currency',()=>{
    for(const currency of currencyOptions) expect(formatMoney(0,currency,'en')).toMatch(/0/)
  })

  it('defaults safely when stored preferences are malformed',()=>{
    vi.mocked(localStorage.getItem).mockReturnValue('{bad-json')
    expect(loadPreferences()).toEqual({locale:'zh-HK',currency:'HKD'})
  })

  it('validates and saves independent language and currency choices',()=>{
    vi.mocked(localStorage.getItem).mockReturnValue(JSON.stringify({locale:'ja',currency:'USD'}))
    expect(loadPreferences()).toEqual({locale:'ja',currency:'USD'})
    savePreferences({locale:'en',currency:'JPY'})
    expect(localStorage.setItem).toHaveBeenCalledWith('little-orbit:preferences:v1',JSON.stringify({locale:'en',currency:'JPY'}))
  })
})
