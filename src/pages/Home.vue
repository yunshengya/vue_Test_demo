<template>
  <div>
    <!-- <h1>SSE Demo</h1>
    <button @click="connectSSE()">建立 SSE 连接</button>
    <button @click="closeSSE()">断开 SSE 连接</button> <br />
    <br />
    <div id="message"></div>
        <input type="color" />
    <a href="tel:+12345678910">Call</a>
    <p contenteditable="true">
  这是一段可编辑的话
</p>
    <input v-model.number="number" />
<p>{{ tweened.toFixed(0) }}</p> -->

    <div id="container" style="height: 520px; width: 100%"></div>
  </div>
</template>
<script>
// import gsap from 'gsap'
import * as echarts from 'echarts'
import { useCounterStore } from '../stores/counter'
export default {
  data() {
    return {
      // number: 0,
      // tweened: 0
    }
  },
  watch: {
    //   number(n){
    //  gsap.to(this, { duration: 1, tweened: Number(n) || 0 })
    //   }
  },
  methods: {
    connectSSE(eventSource, messageElement) {
      eventSource = new EventSource('/events') // 监听消息事件
      eventSource.addEventListener('customEvent', (event) => {
        const data = JSON.parse(event.data)
        messageElement.innerHTML += `${data.id} --- ${data.time}` + '<br />'
      })
      eventSource.onopen = () => {
        messageElement.innerHTML += `SSE 连接成功，状态${eventSource.readyState}<br />`
      }
      eventSource.onerror = () => {
        messageElement.innerHTML += `SSE 连接错误，状态${eventSource.readyState}<br />`
      }
    },
    closeSSE(
      eventSource = this.eventSource,
      messageElement = this.messageElement
    ) {
      eventSource.close()
      messageElement.innerHTML += `SSE 连接关闭，状态${eventSource.readyState}<br />`
    },
  },
  mounted() {
    // this.messageElement = document.getElementById('message')
    // this.eventSource = new EventSource('/events') // 建立 SSE 连接
    // this.connectSSE(this.eventSource,this.messageElement)
    // let arr = [2,1,2,3,2,[4,5,[6,7]]]
    const counterStore  = useCounterStore()
    var dom = document.getElementById('container')
    var myChart = echarts.init(dom)
    var app = {}
    app.title = '堆叠条形图'
    let series = [
      {
        name: '直接访问',
        type: 'bar',
        stack: '总量',
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'inside',
        //   },
        // },
        emphasis: {
          focus: 'series',
        },
        data: [1, 20, 3, 30, 40],
      },
      {
        name: '邮件营销',
        type: 'bar',
        stack: '总量',
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'inside',
        //   },
        // },
        emphasis: {
          focus: 'series',
        },
        data: [99, 60, 97, 70, 60],
      },
      {
        name: '联盟广告',
        type: 'bar',
        stack: '总量',
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'inside',
        //   },
        // },
        emphasis: {
          focus: 'series',
        },
        data: [99, 80, 97, 70, 60],
      },
      {
        name: '视频广告',
        type: 'bar',
        stack: '总量',
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'inside',
        //   },
        // },
        emphasis: {
          focus: 'series',
        },
        data: [99, 10, 97, 70, 60],
      },
      {
        name: '搜索引擎',
        type: 'bar',
        stack: '总量',
        // label: {
        //   normal: {
        //     show: true,
        //     position: 'inside',
        //   },
        // },
        emphasis: {
          focus: 'series',
        },
        data: [99, 54, 97, 70, 60],
      },
    ]
    let dataArr = JSON.parse(JSON.stringify(series))
    let option = {
      // formatter: (params) => {
      //   //弹窗内容
      //   //弹窗里圆点的对应的样式，用模板字符串的方式
      //   if (typeof params !== 'object') return ''
      //   let dotColor =
      //     '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
      //     params[0].color +
      //     '"></span>'
      //   let dotColor2 =
      //     '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
      //     params[1].color +
      //     '"></span>'
      //   let dotColor3 =
      //     '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
      //     params[2].color +
      //     '"></span>'
      //   let dotColor4 =
      //     '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
      //     params[3].color +
      //     '"></span>'
      //   let dotColor5 = ''
      //   // '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
      //   // params[4].color +
      //   // '"></span>'
      //   //弹窗里的内容+样式
      //   return (
      //     '<span style="font-size:14px;font-weight: 600;color: #20253B">' +
      //     params[0].axisValue +
      //     '</span>' +
      //     '<br>' +
      //     dotColor +
      //     '<span style="color: #20253B">' +
      //     params[0].seriesName +
      //     '</span>' +
      //     '：' +
      //     params[0].data +
      //     '%' +
      //     ' ' +
      //     '<span style="color:' +
      //     params[0].color +
      //     '">' +
      //     dataArr[0]['data'][params[0].dataIndex] +
      //     '</span>' +
      //     '<br>' +
      //     dotColor2 +
      //     '<span style="color: #20253B">' +
      //     params[1].seriesName +
      //     '</span>' +
      //     '：' +
      //     params[1].data +
      //     '%' +
      //     ' ' +
      //     '<span style="color:' +
      //     params[1].color +
      //     '">' +
      //     dataArr[1]['data'][params[1].dataIndex] +
      //     '</span>' +
      //     '<br>' +
      //     dotColor3 +
      //     '<span style="color: #20253B">' +
      //     params[2].seriesName +
      //     '</span>' +
      //     '：' +
      //     params[2].data +
      //     '%' +
      //     ' ' +
      //     '<span style="color:' +
      //     params[2].color +
      //     '">' +
      //     dataArr[2]['data'][params[2].dataIndex] +
      //     '</span>' +
      //     '<br>' +
      //     dotColor4 +
      //     '<span style="color: #20253B">' +
      //     params[3].seriesName +
      //     '</span>' +
      //     '：' +
      //     params[3].data +
      //     '%' +
      //     ' ' +
      //     '<span style="color:' +
      //     params[3].color +
      //     '">' +
      //     dataArr[3]['data'][params[3].dataIndex] +
      //     '</span>' +
      //     '<br>' +
      //     dotColor5 +
      //     '<span style="color: #20253B">' +
      //     params[4].seriesName +
      //     '</span>' +
      //     '：' +
      //     params[4].data +
      //     '%' +
      //     ' ' +
      //     '<span style="color:' +
      //     params[4].color +
      //     '">' +
      //     dataArr[4]['data'][params[4].dataIndex] +
      //     '</span>' +
      //     '<br>'
      //   )
      // },
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
        x: 'center',
        y: 'top',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        orient: 'horizontal', //可设定图例水平（horizontal）排列还是竖直排列
        // type: 'scroll',
        x: 'center', //可设定图例在左、右、居中
        y: 'bottom',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        height: '800px',
        width: 500,
        height: 100,
      },
      color: ['#5CA4FC', '#7F5EF3', '#FBCF36', '#42D6CC', '#D9DCE4'],
      grid: {
        left: '3%',
        top: '20%',
        right: '3%',
        bottom: '12%',
        containLabel: true,
      },
      series: [
        {
          name: '直接访问',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: false,
              position: 'left',
            },
          },
          emphasis: {
            focus: 'series',
          },
          data: [1, 20, 3, 30, 40],
        },
        {
          name: '邮件营销',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: false,
              position: 'inside',
            },
          },
          emphasis: {
            focus: 'series',
          },
          data: [99, 60, 97, 70, 60],
        },
        {
          name: '联盟广告',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: false,
              position: 'inside',
            },
          },
          emphasis: {
            focus: 'series',
          },
          data: [99, 80, 97, 70, 60],
        },
        {
          name: '视频广告',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: false,
              position: 'inside',
            },
          },
          emphasis: {
            focus: 'series',
          },
          data: [99, 10, 97, 70, 60],
        },
        {
          name: '搜索引擎',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: false,
              position: 'inside',
            },
          },
          emphasis: {
            focus: 'series',
          },
          data: [99, 54, 97, 70, 60],
        },
      ],
      xAxis: {
        type: 'category',
        position: 'inside',
        data: ['周一', '周二', '周三', '周四', '周五'],
        axisLine: {
          //坐标轴轴线相关设置
          lineStyle: {
            color: '#e62f3d', //x轴线颜色设置
          },
        },
        axisTick: {
          //x轴刻度相关设置
          alignWithLabel: true,
        },
        axisLabel: {
          show: true,
        },
      },
      yAxis: {
        min: 0,
        max: 100,
        type: 'value',
        position: 'inside',
      },
    }
    let sumArr = []
    option.series = series
    option.series.forEach((v) => {
      // sumArr[i] += v[i]
      v.data.forEach((m, n) => {
        if (!sumArr[n]) sumArr[n] = 0
        sumArr[n] += m
      })
    })
    option.series.forEach((v, i) => {
      v.data.forEach((m, n) => {
        option.series[i].data[n] = ((m / sumArr[n]) * 100).toFixed(2)
      })
    })
    // option.formatter =  (params)=> {
    //   //弹窗内容
    //   //弹窗里圆点的对应的样式，用模板字符串的方式
    //   console.log(params)
    //   // if (typeof params !== 'object') return ''
    //   // let dotColor =
    //   //   '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
    //   //   params[0].color +
    //   //   '"></span>'
    //   // let dotColor2 =
    //   //   '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
    //   //   params[1].color +
    //   //   '"></span>'
    //   // let dotColor3 =
    //   //   '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
    //   //   params[2].color +
    //   //   '"></span>'
    //   // let dotColor4 =
    //   //   '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
    //   //   params[3].color +
    //   //   '"></span>'
    //   // let dotColor5 = ''
    //   // // '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
    //   // // params[4].color +
    //   // // '"></span>'
    //   // //弹窗里的内容+样式
    //   // return (
    //   //   '<span style="font-size:14px;font-weight: 600;color: #20253B">' +
    //   //   params[0].axisValue +
    //   //   '</span>' +
    //   //   '<br>' +
    //   //   dotColor +
    //   //   '<span style="color: #20253B">' +
    //   //   params[0].seriesName +
    //   //   '</span>' +
    //   //   '：' +
    //   //   params[0].data +
    //   //   '%' +
    //   //   ' ' +
    //   //   '<span style="color:' +
    //   //   params[0].color +
    //   //   '">' +
    //   //   dataArr[0]['data'][params[0].dataIndex] +
    //   //   '</span>' +
    //   //   '<br>' +
    //   //   dotColor2 +
    //   //   '<span style="color: #20253B">' +
    //   //   params[1].seriesName +
    //   //   '</span>' +
    //   //   '：' +
    //   //   params[1].data +
    //   //   '%' +
    //   //   ' ' +
    //   //   '<span style="color:' +
    //   //   params[1].color +
    //   //   '">' +
    //   //   dataArr[1]['data'][params[1].dataIndex] +
    //   //   '</span>' +
    //   //   '<br>' +
    //   //   dotColor3 +
    //   //   '<span style="color: #20253B">' +
    //   //   params[2].seriesName +
    //   //   '</span>' +
    //   //   '：' +
    //   //   params[2].data +
    //   //   '%' +
    //   //   ' ' +
    //   //   '<span style="color:' +
    //   //   params[2].color +
    //   //   '">' +
    //   //   dataArr[2]['data'][params[2].dataIndex] +
    //   //   '</span>' +
    //   //   '<br>' +
    //   //   dotColor4 +
    //   //   '<span style="color: #20253B">' +
    //   //   params[3].seriesName +
    //   //   '</span>' +
    //   //   '：' +
    //   //   params[3].data +
    //   //   '%' +
    //   //   ' ' +
    //   //   '<span style="color:' +
    //   //   params[3].color +
    //   //   '">' +
    //   //   dataArr[3]['data'][params[3].dataIndex] +
    //   //   '</span>' +
    //   //   '<br>' +
    //   //   dotColor5 +
    //   //   '<span style="color: #20253B">' +
    //   //   params[4].seriesName +
    //   //   '</span>' +
    //   //   '：' +
    //   //   params[4].data +
    //   //   '%' +
    //   //   ' ' +
    //   //   '<span style="color:' +
    //   //   params[4].color +
    //   //   '">' +
    //   //   dataArr[4]['data'][params[4].dataIndex] +
    //   //   '</span>' +
    //   //   '<br>'
    //   // )
    // }
    if (option && typeof option === 'object') {
      myChart.setOption(option, true)
    }
    window.onresize = myChart.resize
  },
}
</script>
<style lang="scss" scoped>
div {
  a {
    margin: 20px 30px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
