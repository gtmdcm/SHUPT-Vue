<template>
    <div class="home">
        <div id="title">
            <h1>
                <router-link to="/">SHUPT</router-link>
            </h1>
            <div id="controls">
                <router-link to="/">PT介绍</router-link>
                <router-link to="/">加入我们</router-link>
            </div>
        </div>
        <flat-surface-shader class="shader"
                             type="webgl"
                             :light="{ambient: '#22bc9e', diffuse: '#0b7a64'}">
        </flat-surface-shader>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {

}
</script>

<style scoped lang="stylus">
    .shader
        position absolute
        left 0
        top 0
        width 100vw
        height 100vh
        margin 0
        padding 0
        z-index -1

    #title
        background rgba(0, 0, 0, 0.6)
        z-index 0
        width 100vw
        height 100vh
        display flex
        flex-direction column
        justify-content center
        align-items center
        a
            font-family "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif
            transition 0.2s all
            text-decoration none
            color white
            &:hover
                cursor pointer
                color #93b0dc
        h1
            font-size 80pt
            font-weight 100
        #controls
            width 180px
            display flex
            flex-direction row
            justify-content space-between
</style>