// defining routes, which have path and corresponding content:
const routes = [
  { path: '/', content: '<h1>Home</h1>'},
  { path: '/about', content: '<h1>About</h1>'},
];

function navigate(path, pushState = true) {
  const route = routes.find(route => route.path === path);

  // watch out using innerHTML
  document.querySelector('#main').innerHTML = route.content;

  // change URL into corresponding route path
  if (pushState) {

    // check out pushState method & popState event
    // https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event
    history.pushState({}, '', path);
  }
}

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    navigate(link.getAttribute('href'));
  });
});

window.addEventListener('popstate', () => {
  navigate(window.location.pathname, false);
});

// now, broswers block pushState because origin is 'null'