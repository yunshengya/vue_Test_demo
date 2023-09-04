<template>
  <div :id="uid"></div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  data () {
    return {
      uid: ''
    }
  },
  created () {
    this.uid = Math.random().toString(16).slice(2);
  },
  methods: {
    color16 () {//十六进制颜色随机    
      return '#' + Math.random().toString(16).substr(2, 6)
    },
    randomNum(){
      return (Math.random()*100).toFixed(0)
    }
  },
  mounted () {
    var chartDom = document.getElementById(this.uid)
    var myChart = echarts.init(chartDom, 'dark')
    let option = {
      title: {
        text: '折线图1',
        /*textVerticalAlign:'center'*/
        left: 'center',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
      series: [
        {
          data: [this.randomNum(), this.randomNum(), this.randomNum(), this.randomNum(), this.randomNum(), this.randomNum(), this.randomNum()],
          type: 'line',
          smooth: true,
          backgroundStyle: {
            color: 'rgba(19, 44, 56,0.8)',
          },
          symbol: 'circle', // 几何圆
          symbolSize: 6,
          areaStyle: { // 区域填充样式
            color: { // 填充的颜色 // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: this.color16(), // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: this.color16() // 100% 处的颜色
                }
              ],
              global: false, // 缺省为 false
            }
          },
          itemStyle: {
            normal: {
              borderType: 'solid',
              color: 'rgba(19, 253, 137,1)',
              borderColor: 'rgba(19, 253, 137,0.2)',
              shadowColor: 'rgba(19, 253, 137,0.6)',
              shadowBlur: 2,
              barBorderRadius: 2,
              label: {
                show: true, //开启显示数值
                position: 'top', //数值在上方显示
                textStyle: {
                  //数值样式
                  color: '#D1DBFF', //字体颜色
                  fontSize: 14, //字体大小
                },
              },
            },
          },
          barWidth: '20%',
          barGap: '10%',
        },
      ],
      grid: {
        left: 'auto',
        // right: 'auto',
        containLabel: true,
        bottom: 20,
      }
    }

    option && myChart.setOption(option)
  },
}
</script>
<style lang="scss" scoped>
div {
  color: red;
  width: 280px;
  height: 280px;
}
</style>
