var You, computer, game;

var fields = {
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    field6: '',
    field7: '',
    field8: '',
    field9: '',
}

$(document).ready(function () {

    $('.col').css('padding', '0');

    $('#startGame').click(function () {
        game = true;
        $('#game').removeClass('hide');
        $('header').addClass('hide');
        render();
        You = $('input:checked').val();
        if ($('input:checked').val() == 'X') {
            computer = 'O';
        } else {
            computer = 'X'
            computerStep();
        }
    });

    $('#field1').click(function () {
        if (game) {
            if (fields.field1 == '') {
                fields.field1 = You;
                render();
                isWin();

                if (checking()) {
                    computerStep();
                }
            }
        }
    });
    $('#field2').click(function () {
        if (game) {
            if (fields.field2 == '') {
                fields.field2 = You;
                render();
                isWin();

                if (checking()) {
                    computerStep();
                }

            }
        }
    });
    $('#field3').click(function () {
        if (game) {
            if (fields.field3 == '') {
                fields.field3 = You;
                render();
                isWin();

                if (checking()) {
                    computerStep();
                }

            }
        }
    });
    $('#field4').click(function () {
        if (game) {
            if (fields.field4 == '') {
                fields.field4 = You;
                render();
                isWin();

                if (checking()) {
                    computerStep();
                }

            }
        }
    });
    $('#field5').click(function () {
        if (game) {
            if (fields.field5 == '') {
                fields.field5 = You;
                render();
                isWin();

                if (checking()) {
                    computerStep();
                }

            }
        }
    });
    $('#field6').click(function () {
        if (game) {
            if (fields.field6 == '') {
                fields.field6 = You;
                render();
                isWin();

                if (checking()) {
                    computerStep();
                }

            }
        }
    });
    $('#field7').click(function () {
        if (game) {
            if (fields.field7 == '') {
                fields.field7 = You;
                render();
                isWin();

                if (checking()) {
                    computerStep();
                }
            }
        }
    });
    $('#field8').click(function () {
        if (game) {
            if (fields.field8 == '') {
                fields.field8 = You;
                render();
                isWin();

                if (checking()) {
                    computerStep();
                }

            }
        }
    });
    $('#field9').click(function () {
        if (game) {
            if (fields.field9 == '') {
                fields.field9 = You;
                render();
                isWin();
                if (checking()) {
                    computerStep();
                }

            }
        }
    });

    $('#newGame').click(function () {
        fields = {
            field1: '',
            field2: '',
            field3: '',
            field4: '',
            field5: '',
            field6: '',
            field7: '',
            field8: '',
            field9: '',
        };
        $('#showResult').addClass('hide');
        $('#game').addClass('hide');
        $('header').removeClass('hide');
        game = true;
    });
});


function render() {
    for (var i = 1; i < 10; i++) {
        var temp = '#field_text' + i;
        $(temp).text(fields['field' + i]);
    }
}

function computerStep() {
    if (game) {
        var flag = true;
        while (flag) {
            var temp = Math.floor((Math.random() * 9) + 1);
            if (fields['field' + temp] == '') {
                fields['field' + temp] = computer;
                flag = false;
            }
        }
        render();
        isWin();
        checking();
    }
}

function checking() {
    var check = true;
    for (var i = 1; i < 10; i++) {
        if (fields['field' + i] == '' && check == true) {
            check = false;
        }
    }
    if (check) {
        render();
        $('.display-5').text('Nobody wins!! hahaha');
        $('#showResult').removeClass('hide');
        isWin();
        game = false;
        return false;
    } else {
        return true;
    }

}


function isWin() {
    render();
    if (fields.field1 == fields.field2 && fields.field2 == fields.field3 && fields.field3 != '') {
        if (fields.field1 == You) {
            $('.display-5').text('You re winner!');
        } else {
            $('.display-5').text('Comp is win');
        }
        $('#showResult').removeClass('hide');
        game = false;
    }
    if (fields.field4 == fields.field5 && fields.field5 == fields.field6 && fields.field6 != '') {
        if (fields.field4 == You) {
            $('.display-5').text('You re winner!');
        } else {
            $('.display-5').text('Comp is win');
        }
        $('#showResult').removeClass('hide');
        game = false;
    }
    if (fields.field7 == fields.field8 && fields.field8 == fields.field9 && fields.field9 != '') {
        if (fields.field7 == You) {
            $('.display-5').text('You re winner!');
        } else {
            $('.display-5').text('Comp is win');
        }
        $('#showResult').removeClass('hide');
        game = false;
    }
    if (fields.field1 == fields.field4 && fields.field4 == fields.field7 && fields.field7 != '') {
        if (fields.field1 == You) {
            $('.display-5').text('You re winner!');
        } else {
            $('.display-5').text('Comp is win');
        }
        $('#showResult').removeClass('hide');
        game = false;
    }
    if (fields.field2 == fields.field5 && fields.field5 == fields.field8 && fields.field8 != '') {
        if (fields.field2 == You) {
            $('.display-5').text('You re winner!');
        } else {
            $('.display-5').text('Comp is win');
        }
        $('#showResult').removeClass('hide');
        game = false;
    }
    if (fields.field3 == fields.field6 && fields.field6 == fields.field9 && fields.field9 != '') {
        if (fields.field3 == You) {
            $('.display-5').text('You re winner!');
        } else {
            $('.display-5').text('Comp is win');
        }
        $('#showResult').removeClass('hide');
        game = false;
    }
    if (fields.field1 == fields.field5 && fields.field5 == fields.field9 && fields.field9 != '') {
        if (fields.field1 == You) {
            $('.display-5').text('You re winner!');
        } else {
            $('.display-5').text('Comp is win');
        }
        $('#showResult').removeClass('hide');
        game = false;
    }
    if (fields.field3 == fields.field5 && fields.field5 == fields.field7 && fields.field7 != '') {
        if (fields.field3 == You) {
            $('.display-5').text('You re winner!');
        } else {
            $('.display-5').text('Comp is win');
        }
        $('#showResult').removeClass('hide');
        game = false;
    }
}