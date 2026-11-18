const DATA_BUKU = [
  
 // 1. Data semua cerita kamu (tinggal tambah objek baru di sini kalau ada cerita baru)

  {
    judul: "Ke Mana Monster Sungai Mengembara?",
    genre: "monter",
    tipe: "pdf", // bisa 'pdf' atau 'gambar'
    fileUrl: "assets/Ke Mana Monster Sungai Mengembara.pdf",
    sinopsis: "Ini pengalaman luar biasa bagi Niran dankawan-kawan Semoga penelitian ini bisamembantu menjaga buaya Siam agar tidak punah."
  },
  {
    judul: "di Mana Gogo",
    genre: "Komedi ",
    tipe: "pdf",
    konten: "gogo mana.",
    sinopsis: "dimana gogo."
  }
];

// 2. Fungsi untuk menampilkan cerita ke halaman HTML
const wadahCerita = document.getElementById("wadah-cerita");

daftarCerita.forEach((cerita) => {
  const kartu = document.createElement("div");
  kartu.className = "kartu-cerita";

  let tampilanIsi = "";

  // Cek tipe kontennya (PDF, Gambar, atau Teks)
  if (cerita.tipe === "pdf") {
    tampilanIsi = `
      <iframe src="${cerita.fileUrl}" width="100%" height="600px" style="border:none;"></iframe>
      <p><a href="${cerita.fileUrl}" target="_blank">Buka PDF di tab baru</a></p>
    `;
  } else if (cerita.tipe === "gambar") {
    tampilanIsi = `<img src="${cerita.fileUrl}" alt="${cerita.judul}" style="width:100%; max-width:800px;">`;
  } else {
    tampilanIsi = `<p>${cerita.konten}</p>`;
  }

  kartu.innerHTML = `
    <h2>${cerita.judul}</h2>
    <small>Genre: ${cerita.genre}</small>
    <p><em>${cerita.sinopsis}</em></p>
    <div class="isi-cerita">${tampilanIsi}</div>
    <hr>
  `;

  wadahCerita.appendChild(kartu);
});


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
