(function() {
    const navigation = ['./home.html', './Vlog.html', './books.html', './ui.html', './contactme.html', './experience.html',
        './Hobby.html', './wanliRoad.html'
    ]
    const Nav = document.querySelectorAll('button')
    for (let i = 0; i < Nav.length; i++) {
        Nav[i].onclick = function() {
            Jump(navigation[i])
        }

    }

    function Jump(a) {
        window.location.href = a;
    }
})()