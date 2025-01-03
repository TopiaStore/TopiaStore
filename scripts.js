(function() {
    // Public Key Anda
    emailjs.init("WYxsFcYDUslJ82JKo"); // Public Key

    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Ambil data dari formulir
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value,
        };

        // Service ID dan Template ID Anda
        emailjs.send("service_s24souq", "template_w3qi1ab", formData)
            .then(function(response) {
                alert('Formulir berhasil dikirim! Kami akan segera menghubungi Anda.');
            }, function(error) {
                alert('Terjadi kesalahan, silakan coba lagi.');
                console.error('EmailJS Error:', error);
            });
    });
})();
