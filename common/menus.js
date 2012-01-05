function build_menu(m) {
    var page = document.location.pathname.match(/\/([a-zA-Z0-9]+\.html)$/)[1];
    var mu = '';
    for (var i = 0; i < m.length; i++) {
        if (mu.length > 0) mu += ' | ';
        
        var a = (m[i].file == page ? ' class="active"' : '');
        mu += '<a '+a+'href="'+m[i].file+'">'+m[i].title+'</a>';
    }
    return mu;
}

// menu
main_menu = [
    { file:'index.html', title:'Home' }
];

$(document).ready(function() {
    $('#mainmenu').html(build_menu(main_menu));
});