import "./Loader.scss";
function Loader({ value }) {
  return (
    <div className={value}>
      <div className="loader-container">
        <div className="pokeball">
          <div className="button"></div>
        </div>
        <h3>Loading...</h3>
      </div>
    </div>
  );
}

export { Loader };
