<template>
  <div class="dash">
    <el-row class="dashRow">
      <div class="title">我的便签</div>
      <el-button type="primary" icon="el-icon-plus" size="mini" round>新增</el-button>
      <el-button type="primary" icon="el-icon-orange" size="mini" round>回收站</el-button>
    </el-row>
    <!-- 空白占位，方便后续内容拓展，同时防止页面下方被hidden -->
    <div class="dashBlock"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// import SwiperImg from './components/SwiperImg.vue'

@Component({
  components: { }
})
export default class DashBoard extends Vue {
  
}
</script>

<style lang="less" scoped>
.dash {
  width: 100%;
  // border: 2px solid blue;
  // height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  // font-size: 1.5rem;
  
  &Row {
    width: 100%;
    // margin-bottom: 40px;
    display: flex;
    // flex-flow: row wrap;
    // justify-content: space-between;
    align-items: center;
    // border: 2px solid red;
    font-size:14px;
    .title{
      margin-right: 10px;
    }
    @media screen and (max-width:1000px) {
      &Clock {
        width: 100%;
      }
    }
  }

  &Block {
    flex: 0 0 50px;
  }
}
</style>