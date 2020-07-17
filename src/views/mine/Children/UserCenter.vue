<!--
 * @Author: 极客James
 * @Motto: 求知若渴,虚心若愚
 * @Github: https://github.com/Geek-James/ddBuy
 * @掘金: https://juejin.im/user/5c4ebc72e51d4511dc7306ce
 * @LastEditTime : 2020-01-06 12:00:55
 * @Description: 我的->个人资料
 * @FilePath: /ddBuy/src/views/mine/Children/UserCenter.vue
 -->
<template>
    <div id="userCenter">
        <van-nav-bar :border=false
                     :fixed=true
                     :title="$t('mine.personalInfo')"
                     @click-left="onClickLeft"
                     left-arrow
                     style="height:2.5rem"/>
        <div class="icon">
            <span class="title">{{$t('mine.head')}}</span>
            <img alt=""
                 src="./../../../images/mine/defaultImg.jpeg">
        </div>
        <van-cell-group>
            <van-cell :title="$t('mine.user_name')"
                      :value="userInfo.user_name"
                      @click="goToChangeNickName"
                      is-link/>
            <van-cell :title="$t('mine.userSex')"
                      :value="userSex"
                      @click="onChangeSex"
                      is-link/>
            <van-cell :title="$t('mine.Brithday')"
                      :value="userInfo.brithday?userInfo.brithday:$t('mine.noInput')"
                      @click="selectBrithday"
                      is-link/>
            <van-cell :title="$t('mine.phoneNumber')"
                      :value="phoneNumber"/>
        </van-cell-group>

        <van-button @click="logOut"
                    size=large
                    style="margin-top:1rem">{{$t('mine.logout')}}
        </van-button>
        <!-- 时间选择器 -->
        <van-popup position="bottom"
                   round
                   v-model="showDateTimePopView">
            <van-datetime-picker :formatter="formatter"
                                 :max-date="maxDate"
                                 :min-date="minDate"
                                 @cancel="cancel"
                                 @confirm="confirm"
                                 type="date"
                                 v-model="currentDate"/>
        </van-popup>
        <!-- 性别选择器 -->
        <van-popup :style="{ height: '25%' }"
                   position="bottom"
                   v-model="showChooseSex">
            <van-radio-group v-model="userInfo.sex">
                <van-cell-group @click="clickCell(radio)"
                                style="margin-top:2rem">
                    <van-cell :title="$t('mine.woman')"
                              @click="radio = '1'"
                              clickable>
                        <van-radio checked-color="#07c160"
                                   name="1"
                                   slot="right-icon"/>
                    </van-cell>
                    <van-cell :title="$t('mine.man')"
                              @click="radio = '2'"
                              clickable>
                        <van-radio checked-color="#07c160"
                                   name="2"
                                   slot="right-icon"/>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </van-popup>
        <!--路由的出口-->
        <transition mode="out-in"
                    name="router-slider">
            <router-view></router-view>
        </transition>
    </div>

</template>
<script type="text/javascript">

    import {mapGetters, mapMutations, mapState} from 'vuex'
    import {Dialog, Toast} from 'vant'
    // 引入时间格式化组件Moment
    import Moment from 'moment'

    export default {
        data() {
            return {
                showDateTimePopView: false,
                showChooseSex: false,
                currentDate: new Date('1989/01/01'),
                // 最小时间
                minDate: new Date('1949/01/01'),
                maxDate: new Date('2019/12/31'),
            }
        },
        computed: {
            ...mapState(['userInfo']),
            ...mapGetters({
                userSex: 'USER_SEX'
            }),
            phoneNumber() {
                // 设置隐藏手机号中间四位
                var mobile = String(this.userInfo.phone)
                var reg = /^(\d{3})\d{4}(\d{4})$/
                return mobile.replace(reg, '$1****$2')
            }
        },
        components: {},
        methods: {
            ...mapMutations(['USER_INFO_BRITHDAY', 'LOGIN_OUT', 'USER_INFO_SEX']),
            // 返回
            onClickLeft() {
                this.$router.back();
            },
            // 修改昵称
            goToChangeNickName() {
                // 跳转路由并且将昵称传递过去
                this.$router.push({
                    name: 'ChangeNickName',
                    params: {
                        nickName: this.userInfo.user_name
                    }
                });
            },
            // 修改性别
            onChangeSex() {
                this.showChooseSex = true;
            },
            clickCell(radio) {
                let sex = radio;
                this.USER_INFO_SEX({sex});
                setTimeout(() => {
                    this.showChooseSex = false;
                    Toast({
                        message: this.$t('mine.infoTip'),
                        duration: 800
                    })
                }, 300);
            },
            // 选择生日
            selectBrithday() {
                this.showDateTimePopView = true;
            },
            // 格式化DateTime pickView
            formatter(type, value) {
                if (type === 'year') {
                    return `${value}`;
                } else if (type === 'month') {
                    return `${value}`
                } else if (type === 'day') {
                    return `${value}`
                }
                return value;
            },
            // DateTime pcikView 确定
            confirm(value) {
                let brithday = Moment(value).format("YYYY-MM-DD");
                this.brithdayText = brithday;
                this.USER_INFO_BRITHDAY({brithday});
                this.showDateTimePopView = false;
                Toast({
                    message: this.$t('mine.infoTip'),
                    duration: 800
                })
            },
            // DateTimt pickView 取消
            cancel() {
                this.showDateTimePopView = false;
            },
            // 退出登录
            logOut() {
                Dialog.confirm({
                    message: this.$t('mine.loginInfo')
                }).then(() => {
                    // on confirm
                    this.LOGIN_OUT();
                    Toast({
                        message: this.$t('mine.infoSuccess'),
                        duration: 800
                    });
                    this.$router.back();
                }).catch(() => {
                    // on cancel
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    #userCenter {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #f5f5f5;
        z-index: 999;

        .icon {
            display: flex;
            height: 3rem;
            width: 100%;
            margin-top: 3rem;
            padding: 0 16px;
            background-color: #ffffff;
            align-items: center;

            .title {
                height: 3rem;
                line-height: 3rem;
                color: #323233;
                font-size: 14px;
            }

            img {
                position: absolute;
                right: 1.6rem;
                height: 2.5rem;
                width: 2.5rem;
            }
        }

        /*转场动画*/

        .router-slider-enter-active,
        .router-slider-leave-active {
            transition: all 0.3s;
        }

        .router-slider-enter,
        .router-slider-leave-active {
            transform: translate3d(2rem, 0, 0);
            opacity: 0;
        }
    }
</style>