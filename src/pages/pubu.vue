<template>
  <div>
    <ul>
      <li v-for="(item, index) in mvList" :key="index">
        <el-image :src="item"></el-image>
      </li>
    </ul>
  </div>
</template>
<script>
// import request from '../utils/request'
export default {
  data() {
    return {
      mvList: [],
    }
  },
  methods: {
    // getList() {
    //   request(
    //     'https://movie.douban.com/j/chart/top_list?type=11&interval_id=100%3A90&action=&start=0&limit=100',
    //     'get'
    //   ).then((res) => {
    //     console.log(res)
    //     this.mvList = res.data.map((v) => v.cover_url)
    //     console.log(this.mvList)
    //   })
    // },
    // 生成随机整数
    random(){
      return Math.random()
    }
  },
  mounted() {
    // this.getList()
  },
}
</script>
<style lang="scss" scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
