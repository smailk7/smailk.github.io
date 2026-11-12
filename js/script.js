const DATA_BUKU = [
  {
    id: 1,
    judul: "Demon slayer:Kimetsu no Yaiba",
    penulis: "	Koyoharu Gotōge",
    deskripsi: "Demon Slayer: Kimetsu no Yaiba menceritakan kisah Tanjiro Kamado, seorang remaja baik hati yang menjadi tulang punggung keluarga dengan menjual arang pada era Taisho di Jepang.",
    gambar: "https://cdn.phototourl.com/member/2026-11-12-184708e0-6179-4d86-a0f8-a5bb105001e7.jpg",
    isi: `
      <h3>Bab 1: embantaian Keluarga</h3>
      <p>•  Suatu hari, Tanjiro terpaksa menginap di luar rumah karena peringatan adanya iblis (Oni). Saat pulang keesokan paginya, ia mendapati seluruh keluarganya dibantai oleh raja iblis, Muzan Kibutsuji.
</p>
      <br>
      <p>Nezuko Berubah: Hanya satu anggota keluarga yang selamat, yaitu adiknya bernama Nezuko, tetapi ia telah terinfeksi dan berubah menjadi iblis. Meskipun begitu, Nezuko masih memiliki sisa kesadaran dan tidak memangsa manusia.</p>
      <br>
      <p>Sejak hari itu, petualangan kami yang penuh dengan impian, persahabatan, dan perjuangan dimulai...</p>
    `
  },
  {
    id: 2,
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    deskripsi: "Perjalanan Minke di awal abad ke-20 melawan ketidakadilan zaman kolonial.",
    gambar: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    isi: `
      <h3>Bab 1: Perkenalan di Wonokromo</h3>
      <p>Orang memanggil aku Minke. Sebuah nama yang diberikan oleh guru HBS-ku. Aku adalah seorang pribumi yang mendapat kehormatan belajar di sekolah Eropa.</p>
      <br>
      <p>Suatu hari, temanku Robert Suurhof mengajakku berkunjung ke sebuah rumah besar di Wonokromo. Di sanalah aku pertama kali bertemu dengan Nyai Ontosoroh, wanita mandiri yang luar biasa, dan putrinya yang jelita, Annelies Mellema.</p>
      <br>
      <p>Pertemuan itu mengubah seluruh alur kehidupanku selamanya...</p>
    `
  },
  {
    id: 3,
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    deskripsi: "Panduan stoisisme untuk menjaga kedamaian mental di dunia yang penuh kekhawatir.",
    gambar: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
    isi: `
      <h3>Bab 1: Manusia dan Khawatir</h3>
      <p>Pernahkah kamu merasa cemas secara berlebihan tentang masa depan? Atau terus memikirkan perkataan orang lain yang menyakiti hatimu?</p>
      <br>
      <p>Filsafat Stoisisme atau Filosofi Teras mengajarkan dikotomi kendali: Ada hal-hal yang berada di bawah kendali kita (pikiran, tindakan, respon kita), dan ada hal-hal yang di luar kendali kita (pendapat orang, cuaca, masa lalu).</p>
      <br>
      <p>Kedamaian sejati tercipta saat kita fokus hanya pada apa yang bisa kita kendalikan...</p>
    `
  },
  {
    id: 4,
    judul: "Atomic Habits",
    penulis: "James Clear",
    deskripsi: "Cara mudah dan terbukti untuk membangun kebiasaan baik dan merubah hidup.",
    gambar: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80",
    isi: `
      <h3>Bab 1: Kekuatan Dahsyat Perubahan 1%</h3>
      <p>Sangat mudah untuk membesar-besarkan arti penting satu momen puncak dan mengecilkan arti penting pembuatan perbaikan kecil setiap hari.</p>
      <br>
      <p>Sering kali kita meyakinkan diri sendiri bahwa keberhasilan besar menuntut aksi yang sama besarnya. Padahal, perbaikan 1% setiap hari dalam satu tahun akan membuat Anda 37 kali lebih baik saat tahun berakhir.</p>
      <br>
      <p>Kebiasaan adalah bunga majemuk dari perbaikan diri...</p>
    `
  },
  {
  id: 5,
  judul: "Judul Buku Baru",
  penulis: "Nama Penulis",
  deskripsi: "Deskripsi singkat tentang isi buku ini.",
  gambar: "https://link-gambar-sampul.jpg",
  halaman: [
    `<h3>Bab 1: Judul Bab</h3><p>Teks isi halaman 1...</p>`,
    `<h3>Bab 1 (Lanjutan)</h3><p>Teks isi halaman 2...</p>`,
    `<h3>Bab 2: Judul Bab Baru</h3><p>Teks isi halaman 3...</p>`
  ]
}
];

// Menampilkan daftar buku
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
          <button onclick="readBook(${book.id})" class="btn btn-read" style="width: 100%;">📖 Baca Sekarang</button>
        </div>
      </div>
    `;
  });
}

// Buka modal untuk membaca buku
function readBook(id) {
  const book = DATA_BUKU.find(b => b.id === id);
  if (book) {
    document.getElementById('modalTitle').innerText = `${book.judul} - ${book.penulis}`;
    document.getElementById('modalContent').innerHTML = book.isi;
    document.getElementById('readerModal').style.display = 'flex';
  }
}

// Tutup modal
function closeReader() {
  document.getElementById('readerModal').style.display = 'none';
}

// Pencarian buku
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
