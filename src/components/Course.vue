<template>
  <tr>
      <td v-show="is_show">{{course.cno}}</td>
      <td v-show="is_show">{{course.cname}}</td>
      <td v-show="is_show">
          <el-button type="primary" @click="modify">修改</el-button>
      </td>
      <td v-show="is_show">
          <el-button type="danger" @click="deleteCourse">删除</el-button>
      </td>

      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="course.cno"/> </td>
      <td v-show="is_edit"><input class="w-50" type="text" v-model.number="course.cname"/> </td>
      <td v-show="is_edit">
          <el-button type="primary" @click="save">保存</el-button>
      </td>
      <td v-show="is_edit">
          <el-button type="danger" @click="deleteCourse">删除</el-button>
      </td>
    </tr>
</template>

<script>
import axios from 'axios'
export default {
    props:["course"],
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
                url: "http://localhost:8000/admin/updateCourse",
                method: "POST",
                data:this.course
            }).then(res=>{
                this.modify();
            }).catch(err=>{console.log(err)});
        },
        deleteCourse(){
            axios({
                url: "http://localhost:8000/admin/deleteCourse",
                method: "POST",
                data:this.course
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