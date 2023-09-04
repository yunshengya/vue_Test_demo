<template>
  <div class="bg">
    <div id="line" style="height: 500px"></div>
    <!-- <div id="drag"></div> -->
  </div>
</template>
<script>
import * as echarts from 'echarts'
import { useCounterStore } from '../stores/counter'
export default {
  data () {
    return {
    counterStore : useCounterStore()  
    }
  },
  methods: {
    darwLine () {
      let chartDom = document.getElementById('line')
      let myChart = echarts.init(chartDom)
      let option = {
        textStyle: {
          color: '#58B8FF',
        },
        tooltip: {
          trigger: 'axis',
          show:false,
          axisPointer: {
            z: 1,
            lineStyle: {
              color: '#58B8FF',
              type: 'dashed',
            },
          },
        },
        title: {
          text: '月销售额',
          textStyle: {
            //主标题文本设置
            color: '#000', //颜色
            fontSize: 20, //大小
            // fontStyle: 'oblique', //斜体
            fontWeight: '400', //粗体
            // fontFamily: 'monospace', //字体
            // textBorderColor: '#000', //描边
            // textBorderWidth: '1', //描边的宽度
            // textShadowColor: '#fff', //阴影颜色
            // textShadowBlur: '2', //阴影的宽度
            // textShadowOffsetX: '0', //阴影向X偏移
            // textShadowOffsetY: '0', //阴影向Y偏移
          },
          itemGap: 10,
          padding: [0, 0],
          x: 'center',
          y: 'top',
        },
        xAxis: {
          data: [],
          name: '日期',
          nameGap:10,
          type: 'category',
          axisTick: {
            inside: true,
            alignWithLabel:false
          },
          nameTextStyle: {
            fontSize: 16,
          },
          axisLine: {
            lineStyle: {
              color: '#58B8FF',
              width: 2,
            },
          },
        },
        yAxis: {
          nameGap: 30,
          type: 'value',
          nameTextStyle: {
            fontSize: 16,
          },
          name: '总销售额(元)',
        },
        axisTick: {
          inside: true,
        },
        legend: {
          type: 'scroll',
          orient: 'horizontal', //可设定图例水平（horizontal）排列还是竖直排列
          x: 'center', //可设定图例在左、右、居中
          y: 'bottom', //可设定图例在上、下、居中
          padding: [30, 50, 0, 0], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
        },
        grid: {
          top: '10%',
          left: '5%',
          right: '8%',
          containLabel: true,
        },
        series: [
          {
            name: '2022年',
            data: [],
            symbol: 'none',
            type: 'bar',
            barGap:0
          },
          {
            name: '2023年',
            data: [],
            symbol: 'none',
            type: 'bar',
            barGap:0
          },
        ],
      }
      let i = 1
      while (i <= 12) {
        option.xAxis.data.push(i + '月')
        option.series[0].data.push([i + '月', (Math.random()* 100).toFixed(0)])
          option.series[1].data.push([i + '月',(Math.random()* 100).toFixed(0)])
        i++
      }
      // option.series[0].data[8] = ['9月', 0]
      // option.series[0].data[7] = ['8月', 0]
      // console.log(option)
      option && myChart.setOption(option)
      window.onresize = myChart.resize
      // console.log([] == ![],JSON.stringify([1,[2]])  === JSON.stringify([1,[2]]) )
    },
    move () {
      const box = document.getElementById('line')
      let isDown = false
      let mouse = {}
      box.onmousedown = (e) => {
        isDown = true
        box.style.cursor = 'move'
        box.style.position = 'absolute'
        mouse = {
          startX: e.clientX,
          startY: e.clientY,
          offsetLeft: box.offsetLeft,
          offsetTop: box.offsetTop,
        }
        console.log(mouse)
      }
      box.onmousemove = (e) => {
        if (!isDown) {
          return
        }

        //计算偏移位置
        let offsetLeft = mouse.offsetLeft + e.clientX - mouse.startX
        let offsetTop = mouse.offsetTop + e.clientY - mouse.startY

        //设置偏移距离的范围[0,window.innerWidth - 400]
        offsetLeft = Math.max(0, Math.min(offsetLeft, window.innerWidth))
        offsetTop = Math.max(0, Math.min(offsetTop, window.innerHeight))

        box.style.left = offsetLeft + 'px';
        box.style.top = offsetTop + 'px';

      }
      //当鼠标滑的太快时，容易移出box，所以在window上监听此事件
      box.onmouseup = () => {
        isDown = false
        box.style.cursor = 'default'
        mouse = null
      }
    }
  },
  mounted () {
    const counterStore  = useCounterStore()
    counterStore.$patch((state)=>{
      // count:counterStore++ 
      // name:'name'
      state.count = 10
      state.name = 'an'
    })
    counterStore.$subscribe((mutations,state)=>{
      console.log(mutations,state)
    })
    console.log(counterStore.count,counterStore.name)
    this.darwLine()
    // this.move()
  },
}
</script>
<style lang="scss" scoped>
#line {
  margin-top: 100px;
  width:100%;
  box-sizing: border-box;
}
.bg {
  position: relative;
}
#drag {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background-color: #333;
}
</style>
