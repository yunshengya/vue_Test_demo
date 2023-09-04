<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item v-for="item in pathList" :key="item.path" :index="item.path"
        >{{ item['name'] }}
      </el-menu-item>
    </el-menu>
    <!-- <meter
      v-if="value <= 100"
      min="0"
      max="100"
      low="25"
      high="75"
      optimum="80"
      :value="value"
    ></meter> -->
    <router-view />
    <!-- <img
      src="https://img2.woyaogexing.com/2023/05/05/1601bcb82e9858e21149cf64086a21db.jpg"
      alt="Workplace"
      usemap="#workmap"
      width="400"
      height="379"
    />
    <map name="workmap">
      <area
        shape="rect"
        coords="34,44,270,350"
        alt="Computer"
        href="http://www.baidu.com"
      />
      <area
        shape="rect"
        coords="290,172,333,250"
        alt="Phone"
        href="https://juejin.cn/"
      />
      <area
        shape="circle"
        coords="337,300,44"
        alt="Cup of coffee"
        href="https://www.nowcoder.com/"
      />
    </map> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      value: 0,
      pathList: [
        { name: '首页', path: '/' },
        { name: 'a', path: '/a' },
        { name: 'echarts', path: '/echarts' },
        { name: 'draw', path: '/draw' },
        { name: 'about', path: '/about' }
      ],
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.value += 30
    }, 300)
  },
  mounted() {
    setTimeout(() => {
      clearInterval(this.timer)
      this.value = 101
    }, 1000)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.$router.push({
        path: key,
      })
    },
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
