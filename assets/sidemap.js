document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button_sidemap');
    const sidemap = document.getElementById('sidemap');
    let grayoutDiv;

    button.addEventListener('click', function() {
        if (!grayoutDiv) {
            document.getElementById("sidemap").style.display = "block";
            grayoutDiv = document.createElement('div');
            grayoutDiv.className = 'grayout';
            document.body.appendChild(grayoutDiv);
            sidemap.style.zIndex = 2;
        } else {
            document.getElementById("sidemap").style.display = "none";
            document.body.removeChild(grayoutDiv);
            grayoutDiv = null;
            sidemap.style.zIndex = '';
        }
    });

    document.addEventListener('click', function(event) {
        if (grayoutDiv && !sidemap.contains(event.target) && event.target !== button) {
            document.getElementById("sidemap").style.display = "none";
            document.body.removeChild(grayoutDiv);
            grayoutDiv = null;
            sidemap.style.zIndex = '';
        }
    });
});