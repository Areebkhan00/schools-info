// SchoolsInfo - Search and Filter Functionality

// Get schools data from main app
let searchSchoolsData = [];

// Load schools data
if (typeof schoolsData !== 'undefined') {
  searchSchoolsData = schoolsData;
} else {
  // Fallback data if app.js not loaded
  searchSchoolsData = [
    {
      id: 1,
      name: "Greenwood International School",
      description: "A premier international school offering world-class education with modern facilities.",
      image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/fb6d6341891357fba72b18f665b4fbb8a6915769293cf0a4e6150920a13e0dfd.png",
      location: "123 Education Lane, Central District",
      maxIntake: 500,
      hasLibrary: true,
      hasCanteen: true,
      hasBoarding: false,
      hasSports: true,
      facilities: ["Library", "Canteen", "Sports", "Labs"]
    },
    {
      id: 2,
      name: "Riverside Academy",
      description: "Located by the scenic riverside, specializing in sports education.",
      image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/ec21fab4496dd4fe92403fe573a21df1d0b271d25d20852a0ad0342cc7798d1f.png",
      location: "456 River Road, Waterfront Area",
      maxIntake: 400,
      hasLibrary: true,
      hasCanteen: true,
      hasBoarding: true,
      hasSports: true,
      facilities: ["Library", "Canteen", "Boarding", "Sports", "Swimming Pool"]
    },
    {
      id: 3,
      name: "Maple Leaf High School",
      description: "Renowned for academic excellence and traditional values.",
      image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/5495c543716e94626692321b093fbea4c0058bcbbf9ec0643dbfcfe47c3215a0.png",
      location: "789 Maple Avenue, Heritage District",
      maxIntake: 600,
      hasLibrary: true,
      hasCanteen: true,
      hasBoarding: true,
      hasSports: true,
      facilities: ["Library", "Canteen", "Boarding", "Sports", "Theater"]
    },
    {
      id: 4,
      name: "Sunshine Primary School",
      description: "A warm environment dedicated to early childhood education.",
      image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/0fa11e80e34065f068fdca7d1587ec6d676b6b379fe789e4175a8218b21ce294.png",
      location: "321 Sunny Street, Family Neighborhood",
      maxIntake: 250,
      hasLibrary: true,
      hasCanteen: true,
      hasBoarding: false,
      hasSports: false,
      facilities: ["Library", "Canteen", "Playground"]
    },
    {
      id: 5,
      name: "Oxford Heights School",
      description: "Premium educational institution with comprehensive facilities.",
      image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/804a44d5ebfd7e42e15f79afa2ddcd48677a4c8eb64f57bfbc452cc977fd53f7.png",
      location: "555 Oxford Boulevard, Premium Heights",
      maxIntake: 700,
      hasLibrary: true,
      hasCanteen: true,
      hasBoarding: true,
      hasSports: true,
      facilities: ["Library", "Canteen", "Boarding", "Sports", "Labs", "Arts Center"]
    },
    {
      id: 6,
      name: "Valley View School",
      description: "Unique outdoor learning experiences in a scenic valley.",
      image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/09c991b0fe8e33c8127679a9be802cd9c9f45b56e4f66dabe0c3e4f68c4d3b26.png",
      location: "888 Valley Drive, Mountain View",
      maxIntake: 350,
      hasLibrary: true,
      hasCanteen: true,
      hasBoarding: false,
      hasSports: true,
      facilities: ["Library", "Canteen", "Sports", "Outdoor Education"]
    },
    {
      id: 7,
      name: "Heritage School",
      description: "Traditional values with modern teaching methods.",
      image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/7feaf7ae7d11d468bc8ab52f9a16eca72a9e551e961f820d07d7bfb0a8e9ceca.png",
      location: "999 Heritage Lane, Historic Quarter",
      maxIntake: 450,
      hasLibrary: true,
      hasCanteen: true,
      hasBoarding: true,
      hasSports: false,
      facilities: ["Library", "Canteen", "Boarding", "Music Room"]
    },
    {
      id: 8,
      name: "Bright Future Academy",
      description: "Innovation-focused with cutting-edge technology.",
      image: "https://static.prod-images.emergentagent.com/jobs/e60e38f7-2113-4e41-a82d-0d692d40c63f/images/44ab6484cd2b6938a234ca9f1250b78cc4dec69e71007bad36832de795edca7a.png",
      location: "777 Innovation Park, Tech District",
      maxIntake: 550,
      hasLibrary: true,
      hasCanteen: true,
      hasBoarding: false,
      hasSports: true,
      facilities: ["Library", "Canteen", "Sports", "Tech Labs", "Robotics"]
    }
  ];
}

