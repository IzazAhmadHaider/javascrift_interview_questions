document.addEventListener("DOMContentLoaded", function () {
    var buttonHtml2 = 
      '<button class="button-64" role="button" onclick="location.href=\'/index.html\'"><span class="text">Go To Home Page</span></button>';
    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("home_navigator_button");
    buttonContainer.innerHTML = buttonHtml2
    document.body.appendChild(buttonContainer);
  
    // Add the favicon
    var link = document.createElement("link");
    link.rel = "icon";
    link.href = "/images/js.svg";
    document.head.appendChild(link);
  });
  