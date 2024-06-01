document.addEventListener('DOMContentLoaded', function() {
    function checkWidth() {
        if (window.innerWidth >= 1024) {
            document.getElementById('desktopNavbar').style.display = 'flex';
            document.getElementById('mobileNavbar').style.display = 'none';
        } else {
            document.getElementById('desktopNavbar').style.display = 'none';
            document.getElementById('mobileNavbar').style.display = 'flex';
        }
    }

    checkWidth();

    window.addEventListener('resize', checkWidth);
});

document.addEventListener('DOMContentLoaded', () => {
    const newButton = document.getElementById('newButton');
    const popup = document.getElementById('popup');
    const createButton = document.getElementById('createButton');
    const cancelButton = document.getElementById('cancelButton');

    newButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    cancelButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    createButton.addEventListener('click', () => {
        const manusName = document.getElementById('manusName').value;
        if (manusName) {
            alert(`Manus "${manusName}" skapat!`);
            popup.style.display = 'none';
        } else {
            alert('Ange ett manusnamn.');
        }
    });
});