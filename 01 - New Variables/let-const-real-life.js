
(function(){
  var name = 'Jeremy1';
  console.log(name);
})();

{
  const name = 'Jeremy2';
  console.log(name);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function () {
    console.log('The number is ' + i);
  }, 1000);
}
