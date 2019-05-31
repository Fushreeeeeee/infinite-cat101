function button() {
    fetch('https://aws.random.cat/meow').then(function(response) {
        return response.json()
}).then(function(catdata) {
console.log(catdata.file)
let catImg = document.createElement("img");
catImg.src = catdata.file;
document.getElementById("Jar");
Jar.prepend(catImg);
})
}
document.getElementById("button4").onclick = button;
