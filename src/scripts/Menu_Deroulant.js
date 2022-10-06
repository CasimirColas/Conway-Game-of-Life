let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("toggRealisations");
let togg4 = document.getElementById("toggDistinctions");
let togg5 = document.getElementById("toggVoiraussi");

togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
})

function togg(){
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
};

function toggRealisations(){
    if(getComputedStyle(d3).display != "none"){
      d3.style.display = "none";
    } else {
      d3.style.display = "block";
    }
  };

  function toggDistinctions(){
    if(getComputedStyle(d4).display != "none"){
      d4.style.display = "none";
    } else {
      d4.style.display = "block";
    }
  };

  function toggVoiraussi(){
    if(getComputedStyle(d5).display != "none"){
      d5.style.display = "none";
    } else {
      d5.style.display = "block";
    }
  };

  togg2.onclick = togg;
  togg3.onclick = toggRealisations;
  togg4.onclick = toggDistinctions;
  togg5.onclick = toggVoiraussi;
  

  
