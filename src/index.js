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

function onCheckboxClick(event) {
  const completedCountSpan = document.getElementById('completed-count');
  let newCount = parseInt(completedCountSpan.innerText);
  if (event.currentTarget.checked) {
    newCount += 1;
  } else {
    newCount -= 1;
  }
  completedCountSpan.innerText = newCount;
}

function attachCompletionHandlerToExistingCheckboxes() {
  const checkBoxes = document.getElementsByClassName('checkbox');
  for (let checkBox of checkBoxes) {
    checkBox.addEventListener('change', onCheckboxClick);
  }
}

function attachSubmitHandlerToForm() {
  console.log('attachSubmitHandlerToForm called');
  const form = document.getElementById('add-todo');
  form.addEventListener('submit', onAdd);
}

function onLoad() {
  attachCompletionHandlerToExistingCheckboxes();
  attachSubmitHandlerToForm();
}

document.addEventListener('load', onLoad); // This actually doesn't work with react-scripts

// You wouldn't normally need these lines, but Stackblitz magic makes these necessary
attachSubmitHandlerToForm();
attachCompletionHandlerToExistingCheckboxes();

// Magic to get Stackbliz to pick up stylesheet
import './style.css';
