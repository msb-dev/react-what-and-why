function onAdd(event) {
  event.preventDefault();

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.addEventListener('change', onCheckboxClick);

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

function onCheckboxClick(event) {
  console.log('onCheckboxClicked called');
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
  console.log(checkBoxes);
  for (let checkBox of checkBoxes) {
    checkBox.addEventListener('change', onCheckboxClick);
  }
}

function onLoad() {
  attachSubmitHandlerToForm();
  attachCompletionHandlerToExistingCheckboxes();
}

document.addEventListener('load', onLoad); // This actually doesn't work with react-scripts

// This isn't usually needed, but react-scripts is doing crazy magic that makes this required (and actually means that line 20 doesn't work)
onLoad();

// Magic to get react-scripts to pick up stylesheet
import './style.css';
