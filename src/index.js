module.exports = function longestConsecutiveLength(array) {
 var a = [];
 var b = 0;
 var c = [0];
 var p = 0;
 for(var i = 0; i<array.length; i++){
  a[array[i]] = 0;
 }
 if(a.length == undefined) return 0;
 for(var j = 0; j<a.length; j++){
  if(a[j] != undefined){
    b++;
  }else{
    c[p] = b;
    p++;
    b = 0;
  }
 }
 c[p] = b;
 c.sort(function a(a,b){
  if(a>b) return 1;
  if(a<b) return -1;
 });
 return c[c.length-1];
}