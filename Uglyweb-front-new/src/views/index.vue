<template>
  <div id="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>
          <el-button type="primary" :class="['collapse',isCollapse ? 'active' : '']" @click="change"
            ><i class="el-icon-arrow-left"></i
          ></el-button>
          <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            default-active="product"
            class="el-menu-vertical-demo asideMenu"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-menu-item index="product">
              <i class="el-icon-menu"></i>
              <span slot="title">产品</span>
            </el-menu-item>
            <el-menu-item index="dic">
              <i class="el-icon-document"></i>
              <span slot="title">字典</span>
            </el-menu-item>
            <el-menu-item index="customInfo">
              <i class="el-icon-setting"></i>
              <span slot="title">客户信息</span>  
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import Vue from 'vue'
import { Component, Watch, Prop, Vue } from "vue-property-decorator";
@Component({
  // 所有组件选项可以写这里
  components: {},
})
export default class Home extends Vue {
  public isCollapse:boolean = false;

  change(){
    this.isCollapse = !this.isCollapse
  }
  handleOpen(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
  handleClose(key: string, keyPath: string) {
    console.log(key, keyPath);
  }
}
</script>
<style lang="less" scope>
* {
  padding: 0;
  margin: 0;
}
#home {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #d3dce6;
  overflow: inherit;
  color: #333;
  text-align: center;
  width: auto !important;
  position: relative;
  .collapse {
    position: absolute;
    padding: 0;
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 50%;
    z-index: 100;
    font-size: 20px;
    color: #606266;
    right: -15px;
    color: white;
    top: 50%;
    margin-top: -15px;
  }
  .collapse.active{
    transform:rotate(180deg);
  }
}
.el-menu-item {
  // padding:0 20px 0 0
  text-align: left;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
body > .el-container {
  margin-bottom: 40px;
}
.asideMenu {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 126px;
    min-height: 400px;
  }
</style>
