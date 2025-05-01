// item.js
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("id");

  fetch("collection.json")
    .then((response) => response.json())
    .then((data) => {
      const item = data.find((entry) => entry.id === itemId);

      if (item) {
        document.getElementById("item-title").textContent = item.title;
        document.getElementById("item-image").src = `images/${item.image}`;
        document.getElementById("item-date").textContent = item.date_taken || "Unknown";
        document.getElementById("item-photographer").textContent = item.photographer || "Unknown";
        document.getElementById("item-location").textContent = item.location || "Unknown";
        document.getElementById("item-event").textContent = item.event || "None";
        document.getElementById("item-people").textContent = item.people?.join(", ") || "Unknown";
        document.getElementById("item-format").textContent = item.format || "Unknown";
        document.getElementById("item-condition").textContent = item.condition || "Unknown";
        document.getElementById("item-digitization").textContent = item.digitization_date || "Unknown";
        document.getElementById("item-notes").textContent = item.notes || "None";

        // Optional: add JSON-LD structured metadata for SEO
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "name": item.title,
          "creator": item.photographer || "Unknown",
          "contentLocation": item.location,
          "datePublished": item.date_taken,
          "description": item.notes
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      } else {
        document.body.innerHTML = "<h1>Item not found.</h1>";
      }
    })
    .catch((error) => {
      console.error("Error loading item data:", error);
    });
});
