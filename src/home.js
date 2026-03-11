export default function loadHome() {
  const content = document.getElementById("content");

  const img = document.createElement("img");
  img.src = "https://cdn.shopify.com/s/files/1/0259/1057/5190/files/andreeaskv-food_photography_showing_a_top_view_of_wooden_plates_0c39d91c-cebc-439b-9ea4-f15794308a4b_480x480.png?v=1716372082";
  img.alt = "Viking Dinner";

  const h1 = document.createElement("h1");
  h1.textContent = "Odin's Restaurant";

  const p1 = document.createElement("p");
  p1.textContent = "We serve the best food this side of Valhalla";

  const p2 = document.createElement("p");
  p2.textContent = "Try the Sæhrímnir Daily Special!";

  content.append(img, h1, p1, p2);
}