var dvorak = [ [ ["'", '"'], [',', '<'], ['.', '>'], ['p'], ['y'], ['f'], ['g']
               ,  ['c'], ['r'], ['l'], ['?', '/'], ['+', '='] ]
             , [ ['a'], ['o'], ['e'], ['u'], ['i'], ['d'], ['h'], ['t'], ['n'] 
               , ['s'], ['-', '_'] ]
             , [ [':', ';'], ['q'], ['j'], ['k'], ['x'], ['b'], ['m'], ['w'] 
               , ['v'], ['z'] ]
             ];

var generateKeys = function () {
  var content = $('#content');
  var row, key;
  for (var i = 0; i < 3; i++) {
    content.append('<div id="row' + i + '" class="row"></div>');
    row = $('#row' + i);
    
    for (var j = 0; j < 12 - i; j++) {
      row.append('<div id="key-' + i + '-' + j + '" class="key"></div>');
      key = $('#key-' + i + '-' + j);
      key.append('<input id="keyin-' + i + '-' + j + '" type="text" size="2" ' +
                 'class="keyfield" />');
    }
  }
  
  content.append('<div><input id="finish" type="submit" value="Finished" />' + 
                 '</div>');
  $('#finish').bind('click', score);
}

var score = function () {
  $('.key').each(function () {
    var loc = this.id.split('-').slice(1);
    var row = loc[0];
    var col = loc[1];
    var reference = dvorak[row][col];
    var input = $('#keyin-' + row + '-' + col);
    var answer = input.val();
    
    if (reference.indexOf(answer.toLowerCase().trim()) < 0) {
      input.val(reference[0]);
      $(this).addClass('wrong');
    }
  });
}

$(generateKeys);
