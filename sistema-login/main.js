function btnEnviar(){
   let done = 0
  
    let user = document.login.user.value
    user=user.toLowerCase()
    let password = document.password.value
    password.toLowerCase()
    if(user == "admin" && password =="admin"){ 
        window.location="http://www.seu_site.com.br"; done=1;
     }
     if (done==0) { 
        alert("Senha ou Usuário inválido."); 
    }
    
}
