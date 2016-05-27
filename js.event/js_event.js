(function () {
    function application () {
	    this.items = [];
	}

window.application = application;

}());

var app = new application;
   


document.querySelector('#add').addEventListener('click', todoList);

function todoList() {
	var item    = document.getElementById('todoInput');
	var title = item.value;
	var ul = document.getElementById('todoList');
	var id = app.items.length;
	
	app.items.push(title);
	//ul.style.listStyle='none';
	var newItem = document.createElement('li');
	var label = document.createElement('label');
	var input = document.createElement('input');
	input.type = 'checkbox';
	
	label.textContent=title;
	newItem.appendChild(input);
	newItem.appendChild(label);
	ul.appendChild(newItem);
	
	input.addEventListener('change', function(event){
	if (input.checked) {
		label.style.textDecoration='line-through';
	}
	});
}