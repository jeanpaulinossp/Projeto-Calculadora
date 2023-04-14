import { Container } from "./styles";

const HistoricoContas = ({ dataDB, error }) => {
  return (
    <Container>
      {error && <p className="error">Erro ao Conectar com o Banco de Dados</p>}
      {!error && dataDB.length === 0 ? (
        <p className="error">Não há dados para exibir.</p>
      ) : (
        ""
      )}
      {dataDB.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Operações</th>
            </tr>
          </thead>
          <tbody>
            {dataDB.length > 0 &&
              dataDB.map((item) => (
                <tr key={item.codigo}>
                  <td>{item.codigo}</td>
                  <td>{item.nome}</td>
                  <td>{item.data}</td>
                  <td>{item.hora}</td>
                  <td>{item.contas}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </Container>
  );
};

export default HistoricoContas;
