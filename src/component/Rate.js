import React from 'react'
import Movie from './Movie'

const range = (min, max) =>
  Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem  = ({ checked, colored, onChange, value }) => (
  <label className={`rating__item ${colored ? 'rating__item--selected' : ''}`}>
    <input
      checked={checked}
      className='rating__input'
      onChange={(e) => onChange(value)}
      type="radio"
      value={value}
    />
  </label>
)

const Rating = ({ min, max, onChange, value, handleRate }) => {
  return (
    <div className='rating'>
      {
        range(min, max).map((item, i) => (
          <RatingItem
            colored={value >= item}
            checked={value === item}
            value={item}
            onChange={onChange}
            onClick={()=>handleRate(i+1)}
          />
        ))
      }
    </div>
  )
}

class Rate extends React.Component {
  constructor (props) {
    super(props)

    this.state = { rating: this.props.nb }
  }

  render () {
    return (
      <Rating
        min={1}
        max={5}
        onChange={(rating) => this.setState({ rating })}
        value={this.state.rating}
      />
    )
  }
}
export default Rate

