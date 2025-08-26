(function () {
    "use strict";
  
    window.addEventListener("load", function () {
      /**
       * Apply .scrolled class to the body as the page is scrolled down
       */
      function toggleScrolled() {
        const selectBody = document.body;
        const selectHeader = document.querySelector("#header");
        if (
          selectHeader &&
          (selectHeader.classList.contains("scroll-up-sticky") ||
            selectHeader.classList.contains("sticky-top") ||
            selectHeader.classList.contains("fixed-top"))
        ) {
          window.scrollY > 100
            ? selectBody.classList.add("scrolled")
            : selectBody.classList.remove("scrolled");
        }
      }
  
      document.addEventListener("scroll", toggleScrolled);
      toggleScrolled();
  
      /**
       * Mobile nav toggle
       */
      const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
  
      function mobileNavToogle() {
        document.body.classList.toggle("mobile-nav-active");
        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.classList.toggle("bi-list");
          mobileNavToggleBtn.classList.toggle("bi-x");
        }
      }
  
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
      }
  
      /**
       * Hide mobile nav on same-page/hash links
       */
      document.querySelectorAll("#navmenu a").forEach((navmenu) => {
        navmenu.addEventListener("click", () => {
          if (document.body.classList.contains("mobile-nav-active")) {
            mobileNavToogle();
          }
        });
      });
  
      /**
       * Toggle mobile nav dropdowns
       */
      document.querySelectorAll(".navmenu .toggle-dropdown").forEach((toggleBtn) => {
        toggleBtn.addEventListener("click", function (e) {
          e.preventDefault();
          this.parentNode?.classList.toggle("active");
          this.parentNode?.nextElementSibling?.classList.toggle("dropdown-active");
          e.stopImmediatePropagation();
        });
      });
  
      /**
       * Preloader
       */
      const preloader = document.querySelector("#preloader");
      if (preloader) {
        preloader.remove();
      }
  
      /**
       * Scroll top button
       */
      const scrollTop = document.querySelector(".scroll-top");
  
      function toggleScrollTop() {
        if (scrollTop) {
          window.scrollY > 100
            ? scrollTop.classList.add("active")
            : scrollTop.classList.remove("active");
        }
      }
  
      if (scrollTop) {
        scrollTop.addEventListener("click", (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
  
      toggleScrollTop();
      document.addEventListener("scroll", toggleScrollTop);
  
      /**
       * AOS Animation
       */
      if (typeof AOS !== "undefined") {
        AOS.init({
          duration: 600,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      }
  
      /**
       * GLightbox Init
       */
      if (typeof GLightbox !== "undefined") {
        GLightbox({ selector: ".glightbox" });
      }
  
      /**
       * PureCounter Init
       */
      if (typeof PureCounter !== "undefined") {
        new PureCounter();
      }
  
      /**
       * Swiper Sliders Init
       */
      function initSwiper() {
        if (typeof Swiper === "undefined") return;
  
        document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
          const configEl = swiperElement.querySelector(".swiper-config");
          if (configEl) {
            let config = JSON.parse(configEl.innerHTML.trim());
            if (swiperElement.classList.contains("swiper-tab")) {
              if (typeof initSwiperWithCustomPagination === "function") {
                initSwiperWithCustomPagination(swiperElement, config);
              }
            } else {
              new Swiper(swiperElement, config);
            }
          }
        });
      }
  
      initSwiper();
  
      /**
       * Isotope Layout
       */
      if (typeof Isotope !== "undefined" && typeof imagesLoaded !== "undefined") {
        document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
          const layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
          const filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
          const sort = isotopeItem.getAttribute("data-sort") ?? "original-order";
  
          let initIsotope;
  
          imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
            initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
              itemSelector: ".isotope-item",
              layoutMode: layout,
              filter: filter,
              sortBy: sort,
            });
          });
  
          isotopeItem.querySelectorAll(".isotope-filters li").forEach(function (filters) {
            filters.addEventListener("click", function () {
              const active = isotopeItem.querySelector(".isotope-filters .filter-active");
              if (active) active.classList.remove("filter-active");
              this.classList.add("filter-active");
              initIsotope.arrange({ filter: this.getAttribute("data-filter") });
  
              if (typeof AOS !== "undefined") {
                AOS.refresh();
              }
            });
          });
        });
      }
  
      /**
       * Scroll to hash section on load
       */
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            const scrollMarginTop = getComputedStyle(section).scrollMarginTop || "0";
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: "smooth",
            });
          }, 100);
        }
      }
  
      /**
       * Scrollspy
       */
      const navmenulinks = document.querySelectorAll(".navmenu a");
  
      function navmenuScrollspy() {
        navmenulinks.forEach((navmenulink) => {
          if (!navmenulink.hash) return;
          const section = document.querySelector(navmenulink.hash);
          if (!section) return;
  
          const position = window.scrollY + 200;
          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            document
              .querySelectorAll(".navmenu a.active")
              .forEach((link) => link.classList.remove("active"));
            navmenulink.classList.add("active");
          } else {
            navmenulink.classList.remove("active");
          }
        });
      }
  
      navmenuScrollspy();
      document.addEventListener("scroll", navmenuScrollspy);
    });
  })();
  