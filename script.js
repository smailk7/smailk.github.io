const DATA_BUKU = [
  {
    id: 1,
    judul: "Ke Mana Monster Sungai Mengembara",
    penulis: "khoem la",
    deskripsi: "Hari ini sekolah Niranheboh. Anak-anak mengaku kalau mereka baru saja melihat monster",
    gambar: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    filePdf: "Ke Mana Monster Sungai Mengembara.pdf" // Ganti dengan nama file PDF yang kamu upload di GitHub
  },
  {
    id: 2,
    judul: "di mana gogo",
    penulis: "soumya menon",
    deskripsi: "Toto bekerja di sebuah kebun binatang yang berada di sebelah hutan. Toto senang bisa bekerja di kebun binatang. Setiap hari, dia bertugas untuk menjaga dan mengawasi hewan-hewan di sana. Hari ini, Toto melihat kandang Gogo, si gorila kosong. Toto terkejut dan segera keluar mencarinya.",
    gambar: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    filePdf: "Di mana gogo.pdf"
  },
  {
    id: 3,
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    deskripsi: "Panduan stoisisme untuk menjaga kedamaian mental di dunia yang penuh kekhawatiran.",
    gambar: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
    filePdf: "filosofi-teras.pdf"
  },
  {
    id: 4,
    judul: "Atomic Habits",
    penulis: "James Clear",
    deskripsi: "Cara mudah dan terbukti untuk membangun kebiasaan baik dan merubah hidup.",
    gambar: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80",
    filePdf: "atomic-habits.pdf"
  }
];

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
          <button onclick="openPdf(${book.id})" class="btn btn-read" style="width: 100%;">📖 Baca PDF</button>
        </div>
      </div>
    `;
  });
}

function openPdf(id) {
  const book = DATA_BUKU.find(b => b.id === id);
  if (book) {
    document.getElementById('modalTitle').innerText = `${book.judul} - ${book.penulis}`;
    document.getElementById('pdfViewer').src = book.filePdf;
    document.getElementById('downloadBtn').href = book.filePdf;
    document.getElementById('readerModal').style.display = 'flex';
  }
}

function closeReader() {
  document.getElementById('readerModal').style.display = 'none';
  document.getElementById('pdfViewer').src = ''; // Hentikan loading PDF saat ditutup
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
