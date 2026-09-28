
        // ==========================================
        // DATABASE MINI (STRUKTUR FOLDER & FILE)
        // ==========================================

const dataOLC = [
            {
                type: "folder",
                name: "01. Manual Book (Mesin CPP)",
                contents: [
                    { type: "file", name: "Brake System Manual 21-12-12.pdf", url: "MECHANICAL COP/OLC/BRAKE/brake system manual 21-12-12.pdf" },
                    { type: "file", name: "Brake OLC.pdf", url: "MECHANICAL COP/OLC/BRAKE/p-9075-tf_m1438.pdf" }
                    // 👇 TAMBAH FILE PDF MANUAL CPP DI BAWAH BARIS INI 👇
                    
                ]
            },
            {
                type: "folder",
                name: "02. Jadwal & Maintenance",
                contents: [
                    {
                        type: "folder",
                        name: "Tahun 2026",
                        contents: [
                            { type: "file", name: "Jadwal Servis Berkala.pdf", url: "materi/cpp/maintenance/2026/servis.pdf" }
                            // 👇 TAMBAH FILE PDF MAINTENANCE 2026 DI BAWAH BARIS INI 👇
                            
                        ]
                    }
                ]
            },
            {
                type: "folder",
                name: "03. Part Catalog (Katalog Suku Cadang)",
                contents: [
                    { type: "file", name: "Katalog Sensor Hidrolik.pdf", url: "materi/cpp/katalog/sensor_hidrolik.pdf" }
                ]
            }
            // 👇 TAMBAH FOLDER UTAMA BARU UNTUK CPP DI BAWAH BARIS INI 👇
            
        ];

 const dataA2B = [
            {
                type: "folder",
                name: "01. Manual Book (Mesin CPP)",
                contents: [
                    { type: "file", name: "Materi Dasar CPP.pdf", url: "MATERI/CPP/panduan_keselamatan.pdf" },
                    { type: "file", name: "Manual Instalasi Mesin.pdf", url: "materi/cpp/manual/instalasi.pdf" }
                    // 👇 TAMBAH FILE PDF MANUAL CPP DI BAWAH BARIS INI 👇
                    
                ]
            },
            {
                type: "folder",
                name: "02. Jadwal & Maintenance",
                contents: [
                    {
                        type: "folder",
                        name: "Tahun 2026",
                        contents: [
                            { type: "file", name: "Jadwal Servis Berkala.pdf", url: "materi/cpp/maintenance/2026/servis.pdf" }
                            // 👇 TAMBAH FILE PDF MAINTENANCE 2026 DI BAWAH BARIS INI 👇
                            
                        ]
                    }
                ]
            },
            {
                type: "folder",
                name: "03. Part Catalog (Katalog Suku Cadang)",
                contents: [
                    { type: "file", name: "Katalog Sensor Hidrolik.pdf", url: "materi/cpp/katalog/sensor_hidrolik.pdf" }
                ]
            }
            // 👇 TAMBAH FOLDER UTAMA BARU UNTUK CPP DI BAWAH BARIS INI 👇
            
        ];

        const dataPORT = [
            {
                type: "folder",
                name: "01. SOP (Standar Operasional)",
                contents: [
                    { type: "file", name: "Panduan Keselamatan Kerja.pdf", url: "MATERI/PORT/SOP/panduan_keselamatan.pdf" },
                    { type: "file", name: "Aturan Seragam Lapangan.pdf", url: "MATERI/PORT/SOP/aturan_seragam.pdf" }
                    //  TAMBAH FILE PDF UNTUK SOP PORT DI BAWAH BARIS INI 
                    
                ]
            },
            {
                type: "folder",
                name: "02. Laporan Kinerja",
                contents: [
                    {
                        type: "folder",
                        name: "Tahun 2026",
                        contents: [
                            { type: "file", name: "Laporan Agustus 2026.pdf", url: "materi/port/laporan/2026/agustus.pdf" },
                            { type: "file", name: "Laporan September 2026.pdf", url: "materi/port/laporan/2026/september.pdf" }
                            // 👇 TAMBAH FILE PDF LAPORAN 2026 DI BAWAH BARIS INI 👇
                            
                        ]
                    }
                ]
            },
            {
                type: "folder",
                name: "03. Troubleshooting & Repair",
                contents: [
                    { type: "file", name: "Panduan Error Mesin Utama.pdf", url: "materi/port/troubleshooting/error_mesin.pdf" }
                ]
            }
            // 👇 TAMBAH FOLDER UTAMA BARU UNTUK PORT DI BAWAH BARIS INI 👇
            // (Jangan lupa tambahkan koma ',' di kurung kurawal '}' folder sebelumnya jika membuat folder baru)
            
        ];


        const dataCPP = [
            {
                type: "folder",
                name: "01. Manual Book (Mesin CPP)",
                contents: [
                    { type: "file", name: "Materi Dasar CPP.pdf", url: "MATERI/CPP/panduan_keselamatan.pdf" },
                    { type: "file", name: "Manual Instalasi Mesin.pdf", url: "materi/cpp/manual/instalasi.pdf" }
                    // 👇 TAMBAH FILE PDF MANUAL CPP DI BAWAH BARIS INI 👇
                    
                ]
            },
            {
                type: "folder",
                name: "02. Jadwal & Maintenance",
                contents: [
                    {
                        type: "folder",
                        name: "Tahun 2026",
                        contents: [
                            { type: "file", name: "Jadwal Servis Berkala.pdf", url: "materi/cpp/maintenance/2026/servis.pdf" }
                            // 👇 TAMBAH FILE PDF MAINTENANCE 2026 DI BAWAH BARIS INI 👇
                            
                        ]
                    }
                ]
            },
            {
                type: "folder",
                name: "03. Part Catalog (Katalog Suku Cadang)",
                contents: [
                    { type: "file", name: "Katalog Sensor Hidrolik.pdf", url: "materi/cpp/katalog/sensor_hidrolik.pdf" }
                ]
            }
            // 👇 TAMBAH FOLDER UTAMA BARU UNTUK CPP DI BAWAH BARIS INI 👇
            
        ];



