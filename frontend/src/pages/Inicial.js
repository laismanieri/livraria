import './Home.css';

const Inicial = () =>{

    return(
        <div>
            <div className="div-images"> 
             
                <div className="card">
                    <img src="images/e-assim-que-comeca.jpg" alt=""/>
                    <div className="container">
                        <h2><b>É assim que Começa</b></h2>
                        <p>R$ 39,90</p>
                    </div>
                </div>  

                <div className='card'>
                    <img src="images/mil-batidas-do-coracao.jpg" alt=""/>
                    <div className="container">
                        <h2><b>Mil batidas do coração</b></h2>
                        <p>R$ 50,92</p>
                    </div>
                </div>  

                <div className="card">
                    <img src="images/o-conde-de-monte-cristo.jpg" alt=""/>
                    <div className="container">
                        <h2><b>O conde de monte Cristo</b></h2>
                        <p> R$ 111,90</p>
                    </div>
                </div>  

                <div class="card">
                <img src="images/orgulho-e-preconceito.png" alt=""/>
                    <div class="container">
                        <h2><b>Orgulho e preconceito</b></h2>
                        <p>R$ 31,40</p>
                    </div>
                </div>  
            </div>
        </div>
        
    )

}

export default Inicial;
