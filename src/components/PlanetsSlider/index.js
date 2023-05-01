import Slider from 'react-slick'

import Planet from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div data-testid="planets" className="main">
      <h1>PLANETS</h1>
      <Slider>
        {planetsList.map(one => (
          <Planet key={one.id} send={one} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
