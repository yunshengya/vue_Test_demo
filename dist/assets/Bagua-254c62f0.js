import{i as s}from"./index-74279f79.js";import{_ as d,c as r,o as c,d as h}from"./index-c3948595.js";const l={mounted(){this.handleScreenAuto(),window.onresize=()=>this.handleScreenAuto(),this.onCanvas("main0"),this.onCanvas("main1"),this.onCanvas("main2"),this.onCanvas("main3")},methods:{onCanvas(i){var e=s(document.getElementById(i));e.setOption({title:{text:"ECharts 入门示例"},tooltip:{},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20]}]})},handleScreenAuto(){const i=document.querySelector("#screen"),e=1920,a=1080,o=parseFloat((e/a).toFixed(5)),n=parseFloat((window.innerWidth/window.innerHeight).toFixed(5)),t={widthRatio:1,heightRatio:1};n>o?(t.widthRatio=parseFloat((window.innerHeight*o/e).toFixed(5)),t.heightRatio=parseFloat((window.innerHeight/a).toFixed(5))):(t.heightRatio=parseFloat((window.innerWidth/o/a).toFixed(5)),t.widthRatio=parseFloat((window.innerWidth/e).toFixed(5))),i.style.transform=`scale(${t.widthRatio}, ${t.heightRatio})`}}},p={class:"screen-root"},_=h('<div id="screen" class="screen" data-v-4bc5a9f3><div id="main0" style="width:600px;height:400px;" data-v-4bc5a9f3></div><div id="main1" style="width:600px;height:400px;" data-v-4bc5a9f3></div><div id="main2" style="width:600px;height:400px;" data-v-4bc5a9f3></div><div id="main3" style="width:600px;height:400px;" data-v-4bc5a9f3></div></div>',1),v=[_];function m(i,e,a,o,n,t){return c(),r("div",p,v)}const f=d(l,[["render",m],["__scopeId","data-v-4bc5a9f3"]]);export{f as default};