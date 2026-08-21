/*
  EASY SETUP:
  1. Put your photos in the "images" folder.
  2. Edit the PHOTO_LIST below.
  3. Replace the Canva URL.
  4. Open index.html in your browser.

  You can also use full image URLs instead of local image paths.
*/

const CANVA_LINK = "https://canva.link/nzgubjyebawl0oo";

const PHOTO_LIST = [
  { src: "images/photo1.jpg", title: "Ferry Ride through Las Casas Filipinas De Acuzar" },
  { src: "images/photo2.jpg", title: "A visit to the Cathedral at Las Casas Filipinas De Acuzar" },
  { src: "images/photo3.jpg", title: "Restaurant in Tsutenkaku" },
  { src: "images/photo4.jpg", title: "Tsutenkaku Tower in Osaka Japan" },
  { src: "images/photo5.jpg", title: "Japan Stalls" },
  { src: "images/photo6.jpg", title: "Mt Fuji, Chureito Pagoda" },
  { src: "images/photo7.jpg", title: "The Golden Pavillion" },
  { src: "images/photo8.jpg", title: "Nara Park Deer" },
  { src: "images/photo9.jpg", title: "Shibuya sky line" }
];

const gallery = document.querySelector(".gallery");

PHOTO_LIST.forEach((photo) => {
  const figure = document.createElement("figure");
  figure.className = "photo-card";
  figure.innerHTML = `
    <img src="${photo.src}" alt="${photo.title}" loading="lazy">
    <figcaption>${photo.title}</figcaption>
  `;
  figure.querySelector("img").addEventListener("click", () => openLightbox(photo.src, photo.title));
  gallery.appendChild(figure);
});

document.querySelectorAll("#canvaNav, #canvaAbout").forEach(link => {
  link.href = CANVA_LINK;
});

function openLightbox(src, title) {
  const box = document.createElement("div");
  box.className = "lightbox open";
  box.innerHTML = `<button class="close" aria-label="Close">×</button><img src="${src}" alt="${title}">`;
  document.body.appendChild(box);

  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.classList.contains("close")) box.remove();
  });
}