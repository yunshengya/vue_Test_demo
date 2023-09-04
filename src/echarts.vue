<template>
  <div class="screen-root">
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="screen" class="screen">
      <div class="head">
        <div class="head_title">eCharts 示例图</div>
      </div>
      <div class="content">
        <div class="left">
          <div class="left_1">
            <div id="left_1"></div>
          </div>
          <div class="left_2">
            <div id="left_2"></div>
          </div>
          <div class="left_3">
            <div id="left_3"></div>
          </div>
        </div>
        <div class="center">
          <div class="jiao">
            <div class="jiao_1"></div>
            <div class="jiao_2"></div>
            <div class="jiao_3"></div>
            <div class="jiao_4"></div>
          </div>
          <div class="center_top">
            <div class="center_top-left">
              <div class="center_top-left-title">可滚动列表</div>
              <div class="center_top-left-header">
                <p>排名</p>
                <p>数据</p>
              </div>
              <div class="row" v-for="(item, index) in toShowRows" :key="index">
                <div class="order-div">{{ rows.indexOf(item) }}</div>
                <div class="item-div">{{ '可滚动数据' }}</div>
                <div class="message-div">{{ randNum() }}</div>
              </div>
            </div>
            <div class="center_top-center">
              <div class="dance">
                <p style="color: white">跳动数字</p>
                <dance-number :value="num" />
              </div>
              <self-map :opts="mapOpts" :geo-json="mapJson" />
            </div>
            <div class="center_top-right">
              <div class="zhexian"><zhexian /></div>
              <div class="zhexian"><zhexian /></div>
            </div>
          </div>
          <div class="center_bottom">
            <div class="center_bottom-left">
              <div class="center_bottom-left_1">
                <card-title title="环状图" />
                <huan-zhuang />
              </div>
              <div class="center_bottom-left_2">
                <card-title title="环状图" />
                <huan-zhuang />
              </div>
              <div class="center_bottom-left_3">
                <card-title title="环状图" />
                <huan-zhuang />
              </div>
            </div>
            <div class="center_bottom-right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import map from './components/map.vue'
