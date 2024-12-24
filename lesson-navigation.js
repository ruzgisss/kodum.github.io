document.addEventListener('DOMContentLoaded', function() {
    const moduleLinks = document.querySelectorAll('.module-list a');
    const prevButton = document.querySelector('.prev-lesson');
    const nextButton = document.querySelector('.next-lesson');
    let currentLessonIndex = 0;

    // Tüm dersleri bir diziye alıyoruz
    const lessons = Array.from(moduleLinks);

    function updateNavigation() {
        // Aktif dersi buluyoruz
        currentLessonIndex = lessons.findIndex(link => link.classList.contains('active'));
        
        // Önceki/Sonraki butonlarının durumunu güncelliyoruz
        prevButton.disabled = currentLessonIndex === 0;
        nextButton.disabled = currentLessonIndex === lessons.length - 1;
    }

    // Sayfa yüklendiğinde navigasyonu güncelle
    updateNavigation();

    // Önceki ders butonuna tıklandığında
    prevButton.addEventListener('click', () => {
        if (currentLessonIndex > 0) {
            lessons[currentLessonIndex].classList.remove('active');
            lessons[currentLessonIndex - 1].classList.add('active');
            lessons[currentLessonIndex - 1].click();
            updateNavigation();
        }
    });

    // Sonraki ders butonuna tıklandığında
    nextButton.addEventListener('click', () => {
        if (currentLessonIndex < lessons.length - 1) {
            lessons[currentLessonIndex].classList.remove('active');
            lessons[currentLessonIndex + 1].classList.add('active');
            lessons[currentLessonIndex + 1].click();
            updateNavigation();
        }
    });

    // Her ders linkine tıklandığında
    moduleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            moduleLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            updateNavigation();
        });
    });
}); 