function CoreConcept(props) {
  return (
    <div>
      <li>
        <img src={props.image}></img>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    </div>
  );
}

export default CoreConcept;
