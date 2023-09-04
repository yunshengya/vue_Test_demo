<template>
  <div id="uid" class="echart"></div>
</template>
<script>
import * as echarts from "echarts";
import { EventBusUtils } from "../utils/eventBusUtils";
export default {
  props: {
    opts: {
      default: '',
      type: String
    },
    geoJson: {
      default: '',
      type: String
    }
  },
  mounted () {
    const div = document.getElementById('uid');
    let chartInstance = echarts.init(div, undefined, {
      renderer: "canvas",
    });
    EventBusUtils.addObserve("WindowResize", () => {
      chartInstance?.resize();
    });
    echarts.registerMap("ZheJiang", this.geoJson);
    chartInstance.setOption(this.opts);
    this.$nextTick(() => {
      chartInstance?.resize();
    });
  }
}
</script>
<style scoped>
.echart {
  width: 100%;
  height: 100%;
}
</style>