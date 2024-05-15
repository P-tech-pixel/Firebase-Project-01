// This is a Design folder for page using JS 

function spinToLoad(){
    var spinner = document.getElementById('loading');
    spinner.style.display = 'inline-block';
  
    //simulate a delay
    setTimeout(function(){
      spinner.style.display = 'none';
    }, 2000);
  
   // console.log("Spinning")
  }

export { spinToLoad }