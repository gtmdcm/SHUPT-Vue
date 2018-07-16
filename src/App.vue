<template>
    <div id="app">
        <router-view/>
        <flat-surface-shader class="shader"
                             type="webgl"
                             :light="{ambient: '#22bc9e', diffuse: '#0b7a64'}">
        </flat-surface-shader>
    </div>
</template>

<style lang="stylus">
    *
        margin 0
        padding 0

    #app
        background rgba(0, 0, 0, 0.6)
        z-index 0
        width 100vw
        height 100vh
        padding 0
        margin 0

    .shader
        position absolute
        left 0
        top 0
        width 100vw
        height 100vh
        margin 0
        padding 0
        z-index -1

    a
        font-family "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif
        transition 0.2s all
        text-decoration none
        color white
        &:hover
            cursor pointer
            color #93b0dc
</style>
