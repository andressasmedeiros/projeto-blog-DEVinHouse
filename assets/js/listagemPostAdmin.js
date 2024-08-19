function carregarPosts() {

    const postBody = document.getElementById('post-body');
            const posts = JSON.parse(localStorage.getItem('post')) || [];

            if (posts.length > 0) {
                postBody.innerHTML = '';
                posts.forEach((post, index) => {
                    const dataFormatada = new Date(post.dataCriacao).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                    });
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${post.titulo}</td>
                        <td>${post.autor}</td>
                        <td>${post.categoria}</td>
                        <td>${dataFormatada}</td>
                        <td>
                            <button class="excluir-btn trash-button" data-index="${index}">Excluir</button>
                        </td>
                    `;
                    postBody.appendChild(tr);
                });

                document.querySelectorAll('.excluir-btn').forEach(button => {
                    button.addEventListener('click', excluirPost);
                });


            } else {
                postBody.innerHTML = '';
                const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td colspan="5" class="text-center">Nenhum post encontrado</td>
                        
                    `;
                    postBody.appendChild(tr);
             }
}

function excluirPost(event) {
    const index = event.target.getAttribute('data-index');
    let posts = JSON.parse(localStorage.getItem('post')) || [];

    
    posts = posts.filter((_, i) => i !== parseInt(index));

    localStorage.setItem('post', JSON.stringify(posts));

    
    carregarPosts();
}


document.addEventListener('DOMContentLoaded', carregarPosts);

