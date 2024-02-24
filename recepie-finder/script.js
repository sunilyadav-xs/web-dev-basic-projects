// const appId = b7fa1737;
// const appKey = f87325da087a44eaccda2b1a5923d87c;
const btn = document.getElementById("search");

btn.addEventListener("click", () => {
    let val = document.getElementById("input").value;
    searchReceipe(val);

})

async function searchReceipe(input = "paneer"){
    const receipeContainer = document.getElementById("receipe-container");
    const baseUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=b7fa1737&app_key=f87325da087a44eaccda2b1a5923d87c`
    let p = await fetch(baseUrl);
    let response = await p.json()
    let receipeArr = response.hits;
    console.log(receipeArr);
    let ihtml="";
    receipeArr.forEach(element => {
        const { label:receipeTitle, ingredientLines, image:receipeImg} = element.recipe;
        const receipeSteps = (ingredientLines)=>{
            let str = "";
            for(let item of ingredientLines){
                str += `<li>${item}</li>`
            }
            return str;
        }
        const getSteps = receipeSteps(ingredientLines);
        ihtml += `
        <div class="receipe">
                <div class="receipe-title">${receipeTitle}</div>
                <div class="receipe-img">
                    <img src="${receipeImg}" alt="paneer-dish">
                </div>
                <div id="receipe-text">
                    <ul>
                       ${getSteps}
                    </ul>
                </div>
            </div>
        `
        receipeContainer.innerHTML = ihtml;
        document.getElementById("input").value = "";
    });
}
searchReceipe()