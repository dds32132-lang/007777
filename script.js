document.querySelectorAll('.nav-link').forEach(link=>{
	link.addEventListener('click', e=>{
		e.preventDefault();
		document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
		link.classList.add('active');
		const id = link.getAttribute('href');
		document.querySelector(id).scrollIntoView({behavior:'smooth',block:'start'});
	});
});

const sections = [...document.querySelectorAll('section')];
window.addEventListener('scroll', ()=>{
	const mid = window.scrollY + window.innerHeight/3;
	for(const sec of sections){
		const top = sec.offsetTop;
		const bottom = top + sec.offsetHeight;
		const id = '#'+sec.id;
		const navLink = document.querySelector(`a[href="${id}"]`);
		if(mid>=top && mid<bottom){
			document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
			if(navLink) navLink.classList.add('active');
		}
	}
});
