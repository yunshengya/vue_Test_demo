<template>
  <div id="num">
    <span v-for="(item, index) in show" :key="index">
      <div v-for="(n, i) in 19" :key="i" :style="{
          transform:
            item >= 5
              ? `translateY(${(item - 9) * 100}%)`
              : `translateY(-${(item + 9) * 100}%)`,
        }">{{ Math.abs(9 - i) }}</div>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: 0,
    },
  },
  data () {
    return {
      show: [],
    }
  },
  methods: {
    sleep (time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    },
    async step () {
      // if (this.num !=this.value) {
      //   this.show =String(this.num).split('')
      //   await this.sleep(300)
      //   this.timer = requestAnimationFrame(this.step)
      // } else if(this.num===this.value) {
      //   cancelAnimationFrame(this.timer)
      // }
      this.valueA.forEach((v, i) => {
        if (this.show[i] < v) {
          this.show[i]++
        } else if (this.show[i] > v) {
          this.show[i]--
        }
      })
      await this.sleep(800)
      this.timer = requestAnimationFrame(this.step)
      if (
        this.valueA.every((v, i) => {
          return v === this.show[i]
        })
      ) {
        cancelAnimationFrame(this.timer)
      }
    },
  },
  watch: {
    value (newquestion, oldquestion) {
      this.show = []
      for (let i = 0; i < String(this.value).length; i++) {
        this.show.push(0)
      }
      this.valueA = String(this.value).split('')
      this.step()
    },
  },
  mounted () {
    this.show = []
    for (let i = 0; i < String(this.value).length; i++) {
      this.show.push(0)
    }
    this.valueA = String(this.value).split('')
    this.step()
  },
  unmounted () {
    cancelAnimationFrame(this.timer)
  },
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#num {
  color: #ff0015;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    text-align: center;
    height: 40px;
    margin: 0 6px;
    background: #5c9ce48d;

    div {
      height: 100%;
      transition: all 0.5s ease-out;
      font-size: 28px;
      padding: 0 8px;
    }
  }
}
</style>
