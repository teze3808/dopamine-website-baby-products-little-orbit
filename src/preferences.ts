import type {Currency,Locale} from './i18n'

const KEY='little-orbit:preferences:v1'
const locales:Locale[]=['zh-HK','zh-CN','ja','en']
const currencies:Currency[]=['HKD','CNY','JPY','USD']
export type Preferences={locale:Locale;currency:Currency}

export function loadPreferences():Preferences{
  try{
    const parsed:unknown=JSON.parse(localStorage.getItem(KEY)??'{}')
    if(!parsed||typeof parsed!=='object'||Array.isArray(parsed)) return {locale:'zh-HK',currency:'HKD'}
    const value=parsed as Record<string,unknown>
    return {locale:locales.includes(value.locale as Locale)?value.locale as Locale:'zh-HK',currency:currencies.includes(value.currency as Currency)?value.currency as Currency:'HKD'}
  }catch{return {locale:'zh-HK',currency:'HKD'}}
}

export function savePreferences(value:Preferences){
  try{localStorage.setItem(KEY,JSON.stringify(value))}catch{/* storage may be unavailable */}
}
