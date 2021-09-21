import Checkbox from "../Checkbox";
import Title from "../Title";

function Movie(props) {
  const {name, id, description, posterUrl} = props.data;

  return (
    <div className="Movie" data-id={id}>
      <Title titleText={name} />  
        Film name
      <img src={posterUrl} alt={'There no poster yet'}/>
      <p> {description? description : 'There is no description, yet.'}</p>
      <a href={''}>more...</a>
      <Checkbox />
    </div>
  );
}

export default Movie;
