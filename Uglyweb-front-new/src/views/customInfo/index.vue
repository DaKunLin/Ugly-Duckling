<template>
  <div id="cutomInfo">
    <el-form ref="form" style="display: flex">
      <el-form-item label="产品类型" label-width="100px" style="display: flex">
        <el-select placeholder="">
          <el-option label="请选择"></el-option>
          <el-option label="请选择"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="活动名称"
        style="display: flex; margin-left: 200px; width: 500px"
      >
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <el-row>
      <el-button type="primary">查询</el-button>
      <el-button type="success">重置</el-button>
    </el-row>
    <el-table :data="tableData" style="width: 100%" size=" small">
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="city" label="城市"> </el-table-column>
      <el-table-column prop="zip" label="城市"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
      },
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
  },

  components: {},

  methods: {},
};
</script>

<style scoped lang="less">
#customInfo {
  .inputBox {
    padding-right: 400px;
  }
  el-table {
    el-table-column {
    }
  }
}
</style>