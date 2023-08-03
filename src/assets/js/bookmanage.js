function changeView(){
    document.getElementById("Htext").innerHTML = "添加书籍";
    document.getElementById("title").value = '';
    document.getElementById("desc").value = '';
    document.getElementById("price").value = '';
    document.getElementById("confirmButton").onclick = submitInput;
    document.getElementById("changeBookInterfaceOuter").setAttribute("style","display:block;opacity: 1;");
}
function closeView(){
    document.getElementById("changeBookInterfaceOuter").setAttribute("style","display:none;opacity: 0;");
}
function submitInput(){
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let price = document.getElementById("price").value;
    let url = "book-insert";
    let link = url + "?title="+title+"&desc="+desc+"&price="+price;
    // console.log(link);
   window.location.href=link;
}
function getTableRow(bid){
    // 获取当前行的表格信息
    let text =document.getElementById(bid).innerText.split("\t",4);
    changeView();
    console.log(text)
    console.log(document.getElementById("title").innerHTML);
    document.getElementById("Htext").innerHTML = "修改书籍";
    document.getElementById("title").value = text[1];
    document.getElementById("desc").value = text[2];
    document.getElementById("price").value = text[3].replace('元','');
    document.getElementById("confirmButton").onclick = function(){updateInput(bid)};
    // console.log(text.split("\t",4)[0]);
}
function updateInput(bid){
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let price = document.getElementById("price").value;
    let url = "book-update";
    let link = url + "?bid="+bid+"&title="+title+"&desc="+desc+"&price="+price;
    // console.log(link);
   window.location.href=link;
}