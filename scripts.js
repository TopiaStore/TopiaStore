
// Inisialisasi EmailJS dengan User ID Anda
emailjs.init("rBv2PT8W1Pj0hmWAj");

// Event listener untuk pengiriman formulir
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah formulir disubmit secara normal

    // Ambil data dari formulir
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
    };

    // Pastikan kolom nama dan email tidak kosong
    if (!formData.name || !formData.email || !formData.service) {
        alert('Mohon isi semua kolom yang diperlukan.');
        return;
    }

    // Kirim data formulir menggunakan EmailJS
    emailjs.send("service_s24souq", "template_xqfsdpm", formData)
        .then(function(response) {
            alert('Formulir berhasil dikirim! Kami akan segera menghubungi Anda.');
            // Reset form setelah berhasil dikirim
            document.getElementById('orderForm').reset();
        }, function(error) {
            alert('Terjadi kesalahan, silakan coba lagi.');
            console.error('EmailJS Error:', error);
        });
});

// Fungsi untuk mengganti tema
const themeSwitcher = document.getElementById('themeSwitcher');
themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    themeSwitcher.classList.toggle('sun');
    themeSwitcher.classList.toggle('moon');
});
