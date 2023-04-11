import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';

  
export default function Carrossel() {
  return (
    <div style={
        { 
        display: 'block', 
        width: '1200px', 
        padding: 30, 
        // color: '#015a80',   
        fontFamily: 'Open Sans', 
        margin: '120px 0 0 0',
        }

        }>
      <Carousel fade>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src="https://static3.tcdn.com.br/img/img_prod/825130/1679926150_willow_acredita_que_a_unica_maneira_de.png" alt=""/>
          <Carousel.Caption>
            {/* <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src="https://static3.tcdn.com.br/img/img_prod/825130/1677870219_um_estranho_nos.png" alt=""/>
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src="https://static3.tcdn.com.br/img/img_prod/825130/1677706919_banner_trs_mulheres._trs_datas._um_homem_desaparecido.png" alt=""/>
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <img
            className="d-block w-100"
            src="https://static3.tcdn.com.br/img/img_prod/825130/1677848614_existe_aquele_momento_em_que_voc_termina_um_livro_realmente_incrvel_e_s_precisa_de_um_segundo_para_respirar_fundo_e_absorver_todos_os_seus_sentimentos.__to_mas_to_bom_que_voc_no_consegue_expressar_c.png" alt=""/>
          <Carousel.Caption>
            {/* <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


            

    </div>
  );
}