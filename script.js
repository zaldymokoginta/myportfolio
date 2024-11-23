var navbar = document.getElementById("navbar");
window.onscroll = function () {
    if (window.scrollY > 22) {
        navbar.classList.add("scroll-shadow"); // Add shadow when scrolling down
    } else {
        navbar.classList.remove("scroll-shadow"); // Remove shadow when at the top
    }
};

window.onload = function() {
    // Get the popup element
    const popup = document.getElementById("popup");
    
    // Add the "show" class to make it visible with smooth transition
    popup.classList.add("show");
    
    // Remove the "show" class after 2 seconds to hide it smoothly
    setTimeout(function() {
        popup.classList.remove("show");
    }, 3000);
};


const toggleButton = document.getElementById('toggleButton');
const icon = document.getElementById('icon');

// Event listener untuk toggle mode
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Ubah ikon berdasarkan mode saat ini
    if (document.body.classList.contains('dark-mode')) {
        icon.src = './Images/sun.png';  // Path ke ikon matahari
        icon.alt = 'Sun Icon';
    } else {
        icon.src = './Images/moon.png'; // Path ke ikon bulan
        icon.alt = 'Moon Icon';
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const zoomableElements = document.querySelectorAll(".zoomable");
    let activeElement = null;
  
    zoomableElements.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        // Kembalikan elemen aktif sebelumnya ke ukuran awal
        if (activeElement && activeElement !== element) {
          activeElement.classList.remove("active");
        }
  
        // Toggle zoom untuk elemen yang diklik
        element.classList.toggle("active");
        activeElement = element.classList.contains("active") ? element : null;
      });
    });
  
    // Kembalikan ke ukuran awal ketika mengklik di luar gambar/video
    document.addEventListener("click", () => {
      if (activeElement) {
        activeElement.classList.remove("active");
        activeElement = null;
      }
    });
  });
  
  document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  });
  
// Fungsi untuk toggle mode
function toggleMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode'); // Toggle kelas dark-mode
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Simpan preferensi mode
}

// Saat halaman dimuat, baca preferensi dari Local Storage
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme'); // Ambil data dari Local Storage
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode'); // Terapkan dark mode jika tersimpan
  }
});

// Event listener untuk tombol
document.getElementById('toggleButton').addEventListener('click', toggleMode);