# Ponytail

Project website pembelajaran coding untuk pameran karya guru IT. Fokus utamanya mengambil kategori nomor 5 (Aplikasi/Website Pembelajaran), tapi di dalamnya sekalian digabungkan dengan nomor 2 (Video Pembelajaran) dan nomor 6 (Game Edukasi) supaya materinya nggak cuma teks biasa.

Untuk alur latihan coding-nya sendiri terinspirasi dari `tlx.toki.id`, di mana siswa bisa baca materi sekaligus langsung praktik ngoding di halaman yang sama.

## Gambaran Fitur

- Landing page dibuat lebih santai dan interaktif (ada semacam feed/showcase karya), jadi pas baru dibuka tampilannya nggak kaku seperti halaman login LMS pada umumnya.
- Sistem login dan hak akses dipisah antara User (siswa) dan Admin (guru).
- Halaman belajar pakai layout split-screen. Bagian kiri untuk baca materi, nonton video penjelasan dari guru, dan baca soal. Bagian kanan langsung code editor untuk nulis dan submit kode dari browser tanpa perlu install compiler di laptop.
- Pengecekan kode jalan otomatis. Kalau output sesuai kunci jawaban, statusnya langsung Accepted dan ulasan materinya kebuka.
- Ada mini-game edukasi (Bug Hunter) buat latihan cari error sintaks, plus sistem XP dan ranking kelas.

## Struktur & Teknologi

Project ini pakai pendekatan gabungan biar tampilan bebas di-custom tapi manajemen kelasnya tetap rapi:

- **Frontend (React / Next.js + Tailwind CSS)**
  Menangani semua tampilan antarmuka mulai dari landing page, halaman split-screen coding, pemutar video, sampai mini-game.
- **Backbone (Moodle LMS)**
  Dipakai di belakang layar lewat REST API / Web Services untuk ngurus autentikasi akun (User & Admin), daftar kursus, dan rekap nilai siswa.
- **Auto-Grader (Judge0 API)**
  Mesin yang ngejalanin kode C++/Python dari siswa di dalam sandbox, sekaligus ngecek batas waktu, memori, dan kecocokan output secara otomatis.