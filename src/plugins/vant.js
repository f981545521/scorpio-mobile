import Vue from 'vue'
// 1.Tabbar
// 2.loading组件
// 3.栅栏格子
// 4.倒计时
// 5.图片懒加载
// 6.Tabbar 标签栏
// 7.分割线
// 8.轻弹窗
// 9.导航栏
// 10.提交订单
// 11.复选框
// 12.提示框
// 13.单元格
// 14.tag标记
// 15.填写订单
// 16.icon图标
// 17.单选框及单选框组
// 18.switch 开关
// 19.field输入框
// 20.联系地址
// 21.地址编辑
// 22.省市区选择器
// 23.弹出层
// 24.滑动单元格
// 25.van Button
// 26.时间选择
// 27.优惠券
// 28.粘性布局
// 29.侧边导航
// 30.商品导航
// 遮罩
import {
    AddressEdit,
    AddressList,
    Area,
    Button,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    ContactCard,
    ContactEdit,
    ContactList,
    CountDown,
    CouponCell,
    CouponList,
    DatetimePicker,
    Dialog,
    Divider,
    Field,
    GoodsAction,
    GoodsActionButton,
    GoodsActionIcon,
    Grid,
    GridItem,
    Icon,
    Lazyload,
    Loading,
    NavBar,
    Overlay,
    Popup,
    Radio,
    RadioGroup,
    Sidebar,
    SidebarItem,
    Sticky,
    SubmitBar,
    SwipeCell,
    Switch,
    Tab,
    Tabbar,
    TabbarItem,
    Tabs,
    Tag,
    Toast
} from 'vant'

Vue.use(Tabbar).use(TabbarItem)

Vue.use(Loading)

Vue.use(Grid).use(GridItem)

Vue.use(CountDown)

// options 为可选参数，无则不传
Vue.use(Lazyload)

Vue.use(Tab).use(Tabs)

Vue.use(Divider)

Vue.use(Toast)

Vue.use(NavBar)

Vue.use(SubmitBar)

Vue.use(Checkbox).use(CheckboxGroup)

Vue.use(Dialog)

Vue.use(Cell).use(CellGroup)

Vue.use(Tag)

Vue.use(ContactCard)
    .use(ContactList)
    .use(ContactEdit)

Vue.use(Icon)

Vue.use(RadioGroup)
Vue.use(Radio)

Vue.use(Switch)

Vue.use(Field)

Vue.use(AddressList)

Vue.use(AddressEdit)

Vue.use(Area)

Vue.use(Popup)

Vue.use(SwipeCell)

Vue.use(Button)

Vue.use(DatetimePicker)

Vue.use(CouponCell).use(CouponList)

Vue.use(Sticky)

Vue.use(Sidebar)
Vue.use(SidebarItem)

Vue.use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton)

Vue.use(Overlay)
