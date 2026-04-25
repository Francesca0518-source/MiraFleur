# 服务边界与口径(Services Scope)

> 本文件定义 Mira 当前真实可交付的服务范围与对外口径。任何 Claude 实例(Chat/Cowork/Code)在写文案、改页面、做 SEO 之前,先以此为准。
>
> 决策日期:2026-04-24(Francesca)
> 触发原因:此前官网把企业服务写得过重(monthly invoicing / dedicated account management / executive gifting program / brand activation / press event),与 Mira 的真实体量不符。

---

## 当前对外的四项服务

| # | 名称 | 中文 | 起价 / 门槛 | 形态 |
|---|------|------|------------|------|
| 01 | Custom Arrangements | 定制花艺 | $180 起 | 单次定制 |
| 02 | Event & Wedding Florals | 活动与婚礼花艺 | $2,500 起(亲密型);$8,000 起(全天婚礼) | 单次活动 |
| 03 | **Mira Space Florals** | **Mira 空间花艺** | 以 Space Preview 开始,正式合作 1 quarter 起 | 长期合作,每季度限 2–3 席 |
| 04 | Weekly Subscriptions | 每周订阅 | $220/周 起 | 私人客户(home only) |

---

## Service 03 — Mira Space Florals(重点)

这是从原 "Corporate Accounts" 重新定义而来的**真正可交付的版本**。

### 是什么
与一处空间的长期花艺合作。**对象空间**:酒店大堂、行政办公室、画廊、零售空间。**形态**:每周或每两周更替的花艺——可选前台陈设、迎客台花艺,或整体空间作品。

### 入口:Mira Space Preview
- 为期两周的观察期
- 实地走访,在不同时段停留体验空间
- 交付一份**书面报告**:配色、体量、节奏、长期方向建议
- Preview 完成后,客户决定是否进入正式合作

### 正式合作
- 最短承诺:**1 quarter(三个月)**
- 容量:**每季度仅接受 2–3 处新空间伙伴**(这是品牌承诺,不是 marketing)
- 节奏:每周或每两周更替

### 不是什么(避免再次写错)
- 不是 monthly recurring billing 平台
- 不是 dedicated account manager 服务
- 不是 brand activation 接案
- 不是 press event 现场承包
- 不是 year-round executive gifting program

---

## 单次企业活动(归入 Service 02 或 occasions/corporate-events 单次场合)

商务晚宴、董事会、会议室主花、私人客户晚餐——这一类是**按场设计、按场报价**的单次合作,在 occasions/corporate-events/ 页面与 Space Florals 并列展示,共享同一咨询入口。

不要给单次企业活动写"$450 起"这种货架价,它和定制花艺/活动花艺一样属于 consultative quote。

---

## 文案禁用词(企业方向)

写企业相关页面时,**不要再用**以下词组(中英)——它们让 Mira 错位成 agency:

- monthly invoicing / 月度结算
- dedicated account management / 专属客户经理
- executive gifting program / 高管礼品项目
- brand activation / 品牌活动(指承包)
- press event / 媒体活动(指承包)
- year-round program / 年度项目
- corporate accounts / 企业账户

可以用:
- Mira Space Florals / Mira 空间花艺
- Mira Space Preview
- ongoing space partnership / 长期空间合作
- standing engagement / 正式合作
- limited to 2–3 spaces per quarter / 每季度限 2–3 席
- business dinner / board meeting / conference / 商务晚宴 / 董事会 / 会议

---

## 服务之间的边界(避免重叠)

为了让客户能一眼分清,内部明确:

