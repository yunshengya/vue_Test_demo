<template>
  <div class="screen-root">
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="screen" class="screen">
      <div id="main0" style="width: 600px; height: 400px"></div>
      <div id="main1" style="width: 600px; height: 400px"></div>
      <div id="main2" style="width: 600px; height: 400px"></div>
      <div id="main3" style="width: 600px; height: 400px"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  mounted () {
    // 初始化自适应  ----在刚显示的时候就开始适配一次
    this.handleScreenAuto()
    // 绑定自适应函数   ---防止浏览器栏变化后不再适配
    window.onresize = () => this.handleScreenAuto()
    // 基于准备好的dom，初始化echarts实例
    // for (let i in 5) {
    this.onCanvas('main0')
    this.onCanvas('main1')
    this.onCanvas('main2')
    this.onCanvas('main3')
    //   console.log(i)
    // }
  },
  methods: {
    onCanvas (id) {
      var myChart = echarts.init(document.getElementById(id))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      })
    },
    // 数据大屏自适应函数
    handleScreenAuto () {
      const el = document.querySelector('#screen')
      // * 需保持的比例
      const baseWidth = 1920,
        baseHeight = 1080
      const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5))
      // * 当前屏幕宽高比
      const currentRate = parseFloat(
        (window.innerWidth / window.innerHeight).toFixed(5)
      )
      // 根据屏幕的变化适配的比例
      const scale = {
        widthRatio: 1,
        heightRatio: 1,
      }
      // 宽高比大，宽度过长
      if (currentRate > baseProportion) {
        // 求出维持比例需要的宽度，进行计算得出宽度对应比例
        scale.widthRatio = parseFloat(
          ((window.innerHeight * baseProportion) / baseWidth).toFixed(5)
        )
        // 得出高度对应比例
        scale.heightRatio = parseFloat(
          (window.innerHeight / baseHeight).toFixed(5)
        )
      }
      // 宽高比小，高度过长
      else {
        // 求出维持比例需要的高度，进行计算得出高度对应比例
        scale.heightRatio = parseFloat(
          (window.innerWidth / baseProportion / baseHeight).toFixed(5)
        )
        // 得出宽度比例
        scale.widthRatio = parseFloat(
          (window.innerWidth / baseWidth).toFixed(5)
        )
      }
      el.style.transform = `scale(${scale.widthRatio}, ${scale.heightRatio})`
    },
  },
}
</script>
<style lang="scss" scoped>
.screen-root {
  width: 100%;
  height: 100%;
  #screen {
    display: inline-block;
    width: 1920px; //设计稿的宽度
    height: 1080px; //设计稿的高度
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
  }
}
</style>
