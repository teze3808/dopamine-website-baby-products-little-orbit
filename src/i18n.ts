import type {Category, Product} from './catalog'

export type Locale = 'zh-HK' | 'zh-CN' | 'ja' | 'en'
export type Currency = 'HKD' | 'CNY' | 'JPY' | 'USD'

export const localeOptions: Array<{value:Locale;label:string}> = [
  {value:'zh-HK',label:'中文繁體'},
  {value:'zh-CN',label:'中文简体'},
  {value:'ja',label:'日本語'},
  {value:'en',label:'English'},
]

export const currencyOptions: Currency[] = ['HKD','CNY','JPY','USD']
const rates: Record<Currency,number> = {HKD:1,CNY:.92,JPY:19.1,USD:.128}

export function formatMoney(hkd:number,currency:Currency,locale:Locale){
  const value=Math.round(hkd*rates[currency])
  return new Intl.NumberFormat(locale,{style:'currency',currency,maximumFractionDigits:currency==='JPY'?0:2}).format(value)
}

export type Copy = {
  skip:string;announcement:string;shop:string;story:string;faq:string;cart:string;cartLabel:(count:number)=>string
  heroEyebrow:string;heroTitle:string;heroBody:string;heroCta:string;heroNote:string
  promises:Array<[string,string,string]>;categoryEyebrow:string;categories:string;categoriesSub:string;categoryCount:(count:number)=>string
  featuredEyebrow:string;featured:string;featuredSub:string;catalogEyebrow:string;catalog:string;catalogSub:string
  searchPlaceholder:string;searchLabel:string;all:string;resultCount:(count:number)=>string;add:string;added:string;addLabel:(name:string)=>string
  imaginaryPrice:string;noResults:string;noResultsSub:string;showAll:string
  storyEyebrow:string;storyTitle:string;storyBody:string;storySteps:Array<[string,string]>
  faqEyebrow:string;faqTitle:string;faqItems:Array<[string,string]>
  footerLine:string;explore:string;allProducts:string;about:string;yourData:string;clear:string;localOnly:string;rights:string
  drawerEyebrow:string;empty:string;emptySub:string;subtotal:string;discount:string;total:string;checkout:string;cartDisclosure:string
  checkoutEyebrow:string;checkoutTitle:string;checkoutIntro:string;method:string;displayOnly:string;destination:string;destinationEmpty:string;districts:string[]
  promoLabel:string;promoPlaceholder:string;promoApply:string;promoApplied:string;promoInvalid:string;promoDiscount:string
  acknowledgement:string;order:string;successEyebrow:string;success:string;successSub:string;continue:string;cleared:string
  categoryNames:Record<Category,string>;categoryBlurbs:Record<Category,string>;badges:Record<string,string>;deliveryStories:string[][]
}

const categoryKeys:Category[]=['睡眠星系','穿搭軌道','玩樂宇宙','出門探索','小窩禮物']

