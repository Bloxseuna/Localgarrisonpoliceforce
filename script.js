document.addEventListener('DOMContentLoaded', ()=>{
	const links = Array.from(document.querySelectorAll('.nav-link'));
	links.forEach(a=>{
		a.addEventListener('click', e=>{
			e.preventDefault();
			const href = a.getAttribute('href');
			const target = document.querySelector(href);
			if(target){
				window.scrollTo({top: target.getBoundingClientRect().top + window.scrollY - 64, behavior:'smooth'});
			}
			links.forEach(x=>x.classList.remove('active'));
			a.classList.add('active');
		});
	});

	// Highlight nav on scroll
	const sections = Array.from(document.querySelectorAll('section, main'));
	window.addEventListener('scroll', ()=>{
		const y = window.scrollY + 80;
		for(let s of sections){
			const top = s.offsetTop;
			const height = s.offsetHeight;
			const id = s.id;
			if(id && y >= top && y < top + height){
				links.forEach(l=> l.classList.toggle('active', l.getAttribute('href') === '#'+id));
			}
		}
	});
});
