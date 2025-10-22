// Data Pasang Surut (Data Dummy - Kamu harus membuatnya lebih realistis)
// Data ini seharusnya DIBUAT OTOMATIS oleh script Python tim kamu!
const dataPasangSurut = [
    { hari: "Hari Ini", tanggal: "20 Okt", waktu_pasang: "15:30", tinggi_pasang: "2.1m", waktu_surut: "09:00", tinggi_surut: "0.5m" },
    { hari: "Besok", tanggal: "21 Okt", waktu_pasang: "16:00", tinggi_pasang: "2.0m", waktu_surut: "09:45", tinggi_surut: "0.6m" },
    // Tambahkan 5 hari lagi di sini!
];

// Data Cuaca (Data Dummy Sederhana)
const dataCuaca = {
    lokasi: "Pelabuhan Lamongan",
    suhu: "28°C",
    kecepatan_angin: "15 knot",
    kondisi: "Cerah Berawan"
};

// --- FUNGSI MODULAR: MENGISI DATA CUACA ---
function tampilkanCuaca() {
    const cuacaCard = document.getElementById('cuaca-card');
    cuacaCard.innerHTML = `
        <h3>${dataCuaca.lokasi}</h3>
        <p><strong>Suhu:</strong> ${dataCuaca.suhu}</p>
        <p><strong>Angin:</strong> ${dataCuaca.kecepatan_angin}</p>
        <p><strong>Kondisi:</strong> ${dataCuaca.kondisi}</p>
    `;
}

// --- FUNGSI MODULAR: MENGISI JADWAL PASANG SURUT ---
function tampilkanPasangSurut() {
    const listContainer = document.getElementById('pasang-surut-list');
    listContainer.innerHTML = ''; // Kosongkan dulu

    dataPasangSurut.forEach(data => {
        const item = document.createElement('div');
        item.classList.add('data-item');
        item.innerHTML = `
            <h4>${data.hari}, ${data.tanggal}</h4>
            <p><strong>Pasang Tertinggi:</strong> ${data.waktu_pasang} (${data.tinggi_pasang})</p>
            <p><strong>Surut Terendah:</strong> ${data.waktu_surut} (${data.tinggi_surut})</p>
        `;
        listContainer.appendChild(item);
    });
}

// --- FUNGSI MODULAR: PERINGATAN PASANG (Simulasi Logika) ---
function cekPeringatanPasang() {
    const peringatanBox = document.getElementById('peringatan-cuaca');
    const waktuSekarang = new Date();
    const jamSekarang = waktuSekarang.getHours();
    
    // Asumsi pasang tertinggi hari ini adalah jam 15:30 (ambil dari dataPasangSurut[0])
    const jamPasang = 15; // Dari 15:30
    
    // Logika Sederhana: Beri peringatan jika 1 jam mendekati Pasang Tertinggi
    if (jamSekarang >= (jamPasang - 1) && jamSekarang < jamPasang) {
        peringatanBox.style.display = 'block';
        peringatanBox.textContent = `PERINGATAN SIAGA! Pasang Tertinggi (${dataPasangSurut[0].waktu_pasang}) akan segera tiba. Selalu waspada!`;
    } else {
        peringatanBox.style.display = 'none';
    }
}

// --- FUNGSI: TOGGLE MODE GELAP ---
document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Tambahkan logika penyimpanan preferensi mode di Local Storage di sini
});


// --- EKSEKUSI FUNGSI SAAT WEBSITE DIMUAT ---
document.addEventListener('DOMContentLoaded', () => {
    tampilkanCuaca();
    tampilkanPasangSurut();
    cekPeringatanPasang(); // Panggil cek peringatan setiap kali dimuat
    
    // Kamu bisa menggunakan setInterval untuk memanggil cekPeringatanPasang()
    // setiap beberapa menit agar peringatan update secara dinamis.
});
