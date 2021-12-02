import ResultCard from "../../components/ResultCard";
import "./styles.css";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-input-container">
        <h1>Encontre um perfil Github</h1>
        <form>
          <input type="text" placeholder="Usuário Github" />
          <button type="submit" className="btn btn-primary btn-lg start-button">
            Encontrar
          </button>
        </form>
      </div>
      <div className="search-result-container">
        <ResultCard login="acnelio" followers="5400" name="Nelio Alves" location="Brazil" avatar_url="https://avatars.githubusercontent.com/u/13897257?v=4"/>
      </div>
    </div>
  );
};

export default Search;
