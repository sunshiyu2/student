<template>
  <tr>
      <td v-show="is_show">{{teacher.username}}</td>
      <td v-show="is_show">{{teacher.truename}}</td>
      <td v-show="is_show">{{teacher.userpwd}}</td>
      <td v-show="is_show">{{teacher.classid}}</td>
      <td v-show="is_show">
          <el-button type="primary" @click="modify">修改</el-button>
      </td>
      <td v-show="is_show">
          <el-button type="danger" @click="deleteTeacher">删除</el-button>
      </td>

      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="teacher.username"/> </td>
      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="teacher.truename"/> </td>
      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="teacher.userpwd"/> </td>
      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="teacher.classid"/></td>
      <td v-show="is_edit">
          <el-button type="primary" @click="save">保存</el-button>
      </td>
      <td v-show="is_edit">
          <el-button type="danger" @click="deleteTeacher">删除</el-button>
      </td>
    </tr>
</template>

<script>
import axios from 'axios'
export default {
    props:["teacher"],
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
                url: "http://localhost:8000/admin/updateTeacher",
                method: "POST",
                data:this.teacher
            }).then(res=>{
                this.modify();
            }).catch(err=>{console.log(err)});
        },
        deleteTeacher(){
            axios({
                url: "http://localhost:8000/admin/deleteTeacher",
                method: "POST",
                data:this.teacher
            }).then(res=>{
                this.is_show = false;
                this.is_edit = false;
            }).catch(err=>{console.log(err)
            })
        } 
    }
}
</script>

<style>

</style>