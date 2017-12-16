import React from 'react'

import './Progressbar.styl'

class Progressbar extends React.PureComponent {
  onChange (value) {
    const { editable, onChange } = this.props

    if (!editable) return () => {}

    return () => onChange(value)
  }

  render () {
    const { className, label, progress } = this.props

    return <div className={`progressbar ${className}`}>
      {[1, 2, 3, 4].map(x => progress >= x
        ? <div
          className='step done'
          key={`progress-${x}`}
          onClick={this.onChange(x)}
        />
        : <div
          className='step'
          key={`progress-${x}`}
          onClick={this.onChange(x)}
        />
      )}
      <span className='label'>{ label }</span>
    </div>
  }
}

Progressbar.propTypes = {
  className: React.PropTypes.string,
  editable: React.PropTypes.bool,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
  progress: React.PropTypes.number
}

export default Progressbar
