<template>
  <div class="book p3d">
    <!-- 右半本 -->
    <div class="back-cover p3d">
      <div class="page back flip"></div>
      <div class="page front p3d">
        <div class="shadow"></div>
        <div class="card"></div>
      </div>
    </div>
    <!-- 左半本 -->
    <div class="front-cover p3d">
      <div class="page front flip p3d">
        <p>
     首先是一本书，用class="book"的容器装全部,里面分右半本书和左半本书——分别用class="back-cover"、class="front-cover"的div容器表示。右半本书分内壳和外壳——class="page front"、class="page back",同理左半本书也分内壳和外壳，也分别用相同类名。右半本书中放卡片和阴影，分别用class="shadow"、class="card"的div装。而左半本书内壳放一些文字，为了方便，给一些盒子加上公共类名。
        </p>
      </div>
      <div class="page back"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    let book = document.querySelector('.book'),
      leftPage = document.querySelector('.front-cover'),
      card = document.querySelector('.card'),
      shadow = document.querySelector('.shadow')
    window.onmousemove = function (event) { }
    let hold = false
    //鼠标是按住的状态
    leftPage.onmousedown = function () {
      hold = true
    }
    window.addEventListener('mouseup', function () {
      //鼠标不一定在page身上松开可能在其他地方松开，所以在window身上设置监听事件
      hold = false
    })
    window.onmousemove = function (event) {
      if (hold) {
        console.log(event.pageX)
        var angle = clamp(
          ((window.innerWidth / 2 - event.pageX + 300) / 300) * -90,
          -180,
          0
        ) //300为书的宽度
        //该angle公式中的值不固定，可以设置其他
        // leftPage.style.transform='rotate('+angle+'deg)'
        leftPage.style.transform = `rotateY(${angle}deg)`
        card.style.transform = `rotateX(${angle / 2}deg)`
        shadow.style.transform = `skewX(${angle / 10}deg)`
        book.style.transform = `rotateX(${60 + angle / 8}deg)`
      }
    }
    let clamp=function(val,min,max) {
      return Math.max(min,Math.min(val,max))
    }
  },
}
</script>
<style lang="scss" scoped>
body {
  height: 100%;
  font: 100%/1.25 Arial, Helvetica, sans-serif; //字体类型
  color: #fff;
  perspective: 1000px; //必不可少！
  background: #444;
  background-image: linear-gradient(to bottom, #444, #999);
}
.book {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -150px;
}
.book .page {
  width: 300px;
  height: 300px;
  padding: 1em;
  position: absolute;
  left: 0;
  top: 0;
  text-indent: 2em;
}
.book .front {
  background-color: #ab866f;
}
.book .back {
  background-color: #fff;
}
.book .front-cover {
  cursor: move; //鼠标放上去呈十字架形状
  transform-origin: 0 50%;
  //transform:rotateY(-160deg) //可以利用这个看看旋转的效果
}
.p3d {
  transform-style: preserve-3d;
}
.book .front-cover .back {
  background-image: url("https://img2.woyaogexing.com/2023/04/05/b89a53452312a7e2b902511abd26c6e0.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateZ(3px);
}
.book .back-cover .back {
  transform: translateZ(-3px);
}
.book .flip {
  transform: rotateY(180deg);
}
.book .shadow,
.book .card {
  width: 196px;
  height: 132px;
  position: absolute;
  top: 60px;
  left: 60px;
  transform-origin: 0 100%; //设置旋转起点
}
.book .card {
  background: url("https://img2.woyaogexing.com/2023/04/05/b89a53452312a7e2b902511abd26c6e0.jpeg");
  background-size: cover;
}
.book .shadow {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
