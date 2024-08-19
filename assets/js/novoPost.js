function adicionarPost(event) {
    event.preventDefault()

    const foto = document.getElementById('foto').value
    const titulo = document.getElementById('titulo').value
    const descricao = document.getElementById('descricao').value
    const categoria = document.getElementById('categoria').value
    const autor = document.getElementById('autor').value

    if(!foto){
        document.getElementById('foto').style.borderColor = "#fa3c5a"
        document.getElementById('foto').style.borderWidth = "2px"
        document.getElementById('error-foto').innerText = "Foto é obrigatória"
    } else {
        document.getElementById('foto').style.borderColor = ""
         document.getElementById('foto').style.borderWidth = ""
        document.getElementById('error-foto').innerText = ""
    }
    
    if (titulo === "") {
        document.getElementById('titulo').style.borderColor = "#fa3c5a"
        document.getElementById('titulo').style.borderWidth = "2px"
        document.getElementById('error-titulo').innerText = "Título é obrigatório"
 
    } else {
        document.getElementById('titulo').style.borderColor = ""
        document.getElementById('titulo').style.borderWidth = ""
        document.getElementById('error-titulo').innerText = ""
    }

    if(!categoria){
        document.getElementById('categoria').style.borderColor = "#fa3c5a"
        document.getElementById('categoria').style.borderWidth = "2px"
        document.getElementById('error-categoria').innerText = "Categoria é obrigatória"
    } else {
        document.getElementById('categoria').style.borderColor = ""
         document.getElementById('categoria').style.borderWidth = ""
        document.getElementById('error-categoria').innerText = ""
    }

    if(!descricao){
        document.getElementById('descricao').style.borderColor = "#fa3c5a"
        document.getElementById('descricao').style.borderWidth = "2px"
        document.getElementById('error-descricao').innerText = "Descrição é obrigatória"
    } else {
        document.getElementById('descricao').style.borderColor = ""
         document.getElementById('descricao').style.borderWidth = ""
        document.getElementById('error-descricao').innerText = ""
    }

    if(!autor){
        document.getElementById('autor').style.borderColor = "#fa3c5a"
        document.getElementById('autor').style.borderWidth = "2px"
        document.getElementById('error-autor').innerText = "Autor é obrigatório"
    } else {
        document.getElementById('autor').style.borderColor = ""
         document.getElementById('autor').style.borderWidth = ""
        document.getElementById('error-autor').innerText = ""
    }
    
    
    if (titulo && foto && descricao && categoria) {
        const blog = {
            autor: autor,
            id: Date.now(),
            titulo: titulo,
            descricao: descricao,
            foto: foto,
            dataCriacao: Date.now(),
            categoria: categoria,


        }

        const listaNoLocalStorage = JSON.parse(localStorage.getItem("post")) || []
        listaNoLocalStorage.push(blog);
        localStorage.setItem("post", JSON.stringify(listaNoLocalStorage))
        document.getElementById('form-blog').reset()

    }
}

document
    .getElementById('form-blog')
    .addEventListener('submit', adicionarPost)