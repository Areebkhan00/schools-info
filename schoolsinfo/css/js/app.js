// SchoolsInfo - Main JavaScript

// Schools Data
const schoolsData = [
  {
    id: 1,
    name: "Greenwood International School",
    description: "A premier international school offering world-class education with modern facilities and a comprehensive curriculum designed for holistic development.",
    image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/fb6d6341891357fba72b18f665b4fbb8a6915769293cf0a4e6150920a13e0dfd.png",
    location: "123 Education Lane, Central District",
    maxIntake: 500,
    hasLibrary: true,
    hasCanteen: true,
    hasBoarding: false,
    hasSports: true,
    facilities: ["Library", "Canteen", "Sports", "Labs"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215874046697!2d-73.98823492346635!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    address: "123 Education Lane, Central District, City - 10001",
    phone: "+1 234-567-8901",
    email: "info@greenwood.edu"
  },
  {
    id: 2,
    name: "Riverside Academy",
    description: "Located by the scenic riverside, our academy specializes in sports education while maintaining high academic standards and character development.",
    image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/ec21fab4496dd4fe92403fe573a21df1d0b271d25d20852a0ad0342cc7798d1f.png",
    location: "456 River Road, Waterfront Area",
    maxIntake: 400,
    hasLibrary: true,
    hasCanteen: true,
    hasBoarding: true,
    hasSports: true,
    facilities: ["Library", "Canteen", "Boarding", "Sports", "Swimming Pool"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8649349561844!2d-73.97499892346697!3d40.75067227138305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fae5e9d4c5%3A0x1e0b1e9f5b3b5c3d!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    address: "456 River Road, Waterfront Area, City - 10002",
    phone: "+1 234-567-8902",
    email: "admissions@riverside.edu"
  },
  {
    id: 3,
    name: "Maple Leaf High School",
    description: "Renowned for academic excellence and traditional values, offering boarding facilities and a nurturing environment for students to thrive.",
    image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/5495c543716e94626692321b093fbea4c0058bcbbf9ec0643dbfcfe47c3215a0.png",
    location: "789 Maple Avenue, Heritage District",
    maxIntake: 600,
    hasLibrary: true,
    hasCanteen: true,
    hasBoarding: true,
    hasSports: true,
    facilities: ["Library", "Canteen", "Boarding", "Sports", "Theater"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6299476405854!2d-73.96846892346677!3d40.74826877138428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590247c56379%3A0x15e13bea38b43e00!2sGrand%20Central%20Terminal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    address: "789 Maple Avenue, Heritage District, City - 10003",
    phone: "+1 234-567-8903",
    email: "contact@mapleleaf.edu"
  },
  {
    id: 4,
    name: "Sunshine Primary School",
    description: "A warm and welcoming environment dedicated to early childhood education with colorful, child-friendly facilities and experienced teachers.",
    image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/0fa11e80e34065f068fdca7d1587ec6d676b6b379fe789e4175a8218b21ce294.png",
    location: "321 Sunny Street, Family Neighborhood",
    maxIntake: 250,
    hasLibrary: true,
    hasCanteen: true,
    hasBoarding: false,
    hasSports: false,
    facilities: ["Library", "Canteen", "Playground"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5649349561844!2d-73.98632992346745!3d40.73567227139042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a67094e7b9%3A0xb5e8f8e0d1e8f8e0!2sFlatiron%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    address: "321 Sunny Street, Family Neighborhood, City - 10004",
    phone: "+1 234-567-8904",
    email: "hello@sunshine.edu"
  },
  {
    id: 5,
    name: "Oxford Heights School",
    description: "Premium educational institution offering comprehensive facilities including boarding, advanced laboratories, and extensive sports programs.",
    image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/804a44d5ebfd7e42e15f79afa2ddcd48677a4c8eb64f57bfbc452cc977fd53f7.png",
    location: "555 Oxford Boulevard, Premium Heights",
    maxIntake: 700,
    hasLibrary: true,
    hasCanteen: true,
    hasBoarding: true,
    hasSports: true,
    facilities: ["Library", "Canteen", "Boarding", "Sports", "Labs", "Arts Center"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8649349561844!2d-73.96245892346607!3d40.76467227137588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4b00f7665%3A0x6c6f7a6f7a6f7a6f!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    address: "555 Oxford Boulevard, Premium Heights, City - 10005",
    phone: "+1 234-567-8905",
    email: "admissions@oxfordheights.edu"
  },
  {
    id: 6,
    name: "Valley View School",
    description: "Nestled in a scenic valley, our school offers unique outdoor learning experiences combined with modern educational facilities.",
    image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/09c991b0fe8e33c8127679a9be802cd9c9f45b56e4f66dabe0c3e4f68c4d3b26.png",
    location: "888 Valley Drive, Mountain View",
    maxIntake: 350,
    hasLibrary: true,
    hasCanteen: true,
    hasBoarding: false,
    hasSports: true,
    facilities: ["Library", "Canteen", "Sports", "Outdoor Education"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2649349561844!2d-73.99232992346785!3d40.72267227139742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f5b5c5c5d%3A0x5d5e5f5f5f5f5f5f!2sBrooklyn%20Bridge!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    address: "888 Valley Drive, Mountain View, City - 10006",
    phone: "+1 234-567-8906",
    email: "info@valleyview.edu"
  },
  {
    id: 7,
    name: "Heritage School",
    description: "Combining traditional educational values with modern teaching methods in a historic building with state-of-the-art additions.",
    image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/7feaf7ae7d11d468bc8ab52f9a16eca72a9e551e961f820d07d7bfb0a8e9ceca.png",
    location: "999 Heritage Lane, Historic Quarter",
    maxIntake: 450,
    hasLibrary: true,
    hasCanteen: true,
    hasBoarding: true,
    hasSports: false,
    facilities: ["Library", "Canteen", "Boarding", "Music Room"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8649349561844!2d-74.01232992346765!3d40.72867227139342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a67094e7b9%3A0x7a7b7c7c7c7c7c7c!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    address: "999 Heritage Lane, Historic Quarter, City - 10007",
    phone: "+1 234-567-8907",
    email: "contact@heritage.edu"
  },
  {
    id: 8,
    name: "Bright Future Academy",
    description: "Innovation-focused academy with cutting-edge technology, solar-powered facilities, and future-ready curriculum preparing students for tomorrow.",
    image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/44ab6484cd2b6938a234ca9f1250b78cc4dec69e71007bad36832de795edca7a.png",
    location: "777 Innovation Park, Tech District",
    maxIntake: 550,
    hasLibrary: true,
    hasCanteen: true,
    hasBoarding: false,
    hasSports: true,
    facilities: ["Library", "Canteen", "Sports", "Tech Labs", "Robotics"],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.4649349561844!2d-73.98032992346655!3d40.74567227138628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0x8c8d8e8e8e8e8e8e!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    address: "777 Innovation Park, Tech District, City - 10008",
    phone: "+1 234-567-8908",
    email: "hello@brightfuture.edu"
  }
];

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('mobile-active');
    });
  }
}

// Display Schools on Schools Page
function displaySchools(schools) {
  const grid = document.getElementById('schoolsGrid');
  if (!grid) return;
  
  if (schools.length === 0) {
    grid.innerHTML = '<div class="no-results">No schools found matching your criteria. Please adjust your filters.</div>';
    return;
  }
  
  grid.innerHTML = schools.map(school => `
    <div class="school-card">
      <img src="${school.image}" alt="${school.name}">
      <div class="school-card-content">
        <h3>${school.name}</h3>
        <p>${school.description.substring(0, 120)}...</p>
        <div class="school-facilities">
          ${school.facilities.map(f => `<span class="facility-tag">${f}</span>`).join('')}
        </div>
        <div class="school-location">${school.location}</div>
        <a href="schools/school${school.id}.html" class="btn btn-secondary">View Details</a>
      </div>
    </div>
  `).join('');
}

// Display Featured Schools on Home Page
function displayFeaturedSchools() {
  const grid = document.getElementById('featuredSchools');
  if (!grid) return;
  
  const featured = schoolsData.slice(0, 3);
  grid.innerHTML = featured.map(school => `
    <div class="school-card">
      <img src="${school.image}" alt="${school.name}">
      <div class="school-card-content">
        <h3>${school.name}</h3>
        <p>${school.description.substring(0, 100)}...</p>
        <div class="school-facilities">
          ${school.facilities.slice(0, 3).map(f => `<span class="facility-tag">${f}</span>`).join('')}
        </div>
        <div class="school-location">${school.location}</div>
        <a href="schools/school${school.id}.html" class="btn btn-secondary">View Details</a>
      </div>
    </div>
  `).join('');
}

// Quick Search on Home Page
function initQuickSearch() {
  const searchInput = document.getElementById('quickSearchInput');
  if (!searchInput) return;
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const searchTerm = searchInput.value;
      window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
    }
  });
}

// Set Active Navigation
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Contact Form Submission
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    form.reset();
  });
}

// Initialize on Page Load
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  setActiveNav();
  displayFeaturedSchools();
  initQuickSearch();
  initContactForm();
  
  // Display all schools on schools page
  if (document.getElementById('schoolsGrid')) {
    displaySchools(schoolsData);
  }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { schoolsData };
}