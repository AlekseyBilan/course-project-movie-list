
function Title(props) {
    console.log(props);
    const {titleText} = props; //{title-text:'sth'}
    return (
      <h2 className="Title">
        {titleText}
      </h2>
    );
  }
  
  export default Title;