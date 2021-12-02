import axios from "axios";
import { useState } from "react";
import ResultCard from "../../components/ResultCard";
import "./styles.css";

type FormData = {
  username: string;
};

type ApiResultType = {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  followers: string;
};

const Search = () => {
  const [githubResult, setGithubResult] = useState<ApiResultType>();

  const [formData, setFormData] = useState<FormData>({
    username: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.username}`)
      .then((response) => {
        setGithubResult(response.data);
      })
      .catch((error) => {
        setGithubResult(undefined);
      });
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário Github"
            name="username"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary btn-lg start-button">
            Encontrar
          </button>
        </form>
      </div>
      <div className="search-result-container">
        {githubResult && (
          <ResultCard
            login={githubResult.login}
            url={githubResult.url}
            followers={githubResult.followers}
            name={githubResult.name}
            location={githubResult.location}
            avatar_url={githubResult.avatar_url}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
