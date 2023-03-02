const fetchCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
}
// {category_id: '01', category_name: 'Breaking News'}
const displayCategories = categories =>{
    const categoriesContainer = document.getElementById('categories-container');
    categories.forEach(s => {
        categoriesContainer.innerHTML +=`
        <p class = "nav-link" onclick = "displayAlert(${s.category_id},'${s.category_name}')" >${s.category_name}</p>
        `        
    });
}
const displayAlert = (category_id, category_name) => {
    document.getElementById('alert-count').innerText = category_id;
    document.getElementById('alert-category').innerText = category_name; 
}