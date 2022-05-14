function onClick() {
  console.log('hello, world!!!');
}

function attachClickHandlerToButton() {
  console.log('attachClickHandlerToButton called');
  const button = document.getElementById('add-button');
  button.addEventListener('click', onClick);
}

function onLooooad() {
  console.log('onLooooad called');
  attachClickHandlerToButton();
}

document.addEventListener('load', onLooooad); // This actually doesn't work

// This isn't usually needed, but Stackblitz is doing crazy magic that makes this required (and actually means that line 20 doesn't work)
attachClickHandlerToButton();

// Magic to get Stackbliz to pick up stylesheet
import './style.css';
