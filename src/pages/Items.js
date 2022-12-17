export default function Item(props) {
    return (
      <div className="card">
        <h1>{props.data.name}</h1>
        <p>-{props.data.description}</p>
        <p>Hours: {props.data.time}</p>    
      </div>
    )
}