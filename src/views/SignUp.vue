<template>
    <div id="sign-up">
        <el-form :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input autocomplete="email" v-model="form.mail"></el-input>
            </el-form-item>
            <div id="submit">
                <el-button type="primary" @click="submit">注册</el-button>
            </div>
        </el-form>
        <el-alert
                v-if="success"
                title="创建用户成功"
                type="success"
                show-icon>
        </el-alert>
        <el-alert
                v-if="fail"
                title="创建用户失败"
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
    export default class SignUp extends Vue {
        private form = {
            username: '',
            password: '',
            mail: '',
        };
        private success = false;
        private fail = false;

        public submit() {
            Axios.post(API_URL + '/create-user', this.form)
                .then((result) => {
                    if (result.data.result === true) {
                        this.success = true;
                        setTimeout(() => this.$router.push('/'), 2000);
                    } else {
                        this.fail = true;
                        this.form.username = '';
                        this.form.password = '';
                        this.form.mail = '';
                        setTimeout(() => this.fail = false, 20000);
                    }
                });
        }
    }
</script>

<style scoped lang="stylus">
    #sign-up
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