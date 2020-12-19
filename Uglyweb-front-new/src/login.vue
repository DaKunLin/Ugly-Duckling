<template>
  <div id="login">
    <div class="loginDiv">
      <h1>管芯库存服务系统</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="userName">
          <el-input v-model="ruleForm.userName" prefix-icon="el-icon-user" placeholder="账户"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" prefix-icon="el-icon-lock" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import Vue from 'vue'
import { Component, Watch, Prop, Vue } from "vue-property-decorator";
interface ruleForm {
  userName: string;
  password: string;
}
@Component({
  // 所有组件选项可以写这里
  components: {},
})
export default class Home extends Vue {
  public ruleForm: ruleForm = {
    userName: "",
    password: "",
  };
  public rules: any = {
    userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  };

  public submitForm(formName:string) {
    // let form:any = this.$refs
    // form[formName].validate((valid:boolean) => {
    //   if (valid) {
    //     alert("submit!");
    //   } else {
    //     console.log("error submit!!");
    //     return false;
    //   }
    // });
    this.$router.push('/')
  }
  public resetForm(formName:string) {
    let form:any = this.$refs
    form[formName].resetFields();
  }
}
</script>
<style lang="less" scope>
#login{
  margin:0 auto;
  background: url('./assets/login_bg.jpg');
  background-size:cover;
  height:100%;
    position: relative;
  .loginDiv{
    width:400px;
    padding:30px;
    background:white;
    border-radius:10px;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-166px;
    margin-left:-230px;
    h1{
      font-weight: normal;
      margin:20px
    }
    .loginBtn{
      background-image: linear-gradient(90deg,#6d69fe 0,#48a0fa)!important;
      width:100%;
      &:hover{
        opacity: 0.9;
      }
    }
    input{
      font-size: 18px;
    }
    .el-form-item__content{
      margin:0!important
    }
  }
}
</style>
