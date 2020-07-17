<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2020-03-11 22:06:13
 * @Description: 首页骨架屏
 * @FilePath: /ddBuy-dev/src/views/home/components/Skeleton/index.vue
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
      <rect height="20" rx="5" ry="5" width="100" x="6" y="18"/>
      <rect height="110" rx="0" ry="0" width="384" x="11" y="54"/>
      <rect height="125" rx="0" ry="0" width="400" x="7" y="176"/>
      <rect height="0" rx="0" ry="0" width="24" x="320" y="235"/>
      <rect height="20" rx="0" ry="0" width="274" x="123" y="17"/>
      <circle cx="36" cy="329" r="15"/>
      <rect height="5" rx="0" ry="0" width="51" x="13" y="352"/>
      <circle cx="124" cy="329" r="15"/>
      <rect height="5" rx="0" ry="0" width="51" x="101" y="352"/>
      <circle cx="211" cy="329" r="15"/>
      <rect height="5" rx="0" ry="0" width="51" x="184" y="352"/>
      <circle cx="289" cy="329" r="15"/>
      <rect height="5" rx="0" ry="0" width="51" x="263" y="352"/>
      <circle cx="371" cy="329" r="15"/>
      <rect height="5" rx="0" ry="0" width="51" x="345" y="352"/>
      <circle cx="37" cy="394" r="15"/>
      <rect height="5" rx="0" ry="0" width="51" x="11" y="423"/>
      <circle cx="126" cy="394" r="15"/>
      <rect height="5" rx="0" ry="0" width="51" x="101" y="423"/>
      <circle cx="213" cy="394" r="15"/>
      <rect height="0" rx="0" ry="0" width="52" x="195" y="424"/>
      <rect height="5" rx="0" ry="0" width="51" x="187" y="423"/>
      <circle cx="288" cy="394" r="15"/>
      <rect height="5" rx="0" ry="0" width="51" x="263" y="423"/>
      <circle cx="371" cy="394" r="15"/>
      <rect height="5" rx="0" ry="0" width="51" x="347" y="423"/>
      <rect height="18" rx="0" ry="0" width="100" x="13" y="449"/>
      <rect height="18" rx="0" ry="0" width="380" x="13" y="480"/>
      <rect height="80" rx="0" ry="0" width="80" x="16" y="513"/>
      <rect height="80" rx="0" ry="0" width="80" x="153" y="514"/>
      <rect height="80" rx="0" ry="0" width="80" x="287" y="514"/>
      <rect height="9" rx="0" ry="0" width="11" x="181" y="545"/>
      <rect height="5" rx="0" ry="0" width="100" x="59" y="805"/>
      <rect height="18" rx="0" ry="0" width="100" x="10" y="621"/>
      <rect height="76" rx="0" ry="0" width="357" x="13" y="655"/>
      <rect height="60" rx="0" ry="0" width="103" x="56" y="737"/>
      <rect height="60" rx="0" ry="0" width="103" x="224" y="737"/>
      <rect height="5" rx="0" ry="0" width="100" x="59" y="816"/>
      <rect height="5" rx="0" ry="0" width="100" x="59" y="827"/>
      <rect height="5" rx="0" ry="0" width="100" x="225" y="807"/>
      <rect height="5" rx="0" ry="0" width="100" x="227" y="818"/>
      <rect height="5" rx="0" ry="0" width="100" x="227" y="827"/>
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