import { mapOpts } from './components/IndexMap'
import mapJson from './assets/330000.geo.json'
import danceNumber from './components/danceNumber.vue'
import zhexian from './components/zhexian.vue'
import huanZhuangCharts from './components/huanZhuangCharts.vue'
import cardTitle from './components/cardTitle.vue'
export default {
  components: {
    selfMap: map,
    danceNumber: danceNumber,
    zhexian: zhexian,
    huanZhuang: huanZhuangCharts,
    cardTitle: cardTitle,
  },
  data() {
    return {
      message: 'Hello Vue!',
      mapOpts: mapOpts,
      mapJson: mapJson,
      num: 0,
      rows: [
        'skyblue',
        'orange',
        'black',
        'red',
        'green',
        'blue',
        'yellow',
        '#bfa',
        'purple',
        '#bce',
      ],
      toShowRows: [
        'skyblue',
        'orange',
        'black',
        'red',
        'green',
        'blue',
        'yellow',
        '#bfa',
        'purple',
        '#bce',
      ],
      record: 0,
    }
  },
  deleted() {
    window.onresize = null
  },
  mounted() {
    // 初始化自适应  ----在刚显示的时候就开始适配一次
    this.handleScreenAuto()
    // 绑定自适应函数   ---防止浏览器栏变化后不再适配
    window.onresize = () => this.handleScreenAuto()
    this.draw()
    this.randNumChange()
  },
  methods: {
    randNum() {
      return (Math.random() * 1000).toFixed(2)
    },
    randNumChange() {
      this.timer = setInterval(() => {
        this.num = (Math.random() * 1000).toFixed(2)
      }, 3000)
    },
    // 数据大屏自适应函数
    handleScreenAuto() {
      const designDraftWidth = 1920 // 设计稿的宽度
      const designDraftHeight = 1080 // 设计稿的高度
      // 根据屏幕的变化适配的比例
      const scale =
        document.documentElement.clientWidth /
          document.documentElement.clientHeight <
        designDraftWidth / designDraftHeight
          ? document.documentElement.clientWidth / designDraftWidth
          : document.documentElement.clientHeight / designDraftHeight
      // 缩放比例
      document.querySelector(
        '#screen'
      ).style.transform = `scale(${scale}) translate(-50%)`
    },
    // ----
    draw() {
      this.drawLeft_1()
      this.drawLeft_2()
      this.drawLeft_3()
      this.drawTop_1()
    },
    // -------
    drawLeft_1() {
      let myChart = echarts.init(document.getElementById('left_1'), 'dark', {
        width: 350,
        height: 330,
      })
      let option = {
        title: {
          text: '柱状图1',
          /*textVerticalAlign:'center'*/
          left: 'center',
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: { show: false },
        },
        dataZoom: [
          {
            type: 'inside',
          },
        ],
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(19, 44, 56,0.8)',
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
      }
      option && myChart.setOption(option)
    },
    drawLeft_2() {
      // 数据源
      var data = [
        { name: 'A', value: 10 },
        { name: 'B', value: 20 },
        { name: 'C', value: 30 },
        { name: 'D', value: 30 },
        { name: 'E', value: 40 },
        { name: 'F', value: 50 },
        { name: 'G', value: 46 },
        { name: 'H', value: 56 },
        { name: 'I', value: 47 },
        { name: 'J', value: 21 },
      ]

      // 初始化echarts实例
      var myChart = echarts.init(document.getElementById('left_2'), 'dark', {
        width: 350,
        height: 350,
      })

      // 配置项
      var option = {
        title: {
          text: '柱状图1',
          /*textVerticalAlign:'center'*/
          left: 'center',
          textStyle: {
            color: 'red',
            fontStyle: 'normal',
            textBorderColor: 'yellow',
            width: 300,
            textShadowColor: '#8c8c8c', //阴影颜色
            textShadowBlur: '20', //阴影的宽度
            textShadowOffsetX: '0', //阴影向X偏移
            textShadowOffsetY: '0', //阴影向Y偏移
          },
          // backgroundColor: 'linear - gradient(270deg, rgba(39, 247, 237, 0) 0 %, rgba(17, 235, 215, .16) 49 %, rgba(17, 235, 215, .01) 82 %, rgba(17, 235, 215, 0) 100 %)'
        },
        xAxis: {
          type: 'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            // 隐藏标签
            show: false,
          },
          splitLine: { show: false },
          // axisLabel: {
          //   interval: 0,
          //   rotate: 30
          // }
        },
        yAxis: {
          data: [],
          type: 'category',
          // boundaryGap: false,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: '#eee',
            },
          },
        },
        series: [
          {
            type: 'bar',
            // showBackground: true,
            backgroundStyle: {
              color: 'rgba(19, 44, 56,0.8)',
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
                  position: 'right', //数值在上方显示
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
            data: [],
          },
        ],
        legend: {
          show: true,
        },
      }

      // 设置初始数据
      var currentIndex = 0
      var dataLen = data.length
      var startIndex = 0
      var endIndex = startIndex + 5

      option.yAxis.data = data
        .slice(startIndex, endIndex)
        .map((item) => item.name)
      option.series[0].data = data
        .slice(startIndex, endIndex)
        .map((item) => item.value)

      // 渲染图表
      myChart.setOption(option)

      // 自动轮播
      setInterval(function () {
        // 更新数据
        currentIndex = (currentIndex + 1) % dataLen
        startIndex = currentIndex
        endIndex = startIndex + 5
        if (endIndex > 10) {
          option.yAxis.data = data
            .slice(startIndex, endIndex)
            .map((item) => item.name)
            .concat(data.slice(0, endIndex - 10).map((item) => item.name))
          option.series[0].data = data
            .slice(startIndex, endIndex)
            .map((item) => item.value)
            .concat(data.slice(0, endIndex - 10).map((item) => item.value))
        } else {
          option.yAxis.data = data
            .slice(startIndex, endIndex)
            .map((item) => item.name)
          option.series[0].data = data
            .slice(startIndex, endIndex)
            .map((item) => item.value)
        }
        myChart.setOption(option)
      }, 3000)
    },
    drawLeft_3() {
      let myChart = echarts.init(document.getElementById('left_3'), 'dark', {
        width: 350,
        height: 300,
      })
      let option = {
        title: {
          text: '柱状图1',
          /*textVerticalAlign:'center'*/
          left: 'center',
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: { show: false },
        },
        dataZoom: [
          {
            type: 'inside',
          },
        ],
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(19, 44, 56,0.8)',
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
      }
      option && myChart.setOption(option)
    },
    drawTop_1() {
      setInterval(() => {
        if (this.toShowRows.length < this.rows.length) {
          this.toShowRows.push(this.rows[this.record++])
        } else {
          this.toShowRows.shift()
          if (this.record == this.rows.length) {
            this.record = 0
          }
          this.toShowRows.push(this.rows[this.record++])
        }
      }, 3000)
    },
  },
}
</script>
<style lang="scss" scoped>
@import './app.scss';
</style>
