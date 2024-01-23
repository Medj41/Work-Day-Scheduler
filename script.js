console.log();

var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM Do"));

let cell3;
// creating the main table 

let mainTable = $('.container');

let table = $('<table>');
table.addClass('table');
mainTable.append(table);


// Creat hour elemenets for thr loop 

let dayStart = dayjs().hour(9).hour();
let endayEnd = dayjs().hour(17).hour();
let currentTime = dayjs().hour();


var inputArray = [];
var savedArray = [];



for (let i = dayStart; i <= endayEnd; i++) {
  let tableRow = $('<tr>');
  tableRow.addClass('row');



  let cell1 = $('<td>');
  cell1.addClass('hour col-1');


  let cell2 = $('<td>');
  cell2.addClass('description col-10 p-0');


  cell3 = $('<button>');
  cell3.addClass('saveBtn col-1 position-relative border-0');


  table.append(tableRow);

  tableRow.append(cell1);
  tableRow.append(cell2);
  tableRow.append(cell3);
  // time cell
  cell1.text(dayjs().hour(i).format('hA'));

  //text Area space
  let innerCell2 = $('<textarea>');
  innerCell2.addClass('w-100 h-100 pe-0');
  cell2.append(innerCell2);
  // color 
  if (i === currentTime) {
    cell2.addClass('present');
  } else if (i < currentTime) {
    cell2.addClass('past');
  } else {
    cell2.addClass('future');
  }

  var task = "taskInput" + i;
  var savedTask = "savedTask" + i;
  inputArray.push(task);
  savedArray.push(savedTask);


  //set task ID
  $('<textarea>').attr("id", task)


  // lock icone 


  let lockIcon = $('<i>');
  lockIcon.addClass('bi bi-lock-fill position-absolute top-50 start-50 translate-middle fa-2x');
  cell3.append(lockIcon);




  let hour = i;
  let emptyInput;
  let savedValue;



  cell3.on('click', function saveInput() {
      let value = $(this).siblings('.description').children('textarea').val();
    localStorage.setItem(hour,value);
  });

  $(cell2).children('textarea').val(localStorage.getItem(hour));
}






