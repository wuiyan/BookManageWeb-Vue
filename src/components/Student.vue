<script setup>
import { ref } from 'vue';
import axios from "axios"
import requests from '../api/request'

let students = ref([]); // 用于存放获取到的数据
let flag = ref(""); // 用于显示数据是否正常获取
requests.get("/student/info")
  .then(response => {
    console.log(response.data);
    students.value = response.data;
    flag.value = "数据已获取";
  })
  .catch(error => {
    console.log(error.message);
    flag.value = "数据获取失败";
  });


</script>

<template>
    <table align="center" border="5" style="border-color: aqua;" width="800">
    <thead>
    <th colspan="4">
        <h1>学生信息展示</h1>
    </th>
    <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
    </tr>
    </thead>
    <tbody id="contentArea" align="center">
        <tr v-for="info in students" :key="info.sid" style=" line-height: 50px;">
        <td>{{ info.sid }}</td>
        <td>{{ info.name }}</td>
        <td>{{ info.sex }}</td>
        <td>{{ info.age }}</td>
        </tr>


    </tbody>
    <tfoot>
    <tr>
        <td style="height:50px" colspan="4" align="center">{{ flag }}</td>
    </tr>
    </tfoot>
</table>
</template>