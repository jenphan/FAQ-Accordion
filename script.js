document.querySelectorAll('.faq__question').forEach(button => {
    button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        document.querySelectorAll('.faq__question').forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
            document.getElementById(btn.getAttribute('aria-controls')).hidden = true;
            btn.querySelector('.faq__icon').src = './assets/images/icon-plus.svg';
        });

        if (!isExpanded) {
            button.setAttribute('aria-expanded', 'true');
            const answer = document.getElementById(button.getAttribute('aria-controls'));
            answer.hidden = false;
            button.querySelector('.faq__icon').src = './assets/images/icon-minus.svg';
        }
    })
})