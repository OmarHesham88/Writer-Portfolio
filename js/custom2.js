document.querySelectorAll(".gallery-section.paged").forEach((section) => {
  const items = section.querySelectorAll(".mix-container .mix"); // Get all the gallery items
  const itemsPerPage = 8; // Max 8 items per page
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to show the items for the current page
  function showPage(pageNum) {
    // Hide all items
    items.forEach((item) => (item.style.display = "none"));

    // Calculate start and end indices for the items to show on the current page
    const start = (pageNum - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, totalItems);

    // Show the items for the current page
    for (let i = start; i < end; i++) {
      items[i].style.display = "block";
    }

    // Update pagination buttons
    updatePagination(pageNum, totalPages);
  }

  // Function to create and update pagination buttons
  function updatePagination(currentPage, totalPages) {
    const paginationContainer = section.querySelector(".pagination");
    if (!paginationContainer) {
      const newPagination = document.createElement("div");
      newPagination.classList.add("pagination");
      section.appendChild(newPagination);
    }

    const paginationButtons = section.querySelector(".pagination");
    paginationButtons.innerHTML = ""; // Clear existing buttons

    // Create page number buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.disabled = i === currentPage;
      pageButton.addEventListener("click", () => showPage(i));
      paginationButtons.appendChild(pageButton);
    }
  }

  // Initially show the first page
  showPage(1);
});

document.querySelectorAll(".gallery-section.paged2").forEach((section) => {
  const items = section.querySelectorAll("#book-list .book-card"); // Get all the book items (li elements)
  const itemsPerPage = 8; // Max 8 items per page
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to show the items for the current page
  function showPage(pageNum) {
    // Hide all items
    items.forEach((item) => (item.style.display = "none"));

    // Calculate start and end indices for the items to show on the current page
    const start = (pageNum - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, totalItems);

    // Show the items for the current page
    for (let i = start; i < end; i++) {
      items[i].style.display = "block";
    }

    // Update pagination buttons
    updatePagination(pageNum, totalPages);
  }

  // Function to create and update pagination buttons
  function updatePagination(currentPage, totalPages) {
    const paginationContainer = section.querySelector(".pagination");
    if (!paginationContainer) {
      const newPagination = document.createElement("div");
      newPagination.classList.add("pagination");
      section.appendChild(newPagination);
    }

    const paginationButtons = section.querySelector(".pagination");
    paginationButtons.innerHTML = ""; // Clear existing buttons

    // Create page number buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      pageButton.disabled = i === currentPage;
      pageButton.addEventListener("click", () => showPage(i));
      paginationButtons.appendChild(pageButton);
    }
  }

  // Initially show the first page
  showPage(1);
});
