const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // change icon
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }

  // Resume download functionality
  const downloadBtn = document.getElementById("download-resume");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const resumeUrl = downloadBtn.getAttribute("data-resume-url");
      if (resumeUrl) {
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Jerome-Angelo-Pena-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  }
});