function onSubmit(event) {
  event.preventDefault();
  const li = document.createElement('li')
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', )
}

function attachSubmitHandlerToForm() {
  console.log('attachSubmitHandlerToForm called');
  const form = document.getElementById('add-todo');
  form.addEventListener('submit', onSubmit);
}

function onLooooad() {
  console.log('onLooooad called');
  attachSubmitHandlerToForm();
}

document.addEventListener('load', onLooooad); // This actually doesn't work

// This isn't usually needed, but Stackblitz is doing crazy magic that makes this required (and actually means that line 20 doesn't work)
attachSubmitHandlerToForm();

// Magic to get Stackbliz to pick up stylesheet
import './style.css';
