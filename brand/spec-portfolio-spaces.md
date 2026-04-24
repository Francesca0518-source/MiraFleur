# Mira Fleur · 空间作品档案页 · 排盘规范

> **交付对象:** 前端开发(GitHub repo: `Francesca0518-source/MiraFleur`)
> **输入素材:** **37 张**黑底空间花艺图(来自"黑色背景板空间花艺"文件夹,Photoroom 处理过)——**绝大多数是酒店前台花 / 大堂 / 宴会场景,全部满足"可重复容器"准入规则**
> **分类 Taxonomy(v5 定案):** Line 1 下分三档顶级 tag,每张图可多 tag(最多 3 个):
>   - `Hospitality · 酒店花艺`(酒店/餐厅/度假村)
>   - `Corporate · 企业花艺`(办公楼/律所/诊所/精品健身)
>   - `Galleries & Retail · 商务空间`(画廊/精品店/showroom)
> **放弃的命名:** ~~Resident Florals / 驻场花艺~~(造词负担大、英语 native 理解有摩擦,2026-04-23 弃用)
> **页面定位:** 过往作品 / 能力档案——同时承担两条动线:
>   - **动线 A(首要 · Line 1):** 企业 + 私宅**空间花订阅**的销售证据。点进来的客户看完会想"我的空间也能一直这样"
>   - **动线 B(次要 · 大单接入):** 一次性 bespoke 活动 / 装置委托的能力证明。看完会想"我们家开幕/活动可以找她"
> **品牌锚点:** 华丽但克制 / 有故事的花 / NY 审美底子 × 南加州生活感
> **文档版本:** v5 · 2026-04-23(三档 taxonomy · 多 tag 机制 · 放弃 Resident 造词)

---

## 0.0 · 与现有 repo 的关系(v2 新增,v4 补充图片准入规则)

读完 repo 后的关键对齐:

- **`/portfolio/` 保留不动**——它是"按类别筛选作品的目录页"(filter chips + masonry 18 格 + lightbox)。
- **本文档描述的是一个新页面 `/portfolio/spaces/`**——空间花艺的编辑型深度页,承担档案 / 专业背书角色。
- 两者关系:`/portfolio/` 是**目录**,`/portfolio/spaces/` 是**专题**。目录让客户快速筛到自己的场景,专题让 Corporate / 高端客户看到真功夫。
- 首页联动(见 §1.4):About 段内嵌链接指向本页;首页 Portfolio Grid 6 格里留 2 格给空间作品 + 一个 "View Spaces Archive →" 出口。

### 0.0b · 图片准入规则(v4 新增 · **严格执行**)

本页**只收**下列一种图:

✅ **可重复容器的花艺作品(玻璃 / 陶瓷 / 金属等)** + Photoroom 黑底或墨蓝深底

**不属于本页的作品**(请勿混入,各走各的页面,详见 `project_mira_portfolio_visual_taxonomy.md`):

- ❌ 抱抱桶 / 纸包花束 / 礼盒 / 丝带包装等一次性容器 → 未来 `/portfolio/gifts/`,月白暖底 `#F5F1E8`
- ❌ 宴会 / 活动现场组图(多张环境叙事照) → `/journal/` 或 `/portfolio/events/`,**不抠图,保留原环境**
- ❌ 周更花 / 盲盒作品 → Line 2 未启动,**不进任何 Portfolio**

**理由:** 容器类型反映业务关系(持续 vs 一次性 vs 周期标品),视觉语言必须匹配业务语言。混入其他类型会稀释 Spaces 档案的 Line 1 订阅叙事。
- 同一批图可以**部分复用**到 `/portfolio/` 的 Corporate / Celebrations / New Beginnings / Everyday 滤镜下,但封面图要避开 `/portfolio/spaces/` 的 Feature 三联那三张,否则目录感稀释专题感。

### 0.1 · `/portfolio/` 目录页的 Taxonomy 填充(v5 定案)

**顶级 Tag 体系(三档,每张图必须有至少一个):**

