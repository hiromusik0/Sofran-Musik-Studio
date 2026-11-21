const ASSETS = {
  hero: "https://framerusercontent.com/images/UxUey9sihdz5I3WF1bigRaXKxVQ.png",
  room: "https://framerusercontent.com/images/gYsaiHrC2GmGhWAccyFWAHnGoB8.png",
  violin: "https://framerusercontent.com/images/e288xKmp6KsZ9LOSI5NS7j6h38.png",
  book1: "https://framerusercontent.com/images/PQOYYq7d8h5T5vzdxcbJzAYUmo.png",
  book2: "https://framerusercontent.com/images/sWTNKi7CWrXa8kQKLj7NP13X0yY.png",
  bookMock1: "https://framerusercontent.com/images/zVPSBGWUV8y2zysWj93p0j6soyE.png",
  bookMock2: "https://framerusercontent.com/images/94QLamhu8CxDwHcIwB19VGbwY0.png",
  score: "https://framerusercontent.com/images/8mfvGYk64L4vH5YLaxZxRRKQ4RQ.png",
  registration: "https://framerusercontent.com/images/ZItjGu43vyzrBhL6Yxdbhvx7Y.png"
};
const PAGES = {
  home:{title:"Sofran Musik Studio | Temukan Harmoni",description:"Sebuah ruang untuk mengenal musik lebih dalam, mengembangkan kemampuan, dan menemukan keindahan dalam setiap nada.",eyebrow:"WELCOME TO SOFRAN MUSIK STUDIO",headline:"HIDUPKAN CERITA<br><em>LEWAT MUSIK</em>",intro:"Kembangkan kemampuan, temukan karakter musikal, dan ciptakan karya yang bermakna melalui perjalanan belajar musik yang terarah, kreatif, dan inspiratif."},
  tentang:{title:"Tentang | Sofran Musik Studio",description:"Mengenal Sofran Musik Studio, filosofi belajar, Sofran Method, dan perjalanan musikal.",eyebrow:"SOFRAN MUSIK STUDIO / TENTANG KAMI",headline:"Mengenal Sofran<br><em>Musik Studio</em>",intro:"Ruang untuk mengenal musik, mengembangkan kemampuan, dan menemukan perjalanan musikal."},
  "sofran-method":{title:"Sofran Method | Sofran Musik Studio",description:"Kenali filosofi Terstruktur, Terukur, dan Teratur serta materi usulan Metode Sofran Vol I dan Vol II.",eyebrow:"METODE SOFRAN / FILOSOFI & MATERI",headline:"SOFRAN <em>METHOD</em>",intro:"Sebuah pendekatan pembelajaran biola yang dirancang untuk membantu murid memahami musik dan mengembangkan kemampuan bermain secara bertahap."},
  pengajar:{title:"Sopian Loren Sinaga, M.Sn. | Pengajar Sofran",description:"Profil, perjalanan bermusik, dan karya pendidikan biola Sopian Loren Sinaga, pendiri dan pencipta Sofran Method.",eyebrow:"SOFRAN MUSIK STUDIO / PROFIL PENGAJAR",headline:"Sang pendidik.<br><em>Sang musisi.</em>",intro:"Sopian Loren Sinaga, M.Sn. — Pemain Biola · Pendidik Musik · Konduktor Orkestra. Pendiri dan Pencipta Sofran Method."},
  galeri:{title:"Galeri — Sofran Musik Studio",description:"Momen, perjalanan, dan keindahan proses bermusik bersama Sofran Musik Studio.",eyebrow:"SOFRAN MUSIK STUDIO — GALERI",headline:"Setiap Nada<br><em>Memiliki Cerita.</em>",intro:"Jelajahi momen, perjalanan, dan keindahan proses bermusik bersama Sofran Musik Studio."},
  "toko-buku":{title:"Toko Buku | Sofran Musik Studio",description:"Buku Metode Sofran Vol I dan Vol II. Informasi buku dan pilihan pembelian resmi.",eyebrow:"TOKO BUKU / SOFRAN METHOD",headline:"SEBUAH PERJALANAN,<br><em>DIMULAI DARI SATU HALAMAN.</em>",intro:"Jelajahi Metode Sofran, panduan pembelajaran musik yang hadir dalam dua volume."},
  "lokasi-kontak":{title:"Lokasi & Kontak | Sofran Musik Studio",description:"Temukan lokasi Sofran Musik Studio di Medan dan hubungi pengajar melalui WhatsApp atau telepon.",eyebrow:"SOFRAN MUSIK STUDIO / LOKASI & KONTAK",headline:"Your musical<br><em>journey starts here.</em>",intro:"Temukan tempat di mana setiap nada memiliki cerita dan setiap perjalanan dimulai dengan sebuah langkah."},
  "mulai-belajar":{title:"Mulai Belajar | Sofran Musik Studio",description:"Mulai perjalanan belajar biola bersama Sofran Musik Studio.",eyebrow:"SOFRAN MUSIK STUDIO / MULAI BELAJAR",headline:"Your musical journey<br><em>begins here.</em>",intro:"Setiap perjalanan besar dimulai dari satu langkah kecil. Mari temukan potensi musikal Anda bersama Sofran Musik Studio."},
  pendaftaran:{title:"Pendaftaran Murid Baru | Sofran Musik Studio",description:"Formulir pendaftaran murid baru Sofran Musik Studio.",eyebrow:"PENDAFTARAN MURID BARU",headline:"LET’S GET TO<br><em>KNOW YOU.</em>",intro:"Kami ingin mengenal Anda lebih dekat. Lengkapi formulir pendaftaran berikut untuk memulai perjalanan belajar musik bersama Sofran Musik Studio."}
};
const NAV=[["Beranda","/"],["Sofran Method","/sofran-method"],["Galeri","/galeri"],["Lokasi & Kontak","/lokasi-kontak"],["Tentang","/tentang"],["Pengajar","/pengajar"],["Toko Buku","/toko-buku"]];
const pathKey=()=>location.pathname.replace(/^\/+|\/+$/g,"")||"home";
const link=(label,path,cls="")=>'<a class="'+cls+'" href="'+path+'">'+label+'</a>';
const img=(src,alt,cls="",extra="")=>'<img class="'+cls+'" src="'+src+'" alt="'+alt+'" loading="lazy" '+extra+'>';
function header(key){
 return '<header class="site-header" id="siteHeader"><nav class="nav"><a class="brand" href="/" aria-label="Sofran Musik Studio, beranda"><span class="brand-mark">𝄞</span><span class="brand-word">Sofran<small>Musik Studio</small></span></a><button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="navLinks" aria-label="Buka navigasi"><span></span><span></span></button><div class="nav-links" id="navLinks">'+NAV.map(([n,p])=>link(n,p,(p.replace(/^\//,"")===key||(!key&&p==="/")?"active":""))).join("")+'</div><a class="nav-cta" href="/pendaftaran">Mulai Belajar <span>↗</span></a></nav><div class="scroll-progress" id="scrollProgress"></div></header>';
}
function particles(){return '<div class="hero-particles" aria-hidden="true">'+Array.from({length:18},(_,i)=>'<i style="--i:'+i+';--x:'+((i*47)%97)+'%;--y:'+((i*31)%91)+'%;--d:'+(5+(i%5))+'s;--delay:-'+(i%7)+'s"></i>').join("")+'</div>'}
function hero(p,{image=ASSETS.hero,home=false,compact=false}={}){
 return '<section class="hero '+(home?'hero-home':'hero-page')+(compact?' hero-compact':'')+'" data-hero><div class="hero-image" style="background-image:url('+image+')" aria-hidden="true"></div><div class="hero-vignette"></div><div class="hero-musical-lines" aria-hidden="true"></div>'+particles()+'<div class="hero-inner container"><div class="eyebrow" data-reveal>'+p.eyebrow+'</div><h1 class="hero-title" data-word-reveal>'+p.headline+'</h1><p class="lead" data-reveal data-delay="260">'+p.intro+'</p>'+(home?'<div class="actions" data-reveal data-delay="420">'+link("Mulai Perjalananmu","/pendaftaran","btn") + link("Kenali Sofran","/tentang","btn secondary")+'</div><div class="hero-note" data-reveal data-delay="600">DENGARKAN DENGAN PEKA. RASAKAN DENGAN UTUH. MULAILAH DENGAN SATU NADA.</div>':'')+'</div><div class="hero-scroll" aria-hidden="true"><span></span> SCROLL TO EXPLORE</div><div class="hero-corner" aria-hidden="true">SOFRAN · EST. 2026</div></section>';
}
function heroBooks(p,kind){
 const shop=kind==="shop";
 return '<section class="hero hero-books '+(shop?'hero-shop':'hero-method')+'" data-hero><div class="hero-vignette"></div><div class="hero-musical-lines"></div>'+particles()+'<div class="hero-books-inner container"><div class="hero-books-copy"><div class="eyebrow" data-reveal>'+p.eyebrow+'</div><h1 class="hero-title" data-word-reveal>'+p.headline+'</h1><p class="lead" data-reveal data-delay="280">'+p.intro+'</p><div class="actions" data-reveal data-delay="430">'+(shop?link("Jelajahi Koleksi","#koleksi","btn"):link("Jelajahi Vol I","#vol1","btn")+link("Jelajahi Vol II","#vol2","btn secondary"))+'</div></div><div class="hero-book-pair" aria-label="Dua volume Metode Sofran"><div class="hero-book hero-book-one" data-reveal>'+img(ASSETS.bookMock1,"Mockup Metode Sofran Volume I")+'</div><div class="hero-book hero-book-two" data-reveal>'+img(ASSETS.bookMock2,"Mockup Metode Sofran Volume II")+'</div><div class="book-orbit" aria-hidden="true"></div></div><div class="hero-books-note"><span>SENI BELAJAR MUSIK, SATU HALAMAN DEMI SATU HALAMAN.</span><span>Mockup konseptual · bukan sampul resmi</span></div></div></section>';
}
function section(k,title,body,alt=false,cls=""){
 return '<section class="section '+(alt?'section-alt ':'')+cls+'"><div class="container"><div class="section-head" data-reveal><div class="kicker">'+k+'</div><h2>'+title+'</h2></div>'+body+'</div></section>';
}
function cards(items,cols=3){
 return '<div class="cards cols-'+cols+'">'+items.map((x,i)=>'<article class="card" data-reveal data-delay="'+(i*90)+'">'+(x.image?'<div class="card-image">'+img(x.image,x.alt||x.title)+'</div>':'')+'<div class="card-body"><div class="number">0'+(i+1)+'</div><h3>'+x.title+'</h3><p>'+x.text+'</p>'+(x.href?link(x.cta||"Jelajahi",x.href,"text-link"):"")+'</div></article>').join("")+'</div>';
}
function imagePanel(src,alt,caption=""){
 return '<figure class="image-panel" data-reveal>'+img(src,alt)+'<figcaption>'+caption+'</figcaption></figure>';
}
function home(){
 const items=[
  {title:"Metode Sofran",text:"Bangun fondasi musikal melalui metode belajar yang terarah, bertahap, dan menyenangkan.",image:ASSETS.hero,alt:"Panggung piano dan biola",href:"/sofran-method"},
  {title:"Para Pengajar",text:"Belajar bersama pendidik yang mendampingi setiap langkah perkembangan musikal Anda.",image:ASSETS.room,alt:"Ruang musik dengan partitur",href:"/pengajar"},
  {title:"Galeri Musik",text:"Saksikan proses, karya, dan momen yang membentuk perjalanan musikal Sofran.",image:ASSETS.violin,alt:"Detail instrumen biola",href:"/galeri"},
  {title:"Toko Buku",text:"Jelajahi buku pembelajaran Sofran untuk memperdalam teori dan praktik musik.",image:ASSETS.book1,alt:"Buku Metode Sofran",href:"/toko-buku"}
 ];
 return hero(PAGES.home,{home:true})+
 section("02 / TEMUKAN JALUR ANDA","Temukan Dunia Musik Sofran",cards(items,4),true,"home-explore")+
 section("03 / FILOSOFI SOFRAN","Mendengar dengan peka.<br><em>Berlatih dengan sadar.</em>",'<div class="philosophy-grid"><div class="philosophy-copy" data-reveal><div class="quote">“Setiap perjalanan musik dimulai dari satu nada.”</div><p>Sofran Musik Studio hadir sebagai ruang pendidikan musik yang menempatkan proses belajar dan kepekaan musikal di pusat pengalaman.</p>'+link("Tentang Sofran","/tentang","btn secondary")+'</div>'+imagePanel(ASSETS.violin,"Biola dengan pencahayaan artistik","MUSIK · RASA · PERJALANAN")+'</div>')+
 '<section class="closing-band"><div class="container" data-reveal><div class="kicker">YOUR NEXT CHAPTER</div><h2>Mulailah perjalanan<br><em>musikal Anda.</em></h2>'+link("Mulai Belajar","/pendaftaran","btn")+'</div></section>';
}
function tentang(){
 return hero(PAGES.tentang,{image:ASSETS.room})+
 section("01 / IDENTITAS & FILOSOFI","Lebih dari memainkan nada.",'<div class="split-grid"><div data-reveal><div class="quote">Mendengar dengan peka.<br>Berlatih dengan sadar.<br>Bermusik dengan rasa.</div><p>Sofran Musik Studio hadir sebagai ruang pendidikan musik yang menempatkan proses belajar dan kepekaan musikal di pusat pengalaman.</p><h3 class="serif">Visi kami</h3><p>Menumbuhkan pribadi yang peka, percaya diri, dan mampu mengekspresikan diri melalui musik.</p></div>'+imagePanel(ASSETS.hero,"Komposisi piano dan biola","ILUSTRASI KONSEPTUAL · BUKAN FOTO STUDIO")+'</div>')+
 section("02 / RUANG UNTUK BERTUMBUH","Pertemuan yang menghidupkan musik.",'<div class="split-grid">'+imagePanel(ASSETS.room,"Ilustrasi ruang musik","SUASANA PEMBELAJARAN")+'<div data-reveal><h3 class="serif">Belajar dalam suasana yang mendukung.</h3><p>Ruang untuk mengembangkan kepekaan musikal, membangun kebiasaan berlatih, dan menikmati proses belajar secara bertahap.</p><div class="notice">Dokumentasi kegiatan asli akan ditambahkan setelah tersedia.</div></div></div>',true)+
 section("03 / SOFRAN METHOD","Setahap demi setahap. Semakin bermakna.",'<div class="feature-strip" data-reveal><span>01 · TERSTRUKTUR</span><span>02 · TERUKUR</span><span>03 · TERATUR</span></div><p class="section-copy" data-reveal>Kenali Sofran Method sebagai bagian dari perjalanan belajar. Rincian materi dan urutan resmi disajikan pada halaman metode.</p>'+link("Jelajahi Sofran Method","/sofran-method","btn secondary"))+
 section("04 / KEGIATAN","Temukan ruang untuk berkembang.",cards([{title:"Pembelajaran",text:"Proses belajar musik yang bertahap dan berorientasi pada perkembangan murid."},{title:"Latihan",text:"Membangun konsistensi dan kebiasaan berlatih dengan sadar."},{title:"Apresiasi",text:"Mengembangkan keberanian untuk mengekspresikan musik."}],3));
}
function method(){
 const books='<div class="book-feature-grid"><article class="book-feature" id="vol1" data-reveal><div class="book-art">'+img(ASSETS.book1,"Mockup konseptual Metode Sofran Volume I")+'</div><div><span class="tag">VOLUME I</span><h3>Membangun dasar</h3><p>Pengenalan instrumen dan bagian biola, notasi musik, penggunaan jari 1, 2, dan 3, serta hubungan notasi dengan permainan instrumen.</p></div></article><article class="book-feature" id="vol2" data-reveal><div class="book-art">'+img(ASSETS.book2,"Mockup konseptual Metode Sofran Volume II")+'</div><div><span class="tag">VOLUME II</span><h3>Mengembangkan teknik</h3><p>Pengembangan teknik gesek, simbol musik baru, pemahaman notasi, penggunaan jari 4, serta koordinasi tangan kiri dan kanan.</p></div></article></div>';
 return heroBooks(PAGES["sofran-method"],"method")+
 section("01 / TIGA FONDASI","Satu filosofi. Tiga fondasi.",cards([{title:"Terstruktur",text:"Pembelajaran disusun berdasarkan urutan materi yang jelas dan bertahap."},{title:"Terukur",text:"Perkembangan belajar diperhatikan melalui kemampuan yang dapat diamati."},{title:"Teratur",text:"Pembelajaran dibangun melalui latihan yang konsisten dan kebiasaan belajar yang baik."}],3),true)+
 section("02 / PERJALANAN DALAM METODE","Dari fondasi menuju pengembangan.",books)+
 section("03 / CATATAN MATERI","Materi resmi Sofran Method",'<div class="notice notice-wide" data-reveal>Rincian materi pada halaman ini masih berupa usulan dan perlu dicocokkan dengan buku asli sebelum dipublikasikan. Diagram penjarian dan simbol akan dilengkapi setelah materi resmi terverifikasi.</div><div class="method-note-grid">'+cards([{title:"Fondasi instrumen",text:"Mengenal bagian biola, posisi, postur, dan cara memegang instrumen."},{title:"Notasi & ritme",text:"Mengenal notasi musik, ritme, tangga nada, dan simbol musik."},{title:"Teknik permainan",text:"Mengembangkan koordinasi tangan kiri dan kanan serta teknik gesek."},{title:"Ekspresi musikal",text:"Membangun musikalitas, interpretasi, dan repertoar."}],4)+'</div>',true)+
 '<section class="closing-band"><div class="container" data-reveal><div class="kicker">METODE SOFRAN</div><h2>Belajar dengan arah.<br><em>Bertumbuh dengan tujuan.</em></h2>'+link("Lihat Koleksi Buku","/toko-buku","btn")+'</div></section>';
}
function pengajar(){
 return hero(PAGES.pengajar,{image:ASSETS.hero})+
 section("PROFIL & PENDIDIKAN","Mengenal Sosok di Balik Sofran Method",'<div class="profile-grid">'+imagePanel(ASSETS.hero,"Ilustrasi biola dan notasi","ILUSTRASI KONSEPTUAL · BUKAN FOTO PENGAJAR")+'<div data-reveal><span class="tag">PENDIRI & PENCIPTA SOFRAN METHOD</span><h3 class="serif profile-name">Sopian Loren Sinaga, M.Sn.</h3><p>Pemain Biola · Pendidik Musik · Konduktor Orkestra</p><div class="quote">“Membangun Musisi Melalui Ilmu, Dedikasi, dan Harmoni.”</div><p>Perjalanan dalam dunia musik bukan hanya tentang memainkan instrumen, tetapi juga tentang memahami, mengembangkan, dan mewariskan ilmu musik.</p></div></div>')+
 section("01 / PROFIL & PENDIDIKAN","Perjalanan Akademis",'<div class="timeline"><article class="timeline-item" data-reveal><strong>2010 / PENELITIAN S1</strong><div><h3 class="serif">ISI Yogyakarta</h3><p>Penelitian mengenai perbandingan teknik biola dalam Konserto C Mayor karya Haydn.</p></div></article><article class="timeline-item" data-reveal><strong>2013 / PENELITIAN S2</strong><div><h3 class="serif">Universitas Sumatera Utara</h3><p>Penelitian mengenai penerapan pembelajaran praktik biola melalui buku Harfurg, Suzuki, dan ABRSM.</p></div></article></div><div class="notice">Catatan verifikasi: nama program studi, tahun kelulusan, dan rincian gelar akademik perlu dikonfirmasi. Tahun di atas merupakan tahun penelitian, bukan keterangan tahun kelulusan.</div>',true)+
 section("02 / PERJALANAN BERMUSIK","Dari Panggung ke Dunia Pendidikan",'<div class="timeline"><article class="timeline-item" data-reveal><strong>2006</strong><div><h3 class="serif">Gita Bahana Nusantara</h3><p>Berpartisipasi sebagai pemain biola dalam GBN.</p></div></article><article class="timeline-item" data-reveal><strong>2024</strong><div><h3 class="serif">Pengalaman sebagai Concert Master</h3><p>Keterlibatan sebagai Concert Master dalam kegiatan pertunjukan musik. Detail kegiatan dan dokumentasi asli dapat dilengkapi.</p></div></article><article class="timeline-item" data-reveal><strong>2025</strong><div><h3 class="serif">Pagelaran Dawai Sumut</h3><p>Pengalaman sebagai konduktor Orkestra HKBP Medan Sudirman dalam Pagelaran Dawai Sumut 2025.</p></div></article><article class="timeline-item" data-reveal><strong>2025</strong><div><h3 class="serif">eDeum Goes to BICF</h3><p>Pengalaman bermusik bersama eDeum dalam kegiatan BICF.</p></div></article></div>')+
 section("03 / KEAHLIAN","Keahlian dalam Dunia Musik",cards([{title:"Instrumen Biola",text:"Teknik permainan dan pengembangan kemampuan instrumen."},{title:"Pendidikan Musik",text:"Perancangan proses pembelajaran musik yang bertahap."},{title:"Konduktor Orkestra",text:"Pengalaman memimpin dan mengarahkan permainan ansambel."},{title:"Pengembangan Metode",text:"Menyusun pendekatan belajar melalui Sofran Method."}],4),true)+
 section("04 / PERJALANAN BELAJAR","Membangun Metode. Membentuk Musisi.",'<div class="split-grid"><div data-reveal><h3 class="serif">Setiap musisi memiliki perjalanan.</h3><p>Sofran Method dirancang sebagai pendamping proses belajar yang menghargai fondasi, konsistensi, dan perkembangan musikal.</p>'+link("Kenali Sofran Method","/sofran-method","btn secondary")+'</div>'+imagePanel(ASSETS.score,"Ilustrasi biola dan partitur","MUSIK · PENDIDIKAN · DEDIKASI")+'</div>');
}
function galeri(){
 const categories=["Semua","Pembelajaran","Pertunjukan","Pengajar","Siswa","Instrumen Musik","Kegiatan Studio"];
 const tiles=[["Arsip pembelajaran","Pembelajaran","Foto kegiatan belajar belum tersedia."],["Panggung musik","Pertunjukan","Dokumentasi pertunjukan belum tersedia."],["Instrumen","Instrumen Musik","Foto detail instrumen dapat ditambahkan."],["Pengajar","Pengajar","Potret pengajar asli belum tersedia."],["Kegiatan studio","Kegiatan Studio","Dokumentasi kegiatan studio belum tersedia."],["Perjalanan murid","Siswa","Dokumentasi perjalanan murid belum tersedia."]];
 return hero(PAGES.galeri,{image:ASSETS.hero})+
 section("01 / ARSIP VISUAL","Momen, Musik, dan Dedikasi.",'<p class="section-copy" data-reveal>Pilih kategori untuk menjelajahi arsip visual Sofran Musik Studio.</p><div class="filters" role="group" aria-label="Filter galeri">'+categories.map((x,i)=>'<button class="filter '+(!i?'active':'')+'" data-filter="'+x+'">'+x+'</button>').join("")+'</div><div class="gallery-grid">'+tiles.map((x,i)=>'<button class="gallery-tile" data-category="'+x[1]+'" data-gallery="'+i+'" data-reveal><span class="gallery-index">0'+(i+1)+'</span><span class="gallery-symbol">𝄞</span><strong>'+x[0]+'</strong><small>'+x[2]+'</small><span class="gallery-open">LIHAT DETAIL ↗</span></button>').join("")+'</div><div class="notice">Galeri ini belum berisi dokumentasi kegiatan asli. Placeholder ditandai dengan jelas dan bukan foto murid atau kegiatan nyata.</div>')+
 section("02 / MOMEN PILIHAN","Keindahan dalam Setiap Detail.",'<div class="gallery-feature" data-reveal>'+img(ASSETS.violin,"Ilustrasi artistik biola dan piano")+'<div><span class="tag">VISUAL KONSEPTUAL</span><h3 class="serif">Keindahan musik klasik.</h3><p>Ruang visual untuk dokumentasi instrumen, ruang latihan, dan perjalanan musikal.</p></div></div>',true)+
 '<div class="gallery-modal" id="galleryModal" aria-hidden="true"><button class="modal-close" aria-label="Tutup">×</button><div class="modal-content"><span class="tag" id="modalCategory"></span><h2 id="modalTitle"></h2><p id="modalText"></p></div></div>';
}
function toko(){
 return heroBooks(PAGES["toko-buku"],"shop")+
 section("01 / KOLEKSI METODE SOFRAN","Dua volume. Satu perjalanan.",'<div class="book-grid"><article class="book-card" data-reveal><div class="book-cover">'+img(ASSETS.bookMock1,"Mockup konseptual Metode Sofran Volume I")+'</div><div class="book-info"><span class="tag">VOLUME I</span><h3 class="serif">Metode Sofran (Vol I)</h3><p>Deskripsi resmi buku akan dilengkapi.</p><p class="book-price">Harga akan diinformasikan.</p></div></article><article class="book-card" data-reveal><div class="book-cover">'+img(ASSETS.bookMock2,"Mockup konseptual Metode Sofran Volume II")+'</div><div class="book-info"><span class="tag">VOLUME II</span><h3 class="serif">Metode Sofran (Vol II)</h3><p>Deskripsi resmi buku akan dilengkapi.</p><p class="book-price">Harga akan diinformasikan.</p></div></article></div><div class="notice">Mockup konseptual · bukan sampul resmi. Tautan resmi, ketersediaan, harga, ongkos kirim, dan ketentuan pemesanan akan dilengkapi oleh studio.</div>')+
 section("02 / PILIHAN PEMBELIAN","Mulai dari volume yang tepat.",'<div class="purchase-options">'+cards([{title:"Metode Sofran Vol I",text:"Untuk membangun fondasi awal pembelajaran biola."},{title:"Metode Sofran Vol II",text:"Untuk melanjutkan pengembangan teknik dan musikalitas."}],2)+'</div>',true);
}
function kontak(){
 return hero(PAGES["lokasi-kontak"],{image:ASSETS.room})+
 section("01 / TEMUKAN KAMI","Find Us, Feel the Music.",'<div class="contact-grid"><div class="contact-card" data-reveal><span class="tag">SOFRAN MUSIK STUDIO</span><h3 class="serif">Kunjungi Studio</h3><p>Jl. Kemenangan No. 114, Sidorejo Hilir, Medan Tembung, Kota Medan, Sumatera Utara.</p><div class="notice">Ketepatan titik lokasi belum diverifikasi; hubungi studio untuk memastikan tujuan sebelum berangkat.</div><a class="text-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Jl.%20Kemenangan%20No.%20114%2C%20Sidorejo%20Hilir%2C%20Medan%20Tembung">Buka petunjuk lokasi ↗</a></div><div class="map-frame" data-reveal><iframe loading="lazy" title="Peta lokasi Sofran Musik Studio" src="https://www.google.com/maps?q=Jl.%20Kemenangan%20No.%20114%2C%20Sidorejo%20Hilir%2C%20Medan%20Tembung&output=embed"></iframe></div></div>')+
 section("02 / MARI BERBINCANG","Let’s Connect.",'<div class="contact-cards"><article class="contact-card" data-reveal><span class="tag">PENGAJAR & PENDIRI</span><h3 class="serif">Sopian Loren Sinaga</h3><p>Hubungi pengajar untuk informasi pembelajaran dan pendaftaran.</p><p>WhatsApp: <a href="https://wa.me/6281392786115">0813 9278 6115</a></p><p>Telepon: <a href="tel:+6285277778656">0852 7777 8656</a></p></article><article class="contact-card" data-reveal><span class="tag">MULAI PERJALANAN</span><h3 class="serif">Mulai Belajar Bersama Sofran</h3><p>Jangan ragu untuk memulai perjalanan musikal Anda bersama Sofran Musik Studio.</p>'+link("Isi Formulir Pendaftaran","/pendaftaran","btn")+'</article></div>',true);
}
function mulai(){
 return hero(PAGES["mulai-belajar"],{image:ASSETS.hero})+
 section("MULAI PERJALANAN","Belajar Biola Bersama Sofran",'<div class="start-grid"><div data-reveal><p class="section-copy">Daftarkan diri Anda dan mulailah perjalanan mempelajari instrumen biola melalui metode pembelajaran yang terstruktur, terukur, dan teratur.</p><div class="feature-strip"><span>TERSTRUKTUR</span><span>TERUKUR</span><span>TERATUR</span></div>'+link("Isi Formulir Pendaftaran","/pendaftaran","btn")+'</div>'+imagePanel(ASSETS.violin,"Biola dengan pencahayaan artistik","SATU LANGKAH MENUJU PERJALANAN MUSIK")+'</div>');
}
const levels=["Pemula (belum pernah belajar biola)","Dasar (sudah mengenal biola)","Menengah (sudah memiliki pengalaman bermain)","Lanjutan (sudah menguasai teknik dasar dan ingin berkembang)"];
const experiences=["Belum pernah mengikuti les musik","Pernah mengikuti les musik","Sedang belajar biola secara mandiri","Pernah belajar biola dengan pengajar lain"];
const materials=["Pengenalan instrumen biola","Notasi musik","Teknik dasar memegang dan memainkan biola","Teknik gesek","Teknik penggunaan jari","Pengembangan kemampuan bermain biola"];
function daftar(){
 return hero(PAGES.pendaftaran,{image:ASSETS.registration})+
 section("BELAJAR DENGAN ARAH, BERTUMBUH DENGAN TUJUAN","Prinsip Sofran",cards([{title:"Terstruktur",text:"Setiap tahap pembelajaran dirancang secara sistematis."},{title:"Terukur",text:"Kemajuan dipantau melalui target dan evaluasi berkala."},{title:"Teratur",text:"Latihan dan proses pembelajaran dilakukan secara konsisten."}],3),true)+
 '<section class="section form-section"><div class="container"><div class="form-shell" data-reveal><div class="form-intro"><div class="kicker">FORMULIR PENDAFTARAN</div><h2>Mulai perjalanan<br><em>musikal Anda.</em></h2><p>Lengkapi formulir secara bertahap. Data yang dikirim akan masuk ke sistem pendaftaran Sofran Musik Studio.</p></div><div id="formNotice" class="form-notice" role="status" aria-live="polite">Lengkapi formulir pendaftaran. Pastikan informasi yang diberikan benar.</div><div class="form-progress"><div class="progress-track"><span id="progressFill"></span></div><div class="progress-labels"><span class="active">01 · Data diri</span><span>02 · Pembelajaran</span><span>03 · Konfirmasi</span></div></div><form id="enrollmentForm" novalidate><div class="form-step active" data-step="0"><h3>01. Data diri calon murid</h3><div class="form-grid"><label>Nama lengkap calon murid *<input name="name" required autocomplete="name" maxlength="250"></label><label>Tempat lahir *<input name="place" required maxlength="150"></label><label>Tanggal lahir *<input name="birth" type="date" required></label><label>Jenis kelamin *<select name="gender" required><option value="">Pilih salah satu</option><option>Laki-laki</option><option>Perempuan</option></select></label><label>Nomor WhatsApp aktif *<input name="phone" type="tel" required pattern="(08|628|\\+628)[0-9]{7,11}" title="Gunakan nomor Indonesia: 08…, 628…, atau +628…, tanpa spasi."></label><label>Email (opsional)<input name="email" type="email" autocomplete="email"></label><label class="full">Alamat tempat tinggal *<textarea name="address" rows="3" required></textarea></label></div></div><div class="form-step" data-step="1"><h3>02. Orang tua / wali</h3><p class="step-hint">Untuk calon murid berusia di bawah 18 tahun, data orang tua atau wali wajib diisi.</p><div class="form-grid"><label>Nama orang tua / wali <input name="guardian" maxlength="250"></label><label>Hubungan dengan calon murid <input name="relation" maxlength="100"></label><label>WhatsApp orang tua / wali <input name="guardianPhone" type="tel"></label><label>Email orang tua / wali (opsional)<input name="guardianEmail" type="email"></label></div><div class="notice" id="guardianHint">Data orang tua/wali akan diminta sesuai usia calon murid.</div></div><div class="form-step" data-step="2"><h3>03. Pilihan pembelajaran</h3><div class="form-grid"><label>Tingkat kemampuan *<select name="level" required><option value="">Pilih tingkat</option>'+levels.map(x=>'<option>'+x+'</option>').join("")+'</select></label><label>Pengalaman belajar *<select name="experience" required><option value="">Pilih pengalaman</option>'+experiences.map(x=>'<option>'+x+'</option>').join("")+'</select></label></div><fieldset><legend>Materi yang diminati (boleh pilih lebih dari satu)</legend>'+materials.map((x,i)=>'<label class="check-option"><input type="checkbox" name="materials" value="'+x+'"><span>'+x+'</span></label>').join("")+'</fieldset><label>Apakah memiliki instrumen biola sendiri? *<select name="instrument" required><option value="">Pilih salah satu</option><option>Ya</option><option>Tidak</option></select></label></div><div class="form-step" data-step="3"><h3>04. Preferensi jadwal</h3><div class="form-grid"><label>Hari yang diinginkan *<select name="day" required><option value="">Pilih hari</option>'+["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu","Fleksibel"].map(x=>'<option>'+x+'</option>').join("")+'</select></label><label>Waktu yang diinginkan *<select name="time" required><option value="">Pilih waktu</option>'+["Pagi","Siang","Sore","Malam","Fleksibel"].map(x=>'<option>'+x+'</option>').join("")+'</select></label><label class="full">Keterangan tambahan (opsional)<textarea name="notes" rows="4" maxlength="1000"></textarea></label></div></div><div class="form-step" data-step="4"><h3>05. Periksa pendaftaran</h3><div id="reviewSummary" class="review-summary"></div><label class="consent-option"><input type="checkbox" name="consent" required><span>Saya menyatakan bahwa informasi yang diberikan benar dan menyetujui penggunaan data ini untuk keperluan proses pendaftaran Sofran Musik Studio.</span></label></div><div class="form-error" id="formError" role="alert"></div><div class="form-actions"><button type="button" class="btn secondary" id="prevStep" disabled>Kembali</button><button type="button" class="btn" id="nextStep">Lanjutkan <span>→</span></button><button type="submit" class="btn" id="submitForm" hidden>Kirim Pendaftaran <span>↗</span></button></div></form></div></div></section>'+
 section("SETELAH MENDAFTAR","Langkah berikutnya",'<div class="next-steps">'+cards([{title:"Pemeriksaan",text:"Tim Sofran akan meninjau informasi pendaftaran yang dikirim."},{title:"Konfirmasi",text:"Tim akan menghubungi calon murid atau orang tua/wali."},{title:"Penjadwalan",text:"Preferensi jadwal akan dibahas lebih lanjut."},{title:"Memulai belajar",text:"Perjalanan belajar dimulai setelah konfirmasi dari studio."}],4)+'</div>');
}
function footer(){
 return '<footer class="site-footer"><div class="container footer-inner"><div class="footer-brand"><a class="brand" href="/"><span class="brand-mark">𝄞</span><span class="brand-word">Sofran<small>Musik Studio</small></span></a><p>Tradisi klasik. Jiwa masa depan.</p><p>© 2026 SOFRAN MUSIK STUDIO</p></div><div class="footer-connect"><div class="kicker">TETAP TERHUBUNG</div><p>WhatsApp dan media sosial akan dilengkapi.</p><p>Alamat resmi studio akan ditampilkan di sini.</p></div><div class="footer-nav">'+NAV.map(([n,p])=>link(n,p)).join("")+'</div></div></footer>';
}
function revealWords(){
 document.querySelectorAll("[data-word-reveal]").forEach(el=>{
  const html=el.innerHTML;
  if(el.dataset.wordsDone)return;
  el.dataset.wordsDone="1";
  el.innerHTML=html.replace(/(<br\s*\/?>)/gi," ").replace(/(<em>.*?<\/em>)/g,"§$1§").split(/\s+/).map((w,i)=>{
   if(!w)return "";
   if(w.startsWith("§")&&w.endsWith("§"))return '<span class="word" style="--word:'+i+'">'+w.slice(1,-1)+'</span>';
   return '<span class="word" style="--word:'+i+'">'+w+'</span>';
  }).join(" ");
 });
}
let revealObserver;
function initMotion(){
 revealWords();
 if(revealObserver)revealObserver.disconnect();
 const els=document.querySelectorAll("[data-reveal],.word");
 if("IntersectionObserver" in window){
  revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target)}
  }),{threshold:.12,rootMargin:"0px 0px -40px 0px"});
  els.forEach(el=>revealObserver.observe(el));
 }else els.forEach(el=>el.classList.add("is-visible"));
 document.querySelectorAll("[data-hero]").forEach(hero=>{
  hero.addEventListener("pointermove",e=>{
   if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
   const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
   hero.style.setProperty("--pointer-x",(x*18).toFixed(1)+"px");
   hero.style.setProperty("--pointer-y",(y*14).toFixed(1)+"px");
  },{passive:true});
 });
 document.querySelectorAll(".card,.book-card,.gallery-tile,.contact-card").forEach(card=>{
  card.addEventListener("pointermove",e=>{
   if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
   const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
   card.style.setProperty("--tilt-x",(y*-3).toFixed(2)+"deg");
   card.style.setProperty("--tilt-y",(x*3).toFixed(2)+"deg");
  });
  card.addEventListener("pointerleave",()=>{card.style.setProperty("--tilt-x","0deg");card.style.setProperty("--tilt-y","0deg")});
 });
}
function initHeader(){
 const toggle=document.getElementById("menuToggle"),links=document.getElementById("navLinks"),header=document.getElementById("siteHeader"),progress=document.getElementById("scrollProgress");
 toggle?.addEventListener("click",()=>{const open=links.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));document.body.classList.toggle("menu-open",open)});
 links?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{links.classList.remove("open");toggle?.setAttribute("aria-expanded","false");document.body.classList.remove("menu-open")}));
 const onScroll=()=>{const max=document.documentElement.scrollHeight-innerHeight,p=max>0?scrollY/max*100:0;if(progress)progress.style.width=p+"%";header?.classList.toggle("scrolled",scrollY>18)};
 window.addEventListener("scroll",onScroll,{passive:true});onScroll();
}
function initGallery(){
 const buttons=document.querySelectorAll("[data-filter]");
 buttons.forEach(btn=>btn.addEventListener("click",()=>{
  buttons.forEach(b=>b.classList.remove("active"));btn.classList.add("active");
  document.querySelectorAll(".gallery-tile").forEach(tile=>{tile.hidden=btn.dataset.filter!=="Semua"&&tile.dataset.category!==btn.dataset.filter});
 }));
 const modal=document.getElementById("galleryModal");
 document.querySelectorAll("[data-gallery]").forEach(tile=>tile.addEventListener("click",()=>{
  const idx=Number(tile.dataset.gallery),item=[["Arsip pembelajaran","Pembelajaran","Foto kegiatan belajar belum tersedia."],["Panggung musik","Pertunjukan","Dokumentasi pertunjukan belum tersedia."],["Instrumen","Instrumen Musik","Foto detail instrumen dapat ditambahkan."],["Pengajar","Pengajar","Potret pengajar asli belum tersedia."],["Kegiatan studio","Kegiatan Studio","Dokumentasi kegiatan studio belum tersedia."],["Perjalanan murid","Siswa","Dokumentasi perjalanan murid belum tersedia."]][idx];
  document.getElementById("modalCategory").textContent=item[1];document.getElementById("modalTitle").textContent=item[0];document.getElementById("modalText").textContent=item[2];modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");
 }));
 const close=()=>{modal?.classList.remove("open");modal?.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open")};
 modal?.querySelector(".modal-close")?.addEventListener("click",close);modal?.addEventListener("click",e=>{if(e.target===modal)close()});window.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
}
function initEnrollment(){
 const form=document.getElementById("enrollmentForm");if(!form)return;
 const steps=[...form.querySelectorAll(".form-step")],prev=document.getElementById("prevStep"),next=document.getElementById("nextStep"),submit=document.getElementById("submitForm"),fill=document.getElementById("progressFill"),labels=[...document.querySelectorAll(".progress-labels span")],error=document.getElementById("formError"),notice=document.getElementById("formNotice"),summary=document.getElementById("reviewSummary"),guardianHint=document.getElementById("guardianHint");
 let step=0,submissionId=crypto.randomUUID();
 const value=n=>String(form.elements[n]?.value||"").trim();
 const age=()=>{if(!value("birth"))return null;const b=new Date(value("birth")+"T00:00:00"),t=new Date();let a=t.getFullYear()-b.getFullYear();if(t.getMonth()<b.getMonth()||(t.getMonth()===b.getMonth()&&t.getDate()<b.getDate()))a--;return a};
 const minor=()=>age()!==null&&age()<18;
 const showError=m=>{error.textContent=m||"";notice.textContent=m||"Lengkapi formulir pendaftaran. Pastikan informasi yang diberikan benar.";notice.classList.toggle("error",!!m)};
 function update(){
  steps.forEach((s,i)=>s.classList.toggle("active",i===step));labels.forEach((l,i)=>l.classList.toggle("active",i===Math.min(step,2)));
  fill.style.width=((step+1)/5*100)+"%";prev.disabled=step===0;next.hidden=step===4;submit.hidden=step!==4;
  guardianHint.textContent=minor()?"Calon murid berusia di bawah 18 tahun. Nama, hubungan, dan WhatsApp orang tua/wali wajib diisi.":"Jika calon murid berusia 18 tahun atau lebih, data orang tua/wali bersifat opsional.";
  if(step===4)makeSummary();
  showError("");
 }
 function makeSummary(){
  const names={name:"Nama",birth:"Tanggal lahir",gender:"Jenis kelamin",phone:"WhatsApp",email:"Email",level:"Tingkat kemampuan",experience:"Pengalaman belajar",instrument:"Instrumen sendiri",day:"Hari pilihan",time:"Waktu pilihan"};
  summary.innerHTML=Object.entries(names).map(([k,n])=>'<div><span>'+n+'</span><strong>'+ (value(k)||"—")+'</strong></div>').join("")+'<div><span>Materi diminati</span><strong>'+[...form.querySelectorAll('[name="materials"]:checked')].map(x=>x.value).join(", ")+'</strong></div>'+(minor()?'<div><span>Orang tua/wali</span><strong>'+value("guardian")+' · '+value("guardianPhone")+'</strong></div>':"");
 }
 function validateCurrent(){
  const required=[...steps[step].querySelectorAll("[required]")].filter(el=>el.type!=="checkbox"||el.checked);
  for(const el of required){if(!el.checkValidity()||!el.value.trim()){el.reportValidity();return false}}
  if(step===1&&minor()&&(!value("guardian")||!value("relation")||!value("guardianPhone"))){showError("Data orang tua/wali wajib diisi untuk calon murid di bawah 18 tahun.");return false}
  return true;
 }
 next.addEventListener("click",()=>{if(!validateCurrent())return;step=Math.min(4,step+1);update();form.scrollIntoView({behavior:"smooth",block:"start"})});
 prev.addEventListener("click",()=>{step=Math.max(0,step-1);update();form.scrollIntoView({behavior:"smooth",block:"start"})});
 form.addEventListener("submit",async e=>{
  e.preventDefault();if(step!==4)return;
  if(!form.elements.consent.checked){showError("Mohon centang persetujuan sebelum mengirim.");return}
  const must=["name","place","birth","gender","phone","address","level","experience","instrument","day","time"];
  if(must.some(k=>!value(k))){step=0;update();showError("Masih ada data wajib yang belum lengkap. Periksa kembali formulir.");return}
  if(minor()&&(!value("guardian")||!value("relation")||!value("guardianPhone"))){step=1;update();showError("Data orang tua/wali wajib diisi untuk calon murid di bawah 18 tahun.");return}
  submit.disabled=true;submit.textContent="Mengirim…";showError("");
  const payload={client_submission_id:submissionId,student_name:value("name"),birth_place:value("place"),birth_date:value("birth"),gender:value("gender"),whatsapp:value("phone"),email:value("email")||null,address:value("address"),guardian_name:value("guardian")||null,guardian_relationship:value("relation")||null,guardian_whatsapp:value("guardianPhone")||null,guardian_email:value("guardianEmail")||null,skill_level:value("level"),learning_experience:value("experience"),interested_materials:[...form.querySelectorAll('[name="materials"]:checked')].map(x=>x.value),has_own_instrument:value("instrument")==="Ya",preferred_day:value("day"),preferred_time:value("time"),additional_notes:value("notes")||null,instrument:"Biola (Violin)",consent_given:true};
  try{
   const key="sb_publishable_o0qozJNXt796EWda3FSBvg_mROvNbOv";
   const response=await fetch("https://fbzohbrysygaziybxxqb.supabase.co/rest/v1/applications?on_conflict=client_submission_id",{method:"POST",headers:{"Content-Type":"application/json","apikey":key,"Authorization":"Bearer "+key,"Prefer":"resolution=ignore-duplicates,return=minimal"},body:JSON.stringify(payload)});
   if(!response.ok)throw new Error("HTTP "+response.status);
   notice.textContent="Pendaftaran berhasil dikirim ke Sofran Musik Studio. Tim kami akan meninjau data dan menghubungi Anda.";notice.classList.add("success");form.reset();step=0;submissionId=crypto.randomUUID();update();form.scrollIntoView({behavior:"smooth",block:"start"});
  }catch(err){showError("Pendaftaran belum berhasil dikirim. Periksa koneksi internet lalu coba kembali. Jika masalah berlanjut, hubungi Sofran Musik Studio.");}
  finally{submit.disabled=false;submit.innerHTML='Kirim Pendaftaran <span>↗</span>'}
 });
 const birth=form.elements.birth;birth.max=new Date().toISOString().slice(0,10);birth.addEventListener("change",()=>{if(step===1)update()});
 update();
}
function render(){
 let key=pathKey();if(!PAGES[key])key="home";
 document.title=PAGES[key].title;
 const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=PAGES[key].description;
 const body=({home,tentang,"sofran-method":method,pengajar,galeri,"toko-buku":toko,"lokasi-kontak":kontak,"mulai-belajar":mulai,pendaftaran:daftar})[key]();
 const app=document.getElementById("app");app.classList.remove("page-enter");app.innerHTML=header(key)+'<main>'+body+'</main>'+footer();void app.offsetWidth;app.classList.add("page-enter");
 initMotion();initHeader();initGallery();initEnrollment();
}
document.addEventListener("click",e=>{
 const a=e.target.closest('a[href^="/"]');if(!a||a.target==="_blank"||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
 e.preventDefault();const url=a.getAttribute("href");if(url===location.pathname)return;
 document.getElementById("app").classList.add("page-leave");
 setTimeout(()=>{history.pushState({},"",url);render();window.scrollTo({top:0,behavior:"instant"})},160);
});
window.addEventListener("popstate",()=>{render();window.scrollTo({top:0,behavior:"instant"})});
render();