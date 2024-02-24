
const searchDefinition = () => {
    let input = document.getElementById("search").value;
    const url = `https://urban-dictionary7.p.rapidapi.com/v0/define?term=${input}`;
    document.getElementById("search").value = "";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '340acd51aemsh7d12e45a298f7cfp12113ajsne654d208aeaa',
            'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
        }
    };
    (async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            ihtml = "";
            for(let i =0; i < 3; i++){
                console.log(result.list[i]);
                ihtml += `
                <p class="fs-5">Definition ${i+1}: ${result.list[i].definition}</p><br>
                <p class="fs-5">Example ${i+1}: ${result.list[i].example}</p><br><br>
                `
                document.getElementById("definitionContainer").innerHTML = ihtml;
            }
        } catch (error) {
            console.error(error);
        }
    })();
}