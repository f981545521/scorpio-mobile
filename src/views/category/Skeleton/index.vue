<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2020-03-11 22:06:34
 * @Description: 分类页面骨架屏
 * @FilePath: /ddBuy-dev/src/views/category/Skeleton/index.vue
 * @Quote :https://danilowoz.com/create-content-loader/            
 -->
<template>
  <div id="skeleton">
    <content-loader
            :height="836"
            :speed="2"
            :width="414"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
    >
      <rect height="24" rx="5" ry="5" width="400" x="7" y="17"/>
      <rect height="790" rx="0" ry="0" width="102" x="11" y="55"/>
      <rect height="30" rx="0" ry="0" width="0" x="75" y="555"/>
      <rect height="70" rx="0" ry="0" width="260" x="140" y="58"/>
      <rect height="70" rx="0" ry="0" width="260" x="140" y="157"/>
      <rect height="70" rx="0" ry="0" width="260" x="140" y="258"/>
      <rect height="70" rx="0" ry="0" width="260" x="140" y="356"/>
      <rect height="70" rx="0" ry="0" width="260" x="140" y="456"/>
      <rect height="70" rx="0" ry="0" width="260" x="140" y="556"/>
      <rect height="70" rx="0" ry="0" width="260" x="140" y="654"/>
      <rect height="70" rx="0" ry="0" width="260" x="140" y="757"/>
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
