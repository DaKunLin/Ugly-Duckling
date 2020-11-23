<template>
  <div class="offline-wrap">
    <section>
      <el-form
        :model="listForm"
        :rules="rules"
        ref="refForm"
        label-width="100px"
        class="itemForm"
      >
        <el-row>
          <el-col :span="11" :offset="1">
            <el-form-item label="产品类型:" class="btnStyle" prop="activeName">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="1">
            <el-form-item label="活动名称:" class="btnStyle" prop="activeName">
              <el-input v-model="listForm.activeName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item class="buttonsForm">
          <el-button
            type="primary"
            style="width:120px"
            @click="submitForm('refForm')"
            >查询</el-button
          >
          <el-button style="width:120px" @click="resetForm('refForm')"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </section>
    <section class="tableContent">
      <div class="btns">
        <el-button type="primary">批量删除</el-button>
      </div>
      <el-table :data="tableData" border style="width: 100%" size="mini">
        <el-table-column
          label="产品类型"
          prop="name"
          min-width="150"
        ></el-table-column>
        <el-table-column label="导出类型" min-width="100"></el-table-column>
        <el-table-column label="型号" min-width="120"></el-table-column>
        <el-table-column label="库存数量" min-width="100"></el-table-column>
        <el-table-column
          label="厂家"
          align="center"
          min-width="120"
        ></el-table-column>
        <el-table-column
          label="年份"
          min-width="180"
          align="center"
        ></el-table-column>
        <el-table-column
          label="封装"
          align="center"
          min-width="180"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          label="品质"
          min-width="180"
          align="center"
        ></el-table-column>
        <el-table-column
          label="包装"
          min-width="180"
          align="center"
        ></el-table-column>
        <el-table-column
          label="料号"
          min-width="180"
          align="center"
        ></el-table-column>
        <el-table-column
          label="产地"
          min-width="180"
          align="center"
        ></el-table-column>
        <el-table-column label="销售参考价" min-width="120"></el-table-column>
        <el-table-column prop="操作" label="操作">
          <template></template>
        </el-table-column>
      </el-table>
      <div class="pagesContent">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40, 50]"
          :page-size="100"
          layout="prev, pager,next,sizes,jumper"
          :total="100"
        >
        </el-pagination>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "offlineActivities",
  data() {
    return {
      listForm: {
        activeName: "",
        DataRange: "",
        activeStatus: "",
        signUpStatus: "",
      },
      rules: {
        activeName: [
          { required: false, message: "请输入活动名称", trigger: "blur" },
        ],
        DataRange: [
          { required: false, message: "请选择活动日期", trigger: "blur" },
        ],
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true,
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",

      statusList: [
        { key: 0, value: "未开始" },
        { key: 1, value: "进行中" },
        { key: 2, value: "已结束" },
        { key: 3, value: "已冻结" },
      ],
      signupStatusList: [
        { key: 0, value: "未开始" },
        { key: 1, value: "报名中" },
        { key: 2, value: "已结束" },
      ],
      tableData: [
        { name: "强哥最帅1" },
        { name: "强哥最帅2" },
        { name: "强哥最帅3" },
        { name: "强哥最帅4" },
        { name: "强哥最帅5" },
        { name: "强哥最帅6" },
      ],
      form: {},
      currentPage: 4,
    };
  },
  methods: {
    // 【确定】条件查询
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.listForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 【清空】重置
    resetForm(formName) {
      console.log(formName);
      this.$refs[formName].resetFields();
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="less">
.offline-wrap {
  background: #fff;
  padding: 10px;
  margin-top: 10px;
  .itemForm {
    margin: 20px 0 0 0;
    .el-date-editor {
      width: 100% !important;
    }
    .buttonsForm {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }
  }
  .tableContent {
    padding: 10px;
    margin-bottom: 100px;
    .el-table thead {
      .el-table th,
      .el-table tr {
        background: red !important;
      }
    }
    .btns {
      display: flex;
      justify-content: flex-start;
      padding: 20px 0px 5px;
    }
  }
  .pagesContent {
    margin: 10px 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
