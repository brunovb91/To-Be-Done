document.getElementById('addButton').addEventListener('click', function(){
	var item = document.getElementById('item');
	if(item.value){
		addItemTodo(item.value);
		item.focus();
	}
});

function addItemTodo(text){

	var list = document.getElementById('tobedones');

	var item = document.createElement('li');
	item.innerText = text;
	item.className += " list-group-item text-primary d-flex justify-content-between align-items-center";

	var remove = document.createElement('button');
	remove.textContent = "Won't";
	remove.className += " btn btn-outline-danger"
	remove.addEventListener('click', removeItem);

	item.addEventListener('click', crossItem);
	item.appendChild(remove);
	list.insertBefore(item, list.childNodes[0]);
}

function removeItem(){
	var item = this.parentNode;
	var parent = item.parentNode;
	parent.removeChild(item);
}

function crossItem(){
	this.classList.contains("active") ? this.classList.remove("active") : this.classList.add("active");
	this.classList.contains("text-light") ? this.classList.remove("text-light") : this.classList.add("text-light");
	this.classList.contains("text-primary") ? this.classList.remove("text-primary") : this.classList.add("text-primary");
	console.log(this.childNodes[1])
	this.childNodes[1].textContent == "Done" ? this.childNodes[1].textContent = "Won't" : this.childNodes[1].textContent = "Done";
	this.childNodes[1].classList.contains('btn-outline-danger') ? this.childNodes[1].classList.remove('btn-outline-danger')  : this.childNodes[1].classList.add('btn-outline-danger') ;
	this.childNodes[1].classList.contains('btn-secondary') ? this.childNodes[1].classList.remove('btn-secondary')  : this.childNodes[1].classList.add('btn-secondary') ;
}