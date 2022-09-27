export default function CardBlock(props) {
  return (
    <div class="card">
      <img src={props.uriImage} alt={props.altImage} />
      <h3>{props.title}</h3>
      <p>
        {props.paragraph}
      </p>
    </div>
  );
}
