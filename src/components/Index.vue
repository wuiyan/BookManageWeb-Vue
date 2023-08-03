<script setup>

</script>

<template>
    <div id="background">
    <div style="text-align: center;margin-top: 100px;letter-spacing:10px;margin-bottom: 20px;">
        <span style="font-size: 32px; color: rgb(81, 74, 74);">数据概览</span>
    </div>
    <hr color="#ffffff">
    <div class="col-md-4 ">
        <div class="content-top-1" style="padding-left: 50px; margin-left: 35px;">
        <div class="col-md-6 top-content" style="width: 120px; margin-bottom: 20px;text-align: center;">
            <h2>书籍数量</h2>
            <label>5761</label>
            <hr color="#f0f8ff" width="120px">
        </div>
        <div class="col-md-6 top-content1" style="width: 120px;text-align: center;">	   
            <div id="demo-pie-1" class="pie-title-center" data-percent="50"> <span class="pie-value"></span> </div>
        </div>
         <div class="clearfix"> </div>
        </div>
        <div class="content-top-1" style="padding-left: 50px;margin-left: 285px;">
            <div class="col-md-6 top-content" style="width: 120px; margin-bottom: 20px;text-align: center;">
                <h2>学生人数</h2>
                <label>3761</label>
                <hr color="#f0f8ff" width="120px">
            </div>
            <div class="col-md-6 top-content1" style="width: 120px;text-align: center;">	   
                <div id="demo-pie-2" class="pie-title-center" data-percent="40"> <span class="pie-value"></span> </div>
            </div>
             <div class="clearfix"> </div>
            </div>
            <div class="content-top-1" style="padding-left: 50px;margin-left: 535px;">
                <div class="col-md-6 top-content" style="width: 120px; margin-bottom: 20px;text-align: center;">
                    <h2>借阅人数</h2>
                    <label>561</label>
                    <hr color="#f0f8ff" width="120px">
                </div>
                <div class="col-md-6 top-content1" style="width: 120px;text-align: center;">	   
                    <div id="demo-pie-3" class="pie-title-center" data-percent="60"> <span class="pie-value"></span> </div>
                </div>
                 <div class="clearfix"> </div>
                </div>
    </div>
</div>
</template>