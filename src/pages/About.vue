<template>
  <div class="recom">
    <div class="item" v-for="item in singerList" :key="item.id">
      <img :src="item.picUrl" alt="" />
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>
<script>
import request from '../utils/request'
export default {
  data() {
    return {
      singerList: [
        {
          name: 'ABOUT',
          picUrl:
            'https://img2.woyaogexing.com/2023/04/05/b89a53452312a7e2b902511abd26c6e0.jpeg',
        },
      ],
    }
  },
  methods: {
    get() {
      request('/personalized?limit=10').then((res) => {
        this.singerList = res.data.result
      })
    },
  },
  mounted() {
    // this.get()
    navigator.getBattery().then(function (battery) {
      // 获取设备电量剩余百分比
      var level = battery.level //最大值为1,对应电量100%
      console.log('Level: ' + level * 100 + '%')

      // 获取设备充电状态
      var charging = battery.charging
      console.log('充电状态: ' + charging)

      // 获取设备完全充电需要的时间
      var chargingTime = battery.chargingTime
      console.log('完全充电需要的时间: ' + chargingTime)

      // 获取设备完全放电需要的时间
      var dischargingTime = battery.dischargingTime
      console.log('完全放电需要的时间: ' + dischargingTime)
    })
  },
}
</script>
<style lang="scss" scoped>
.recom {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  .item {
    width: 20%;
    flex: 0 0 1;
    img {
      width: 160px;
      height: 160px;
      border-radius: 16px;
    }
  }
}
</style>
