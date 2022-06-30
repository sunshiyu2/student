<template>
  <div id="main">
    <el-row v-if="login_success">
        <el-col :span="10"><div class="grid-content bg-white"></div></el-col>
        <el-col :span="4">
            <el-alert title="登录成功" type="success" ></el-alert>
        </el-col>          
        <el-col :span="10"><div class="grid-content bg-white"></div></el-col>
    </el-row>
    <div class="col-8 offset-2">
        <table class="table caption-top">
            <caption class="text-center">
            <h1>学生管理系统</h1>
            <h4>用户：{{userName}}</h4>
            
    <el-button type="primary" @click="getStudents">获取学生信息</el-button>
    <el-button v-show="showInsertButton" type="info" @click="showInsert">新增学生</el-button>
    <el-button type="info" @click="logout">注销</el-button>
    
    </caption>
  <thead>
    <tr>
      <th scope="col">学号</th>
      <th scope="col">姓名</th>
      <th scope="col">年龄</th>
      <th scope="col">语文</th>
      <th scope="col">数学</th>
      <th scope="col">英语</th>
      <th scope="col">操作1</th>
      <th scope="col">操作2</th>
    </tr>
  </thead>
  <tbody>
    <Student v-for="stu in students" :key="stu.id" :student="stu"></Student>
    <tr>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_student.number"/> </td>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_student.name"/> </td>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_student.age"/> </td>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_student.chinese"/></td>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_student.math"/></td>
      <td v-show="is_insert"><input class="w-50" type="text" v-model.number="temp_student.english"/></td>
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
     
  </div>
</template>

<script>

import axios from 'axios'
import Student from '../components/Student.vue'
export default {
  name: 'Main',
  components: {
    Student,
  },
  data(){
    return{
      students:[],
      userName:null,
      showInsertButton:false,
      temp_student:{
        number:null,
        name:null,
        age:null,
        chinese:null,
        math:null,
        english:null,
      },
      is_insert:false,
      temp_user:{
        userName:null,
        password:null,
      },
      login_success:false,
    }
  },
  methods: {
    getStudents(){
      axios({
        url:"http://localhost:8000/students",
        method:"GET",
      }).then(res=>{
        console.log(res.data)
        this.students = res.data
      });
      this.showInsertButton=true;
    },
    showInsert(){
      this.is_insert=true;
    },
    submit(){
      axios({
        url:"http://localhost:8000/add",
        method:"POST",
        data:this.temp_student
      });
      this.is_insert=false;
      this.temp_student.name=null;
      this.temp_student.number=null;
      this.temp_student.age=null;
      this.temp_student.chinese=null;
      this.temp_student.math=null;
      this.temp_student.english=null;
      this.getStudents();
    },
    logout(){
      axios({
        url: "http://localhost:8000/user/logout",
        method: "POST",
      }).then(res=>{console.log(res)}).catch(err=>{console.log(err)});
      this.$router.push({path:"/login"})
    }
  },
  created(){
    this.userName=this.$route.query.userName;
    this.login_success = this.$route.query.login_success;
  },
  change_success(){
    this.login_success=false;
  }
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-white {
    background:#11111100;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
