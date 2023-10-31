 
   form1.answer.value=Math.log(form1.answer.value);



function sqrt(){
  form1.answer.value=Math.sqrt(form1.answer.value);
}
function DEL(){
  form1.answer.value=form1.answer.value.slice(0,-1);
}
function percent(){
var del = document.getElementById("cal").value;
  document.getElementById("cal").value = (del/100);
}

function onandoff() {
  if( status ==='on'){
    status = 'off';
    document.getElementById("btn").style="background-color:#252525 "
    document.getElementById("btn").value='on';


  } else{
    status ='on';
    document.getElementById("btn").style="background-color: #2a73ff;  border-radius:15px; width:60px; margin-left: 0.2ch; height: 90px;  padding: 0.1%;"
    document.getElementById("btn").value='off';
    

  }


  }
  function clck() {

    if(status === 'on'){
      document.getElementById("cal").value='';
      ( 'turn on calculator','error');
     
      return;

    }
  }
 
  
