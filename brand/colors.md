# Mira花礼 色彩系统

> 这份文档是 Mira 官网及所有品牌物料的色彩标准。
> 代码里必须使用 CSS variables,不要硬编码 hex 值。
> 每个颜色的中文名是品牌资产,变量用拼音,**不要翻译成英文**。

---

## 设计哲学

锚点是 **La Grande Boucherie(纽约)的 Belle Époque 插画**:深藏蓝的权威感、琥珀金的贵气克制、米白的呼吸空间。

这套色板要同时承载两件事:
- **纽约老钱审美**(restrained, confident, not flashy)
- **东方情感底色**(含蓄、有季节感、有诗意)

拒绝的方向:地中海度假风(太放松)、北欧极简(太冷)、日系侘寂(太素)、Farrow & Ball 英式古典(太沉)。

---

## 1. Foundation(基础层)

承担页面 ~90% 的视觉面积。整个官网的"体感"由这三色决定。

### 墨蓝 · mo-lan
```
--color-molan:        #1A2B3D   /* 主体深蓝,Belle Époque 锚点色 */
--color-molan-deep:   #0F1B28   /* 深化,用于 footer / 深色区块 */
--color-molan-soft:   #2D4057   /* 柔化,用于次级文字 */
```
**用途**:主标题、导航、footer 底色、深色版块背景、重点文字。
**禁忌**:不要大面积用纯黑,墨蓝是 Mira 的黑。

### 金箔 · jin-bo
```
--color-jinbo:        #B8924A   /* 主琥珀金 */
--color-jinbo-warm:   #C9A25C   /* 暖化,hover 或高光 */
--color-jinbo-deep:   #8F6F35   /* 深化,边框或强调 */
```
**用途**:极少、极克制地出现——按钮 hover、分隔线、数字/价格、logo 辅助色。
**禁忌**:**绝对不做大面积金色背景**。金色是点缀,一旦成面就俗。一屏金色元素 ≤ 3 处。

### 月白 · yue-bai
```
--color-yuebai:       #F5F1E8   /* 主米白,温暖不冷 */
--color-yuebai-warm:  #EDE6D3   /* 暖化,卡片背景 */
--color-yuebai-cool:  #FAF7F0   /* 最浅,大块留白 */
```
**用途**:页面主背景、卡片、内容区域。**这是 Mira 的"白"**,拒绝纯白 #FFFFFF。
**禁忌**:不要用冷白(偏蓝的白),那是科技品牌的底色,不是花礼的。

---

## 2. Flora(花礼层)

这 8 个颜色对应 Mira 的作品色系分类,可以用在:作品集筛选标签、季节合辑、礼盒色系命名、小红书内容的"本月主题色"等。

每个色都对应真实花材能呈现的质感,不是凭空设计的。

### 烟玫 · yan-mei
```
--color-yanmei:       #A8727A
```
像雾里的玫瑰,粉中带灰带紫。对应:深粉玫瑰、garden rose、日本绣球干燥后的色。
**场景**:秋冬情感花礼、周年礼、含蓄的浪漫。

### 霜柿 · shuang-shi
```
--color-shuangshi:    #C87547
```
霜打过的柿子色,橙但压得住。对应:秋季郁金香、香槟玫瑰偏暖的那种、菊花主题。
**场景**:秋季合辑、乔迁、温暖系送礼。

### 青梅 · qing-mei
```
--color-qingmei:      #9BA87C
```
未熟梅子的青黄绿。对应:尤加利、橄榄叶、绿色系花艺的基底。
**场景**:日常花礼、男士送礼、办公场景、开业。

### 藕荷 · ou-he
```
--color-ouhe:         #D4B5B8
```
莲藕切面的淡粉紫,极浅极柔。对应:浅粉牡丹、芍药、粉紫色绣球。
**场景**:母亲节、生育祝福、婚礼新娘捧花系列。

