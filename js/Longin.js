function login(){
    var username = document.getElementById("ID").value;
    var password = document.getElementById("PASSWORD").value;
    if(username==""){
        $.jGrowl("用户名不能为空！", { header: '提醒' });
    }else if(password==""){
        $.jGrowl("密码不能为空！", { header: '提醒' });
    }else{
        ajax();
    }
}
//用户登录
function ajax(){
    const username = document.getElementById('ID').value;
    const pwd = document.getElementById('PASSWORD').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://api.kjkjkl.fun/login?name=' + username);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status == 200){
            if(JSON.parse(xhr.response).password === pwd){
                alert('登陆成功');
            }else{
                alert('密码不正确');
            } 
        }
    }
}
//用户注册
function reg(){
    const xhr = new XMLHttpRequest();
    let name = document.getElementById("ID").value;
    let pwd = document.getElementById("PASSWORD").value;
    let repwd = document.getElementById('REPASSWORD').value;
    if(pwd === repwd){
        xhr.open('POST','http://api.kjkjkl.fun/register?name=' + name + '&pwd=' + pwd);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status == 200){
                alert('成功注册用户:'+ name);
            }
        }
    }else{
        alert('两次密码不一致');
    }
}