| Tag | 中文 chip 显示 | 触发条件 |
|---|---|---|
| `hospitality` | 酒店花艺 | 酒店 / 餐厅 / 度假村 / Spa 场景 |
| `corporate` | 企业花艺 | 办公 / 诊所 / 律所 / 健身/医美/月子/早教 |
| `galleries-retail` | 商务空间 | 画廊 / 精品店 / showroom / 展陈 |

**横向二级 Tag(可叠加):**
`celebrations` · `new-beginnings` · `everyday`

**不用的 Tag:** `weddings` · `proposals` · `sympathy`(无真实素材,filter chip 隐藏)

**多 Tag 规则:**

- 每张图 **最多 3 个 tag**
- 必须有**至少 1 个顶级 tag**
- 可叠加 1-2 个横向二级 tag
- **场景子 tag**(Hotel Reception / Hotel Lobby / Banquet 等 8 档,见 §3.1b)**是 caption 素材,不是 data-category**
- 顶级 tag 可以同时多选(如酒店 gallery 联合活动 → `hospitality galleries-retail`)

**顶级 tag 从现有场景子 tag 自动 roll-up:**

| 场景子 tag | → 顶级 tag(默认映射) |
|---|---|
| Hotel Reception / Hotel Lobby / Banquet Tablescape | → `hospitality` |
| Boardroom / Executive Office | → `corporate` |
| Gallery · Exhibition | → `galleries-retail` |
| Corridor Installation / Event Foyer | 看图人工判定(走廊在酒店→hospitality,在 office→corporate,在画廊→galleries-retail) |

**data-category 实现:**

```html
<!-- 单顶级 tag -->
<div class="portfolio-item" data-category="hospitality">...</div>

<!-- 顶级 + 横向 -->
<div class="portfolio-item" data-category="hospitality celebrations">...</div>

<!-- 跨顶级(酒店办的画廊活动) -->
<div class="portfolio-item" data-category="hospitality galleries-retail new-beginnings">...</div>
```

Filter 逻辑:点击某 chip 时 OR 匹配——图片的 data-category 含该 tag 就显示。

**filter chip 顺序与视觉:**

顺序:`All · Hospitality · Corporate · Galleries & Retail · Celebrations · New Beginnings · Everyday`

视觉:
- 三档顶级 tag(Hospitality / Corporate / Galleries & Retail):激活态用 `--color-jinbo` 金箔下划线 + 粗体
- 二级横向 tag(Celebrations / New Beginnings / Everyday):激活态用 `--color-molan-soft` 下划线,视觉权重低一级
- 暂时隐藏的 chip(Weddings / Proposals / Sympathy):在 HTML 保留,CSS `display:none`,以便日后有图时一行改回

---

## 0 · 一句话定调

这一页不是"作品集",也不是"相册",是 Mira Fleur 的**空间花艺档案室**——懂的人一眼看出手艺,不懂的人感到"这个品牌做过大场面"。

**核心感觉:** 档案感、电影感、华丽但克制。
**避免的感觉:** 摄影棚宣传册、淘宝详情页、婚庆公司秀图、Lookbook 拼贴。

---

## 1 · 信息架构:这一页放在哪

### 1.1 路由与命名

**本页路由:** `/portfolio/spaces/`(子路由,不新增顶级导航项)。

- 顶级导航 Portfolio 保持不动(现已存在:Portfolio / Occasions / Services / About / Inquire)
- `/portfolio/` 继续是"目录"(filter-chip + masonry 18 格)
- `/portfolio/spaces/` 是"专题"——本文档描述的编辑型档案页

**页内标题(文件内的 h1):**

```
Spaces
空间
```

(文字保持与 `/portfolio/` 同一字体系统,但版面留白更大,见 §2[A])

### 1.2 导航与入口

本页不进主 nav(避免把信息架构搞复杂)。入口来自三处:

1. **`/portfolio/` 页顶**:在 page hero 下方增加一行 secondary link:
   `Looking for space & installation work? → View Spaces Archive`
   (中英双语,右箭头)
2. **首页 About 段**:见 §1.4 首页联动
3. **首页 Portfolio Grid**:见 §1.4

### 1.3 SEO / URL 规范

