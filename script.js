// ==========================================
// DATABASE MINI (STRUKTUR FOLDER & FILE)
// ==========================================
// Anda cukup menyimpan file PDF di folder komputer/GitHub Anda.
// Lalu catat nama file & path-nya (lokasinya) di sini.

const dataPORT = [
    {
        type: "folder",
        name: "01. SOP (Standar Operasional)",
        contents: [
            { type: "file", name: "Panduan Keselamatan Kerja.pdf", url: "MATERI/PORT/SOP/panduan_keselamatan.pdf" },
            { type: "file", name: "Aturan Seragam Lapangan.pdf", url: "materi/port/sop/aturan_seragam.pdf" }
        ]
    },
    {
        type: "folder",
        name: "02. Laporan Kinerja",
        contents: [
            // Contoh Sub-folder di dalam folder!
            {
                type: "folder",
                name: "Tahun 2026",
                contents: [
                    { type: "file", name: "Laporan Agustus 2026.pdf", url: "materi/port/laporan/2026/agustus.pdf" },
                    { type: "file", name: "Laporan September 2026.pdf", url: "materi/port/laporan/2026/september.pdf" }
                ]
            }
        ]
    }
];

const dataCPP = [
    { type: "file", name: "Materi Dasar CPP.pdf", url: "materi/cpp/dasar.pdf" }
];


// ==========================================
// LOGIKA SISTEM (Jangan diubah jika tidak perlu)
// ==========================================
let currentMenu = 'port'; 
let currentFolderData = dataPORT; 
let navigationHistory = []; // Untuk melacak masuk ke sub-folder

function switchMenu(menu) {
    document.getElementById('btn-port').classList.remove('active');
    document.getElementById('btn-cpp').classList.remove('active');
    document.getElementById(`btn-${menu}`).classList.add('active');

    currentMenu = menu;
    currentFolderData = (menu === 'port') ? dataPORT : dataCPP;
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
    const menuName = currentMenu === 'port' ? 'PORT' : 'CPP';
    
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
    renderGrid(currentMenu === 'port' ? dataPORT : dataCPP);
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
        const currentData = navigationHistory.length === 0 
            ? (currentMenu === 'port' ? dataPORT : dataCPP) 
            : navigationHistory[navigationHistory.length - 1].contents;
        renderGrid(currentData);
        return;
    }

    tutupPDF();
    let hasilPencarian = [];
    const sourceData = currentMenu === 'port' ? dataPORT : dataCPP;

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
