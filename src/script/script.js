const perspectiveSlider = document.querySelector('#perspective');
const depthSlider = document.querySelector('#depth');
const perspectiveEl = document.querySelector('.viewer-perspective');
let perspectiveValue = 0;
let depthValue = depthSlider.value;

perspectiveSlider.addEventListener('input', (event) => {
  perspectiveValue = event.target.value;

  // perspectiveEl.style = `--z: ${perspectiveValue * .45}px`;
  perspectiveEl.style = `--rotate: ${ perspectiveValue * .45 * -1 }deg`;

  allDescendants(perspectiveEl, -1);
});

depthSlider.addEventListener('input', (event) => {
  depthValue = event.target.value;
  allDescendants(perspectiveEl, -1);
});

function allDescendants(node, depth) {
  depth = ++depth;

  for (var i = 0; i < node.childNodes.length; i++) {
    var child = node.childNodes[i];

    allDescendants(child, depth);
    applyVariable(child, depth);
  }
}

function applyVariable(node, depth) {
  node.style = `--z: ${ perspectiveValue * .15 * depth * depthValue * .02 }px`;
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (event) => {
    const toggleClass = event.target.dataset.toggleClass;

    if (event.target.checked) {
      perspectiveEl.classList.add(toggleClass);
    } else {
      perspectiveEl.classList.remove(toggleClass);
    }
  });
});