- 目标 URL:`/portfolio/spaces/` (带 trailing slash,与 `/portfolio/` 风格一致)
- `<title>`: `Spaces · Mira Fleur`
- `<meta description>`: 见 §5.4
- `<link rel="canonical">` 指向自身
- `og:image`: 用 Feature 三联第 1 张的 2400px 版本

### 1.4 首页联动(改动 index.html)

本页不能孤岛,现有首页有两处必须加入口:

**① About 段(目前写着"30 years of hotel floral expertise"):**

在段尾最后一句话后追加一个内嵌链接(不做大按钮,不做 CTA):

```html
  ...以 30 年的酒店与空间花艺经验为底。
  <a class="quiet-link" href="/portfolio/spaces/">
    See the archive →
    <span lang="zh">往期空间作品</span>
  </a>
```

视觉上 `.quiet-link` 用 `--color-molan` 文字 + `--color-jinbo` 下划线,hover 下划线加粗,**不用**按钮。

**② 首页 Portfolio Grid(6 格 featured):**

- 把原本 6 格中的 **第 2 格和第 5 格** 换成 `/portfolio/spaces/` 的 Feature 三联里的气势王 + 色彩王(各取一张)
- 这两格加角标 tag:`Spaces` (墨蓝小号字)
- 整个 Grid 下方增加一行小字 link,居中:
  `View full archive →  portfolio / spaces`

**③ 首页 About 段文案可选加强(非必改):**

目前 About 强调"30 年酒店经验",可以追加一句**具体性**来呼应空间档案页:

```
EN:  Hotels, galleries, private residences across California and
     Greater Los Angeles. Each one a one-off.

ZH:  加州与大洛杉矶一带的酒店、画廊、私人住宅。
     每一场都是独一无二的委托。
```

（场地类别按实际调整。**不要写具体酒店/客户名**,除非得到对方书面授权。）

---

## 2 · 页面骨架(自上而下)

```
┌─────────────────────────────────────────┐
│  [A]  极简 Hero  —  文字 + 留白          │    100vh (桌面) / 70vh (手机)
├─────────────────────────────────────────┤
│  [B]  Feature 三联 — 三张最强作品        │    全宽暗色底
├─────────────────────────────────────────┤
│  [C]  Editorial Grid — 精选 6–9 张      │    不规则 2 列
├─────────────────────────────────────────┤
│  [D]  Archive Strip — 其余作品轻盈陈列    │    紧凑横向滚动或 4 列小图
├─────────────────────────────────────────┤
│  [E]  CTA 段 — 引导至 Corporate / 联系    │    留白大
└─────────────────────────────────────────┘
```

### [A] Hero · 极简开场

**不做 hero image**,只做文字 + 大量留白。原因:黑底作品图第一屏砸出来像摄影工作室,气口消失。

**内容:**

```
Spaces
空间

Florals made for rooms that remember them.
为会记住它们的空间而做的花。
```

**视觉规范:**
- 背景:纯白(`#FDFDFB`)或页面主底色
- 主标题 `Spaces`:衬线(Serif),约 96–120px 桌面 / 56px 手机
- 副标 "空间":思源宋体或同款中文衬线,约 32px,字距放宽
- 文案居中或左对齐皆可,整屏只有这一块内容
- 上下各留 `20vh` 空

### [B] Feature 三联 · 开门三张

从 30 张里**亲手选 3 张最强**的,横向排列,全宽暗底(见 §7 暗色容器)。

**选图标准(三张各承担一个角色):**
1. **气势王**:最大体量的空间装置(酒店大堂、宴会桌、入口门面)
2. **色彩王**:色彩最有记忆点的一张(秋橙 / 冬白 / 深紫,别选粉)
3. **细节王**:近景特写,能看到花材肌理与编排手法

**视觉规范:**
- 三张图高度一致、宽度按原始比例,之间 `24px` 黑色间距(视觉上仿佛是一组)
- 图片下不加文字,不加边框,不加阴影
- 鼠标 hover:整体亮度 +3%(很轻),**不要**出现叠层文字或放大效果

### [C] Editorial Grid · 精选展开

