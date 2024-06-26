document.addEventListener("DOMContentLoaded", function() {
    var buttonHtml = '<button class="global-button" onclick="location.href=\'/index.html\'">Home</button>';
    var buttonContainer = document.createElement('div');
    buttonContainer.innerHTML = buttonHtml;
    document.body.appendChild(buttonContainer.firstChild);

    // Apply styles for the button
    var buttonStyle = buttonContainer.firstChild.style;
    buttonStyle.position = 'fixed';
    buttonStyle.bottom = '20px'; // Adjust bottom position as needed
    buttonStyle.right = '20px'; // Adjust right position as needed
    buttonStyle.zIndex = '1000'; // Ensure it's above other content

    // CSS for the button
    buttonStyle.fontFamily = "'Saira Condensed', sans-serif";
    buttonStyle.fontWeight = '800';
    buttonStyle.fontSize = '16px';
    buttonStyle.backgroundColor = '#4CAF50';
    buttonStyle.color = 'white';
    buttonStyle.border = 'none';
    buttonStyle.padding = '10px 20px';
    buttonStyle.borderRadius = '5px';
    buttonStyle.cursor = 'pointer';
});
