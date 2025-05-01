// item.js
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const photoId = params.get("id");

  fetch("collection.json")
    .then((response) => response.json())
    .then((data) => {
      const item = data.find(entry => entry.photo_id.toString() === photoId);

      if (item) {
        document.getElementById("event_context").textContent = item.event_context;
        document.getElementById("image").src = `images/${item.image}`;
        document.getElementById("photo_id").textContent = item.photo_id;
        document.getElementById("date_taken").textContent = item.date_taken;
        document.getElementById("photographer").textContent = item.photographer;
        document.getElementById("location").textContent = item.location;
        document.getElementById("people_in_the_photo").textContent = item.people_in_the_photo.join(", ");
        document.getElementById("photo_format").textContent = item.photo_format;
        document.getElementById("additional_notes").textContent = item.additional_notes;
      } else {
        document.body.innerHTML = "<h1>Photo not found.</h1>";
      }
    })
    .catch((error) => {
      console.error("Error loading item data:", error);
    });
});