选 6–9 张作为主阵列,**不规则 2 列**(非瀑布流,是编辑式布局)。

**布局逻辑:**
- 左 55% / 右 45%,左右列交错位移,不对齐顶边
- 每张图之间纵向间距 `48–80px`,不要挤
- 每 3 张之后插入一行"呼吸行":**仅一小段引文或色彩卡片**,不放图
- 图片 hover 无变化(保留档案感)

**呼吸行内容范例(任选):**

> "花在空间里不是装饰,是让空间开口说话。"
>
> — Mira Fleur

或色卡:
```
烟玫 · Rose Brume · #B88A8E
霜柿 · Persimmon Frost · #C9622E
```

### [D] Archive Strip · 其余作品

剩下的 20+ 张放这里。**不要**全堆在一屏,否则 §2[B][C] 的精挑细选被稀释。

**两种做法(择一):**

**做法 1 · 横向滚动胶片**(推荐)
- 单行横向滚动,图高 `280–320px`,宽按比例
- 显示"1 / 24 · Archive"小字计数器
- 鼠标滚轮横滚 / 触屏左右滑
- 手机端自动变成 2 列垂直堆叠

**做法 2 · 4 列小网格**
- 等宽 4 列,图片高度参差
- 每张图点击打开 lightbox(见 §7.3)

### [E] CTA 段 · 动线出口

页面底部留一段"去哪里"。

```
对空间项目有想法?

→ [Corporate · 企业花艺](/corporate)
→ [写信给我们](/contact)
```

**视觉:** 大留白(上下各 `15vh`),文字居中,链接用细下划线 hover 变色。

---

## 3 · 图片筛选与分组逻辑(Francesca 前置工作)

在把图交给开发之前,你要先做三件事:

### 3.1 三分法分类

把 30+ 张分成三类,用文件夹名标注:

```
/spaces-source/
  ├─ 01_hero/        ← 3 张(对应 §2[B] Feature 三联)
  ├─ 02_editorial/   ← 6–9 张(对应 §2[C] Editorial Grid)
  └─ 03_archive/     ← 剩余 20 张左右(对应 §2[D])
```

**分类标准:**
- `01_hero` 只要**王炸三张**——气势 / 色彩 / 细节各一张
- `02_editorial` 选"有故事感、构图干净、色彩成立"的
- `03_archive` 是证据力量——完整度够、但不必件件惊艳

**淘汰标准(这些不要放):**
- 花材状态不好、有衰败感的(除非刻意美学)
- 构图有杂物、反光、奇怪裁切
- 和其他图角度雷同只是换 30°
- 颜色过饱和、艳俗(粉+红+黄堆砌)
- 能看出拍摄仓促(光线平、没氛围)

### 3.1b 场景 Taxonomy(v3 新增 · 每张图必填)

每张图除了归 hero/editorial/archive 三档,还要从下面这张表里挑一个**场景 tag**(`scene`)——作为 caption 和 alt 的基础:

| 中文 | English | 触发场景 |
|---|---|---|
| 酒店前台 | Hotel Reception | 大部分图应该落在这里——前台迎宾花 |
| 酒店大堂 | Hotel Lobby | 大堂装置、中央花台、入口 |
| 宴会桌花 | Banquet Tablescape | 婚宴/商务宴会长桌或圆桌 |
| 活动入口 | Event Foyer | 发布会/ gala /开幕式入口 |
| 走廊装置 | Corridor Installation | 走道、电梯间 |
| 会议室 | Boardroom | 会议桌中央或侧几 |
| 画廊 / 展陈 | Gallery · Exhibition | 画廊开幕、展览配花 |
| 行政办公 | Executive Office | 高管办公室桌花 |

**分配建议:** 看一眼 30 张图,至少 60–70% 应落在 `Hotel Reception` + `Hotel Lobby` + `Banquet Tablescape` 这三档——这符合你商业规划(Corporate / Hospitality)。若某一档只有 1 张孤图,合并到最近的档。

### 3.1c 调色板 Tag(每张图必填)

