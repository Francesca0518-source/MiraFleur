# Mira花礼 · Edit Inbox

> Francesca 的"想到就丢"清单。攒到一批再交给 Claude Code 一次性改完(免得每次单独 push 都重建 GitHub Pages)。

---

## 怎么写一条改动

**文字** → 引用 + 替换 + 哪一页(可选)
```
- /gifts/ "From $98 · Inquire to order" → "$120 起 · 询价定制"
- "Browse Signature Gifts" → "浏览花礼"
- 首页 hero 副标第二句改:"From Irvine, serving Newport Coast..." → "(新文案)"
```

**图片** → 哪一页 + 哪个位置 + 文件名(用 `?dev=1` hover 看到)
```
- /gifts/ 第 1 张 1697-Photoroom.JPG 换成 92aa2e... 
- 首页 Gifts 卡片图换 0deb50... → fa507396...
```

**色彩 / 排版** → 体感 + 位置
```
- 蜜桃太淡,加一档
- /events/ 标题再小一号
- corporate killer-box 圆角再小
```

**新内容 / 新章节** → 一段描述
```
- /gifts/ 加一段 FAQ "可以指定花材吗?"
- /weekly/ 三档下面加一行小字解释配送范围
```

---

## 怎么看到文件名 / 看到一句文案是哪个标签

**给任意页面 URL 加上 `?dev=1`** —— 全站启用 DEV MODE:
- 鼠标悬在**图片**上 → 浮出 filename + 路径 + alt
- 鼠标悬在**文字**上(有双语切换的)→ 浮出 EN / 中文 + 标签
- **Cmd+点图** → 自动复制 filename 到剪贴板

例:
- https://maisonmirafleur.com/gifts/?dev=1
- https://maisonmirafleur.com/corporate/?dev=1
- https://maisonmirafleur.com/?dev=1

左上角会有橙色 "🔧 DEV MODE" 提示徽标,只有你看得到。

---

## 待办清单(我往下加)

<!-- 加新的 edit 就在这下面写一行,Claude Code 会一次批量改 -->

### Round 1 · (date)

- [ ] 

---

## 已完成(供翻 history)

<!-- Claude Code 改完一批就把那批移到这下面 -->
