import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import moment from 'moment'

import { AxisLeft, AxisBottom } from '@vx/axis'
import { GradientOrangeRed, GradientTealBlue } from '@vx/gradient'
import { Group } from '@vx/group'
import { scaleTime, scaleLinear } from '@vx/scale'
import { LinePath } from '@vx/shape'

import { yearBooksSelector } from '@selectors/books'

class Takt extends React.PureComponent {
  static propTypes = {
    books: PropTypes.object.isRequired,
    goal: PropTypes.number.isRequired
  }
  static defaultProps = {
    margin: {
      top: 40,
      bottom: 40,
      left: 50,
      right: 40
    }
  }

  state = {
    goal: 12
  }

  setGoal = event => this.setState({
    goal: parseInt(event.target.value)
  })

  getStandardData () {
    const { goal } = this.state
    const currentYear = new Date().getFullYear()
    const firstDate = new Date(currentYear, 0, 1)
    const lastDate = new Date(currentYear + 1, 0, 1)

    return new Array(13).fill(null).map((_, i) => {
      let date = new Date(currentYear, i, 1)

      return {
        date,
        value: (lastDate - date) / (lastDate - firstDate) * goal
      }
    })
  }

  getActualData () {
    const { books } = this.props
    const { goal } = this.state
    const now = moment()
    const currentYear = new Date().getFullYear()

    return new Array(13).fill(null).map((_, i) => {
      const date = moment({
        year: currentYear + Math.floor(i / 12),
        months: i % 12,
        day: 1
      })
      const booksRead = books.filter(b => b.get('endDate').isBefore(date)).size

      return {
        date,
        value: date.isAfter(now)
          ? undefined
          : goal - booksRead
      }
    })
  }

  render () {
    const { margin } = this.props
    const { goal } = this.state

    const width = 700
    const height = 400

    const standardData = this.getStandardData()
    const actualData = this.getActualData()

    const x = d => d.date
    const y = d => d.value

    const xMax = width - margin.left - margin.right
    const yMax = height - margin.top - margin.bottom

    // scales
    const xScale = scaleTime({
      range: [0, xMax],
      domain: [standardData[0].date, standardData[12].date]
    })
    const yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, goal]
    })

    return <main>
      <label htmlFor='goal'>Goal</label>
      <input type='number' id='goal' value={goal} onChange={this.setGoal} />

      <svg width={width} height={height}>
        <GradientOrangeRed id='standardGradient' />
        <GradientTealBlue id='actualGradient' />

        <Group top={margin.top} left={margin.left}>
          <LinePath
            data={actualData}
            xScale={xScale}
            yScale={yScale}
            x={x}
            y={y}
            stroke="url('#actualGradient')"
            strokeWidth={2}
          />
          <LinePath
            data={standardData}
            xScale={xScale}
            yScale={yScale}
            x={x}
            y={y}
            stroke="url('#standardGradient')"
            strokeWidth={2}
          />
        </Group>
        <AxisLeft
          top={margin.top}
          left={margin.left}
          scale={yScale}
          numTicks={goal + 1}
          label='Books'
        />
        <AxisBottom
          top={height - margin.bottom}
          left={margin.left}
          scale={xScale}
          numTicks={13}
          label='Time'
        />
      </svg>
    </main>
  }
}

const mapStateToProps = state => ({
  books: yearBooksSelector(state)
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Takt)
