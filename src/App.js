function App() {
  return (
    <div>
      <header>
        <div class="max-width-wrapper header">
          <img src="https://www.cambridgeconsultants.com/themes/custom/cc_theme/logo-2022-small.svg" />
          <h1>Hello, Sheffield!</h1>
        </div>
      </header>
      <aside class="max-width-wrapper">
        <div class="instructions">
          <p>
            Feel free to play around with all the code here: this is your own
            personal "fork" of our project.
          </p>
          <p>
            Don't worry - you can always get back to a working example by
            selecting a different "branch" from the dropdown at the top of the
            sidebar on the left.
          </p>
        </div>
      </aside>
      <article class="max-width-wrapper">
        <h2>Tasks</h2>
        <p>
          Completed <span id="completed-count">3</span> out of
          <span id="total-count">5</span>
        </p>
        <ul id="list">
          <li id="some-random-uuid-1">
            <input type="checkbox" class="checkbox" checked />
            <span>Start to prepare presentation for Sheffield</span>
            <button class="delete">Delete</button>
          </li>
          <li id="some-random-uuid-1">
            <input type="checkbox" class="checkbox" checked />
            <span>Realise it's way too hard</span>
            <button class="delete">Delete</button>
          </li>
          <li id="some-random-uuid-1">
            <input type="checkbox" class="checkbox" checked />
            <span>PANIC!!!!!</span>
            <button class="delete">Delete</button>
          </li>
          <li id="some-random-uuid-1">
            <input type="checkbox" class="checkbox" />
            <span>Give presentation</span>
            <button class="delete">Delete</button>
          </li>
          <li id="some-random-uuid-1">
            <input type="checkbox" class="checkbox" />
            <span>Get banned from Sheffield Uni for ever</span>
            <button class="delete">Delete</button>
          </li>
        </ul>
        <form id="add-todo">
          <input id="add-textbox" />
          <button id="add-button">Add</button>
        </form>
      </article>
    </div>
  );
}

export default App;
