import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li className="list">
      <div className="img-container">
        <img src={imgUrl} alt={name} className="img" />
      </div>
      <p>{name}</p>
    </li>
  )
}

export default DestinationSearch
