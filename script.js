const DATA_BUKU = [
  {
    id: 1,
    judul: "Ke Mana Monster Sungai Mengembara",
    penulis: "khoem la",
    deskripsi: "Hari ini sekolah Niranheboh. Anak-anak mengaku kalau mereka baru saja melihat monster",
    gambar: "https://cdn.phototourl.com/anon/2026-11-19-7518207f-b6e1-4f69-b290-7f9a7bb0c8a5.jpg",
    filePdf: "KeManaMonsterSungaiMengembara.pdf" // Ganti dengan nama file PDF yang kamu upload di GitHub
  },
  {
    id: 2,
    judul: "di mana gogo",
    penulis: "soumya menon",
    deskripsi: "Hai, kawan! Apa kamu pernah ke kebun binatang?",
    gambar: "https://cdn.phototourl.com/anon/2026-11-19-3696ce4d-18cf-4e05-be40-6b12ad8be183.jpg",
    filePdf: "DiManaGogo(1).pdf"
  },
  {
    id: 3,
    judul: "Dunia Rahasia Sam",
    penulis: "Hari Kumar Nair",
    deskripsi: "Aku mimpi aku mendapatkan anak yang berani dan kurus, tapi aku anak yang berani. Aku tidak suka bangun pagi untuk ke sekolah.",
    gambar: "https://cdn.phototourl.com/anon/2026-11-19-26393f13-f02c-4fd5-91fc-ed1cc7a99491.jpg",
    filePdf: "DuniaRahasiaSam.pdf"
  },
  {
    id: 4,
    judul: "Di Mana Gogo(1)",
    penulis: "soumya menon",
    deskripsi: "oto mencari Gogo yang hilang dan akhirnya menemukannya di toko, makan pisang.",
    gambar: "https://cdn.phototourl.com/anon/2026-11-19-1e52be86-dda0-42e4-b494-dd7083c9e1cc.jpg",
    filePdf: "DiManaGogo(2).pdf"
  },
  {
    id: 5,
    judul: "Transportasi(1)",
    penulis: "bookbot",
    deskripsi: "Aku punya sepeda mainan dan ayah bisa mengendarai sepeda besar sendirian.",
    gambar: "https://cdn.phototourl.com/anon/2026-11-19-26393f13-f02c-4fd5-91fc-ed1cc7a99491.jpg",
    filePdf: "Transportasi(1).pdf"
  },
  {
    id: 6,
    judul: "Transportasi(2)",
    penulis: "bookbot",
    deskripsi: "Aku punya sepeda mainan dan ayah bisa mengendarai sepeda besar sendirian.",
    gambar: "https://cdn.phototourl.com/anon/2026-11-19-1e52be86-dda0-42e4-b494-dd7083c9e1cc.jpg",
    filePdf: "Transportasi(2).pdf"
  },
  {
    id: 7,
    judul: "Transportasi(3)",
    penulis: "bookbot",
    deskripsi: "Aku punya sepeda mainan dan ayah bisa mengendarai sepeda besar sendirian.",
    gambar: "https://cdn.phototourl.com/anon/2026-11-19-1e52be86-dda0-42e4-b494-dd7083c9e1cc.jpg",
    filePdf: "rtansportasi(3).pdf"
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
