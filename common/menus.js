function build_menu(m) {
    var page = $(document).attr('pathname');
    var ul = '<ul>';
    for (var i = 0; i < m.lenght; i++) {
        var a = (m[i].file == page ? ' class="active"' : '');
        ul += '<li'+a+'><a href="'+m[i].file+'">'+m[i].title+'</a></li>';
    }
    ul += '</ul>';
    return ul;
}

// menu
main_menu = [
    { file:'index.html', title:'Home' }
];

$('#mainmenu').html(build_menu(main_menu));