每张图再配一个 1–2 色的调色板描述,用于 caption。参考 `brand/colors.md` 里的命名体系,**优先用中文诗意色名**:

**常见组合范例:**

| 主色 | 副色 | 英文 | 氛围 |
|---|---|---|---|
| 月白 | 月桂 | Ivory + Laurel | 清冷克制 |
| 烟玫 | 藕荷 | Misty Rose | 柔美克制 |
| 霜柿 | 胭脂 | Persimmon + Rouge | 秋冬暖意 |
| 墨梅 | 檀香 | Deep Plum + Sandalwood | 浓郁内敛 |
| 青梅 | 月白 | Green Plum + Ivory | 清透诗意 |
| 金箔 | 墨蓝 | Amber + Navy | 正式华丽 |
| 纯白 | — | Full White | 极简高级 |

(不够的组合按现场实际调配,但名字必须走 `brand/colors.md` 的诗意中文 + 英文范式,不用粉红 / 亮橙 / 玫红 这种直白色词)

### 3.2 色彩与节奏编排

分类之后,在 `02_editorial` 和 `03_archive` 里按**色彩分簇**再排序:

```
顺序范式(节奏感):
暖色簇 → 中性簇 → 冷色簇 → 单色/白 → 暖色回声
```

不要:所有橙色堆一起完了换所有紫色。要:像编歌单,起伏。

### 3.3 淘汰狠一点

**30 张不是目标,是素材池。**最终上线 15–20 张足够。档案感来自克制,不是数量。如果有 35 张你觉得都不错,再砍 10 张。

---

## 4 · 图片规格与命名(给开发的技术规范)

### 4.1 命名规范

所有图统一 kebab-case,格式:

```
mira-spaces-{zone}-{nn}.jpg
```

- `zone` = `hero` / `editorial` / `archive`
- `nn` = 两位数序号,按展示顺序

**例:**
```
mira-spaces-hero-01.jpg
mira-spaces-hero-02.jpg
mira-spaces-hero-03.jpg
mira-spaces-editorial-01.jpg
...
mira-spaces-archive-17.jpg
```

### 4.2 图片规格

| 用途 | 长边像素 | 格式 | 质量 | 约 KB |
|---|---|---|---|---|
| Feature 三联 (§2[B]) | 2400px | WebP + JPG fallback | 85 | 300–500 |
| Editorial Grid (§2[C]) | 2000px | WebP + JPG fallback | 85 | 200–400 |
| Archive Strip (§2[D]) | 1400px | WebP + JPG fallback | 80 | 100–200 |
| 全部配 LQIP / blur placeholder | 24px 长边 | — | — | < 1KB |

**颜色空间:** sRGB(不要 AdobeRGB,网页会偏色)
**EXIF:** 清掉所有元数据(隐私 + 文件变小)

### 4.3 目录结构(对齐现有 repo)

现有 repo 根目录下已有 `/images/` 文件夹(含 `botanical/` `classical/` `decorative/`)。新建一个 `spaces/` 兄弟目录:

```
/images/spaces/
  hero/
    mira-spaces-hero-01.{jpg,webp}
    mira-spaces-hero-02.{jpg,webp}
    mira-spaces-hero-03.{jpg,webp}
  editorial/
    mira-spaces-editorial-01.{jpg,webp}
    ...
  archive/
    mira-spaces-archive-01.{jpg,webp}
    ...
  lqip/              ← 可选,24px blur placeholder
```

页面文件放 `/portfolio/spaces/index.html`。

### 4.4 Alt Text(无障碍 + SEO)

每张图一条 alt,格式(v3 更新 · Corporate 导向):

```
Mira Fleur corporate floral — [scene], [palette] palette
```

**例:**
- `Mira Fleur corporate floral — hotel reception arrangement, ivory and laurel palette`
- `Mira Fleur hospitality floral — hotel lobby installation, persimmon and rouge palette`
- `Mira Fleur corporate event floral — banquet tablescape, amber and navy palette`
- `Mira Fleur corporate floral — gallery exhibition, full white palette`

**关键词必须包含一个:** `corporate floral` / `hospitality floral` / `hotel floral` / `corporate event floral`——这是 SEO 端抓 C 线长尾(如 "Newport Coast hotel florist")的关键。

