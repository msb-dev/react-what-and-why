function onAdd(event) {
  event.preventDefault();

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');

  const span = document.createElement('span');
  const textbox = document.getElementById('add-textbox');
  span.innerText = textbox.value;
  textbox.value = '';

  const li = document.createElement('li');
  li.appendChild(checkbox);
  li.appendChild(span);

  const ul = document.getElementById('list');
  ul.appendChild(li);

  const totalCountSpan = document.getElementById('total-count');
  const newCount = parseInt(totalCountSpan.innerText) + 1;
  totalCountSpan.innerText = newCount;
}

function attachSubmitHandlerToForm() {
  console.log('attachSubmitHandlerToForm called');
  const form = document.getElementById('add-todo');
  form.addEventListener('submit', onAdd);
}

function onLoad() {
  console.log('onLooooad called');
  attachSubmitHandlerToForm();
}

document.addEventListener('load', onLoad); // This actually doesn't work with react-scripts

// This isn't usually needed, but Stackblitz is doing crazy magic that makes this required (and actually means that line 20 doesn't work)
attachSubmitHandlerToForm();

// Magic to get Stackbliz to pick up stylesheet
import './style.css';
