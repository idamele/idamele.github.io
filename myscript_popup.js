function popup(pageURL, w, h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  var targetWin = window.open (pageURL, '', 'toolbar=0, location=0, directories=0, status=0, menubar=0, scrollbars=1, resizable=0, copyhistory=0, width='+w+', height='+h+', top='+top+', left='+left);
}

function popupBib(pageURL) {
  popup(pageURL, 600, 300);
}
