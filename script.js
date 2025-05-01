ocument.addEventListener("DOMContentLoaded", function () {
  fetch("collection.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("collection");

      data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "item-card";

        card.innerHTML = `
          <a href="item-template.html?id=${item.id}">
            <img src="images/${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p><strong>Event:</strong> ${item.event}</p>
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
📦 Up Next:
item-template.html — page structure for individual photo entries

item.js — populates that template with JSON data

collection.json — I can help you convert your spreadsheet into this next

Would you like me to drop in item-template.html next?









