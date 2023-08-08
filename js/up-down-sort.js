function showHideSortIcon(e, asce, data, orderBy) {
    document.querySelectorAll('.down-arrow').forEach(element => {
        element.classList.add('visible-hidden');
    });
    document.querySelectorAll('.up-arrow').forEach(element => {
        element.classList.add('visible-hidden');
    });

    if (e.target.children) {
        if (asce) {
            e.target.children[0].classList.remove('up-arrow');
            e.target.children[0].classList.add('down-arrow');
            e.target.children[0].classList.remove('visible-hidden');
        } else {
            e.target.children[0].classList.remove('down-arrow');
            e.target.children[0].classList.add('up-arrow');
            e.target.children[0].classList.remove('visible-hidden');
        }
    }

    if (asce) {
        data.sort(function (a, b) {
             return a[orderBy].localeCompare(b[orderBy]);
         });
     } else {
        data.sort(function (a, b) {
             return b[orderBy].localeCompare(a[orderBy]);
         });
        }
        asce = !asce
     return { data, asce }
}