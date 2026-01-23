function submitForm() {
  alert("Message sent successfully!");
  return false;
}

function addRecommendation() {
  let name = document.getElementById("recName").value;
  let msg = document.getElementById("recMessage").value;

  if(name === "" || msg === ""){
    alert("Please complete the fields.");
    return;
  }

  let div = document.createElement("div");
  div.className = "recommendation-card";
  div.innerHTML = `"${msg}" — <strong>${name}</strong>`;

  document.getElementById("recommendList").appendChild(div);

  document.getElementById("recName").value = "";
  document.getElementById("recMessage").value = "";
}

// Hamburger toggle
function toggleMenu(){
  document.querySelector("nav").classList.toggle("active");
}
