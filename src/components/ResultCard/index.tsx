import "./styles.css";

type ResultType = {
  login: string;
  followers: string;
  location: string;
  name: string;
  avatar_url: string;
  url: string;
};

const ResultCard = (param: ResultType) => {
  return (
    <div className="result-card-container">
      <div className="result-card-photo">
        <img src={param.avatar_url} alt={param.name} />
      </div>
      <div className="result-card-informations">
        <h1>Informações</h1>
        <p>
          <span className="result-card-label">Perfil:</span>
          <span className="result-card-data">
            <a href={param.url}>{param.url}</a>
          </span>
        </p>
        <p>
          <span className="result-card-label">Seguidores:</span>
          <span className="result-card-data">{param.followers}</span>
        </p>
        <p>
          <span className="result-card-label">Localidade:</span>
          <span className="result-card-data">{param.location}</span>
        </p>
        <p>
          <span className="result-card-label">Nome:</span>
          <span className="result-card-data">{param.name}</span>
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
