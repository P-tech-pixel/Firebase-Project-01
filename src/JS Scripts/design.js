function spinToLoad() {
  var spinner = document.getElementById('loading');
  if (spinner) {
      spinner.style.display = 'inline-block';
      // Simulate a delay
      setTimeout(function() {
          spinner.style.display = 'none';
      }, 2000);
  } else {
      console.error("Spinner element not found!");
  }
}

export { spinToLoad }