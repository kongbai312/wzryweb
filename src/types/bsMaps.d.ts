// 全BS地图数据类型定义
export type MapsJsonType = {
    name : string
    value: string[];  // 地图选择数组，存储每个模式下的地图
}

// 总抽取地图类型定义
export type MapsType = {
    text: string;
    value: string;
    map: string[];  // 地图选择数组，存储每个模式下的地图
}