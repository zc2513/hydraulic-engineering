<template>
  <div>
    水利部水利工程建设电子招标投标监管系统
    <br>
    <router-link class="red" to="/user">用户页面</router-link>
    <div class="Page">
      <div id="myChartChina" :style="{width: '100%', height: '710px'}" />
      <div class="box_Tips">
        <p>提示：滚动鼠标滚轮控制地图缩放</p>
      </div>

    </div>
  </div>
</template>

<script>
import '../../static/js/china' // 引入中国地图数据
export default {
  name: 'Home',
  data() {
    return {
      ifbox: false,
      TipsList: []
    }
  },
  mounted() {
    this.ChinaMap()
  },
  methods: {
    ChinaMap() {
      const myChartChina = this.$echarts.init(document.getElementById('myChartChina')) // 这里是为了获得容器所在位置
      function randomData() {
        return Math.round(Math.random() * 500)
      }
      window.onresize = myChartChina.resize
      myChartChina.setOption({ // 进行相关配置
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: { // 字体颜色
                color: '#797979'
              }
            },
            emphasis: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              borderWidth: 1, // 地图边框宽度
              borderColor: '#014888', // 地图边框颜色
              areaColor: '#026295' // 地图颜色
            },
            emphasis: {// 选中省份的颜色
              areaColor: '#026295',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 0,
              borderWidth: 1,
              shadowColor: '#fff'
            }
          }
        },
        visualMap: {
          min: 0,
          max: 1500,
          right: 'right',
          top: 'bottom',
          text: ['高', '低'],
          inRange: {
            color: ['#e0ffff', '#006edd']
          },
          show: true
        },
        series: [{
          name: '',
          type: 'map',
          mapType: 'china',
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          showLegendSymbol: true,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { name: '北京', value: randomData() },
            { name: '天津', value: randomData() },
            { name: '上海', value: randomData() },
            { name: '重庆', value: randomData() },
            { name: '河北', value: randomData() },
            { name: '河南', value: randomData() },
            { name: '云南', value: randomData() },
            { name: '辽宁', value: randomData() },
            { name: '黑龙江', value: randomData() },
            { name: '湖南', value: randomData() },
            { name: '安徽', value: randomData() },
            { name: '山东', value: randomData() },
            { name: '新疆', value: randomData() },
            { name: '江苏', value: randomData() },
            { name: '浙江', value: randomData() },
            { name: '江西', value: randomData() },
            { name: '湖北', value: randomData() },
            { name: '广西', value: randomData() },
            { name: '甘肃', value: randomData() },
            { name: '山西', value: randomData() },
            { name: '内蒙古', value: randomData() },
            { name: '陕西', value: randomData() },
            { name: '吉林', value: randomData() },
            { name: '福建', value: randomData() },
            { name: '贵州', value: randomData() },
            { name: '广东', value: randomData() },
            { name: '青海', value: randomData() },
            { name: '西藏', value: randomData() },
            { name: '四川', value: randomData() },
            { name: '宁夏', value: randomData() },
            { name: '海南', value: randomData() },
            { name: '台湾', value: randomData() },
            { name: '香港', value: randomData() },
            { name: '澳门', value: randomData() }
          ]
        }]
      })
    }

  }

}
</script>

<style lang="scss" scoped>

</style>