// ==========================================
// LOGIKA SISTEM 
// ==========================================
// ==========================================
// LOGIKA SISTEM 
// ==========================================
let currentMenu = 'port'; 
let currentFolderData = dataPORT; 
let navigationHistory = []; // Untuk melacak masuk ke sub-folder

function switchMenu(menu) {
    // Hapus class 'active' dari semua tombol
    document.getElementById('btn-port').classList.remove('active');
    document.getElementById('btn-cpp').classList.remove('active');
    document.getElementById('btn-olc').classList.remove('active'); // Tambahan OLC
    document.getElementById('btn-a2b').classList.remove('active'); // Tambahan A2B
    
    // Tambahkan class 'active' ke tombol yang diklik
    document.getElementById(`btn-${menu}`).classList.add('active');

    currentMenu = menu;
    
    // Menggunakan gaya asli Anda (if - else)
    if (menu === 'port') {
        currentFolderData = dataPORT;
    } else if (menu === 'cpp') {
        currentFolderData = dataCPP;
    } else if (menu === 'olc') {
        currentFolderData = dataOLC;
    } else if (menu === 'a2b') {
        currentFolderData = dataA2B;
    }

    navigationHistory = []; // Reset ke folder depan
    
    document.getElementById('searchInput').value = ""; // Reset search
    tutupPDF();
    renderGrid(currentFolderData);
    renderBreadcrumb();
}

// Fungsi Menampilkan Folder & File ke Layar
function renderGrid(items) {
    const grid = document.getElementById('file-grid');
    grid.innerHTML = ''; // Bersihkan layar

    if (items.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#94a3b8;">Folder ini kosong / Tidak ada hasil.</p>';
        return;
    }

    items.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'item-card';

        if (item.type === 'folder') {
            card.innerHTML = `
                <i class="fa-solid fa-folder item-icon icon-folder"></i>
                <div class="item-title">${item.name}</div>
            `;
            card.onclick = () => bukaFolder(item);
        } else {
            card.innerHTML = `
                <i class="fa-solid fa-file-pdf item-icon icon-pdf"></i>
                <div class="item-title">${item.name}</div>
            `;
            card.onclick = () => bukaPDF(item.name, item.url);
        }

        grid.appendChild(card);
    });
}

// Masuk ke dalam folder
function bukaFolder(folderObj) {
    navigationHistory.push(folderObj); // Simpan history folder
    renderGrid(folderObj.contents);
    renderBreadcrumb();
}

