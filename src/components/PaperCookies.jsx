
import Autor from "../components/Autor";

const PaperCookies = ({ phrase, author }) => {
  return (
    <div className="paperCookies">
      <span>{phrase}</span>
      <Autor 
      author = {author}
      />
    </div>
  );
};

export default PaperCookies;
