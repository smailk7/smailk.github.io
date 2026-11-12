const DATA_BUKU = [
  {
    id: 1,
    judul: "demon slayer:Kimetsu no Yaibar",
    penulis: "Andrea Hirata",
    deskripsi: "Demon Slayer: Kimetsu no Yaiba menceritakan kisah Tanjiro Kamado, seorang remaja baik hati yang menjadi tulang punggung keluarga dengan menjual arang pada era Taisho di Jepang.",
    gambar: "https://cdn.phototourl.com/member/2026-11-12-184708e0-6179-4d86-a0f8-a5bb105001e7.jpg",
    halaman: [
      `<h3>Bab 1:Serial Anime Demon Slayer: Kimetsu no Yaiba bukan sekadar tentang aksi menebas iblis dengan teknik pernapasan dan visual yang memanjakan mata. Di balik keindahan animasi garapan Ufotable, tersimpan kisah tragis tentang ikatan keluarga, trauma, dan batas tipis antara manusia dan iblis yang saling terhubung erat.</p><br><p>Sembilan anak telah duduk di bangku kayu yang sudah goyah. Harapan mulai menipis seiring jarum jam yang terus berputar...</p>`,
      `<h3>Bab 1 (Lanjutan)</h3><p>Ketika harapan hampir pupus, dari kejauhan muncul Harun bersama ibunya. Harun, seorang anak istimewa yang tersenyum riang, berjalan perlahan menuju halaman sekolah.</p><br><p>Dengan hadirnya Harun, jumlah kami menjadi tepat 10 anak! Pak Harfan menghela napas lega, dan Bu Muslimah tersenyum menyambut kami semua.</p>`,
      `<h3>Bab 2: Pohon Filicium</h3><p>Sekolah kami tidak memiliki pagar, tidak ada lapangan olahraga, dan atapnya bocor di mana-mana saat hujan. Namun di bawah naungan pohon Filicium yang rindang di tengah halaman, kami belajar tentang dunia.</p><br><p>Di sinilah Lintang, jenius dari pesisir pantai, menunjukkan kecerdasan luar biasanya.</p>`
    ]
  },
  {
    id: 2,
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    deskripsi: "Perjalanan Minke di awal abad ke-20 melawan ketidakadilan zaman kolonial.",
    gambar: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    halaman: [
      `<h3>Bab 1: Perkenalan di Wonokromo</h3><p>Orang memanggil aku Minke. Sebuah nama yang diberikan oleh guru HBS-ku. Aku adalah seorang pribumi yang mendapat kehormatan belajar di sekolah Eropa.</p><br><p>Pena adalah senjataku, dan ilmu pengetahuan modern adalah jalan yang kupilih untuk memahami dunia.</p>`,
      `<h3>Bab 1 (Lanjutan)</h3><p>Suatu hari, temanku Robert Suurhof mengajakku berkunjung ke sebuah rumah besar di Wonokromo. Rumah itu milik keluarga Mellema yang tersohor.</p><br><p>Di sanalah aku pertama kali bertemu dengan Nyai Ontosoroh dan putrinya yang jelita, Annelies.</p>`
    ]
  },
  {
    id: 3,
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    deskripsi: "Panduan stoisisme untuk menjaga kedamaian mental di dunia yang penuh kekhawatiran.",
    gambar: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
    halaman: [
      `<h3>Bab 1: Manusia dan Khawatir</h3><p>Pernahkah kamu merasa cemas secara berlebihan tentang masa depan? Atau terus memikirkan perkataan orang lain yang menyakiti hatimu?</p><br><p>Kecemasan adalah hal universal yang dialami setiap manusia sejak ribuan tahun lalu.</p>`,
      `<h3>Bab 2: Dikotomi Kendali</h3><p>Filsafat Stoisisme mengajarkan dikotomi kendali: Ada hal-hal yang berada di bawah kendali kita (pikiran, tindakan, respon), dan ada yang di luar kendali kita.</p><br><p>Fokuslah hanya pada apa yang bisa kamu kendalikan untuk mencapai kedamaian jiwa.</p>`
    ]
  },
  {
    id: 4,
    judul: "Atomic Habits",
    penulis: "James Clear",
    deskripsi: "Cara mudah dan terbukti untuk membangun kebiasaan baik dan merubah hidup.",
    gambar: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80",
    halaman: [
      `<h3>Bab 1: Kekuatan 1% Every Day</h3><p>Sangat mudah untuk membesar-besarkan arti penting satu momen puncak dan mengecilkan arti penting perbaikan kecil setiap hari.</p><br><p>Jika Anda bisa menjadi 1% lebih baik setiap hari selama satu tahun, Anda akan berakhir 37 kali lebih baik saat tahun tersebut berakhir.</p>`,
      `<h3>Bab 2: Sistem vs Tujuan</h3><p>Tujuan adalah tentang hasil yang ingin Anda capai. Sistem adalah tentang proses yang mengarah pada hasil tersebut.</p><br><p>Jika Anda menginginkan hasil yang lebih baik, fokuslah pada sistem Anda sebagai gantinya.</p>`
    ]
  }
];

let activeBook = null;
let currentPageIndex = 0;

function renderBooks(books) {
  const container = document.getElementById('book-list');
  if (!container) return;
  container.innerHTML = '';

  if (books.length === 0) {
    container.innerHTML = '<p>Buku tidak ditemukan.</p>';
    return;
  }

  books.forEach(book => {
    container.innerHTML += `
      <div class="book-card">
        <img src="${book.gambar}" alt="${book.judul}">
        <div class="book-info">
          <div>
            <h3 class="book-title">${book.judul}</h3>
            <p class="book-author">Penulis: ${book.penulis}</p>
            <p class="book-desc">${book.deskripsi}</p>
          </div>
          <button onclick="openReader(${book.id})" class="btn btn-read" style="width: 100%;">📖 Baca Buku (${book.halaman.length} Hlm)</button>
        </div>
      </div>
    `;
  });
}

function openReader(id) {
  activeBook = DATA_BUKU.find(b => b.id === id);
  if (activeBook) {
    currentPageIndex = 0;
    document.getElementById('modalTitle').innerText = `${activeBook.judul} - ${activeBook.penulis}`;
    updatePageContent();
    document.getElementById('readerModal').style.display = 'flex';
  }
}

function updatePageContent() {
  if (!activeBook) return;

  document.getElementById('modalContent').innerHTML = activeBook.halaman[currentPageIndex];
  document.getElementById('pageNumber').innerText = `Halaman ${currentPageIndex + 1} dari ${activeBook.halaman.length}`;

  document.getElementById('prevBtn').disabled = (currentPageIndex === 0);
  document.getElementById('nextBtn').disabled = (currentPageIndex === activeBook.halaman.length - 1);
  
  document.getElementById('prevBtn').style.opacity = (currentPageIndex === 0) ? '0.5' : '1';
  document.getElementById('nextBtn').style.opacity = (currentPageIndex === activeBook.halaman.length - 1) ? '0.5' : '1';
}

function changePage(direction) {
  if (!activeBook) return;

  const newIndex = currentPageIndex + direction;
  if (newIndex >= 0 && newIndex < activeBook.halaman.length) {
    currentPageIndex = newIndex;
    updatePageContent();
    document.getElementById('modalContent').scrollTop = 0;
  }
}

function closeReader() {
  document.getElementById('readerModal').style.display = 'none';
}

function searchBook() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = DATA_BUKU.filter(b => 
    b.judul.toLowerCase().includes(query) || 
    b.penulis.toLowerCase().includes(query)
  );
  renderBooks(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  renderBooks(DATA_BUKU);
});
