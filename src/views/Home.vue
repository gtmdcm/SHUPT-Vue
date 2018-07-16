<template>
    <div class="home">
        <div id="title">
            <h1>
                <router-link to="/">SHUPT</router-link>
            </h1>
            <div id="controls">
                <router-link to="/">PT介绍</router-link>
                <router-link to="/">BBS</router-link>
            </div>
        </div>
        <div id="head-bar">
            <el-button @click="$router.push('/sign-up')">
                注册
            </el-button>
            <el-button @click="$router.push('/sign-in')">
                登录
            </el-button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Button} from 'element-ui';

    @Component({
        components: {
            'el-button': Button,
        },
    })
    export default class Home extends Vue {

    }
</script>

<style scoped lang="stylus">
    #title
        width 100vw
        height 100vh
        display flex
        flex-direction column
        justify-content center
        align-items center
        h1
            font-size 80pt
            font-weight 100
        #controls
            width 180px
            display flex
            flex-direction row
            justify-content space-between

    #head-bar
        position absolute
        top 0
        z-index 1
        width 100vw
        height 60px
        background rgba(0, 0, 0, 0.5)
        display flex
        flex-direction row
        justify-content flex-end
        align-items center
        .el-button
            margin-right 10px
            background transparent
            color #c7c7c7
            border-color #c7c7c7
            transition all 0.3s
            line-height 100%
            &:hover
                background rgba(255, 255, 255, 0.2)
</style>