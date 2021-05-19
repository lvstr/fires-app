import Swal from 'sweetalert2';
const swRegister = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js');
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: "Service worker not supported in this browser, there's no Offline Mode",
            cancelButtonText: 'Ok',
        });
    }
};

export default swRegister;
