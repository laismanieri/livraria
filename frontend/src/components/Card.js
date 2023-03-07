import './Card.css'

function Card(){

    return(

<div>
        <div class="row"> 
         
            <div class="card">
                <img class="image" src='images/e-assim-que-comeca.jpg' alt=''/>
                <h4><b>É assim que Começa</b></h4>
                <p>R$ 39,90</p>
            </div>  
            <div class="card">
                <img class="image" src="images/mil-batidas-do-coracao.jpg" alt=""/>
                <h4><b>Mil batidas do coração</b></h4>
                <p>R$ 50,92</p>
            </div> 
            <div class="card">
                <img class="image" src="images/o-conde-de-monte-cristo.jpg" alt=""/>
                <h4><b>O conde de monte Cristo</b></h4>
                <p> R$ 111,90</p>
            </div> 
            <div class="card">
                <img class="image" src="images/orgulho-e-preconceito.png" alt=""/>
                <h4><b>Orgulho e preconceito</b></h4>
                <p>R$ 31,40</p>
            </div> 
            <div class="card">
                <img class="image" src="images/corte-de-espinhos.jpg" alt=""/>
                <h4><b>Corte de espinhos e rosas</b></h4>
                <p>R$ 36,01</p>
            </div> 
        </div>
    </div>
    )
}

export default Card;