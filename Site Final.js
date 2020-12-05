function cuphead_ou_mugman() {
	let a = document.querySelector("#resposta");
	let b = document.querySelector("#opa");

	if (a.value==="Cuphead") {
		let div = document.createElement("div");
		div.innerHTML = '<img src="https://as.com/meristation/imagenes/2020/04/07/noticias/1586254749_209920_1586254792_noticia_normal.jpg">';
		let tag = document.createElement("h1");
		let texto = document.createTextNode("A então você é time Cuphead né");
		tag.appendChild(texto);
		div.appendChild(tag);
		b.appendChild(div);
	}

	if (a.value==="Mugman") {
		let div = document.createElement("div");
		div.innerHTML = '<img src="https://i.ytimg.com/vi/B3xBcL6tD3E/maxresdefault.jpg">';
		let tag = document.createElement("h1");
		let texto = document.createTextNode("A então você é time Mugman né");
		tag.appendChild(texto);
		div.appendChild(tag);
		b.appendChild(div);
	}
}