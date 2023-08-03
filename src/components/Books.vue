<script setup>
import axios from "axios"
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import requests from '../api/request'



const buttonShow = ref(true);
let targetbid = null;

function changeView(){
        document.getElementById("Htext").innerHTML = "添加书籍";
        document.getElementById("title").value = '';
        document.getElementById("desc").value = '';
        document.getElementById("price").value = '';
        // document.getElementById("confirmButton").onclick = submitInput;
        buttonShow.value = true;
        document.getElementById("changeBookInterfaceOuter").setAttribute("style","display:block;opacity: 1;");
    }
    function closeView(){
        document.getElementById("changeBookInterfaceOuter").setAttribute("style","display:none;opacity: 0;");
    }
    function submitInput(){
        let titlez = document.getElementById("title").value;
        let descz = document.getElementById("desc").value;
        let pricez = document.getElementById("price").value;
        requests.post("/book/info",{
            title:titlez,
            desc:descz,
            price:pricez
        }).then(response=>{
            console.log(response.data);
            if (response.data == 1){
                ElMessage({
                message:"插入成功！",
                type:'success',
            });
            setTimeout({}, 2000);
            location.reload();
            }else{
                ElMessage({
                message:"插入失败！",
                type:'error',
            });
            }
        }).catch(error => {
            ElMessage({
                message:"请求失败！",
                type:'error',
            });
    });

    }
    function getTableRow(bid){
        console.log(bid);

        // 获取当前行的表格信息
        let text =document.getElementById(bid).innerText.split("\t",4);
        changeView();
        console.log(text)
        console.log(document.getElementById("title").innerHTML);
        document.getElementById("Htext").innerHTML = "修改书籍";
        document.getElementById("title").value = text[1];
        document.getElementById("desc").value = text[2];
        document.getElementById("price").value = text[3].replace('元','');
        buttonShow.value = false;
        targetbid = bid;
        // document.getElementById("confirmButton").onclick = function(){updateInput(bid)};
        // console.log(text.split("\t",4)[0]);
    }
    function updateInput(bidz){
        let titlez = document.getElementById("title").value;
        let descz = document.getElementById("desc").value;
        let pricez = document.getElementById("price").value;
        console.log(bidz);
        requests.put("/book/info",{
            bid:bidz,
            title:titlez,
            desc:descz,
            price:pricez
        }).then(response=>{
            console.log(response.data);
            if (response.data == 1){
                ElMessage({
                message:"更新成功！",
                type:'success',
            });
            setTimeout({}, 2000);
            location.reload();
            }else{
                ElMessage({
                message:"更新失败！",
                type:'error',
            });
            }
        }).catch(error => {
            ElMessage({
                message:"请求失败！",
                type:'error',
            });
    });
    }
    function deleteBookInfo(bid){
        requests.delete("/book/info/"+ bid).then(response=>{
            console.log(response.data);
            if (response.data == 1){
                ElMessage({
                message:"删除成功！",
                type:'success',
            });
            }else{
                ElMessage({
                message:"删除失败！",
                type:'error',
            });
            }
            location.reload();
        }).catch(error => {
            ElMessage({
                message:"请求失败！",
                type:'error',
            });
    });
    }

let bookz = ref([]);
let flag = ref(""); // 用于显示数据是否正常获取

requests.get("/book/info")
  .then(response => {
    console.log(response.data);
    bookz.value = response.data;
    flag.value = "数据已获取";
  })
  .catch(error => {
    console.log(error.message);
    flag.value = "数据获取失败";
  });
</script>

<template>
    <div id="changeBookInterfaceOuter" >
    <h2  id="Htext" style="margin-bottom: 30px;margin-top: 20px;">添加书籍</h2>
    <div style="text-align: center; width: 100px;display: inline-block;">
        <label style="display: block;font-size: 20px;" for="title">书籍名称：</label>
        <label style="display: block;font-size: 20px;" for="desc">书籍描述：</label>
        <label style="display: block;font-size: 20px;" for="price">价格：</label>
    </div>
    <div style="display: inline-block;">
        <input id="title" type="text" style="display: block; width: 200px; height: 20px; margin-bottom: 5px;">
        <input id="desc" type="text" style="display: block; width: 200px; height: 20px; margin-bottom: 5px;">
        <input id="price" type="text" style="display: block; width: 200px; height: 20px; margin-bottom: 5px;">
    </div>
    <div style="display: block;">
        <!-- <a href="#" style="font-size: 16px;background-color: #efefef; color: black;border: 2px solid black;margin: 10px;padding: 10px;">🥳确定</a> -->
        <button v-if="buttonShow" id="confirmButton" @click="submitInput()">🥳确定</button>
        <button v-else id="confirmButton" @click="updateInput(targetbid)">🥳确定</button>
        <button @click="closeView()">❎关闭</button>
    </div>
</div>

<table align="center" border="5" style="border-color: aqua;" width="800">
    <thead>
    <th colspan="5">
        <h1>书籍管理页面</h1>
    </th>
    <tr>
        <th>书籍ID</th>
        <th>标题</th>
        <th>书籍描述</th>
        <th>价格</th>
        <th>操作</th>
    </tr>
    </thead>
    <tbody id="contentArea" align="center">
    <tr v-for="info in bookz" :id="info.bid" style=" line-height: 50px;" th:id="${book.getBid()}">
        <td>{{ info.bid }}</td>
        <td>{{ info.title }}</td>
        <td>{{ info.desc }}</td>
        <td>{{ info.price + '元'}}</td>
        <td>
            <a href="#" @click="deleteBookInfo(info.bid)" class="button-link">删除</a>
            <a href="#" @click="getTableRow(info.bid)"  class="button-link">修改</a>
        </td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <td colspan="5" align="center">
            <button class="addBook" @click="changeView()">🎊添加书籍</button>
        </td>
    </tr>
    </tfoot>
</table>

</template>

