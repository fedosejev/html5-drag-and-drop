// Read: http://www.html5rocks.com/en/tutorials/dnd/basics/

document.addEventListener('DOMContentLoaded', function handleDOMContentLoaded() {
  var dropZoneElement = document.querySelector('[data-drop-zone]');
  dropZoneElement.addEventListener('dragover', handleDragOver, false);
  dropZoneElement.addEventListener('drop', handleDrop, false);
  
  var draggableElements = document.querySelectorAll('[draggable]');
  
  // Not [].forEach.call();
  Array.prototype.forEach.call(draggableElements, function (element) {
    element.addEventListener('dragstart', handleDragStart, false);
    element.addEventListener('dragenter', handleDragEnter, false);
    element.addEventListener('dragover', handleDragOver, false);
    element.addEventListener('dragleave', handleDragLeave, false);
    element.addEventListener('dragend', handleDragEnd, false);
  });
});

function handleDragEnter(dragEnterEvent) {
  console.log('dragenter');
}

function handleDragLeave(dragLeaveEvent) {
  console.log('dragleave');
}

function handleDrop(dropEvent) {
  console.log('drop');
    
  var data = dropEvent.dataTransfer.getData('text/plain');
  var currentSum = dropEvent.target.innerHTML.replace('£', '');
  var sum = parseInt(currentSum, 10) + parseInt(data, 10);

  dropEvent.target.innerHTML = '£' + sum;
  
  dropEvent.preventDefault();
}

function handleDragStart(dragStartEvent) {
  console.log('dragstart');
    
  dragStartEvent.dataTransfer.setData('text/plain', dragStartEvent.target.getAttribute('data-price'));
  dragStartEvent.target.classList.add('dragging');
}

function handleDragEnd(dragEndEvent) {
  console.log('dragend');
  
  dragEndEvent.target.classList.remove('dragging');
}

function handleDragOver(dragOverEvent) {
  console.log('dragover');
  
  dragOverEvent.stopPropagation();
  dragOverEvent.preventDefault();
}