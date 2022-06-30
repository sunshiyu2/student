<template>
  <div>
  <el-container>
    <el-aside width="300px">
        <el-row class="tac">
  <el-col :span="6">
    <el-menu
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1" class="is-active">
          <i class="el-icon-location"></i>
          <span @click="goToTeacherManagement">教师管理</span>
      </el-menu-item>
      <el-menu-item index="2" >
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
      <el-button @click="getTeachers">获取教师</el-button>
      <el-button @click="modify">添加教师</el-button>

          <div class="col-8 offset-2">
        <table class="table caption-top">
            <caption class="text-center">
            <h1>学生管理系统</h1>
            <h4>用户：{{userName}}</h4>
    
    </caption>
  <thead>
    <tr>
      <th scope="col">编号</th>
      <th scope="col">姓名</th>
      <th scope="col">密码</th>
      <th scope="col">管理班级</th>
      <th scope="col">操作1</th>
      <th scope="col">操作2</th>
    </tr>
  </thead>
  <tbody>
    <Teacher v-for="teacher in teachers" :key="teacher.userid" :teacher="teacher"></Teacher>
    <tr>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_teacher.username"/> </td>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_teacher.truename"/> </td>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_teacher.userpwd"/> </td>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_teacher.classid"/></td>
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
import Teacher from "../components/Teacher.vue"
export default {
    components:{
      Teacher,
    },
    data(){
        return{
          teachers:[],
          is_insert:false,
          temp_teacher:{
            userid:null,
            roleid:1,
            username:null,
            userpwd:null,
            truename:null,
            classid:null,
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
      getTeachers(){
        axios({
          url:"http://localhost:8000/admin/allTeachers",
        }).then(res=>{
          console.log(res.data.teachers)
          this.teachers = res.data.teachers;
        })
      },
      submit(){
        console.log(this.temp_teacher)
        axios({
        url:"http://localhost:8000/admin/addTeacher",
        method:"POST",
        data:this.temp_teacher
      });
      this.is_insert=false;
      this.temp_teacher.userid=null;
      this.temp_teacher.username=null;
      this.temp_teacher.userpwd=null;
      this.temp_teacher.truename=null;
      this.temp_teacher.classid=null;
      this.getTeachers();
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