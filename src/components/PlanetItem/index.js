import './index.css'

const Planet = props => {
  const {send} = props
  const {imageUrl, name, description} = send
  return (
    <div className="mini">
      <img className="icon" alt={`planet ${name}`} src={imageUrl} />
      <h1 className="head">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default Planet
