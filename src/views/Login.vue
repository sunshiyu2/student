<template>

  <div id="login">
    <el-row >
        <el-col :span="10"><div class="grid-content bg-white"></div></el-col>
        <el-col :span="4">
            <el-alert title="注册成功" type="success" v-show="register_success" center></el-alert>
        </el-col>          
        <el-col :span="10"><div class="grid-content bg-white"></div></el-col>
    </el-row>
    <el-header></el-header>
    <el-main >
      <table class="table">
      <tr>
        <td><nav>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/login" >登录</router-link>&nbsp;| 
      <router-link to="/register">注册</router-link>
    </nav>
    </td>
      </tr>
      <tr>
        <td>
          <label >用户名:</label>
          <el-input style="width:230px" type="text" placeholder="请输入用户名" v-model="userName" ></el-input>
        </td>
      </tr>
      <tr>
        <td>
          <label>密码：</label>
          <el-input style="width:230px" type="password" placeholder="请输入密码" v-model="password"></el-input>
          </td>
      </tr>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button type="primary" @click="login" round-button>登录</el-button>

    </table>
    
    {{msg}}
    </el-main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
          userName:"",
          password:"",
          register_success:false,
          msg:"",
        }
    },
    methods:{
      login(){
        axios({
          url:"http://localhost:8000/user/login",
          method:"POST",
          data:{
            username:this.userName,
            userpwd:this.password,
          },
        }).then(res=>{
          console.log(res);
          if(res.data.status!=0){
            this.success_login=true;
            this.$router.push({path:"/adminMain",query:{userName:this.userName,login_success:true}});
          }
          else{
            this.msg = res.data.msg;
          }
        }).catch(err=>{
          this.msg=err;
        })
      }
    },
    created(){
      this.userName = this.$route.query.userName;
      this.password = this.$route.query.password;
      this.register_success = this.$route.query.register_success;
      }
}
</script>

<style>
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

#login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #292e34;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #747474;
}

nav a.router-link-active {
  color: #42b983;
}

</style>