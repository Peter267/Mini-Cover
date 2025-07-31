const fonts = [
    [import.meta.env.VITE_APP_FONT_FAMILY, '默认全局'],
    ['Microsoft YaHei', '微软雅黑'],
    // [字体名称, 显示名称, CSS文件地址]
    ['HarmonyOS_Regular', '鸿蒙字体', 'https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css'],
    ['yozai', '悠哉字体', 'https://chinese-fonts-cdn.deno.dev/packages/yozai/dist/Yozai-Regular/result.css'],
    ['寒蝉全圆体', '寒蝉全圆体', 'https://chinese-fonts-cdn.deno.dev/packages/hcqyt/dist/ChillRoundFRegular/result.css'],
    ['Douyin Sans', '抖音美好体', 'https://chinese-fonts-cdn.deno.dev/packages/dymh/dist/DouyinSansBold/result.css'],
    ['MaokenZhuyuanTi', '猫啃珠圆体', 'https://chinese-fonts-cdn.deno.dev/packages/mkzyt/dist/猫啃珠圆体/result.css'],
    ['LXGW WenKai', '霞鹜文楷', 'https://fontsapi.zeoseven.com/292/main/result.css'],
    ['LXGW WenKai Screen', '霞鹜文楷屏幕阅读版', 'https://chinese-fonts-cdn.deno.dev/packages/lywkpmydb/dist/LXGWWenKaiScreen/result.css'],
    ['LXGW WenKai Mono Screen', '霞鹜文楷屏幕阅读版 - 窄', 'https://fontsapi.zeoseven.com/292/main/result.css'],
    ['STDongGuanTi', '上图东观体', 'https://fontsapi.zeoseven.com/488/main/result.css'],
    ['Maple Mono NF CN', 'Maple Mono NF-CN', 'https://fontsapi.zeoseven.com/442/main/result.css'],
    ['NanoOldSong-A', '纳米老宋', 'https://fontsapi.zeoseven.com/467/main/result.css']
];

export const defaultConfig = {
    text: 'Peter267',       // 默认文本
    watermark: '', // 默认水印
    fontFamily: import.meta.env.VITE_APP_FONT_FAMILY,
    fontStyles: fonts.map(f => f[2]).filter(Boolean),
    fontOptions: fonts.map(([value, label]) => ({ value, label }))
};