**不要:** 写酒店名 / 客户名 / 品牌名(保护客户 + 避免商业感)。

### 4.5 图片 Caption(v3 新增 · 图下可见文字)

每张 Editorial Grid 和 Archive Strip 的图都配一条双行 caption,图下居中,小字:

```
EN · 衬线:   Hotel Reception · Ivory + Laurel
ZH · 宋体:   酒店前台 · 月白 + 月桂
```

**样式:**
```css
.spaces-caption {
  margin-top: 16px;
  text-align: center;
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--color-molan-soft);     /* #2D4057 */
  line-height: 1.6;
}
.spaces-caption .en {
  font-family: var(--font-serif-en);
  font-style: italic;
}
.spaces-caption .zh {
  font-family: var(--font-serif-zh);
  display: block;
}
.spaces-caption .dot {
  margin: 0 8px;
  color: var(--color-jinbo);          /* #B8924A 金箔做分隔 */
}
```

**不做:**
- ❌ Feature 三联(§2[B])**不加 caption**——让三张气势图呼吸,太多字会降格
- ❌ **绝不**写日期("2023 Autumn")、地点("Pelican Hill")、客户名("for the Smiths")——全部匿名化
- ❌ 不写长文案(不是 case study,是 caption 层)

**Hover 可选增强(非必要):**
Archive Strip 的图 hover 时,caption 颜色从 `--color-molan-soft` 渐变到 `--color-molan`(加深 30%),暗示可交互。不要浮出新的 tooltip。

---

## 5 · 文案稿(可直接复制)

### 5.1 Hero(§2[A] · v4 更新 · 订阅优先 + 大单兼容)

**主标:**
```
EN:  Spaces
ZH:  空间
```

**副标(定稿):**
```
EN:  Florals for spaces that stay in bloom —
     weekly, by subscription, or for a single occasion.

ZH:  为常年盛放的空间而做的花 —
     按周订阅,或为某一场合。
```

**关键词解读(给 Claude Code / 审核者):**
- `stay in bloom / 常年盛放` → 暗示订阅的持续性(Line 1 主调性)
- `weekly, by subscription` → 明确 Line 1 入口信号,SEO 抓 "weekly floral subscription" 长尾
- `for a single occasion / 或为某一场合` → 开一扇门给大单客户,不排斥 bespoke 活动委托
- "stay in bloom" 比 "remember them" 更具体,比 "subscribe now" 更克制,两全

**不用的版本(历史参考,别用):**
- ~~"Florals made for rooms that remember them"~~ (v1,太抽象,无商业信号)
- ~~"Florals for rooms where the first impression begins"~~ (v3,偏 C 线单轴,没涵盖订阅)

### 5.2 Editorial 呼吸行(§2[C],任选 1–2 段)

**版本 A · 陈述式**
```
花在空间里不是装饰,是让空间开口说话。
Florals don't decorate a room. They let the room speak.
```

**版本 B · 档案注脚**
```
Selected works · 2021—2026
部分空间项目 · 2021—2026
```

**版本 C · 色彩卡**
```
烟玫 · Rose Brume · #B88A8E
霜柿 · Persimmon Frost · #C9622E
```

### 5.3 底部 CTA(§2[E] · v4 更新 · 双动线,订阅优先)

```
Two ways to work together ·
两种合作方式

→ [Primary · 订阅动线 A]
    Weekly florals for your space ·
    每周花艺订阅
    → for hotels, galleries, offices, and private residences

→ [Secondary · 大单动线 B]
    For a one-time event or installation ·
    单次活动与装置委托
    → galas, openings, celebrations
```

**视觉层级:**
- Primary(订阅):`--color-molan` 标题文字 + `--color-jinbo` 细下划线,hover 下划线加粗
- Primary 下一行补充说明:`--color-molan-soft` 小字,解释覆盖场景
- Secondary(大单):整体用 `--color-molan-soft`,hover 变 `--color-molan`
- **两个都不是按钮**,维持档案页克制感
- 两者之间垂直间距 `48px`,不要并排(桌面端也纵向堆叠,防止"二选一"感)

