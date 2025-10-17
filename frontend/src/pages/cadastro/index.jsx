import cabecalho from "../../components/cabecalho.jsx";
import Inputs from "../../components/inputs.jsx";
import "./index.scss";

export default function Cadastro() {
  const inputs = [
    {
      titulo: "CPF",
      descricao: "escreva seu CPF",
    },
    {
      titulo: "RG",
      descricao: "escreva seu RG",
    },
  ];
  return (
    <div>
      <cabecalho />

      <main className="conteiner-cadastro">
        <h1>PREENCHA OS CAMPOS ABAIXO PARA REALIZAR SEU CADASTRO:</h1>
        <div className="inputs">
          <div className="cartao">
            {inputs.map((c) => (
              <Inputs titulo={c.titulo} descricao={c.descricao} />
            ))}
          </div>
          <div className="cartao">
            {inputs.map((c) => (
              <Inputs titulo={c.titulo} descricao={c.descricao} />
            ))}
          </div>
        </div>
        <div className="botoes">
          <button>cadastrar</button>
          <button>cancelar</button>
        </div>
      </main>
    </div>
  );
}
