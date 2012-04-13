var updateURL = function() {
  var url = "http://iome.me/";
  meme = document.getElementById("meme");
  url += encodeURI(meme.options[meme.selectedIndex].value) + "/";
  url += encodeURI(document.getElementById("line1").value) + "/";
  url += encodeURI(document.getElementById("line2").value);
  document.getElementById("url").value = url;
}

document.getElementById('meme').addEventListener('change', updateURL, false);
document.getElementById('line1').addEventListener('change', updateURL, false);
document.getElementById('line2').addEventListener('change', updateURL, false);
