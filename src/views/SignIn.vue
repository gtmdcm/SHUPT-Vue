<template>
    <div id="sign-in">
        <el-form :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <div id="submit">
                <el-button type="primary" @click="submit">登录</el-button>
            </div>
        </el-form>
        <el-alert
                v-if="success"
                title="登录成功"
                type="success"
                show-icon>
        </el-alert>
        <el-alert
                v-if="fail"
                title="登录失败"
                type="error"
                show-icon>
        </el-alert>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Alert, Button, Form, FormItem, Input} from 'element-ui';
    import Axios from 'axios';
    import {API_URL} from '../env/env.dev';

    @Component({
        components: {
            'el-form': Form,
            'el-form-item': FormItem,
            'el-input': Input,
            'el-button': Button,
            'el-alert': Alert,
        },
    })
    export default class SignIn extends Vue {
        private form = {
            username: '',
            password: '',
        };
        private success = false;
        private fail = false;

        public submit() {
            Axios.post(API_URL + '/auth', this.form)
                .then((result) => {
                    if (result.data !== '') {
                        this.success = true;
                        localStorage.setItem('JWT', result.data.token);
                        setTimeout(() => this.$router.push('/'), 2000);
                    } else {
                        this.fail = true;
                        this.form.username = '';
                        this.form.password = '';
                        setTimeout(() => this.fail = false, 20000);
                    }
                });
        }
    }
</script>

<style scoped lang="stylus">
    #sign-in
        width 100vw
        height 100vh
        display flex
        justify-content center
        align-items center
        .el-form
            padding 20px
            background white
            border-radius 6px
            width 80vw
            max-width 400px
            #submit
                display flex
                justify-content center
        .el-alert
            position absolute
            right 0
            top 40px
            width 40vw
            max-width 200px
</style>