- **Subscription(#04) ≠ Space Florals(#03)**
  - Subscription:**私人客户的家**(home),个人审美档案
  - Space Florals:**机构空间**(hotel / office / gallery / retail),多人体验,与建筑对话

  → 因此 Subscription 文案统一为"home"(原"home or office"已修正)

- **Event Florals(#02) ≠ Space Florals(#03)**
  - Event:一次性,有日期,有撤场
  - Space Florals:长期,有节奏,有 Preview gate

---

## 已完成的页面同步(2026-04-24)

- `services/index.html` — Service 03 重写;Subscription 改 home only
- `occasions/corporate-events/index.html` — 整页重写为两段式(Space + 单次);H1/title/meta/og 更新;旧的 "What to Expect" 卡片删除
- `occasions/index.html` — meta + 卡片同步
- `index.html` — occasion 卡 + services 摘要(Event Florals 把"corporate events"改为"business dinners";Subscription 改 home)
- `faq/index.html` — "Do you offer corporate accounts?" 改写为"Do you work with businesses — hotels, offices, galleries?";JSON-LD 同步
- `inquire/index.html` — 表单 occasion dropdown:"Corporate" 拆成 "Space Florals (ongoing)" 与 "Business event (single)"

## 仍可保留的"Corporate"标签

Portfolio 与 Portfolio/Spaces 里若干作品的 `data-category="corporate"` 与 "Corporate" 筛选 chip **保留不变**——这是作品分类标签,不是服务承诺。这一点对应 Mira 真实有 boardroom / executive office 风格的作品在档。

---

*下一次相关决策(如开放第 4 席、改变 Preview 周期、调整定价),请追加在本文件末尾或新开 changelog,而不是仅在对话里说。*

---

## 2026-04-25 更新:整体口径再调整

Francesca 在 Cowork 中明确了 6 条新口径,本次落到位:

### 1. Hero slogan 定稿
- **EN:** Some things, only flowers can say.
- **CN:** 把难以言说的情感，托付给一束得体的花。

直接用 CLAUDE.md 里 brand DNA 那句话。EN 用倒装+逗号节奏匹配中文,避开 unspoken/entrust 等翻译腔词。**禁止改成"Dream in bloom"等抽象诗化套路。**

### 2. 来源/服务范围统一
- **来自:尔湾**(Irvine)。**禁用** "Hand-crafted in Newport Coast" / "源自 Newport Coast"
- **服务范围:** Newport Coast 与橙县周边(Newport Coast & surrounding OC)
- Footer "Visit / By appointment" 列已替换为 "Service Area / Based in Irvine / Newport Coast & surrounding OC"
- JSON-LD addressLocality 改为 "Irvine"

### 3. Lead time 与同日交付
- **Custom Arrangements:** 提前 3 天为佳
- **Event Florals(生日/求婚/宴请/baby shower 等):** **至少提前 1 周**
- **Intimate weddings & ceremonies:** 3–6 周;旺季更早
- **Same-day:** 仅尔湾/Newport Coast,12:00 PM PT 前咨询,**收取加急费用**,不保证

### 4. 婚礼范围收紧
**目前不主要承接大型整场婚礼**。只做:
- 求婚花艺
- 新娘手捧花
- 主桌花(sweetheart-table)
- 仪式细节
- 亲密型 / 家中举办的婚礼

大型整场婚礼布置 → 礼貌推荐合作方。`occasions/weddings-proposals/` 已重写成上述定位。

### 5. 沟通渠道:text + email,不接电话
- **禁用:** "By phone"、"phone consultation"、"in person at our atelier"
- **明确告知客人:**"We do not call" / "我们以短信回复,不会拨打电话"
- inquire 表单的 phone 字段改为 "Mobile (for SMS only)"
- FAQ 增加"How do I reach you? Can I call?" 一条

### 6. 工作室不存在(对外不要提)
- **禁用:** atelier / 工作室(指可访问空间) / Visit / By appointment / "come to our studio"
- 对外不暗示有可参观的物理空间。"Made to order"、"made by hand"、"built by hand on the day" 这种动词可以,但不要说"in our atelier" / "at our studio"
- About 页 H2 由 "The Atelier" 改为 "The Practice"

### 7. About 页"美学传承"重写(更高级、更全面)
新版三段式叙事:
1. 五星级酒店三十年积淀(restraint as the most expensive material,玉兰对一个房间气息的改变)
2. 东方根脉:ikebana 留白 + 中国花是情感载体的传统
3. 三十年积累出的不是技艺而是一套"语汇"(配色、比例、色彩递进、骨与柔的合宜)

### 8. Inquire 表单大改:加入 brief 引导字段
对应"大活动建议先填 request form"的需求。新增字段:
- Mobile (SMS only) — 强调不接电话
- Preferred language(EN / 中文 / Either)
- Time of day(送达 / 布置时间)
- Headcount(活动人数)
- Venue / location(场地)
- Style direction(风格方向 — textarea)
- Color palette(配色)
- Specific flowers(喜欢/避开,含过敏)
- Reference image links(Pinterest / Instagram / 小红书 链接)

旧的 "+ Add more details" 折叠去除——所有字段一次性展开。表单结构按 4 个小标题分段:Who you are / The occasion / The place / The look you're after / Anything else。

### 9. Intro & 首页重写
首页 intro-strip 删除"private floral atelier" / "no standing inventory, no repeated compositions"等门店暗示话术,替换为"bespoke floral practice based in Irvine"+ 五星级酒店 craft 简述。

### 文案禁用词清单(更新)

中英文一律避免:
- "Hand-crafted in Newport Coast" / "源自 Newport Coast"
- "atelier" 作为可访问空间(filename 用没问题)
- "By appointment only" / "仅接受预约"
- "Visit our studio" / "in person at our atelier"
- "Phone consultation" / "give us a call"
- "no standing inventory" / "no storefront" / "no repeated compositions"(这些自以为高级,实际像在向"花店模板"对齐)
- "Dream in bloom" 类抽象诗化句子
- "匠心" / "致敬" / "献给每一个" / "Elevate your" / "Premium" / "Curated"
- "$8,000+ full-day weddings" / "monthly invoicing" / "executive gifting program"

可用:
- "Made to order, from Irvine" / "定制花艺,来自尔湾"
- "Bespoke floral practice based in Irvine"
- "Built by hand on the day of delivery"
- "Some things, only flowers can say."
- "We respond by text" / "我们以短信回复"
- "The request form is the cleanest way to start"

### 文档同步
- `index.html`、`about/index.html`、`services/index.html`、`process/index.html`、`faq/index.html`、`inquire/index.html`、`occasions/index.html`、`occasions/corporate-events/index.html`、`occasions/weddings-proposals/index.html`、`occasions/celebrations/index.html`、`occasions/sympathy-remembrance/index.html`、`occasions/everyday-luxury/index.html`、`occasions/new-beginnings/index.html`、`portfolio/index.html`、`portfolio/spaces/index.html`、`inquire/thank-you/index.html` — 全部 16 个 HTML 的 footer + tagline 已统一
- `style.css` — 新增 `.form-section-h` 样式
- 旧 .bak 文件由 sed 留下,沙箱内无法删除,但 `.gitignore` 里已包含 `*.bak`

---

## 2026-04-25 补充:文案口气再调整(更自然谦逊)

Francesca 反馈:之前几版仍偏自我加冕。新口径如下:

### 视角换位
- **从"我们承接了什么传统/带来了什么稀有的东西"→ 改为"我们替客人解决一个什么问题 + 我们能拿出来什么"**
- 创立动机:替客人解决一个具体问题——生活中真正重要的时刻,找一束真正合适的花并不容易
- 我们能给客人的:酒店三十年的修养、稳妥、可靠、长期实践沉淀的判断力

### 禁用意象/词汇(本轮新增)
- 大理石 / 天鹅绒 / 水晶灯 / 拱顶 / 宴会厅(boastful interior imagery)
- "更稀有的花艺"/"独有的花艺"/"曾经只属于..."(自我抬高 / 阶级暗示)
- "玉兰对一个房间气息的改变,胜过五十枝胡乱堆叠的玫瑰"(打压同行式比喻)
- "在骨子里"(过重)
- 中文里"绽放"作为品牌动词("为...而绽放")——可作为普通动词,但不要做品牌口号

### 地点描述简化(只针对 About 页 / intro-strip;Hero 区保留)
- Hero 区保留完整地点("来自尔湾,服务 Newport Coast 与橙县周边地区")——这是首页给陌生访客的第一印象
- About 页 hero subhead / Practice 段不再三段反复强调,一句"以尔湾为基地,服务橙县地区"带过
- footer 已经清楚交代,正文其他位置不必重复

### 替换示例
- ❌ "我们的工艺承接自三十年五星级酒店花艺的积淀——那种必须在大理石大堂、宴会厅与私人餐厅中独当一面的修养"
- ✅ "我们能拿出来的,是过去三十年在五星级酒店花艺部门里养成的修养、稳妥与可靠"

---

## 2026-04-25 · 四条业务线 IA 定型(supersedes 之前所有 portfolio/occasions taxonomy)

### 主导航四条线(顺序固定)

| 顺序 | URL | 中文 | English | 视觉容器 | 主 CTA |
|---|---|---|---|---|---|
| 1 | `/weekly/` | 周更花礼盲盒 | Weekly Bloom | (Coming Soon) | Email capture |
| 2 | `/gifts/` | 单次花礼 | Signature Gifts | 月白底 `#F5F1E8` Photoroom | Inquire to order |
| 3 | `/corporate/` | 企业服务 | Corporate Florals | 墨蓝深底 `#0F1B28` Photoroom | **Book free 2-week pilot** |
| 4 | `/events/` | 活动定制 | Event Florals | 原环境实拍(不抠图) | Inquire for consultation |

次级 nav:About · Process · FAQ · Inquire(WeChat QR 在 contact 区)

### 已废弃的 IA(本次完全替代)

- ❌ `/portfolio/` 整个目录(连同 `/portfolio/spaces/`)
- ❌ `/occasions/` 整个目录(6 个子页)
- ❌ `/services/`(内容并入 `/corporate/`)
- ❌ Issue #1 / #2 中的 `hospitality / corporate / galleries-retail` 三档 sub-tag —— 对外取消,对内 SOP 仍可保留
- ❌ 之前 `Mira_Fleur_空间作品档案_排盘规范` v5 中的 `Spaces` 专题页定位 —— 内容并入 `/corporate/`

### 旧 URL 重定向(meta-refresh,GitHub Pages 不支持服务端 301)

| 旧 URL | → 新 URL |
|---|---|
| `/portfolio/` | `/gifts/` |
| `/portfolio/spaces/` | `/corporate/` |
| `/occasions/celebrations/` | `/gifts/?filter=celebration` |
| `/occasions/new-beginnings/` | `/gifts/?filter=new-beginnings` |
| `/occasions/sympathy-remembrance/` | `/gifts/?filter=sympathy` |
| `/occasions/everyday-luxury/` | `/gifts/` |
| `/occasions/corporate-events/` | `/corporate/` |
| `/occasions/weddings-proposals/` | `/events/?filter=wedding` |
| `/services/` | `/corporate/` |

### Tag 体系(spec §6)

- 4 个维度:Color · Occasion · Form/Type · Style/Mood
- 每张图 5–10 tag,跨维度 AND 匹配,同维度内 OR 匹配
- 不打 location tag(no city/region/state)
- 客户可见 chip 不再细分 hospitality / corporate / galleries-retail

### 图源映射(`/产品/` → `/images/{line}/_source/`)

| 源文件夹 | → Line | 处理 |
|---|---|---|
| `企业酒店商业作品/` | C 企业 | 用户已编辑,直接上传(Photoroom 跳过) |
| `黑色背景板空间花艺/` | C 企业 | 已 Photoroom 黑底,直接上传 |
| `花束抱桶礼物/` | B 单次 | 用户已编辑,直接上传 |
| `活动宴会餐桌花/` | D 活动 | 原环境保留,直接上传 |

### 婚礼策略调整

- 旧:"❌ 婚礼大单" 一刀切
- 新:✅ 小型婚礼 / 求婚 / 私人宴请 走 Line D,主导航位置靠后,显式声明客人数门槛(待 Francesca 填具体数字)
- 仍然 ❌:多人手 · 数万元 · 一次性 bespoke 大单

### 尚未完成(后续 issue 或 commit)

- WebP + JPG fallback 双版本(本机无 ImageMagick / cwebp,需要等机器配齐工具或 CI 上跑)
- 600px `_grid/` thumbnail 同上
- `image-tag-manifest.csv`(vision 跑过 235 张图,生成建议 tag 给 Francesca review)
- 每条线的 chip filter UI 实际接线(等 tag manifest 通过后)
- 文件名 rename 到 `mira-{line}-{seq}-{occ}.{ext}` 规范(等 tag manifest)
- Cloudflare 启用 proxy(橙云)后,把 meta-refresh 升级为真正的 301(Cloudflare Bulk Redirects)
