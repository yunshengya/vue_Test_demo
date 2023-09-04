<template>
  <div class="card">
    {{title}}
  </div>
</template>
<script>
export default {
  props:{
    title:{
    type:String,
    default:''
    }
  }
}
</script>
<style lang="scss" scoped>
  .card {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #11ebd7;

    background: linear-gradient(
        270deg,
        rgba(39, 247, 237, 0) 0%,
        rgba(17, 235, 215, 0.16) 49%,
        rgba(17, 235, 215, 0.01) 82%,
        rgba(17, 235, 215, 0) 100%
    );
    border-radius: 0px 0px 13px 13px;
}
</style>