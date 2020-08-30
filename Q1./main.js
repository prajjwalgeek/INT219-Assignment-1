document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name');
    let fno = document.getElementById('fno').value;
    let fd = document.getElementById('fd').value;
    let pi = document.getElementById('pi').value;
    let pn = document.getElementById('pn').value;
    let g = document.getElementById('g').value;
    let a = document.getElementById('a').value;
    let bt = document.getElementById('bt').value;
    let f = document.getElementById('f').value;
    let t = document.getElementById('t').value;

    if (name.value === '') {
        name.style.background = "rgba(255,0,0,0.6)";
        alert('Name is mandotory');
    }
    else if (fno == '') {
        fno.style.background = "rgba(255,0,0,0.6)";
        alert('Flight Number is mandotory');
    }
    else if (fd == '') {
        
        alert('Flight Date is mandotory');
    }
    else if (pi == '') {
        
        alert('Passenger Info is mandotory');
    }
    else if (pn == '') {
        
        alert('Name is mandotory');
    }
    else if (a == '') {
        
        alert('Age is mandotory');
    } else if (a < 5 && a > 120) {
        
        alert('Enter a valid age');
    }
    else if (bt == '') {
        
        alert('Boarding Time is mandotory');
    }
    else if (f == '') {
        
        alert('From is mandotory');
    }
    else if (t == '') {
        // t.style.background = "rgba(255,0,0,0.6)";
        alert('To is mandotory');
    } else {
        // t.style.background = "rgba(255,0,0,0.6)";
        alert('Succesful');
        location.reload();
        return;
    }
})