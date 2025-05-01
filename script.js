// script.js

// Wait until the page loads
window.addEventListener("DOMContentLoaded", () => {
  fetch("collection.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("collection");

      data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "item-card";

        card.innerHTML = `
          <a href="item-template.html?id=${item.photo_id}">
            <img src="images/${item.image}" alt="${item.event_context}" style="width:100%; border-radius:8px">
            <h3>${item.event_context}</h3>
            <p><strong>Date:</strong> ${item.date_taken}</p>
          </a>
        `;

        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error loading collection.json:", error);
    });
});




