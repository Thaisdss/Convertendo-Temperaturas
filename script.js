var ct = document.getElementsByName('ct')
var temp = document.getElementById('temp')
var res = document.getElementById('res')

function Calcular() {
  if(ct[0].checked){
    var cal = Number(temp.value)*9/5+32
    res.innerHTML = `A temperatura ${temp.value}C° convertida para Fahrenheit fica : ${cal}F°`
  }else if(ct[1].checked) {
    var cal =(Number(temp.value)-32)*5/9
    res.innerHTML = `A temperatura ${temp.value}F° convertida para Celsius fica : ${cal}C°`
  }
}