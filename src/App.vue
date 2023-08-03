<script setup>
import { RouterLink, RouterView } from 'vue-router'
import "./assets/css/style1.css"
import "./assets/css/style2.css"
import "./assets/css/index.css"



$(document).ready(function () {
    $('#demo-pie-1').pieChart({
        barColor: '#3bb2d0',
        trackColor: '#eee',
        lineCap: 'round',
        lineWidth: 8,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

    $('#demo-pie-2').pieChart({
        barColor: '#fbb03b',
        trackColor: '#eee',
        lineCap: 'butt',
        lineWidth: 8,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });

    $('#demo-pie-3').pieChart({
        barColor: '#ed6498',
        trackColor: '#eee',
        lineCap: 'square',
        lineWidth: 8,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
});



</script>

<template>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图书管理系统</title>

    <!-- <script src="../static/js/jquery.min.js"> </script> -->

</head>

<nav>
    <h1>图书管理系统</h1>
        <div style="height:200px" >
            <hr color="black">
            <ul>
            <!-- 为了实现跳转时自动刷新页面，所以保留，因为部分js代码不是组件，无法跟随组件变动 -->
            <li><a href="/">主页</a></li> 
            <!-- <li><RouterLink to="/">主页</RouterLink></li> -->
            <li><RouterLink to="/student">学生信息</RouterLink></li>
            <li><RouterLink to="/books">书籍管理</RouterLink></li>
            <li><RouterLink to="/borrow">借阅管理</RouterLink></li>
            <li><a href="https://wuiyan.github.io/">关于</a></li>
            </ul>
        </div>
        
    </nav>

<RouterView></RouterView>


</template>

<style scoped>

</style>
