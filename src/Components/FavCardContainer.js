import FavCardImage from "./FavCard";
import "../Styles/cardContainer.css";

function FavCardContainer({ movies }) {
  return (
    <div
      style={{
        margin: "2rem auto 2rem auto",
      }}
    >
      <div
        className="cardContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {movies.map((m, index) =>
          m.poster_path !== null ? (
            <FavCardImage
              key={index}
              movies={m}
            />
          ) : null
        )}
        {/* skiping movies with no poster for better experience */}
      </div>
    </div>
  );
}

export default FavCardContainer;
