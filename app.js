function multiplocinco(){
  const a =Number(document.getElementById("ex-a").value)
  const x =Number(document.getElementById("ex-x").value)
  let resultado = '';
  for(let i=0;i<=x;i++){
    resultado += `${a} X ${i} = ${a * i}\n`;
  }
    alert(resultado)
}

