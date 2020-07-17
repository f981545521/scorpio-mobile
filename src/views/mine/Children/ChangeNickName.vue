<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime: 2019-11-07 09:21:15
 * @Description: 我的->个人资料->修改昵称
 * @FilePath: /ddBuy/src/views/mine/Children/ChangeNickName.vue
 -->
<template>
    <div id="changeNickName">
        <van-nav-bar :border=false
                     :fixed=true
                     :right-text="$t('mine.confirm')"
                     :title="$t('mine.changeNickName')"
                     @click-left="onClickLeft"
                     @click-right="onClickSave"
                     left-arrow
                     style="height:2.5rem"/>
        <div style="margin-top:3rem">
            <van-cell-group :title="$t('mine.nickName')">
                <van-field :placeholder="nickName"
                           clearable
                           ref="field"
                           v-model="nickName"/>
            </van-cell-group>
        </div>

    </div>
</template>

<script type="text/javascript">
    import {Toast} from 'vant'
    import {mapMutations} from 'vuex';

    export default {
        data() {
            return {
                // 路由传递过来的参数 nickName
                nickName: this.$route.params.nickName,
            }
        },
        mounted() {
            this.$refs.field.focus();
        },
        components: {},
        methods: {
            ...mapMutations(['CHANGE_USER_NICK_NAME']),
            // 返回按钮
            onClickLeft() {
                this.$router.back();
            },
            // 修改昵称
            onClickSave() {
                //   console.log(this.nickName);
                if (this.nickName.length > 0) {
                    let nickName = this.nickName;
                    this.CHANGE_USER_NICK_NAME({nickName});
                    this.$router.back();
                    Toast({
                        message: this.$t('mine.personal'),
                        duration: 800
                    })
                } else {
                    Toast({
                        message: this.$t('mine.message'),
                        duration: 800
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    #changeNickName {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 999;

        .van-nav-bar__text {
            color: #45c763;
        }
    }
</style>