/* 香港學界科研現場 — 作品資料
   所有獎項、學校、作品名稱均按主辦機構或官方報道核實，來源見每項之 source 欄。 */

const PROJECTS = [
  {
    id: "p01",
    no: "01",
    title: "抑制胰臟癌及肺癌活性的多肽新策略",
    school: "九龍真光中學",
    level: "高中",
    domain: "生物醫學",
    year: "2025",
    competition: "香港學生科學比賽",
    award: "高中組（研究項目）冠軍",
    tagline: "用 AI 設計一條能貼合癌細胞開關的短肽。",
    concept:
      "KRAS 突變是肺癌與胰臟癌常見的驅動基因，但 KRAS 與 PDE 之間的蛋白互動界面平坦而廣闊，傳統小分子藥物難以穩定阻斷。團隊把問題由「找一種藥」改成「設計一個能貼合界面的分子」。",
    innovation:
      "以諾貝爾獎相關的人工智能工具 RFdiffusion 生成能干擾 KRAS–PDE 互動的多肽，再以融合肽（fusion peptide）配合 PEI 轉染策略把多肽送入細胞。實驗結果顯示，這個策略能有效提升對肺癌與胰臟癌的抑制效果。",
    unique:
      "把生成式蛋白設計由大學實驗室帶進中學專題；研究方向不是抑制某個酵素，而是針對一向被視為「不可成藥」的蛋白–蛋白相互作用（PPI）。",
    tech: ["RFdiffusion", "多肽設計", "KRAS–PDE 界面", "融合肽", "PEI 轉染"],
    impact: "為難治癌症提供一種可「設計」而非只可「篩選」的治療候選。",
    img: "assets/img/p01-peptide.webp",
    source: { label: "香港學生科學比賽 2025 得獎名單", url: "https://ce.hkfyg.org.hk/2025/04/30/sspc25awardlist/" }
  },
  {
    id: "p02",
    no: "02",
    title: "特級抗菌即食即棄餐具",
    school: "迦密柏雨中學",
    level: "高中",
    domain: "材料與環保",
    year: "2025",
    competition: "香港學生科學比賽",
    award: "高中組（發明品）冠軍",
    tagline: "讓餐具由微生物「長」出來，而不是由石油造出來。",
    concept:
      "即棄餐具多為塑膠，回收率低、降解慢。團隊把原料換成紅茶菌（kombucha）培養出的細菌纖維素——一種可以「種」出來、也可以在環境中分解的材料。",
    innovation:
      "以生物工程技術從甲殼類外殼提取殼聚醣（chitosan），塗覆在細菌纖維素餐具表面，令成品同時做到耐熱、耐冷、抗菌、不含致癌物，並可降解。",
    unique:
      "以微生物生長取代注塑成型；用海鮮加工業的廢棄蝦蟹殼做塗層原料，把兩個廢棄物問題接成一條材料鏈；針對纖維素親水易軟的弱點補上關鍵一層。",
    tech: ["細菌纖維素", "紅茶菌培養", "殼聚醣塗層", "生物工程", "可降解材料"],
    impact: "即棄餐具可以在用完之後，成為環境接得住的東西。",
    img: "assets/img/p02-tableware.webp",
    source: { label: "香港學生科學比賽 2025 得獎名單", url: "https://ce.hkfyg.org.hk/2025/04/30/sspc25awardlist/" }
  },
  {
    id: "p03",
    no: "03",
    title: "若無「耆」事",
    school: "英皇書院",
    level: "初中",
    domain: "健康科技",
    year: "2025",
    competition: "香港學生科學比賽",
    award: "初中組（發明品）冠軍",
    tagline: "不是掩蓋氣味，而是把產生氣味的源頭分解。",
    concept:
      "成人紙尿片用完即棄，對長者而言既是尊嚴問題，也是沉重的廢棄物負擔。尿液中的尿素被細菌分解後產生氨，刺激皮膚、帶來異味，也令照顧者卻步。",
    innovation:
      "以海藻酸鈉製作微膠囊包覆脲酶（urease），配合檸檬酸建立多層過濾結構，在尿片內分解尿素所產生的氨，減少對使用者皮膚的刺激與異味。",
    unique:
      "把「除臭」由吸附改成「分解源頭」；以可重用設計取代即棄，將長者舒適度與環保放在同一個設計目標裡。",
    tech: ["海藻酸鈉微膠囊", "脲酶", "檸檬酸多層過濾", "氨分解", "可重用尿片"],
    impact: "讓需要長期照護的人，過得乾爽一點、有尊嚴一點。",
    img: "assets/img/p03-diaper.webp",
    source: { label: "香港學生科學比賽 2025 得獎名單", url: "https://ce.hkfyg.org.hk/2025/04/30/sspc25awardlist/" }
  },
  {
    id: "p04",
    no: "04",
    title: "糠．無災",
    school: "協恩中學",
    level: "初中",
    domain: "材料與環保",
    year: "2025",
    competition: "香港學生科學比賽",
    award: "初中組（研究項目）冠軍",
    tagline: "在米糠與石榴皮裡，找一種對人體友善的阻燃劑。",
    concept:
      "常見阻燃劑不少含鹵素或化學添加，阻燃的同時也帶來健康與環境疑慮。團隊把視線轉向廚房與農田裡的副產物：米糠、黃豆、石榴皮、黑茶。",
    innovation:
      "系統測試多種天然植物原材料中的植酸（phytic acid）與鞣質（tannins），比較其提取物作為阻燃劑的可行性，嘗試找出對人體較友善的替代方案。",
    unique:
      "以農業副產物為原料，不以「阻燃等級最高」為唯一目標，而是把「人體友善」放進評估標準；把材料研究做成可重複的對照實驗。",
    tech: ["植酸", "鞣質", "天然提取物", "阻燃測試", "農業副產物"],
    impact: "阻燃不必以犧牲室內空氣與人體健康為代價。",
    img: "assets/img/p04-flame.webp",
    source: { label: "香港學生科學比賽 2025 得獎名單", url: "https://ce.hkfyg.org.hk/2025/04/30/sspc25awardlist/" }
  },
  {
    id: "p05",
    no: "05",
    title: "盲人回憶攝錄機",
    school: "東華三院李嘉誠中學",
    level: "高中",
    domain: "輔助科技",
    year: "2024",
    competition: "香港創科展",
    award: "高中組金獎｜第 50 屆日內瓦國際發明展銀獎",
    tagline: "視障人士也應該有能力，留住一段回憶。",
    concept:
      "市面上的輔助科技多數解決「出行」與「閱讀」，卻很少處理「回憶」。拍照、錄影、重溫，對視障使用者而言仍然是一連串障礙。",
    innovation:
      "團隊設計了一部以視障使用者為中心的攝錄裝置，把記錄與重溫生活片段的主導權交回使用者，而不是由旁人代拍、代描述。",
    unique:
      "切入點不是導航，而是情感與記憶；由香港創科展高中組金獎走到日內瓦國際發明展，證明「以人為本」的題目同樣具備國際競爭力。",
    tech: ["輔助科技", "無障礙互動", "影像記錄", "使用者中心設計"],
    impact: "把「記錄生活」由視力特權，變成每個人都擁有的能力。",
    img: "assets/img/p05-memorycam.webp",
    source: { label: "香港創新基金：創科展隊伍於日內瓦獲獎", url: "https://hkif.org.hk/sc/news/hong-kong-science-fair-empowers-primary-and-secondary-student-inventors-to-shine-on-the-international-stage" }
  },
  {
    id: "p06",
    no: "06",
    title: "除除善友（EasyPants Buddy）",
    school: "天主教培聖中學",
    level: "初中",
    domain: "輔助科技",
    year: "2024",
    competition: "香港創科展",
    award: "初中組金獎｜第 50 屆日內瓦國際發明展銅獎",
    tagline: "替長者換一條褲，不必讓照顧者彎腰冒險。",
    concept:
      "對行動不便的長者來說，穿褲與脫褲是每日最容易被忽略、卻最需要協助的動作；對照顧者而言，重複彎腰搬抬亦是職業勞損的來源。",
    innovation:
      "團隊研發一部協助長者更換衣物的機械裝置，把原本需要兩人合力、高風險的動作，變成可以由長者自己或一位照顧者安全完成的流程。",
    unique:
      "選了一個「不夠亮眼」的日常動作做題目——正因為它是真實的痛點；同時把照顧者的身體負擔納入設計考量。",
    tech: ["機械輔助裝置", "人因工程", "長者照護", "安全設計"],
    impact: "把尊嚴還給長者，把腰骨還給照顧者。",
    img: "assets/img/p06-dressing.webp",
    source: { label: "香港創新基金：創科展隊伍於日內瓦獲獎", url: "https://hkif.org.hk/sc/news/hong-kong-science-fair-empowers-primary-and-secondary-student-inventors-to-shine-on-the-international-stage" }
  },
  {
    id: "p07",
    no: "07",
    title: "AI 居家物理治療助手",
    school: "香港仔工業學校",
    level: "初中",
    domain: "人工智能",
    year: "2026",
    competition: "學生創新大賽",
    award: "初中組冠軍｜最佳匯報隊伍｜最佳人工智能應用獎",
    tagline: "把復康訓練由診所，搬回客廳。",
    concept:
      "復康訓練需要治療師在場指導，但治療師時間有限、覆診間隔長；長者與復康者在家的練習，往往因為「不知道做得對不對」而中斷。",
    innovation:
      "以人工智能在家中擔任物理治療助手，為使用者提供復康動作的即時指引，讓訓練可以在沒有治療師的日常裡繼續進行，並以「理想社區」為框架思考服務如何落地。",
    unique:
      "一次囊括冠軍、最佳匯報與最佳 AI 應用三個獎項；作品不只是一個模型，而是一套包含使用者、照顧者與社區的服務設計。",
    tech: ["人工智能", "動作辨識", "復康訓練", "社區照護"],
    impact: "復康不再只在診所發生，而是每天在家裡發生。",
    img: "assets/img/p07-physio.webp",
    source: { label: "香港教育城：學生創新大賽 2025/26 結果", url: "https://www.edcity.hk/home/zh-hans/sic/202627/result/" }
  },
  {
    id: "p08",
    no: "08",
    title: "「掃」書郎（Subject Helper）",
    school: "吳氏宗親總會泰伯紀念學校",
    level: "小學",
    domain: "智能裝置",
    year: "2024",
    competition: "香港創科展",
    award: "小學組金獎｜第 50 屆日內瓦國際發明展銅獎",
    tagline: "把小學生最熟悉的「交功課」，變成一秒完成的事。",
    concept:
      "老師每日逐本點收功課，看似小事，實際上是課堂前最耗時、最容易出錯的環節。團隊把這個「大人的麻煩」當成自己的題目。",
    innovation:
      "以 RFID 技術製作智能點算功課系統，配合 MIT App Inventor 開發應用介面，讓老師一次過知道誰交了、誰未交，把點名式的工序自動化。",
    unique:
      "由小學生用隨手可得的工具（RFID 標籤 + App Inventor）解決老師的真實痛點；由全港約一千份作品中脫穎而出，並代表香港到日內瓦參展。",
    tech: ["RFID", "MIT App Inventor", "點算系統", "校園應用"],
    impact: "把老師的時間，由點功課還給教書。",
    img: "assets/img/p08-rfid.webp",
    source: { label: "香港創新基金：創科展隊伍於日內瓦獲獎", url: "https://hkif.org.hk/sc/news/hong-kong-science-fair-empowers-primary-and-secondary-student-inventors-to-shine-on-the-international-stage" }
  },
  {
    id: "p09",
    no: "09",
    title: "ACE Caring Buddy",
    school: "啓思小學",
    level: "小學",
    domain: "人工智能",
    year: "2026",
    competition: "國際青少年 AI 創科 ESG 馬拉松（香港賽區）",
    award: "中小學全場總冠軍｜小學組總冠軍｜社會創新冠軍｜最佳作品原型獎",
    tagline: "四個小五學生，做了一個會陪長者的機械人。",
    concept:
      "長者照顧最缺的往往不是儀器，而是陪伴與提醒。團隊以社會需求為起點，用設計思維流程由問題探究走到原型測試，研發出照顧長者的 AI 智能機械人。",
    innovation:
      "作品不是單一功能示範，而是一個完整的照顧情境原型：由概念設計、模型建構、測試改良，到影片製作與匯報演練，四個月的流程全部由學生自己走完。",
    unique:
      "以小學隊伍身份，在總決賽環節挑戰兩隊中學組總冠軍，最終奪得中小學全場總冠軍；同校另一作品「智清艦」智能分類垃圾桶亦奪自然科技賽道小學組季軍。",
    tech: ["人工智能", "機械人", "設計思維", "原型製作", "長者照顧"],
    impact: "把「照顧」由家庭責任，變成一件可以設計的事。",
    img: "assets/img/p09-robot.webp",
    source: { label: "香港01：啓思小學奪 AI 創科比賽五項大獎", url: "https://www.hk01.com/%E4%B8%AD%E5%B0%8F%E5%AD%B8%E6%A0%A1%E5%9C%92/60378492/" }
  },
  {
    id: "p10",
    no: "10",
    title: "AI 運動記錄 App",
    school: "英皇書院同學會小學第二校",
    level: "小學",
    domain: "人工智能",
    year: "2025",
    competition: "全港小學生運算思維比賽",
    award: "App Inventor 組冠軍",
    tagline: "讓「做運動」變成一件有回饋、有隊友的事。",
    concept:
      "學生運動不足，老師卻難以掌握全班運動時數；叫學生做運動，往往只停留在口號。團隊決定做一個老師真的會用、學生真的想開的 App。",
    innovation:
      "以 AI 自動記錄學生運動時數與姿勢，方便老師統計；再以 TinyDB 與 Firebase 建立排行榜，加入正向訊息推送，把運動變成有比較、有鼓勵的持續行為。",
    unique:
      "同一個作品同時服務兩個使用者：老師要數據，學生要趣味；用 App Inventor 這種入門工具，做出資料庫連線與即時排名的完整架構。",
    tech: ["App Inventor", "AI 姿勢識別", "TinyDB", "Firebase", "排行榜"],
    impact: "運動習慣的起點，可能只是一條向上的排行榜。",
    img: "assets/img/p10-sportsapp.webp",
    source: { label: "橙新聞：全港小學生運算思維比賽 2025", url: "https://www.orangenews.hk/kids/1280663/" }
  },
  {
    id: "p11",
    no: "11",
    title: "Move it!",
    school: "嘉諾撒聖瑪利學校",
    level: "小學",
    domain: "人工智能",
    year: "2025",
    competition: "全港小學生運算思維比賽",
    award: "Scratch 組冠軍",
    tagline: "不是提醒你休息，而是讀懂你幾時需要休息。",
    concept:
      "考試季節，學生長時間留在室內溫習，姿勢僵硬、情緒繃緊，身心狀態一起下滑；但「記得休息」這種提醒，通常最容易被忽略。",
    innovation:
      "以 Teachable Machine 的情緒識別配合 Video Sensing 技術，實時監測學習狀態；再結合 micro:bit 運動感應遊戲，在適當時間提供互動式休息建議，並建立同學之間的互動支持網絡。",
    unique:
      "把「休息」由固定計時改成按狀態觸發；將情緒識別、體感遊戲與實體 micro:bit 串成一個閉環，而不是三個獨立示範。",
    tech: ["Scratch", "Teachable Machine", "Video Sensing", "micro:bit", "情緒識別"],
    impact: "科技可以先照顧人的狀態，再談效率。",
    img: "assets/img/p11-moveit.webp",
    source: { label: "橙新聞：全港小學生運算思維比賽 2025", url: "https://www.orangenews.hk/kids/1280663/" }
  },
  {
    id: "p12",
    no: "12",
    title: "WiseVision 智能護眼",
    school: "循道學校",
    level: "小學",
    domain: "健康科技",
    year: "2025",
    competition: "日內瓦國際發明展",
    award: "第 50 屆金獎",
    tagline: "把驗眼，由一年一次的檢查變成日常的自我監測。",
    concept:
      "學童近視、遠視普遍，但檢查眼睛往往要等學校健康檢查，或等父母有空才能去；問題於是被拖延，錯過及早處理的時機。",
    innovation:
      "與香港大學眼科及電機電子工程系合作，開發結合人工智能與手機的護眼系統：使用者足不出戶即可自行檢查眼睛健康狀況，並可跟隨系統內的護眼建議與影片邊學邊做。",
    unique:
      "小學團隊參與真實的醫學研究項目，由臨床需要定義功能，而不是由技術定義產品；首次參賽即於日內瓦奪金。",
    tech: ["人工智能", "手機應用", "眼科篩查", "大學協作", "護眼建議"],
    impact: "眼睛的問題，愈早發現，愈多選擇。",
    img: "assets/img/p12-wisevision.webp",
    source: { label: "TOPick：循道學校日內瓦發明展奪金", url: "https://topick.hket.com/article/3946407/" }
  }
];

