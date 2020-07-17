<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2020-03-11 22:06:51
 * @Description: 吃什么页面骨架屏
 * @FilePath: /ddBuy-dev/src/views/eat/Skeleton/index.vue
 * @Quote :https://danilowoz.com/create-content-loader/            
 -->

<template>
  <div id="skeleton">
    <content-loader
            :height="836"
            :speed="1"
            :width="414"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
    >
      <rect height="30" rx="2" ry="2" width="380" x="8" y="31"/>
      <rect height="100" rx="0" ry="0" width="150" x="31" y="76"/>
      <rect height="147" rx="0" ry="0" width="146" x="232" y="74"/>
      <rect height="152" rx="0" ry="0" width="161" x="25" y="233"/>
      <rect height="120" rx="0" ry="0" width="153" x="231" y="284"/>
      <rect height="110" rx="0" ry="0" width="165" x="26" y="453"/>
      <rect height="156" rx="0" ry="0" width="156" x="234" y="466"/>
      <rect height="118" rx="0" ry="0" width="150" x="29" y="628"/>
      <rect height="117" rx="0" ry="0" width="162" x="234" y="692"/>
      <rect height="8" rx="0" ry="0" width="141" x="35" y="183"/>
      <rect height="9" rx="0" ry="0" width="117" x="62" y="203"/>
      <circle cx="42" cy="209" r="15"/>
      <rect height="8" rx="0" ry="0" width="158" x="28" y="392"/>
      <rect height="11" rx="0" ry="0" width="116" x="63" y="415"/>
      <circle cx="40" cy="418" r="14"/>
      <rect height="9" rx="0" ry="0" width="161" x="28" y="573"/>
      <circle cx="40" cy="602" r="13"/>
      <rect height="9" rx="0" ry="0" width="118" x="65" y="599"/>
      <rect height="10" rx="0" ry="0" width="145" x="30" y="756"/>
      <circle cx="45" cy="786" r="14"/>
      <rect height="9" rx="0" ry="0" width="100" x="66" y="781"/>
      <rect height="11" rx="0" ry="0" width="141" x="237" y="230"/>
      <rect height="8" rx="0" ry="0" width="106" x="273" y="256"/>
      <circle cx="248" cy="258" r="14"/>
      <rect height="9" rx="0" ry="0" width="146" x="237" y="417"/>
      <rect height="7" rx="0" ry="0" width="115" x="269" y="437"/>
      <circle cx="244" cy="443" r="12"/>
      <rect height="8" rx="0" ry="0" width="154" x="237" y="635"/>
      <rect height="7" rx="0" ry="0" width="118" x="267" y="655"/>
      <circle cx="247" cy="658" r="11"/>
      <rect height="70" rx="0" ry="0" width="150" x="37" y="810"/>
    </content-loader>
  </div>
</template>

<script type="text/javascript">
  import {ContentLoader} from 'vue-content-loader'

  export default {
    mounted() {
    },
    data() {
      return {
        width: 414
      }
    },
    components: {
      ContentLoader
    },
    methods: {}
  }
</script>

<style lang="less" scoped></style>
