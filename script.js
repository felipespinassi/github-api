const buttonSubmit = document.querySelector('button')

const input = document.querySelector('input')

const ul = document.querySelector('ul')

const div = document.querySelector('div')

buttonSubmit.addEventListener('click', getRepos)

function getRepos(){

  div.innerHTML = ''

  let userName =  input.value

  userName = userName.replace (' ', '')
  userName = userName.replace ('.', '')
  userName = userName.trim()


   fetch("https://api.github.com/users/" + userName + "/repos")
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

    fetch('https://api.github.com/users/'+ userName)
  .then(async res =>{
    const data = await res.json()

    let foto = document.createElement('div')

    input.innerHTML = ''
    foto.innerHTML = `

    
    <h1> GitHub Api </h1>
    <h1> ${data.name} </h1> 
    <img src=${data.avatar_url}> </img>
   

    `

    div.appendChild(foto)
  
  })
  }) 
  .catch(error => console.log(error));

  input.innerText = ''
}




  
