import './Carrossel.css';

function Carrossel(){

  const controls = document.querySelectorAll(".control");
  let currentItem = 0;
  const items = document.querySelectorAll(".item");
  const maxItems = items.length;

  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
    var  isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});


  return (
    
    <div class="container">
    <button class="arrow-left control" >◀</button>
    <button class="arrow-right control">▶</button>
    <div class="gallery-wrapper">
        <div class="gallery">
            <div class="gallery">
                <img class="item current-item" src="images/mulheres.png" alt="ícone menu lateral" />
                <img class="item current-item" src="images/mais-vendida.png" alt="ícone menu lateral" />
                <img class="item current-item" src="images/castelo.png" alt="ícone menu lateral" />
                <img class="item current-item" src="images/lancamentos.png" alt="ícone menu lateral" />
            </div>
        </div>
    </div>
</div>


)
}

export default Carrossel;