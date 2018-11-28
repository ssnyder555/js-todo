$('button').on('click', () => {
  console.log('the click is working');

  // grab the input value
  const $input = $('input').val();
  console.log($input);
  // first select the value
  createTodo($input);
  // find the value
});

const createTodo = (inputVal) => {

  // create a div with a class of todos
  const $div = $('<div/>').addClass('todos');

  // create an h5 for todo text it is a function
  $div.append('<h5/>' + inputVal + '</h5>');

  const $button = $('<button/>').on('click', completedTodo);

  $button.text('completed');

  $div.append($button);
  $div.velocity('transition.flipYIn', {
                                        display: null,
                                        duration: 2000});


  $('#col-1').append($div);
}
const completedTodo = (e) => {
  // console.log(event.currentTarget);
  const $currentTodo = $(event.currentTarget).parent();
  console.log($currentTodo);
  $('#col-2').append($currentTodo);

  $(event.currentTarget).text('delete');

  $(event.currentTarget).off('click').on('click', removeTodo);

}

const removeTodo = (e) => {
  // $(e.currentTarget).parent().remove();
  const $todo = $(e.currentTarget).parent();

  $todo.velocity('transition.slideUpOut', 2000, (elem) => {
    console.log(elem, ' this is elem');
    $(elem).remove();
  })
  // grab the div, animate, then remove it( maybe the remove happens in a call back)


}


// just playing regular velocity

$('img').velocity({
  perspective: [215, 50],
  rotateX: 360,
  translateX: 60,
  opacity: [1, 0.55],
  height: '+=350',
  width: "+=350"
}, {
  duration: 4000,
  loop: 5,
  delay: 10
});
