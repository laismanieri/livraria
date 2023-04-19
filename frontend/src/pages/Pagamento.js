import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/NavBar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import styles from "./Pagamento.module.css";
import Table from "react-bootstrap/Table";
import { Button } from "bootstrap";

function Pagamento() {
  return (
    <>
      <Navbar />

      <Container>
        <div>
          <div className={styles.containerVoltar}>
            <Link to={"/"}>
              <h1 className={styles.voltarHome}>
                <AiOutlineArrowLeft />
                Voltar
              </h1>
            </Link>
            <div className={styles.linhaHorizontal} />
          </div>
          <div className={styles.containerPagto}>
            <div>
              <table className={styles.tablePagamento}>
                <thead className={styles.theadPagamento}>
                  <tr className={styles.thPagamento}>
                    <th className={styles.thPagamento}>Livro</th>
                    <th className={styles.thPagamento}>Titulo</th>
                    <th className={styles.thPagamento}>Entrega</th>
                    <th className={styles.thPagamento}>Preco</th>
                    <th className={styles.thPagamento}>Quantidade</th>
                    <th className={styles.thPagamento}>Total</th>
                    <th className={styles.thPagamento}>Excluir</th>
                  </tr>
                </thead>
                <tbody className={styles.tbodyPagamento}>
                  <tr className={styles.trPagamento}>
                    <td className={styles.tdPagamento}>
                      <img className={styles.imgLivroPagamento}
                        src="https://m.media-amazon.com/images/I/51lnvNcEFbL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
                        alt=""
                      />
                    </td>
                    <td className={styles.tdPagamento}>A Escolha</td>
                    <td className={styles.tdPagamento}>2 dias uteis</td>
                    <td className={styles.tdPagamento}>R$ 22,90</td>
                    <td className={styles.tdPagamento}>1</td>
                    <td className={styles.tdPagamento}>R$ 22,90</td>
                    <td className={styles.tdPagamento}>
                      <button className={styles.buttonPagamento}>
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>

            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default Pagamento;
