function SwitchOn() {
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switch-on").style.backgroundColor = "gray";
    document.getElementById("switch-off").style.backgroundColor = "red";
    document.getElementById("switchStatus").textContent = "Switched On";
}

function SwitchOff() {
    document.getElementById("bulb").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switch-off").style.backgroundColor = "gray";
    document.getElementById("switch-on").style.backgroundColor = "green";
    document.getElementById("switchStatus").textContent = "Switched Off";
}
