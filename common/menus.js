function build_menu(m) {
    var page = document.location.pathname.match(/\/([^\/]+\.html)$/);
    if (page !== null) {
        page = page[1];
    } else {
        page = undefined;
    }
    
    var mu = '';
    for (var i = 0; i < m.length; i++) {
        if (mu.length > 0) mu += ' | ';
        
        var a = ((m[i].file == page || (page === undefined && i==0)) ? ' class="active"' : '');
        mu += '<a '+a+'href="'+m[i].file+'">'+m[i].title+'</a>';
    }
    return mu;
}

// menu
main_menu = [
    { file:'index.html', title:'Home' },
    { file:'index_authed.html', title:'Home (authenticated)' }
];

$(document).ready(function() {
    $('#mainmenu').html(build_menu(main_menu));
});