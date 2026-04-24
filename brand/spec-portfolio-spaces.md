# Mira Fleur · 空间作品档案页 · 排盘规范

> **交付对象:** 前端开发(GitHub repo: `Francesca0518-source/MiraFleur`)
> **输入素材:** 30+ 张黑底空间花艺图(Photoroom 处理过,来自花艺师过往酒店空间项目)
> **页面定位:** 专业背书 + C 线(企业账户)隐性销售素材 + 首页 About "30 年酒店花艺经验" 的视觉证据
> **品牌锚点:** 华丽但克制 / 有故事的花 / NY 审美底子 × 南加州生活感
> **文档版本:** v2 · 2026-04-23(对齐现有 repo 架构与 `brand/colors.md`)

---

## 0.0 · 与现有 repo 的关系(v2 新增)

读完 repo 后的关键对齐:

- **`/portfolio/` 保留不动**——它是"按类别筛选作品的目录页"(filter chips + masonry 18 格 + lightbox)。
- **本文档描述的是一个新页面 `/portfolio/spaces/`**——空间花艺的编辑型深度页,承担档案 / 专业背书角色。
- 两者关系:`/portfolio/` 是**目录**,`/portfolio/spaces/` 是**专题**。目录让客户快速筛到自己的场景,专题让 Corporate / 高端客户看到真功夫。
- 首页联动(见 §1.4):About 段内嵌链接指向本页;首页 Portfolio Grid 6 格里留 2 格给空间作品 + 一个 "View Spaces Archive →" 出口。
- 同一批图可以**部分复用**到 `/portfolio/` 的 Corporate / Celebrations / New Beginnings / Everyday 滤镜下,但封面图要避开 `/portfolio/spaces/` 的 Feature 三联那三张,否则目录感稀释专题感。

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

每张图一条 alt,格式:

```
Mira Fleur space work — [场景类别], [主色调/情绪]
```

**例:**
- `Mira Fleur space work — hotel lobby installation, warm autumn palette`
- `Mira Fleur space work — banquet tablescape, muted ivory and green`

**不要**:写酒店名 / 客户名(保护客户 + 避免商业感)。

---

## 5 · 文案稿(可直接复制)

### 5.1 Hero(§2[A])

```
EN:  Spaces
ZH:  空间

EN:  Florals made for rooms that remember them.
ZH:  为会记住它们的空间而做的花。
```

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

### 5.3 底部 CTA(§2[E])

```
Have a space in mind?
对空间项目有想法?

→ Corporate · 企业花艺
→ Get in touch · 写信给我们
```

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

## 9.5 · ⚠️ 图片权属红线(必读)

**本 `/portfolio/spaces/` 页的 30 张图都是 Mira 花艺师本人过往作品,权属清晰,可直接用。**

但关于你在对话里提到的另一件事——**"分类作品页 (`/portfolio/` filter-grid) 想去找一些'我们能做的'别人的图抠图放上去"——这件事强烈建议不要做。** 原因:

1. **版权风险**:用他人摄影作品(含抠图后的)做商业营销素材,即便只是"示意我们能做这种风格",在美国属于侵权。最坏情况是 DMCA takedown + 赔偿。OC/洛杉矶圈子不大,婚礼/活动摄影师之间会互相认出对方的图。
2. **品牌杀伤**:`/portfolio/` 现有文案是 "Every piece below was designed for a specific person, occasion, or space. None of them have been repeated." 如果后面这句话对应的图不是你做的,**一次被扒出就彻底塌房**——对"华丽但克制"这种靠信任撑起来的品牌是致命的。
3. **客户心里明白**:高端客户(尤其 OC 华人妈妈圈)大概率认得出网图,Pinterest 一搜就露馅,反而掉信任。

**替代方案(排序:从最稳到最灵活):**

- ✅ **先只放真作品**:30 张空间图 + 白底花束图,真实拥有什么上什么。`/portfolio/` 初期条目可以少(比如 12 格而非 18 格),**空间和真实比数量重要**。
- ✅ **"Styled Inspiration"分区明确标注**:若一定要用非自己作品的图做风格参考,单独开一个分区(如 "Inspiration · 灵感",不在 Portfolio 里),每张图加 photographer/source credit + "Not by Mira Fleur — a reference for style conversations"。这种透明坦诚反而加分,但**不能算作 portfolio**。
- ✅ **委托 2–3 场免费/成本价的样片拍摄**:找 1–2 个真实客户(朋友家的 dinner party / 一次小型 celebration),自己出花材,换来专业摄影权。一周内能补齐 Celebrations / New Beginnings / Everyday 三个分类各 3 张真实作品。这条路线最值得投入。
- ✅ **用 AI 生成图,但标注清楚**:`MIDJOURNEY_PROMPTS.md` 已经在 repo 里,说明 AI 图是品牌已在使用的素材。但 **AI 图只放在 Heritage 段 / Classical 段那种"氛围图"位置,绝不进 Portfolio**(Portfolio 是"我们做过"的承诺,AI 图违反这个承诺)。

**底线:`/portfolio/` 里的每一张都必须是 Mira 真实做过的。** 如果某个 Occasion 分类暂时没有真实作品,**宁可让那个分类空着**(或 filter chip 暂时隐藏),也不要填假的。

本文档会把这条记入品牌铁律。

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
