<template>
  <div id="register">
    <el-header></el-header>
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
      <el-button type="primary" @click="register" round-button>注册</el-button>

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
      success_register:false,
      msg:"",
    }
  },
  methods:{
    register(){
      axios({
        url: "http://localhost:8000/user/register",
        method: "POST",
        data: {
          userName:this.userName,
          password:this.password,
        }
      }).then(res=>{
        console.log(res);
        if(res.data.status==1){
          this.$router.push({path:"/login",query:{userName:this.userName,password:this.password,register_success:true}})
        }
        else{
          this.msg = res.data.msg;
        }
      }).catch(err=>{
        console.log(err);
      })

    }
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #ffffff00;
    color: rgba(51, 51, 51, 0);
    text-align: center;
    line-height: 250px;
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

label {
  color:#141516b6;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>