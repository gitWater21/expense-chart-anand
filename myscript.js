let bar = document.querySelectorAll(".bar");

let data = document.querySelectorAll(".data-box");

bar.forEach((event)=>{
event.addEventListener("mouseover",()=>{
 data.forEach((e)=>{
   e.classList.add("myvision");
 });
});
});

bar.forEach((event) => {
  event.addEventListener("mouseleave", () => {
    data.forEach((e) => {
      e.classList.remove("myvision");
    });
  });
});





