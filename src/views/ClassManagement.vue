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
      <el-button @click="getClasses">获取班级</el-button>
      <el-button @click="modify">添加班级</el-button>

          <div class="col-8 offset-2">
        <table class="table caption-top">
            <caption class="text-center">
            <h1>学生管理系统</h1>
            <h4>用户：{{userName}}</h4>
    
    </caption>
  <thead>
    <tr>
      <th scope="col">编号</th>
      <th scope="col">班级名称</th>
      <th scope="col">操作1</th>
      <th scope="col">操作2</th>
    </tr>
  </thead>
  <tbody>
    <Class v-for="pjclass in classes" :key="pjclass.classid" :pjclass="pjclass"></Class>
    <tr>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_class.classid"/> </td>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_class.classname"/> </td>
      <td v-show="is_insert">
          <el-button type="primary" @click="submit" >提交</el-button>
      </td>
      <td v-show="is_insert">
          <el-button type="danger">取消</el-button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
    </el-main>
  </el-container>

  </div>
</template>

<script>
import axios from 'axios';
import Class from "../components/Class.vue"
export default {
    components:{
      Class,
    },
    data(){
        return{
          classes:[],
          is_insert:false,
          temp_class:{
            classid:null,
            classname:null,
          },
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
      getClasses(){
        axios({
          url:"http://localhost:8000/admin/allClasses",
        }).then(res=>{
          console.log(res.data.classes)
          this.classes = res.data.classes;
        })
      },
      submit(){
        console.log(this.temp_class)
        axios({
        url:"http://localhost:8000/admin/addClass",
        method:"POST",
        data:this.temp_class
      });
      this.is_insert=false;
      this.getClasses();
      },
      modify(){
        this.is_insert = true;
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