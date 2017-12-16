import React from 'react'
import InputElement from 'react-input-mask'

const ISBN_MASK = `999 9 999 99999 9`

class ISBNInput extends React.PureComponent {
  onChange (e) {
    const value = e.target.value.split(' ').join('')
    this.props.onChange(value)
  }

  render () {
    const { value, ...extraProps } = this.props

    return <InputElement
      mask={ISBN_MASK}
      maskChar={null}
      placeholder='000 0 000 00000 0'
      type='text'
      {...extraProps}
      onChange={this.onChange.bind(this)}
      value={value}
    />
  }
}

ISBNInput.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func
}

export default ISBNInput
