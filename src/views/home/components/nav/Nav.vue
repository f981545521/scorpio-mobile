<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-09 23:28:38
 * @Description: 首页->Nav组件
 * @FilePath: /ddBuy/src/views/home/components/nav/Nav.vue
 -->
<template>
    <div id="wrapper">
        <van-grid :border="false"
                  :column-num="5">
            <van-grid-item :icon="nav.icon_url"
                           :key="nav.cid"
                           :text="nav.name"
                           @click="gotoCategory(index)"
                           v-for="(nav,index) in nav_list"/>
        </van-grid>
    </div>
</template>

<script type="text/javascript">

    export default {
        props: {
            nav_list: Array
        },
        data() {
            return {}
        },
        components: {},
        methods: {
            gotoCategory(index) {
                this.$router.push({name: 'category', params: {currentIndex: index}})
            }
        }
    }
</script>

<style lang="less" scoped>
</style>

