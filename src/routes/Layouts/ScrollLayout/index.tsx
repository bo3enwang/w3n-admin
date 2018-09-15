import React, { Component } from "react";
import FixHeightCard from "components/FixHeightCard";

export class ScrollLayout extends Component {
  componentDidMount = () => {
    const elHeight = document.getElementById("content")!.clientHeight as number;
    console.log(elHeight);
  };
  render() {
    return (
      <FixHeightCard title="滚动布局检测">
        <p>
          《空心人》
          <br />
          by艾略特
          <br />
          <br />
          库尔兹先生——他死了 ①<br />
          给老盖伊一便士吧 ②<br />
          <br />1<br />
          <br />
          我们是空心人
          <br />
          我们是填充着草的人
          <br />
          倚靠在一起
          <br />
          脑壳中装满了稻草。唉！
          <br />
          我们干巴的嗓音，当
          <br />
          我们在一块儿飒飒低语
          <br />
          寂静，又毫无意义
          <br />
          好似干草地上的风
          <br />
          或我们干燥的地窖中
          <br />
          耗子踩在碎玻璃上的步履
          <br />
          <br />
          呈形却没有形式，呈影却没有颜色，
          <br />
          麻痹的力量，打着手势却毫无动作；
          <br />
          <br />
          那些穿越而过
          <br />
          目光笔直的人，抵达了死亡的另一王国
          <br />
          记住我们——万一可能——不是那迷途的
          <br />
          暴虐的灵魂，而仅仅是
          <br />
          空心人
          <br />
          填充着草的人。
          <br />
          <br />2<br />
          眼睛，我不敢在梦中相遇
          <br />
          在死亡的梦幻国土
          <br />
          它们不会显现：
          <br />
          那儿，眼睛是
          <br />
          映照在折柱上的阳光
          <br />
          那儿，是一棵摇曳的树
          <br />
          嗓音
          <br />
          在风的歌唱里
          <br />
          更远更肃穆
          <br />
          相比于一颗在消逝的星。
          <br />
          <br />
          让我不要更接近
          <br />
          在死亡的梦幻国土
          <br />
          让我也穿上
          <br />
          如此审慎精心的伪装
          <br />
          耗子外套，乌鸦皮，十字棍杖
          <br />
          在一片田野中
          <br />
          举止如同风的举动
          <br />
          不要更接近——
          <br />
          <br />
          不是那最后的相聚
          <br />
          在黄昏的国土里
          <br />
          <br />3<br />
          这是死亡的土地
          <br />
          这是仙人掌的土地
          <br />
          石头偶象在这儿
          <br />
          被升起，在这里它们接受
          <br />
          一只死人手的恳请
          <br />
          在一颗渐逝的星子的光芒里。
          <br />
          <br />
          它就象这样
          <br />
          在死亡的另一王国
          <br />
          独自苏醒
          <br />
          而那一刻我们正
          <br />
          怀着脆弱之心在颤栗
          <br />
          嘴唇它将会亲吻
          <br />
          写给碎石的祈祷文
          <br />
          <br />4<br />
          眼睛不在这里
          <br />
          这里没有眼睛
          <br />
          在这个垂死之星的峡谷中
          <br />
          在这个空洞的峡谷中
          <br />
          这片我们丧失之国的破颚骨 ③<br />
          <br />
          在这最后的相遇之地
          <br />
          我们一道暗中摸索
          <br />
          回避交谈
          <br />
          在这条涨水的河畔被集中汇聚
          <br />
          <br />
          一无所见，除非是
          <br />
          眼睛再现
          <br />
          如同永恒之星
          <br />
          重瓣的玫瑰
          <br />
          来自死亡的黄昏之国
          <br />
          空心人仅有
          <br />
          的希望。
          <br />
          <br />5<br />
          这儿我们绕过霸王树 ④<br />
          霸王树霸王树
          <br />
          这儿我们绕过霸王树
          <br />
          在凌晨五点
          <br />
          <br />
          在观念
          <br />
          和事实之间
          <br />
          在动作
          <br />
          和行动之间
          <br />
          落下帷幕
          <br />
          因为天国是你的所有
          <br />
          <br />
          在概念
          <br />
          和创造之间
          <br />
          在情感
          <br />
          和反应之间
          <br />
          落下帷幕
          <br />
          <br />
          生命如此漫长
          <br />
          在渴望
          <br />
          和痉挛之间
          <br />
          在潜能
          <br />
          和存在之间
          <br />
          在本质
          <br />
          和下降之间
          <br />
          落下帷幕
          <br />
          因为天国是你的所有
          <br />
          <br />
          因为你的所有是
          <br />
          生命是
          <br />
          因为你的所有是这
          <br />
          <br />
          这就是世界结束的方式
          <br />
          这就是世界结束的方式
          <br />
          这就是世界结束的方式
          <br />
          并非一声巨响，而是一阵呜咽。
          <br />
          <br />
          <br />
          注释：
          <br />
          ①，库尔兹：康拉德小说《黑暗的心脏》的主人公。该句是小说中的一句引文。
          <br />
          ②，盖伊：指英国国会爆炸案的主角盖伊。福克斯。这里指英国的盖伊。福克斯节。
          <br />
          ③，破颚骨：broken jaw，双关词，也指连绵起伏的峡谷隘口。
          <br />
          ④，霸王树：一种仙人掌科植物，果实似梨
        </p>
      </FixHeightCard>
    );
  }
}

export default ScrollLayout;
