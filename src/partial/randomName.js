// fork from https://github.com/JJYing/Fake-Chinese-Name-for-Sketch/blob/master/Fake-Chinese-Name.sketchplugin/Contents/Sketch/script.cocoascrip

export default function () {
  const humanNameFirst = ["李", "王", "张", "刘", "陈", "杨", "赵", "黄", "周", "吴", "徐", "孙", "胡", "朱", "高", "林", "何", "郭", "马", "罗", "梁", "宋", "郑", "谢", "韩", "唐", "冯", "于", "董", "萧", "程", "曹", "袁", "邓", "许", "傅", "沈", "曾", "彭", "吕", "苏", "卢", "蒋", "蔡", "贾", "丁", "魏", "薛", "叶", "阎", "余", "潘", "杜", "戴", "夏", "锺", "汪", "田", "任", "姜", "范", "方", "石", "姚", "谭", "廖", "邹", "熊", "金", "陆", "郝", "孔", "白", "崔", "康", "毛", "邱", "秦", "江", "史", "顾", "侯", "邵", "孟", "龙", "万", "段", "雷", "钱", "汤", "尹", "黎", "易", "常", "武", "乔", "贺", "赖", "龚", "文"];

  const humanNameDoubleForThree = ["静静", "婷婷", "园园", "明明", "冰冰", "莎莎", "乐乐", "晶晶", "诗诗", "倩倩", "菲菲"];

  const humanNameSecondForTwo = ["伟", "强", "华", "志", "建", "立", "超", "荣", "文", "达", "敏", "江", "晖", "刚", "雷", "磊", "春", "夏", "哲", "东", "冬", "楠", "昊", "宇", "慧", "瑶", "翔", "星", "燕", "迪", "钰", "俊", "怡", "雪", "佳", "杰", "芮", "可", "涵", "熙", "裕"];

  const humanNameSecondForThree = ["小", "明", "国", "万", "梓", "浩", "晓", "德", "力", "世", "秀", "春", "子", "天", "金", "江", "泽", "玉", "紫", "亦", "家", "文", "达", "光", "梦", "永", "成", "婷", "洪", "俊", "恒", "恩", "雅", "轩", "若", "欣", "怡", "一", "常"];

  const humanNameThirdForThree = ["平", "芳", "华", "云", "海", "宣", "盛", "强", "梅", "志", "慧", "博", "敏", "春", "夏", "杰", "宇", "翔", "北", "秋", "东", "新", "瑶", "豪", "星", "燕", "铭", "奇", "康", "鑫", "凯", "雨", "栋", "梁", "瑞", "龙", "宜", "彤", "芮", "逸", "扬", "林"];

  const twoOrThree = Math.random();

  var randomName = '';

  if (twoOrThree > 0.97) {
    var a = Math.floor(Math.pow(Math.random(), 3) * humanNameFirst.length + 1) - 1;
    var b = Math.floor(Math.pow(Math.random(), 1.1) * humanNameDoubleForThree.length + 1) - 1;
    randomName = humanNameFirst[a] + humanNameDoubleForThree[b];
  }
  else if (twoOrThree > 0.6) {
    var m = Math.floor(Math.pow(Math.random(), 3) * humanNameFirst.length + 1) - 1;
    var n = Math.floor(Math.pow(Math.random(), 1.5) * humanNameSecondForTwo.length + 1) - 1;
    randomName = humanNameFirst[m] + humanNameSecondForTwo[n];
  }
  else {
    var x = Math.floor(Math.pow(Math.random(), 3) * humanNameFirst.length + 1) - 1;
    var y = Math.floor(Math.pow(Math.random(), 1.5) * humanNameSecondForThree.length + 1) - 1;
    var z = Math.floor(Math.pow(Math.random(), 1.5) * humanNameThirdForThree.length + 1) - 1;
    randomName = humanNameFirst[x] + humanNameSecondForThree[y] + humanNameThirdForThree[z];
  }
  return randomName;
};
