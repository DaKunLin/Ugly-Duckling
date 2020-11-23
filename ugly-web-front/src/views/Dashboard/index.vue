<template>
  <div class="dash-wrap">
    <el-row class="dashRow">
      <div class="title">我的便签</div>
      <el-button type="primary" icon="el-icon-plus" size="mini" round>新增</el-button>
      <el-button type="primary" icon="el-icon-orange" size="mini" round>回收站</el-button>
    </el-row>
    <section class="listsContent">
        <ul class="content">
          <li class="lists">
            <div class="header">
              <div>2020-11-15</div>
              <div>
                <span>前置</span>
                <span>修改</span>
                <span>删除</span>
              </div>
            </div>
          </li>
        </ul>
    </section>

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
.dash-wrap {
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 30px auto;
  font-size: 12px;
  .dashRow {
    width: 100%;
    display: flex;
    align-items: center;
    font-size:14px;
    padding:0px 0 20px;
    .title{
      margin-right: 10px;
    }
  }
  .listsContent{
    width: 100%;
    .content{
      padding: 0;
      // width: 100%;
      // display:flex;
      li{
        list-style:none;
        width: 290px;
        min-height:250px;
        background:#f7f4aa;
        border-radius: 10px;
        box-shadow: 5px 5px 5px #8c8989;
      }
    }
    
  }
  .dashBlock {
    flex: 0 0 50px;
  }
}
</style>