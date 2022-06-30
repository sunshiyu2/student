<template>
  <tr>
      <td v-show="is_show">{{student.number}}</td>
      <td v-show="is_show">{{student.name}}</td>
      <td v-show="is_show">{{student.age}}</td>
      <td v-show="is_show">{{student.chinese}}</td>
      <td v-show="is_show">{{student.math}}</td>
      <td v-show="is_show">{{student.english}}</td>
      <td v-show="is_show">
          <el-button type="primary" @click="modify">修改</el-button>
      </td>
      <td v-show="is_show">
          <el-button type="danger" @click="deleteStudent">删除</el-button>
      </td>

      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="student.number"/> </td>
      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="student.name"/> </td>
      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="student.age"/> </td>
      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="student.chinese"/></td>
      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="student.math"/></td>
      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="student.english"/></td>
      <td v-show="is_edit">
          <el-button type="primary" @click="save">保存</el-button>
      </td>
      <td v-show="is_edit">
          <el-button type="danger" @click="deleteStudent">删除</el-button>
      </td>
    </tr>
</template>

<script>
import axios from 'axios'
export default {
    props:["student"],
    data(){
        return{
            is_show:true,
            is_edit:false,   
        }
    },
    methods:{
        modify(){
            this.is_edit=!this.is_edit;
            this.is_show=!this.is_show;
        },
        save(){
            axios({
                url: "http://localhost:8000/course/update",
                method: "POST",
                data:this.student
            }).then(res=>{
                this.modify();
            }).catch(err=>{console.log(err)});
        },
        deleteStudent(){
            axios({
                url: "http://localhost:8000/course/delete",
                method: "POST",
                data:this.student
            });
            this.is_edit=false;
            this.is_show=false;
        } 
    }
}
</script>

<style>

</style>