export const copies:Record<Locale,Copy> = {
  'zh-HK':{
    skip:'直接去產品',announcement:'小小宇宙，大大想像。',shop:'探索宇宙',story:'品牌故事',faq:'常見問題',cart:'購物袋',cartLabel:n=>`購物袋，${n}件`,
    heroEyebrow:'Welcome to Little Orbit',heroTitle:'小小宇宙，\n大大想像。',heroBody:'月亮、星星同柔軟小物，陪你慢慢行過每一段小小日常。',heroCta:'開始環遊',heroNote:'✦ 今季由星空發送靈感',
    promises:[['☆','柔軟小物','為每個細細日常而設'],['✦','星空靈感','將想像力帶入小窩'],['◌','簡單安心','敏感資料一概唔收']],categoryEyebrow:'Five tiny galaxies',categories:'揀一條軌道',categoriesSub:'五個小星系，五十件夢幻小物。',categoryCount:n=>`${n} 件好物 ↗`,
    featuredEyebrow:'Closest to our hearts',featured:'今週最近月亮',featuredSub:'四件小物，正喺想像力軌道上。',catalogEyebrow:'All 50 little things',catalog:'Little Orbit 全宇宙',catalogSub:'搜尋、慢慢睇，睇中就加。',
    searchPlaceholder:'搜尋月亮、鯨魚、睡衣…',searchLabel:'搜尋產品',all:'全部',resultCount:n=>`${n} 粒星`,add:'加落袋',added:'已加入購物袋！',addLabel:n=>`將${n}加落袋`,imaginaryPrice:'參考價',noResults:'呢個軌道暫時冇嘢',noResultsSub:'試吓另一個關鍵字。',showAll:'睇返全部',
    storyEyebrow:'Made for little dreamers',storyTitle:'由香港出發，\n繞小窩一圈。',storyBody:'Little Orbit 將熟悉嘅育兒小物放入溫柔星空，用一點幽默、一點夢幻，陪大人同小朋友留低更多想像空間。',storySteps:[['揀一粒星','由五個小星系開始探索。'],['放入日常','用柔軟設計陪住每個片刻。'],['留住想像','將平凡一日變成小小宇宙。']],
    faqEyebrow:'Orbit manual',faqTitle:'地球人常見問題',faqItems:[['Little Orbit 係咩？','一個以星空為靈感嘅 BB 用品概念店。'],['可以轉語言同貨幣？','可以，兩個設定互相獨立，會留喺你部裝置。'],['需要地址或者信用卡？','唔需要，亦唔應該輸入。我哋唔收敏感資料。'],['資料會去邊？','購物袋同偏好只留喺你部裝置，隨時可以清除。']],
    footerLine:'為小小日常，留一片大大星空。',explore:'探索',allProducts:'所有產品',about:'品牌故事',yourData:'你嘅資料',clear:'清除本機資料',localOnly:'全部只儲存喺呢部裝置。',rights:'© 2026 Little Orbit · Dreamed up in Hong Kong',
    drawerEyebrow:'Your tiny orbit',empty:'購物袋仲係空空如也',emptySub:'加幾件可愛小物，開始你嘅軌道。',subtotal:'商品小計',discount:'體驗優惠',total:'應付總額',checkout:'前往結帳',cartDisclosure:'呢個係模擬購物體驗；不會付款或送貨。',
    checkoutEyebrow:'Little Orbit checkout',checkoutTitle:'最後一步，繼續幻想。',checkoutIntro:'唔會問你攞電話、真實地址或者付款資料。',method:'體驗通行證',displayOnly:'只供顯示',destination:'想像送到邊區？（可選）',destinationEmpty:'唔講都得',districts:['香港島','九龍','新界','離島','月球背面'],promoLabel:'折扣碼',promoPlaceholder:'輸入折扣碼',promoApply:'套用',promoApplied:'折扣碼已套用：即減 90%！',promoInvalid:'呢個折扣碼唔啱，再試一次。',promoDiscount:'7s 折扣（減 90%）',acknowledgement:'我明白呢個係模擬落單，不會付款，亦不會收到貨。',order:'確認模擬訂單',successEyebrow:'Order in orbit',success:'落單成功！',successSub:'這是模擬訂單，沒有付款，也不會安排送貨。',continue:'再行一轉',cleared:'本機資料已清除',
    categoryNames:{'睡眠星系':'睡眠星系','穿搭軌道':'穿搭軌道','玩樂宇宙':'玩樂宇宙','出門探索':'出門探索','小窩禮物':'小窩禮物'},categoryBlurbs:{'睡眠星系':'瞓入最柔軟嗰片星空','穿搭軌道':'今日著邊粒星出門口？','玩樂宇宙':'細手仔嘅無限大發現','出門探索':'離開梳化，飛去樓下','小窩禮物':'將月光帶返屋企'},badges:{'人氣之選':'人氣之選','新星登場':'新星登場','編輯精選':'編輯精選'},deliveryStories:[['模擬訂單已建立','小鯨魚飛過獅子山','送達你嘅想像力'],['月球倉收到訊號','火箭排緊紅隧','星星喺維港上空簽收'],['軌道確認完成','外星速遞員食緊菠蘿包','旅程抵達幻想世界']]
  },
  'zh-CN':{
    skip:'直接前往商品',announcement:'小小宇宙，大大想象。',shop:'探索宇宙',story:'品牌故事',faq:'常见问题',cart:'购物袋',cartLabel:n=>`购物袋，${n}件`,
    heroEyebrow:'Welcome to Little Orbit',heroTitle:'小小宇宙，\n大大想象。',heroBody:'月亮、星星和柔软小物，陪你慢慢走过每一段小小日常。',heroCta:'开始环游',heroNote:'✦ 本季灵感来自星空',
    promises:[['☆','柔软小物','为每个小小日常设计'],['✦','星空灵感','把想象力带进小窝'],['◌','简单安心','不收集敏感资料']],categoryEyebrow:'Five tiny galaxies',categories:'选择一条轨道',categoriesSub:'五个小星系，五十件梦幻小物。',categoryCount:n=>`${n} 件好物 ↗`,
    featuredEyebrow:'Closest to our hearts',featured:'本周离月亮最近',featuredSub:'四件小物，正在想象力轨道上。',catalogEyebrow:'All 50 little things',catalog:'Little Orbit 全宇宙',catalogSub:'搜索、慢慢看，喜欢就加入。',
    searchPlaceholder:'搜索月亮、鲸鱼、睡衣…',searchLabel:'搜索商品',all:'全部',resultCount:n=>`${n} 颗星`,add:'加入购物袋',added:'已加入购物袋！',addLabel:n=>`将${n}加入购物袋`,imaginaryPrice:'参考价',noResults:'这条轨道暂时没有商品',noResultsSub:'试试其他关键词。',showAll:'查看全部',
    storyEyebrow:'Made for little dreamers',storyTitle:'从香港出发，\n环绕小窝一圈。',storyBody:'Little Orbit 把熟悉的育儿小物放进温柔星空，用一点幽默、一点梦幻，为大人和小朋友留下更多想象空间。',storySteps:[['选择一颗星','从五个小星系开始探索。'],['放进日常','用柔软设计陪伴每个时刻。'],['留住想象','把平凡一天变成小小宇宙。']],
    faqEyebrow:'Orbit manual',faqTitle:'地球人常见问题',faqItems:[['Little Orbit 是什么？','一个以星空为灵感的婴幼儿用品概念店。'],['可以切换语言和货币吗？','可以，两个设置相互独立，并保存在你的设备上。'],['需要地址或信用卡吗？','不需要，也请不要输入。我们不收集敏感资料。'],['资料会去哪里？','购物袋和偏好只保存在你的设备上，随时可以清除。']],
    footerLine:'为小小日常，留一片大大星空。',explore:'探索',allProducts:'所有商品',about:'品牌故事',yourData:'你的资料',clear:'清除本机资料',localOnly:'全部只保存在这台设备上。',rights:'© 2026 Little Orbit · Dreamed up in Hong Kong',
    drawerEyebrow:'Your tiny orbit',empty:'购物袋还是空的',emptySub:'加入几件可爱小物，开始你的轨道。',subtotal:'商品小计',discount:'体验优惠',total:'应付总额',checkout:'前往结账',cartDisclosure:'这是模拟购物体验；不会付款或送货。',
    checkoutEyebrow:'Little Orbit checkout',checkoutTitle:'最后一步，继续想象。',checkoutIntro:'不会要求电话、真实地址或付款资料。',method:'体验通行证',displayOnly:'仅供展示',destination:'想象送到哪里？（可选）',destinationEmpty:'可以不选',districts:['香港岛','九龙','新界','离岛','月球背面'],promoLabel:'折扣码',promoPlaceholder:'输入折扣码',promoApply:'使用',promoApplied:'折扣码已使用：立减 90%！',promoInvalid:'折扣码不正确，请再试一次。',promoDiscount:'7s 折扣（立减 90%）',acknowledgement:'我明白这是模拟下单，不会付款，也不会收到商品。',order:'确认模拟订单',successEyebrow:'Order in orbit',success:'下单成功！',successSub:'这是模拟订单，没有付款，也不会安排送货。',continue:'继续探索',cleared:'本机资料已清除',
    categoryNames:{'睡眠星系':'睡眠星系','穿搭軌道':'穿搭轨道','玩樂宇宙':'玩乐宇宙','出門探索':'出门探索','小窩禮物':'小窝礼物'},categoryBlurbs:{'睡眠星系':'睡进最柔软的那片星空','穿搭軌道':'今天穿哪颗星出门？','玩樂宇宙':'小手探索无限大发现','出門探索':'离开沙发，飞到楼下','小窩禮物':'把月光带回家'},badges:{'人氣之選':'人气之选','新星登場':'新星登场','編輯精選':'编辑精选'},deliveryStories:[['模拟订单已建立','小鲸鱼飞过狮子山','送达你的想象力'],['月球仓收到信号','火箭正在穿越海港','星星在维港上空签收'],['轨道确认完成','外星快递员正在休息','旅程抵达幻想世界']]
  },
  ja:{
    skip:'商品一覧へ',announcement:'小さな宇宙、大きな想像。',shop:'コレクション',story:'ブランドストーリー',faq:'よくある質問',cart:'バッグ',cartLabel:n=>`バッグ、${n}点`,
    heroEyebrow:'Welcome to Little Orbit',heroTitle:'小さな宇宙、\n大きな想像。',heroBody:'月と星、やわらかなベビーアイテムが、小さな毎日にそっと寄り添います。',heroCta:'宇宙をめぐる',heroNote:'✦ 今季は星空からインスピレーション',
    promises:[['☆','やさしい手触り','小さな毎日のために'],['✦','星空のデザイン','想像力をお部屋へ'],['◌','シンプルで安心','機密情報は収集しません']],categoryEyebrow:'Five tiny galaxies',categories:'軌道を選ぶ',categoriesSub:'5つの銀河、50のドリーミーなアイテム。',categoryCount:n=>`${n} アイテム ↗`,
    featuredEyebrow:'Closest to our hearts',featured:'今週、月にいちばん近いもの',featuredSub:'想像の軌道をめぐる4つのアイテム。',catalogEyebrow:'All 50 little things',catalog:'Little Orbit コレクション',catalogSub:'検索して、ゆっくり眺めて、お気に入りをバッグへ。',
    searchPlaceholder:'月、くじら、パジャマを検索…',searchLabel:'商品を検索',all:'すべて',resultCount:n=>`${n} アイテム`,add:'バッグに追加',added:'バッグに追加しました！',addLabel:n=>`${n}をバッグに追加`,imaginaryPrice:'参考価格',noResults:'この軌道にはまだ何もありません',noResultsSub:'別のキーワードをお試しください。',showAll:'すべて見る',
    storyEyebrow:'Made for little dreamers',storyTitle:'香港から、\n小さなお部屋を一周。',storyBody:'Little Orbitは、身近なベビーアイテムをやさしい星空へ。ユーモアと夢を少しずつ添えて、親子の想像力が広がる時間をつくります。',storySteps:[['星を選ぶ','5つの小さな銀河から探索。'],['毎日に添える','やさしいデザインが寄り添います。'],['想像を残す','いつもの一日を小さな宇宙へ。']],
    faqEyebrow:'Orbit manual',faqTitle:'よくある質問',faqItems:[['Little Orbitとは？','星空をテーマにしたベビーアイテムのコンセプトストアです。'],['言語と通貨は変更できますか？','はい。別々に設定でき、この端末に保存されます。'],['住所やカード情報は必要ですか？','必要ありません。機密情報は入力しないでください。'],['データはどこに保存されますか？','バッグと設定はこの端末だけに保存され、いつでも消去できます。']],
    footerLine:'小さな毎日に、大きな星空を。',explore:'見る',allProducts:'すべての商品',about:'ブランドストーリー',yourData:'データ',clear:'端末データを消去',localOnly:'この端末だけに保存されます。',rights:'© 2026 Little Orbit · Dreamed up in Hong Kong',
    drawerEyebrow:'Your tiny orbit',empty:'バッグはまだ空です',emptySub:'お気に入りを加えて、軌道を始めましょう。',subtotal:'小計',discount:'体験ディスカウント',total:'お支払い合計',checkout:'チェックアウトへ',cartDisclosure:'これは模擬ショッピング体験です。決済・配送は行われません。',
    checkoutEyebrow:'Little Orbit checkout',checkoutTitle:'最後の一歩も、想像のまま。',checkoutIntro:'電話番号、実在の住所、決済情報は入力しません。',method:'ORBIT PASS',displayOnly:'表示のみ',destination:'想像の行き先（任意）',destinationEmpty:'選択しない',districts:['香港島','九龍','新界','離島','月の裏側'],promoLabel:'割引コード',promoPlaceholder:'割引コードを入力',promoApply:'適用',promoApplied:'割引コードを適用しました：90%オフ！',promoInvalid:'コードが正しくありません。もう一度お試しください。',promoDiscount:'7s 90%オフ',acknowledgement:'これは模擬注文であり、支払いも商品配送もないことを理解しました。',order:'模擬注文を確定',successEyebrow:'Order in orbit',success:'注文が軌道に乗りました！',successSub:'模擬注文のため、決済も配送も行われません。',continue:'もう一周する',cleared:'端末データを消去しました',
    categoryNames:{'睡眠星系':'おやすみ銀河','穿搭軌道':'おしゃれ軌道','玩樂宇宙':'あそび宇宙','出門探索':'おでかけ探検','小窩禮物':'お部屋とギフト'},categoryBlurbs:{'睡眠星系':'いちばんやわらかな星空へ','穿搭軌道':'今日はどの星を着る？','玩樂宇宙':'小さな手に大きな発見','出門探索':'ソファを離れて小さな旅へ','小窩禮物':'月明かりをお部屋に'},badges:{'人氣之選':'人気','新星登場':'NEW','編輯精選':'おすすめ'},deliveryStories:[['模擬注文を作成しました','くじらが獅子山を通過','想像力へ到着'],['月の倉庫が信号を受信','ロケットが港を通過中','星空でサイン完了'],['軌道を確認しました','宇宙の配達員は休憩中','空想の世界へ到着']]
  },
  en:{
    skip:'Skip to products',announcement:'A little universe of big imagination.',shop:'Shop',story:'Our story',faq:'FAQ',cart:'Bag',cartLabel:n=>`Bag, ${n} items`,
    heroEyebrow:'Welcome to Little Orbit',heroTitle:'A little universe,\nfull of big ideas.',heroBody:'Moonlight, stars and soft little things made to brighten every tiny everyday moment.',heroCta:'Explore the orbit',heroNote:'✦ This season, inspired by the night sky',
    promises:[['☆','Soft little things','Designed for tiny everyday moments'],['✦','Starlit ideas','Bring imagination into the nursery'],['◌','Simple and private','Sensitive details are never collected']],categoryEyebrow:'Five tiny galaxies',categories:'Choose an orbit',categoriesSub:'Five little galaxies and fifty dreamy finds.',categoryCount:n=>`${n} items ↗`,
    featuredEyebrow:'Closest to our hearts',featured:'Closest to the moon this week',featuredSub:'Four little things currently orbiting our imagination.',catalogEyebrow:'All 50 little things',catalog:'The Little Orbit universe',catalogSub:'Search, browse slowly, and add your favourites.',
    searchPlaceholder:'Search moons, whales, pyjamas…',searchLabel:'Search products',all:'All',resultCount:n=>`${n} stars`,add:'Add to bag',added:'Added to your bag!',addLabel:n=>`Add ${n} to bag`,imaginaryPrice:'Reference price',noResults:'Nothing in this orbit yet',noResultsSub:'Try another search term.',showAll:'View everything',
    storyEyebrow:'Made for little dreamers',storyTitle:'Dreamed up in Hong Kong,\norbiting the nursery.',storyBody:'Little Orbit sets familiar baby essentials beneath a gentle night sky, adding a little humour and wonder to make more room for imagination.',storySteps:[['Choose a star','Start in one of five little galaxies.'],['Bring it home','Let soft design brighten the everyday.'],['Keep imagining','Turn an ordinary day into a universe.']],
    faqEyebrow:'Orbit manual',faqTitle:'Questions from Earth',faqItems:[['What is Little Orbit?','A baby-products concept store inspired by stars and the night sky.'],['Can I change language and currency?','Yes. They work independently and stay saved on this device.'],['Do I need an address or card?','No. Please do not enter sensitive information.'],['Where is my data stored?','Your bag and preferences stay on this device and can be cleared anytime.']],
    footerLine:'A big sky for every little day.',explore:'Explore',allProducts:'All products',about:'Our story',yourData:'Your data',clear:'Clear local data',localOnly:'Everything stays on this device.',rights:'© 2026 Little Orbit · Dreamed up in Hong Kong',
    drawerEyebrow:'Your tiny orbit',empty:'Your bag is still weightless',emptySub:'Add a few favourites and begin your orbit.',subtotal:'Subtotal',discount:'Experience discount',total:'Total due',checkout:'Continue to checkout',cartDisclosure:'This is a simulated shopping experience; no payment or delivery takes place.',
    checkoutEyebrow:'Little Orbit checkout',checkoutTitle:'One last step. Keep imagining.',checkoutIntro:'We never ask for a phone number, real address, or payment details.',method:'ORBIT PASS',displayOnly:'Display only',destination:'Imaginary destination (optional)',destinationEmpty:'Prefer not to say',districts:['Hong Kong Island','Kowloon','New Territories','Outlying Islands','Far side of the Moon'],promoLabel:'Discount code',promoPlaceholder:'Enter discount code',promoApply:'Apply',promoApplied:'Discount code applied: 90% off!',promoInvalid:'That code does not match. Please try again.',promoDiscount:'7s discount (90% off)',acknowledgement:'I understand this is a simulated order with no payment or product delivery.',order:'Place simulated order',successEyebrow:'Order in orbit',success:'Your order is in orbit!',successSub:'This was a simulated order. No payment was taken and nothing will be delivered.',continue:'Take another orbit',cleared:'Local data cleared',
    categoryNames:{'睡眠星系':'Sleep Galaxy','穿搭軌道':'Dressing Orbit','玩樂宇宙':'Play Universe','出門探索':'Out & About','小窩禮物':'Nursery & Gifts'},categoryBlurbs:{'睡眠星系':'Drift into the softest part of the sky','穿搭軌道':'Which star will you wear today?','玩樂宇宙':'Big discoveries for little hands','出門探索':'Small adventures beyond the sofa','小窩禮物':'Bring a little moonlight home'},badges:{'人氣之選':'Popular','新星登場':'New arrival','編輯精選':'Editor’s pick'},deliveryStories:[['Simulated order created','The little whale passed Lion Rock','Arrived in your imagination'],['Signal received at the lunar depot','Rocket crossing the harbour','Signed for beneath the stars'],['Orbit confirmed','The space courier is on a snack break','Journey complete in make-believe']]
  }
}

