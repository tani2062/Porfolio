
    function toggleMobileMenu() {
      const menu = document.getElementById('navigationMenu');
      menu.classList.toggle('is-active');
    }

    function openImageModal(element) {
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImage');
      
     
      const img = element.querySelector('img');
      
      if (img) {
        modalImg.src = img.src;
        modal.classList.add('is-active');
      }
    }

    function closeImageModal() {
      const modal = document.getElementById('imageModal');
      modal.classList.remove('is-active');
    }

    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { 
      threshold: 0.1 
    });


    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      scrollObserver.observe(card);
    });

    
    const navigationLinks = document.querySelectorAll('.navigation-menu a');
    navigationLinks.forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('navigationMenu').classList.remove('is-active');
      });
    });