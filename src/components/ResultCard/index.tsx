import "./styles.css";

const ResultCard = () => {
  return (
    <div className="result-card-container">
      <div className="result-card-photo">
          <img src=""/>
      </div>
      <div className="result-card-informations">
        <h1>Informações</h1>
        <p><span className="result-card-label">Perfil:</span><span className="result-card-data">xxxx</span></p>
        <p><span className="result-card-label">Seguidores:</span><span className="result-card-data">xxxx</span></p>
        <p><span className="result-card-label">Localidade:</span><span className="result-card-data">xxxx</span></p>
        <p><span className="result-card-label">Nome:</span><span className="result-card-data">xxxx</span></p>
      </div>
    </div>
  );
};

export default ResultCard;