const COMPETITIONS = [
  {
    name: "香港學生科學比賽",
    org: "教育局、香港青年協會、香港科學館合辦",
    level: "中學",
    scale: "2025 年吸引 221 支中學隊伍；賽事已舉辦 27 屆，累計培育逾 18,000 名學生",
    note: "2025 年度主題為「罕見疾病」，設發明品與研究項目兩大類，各分初中、高中組。",
    url: "https://ce.hkfyg.org.hk/2025/04/30/sspc25awardlist/"
  },
  {
    name: "香港青少年科技創新大賽",
    org: "香港新一代文化協會主辦",
    level: "小學至高中",
    scale: "第 27 屆（2025）超過 200 間學校、逾 4,000 人報名，共頒發 168 個獎項",
    note: "全港規模最大的學界 STEAM 賽事之一，得獎者有機會獲推薦參加全國及國際比賽。",
    url: "https://www.hkcd.com.hk/hkcdweb/content/2025/04/05/content_8688978.html"
  },
  {
    name: "香港創科展",
    org: "香港創新基金主辦",
    level: "小學、初中、高中",
    scale: "2025 年 120 隊入圍；2024 年約一千份參賽作品",
    note: "各組金獎隊伍由基金贊助前往日內瓦國際發明展，2025 年三隊全數獲獎。",
    url: "https://hkif.org.hk/sc/news/hong-kong-science-fair-empowers-primary-and-secondary-student-inventors-to-shine-on-the-international-stage"
  },
  {
    name: "全港小學生運算思維比賽",
    org: "賽馬會運算思維教育（CoolThink@JC）舉辦",
    level: "高小",
    scale: "2025 年第九屆，超過 120 隊報名、40 隊晉級決賽",
    note: "分 App Inventor 與 Scratch 組別，重視以數碼創意解決日常問題。",
    url: "https://www.orangenews.hk/kids/1280663/"
  },
  {
    name: "學生創新大賽",
    org: "香港教育城",
    level: "高小、初中、高中",
    scale: "2025/26 設高小、初中、高中三組，另設最佳匯報、最佳 AI 應用等專項獎",
    note: "以社區與生活問題為題，鼓勵學生把 STEM 知識變成可展示的方案。",
    url: "https://www.edcity.hk/home/zh-hans/sic/202627/result/"
  },
  {
    name: "日內瓦國際發明展",
    org: "Palexpo 主辦",
    level: "國際（含中小學隊伍）",
    scale: "第 50 屆（2025）35 個國家及地區、約 1,050 項發明參賽，香港作品約 300 項",
    note: "全球歷史最悠久、規模最大的發明展之一；香港多支中小學隊伍透過本地賽事獲得參展資格。",
    url: "https://topick.hket.com/article/3946407/"
  }
];
