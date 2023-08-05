function showHideSortIcon(e, asce, data, orderBy) {
    document.querySelectorAll('.down-arrow').forEach(element => {
        element.classList.add('disp-none');
    });
    document.querySelectorAll('.up-arrow').forEach(element => {
        element.classList.add('disp-none');
    });

    if (e.target.children) {
        if (asce) {
            e.target.children[1].classList.remove('disp-none')
        } 
        else {
            e.target.children[0].classList.remove('disp-none')
        }
    }

    if (asce) {
        data.sort(function (a, b) {
             return a[orderBy].localeCompare(b[orderBy]);
         });
         asce = !asce
     } else {
        data.sort(function (a, b) {
             return b[orderBy].localeCompare(a[orderBy]);
         });
         asce = !asce
     }
     return { data, asce }
}