const openBtns = document.querySelectorAll('.open-dialog-btn');

openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        if(!card) return;

        const dialogId = card.dataset.dialog;
        if(!dialogId) return;

        const dialog = document.getElementById(dialogId);
        if(!dialog) return;

        dialog.showModal();
    });
});

document.querySelectorAll('.close-dialog-btn')

closeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const dialog = btn.closest('dialog')
        if (dialog) dialog.close()
    });
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        const openDialogs = document.querySelectorAll('dialog[open]');
        openDialogs.forEach(dialog => dialog.close());
    }
});

const getInfo = window.location.search;
console.log(getInfo); 

const clientInfo = new URLSearchParams(getInfo);
console.log(clientInfo);

document.querySelector('#feedback').innerHTML = `
<p>Full name: ${clientInfo.get('first')} ${clientInfo.get('last')}</p>
<p>Your phone: ${clientInfo.get('phone')}</p>
<p>Your email: ${clientInfo.get('email')}</p>
<p>Organization: ${clientInfo.get('organization')}</p>
<p>Timestamp submitted: ${clientInfo.get('timestamp')}</p>
`;
