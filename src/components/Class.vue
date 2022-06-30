<template>
  <tr>
      <td v-show="is_show">{{pjclass.classid}}</td>
      <td v-show="is_show">{{pjclass.classname}}</td>
      <td v-show="is_show">
          <el-button type="primary" @click="modify">修改</el-button>
      </td>
      <td v-show="is_show">
          <el-button type="danger" @click="deleteClass">删除</el-button>
      </td>

      <td v-show="is_edit"><input pjclass="w-50" type="text" v-model.number="pjclass.classid"/> </td>
      <td v-show="is_edit"><input pjclass="w-50" type="text" v-model.number="pjclass.classname"/> </td>
      <td v-show="is_edit">
          <el-button type="primary" @click="save">保存</el-button>
      </td>
      <td v-show="is_edit">
          <el-button type="danger" @click="deleteClass">删除</el-button>
      </td>
    </tr>
</template>

<script>
import axios from 'axios'
export default {
    props:["pjclass"],
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
                url: "http://localhost:8000/admin/updateClass",
                method: "POST",
                data:this.pjclass
            }).then(res=>{
                this.modify();
            }).catch(err=>{console.log(err)});
        },
        deleteClass(){
            axios({
                url: "http://localhost:8000/admin/deleteClass",
                method: "POST",
                data:this.pjclass
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