// Search and Filter Function
function searchAndFilter() {
  const searchTerm = document.getElementById('searchLocation')?.value.toLowerCase() || '';
  const hasLibrary = document.getElementById('filterLibrary')?.checked || false;
  const hasCanteen = document.getElementById('filterCanteen')?.checked || false;
  const hasBoarding = document.getElementById('filterBoarding')?.checked || false;
  const hasSports = document.getElementById('filterSports')?.checked || false;
  
  let filtered = searchSchoolsData.filter(school => {
    // Text search
    const matchesSearch = searchTerm === '' || 
      school.name.toLowerCase().includes(searchTerm) ||
      school.location.toLowerCase().includes(searchTerm) ||
      school.description.toLowerCase().includes(searchTerm);
    
    // Facility filters (only apply if checked)
    const matchesLibrary = !hasLibrary || school.hasLibrary;
    const matchesCanteen = !hasCanteen || school.hasCanteen;
    const matchesBoarding = !hasBoarding || school.hasBoarding;
    const matchesSports = !hasSports || school.hasSports;
    
    return matchesSearch && matchesLibrary && matchesCanteen && matchesBoarding && matchesSports;
  });
  
  displaySearchResults(filtered);
  updateResultsCount(filtered.length, searchSchoolsData.length);
}

// Display Search Results
function displaySearchResults(schools) {
  const resultsGrid = document.getElementById('searchResults');
  if (!resultsGrid) return;
  
  if (schools.length === 0) {
    resultsGrid.innerHTML = '<div class="no-results">No schools found matching your search criteria. Please try different filters.</div>';
    return;
  }
  
  resultsGrid.innerHTML = schools.map(school => `
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

// Update Results Count
function updateResultsCount(showing, total) {
  const countElement = document.getElementById('resultsCount');
  if (countElement) {
    countElement.textContent = `Showing ${showing} of ${total} schools`;
  }
}

// Initialize Search Page
function initSearch() {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q');
  
  if (query) {
    const searchInput = document.getElementById('searchLocation');
    if (searchInput) {
      searchInput.value = query;
    }
  }
  
  // Initial display
  searchAndFilter();
  
  // Add event listeners
  const searchInput = document.getElementById('searchLocation');
  const filterLibrary = document.getElementById('filterLibrary');
  const filterCanteen = document.getElementById('filterCanteen');
  const filterBoarding = document.getElementById('filterBoarding');
  const filterSports = document.getElementById('filterSports');
  const searchBtn = document.getElementById('searchBtn');
  const clearBtn = document.getElementById('clearFilters');
  
  if (searchInput) {
    searchInput.addEventListener('input', searchAndFilter);
  }
  
  if (filterLibrary) filterLibrary.addEventListener('change', searchAndFilter);
  if (filterCanteen) filterCanteen.addEventListener('change', searchAndFilter);
  if (filterBoarding) filterBoarding.addEventListener('change', searchAndFilter);
  if (filterSports) filterSports.addEventListener('change', searchAndFilter);
  
  if (searchBtn) {
    searchBtn.addEventListener('click', searchAndFilter);
  }
  
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (filterLibrary) filterLibrary.checked = false;
      if (filterCanteen) filterCanteen.checked = false;
      if (filterBoarding) filterBoarding.checked = false;
      if (filterSports) filterSports.checked = false;
      searchAndFilter();
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initSearch);