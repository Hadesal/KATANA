let nImg = 1;
let img = document.getElementById("img");


img.addEventListener("click", ()=>{
    nImg++
     img.src = `img${nImg}.png`
    console.log(nImg)

    if (nImg > 3) {
        nImg = 0;
    };
});