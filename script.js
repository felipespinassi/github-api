

const ul = document.querySelector('ul')

const div = document.querySelector('div')


function getRepos(){
   fetch("https://api.github.com/users/felipespinassi/repos")
  .then(async res => {
    const data =  await res.json()
    
    data.map(item =>{


      let li = document.createElement('li')

      li.innerHTML = `
      <strong> ${item.name.toUpperCase()} </strong>
      <a href= ${item.html_url}> URL: ${item.html_url} </a>
      `
      ul.appendChild(li)

    })
  }) 
  .catch(error => console.log(error));
}


function getData(){
  fetch('https://api.github.com/users/felipespinassi')
  .then(async res =>{
    const data = await res.json()

    let foto = document.createElement('div')
    foto.innerHTML = `
    
    <h1> GitHub Api </h1> 
    <h1> ${data.name} </h1> 
    <img src=${data.avatar_url}> </img>
   
   
    

    `

    div.appendChild(foto)
  
  })
}


getData()

getRepos()