**Primary 指向:** `/services/` 页的订阅档位 anchor(`/services/#subscription`);若 `/services/` 尚未建订阅分区,临时指向 `/inquire/?source=spaces-subscription`
**Secondary 指向:** `/inquire/?source=spaces-event`

**URL 参数解读:** `?source=` 让 Inquiry 表单后端知道客户从哪里进来,便于 Francesca 手工优先级排序——订阅线索优于单次活动线索。

### 5.4 Meta(SEO / 分享)

```
<title>Spaces · Mira Fleur</title>
<meta name="description" content="Mira Fleur 过往空间花艺作品存档 — Newport Coast & Orange County · Archive of space florals by Mira Fleur.">
<meta property="og:image" content="/images/spaces/hero/mira-spaces-hero-01.jpg">
```

---

## 6 · 视觉规范(前端实现细节)

### 6.1 颜色与排版 token(**以 `brand/colors.md` 为准**)

**⚠️ 以下是本页用到的权威 token,不要另外引入新颜色。若与 `brand/colors.md` 有任何冲突,以 `brand/colors.md` 为准。**

```css
/* 页面底色(70% 月白) */
--color-yuebai:      #F5F1E8;   /* 主底 */
--color-yuebai-cool: #FAF7F0;   /* 大面积留白区域 */

/* 文字与 UI 结构(20% 墨蓝) */
--color-molan:       #1A2B3D;   /* 正文主色 / 标题 */
--color-molan-deep:  #0F1B28;   /* Feature 三联区的暗色容器背景,见 §6.2 */
--color-molan-soft:  #2D4057;   /* 副文字 / 边框弱层级 */

/* 强调(2% 金箔,极少量) */
--color-jinbo:       #B8924A;   /* 下划线、链接 hover、分隔线 */

/* 本页可能出现的 Flora 色(8%,仅作色卡展示,不作 UI) */
--color-yanmei:      #A8727A;   /* 烟玫 */
--color-shuangshi:   #C87547;   /* 霜柿 */
```

**现有 repo 里已经加载了 Cormorant Garamond / Jost / Noto Serif SC / Noto Sans SC,沿用即可:**

```css
--font-serif-en: "Cormorant Garamond", Georgia, serif;  /* 标题 */
--font-sans-en:  "Jost", -apple-system, sans-serif;     /* 正文/UI */
--font-serif-zh: "Noto Serif SC", serif;                /* 中文标题 */
--font-sans-zh:  "Noto Sans SC", sans-serif;            /* 中文正文 */
```

**标题**用衬线(EN: Cormorant / ZH: Noto Serif SC),**正文/导航**用 sans(Jost / Noto Sans SC)。别混——品牌手册对字体有明确分工。

**色彩使用比例(来自 `brand/colors.md` 黄金比):** 70% 月白 / 20% 墨蓝 / 8% Flora / 2% 金箔。本页因为有 §6.2 的暗色容器,墨蓝占比会临时上调到 ~35%,这是可接受的(专题页,非通用页)。

### 6.2 Feature 三联的暗底处理(§2[B] 重点)

黑底作品图直接放月白页面上会**像被剪刀剪下来的贴纸**。必须加一段**全宽墨蓝深底**把它们托住:

```css
.feature-band {
  background: var(--color-molan-deep);   /* #0F1B28 */
  padding: 120px 0;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}
```

暗色带可以微微加一点噪点 / 纸纹(opacity 3–5%),更贵。**不要用纯黑 `#000`**——会和图片本身的黑底融成一片,失去层次。墨蓝 `#0F1B28` 和 Photoroom 抠出的黑底 `#000` 之间有足够的色差,图会"浮"起来一点点。

### 6.3 间距节奏

大原则:**宁多勿少**。模块之间 `120px`(桌面) / `64px`(手机)。图与图之间 `48px`(Editorial Grid) / `24px`(Feature 三联,紧凑成组)。

### 6.4 动效