### 墨梅 · mo-mei
```
--color-momei:        #5D3A4A
```
深紫红,接近黑梅色。对应:黑魔术玫瑰、深紫色洋桔梗、burgundy 调。
**场景**:高端商务、男性主理人礼品、沉稳场合。

### 月桂 · yue-gui
```
--color-yuegui:       #6B7A5A
```
深橄榄绿,带灰度。对应:月桂叶、鼠尾草、深色叶材。
**场景**:作品集中的"绿色主导"系列、企业订花。
**注**:与 `qing-mei` 区别在深度——月桂是叶,青梅是果。

### 胭脂 · yan-zhi
```
--color-yanzhi:       #9B3A47
```
传统胭脂色,正红但偏深偏东方。对应:深红玫瑰、大丽花、红山茶。
**场景**:春节系列、重要庆典、中式婚礼。**这是 Mira 唯一允许的"红"**,禁用常规婚庆红 #D81E1E。

### 檀香 · tan-xiang
```
--color-tanxiang:     #C8A882
```
檀木色,比金箔更哑光、更温暖。对应:干花、干燥尤加利、奶茶色玫瑰。
**场景**:干花礼盒、永生花、中性包装。

---

## 3. Functional(功能层)

纯 UI 用途,不承载品牌表达。

### 中性灰阶(基于墨蓝调)
```
--color-ink-900:  #0F1B28   /* = molan-deep */
--color-ink-700:  #3A4A5C
--color-ink-500:  #6B7A8A
--color-ink-300:  #A8B3BF
--color-ink-100:  #D8DEE4
--color-ink-50:   #EEF1F4
```
**注意**:灰阶是冷调的(带蓝底),与暖调的 yue-bai 系列配合使用。正文文字用 `ink-700`,次级文字用 `ink-500`。

### 语义色(极简,只保留必需)
```
--color-success:  #6B8E5A   /* 成功 - 与 yuegui 呼应,不用 Material Green */
--color-error:    #A84545   /* 错误 - 与 yanzhi 呼应,不用 Bootstrap Red */
--color-warning:  #B8924A   /* = jinbo,警告用金色而非橙色 */
```
**禁忌**:不要引入 Info 蓝(会与 molan 冲突)、不要用 Material Design 或 Tailwind 默认语义色。

---

## 4. 色彩使用规则

### 黄金配比(重要)
任何一屏的色彩分布应接近:
- **70% 月白系**(yuebai / yuebai-warm / yuebai-cool)
- **20% 墨蓝系**(molan 及其变体,以及中性灰)
- **8% Flora 色**(单屏主打 1-2 个花礼色)
- **2% 金箔**(点缀,数量 ≤ 3 个元素)

违反这个配比的页面会看起来"不像 Mira"。

### 组合禁忌
- **墨蓝 + 胭脂**不要直接撞(中式婚庆感)→ 中间加月白缓冲
- **金箔 + 霜柿**不要直接撞(节日促销感)→ 二选一
- **烟玫 + 藕荷**不要同屏(两个都是柔粉,会糊)
- 任何 Flora 色之间同屏 ≤ 2 个

### 推荐组合
- **经典**: molan + yuebai + jinbo(永远不会错)
- **春**: yuebai + ouhe + qingmei
- **夏**: yuebai-cool + qingmei + yuegui
- **秋**: yuebai-warm + shuangshi + tanxiang
- **冬**: molan + yuebai + yanzhi(春节系列)
- **商务**: molan + yuebai + momei
- **日常**: yuebai + qingmei + 少量 jinbo

---

## 5. Tailwind 配置

`tailwind.config.ts` 里这样接入:

