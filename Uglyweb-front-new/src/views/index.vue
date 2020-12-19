<template>
  <div id="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px" >
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo asideMenu"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view /></el-main>
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
  handleOpen(key:string, keyPath:string) {
        console.log(key, keyPath);
  }
  handleClose(key:string, keyPath:string) {
    console.log(key, keyPath);
  }
}
</script>
<style lang="less">
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
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
body > .el-container {
  margin-bottom: 40px;
}
.asideMenu{
  height:100%
}
</style>
