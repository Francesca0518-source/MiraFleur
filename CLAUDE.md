# Mira花礼 官网项目

> 这份文档是给所有在此项目中工作的 Claude 实例(Chat / Cowork / Code)的共享上下文。
> 开始任何任务之前,请先完整读一遍。

---

## 1. 品牌一句话

**Mira花礼 是一个以"东方情感 × 纽约审美 × 南加州生活"为底色的花艺礼赠品牌,面向美国 Chinese-speaking 与 English-speaking 双语客群。**

核心不是"卖花",是**culturally rooted gifting ritual**——帮客户把难以言说的情感,托付给一束得体的花。

---

## 2. 审美准则(最重要,违反会被拒绝)

### 要做到的
- **华丽但克制**:允许精致、允许高级感,但拒绝浮夸、拒绝饱和度炸裂
- **情感优先于功能**:文案与视觉先传递情绪,再交代信息
- **留白是贵气的一部分**:界面不要挤,版式呼吸感比"信息密度"重要
- **中英双语都要站得住**:中文要有诗意克制感,英文要像纽约独立精品店的语气,不要翻译腔
- **New York 审美锚点**:参考 La Grande Boucherie 的 Belle Époque 质感——深藏蓝、琥珀金、米白

### 绝对避免
- **通用 AI 味**:渐变紫、玻璃拟态、"Get Started" 大按钮、Unsplash 泛用图
- **Canva 感**:居中大标题 + 对称两栏 + emoji bullet
- **Shopify 模板脸**:通用英雄区 + 三栏 feature + CTA + footer 八件套
- **过度可爱**:Mira 不是文艺青年花店,不要手写体、不要卡通插画
- **饱和度陷阱**:婚庆红、圣诞绿、情人节粉——这是低端市场的信号

---

## 3. 色彩系统

完整色板见 `brand/colors.md`。原则:

- 每个颜色都有**中文诗意命名**(如 烟玫 / 霜柿),这是品牌资产,代码里 CSS variable 和 Tailwind config 必须用拼音命名(如 `--color-yanmei`),**不要翻译成英文**
- 主色板围绕 **深藏蓝 / 琥珀金 / 米白** 三色锚点展开
- 强调色用得极少,一个页面通常 ≤ 1 个强调色

---

## 4. 文案语言规则

详细见 `brand/voice.md`。快速参考:

### 中文
- 避免:"致敬"、"匠心"、"献给每一个"这类被用烂的词
- 倾向:简洁、留白、偶尔克制的文学性(如"写给三月的一封花")
- 用词上,**花礼 > 花艺 > 花作**(有过专门讨论,见 voice.md)

### 英文
- 避免:"Elevate your"、"Premium"、"Curated"、"Artisan"——这些词在美国独立品牌里已经贬值
- 倾向:具体的感官动词、诗性但不造作、能让非华人也感受到东方情感的英文表达
- 不要直译中文,要用英文母语者会真的写出来的句子

---

## 5. 目标用户

- **主客群 A**:洛杉矶/橙县/Irvine 一带的 Chinese-speaking 中产家庭,自用与送礼并重,对"有文化厚度的花"有付费意愿
- **主客群 B**:通过 Google / Yelp / The Knot 搜到的 English-speaking 本地客户(非华人占一部分),看重 aesthetic 和 reliability
- **价格带**:中高端,不参与 $45 超市花 的竞争

官网要让**两类人都能找到自己**,但中文内容不是英文的翻译,是各自独立的叙事。

---

## 6. 技术栈与约束

> 以下由项目实际情况填入,请根据你们定下来的栈修改:

- **框架**: _[e.g. Next.js 14 App Router / Astro]_
- **样式**: Tailwind CSS + CSS variables(颜色必须用 variable,不要硬编码 hex)
- **字体**: _[e.g. 英文 Editorial New / 中文 思源宋体 或 霞鹜文楷]_——字体加载要优化,首屏不能字体闪烁
- **图片**: Next/Image 或等价方案,花艺图都要 WebP + 多尺寸
- **部署**: _[e.g. Vercel]_
- **分析**: _[e.g. Plausible / GA4]_

