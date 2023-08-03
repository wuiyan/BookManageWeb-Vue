<script setup>
import { ElMessage } from 'element-plus'
import requests from '../api/request'
import { ref } from 'vue';

const selectbook = ref('')
const selectstudent = ref('')
function changeView(){
        document.getElementById("Htext").innerHTML = "添加借阅";
        console.log(selectbook.value)
        console.log(selectstudent.value)
        console.log(document.getElementById("date").value)

        setTime();
        // document.getElementById("confirmButton").onclick = submitInput;
        document.getElementById("changeBookInterfaceOuter").setAttribute("style","display:block;opacity: 1;");
    }
    function closeView(){
        document.getElementById("changeBookInterfaceOuter").setAttribute("style","display:none;opacity: 0;");
    }
    function submitInput(){
        // let bid = document.getElementById("bid").value;
        // let sid = document.getElementById("sid").value;
        let bidz = selectbook.value;
        let sidz = selectstudent.value;
        let datez = document.getElementById("date").value;
        
        requests({
            url:"/borrow/info",
            method:"post",
            headers: {
            'Content-Type': 'application/json'
            },
            data:{
                bid:bidz,
                sid:sidz,
                date:datez   
                }
        }).then(response=>{
            console.log(response.data);
            if (response.data == 1){
                ElMessage({
                message:"添加成功！",
                type:'success',
            });
            }else{
                ElMessage({
                message:"添加失败！",
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
    function setTime(){
        let dateTime = new Date();
        let day = dateTime.getDate();
        let month = "0"+(dateTime.getMonth() + 1);
        let year = dateTime.getFullYear();
        let time = year + "-" + month + "-" + day;
        document.getElementById("date").value = time;
    }
    function deleteBorrow(id){
        requests.delete("/borrow/info/"+ id).then(response=>{
            console.log(response.data);
            if (response.data == 1){
                ElMessage({
                message:"归还成功！",
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



let borrows = ref([]);
let bookz = ref([]);
let students = ref([]); // 用于存放获取到的数据
let flag = ref(""); // 用于显示数据是否正常获取


requests.get("/borrow/info")
  .then(response => {
    console.log(response.data);
    borrows.value = response.data;
    flag.value = "数据已获取";
  })
  .catch(error => {
    console.log(error.message);
    flag.value = "数据获取失败";
  });



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
  console.log("i am first block")
</script>



<template>
    <div id="changeBookInterfaceOuter" >
    <h2  id="Htext" style="margin-bottom: 30px;margin-top: 20px;">添加借阅</h2>
    <div style="text-align: right; width: 130px;display: inline-block;">
        <label style="display: block;font-size: 20px; " for="bid">书籍名称：</label>
        <label style="display: block;font-size: 20px;" for="sid">借阅人姓名：</label>
        <label style="display: block;font-size: 20px;" for="date">借阅时间：</label>
    </div>
    <div style="display: inline-block;">
        <select id="bid"  v-model="selectbook" style="display: block; width: 200px; height: 20px; margin-bottom: 5px;">
            <option v-for="option in bookz" :value="option.bid">
            {{ option.title }}
      </option>
        </select>
        <select id="sid" v-model="selectstudent" style="display: block; width: 200px; height: 20px; margin-bottom: 5px;">
            <option v-for="option in students" :value="option.sid">
            {{ option.name }}
      </option>
        </select>
        <!-- <input id="bid" type="text" style="display: block; width: 200px; height: 20px; margin-bottom: 5px;">
        <input id="sid" type="text" style="display: block; width: 200px; height: 20px; margin-bottom: 5px;"> -->
        <input id="date" type="date" style="display: block; width: 200px; height: 20px; margin-bottom: 5px;">
    </div>
    <div style="display: block;margin-top: 15px;">
        <!-- <a href="#" style="font-size: 16px;background-color: #efefef; color: black;border: 2px solid black;margin: 10px;padding: 10px;">🥳确定</a> -->
        <button id="confirmButton" type="button" @click="submitInput()">🥳确定</button>
        <button @click="closeView()">❎关闭</button>
    </div>
</div>

<table align="center" border="5" style="border-color: aqua;" width="800">
    <thead>
    <th colspan="7">
        <h1>借阅管理页面</h1>
    </th>
    <tr>
        <th>借阅ID</th>
        <th>书籍名称</th>
        <th>书籍ID</th>
        <th>借阅人</th>
        <th>借阅人学号</th>
        <th>借阅时间</th>
        <th>操作</th>
    </tr>
    </thead>
    <tbody id="contentArea" align="center">
    <tr v-for="info in borrows" :id="info.id" style=" line-height: 50px;">
        <td>{{ info.id }}</td>
        <td>{{info.book.title }}</td>
        <td>{{ info.book.bid }}</td>
        <td>{{ info.student.name }}</td>
        <td>{{ info.student.sid }}</td>
        <td>{{ info.date }}</td>
        <td><a class="button-link" href="#" @click="deleteBorrow(info.id)" >归还</a></td>
    </tr>

    </tbody>
    <tfoot>
    <tr>
        <td colspan="7" align="center"><button class="addBook" @click="changeView()">🎊添加借阅信息</button></td>
        <!-- <td>{{ selectbook }}</td>
        <td>{{ selectstudent }}</td> -->
    </tr>
    </tfoot>
</table>
</template>

