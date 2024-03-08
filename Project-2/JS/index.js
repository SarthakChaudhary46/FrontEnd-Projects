const getColor =  () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexCode = "#"+ randomNumber.toString(16);
    document.body.style.backgroundColor = hexCode;
    document.getElementById("color-code").innerText = hexCode;

}

document.getElementById("bttn").addEventListener(
    "click",
    getColor
)

getColor();