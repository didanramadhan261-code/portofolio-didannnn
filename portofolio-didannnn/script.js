
window.addEventListener('load',()=>loader.style.display='none');

document.getElementById('darkToggle').onclick=()=>{
document.body.classList.toggle('dark');
localStorage.setItem('theme',document.body.classList.contains('dark'));
};

if(localStorage.getItem('theme')==='true'){
document.body.classList.add('dark');
}

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('active')})
});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

topBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