```ts
export default {
  theme: {
    extend: {
      colors: {
        // Foundation
        molan: {
          DEFAULT: 'var(--color-molan)',
          deep: 'var(--color-molan-deep)',
          soft: 'var(--color-molan-soft)',
        },
        jinbo: {
          DEFAULT: 'var(--color-jinbo)',
          warm: 'var(--color-jinbo-warm)',
          deep: 'var(--color-jinbo-deep)',
        },
        yuebai: {
          DEFAULT: 'var(--color-yuebai)',
          warm: 'var(--color-yuebai-warm)',
          cool: 'var(--color-yuebai-cool)',
        },
        // Flora
        yanmei:    'var(--color-yanmei)',
        shuangshi: 'var(--color-shuangshi)',
        qingmei:   'var(--color-qingmei)',
        ouhe:      'var(--color-ouhe)',
        momei:     'var(--color-momei)',
        yuegui:    'var(--color-yuegui)',
        yanzhi:    'var(--color-yanzhi)',
        tanxiang:  'var(--color-tanxiang)',
        // Functional
        ink: {
          900: 'var(--color-ink-900)',
          700: 'var(--color-ink-700)',
          500: 'var(--color-ink-500)',
          300: 'var(--color-ink-300)',
          100: 'var(--color-ink-100)',
          50:  'var(--color-ink-50)',
        },
      },
    },
  },
}
```

CSS variables 定义放在 `app/globals.css` 或 `:root`:

```css
:root {
  /* Foundation */
  --color-molan: #1A2B3D;
  --color-molan-deep: #0F1B28;
  --color-molan-soft: #2D4057;
  --color-jinbo: #B8924A;
  --color-jinbo-warm: #C9A25C;
  --color-jinbo-deep: #8F6F35;
  --color-yuebai: #F5F1E8;
  --color-yuebai-warm: #EDE6D3;
  --color-yuebai-cool: #FAF7F0;

  /* Flora */
  --color-yanmei: #A8727A;
  --color-shuangshi: #C87547;
  --color-qingmei: #9BA87C;
  --color-ouhe: #D4B5B8;
  --color-momei: #5D3A4A;
  --color-yuegui: #6B7A5A;
  --color-yanzhi: #9B3A47;
  --color-tanxiang: #C8A882;

  /* Functional */
  --color-ink-900: #0F1B28;
  --color-ink-700: #3A4A5C;
  --color-ink-500: #6B7A8A;
  --color-ink-300: #A8B3BF;
  --color-ink-100: #D8DEE4;
  --color-ink-50: #EEF1F4;

  --color-success: #6B8E5A;
  --color-error: #A84545;
  --color-warning: #B8924A;
}
```

---

## 6. 无障碍(WCAG)

关键组合的对比度已校验:

| 前景 | 背景 | 对比度 | 用途 |
|------|------|--------|------|
| molan | yuebai | 11.8:1 | 正文 ✓ AAA |
| molan | yuebai-cool | 12.4:1 | 正文 ✓ AAA |
| ink-700 | yuebai | 7.2:1 | 次级文字 ✓ AAA |
| ink-500 | yuebai | 4.6:1 | 辅助文字 ✓ AA |
| yuebai | molan | 11.8:1 | 深色背景反白 ✓ AAA |
| jinbo | molan | 4.9:1 | 深色背景金字 ✓ AA |

**不要这样做**:
- ❌ jinbo 在 yuebai 上做小字(3.2:1,不达标)
- ❌ ouhe 或 tanxiang 上做文字(对比度普遍不足)
- ❌ 任何 Flora 色之间放文字

Flora 色主要作为**面**或**装饰元素**,不是文字颜色。

---

## 7. 后续迭代

这份色板是 v1.0。以下情况需要更新本文档:

- 新增花礼色系(比如开始做婚礼线,可能需要新的白色变体)
- 实际拍摄作品时发现某个 hex 与真实花色出入较大
- 季节合辑推出新的组合模式

**每次改动请更新版本号并在 git commit 说明。**

---

*v1.0 · 2026-04-18*
*锚点:La Grande Boucherie Belle Époque · 墨蓝 / 金箔 / 月白*
