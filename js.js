const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product');
const searchBar = document.getElementById('search');

// Função de filtro por categoria
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        products.forEach(product => {
            if (product.getAttribute('data-category').includes(category) || category === 'Tudo') {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Função de pesquisa
searchBar.addEventListener('input', () => {
    const searchValue = searchBar.value.toLowerCase();
    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? '☀️'
        : '🌙';
});
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        products.forEach(product => {
            if (product.getAttribute('data-category').includes(category) || category === 'Tudo') {
                product.classList.add('show');
                product.classList.remove('hide');
            } else {
                product.classList.add('hide');
                product.classList.remove('show');
            }
        });
    });
});
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');

        const category = button.getAttribute('data-category');
        products.forEach(product => {
            if (product.getAttribute('data-category').includes(category) || category === 'Tudo') {
                product.classList.add('show');
                product.classList.remove('hide');
            } else {
                product.classList.add('hide');
                product.classList.remove('show');
            }
        });
    });
});