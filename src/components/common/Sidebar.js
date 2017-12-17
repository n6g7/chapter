import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Button from './Button'
import Loader from './Loader'
import { login, logout } from '@actions/user'
import packageConfig from '../../../package.json'
import './Sidebar.styl'

import addBook from '../../images/add-book.svg'
import books from '../../images/books.svg'
import signOut from '../../images/sign-out.svg'
import timeline from '../../images/timeline.svg'
import wishlist from '../../images/wishlist.svg'

class Sidebar extends React.PureComponent {
  renderLink (link, icon, label) {
    return <li>
      <Link to={link} activeClassName='active'>
        <img src={icon} />
        { label }
      </Link>
    </li>
  }

  render () {
    const { loading, loggedIn, login, logout, firstName, photo } = this.props

    return <aside>
      <header>
        <h1>Chapter</h1>
        <nav>
          <ul>
            { this.renderLink('/', books, 'Books') }
            { this.renderLink('wishlist', wishlist, 'Wishlist') }
            { this.renderLink('timeline', timeline, 'Timeline') }
          </ul>
        </nav>
      </header>

      { loading && <Loader small white /> }

      <footer>
        <nav>
          { loggedIn &&
            <div className='profile'>
              <img src={photo} />
              { firstName }
            </div>
          }
          <Button icon={addBook} link='/book/new'>Add a book</Button>
          { !loggedIn && <Button icon={signOut} onClick={login}>Sign in</Button> }
          { loggedIn && <Button icon={signOut} onClick={logout}>Sign out</Button> }
        </nav>
        <a
          href={packageConfig.homepage}
          target='blank'
          title='gh://n6g7/chapter'
        >v{packageConfig.version}</a>
      </footer>
    </aside>
  }
}

Sidebar.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired,
  firstName: React.PropTypes.string,
  photo: React.PropTypes.string
}

const mapStateToProps = state => ({
  loading: state.getIn(['library', 'loading']) || state.getIn(['user', 'loading']),
  loggedIn: state.getIn(['user', 'loggedIn']),
  firstName: state.getIn(['user', 'firstName']),
  photo: state.getIn(['user', 'photo'])
})
const mapDispatchToProps = {
  login,
  logout
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
