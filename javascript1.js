function display(x){

    document.getElementById('result').value += x

    return x

}
function solve(){

    let x = document.getElementById('result').value;

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
function clearScreen(){

    document.getElementById('result').value = ''

}
 function backspace(){
     
     var x = document.getElementById('result').value;
     
     let y = x.substring(0, x.length - 1);
     
      document.getElementById('result').value = y
     
     return y
 }
function sqrt(){
    
    var x = document.getElementById('result').value;
    
    let y = Math.sqrt(x);
    
     document.getElementById('result').value = y
    
    return y
}