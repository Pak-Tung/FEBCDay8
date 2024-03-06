// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

 
async function fetchData(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(data);
    const json = await data.json();
    console.log(json);

    const titleList = document.getElementById('titleList');
    for(let i=0; i<json.length; i++){
        const title = document.createElement('li');
        // title.innerHTML = json[i].title;
        // titleList.appendChild(title);
        titleList.innerHTML += `<li>${json[i].title}</li>`;
    }
}

fetchData();