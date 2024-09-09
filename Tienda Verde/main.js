function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();
        const productCategory = product.getAttribute('data-category');
        
        
        const matchesSearch = productName.includes(searchInput);
        const matchesCategory = categoryFilter === 'all' || productCategory === categoryFilter;
        
        
        if (matchesSearch && matchesCategory) {
            product.classList.remove('hidden');
        } else {
            product.classList.add('hidden');
        }
    });
}
