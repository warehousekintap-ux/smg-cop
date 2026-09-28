
        // ==========================================
        // DATABASE MINI (STRUKTUR FOLDER & FILE)
        // ==========================================

const dataOLC = [
            {
                type: "folder",
                name: "BRAKE OLC",
                contents: [
                    { type: "file", name: "Brake System Manual 21-12-12.pdf", url: "OLC/BRAKE/Brake System Manual 21-12-12.pdf" },
                    { type: "file", name: "Brake OLC.pdf", url: "OLC/BRAKE/p-9075-tf_m1438.pdf" }
                    // 👇 TAMBAH FILE PDF MANUAL CPP DI BAWAH BARIS INI 👇
                    
                ]
            }
            // 👇 TAMBAH FOLDER UTAMA BARU UNTUK CPP DI BAWAH BARIS INI 👇
            
        ];

 const dataA2B = [
            {
                type: "folder",
                name: "BACKHOE LOADER",
                contents: [
                    { type: "file", name: "BACKHOE LOADER CAT 426.PDF", url: "A2B/BACKHOE LOADER/CAT 426_Suplementary Product Support Literature.pdf" },
                    { type: "file", name: "FILL CAPASITY.PDF", url: "A2B/BACKHOE LOADER/FILL CAPASITY 416F2.pdf" },
                    { type: "file", name: "LUBRICATION FISCOSITY.PDF", url: "A2B/BACKHOE LOADER/LUBRICATION FISCOSITY 416F2.pdf" },
                    { type: "file", name: "NONE.PDF", url: "A2B/BACKHOE LOADER/NONE.pdf" }
                    // 👇 TAMBAH FILE PDF MANUAL CPP DI BAWAH BARIS INI 👇
                    
                ]
            },
            {
                type: "folder",
                name: "EXCAVATOR LONG ARM",
                contents: [
                            { type: "file", name: "Cat320D-Part Book EIK_long arm buatan malaysia.pdf", url: "A2B/EXCAVATOR LONG ARM/Cat320D-Part Book EIK_long arm buatan malaysia.pdf" },
                            { type: "file", name: "FILL CAPASITY 320D2.pdf", url: "A2B/EXCAVATOR LONG ARM/FILL CAPASITY 320D2.pdf" },
                            { type: "file", name: "lubrication fiscosity 320d2.pdf", url: "A2B/EXCAVATOR LONG ARM/lubrication fiscosity 320d2.pdf" },
                            { type: "file", name: "QUANTITY OLI ALAT BERAT.xlsx", url: "A2B/EXCAVATOR LONG ARM/QUANTITY OLI ALAT BERAT.xlsx" }
                            // 👇 TAMBAH FILE PDF MAINTENANCE 2026 DI BAWAH BARIS INI 👇
                            
                        ]
                    },
            {
                type: "folder",
                name: "GOLF CAR",
                contents: [
                    { type: "file", name: "SERVICE PARTS MANUAL golfcar.pdf", url: "A2B/GOLF CAR/SERVICE PARTS MANUAL golfcar.pdf" }
                ]
            },
          {
                type: "folder",
                name: "HIAB CRANE",
                contents: [
                    { type: "file", name: "HIAB 710 Operators.pdf", url: "A2B/HIAB CRANE/HIAB 710 Operators.pdf" },
                    { type: "file", name: "OP  SP for 160T-4 sideno-olp 2019 4 (2).pdf", url: "A2B/HIAB CRANE/OP  SP for 160T-4 sideno-olp 2019 4 (2).pdf" }
                ]
            },
          {
                type: "folder",
                name: "TADANO",
                contents: [
                    { type: "file", name: "TADANO.pdf", url: "A2B/GOLF CAR/TADANO.pdf" }
                ]
            }
            // 👇 TAMBAH FOLDER UTAMA BARU UNTUK CPP DI BAWAH BARIS INI 👇
            
        ];

        const dataPORT = [
            {
                type: "folder",
                name: "CV01",
                contents: [
                    { type: "file", name: "Brake.pdf", url: "PORT/CV01/BRAKE/BSZ_e.pdf" }
                    //  TAMBAH FILE PDF UNTUK SOP PORT DI BAWAH BARIS INI 
                    
                ]
            },
            {
                type: "folder",
                name: "CV02",
                contents: [
                            { type: "file", name: "NONE NOW.pdf", url: "PORT/CV02/GANTINANTI.pdf" }
                            // 👇 TAMBAH FILE PDF LAPORAN 2026 DI BAWAH BARIS INI 👇
                            
                        ]
            },
            {
                type: "folder",
                name: "CV03",
                contents: [
                            { type: "file", name: "NONE NOW.pdf", url: "PORT/CV03/GANTINANTI.pdf" }
                            // 👇 TAMBAH FILE PDF LAPORAN 2026 DI BAWAH BARIS INI 👇
                            
                        ]
            },
                 {
                type: "folder",
                name: "RECLAIM FEEDER",
                contents: [
                            { type: "file", name: "Reclaim Feeder.pdf", url: "PORT/RECLAIM FEEDER/FalkGearbox_FB Feeder breaker.pdf" }
                            // 👇 TAMBAH FILE PDF LAPORAN 2026 DI BAWAH BARIS INI 👇
                            
                        ]
            }
            // 👇 TAMBAH FOLDER UTAMA BARU UNTUK PORT DI BAWAH BARIS INI 👇
            // (Jangan lupa tambahkan koma ',' di kurung kurawal '}' folder sebelumnya jika membuat folder baru)
            
        ];


        const dataCPP = [
            {
                type: "folder",
                name: "CV1.1",
                contents: [
                    { type: "file", name: "154. TDS PT. ARUTMIN INDONESIA_BW1400 x EP-800 4P x 10.0 x 5.0 x 616 Mtr _ Grade - M.pdf", url: "CPP/CV1.1/BELT CONVEYOR/154. TDS PT. ARUTMIN INDONESIA_BW1400 x EP-800 4P x 10.0 x 5.0 x 616 Mtr _ Grade - M.pdf" },
                    { type: "file", name: "WSM-01-6401-0, CV11 Belt Profile.pdf", url: "CPP/CV1.1/BELT CONVEYOR/WSM-01-6401-0, CV11 Belt Profile.pdf" },
                    { type: "file", name: "SIBRE SK4-M Handling Manual_114027.pdf", url: "CPP/CV1.1/BRAKE/SIBRE SK4-M Handling Manual_114027.pdf" },
                    { type: "file", name: "sibre-data-sheet-usb-cb8-e (003).pdf", url: "CPP/CV1.1/BRAKE/sibre-data-sheet-usb-cb8-e (003).pdf" },
                    { type: "file", name: "Siemens Gearbox B3DH (1).pdf", url: "CPP/CV1.1/GEARBOX/Siemens Gearbox B3DH (1).pdf" },
                    { type: "file", name: "(4) tbst0360_0410en (Component CT).pptx", url: "CPP/CV1.1/SCRAPPER/(4) tbst0360_0410en (Component CT).pptx" },
                    { type: "file", name: "(5) ti1t0490_0620en (CT installation).pptx", url: "CPP/CV1.1/SCRAPPER/(5) ti1t0490_0620en (CT installation).pptx" },
                    { type: "file", name: "(8) Component Pengenalan B6C.pptx", url: "CPP/CV1.1/SCRAPPER/(8) Component Pengenalan B6C.pptx" },
                    { type: "file", name: "(9) ti2t0821_0832en (B6 installation).pptx", url: "CPP/CV1.1/SCRAPPER/(9) ti2t0821_0832en (B6 installation).pptx" }
                        
                    // 👇 TAMBAH FILE PDF MANUAL CPP DI BAWAH BARIS INI 👇
                    
                ]
            },
            {
                type: "folder",
                name: "CV1.2",
                contents: [
                            { type: "file", name: "WSM-01-6501, CV12 Belt Profile.pdf", url: "CPP/CV1.2/BELT CONVEYOR/WSM-01-6501, CV12 Belt Profile.pdf" },
                            { type: "file", name: "SIBRE SK4-M Handling Manual_114027.pdf", url: "CPP/CV1.2/BRAKE/SIBRE SK4-M Handling Manual_114027.pdf" },
                            { type: "file", name: "sibre-data-sheet-usb-cb8-e (003).pdf", url: "CPP/CV1.2/BRAKE/sibre-data-sheet-usb-cb8-e (003).pdf" },
                            { type: "file", name: "H Type IOM.pdf", url: "CPP/CV1.2/SCRAPPER/H Type IOM.pdf" },
                            { type: "file", name: "IOM_H-type.pdf", url: "CPP/CV1.2/SCRAPPER/IOM_H-type.pdf.pdf" },
                            { type: "file", name: "MHS HD IOM.pdf", url: "CPP/CV1.2/SCRAPPER/MHS HD IOM.pdf" }
                            // 👇 TAMBAH FILE PDF MAINTENANCE 2026 DI BAWAH BARIS INI 👇
                ]
            },
            {
                type: "folder",
                name: "CV1.3",
                contents: [
                    { type: "file", name: "WSM-01-6602, CV13 Belt Profile.pdf", url: "CPP/CV1.2/BELT CONVEYOR/WSM-01-6602, CV13 Belt Profile.pdf" }
                ]
            },
                 {
                type: "folder",
                name: "FEEDER BREAKER",
                contents: [
                    { type: "file", name: "AI_Feeder Breaker@7-9-2012.pdf", url: "CPP/FEEDER BREAKER/AI_Feeder Breaker@7-9-2012.pdf" },
                    { type: "file", name: "AI_Feeder Breaker-WSM.pdf", url: "CPP/FEEDER BREAKER/AI_Feeder Breaker-WSM.pdf" },
                    { type: "file", name: "FB14430 - BF-32F-60-76F - NUSA TAMBANG PRATAMA.pdf", url: "CPP/FEEDER BREAKER/FB14430 - BF-32F-60-76F - NUSA TAMBANG PRATAMA.pdf" },
                    { type: "file", name: "Renold_Conveyor_Section3_0508-Installation n Maintenance.pdf", url: "CPP/FEEDER BREAKER/Renold_Conveyor_Section3_0508-Installation n Maintenance.pdf" }   
                ]
            },
                {
                type: "folder",
                name: "SIZER",
                contents: [
                    { type: "file", name: "AI_MVT 80003-WSM.pdf", url: "CPP/SIZER/AI_MVT 80003-WSM.pdf" },
                    { type: "file", name: "MVT80003 - SIZER MVT800x2500 NTP - ARUTMIN MULIA WEST - VER 1.pdf", url: "CPP/SIZER/MVT80003 - SIZER MVT800x2500 NTP - ARUTMIN MULIA WEST - VER 1.pdf" }   
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
    "GAMBAR/IMG-20260928-WA0007.jpg", // Ganti link gambar Anda
    "GAMBAR/IMG-20260928-WA80007.jpg"
];

window.onload = () => {
    // Inisialisasi awal
    switchMenu('port');
    
    // Set Poster
    const hariIni = new Date();
    const kunci = hariIni.getFullYear() + hariIni.getMonth() + hariIni.getDate();
    document.getElementById('daily-poster').src = daftarPoster[kunci % daftarPoster.length];
};

