function openPopup() {
    var screenWidth = window.screen.availWidth;
    var screenHeight = window.screen.availHeight;
    var popupWidth = 400; // Adjust as needed
    var popupHeight = 500; // Adjust as needed
    var leftPosition = screenWidth - popupWidth - 40;
    var topPosition = screenHeight - popupHeight - 300; // Adjust the value (-20) as needed
    window.open("week_1_two_column.html", "_blank", "width=" + popupWidth + ", height=" + popupHeight + ", left=" + leftPosition + ", top=" + topPosition);
    }

    function popUpFunction(elementId) {
   var element = document.getElementById(elementId);
   if (element) {
        element.classList.toggle("hidden");
    } else {
        console.error("Element not found for ID:", elementId);
    }
}

const toggleIframe1Button = document.getElementById('toggleIframe1');
        const toggleIframe2Button = document.getElementById('toggleIframe2');
        const toggleIframe3Button = document.getElementById('toggleIframe3');
        const toggleIframe4Button = document.getElementById('toggleIframe4');
        const toggleIframe5Button = document.getElementById('toggleIframe5');
        const myCustomIframe1 = document.getElementById('myCustomIframe1');
        const myCustomIframe2 = document.getElementById('myCustomIframe2');
        const myCustomIframe3 = document.getElementById('myCustomIframe3');
        const myCustomIframe4 = document.getElementById('myCustomIframe4');
        const myCustomIframe5 = document.getElementById('myCustomIframe5');


        toggleIframe1Button.addEventListener('click', function() {
            myCustomIframe1.style.visibility = (myCustomIframe1.style.visibility === 'hidden') ? 'visible' : 'hidden';
        });

        toggleIframe2Button.addEventListener('click', function() {
            myCustomIframe2.style.visibility = (myCustomIframe2.style.visibility === 'hidden') ? 'visible' : 'hidden';
        });

        toggleIframe3Button.addEventListener('click', function() {
            myCustomIframe3.style.visibility = (myCustomIframe3.style.visibility === 'hidden') ? 'visible' : 'hidden';
        });

        toggleIframe4Button.addEventListener('click', function() {
          myCustomIframe4.style.visibility = (myCustomIframe4.style.visibility === 'hidden') ? 'visible' : 'hidden';
      });
      toggleIframe5Button.addEventListener('click', function() {
        myCustomIframe5.style.visibility = (myCustomIframe5.style.visibility === 'hidden') ? 'visible' : 'hidden';
    });
    

//Make the DIV element draggagle:

dragElement(document.getElementById("two"));
dragElement(document.getElementById("three"));
dragElement(document.getElementById("four"));
dragElement(document.getElementById("five"));
dragElement(document.getElementById("six"));
dragElement(document.getElementById("seven"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Make the DIV element draggagle:

dragElement(document.getElementById("three"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function toggleIframe() {
    var iframe = document.getElementById("myIframe");
    if (iframe.style.display === "none") {
      iframe.style.display = "block";
    } else {
      iframe.style.display = "none";
    }
  }
}
    