- **绝不用**:淡入飘动、视差滚动、自动轮播、弹窗弹跳
- 可以用:图片 hover 轻微亮度变化(+3%)、LQIP 淡入到高清
- 滚动时禁用粘性元素,让页面安静下沉

### 6.5 Lightbox(可选)

若做(§2[D] 做法 2),只保留:
- 左右箭头 / 关闭 X / 图序号(如 `07 / 24`)
- 不要分享按钮、不要放大 2x、不要相关推荐
- 背景 `rgba(14,14,16,0.94)`(近黑但保留空气)

---

## 7 · 响应式与性能

### 7.1 断点

```
≥ 1280px : 按 §2 完整布局
≥ 768px  : Editorial Grid 保 2 列,Archive Strip 保横滚
< 768px  : Feature 三联变纵向堆叠;Editorial Grid 变 1 列;Archive Strip 变 2 列网格
```

### 7.2 性能目标

- LCP < 2.5s(Hero 无图,容易达标)
- Feature 三联图必须 **eager load**,其余 `loading="lazy"`
- 总页面 transfer size ≤ 3MB(WebP 压缩后应该能压进去)

### 7.3 可访问性

- 所有图必须有 alt
- Lightbox 支持 ESC 关闭、Tab 焦点管理
- 对比度:正文对背景 ≥ 4.5:1

---

## 8 · 给开发的验收 checklist

上线前勾一遍:

```
□ 路由 /spaces 或 /archive 已挂主导航
□ 导航顺序:Corporate 之后、Journal 之前
□ Hero 无图,只有文字 + 留白(上下各 20vh)
□ Feature 三联在暗色全宽带里,非白底
□ Editorial Grid 是不规则 2 列,非对齐顶
□ 呼吸行至少插入 1 处
□ Archive Strip 用横滚或 4 列小网格
□ 图片均有 alt,不含客户/酒店名
□ 图片 WebP 已生成,JPG fallback 存在
□ LCP < 2.5s,Lighthouse 性能 ≥ 90
□ 手机端 Feature 三联变纵向堆叠
□ 所有动效轻盈,无自动轮播或飘动入场
□ EXIF 已清除
□ OG 图已配
```

---

## 9 · 给 Francesca 的前置清单

在交给开发之前你要完成:

1. **筛图到 ≤ 20 张**(30 张砍一半,只留真正拿得出手的)
2. **按 §3.1 分三类** `01_hero / 02_editorial / 03_archive`,三个文件夹
3. **按 §4.1 重命名**(或告诉我你分完之后我生成命名表给你)
4. **决定 Hero 文案用我写的还是你要改**(§5.1)
5. **确认颜色 token**(§6.1 的烟玫/霜柿 Hex 值以品牌手册为准,我这里是推算的,请你核对)
6. **把这份文档 + 分好类的图压成一个 zip**,发给开发

---

## 9.5 · 图片素材规则

本 `/portfolio/spaces/` 页的 30 张图以及首页 Portfolio Grid 里所有的 Mira 作品图,**全部是 Mira Fleur 自有作品**(品牌主理人已确认)。Claude Code / 任何后续维护者在这页工作时:

- 图片文件直接使用 Francesca 提供的素材
- Alt 文案按规范 §4.4 的脱敏格式写(不含客户/酒店名),但这是隐私保护而非版权理由
- AI 生成图(如 `MIDJOURNEY_PROMPTS.md` 产出)用于 Heritage / Classical 等氛围段即可,不进入 Portfolio

---

## 10 · 非目标(保护品牌的"不做")

这一页**永远不要**出现:

- 客户/酒店 logo 墙("被 XX 酒店信任"句式)
- 价格或起订量
- "案例数量 / 服务年份 / 团队人数"之类数字
- 客户好评截图
- 视频自动播放
- 新闻报道 / 媒体报道条(除非是 Vogue 级别)
- Instagram feed 嵌入(拉低整页调性)
- 粉色 / emoji / 婚庆感飘带装饰

档案感 = 少说话,让作品自己站住。

---

*本规范对齐《Mira花礼 品牌手册》与《产品线规划》中 C 线定位。如与品牌手册冲突,以手册为准,并更新本规范。*
