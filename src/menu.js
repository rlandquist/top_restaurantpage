export default function loadMenu() {
  const content = document.getElementById("content");

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";

  const ul = document.createElement("ul");
  const items = [
    "Sæhrímnir Roast - 25 gold coins",
    "Mead of Poetry - 10 gold coins",
    "Idunn's Apple Pie - 15 gold coins",
    "Thor's Thunder Steak - 30 gold coins",
    "Loki's Fire Wings - 20 gold coins",
  ];

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  content.append(h1, ul);
}