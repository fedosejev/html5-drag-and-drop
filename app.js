(function () {

  // Read: http://www.html5rocks.com/en/tutorials/dnd/basics/

  document.addEventListener('DOMContentLoaded', function handleDOMContentLoaded() {
    var dropZoneElement = document.querySelector('[data-drop-zone]');
    dropZoneElement.addEventListener('dragover', handleDragOver, false);
    dropZoneElement.addEventListener('dragleave', handleDragLeave, false);
    dropZoneElement.addEventListener('drop', handleDrop, false);

    var draggableElements = document.querySelectorAll('[draggable]');

    // Not [].forEach.call();
    Array.prototype.forEach.call(draggableElements, function (element) {
      element.addEventListener('dragstart', handleDragStart, false);
      element.addEventListener('dragenter', handleDragEnter, false);
      element.addEventListener('dragend', handleDragEnd, false);
    });
  });

  function handleDragEnter(dragEnterEvent) {
    console.log('dragenter');
  }

  function handleDragLeave(dragLeaveEvent) {
    console.log('dragleave');

    dragLeaveEvent.target.classList.remove('highlight');
  }

  function unhighlight(element) {
    element.classList.remove('highlight');
  }

  function handleDrop(dropEvent) {
    console.log('drop');

    var data = dropEvent.dataTransfer.getData('text/plain');
    var currentSum = dropEvent.target.innerHTML.replace('£', '');
    var sum = parseInt(currentSum, 10) + parseInt(data, 10);

    dropEvent.target.innerHTML = '£' + sum;

    unhighlight(dropEvent.target);

    dropEvent.preventDefault();
  }

  function handleDragStart(dragStartEvent) {
    console.log('dragstart');

    var price = dragStartEvent.target.getAttribute('data-price');

    dragStartEvent.dataTransfer.setData('text/plain', price);
    dragStartEvent.target.classList.add('dragging');
  }

  function handleDragEnd(dragEndEvent) {
    console.log('dragend');

    dragEndEvent.target.classList.remove('dragging');
  }

  function handleDragOver(dragOverEvent) {
    console.log('dragover');

    dragOverEvent.target.classList.add('highlight');

    dragOverEvent.stopPropagation();
    dragOverEvent.preventDefault();
  }

})();
