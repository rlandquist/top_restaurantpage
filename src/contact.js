export default function loadContact() {
  const content = document.getElementById("content");

  const h1 = document.createElement("h1");
  h1.textContent = "Contact";

  const p1 = document.createElement("p");
  p1.textContent = "Visit us at: 1 Bifrost Bridge, Asgard";

  const p2 = document.createElement("p");
  p2.textContent = "Phone: 1-800-VALHALLA";

  const p3 = document.createElement("p");
  p3.textContent = "Open daily from sunrise to Ragnarök";

  content.append(h1, p1, p2, p3);
}