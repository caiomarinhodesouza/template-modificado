import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <h1>Bem-vindo ao meu projeto modificado!</h1> {/* Adicionando o <h1> */}
      <Header />
      <ListarTarefa />
    </div>
  );
}


export default App;
