<template>
  <div :id="uid"></div>
</template>
<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {
      uid: '',
    }
  },
  created() {
    this.uid = Math.random().toString(16).slice(2)
  },
  mounted() {
    var chartDom = document.getElementById(this.uid)
    var myChart = echarts.init(chartDom)
    var option
    option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: 'middle',
        left: 'auto',
        orient: 'vertical',
          textStyle: { color: "#FFFDFE" },//字体颜色
               icon: "circle"//图例形状设
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['30%', '50%'],

          center: ['70%', '50%'],  
          avoidLabelOverlap: false,
          hoverAnimation: true,  
          label: {
            show: false,
            position: 'center',  
              normal:{
                show:false,
                position: 'outside',
                	formatter: '{b} : {c}次'
              }
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: true,

          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    }

    option && myChart.setOption(option)
  },
}
</script>
<style lang="scss" scoped>
div{
  width: 100%;
  height:260px;
}
  </style>
