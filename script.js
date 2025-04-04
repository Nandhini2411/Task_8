$(document).ready(function () {
    $('#buyersTable').DataTable();
    $('#productsTable').DataTable();
    $('#transactionsTable').DataTable();
  
    // Dark/light mode toggle
    const themeToggle = document.getElementById("toggleTheme");
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  });
  