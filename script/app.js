
$('button').on('click', () => {
  console.log('the click is working');

// grab the inputs VALUE
    const $input = $('input').val();

    console.log($input);
    // first select the input
      createTodo($input)
// find the value

});

const createTodo = (inputVal) => {

// create a div with class of todos
  const $div = $('<div/>').addClass('todos');

// create an h5 with the todo's text, ho do i get the
// todos text in this function
  $div.append('<h5>' + inputVal + '</h5>');
//other way to do what is done right above
  // const $h5 = $('<h5/>').text(inputVal);
  // $div.append($h5)

// create a button with the text of add // TODO:
  const $button = $('<button/>').on('click', completedTodo);



  $button.text('completed');
//append theses in the correct order, and to the
// corrrect place on the dom, Look at the HTML
$div.append($button);

$('#col-1').append($div);
}


const completedTodo = (e) => {
  console.log(event.currentTarget);
// grabbig the whole todo
  const $currentTodo = $(event.currentTarget).parent();

  console.log($currentTodo);
  $('#col-2').append($currentTodo);

  $(event.currentTarget).text('delete');

  $(event.currentTarget).off('click').on('click', removeTodo);

  }


const removeTodo = (e) => {
  // button is e.currentTarget
  $(e.currentTarget).parent().remove();

}