const simplified:Record<string,string>={'雲':'云','鯨':'鲸','魚':'鱼','長':'长','專':'专','門':'门','聲':'声','覺':'觉','裏':'里','軟':'软','綿':'绵','燈':'灯','書':'书','來':'来','頭':'头','腳':'脚','環':'环','裝':'装','組':'组','馬':'马','帶':'带','褲':'裤','極':'极','樂':'乐','疊':'叠','鈴':'铃','球':'球','遊':'游','戲':'戏','墊':'垫','沖':'冲','隊':'队','觸':'触','飲':'饮','碗':'碗','匙':'匙','羹':'羹','摺':'折','換':'换','片':'片','車':'车','掛':'挂','鈎':'钩','籃':'篮','憶':'忆','牆':'墙','簾':'帘','紗':'纱','禮':'礼','號':'号','個':'个','這':'这','開':'开','關':'关','發':'发','現':'现','寶':'宝'}
const toSimplified=(value:string)=>[...value].map(char=>simplified[char]??char).join('')

export function productCopy(product:Product,locale:Locale){
  if(locale==='zh-HK') return {name:product.name,secondary:product.enName,description:product.description}
  if(locale==='zh-CN') return {name:toSimplified(product.name),secondary:product.enName,description:toSimplified(product.description)}
  if(locale==='ja') return {name:product.enName,secondary:product.name,description:`星空をイメージした、やさしく遊び心のあるベビーアイテムです。`}
  return {name:product.enName,secondary:product.name,description:`A soft, playful little piece inspired by moonlight and the night sky.`}
}

export const categoryOrder=categoryKeys
