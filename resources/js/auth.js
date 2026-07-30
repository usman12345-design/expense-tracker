import "../css/auth.scss";
import { Modal } from 'bootstrap';
import { post } from './ajax';

window.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('twoFactorAuthModal');
    if (!modalElement) return;

    const twoFactorAuthModal = new Modal(modalElement, {
        backdrop: 'static',
        keyboard: false
    });

    const loginForm = document.querySelector('.login-form');
    if (loginForm && !loginForm.dataset.bound) {
        loginForm.dataset.bound = "true"; // Prevent duplicate bindings

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation(); // Stop event bubbling

            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.disabled = true; // Disable button while processing

            const formData = new FormData(this);
            const inputs = Object.fromEntries(formData.entries());

            post(this.action, inputs, this)
                .then(response => response.json())
                .then(data => {
                    if (data.two_factor) {
                        twoFactorAuthModal.show();
                    } else if (data.redirect) {
                        window.location.href = data.redirect;
                    }
                })
                .catch(err => console.error('Login error:', err))
                .finally(() => {
                    if (submitBtn) submitBtn.disabled = false;
                });
        });
    }

    // 2FA Modal Button Handler
    const twoFactorBtn = document.querySelector('.log-in-two-factor');
    if (twoFactorBtn && !twoFactorBtn.dataset.bound) {
        twoFactorBtn.dataset.bound = "true"; // Prevent duplicate bindings

        twoFactorBtn.addEventListener('click', function (event) {
            event.preventDefault();

            this.disabled = true; // Prevent double clicking the modal button

            const codeInput = twoFactorAuthModal._element.querySelector('input[name="code"]');
            const emailInput = document.querySelector('.login-form input[name="email"]');

            const code  = codeInput ? codeInput.value : '';
            const email = emailInput ? emailInput.value : '';

            post('/login/two-factor', { email, code }, twoFactorAuthModal._element)
                .then(response => {
                    if (response.ok) {
                        window.location.href = '/';
                    }
                })
                .catch(err => console.error('2FA error:', err))
                .finally(() => {
                    this.disabled = false;
                });
        });
    }
});