// Fungsi Navigasi Breadcrumb (Jalur Folder Atas)
function renderBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb-container');
    
    let menuName = 'PORT';
    if (currentMenu === 'cpp') menuName = 'CPP';
    if (currentMenu === 'olc') menuName = 'OLC';
    if (currentMenu === 'a2b') menuName = 'A2B';
    
    let html = `<span onclick="goHome()"><i class="fa-solid fa-house"></i> ${menuName}</span>`;
    
    let tempHistory = [];
    navigationHistory.forEach((folder, index) => {
        tempHistory.push(folder);
        // Trik agar saat diklik di tengah jalur, langsung kembali ke folder itu
        const historyData = JSON.stringify(tempHistory).replace(/"/g, '&quot;'); 
        html += `<span class="separator"><i class="fa-solid fa-chevron-right" style="font-size:12px;"></i></span>`;
        html += `<span onclick="jumpToFolder(${index})">${folder.name}</span>`;
    });

    breadcrumb.innerHTML = html;
}

function goHome() {
    navigationHistory = [];
    tutupPDF();
    
    if (currentMenu === 'port') renderGrid(dataPORT);
    else if (currentMenu === 'cpp') renderGrid(dataCPP);
    else if (currentMenu === 'olc') renderGrid(dataOLC);
    else if (currentMenu === 'a2b') renderGrid(dataA2B);
    
    renderBreadcrumb();
}

function jumpToFolder(index) {
    navigationHistory = navigationHistory.slice(0, index + 1); // Potong history
    const targetFolder = navigationHistory[navigationHistory.length - 1];
    tutupPDF();
    renderGrid(targetFolder.contents);
    renderBreadcrumb();
}

// Membuka PDF langsung di web
function bukaPDF(title, url) {
    document.getElementById('file-grid').classList.add('hidden');
    document.getElementById('pdf-viewer-container').classList.remove('hidden');
    document.getElementById('pdf-title').innerText = title;
    // Menggunakan path lokal. Jika path lokal, akan dibuka oleh browser.
    document.getElementById('pdf-iframe').src = url; 
}

function tutupPDF() {
    document.getElementById('pdf-viewer-container').classList.add('hidden');
    document.getElementById('file-grid').classList.remove('hidden');
    document.getElementById('pdf-iframe').src = "";
}

// Fitur Pencarian Super Cepat (Mencari di dalam semua sub-folder sekaligus!)
function cariFile() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    
    if (keyword === "") {
        // Jika kosong, kembalikan ke folder tempat kita berada
        let currentData;
        if (navigationHistory.length === 0) {
            if (currentMenu === 'port') currentData = dataPORT;
            else if (currentMenu === 'cpp') currentData = dataCPP;
            else if (currentMenu === 'olc') currentData = dataOLC;
            else if (currentMenu === 'a2b') currentData = dataA2B;
        } else {
            currentData = navigationHistory[navigationHistory.length - 1].contents;
        }
        renderGrid(currentData);
        return;
    }

    tutupPDF();
    let hasilPencarian = [];
    
    let sourceData = dataPORT;
    if (currentMenu === 'cpp') sourceData = dataCPP;
    else if (currentMenu === 'olc') sourceData = dataOLC;
    else if (currentMenu === 'a2b') sourceData = dataA2B;

    // Fungsi rekursif (mencari menembus folder terdalam)
    function telusuri(items) {
        items.forEach(item => {
            if (item.type === 'file' && item.name.toLowerCase().includes(keyword)) {
                hasilPencarian.push(item);
            } else if (item.type === 'folder') {
                telusuri(item.contents); // Cek isi foldernya juga
            }
        });
    }

    telusuri(sourceData);
    renderGrid(hasilPencarian); // Tampilkan semua hasil yg cocok
}

// POSTER HARIAN (Gunakan link gambar / path gambar lokal)
const daftarPoster = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800", // Ganti link gambar Anda
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800"
];

window.onload = () => {
    // Inisialisasi awal
    switchMenu('port');
    
    // Set Poster
    const hariIni = new Date();
    const kunci = hariIni.getFullYear() + hariIni.getMonth() + hariIni.getDate();
    document.getElementById('daily-poster').src = daftarPoster[kunci % daftarPoster.length];
};

