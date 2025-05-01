// item.js

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const photoId = params.get("id");

  fetch("collection.json")
    .then((response) => response.json())
    .then((data) => {
      const item = data.find((entry) => entry.photo_id.toString() === photoId);

      if (item) {
        document.getElementById("event_context").textContent = item.event_context;
        document.getElementById("image").src = `photos/${item.Photos}`;
        document.getElementById("photo_id").textContent = item.photo_id;
        document.getElementById("date_taken").textContent = item.date_taken;
        document.getElementById("photograper").textContent = item.photograper;
        document.getElementById("location").textContent = item.location;
        document.getElementById("people").textContent = item.people ? item.people.join(", ") : "";
        document.getElementById("photo_format").textContent = item.photo_format || "N/A";
        document.getElementById("additional_notes").textContent = item.additional_notes || "";

        // Add JSON-LD metadata to the <head> for search engines
        const metadata = {
          "@context": "https://schema.org",
          "@type": "Photograph",
          "name": item.event_context,
          "author": item.photograper,
          "datePublished": item.date_taken,
          "locationCreated": item.location,
          "description": item.additional_notes || "Family photo archive entry"
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(metadata);
        document.head.appendChild(script);

      } else {
        document.body.innerHTML = "<h1>Photo not found.</h1>";
      }
    })
    .catch((error) => {
      console.error("Error loading item data:", error);
    });
});