### 性能底线
- Lighthouse Performance ≥ 90(移动端)
- LCP < 2.5s
- 花艺图是品牌核心资产,宁可多花时间做 responsive images,不要糊

### 响应式
- **移动端优先**:小红书导流来的用户几乎全在手机上
- 桌面端是体验增强,不是主战场

---

## 7. 信息架构(MVP)

第一版官网需要的页面:

1. **首页** — 品牌叙事 + 精选作品 + CTA(咨询/预订)
2. **作品集 / Gallery** — 按场景或色彩系列组织,不是按价格
3. **服务与定价** — 分层(日常花礼 / 定制 / 活动/企业),consultative 口吻
4. **关于 Mira** — 创始人叙事 + 阿姨的工艺传承,这是差异化护城河
5. **预订/咨询** — 表单 + WhatsApp / 微信 / Email 多渠道
6. **Blog / Journal**(可选,第二版)— 承接 SEO 与品牌叙事

### 不要做的
- 不要做 e-commerce SKU 列表(花是 consultative sale,不是货架)
- 不要做"加入购物车"
- 首页不要放 testimonial carousel(低端信号)

---

## 8. SEO 与可发现性

详细见 `brand/seo.md`(如已创建)。要点:

- 这是 **Service Area Business**,Google Business Profile 已是策略一部分
- 核心地理关键词:Newport Coast / Irvine / Orange County / Los Angeles florist
- 中文端通过小红书导流,官网主要承接 English organic 流量
- Schema.org: LocalBusiness + Florist

---

## 9. 工作分工(Chat / Cowork / Code)

这份 CLAUDE.md 是三者共享的上下文,但各自职责不同:

- **Chat**(claude.ai):策略、文案打磨、品牌决策讨论。产出会沉淀到 `brand/` 文件夹
- **Cowork**:素材整理(花艺作品图批量处理、竞品调研汇总)、SEO 内容撰写、文档生成
- **Code**:实际代码实现。写任何组件前,必须先读 `brand/` 下的规范

**跨实例协作规则**:重要决策不要只停留在对话里,要落成 markdown 文件放进 `brand/` 或 `docs/`,否则下一个 Claude 实例看不到。

---

## 10. 参考资料索引

项目内:
- `brand/voice.md` — 文案语言细则
- `brand/colors.md` — 完整色板与命名
- `brand/design-principles.md` — 视觉设计准则
- `brand/references.md` — 视觉参考(Belle Époque、Ling's Moment 分析等)
- `brand/seo.md` — SEO 策略

外部锚点:
- **视觉参考**: La Grande Boucherie NYC 的 Belle Époque 插画(深藏蓝/琥珀金/米白)
- **商业模式参考(部分可取)**: Ling's Moment——其色板系统作为内容框架的做法值得借鉴,但审美不是 Mira 的方向
- **要避开的模板**: Shopify 默认花店模板、Wix 婚庆模板、所有带"Bloom"的通用花店站

---

## 11. 创始人的工作方式(给 AI 的提醒)

- 创始人 Francesca 是**直觉驱动、决策明确**的类型。不要给她 open-ended 的选项列表;她更希望你基于她已经有方向的想法,做深化、验证、落地
- 她的判断通常已经成型,她找 Claude 是要**把模糊的直觉操作化**,不是要"头脑风暴五个方向"
- 遇到重要决策,直接给 recommendation + 理由,而不是"这取决于你想要什么"
- 她的中英文切换非常自然,不要刻意"翻译",该用哪种语言用哪种

---

*最后更新: 2026-04-25(本次重大更新:服务范围收窄、hero slogan 定稿为"把难以言说的情感,托付给一束得体的花"、彻底删除"atelier / 工作室 / By appointment / Newport Coast 起源"等门店暗示、明确 SMS-only 沟通口径、inquire 表单加入 brief 引导字段。完整决策与禁用词清单见 `brand/services-scope.md`)*
*这份文档会随项目演进。每次有重大品牌/技术决策,更新这里并在 git commit 里说明。*
