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





