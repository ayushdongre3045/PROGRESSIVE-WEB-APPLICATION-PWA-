// Product Data (Mock API Response)
const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation for an immersive audio experience.",
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "electronics",
      brand: "Samsung",
      rating: 4.5,
      reviews: 128,
      inStock: true,
      isNew: true,
      isFeatured: true
    },
    {
      id: 2,
      title: "Men's Casual T-Shirt",
      description: "Comfortable cotton t-shirt for everyday wear. Available in multiple colors and sizes.",
      price: 24.99,
      originalPrice: 29.99,
      discount: 17,
      image: "https://images.pexels.com/photos/6347547/pexels-photo-6347547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "clothing",
      brand: "Nike",
      rating: 4.3,
      reviews: 95,
      inStock: true,
      isNew: false,
      isFeatured: false
    },
    {
      id: 3,
      title: "Smartwatch with Fitness Tracking",
      description: "Track your health metrics and stay connected with this advanced smartwatch.",
      price: 149.99,
      originalPrice: 179.99,
      discount: 17,
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "electronics",
      brand: "Apple",
      rating: 4.7,
      reviews: 203,
      inStock: true,
      isNew: true,
      isFeatured: true
    },
    {
      id: 4,
      title: "Designer Leather Wallet",
      description: "Genuine leather wallet with multiple card slots and a sleek design.",
      price: 59.99,
      originalPrice: 79.99,
      discount: 25,
      image: "https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "accessories",
      brand: "Adidas",
      rating: 4.2,
      reviews: 67,
      inStock: true,
      isNew: false,
      isFeatured: false
    },
    {
      id: 5,
      title: "Professional Digital Camera",
      description: "Capture high-quality photos and videos with this professional-grade digital camera.",
      price: 799.99,
      originalPrice: 899.99,
      discount: 11,
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "electronics",
      brand: "Samsung",
      rating: 4.8,
      reviews: 156,
      inStock: true,
      isNew: false,
      isFeatured: true
    },
    {
      id: 6,
      title: "Women's Running Shoes",
      description: "Lightweight and comfortable running shoes with excellent support and durability.",
      price: 89.99,
      originalPrice: 109.99,
      discount: 18,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "clothing",
      brand: "Nike",
      rating: 4.5,
      reviews: 112,
      inStock: true,
      isNew: true,
      isFeatured: false
    },
    {
      id: 7,
      title: "Bluetooth Portable Speaker",
      description: "Compact and powerful Bluetooth speaker with impressive sound quality and battery life.",
      price: 69.99,
      originalPrice: 89.99,
      discount: 22,
      image: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "electronics",
      brand: "Puma",
      rating: 4.4,
      reviews: 89,
      inStock: true,
      isNew: false,
      isFeatured: false
    },
    {
      id: 8,
      title: "Designer Sunglasses",
      description: "Stylish sunglasses with UV protection for a fashionable and practical accessory.",
      price: 129.99,
      originalPrice: 149.99,
      discount: 13,
      image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "accessories",
      brand: "Adidas",
      rating: 4.1,
      reviews: 75,
      inStock: true,
      isNew: false,
      isFeatured: true
    },
    {
      id: 9,
      title: "Smartphone with Advanced Camera",
      description: "Latest smartphone model with an advanced camera system and powerful performance.",
      price: 699.99,
      originalPrice: 799.99,
      discount: 13,
      image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "electronics",
      brand: "Apple",
      rating: 4.9,
      reviews: 247,
      inStock: true,
      isNew: true,
      isFeatured: true
    },
    {
      id: 10,
      title: "Men's Formal Suit",
      description: "Elegant formal suit for special occasions and professional settings.",
      price: 299.99,
      originalPrice: 349.99,
      discount: 14,
      image: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "clothing",
      brand: "Nike",
      rating: 4.6,
      reviews: 103,
      inStock: true,
      isNew: false,
      isFeatured: true
    },
    {
      id: 11,
      title: "Laptop Backpack",
      description: "Durable and spacious backpack designed to safely carry laptops and other essentials.",
      price: 49.99,
      originalPrice: 59.99,
      discount: 17,
      image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "accessories",
      brand: "Puma",
      rating: 4.3,
      reviews: 82,
      inStock: true,
      isNew: false,
      isFeatured: false
    },
    {
      id: 12,
      title: "Wireless Earbuds",
      description: "Compact wireless earbuds with crystal-clear sound and long battery life.",
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "electronics",
      brand: "Samsung",
      rating: 4.4,
      reviews: 149,
      inStock: true,
      isNew: true,
      isFeatured: false
    }
  ];
  
  // DOM Elements
  const productsContainer = document.getElementById('productsContainer');
  const productCountEl = document.getElementById('productCount');
  const searchInput = document.getElementById('searchInput');
  const sortOptions = document.getElementById('sortOptions');
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  const gridViewBtn = document.getElementById('gridView');
  const listViewBtn = document.getElementById('listView');
  const toggleFiltersBtn = document.getElementById('toggleFilters');
  const filtersContent = document.querySelector('.filters-content');
  const categoryButtons = document.querySelectorAll('[data-category]');
  
  // Modal Elements
  const modalProductTitle = document.getElementById('modalProductTitle');
  const modalProductImage = document.getElementById('modalProductImage');
  const modalProductPrice = document.getElementById('modalProductPrice');
  const modalProductDescription = document.getElementById('modalProductDescription');
  
  // Global State
  let currentView = 'grid';
  let activeCategory = 'all';
  let currentSort = 'popular';
  let maxPrice = 1000;
  let filteredProducts = [...products];
  
  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    // Render Products
    renderProducts(products);
    
    // Initial state
    updateProductCount(products.length);
    
    // Set up event listeners
    setupEventListeners();
  });
  
  // Set up all event listeners
  function setupEventListeners() {
    // View toggle
    gridViewBtn.addEventListener('click', () => setView('grid'));
    listViewBtn.addEventListener('click', () => setView('list'));
    
    // Filter toggle on mobile
    toggleFiltersBtn?.addEventListener('click', toggleFilters);
    
    // Price range
    priceRange.addEventListener('input', handlePriceChange);
    
    // Sorting
    sortOptions.addEventListener('change', handleSort);
    
    // Search
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Category filters
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        setCategoryFilter(btn.dataset.category);
      });
    });
  }
  
  // Render products to the container
  function renderProducts(products) {
    productsContainer.innerHTML = '';
    
    if (products.length === 0) {
      productsContainer.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="py-5">
            <i class="bi bi-search fs-1 text-muted"></i>
            <h3 class="mt-3">No products found</h3>
            <p class="text-muted">Try adjusting your filters or search term</p>
          </div>
        </div>
      `;
      return;
    }
    
    products.forEach(product => {
      const productCard = createProductCard(product);
      productsContainer.appendChild(productCard);
    });
  }
  
  // Create a product card
  function createProductCard(product) {
    const col = document.createElement('div');
    col.className = currentView === 'grid' ? 'col-md-6 col-lg-4' : 'col-12';
    
    // Generate stars HTML
    const starsHtml = getStarsHtml(product.rating);
    
    // Calculate discount
    const hasDiscount = product.originalPrice > product.price;
    
    col.innerHTML = `
      <div class="product-card card h-100 shadow-sm ${currentView === 'list' ? 'flex-row' : ''}">
        <div class="product-image-container ${currentView === 'list' ? 'col-4' : ''}">
          <img src="${product.image}" class="product-image" alt="${product.title}">
          <div class="badge-overlay">
            ${product.isNew ? `<span class="badge bg-accent badge-new">New</span>` : ''}
            ${hasDiscount ? `<span class="badge bg-danger ms-2">-${product.discount}%</span>` : ''}
          </div>
          <div class="product-actions">
            <div class="action-icon" data-bs-toggle="tooltip" title="Quick View" onclick="quickView(${product.id})">
              <i class="bi bi-eye"></i>
            </div>
            <div class="action-icon" data-bs-toggle="tooltip" title="Add to Cart">
              <i class="bi bi-cart-plus"></i>
            </div>
            <div class="action-icon" data-bs-toggle="tooltip" title="Add to Wishlist">
              <i class="bi bi-heart"></i>
            </div>
          </div>
        </div>
        <div class="card-body product-info ${currentView === 'list' ? 'col-8' : ''}">
          <div class="product-brand">${product.brand}</div>
          <h5 class="product-title">${product.title}</h5>
          <div class="d-flex align-items-center mb-2">
            <div class="rating-stars me-1">
              ${starsHtml}
            </div>
            <span class="text-muted small">(${product.reviews})</span>
          </div>
          <div class="product-price">
            $${product.price.toFixed(2)}
            ${hasDiscount ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <p class="text-muted small list-description ${currentView === 'list' ? '' : 'd-none'}">${product.description}</p>
          ${currentView === 'list' ? 
            `<div class="mt-auto pt-3">
              <button class="btn btn-primary btn-sm me-2">Add to Cart</button>
              <button class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#quickViewModal" onclick="quickView(${product.id})">Quick View</button>
            </div>` : ''}
        </div>
      </div>
    `;
    
    return col;
  }
  
  // Generate star ratings HTML
  function getStarsHtml(rating) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="bi bi-star-fill"></i> ';
    }
    
    // Add half star if needed
    if (halfStar) {
      starsHtml += '<i class="bi bi-star-half"></i> ';
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<i class="bi bi-star"></i> ';
    }
    
    return starsHtml.trim();
  }
  
  // Switch between grid and list views
  function setView(view) {
    currentView = view;
    
    if (view === 'grid') {
      gridViewBtn.classList.add('active');
      listViewBtn.classList.remove('active');
      productsContainer.classList.remove('list-view');
    } else {
      listViewBtn.classList.add('active');
      gridViewBtn.classList.remove('active');
      productsContainer.classList.add('list-view');
    }
    
    renderProducts(filteredProducts);
  }
  
  // Toggle filters on mobile
  function toggleFilters() {
    filtersContent.classList.toggle('show');
    
    // Change icon based on state
    const icon = toggleFiltersBtn.querySelector('i');
    if (filtersContent.classList.contains('show')) {
      icon.classList.remove('bi-funnel');
      icon.classList.add('bi-funnel-fill');
    } else {
      icon.classList.remove('bi-funnel-fill');
      icon.classList.add('bi-funnel');
    }
  }
  
  // Handle price range change
  function handlePriceChange() {
    maxPrice = parseInt(priceRange.value);
    priceValue.textContent = `$${maxPrice}`;
    
    // Apply filters
    applyFilters();
  }
  
  // Set category filter
  function setCategoryFilter(category) {
    activeCategory = category;
    
    // Update active button
    categoryButtons.forEach(btn => {
      if (btn.dataset.category === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Apply filters
    applyFilters();
  }
  
  // Handle sorting
  function handleSort() {
    currentSort = sortOptions.value;
    applyFilters();
  }
  
  // Handle search
  function handleSearch() {
    applyFilters();
  }
  
  // Apply all filters and sorting
  function applyFilters() {
    // Start with all products
    let filtered = [...products];
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    // Filter by price
    filtered = filtered.filter(product => product.price <= maxPrice);
    
    // Filter by search term
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply sorting
    filtered = sortProducts(filtered, currentSort);
    
    // Update filtered products
    filteredProducts = filtered;
    
    // Render and update count
    renderProducts(filtered);
    updateProductCount(filtered.length);
  }
  
  // Sort products
  function sortProducts(products, sortBy) {
    const sortedProducts = [...products];
    
    switch (sortBy) {
      case 'price-low':
        return sortedProducts.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sortedProducts.sort((a, b) => b.price - a.price);
      case 'newest':
        return sortedProducts.sort((a, b) => b.isNew - a.isNew);
      case 'popular':
      default:
        return sortedProducts.sort((a, b) => b.reviews - a.reviews);
    }
  }
  
  // Update product count
  function updateProductCount(count) {
    productCountEl.textContent = count;
  }
  
  // Quick view function
  function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Update modal content
    modalProductTitle.textContent = product.title;
    modalProductImage.src = product.image;
    modalProductImage.alt = product.title;
    modalProductPrice.textContent = `$${product.price.toFixed(2)}`;
    modalProductDescription.textContent = product.description;
    
    // Show modal
    const quickViewModal = new bootstrap.Modal(document.getElementById('quickViewModal'));
    quickViewModal.show();
  }
  
  // Debounce function for search
  function debounce(func, delay) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  }
  
  // Initialize tooltips
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
  
  // Make quickView function available globally
  window.quickView = quickView;