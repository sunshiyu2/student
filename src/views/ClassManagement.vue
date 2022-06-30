<template>
  <div>


  <el-container>
    <el-aside width="300px">
        <el-row class="tac">
  <el-col :span="6">
    <el-menu
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1" >
          <i class="el-icon-location"></i>
          <span @click="goToTeacherManagement">教师管理</span>
      </el-menu-item>
      <el-menu-item index="2" class="is-active">
        <i class="el-icon-menu"></i>
        <span slot="title" @click="goToClassManagement">班级管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title" @click="goToCourseManagement">课程管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
        </el-aside>
    <el-main>
        <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </el-main>
  </el-container>

  </div>
</template>

<script>
export default {
    data(){
        return{
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goToTeacherManagement(){
        this.$router.push({path:"/teacherManagement"});
      },
      goToCourseManagement(){
        this.$router.push({path:"/courseManagement"});
      },
      goToClassManagement(){
        this.$router.push({path:"/classManagement"});
      },
    }
}
</script>

<style>
     .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>