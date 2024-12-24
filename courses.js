const courses = [
    // Web Geliştirme
    {
        title: "HTML & CSS Temelleri",
        category: "web",
        image: "images/html-css.png",
        description: "Web geliştirmenin temel yapı taşları",
        detailedContent: {
            overview: "HTML ve CSS web geliştirmenin temel yapı taşlarıdır. Bu kursta sıfırdan başlayarak modern web siteleri oluşturmayı öğreneceksiniz.",
            topics: [
                "HTML5 etiketleri ve semantik yapı",
                "CSS seçiciler ve özellikler",
                "Flexbox ve Grid sistemleri",
                "Responsive tasarım prensipleri",
                "CSS animasyonları ve dönüşümler"
            ],
            duration: "20 saat",
            level: "Başlangıç"
        }
    },
    {
        title: "JavaScript ES6+",
        category: "web",
        image: "images/javascript.png",
        description: "Modern JavaScript özellikleri",
        detailedContent: {
            overview: "Modern JavaScript'in tüm özelliklerini öğrenin. ES6+ ile gelen yenilikler ve pratik uygulamalar.",
            topics: [
                "Değişkenler ve Veri Tipleri",
                "Arrow Functions",
                "Promises ve Async/Await",
                "Modules ve Classes",
                "DOM Manipülasyonu"
            ],
            duration: "25 saat",
            level: "Orta Seviye"
        }
    },
    // ... diğer kurslar buraya eklenecek
];

function filterCourses(category) {
    const filteredCourses = category === 'all' 
        ? courses 
        : courses.filter(course => course.category === category);
    displayCourses(filteredCourses);
}

function displayCourses(coursesToShow) {
    const container = document.querySelector('.course-sets');
    container.innerHTML = coursesToShow.map(course => `
        <div class="course-set" onclick="showCourseDetails(${JSON.stringify(course).replace(/"/g, '&quot;')})">
            <img src="${course.image}" alt="${course.title}">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
        </div>
    `).join('');
}

function showCourseDetails(course) {
    // Varsa önceki açık modalı kapat
    const existingModal = document.querySelector('.course-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Yeni modal oluştur
    const modal = document.createElement('div');
    modal.className = 'course-modal';
    
    modal.innerHTML = `
        <div class="modal-content" onclick="event.stopPropagation()">
            <span class="close-button" onclick="closeModal(this)">&times;</span>
            <div class="modal-header">
                <img src="${course.image}" alt="${course.title}">
                <h2>${course.title}</h2>
            </div>
            <div class="modal-body">
                <div class="course-info">
                    <span class="badge">${course.detailedContent.level}</span>
                    <span class="badge">${course.detailedContent.duration}</span>
                </div>
                <h3>Kurs Açıklaması</h3>
                <p>${course.detailedContent.overview}</p>
                
                <h3>Öğrenilecek Konular</h3>
                <ul>
                    ${course.detailedContent.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
                
                <button class="start-course-btn" onclick="startCourse('${course.title}')">Kursa Başla</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Modal dışına tıklandığında kapatma
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });

    // ESC tuşuna basıldığında modalı kapat
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(modal);
        }
    });
}

// Modal kapatma fonksiyonu
function closeModal(element) {
    const modal = element.closest('.course-modal');
    if (modal) {
        modal.remove();
    }
}

// Kursa başlama fonksiyonu
function startCourse(courseTitle) {
    alert(`${courseTitle} kursuna başlıyorsunuz!`);
    // Burada kursa yönlendirme yapılabilir
}

// Event Listeners
document.querySelector('.category-filter').addEventListener('change', (e) => {
    filterCourses(e.target.value);
});

// Sayfa yüklendiğinde tüm kursları göster
window.addEventListener('load', () => {
    filterCourses('all');
});

// Ana sayfa kutucuklarını gösteren fonksiyon
function showHomePage() {
    const container = document.querySelector('.course-sets');
    container.innerHTML = `
        <a href="web-development.html" class="course-set">
            <img src="https://www.p92.hu/binaries/content/gallery/p92website/technologies/htmlcssjs-details.png" alt="HTML, CSS, JS">
            <h3>Web Geliştirme Temelleri</h3>
            <p>HTML, CSS, JavaScript ve daha fazlası...</p>
        </a>
        
        <a href="react-course.html" class="course-set">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React">
            <h3>React.js</h3>
            <p>Modern web uygulamaları geliştirme</p>
        </a>

        <a href="vue-course.html" class="course-set">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" alt="Vue.js">
            <h3>Vue.js</h3>
            <p>Progressive JavaScript Framework</p>
        </a>

        <a href="flutter-course.html" class="course-set">
            <img src="https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg" alt="Flutter">
            <h3>Flutter</h3>
            <p>Cross-platform mobil uygulama geliştirme</p>
        </a>

        <a href="python-course.html" class="course-set">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python">
            <h3>Python</h3>
            <p>Temel seviyeden ileri seviyeye Python</p>
        </a>

        <a href="java-course.html" class="course-set">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" alt="Java">
            <h3>Java</h3>
            <p>Nesne yönelimli programlama temelleri</p>
        </a>

        <a href="sql-course.html" class="course-set">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL">
            <h3>SQL Temelleri</h3>
            <p>Veritabanı yönetimi ve sorgulama</p>
        </a>

        <a href="mongodb-course.html" class="course-set">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="MongoDB">
            <h3>MongoDB</h3>
            <p>NoSQL veritabanı yönetimi</p>
        </a>

        <a href="docker-course.html" class="course-set">
            <img src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" alt="Docker">
            <h3>Docker</h3>
            <p>Container teknolojileri ve orkestrasyon</p>
        </a>

        <a href="tensorflow-course.html" class="course-set">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png" alt="TensorFlow">
            <h3>TensorFlow ile AI</h3>
            <p>Yapay zeka modelleri geliştirme</p>
        </a>
    `;

    // Varsa açık modalı kapat
    const existingModal = document.querySelector('.course-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Kategori filtresini sıfırla
    const categoryFilter = document.querySelector('.category-filter');
    if (categoryFilter) {
        categoryFilter.value = 'all';
    }
}

// Sayfa yüklendiğinde ana sayfayı göster
window.addEventListener('load', showHomePage);

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const categoryFilter = document.querySelector('.category-filter');
    const courseSets = document.querySelectorAll('.course-set');

    function filterCourses() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        courseSets.forEach(course => {
            const title = course.querySelector('h3').textContent.toLowerCase();
            const description = course.querySelector('p').textContent.toLowerCase();
            const matchesSearch = title.startsWith(searchTerm) || description.startsWith(searchTerm);
            const matchesCategory = selectedCategory === 'all' || course.dataset.category === selectedCategory;

            if (matchesSearch && matchesCategory) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterCourses();
        }
    });
    
    categoryFilter.addEventListener('change', filterCourses);

    // Arama kutusuna odaklandığında otomatik sayfa yenilemeyi engelle
    searchInput.addEventListener('focus', function(e) {
        e.preventDefault();
    });
});