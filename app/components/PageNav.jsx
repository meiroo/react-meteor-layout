import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './PageNav.css';

const NavItems = [
	{ value: '/css',         label: 'CSS' },
	{ value: '/grid',        label: 'Grid' },
	{ value: '/buttons',     label: 'Buttons' },
	{ value: '/glyphs',      label: 'Glyphs' },
	{ value: '/forms',       label: 'Forms' },
	{ value: '/spinner',     label: 'Spinner' },
	{ value: '/modal',       label: 'Modal' },
	{ value: '/misc',        label: 'Misc' }
	// { value: 'date-picker', label: 'Date Picker' }
];

export default class PageNav extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      mobileMenuIsVisible: false,
		  windowHeight: window.innerHeight,
		  windowWidth: window.innerWidth
	    };
	  }

	componentDidMount () {
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize () {
		this.setState({
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		});
	}

	toggleMenu () {
		this.setState({
			mobileMenuIsVisible: !this.state.mobileMenuIsVisible
		});
	}

	render () {
		var self = this;
		var height = (this.state.windowWidth < 768) ? this.state.windowHeight : 'auto';
		var menuClass = this.state.mobileMenuIsVisible ? 'primary-nav-menu is-visible' : 'primary-nav-menu is-hidden';
		var menuItems = NavItems.map(function(item) {
			return (
				<a key={item.value} className="primary-nav__item" activeClassName="active" onClick={self.toggleMenu} href={item.value}>
					<span className="primary-nav__item-inner">{item.label}</span>
				</a>
			);
		});
		return (
			<nav className="primary-nav">
				<a href="/home" className="primary-nav__brand special" title="Home">
					<img src="./images/elemental-logo-paths.svg" className="primary-nav__brand-src" />
				</a>
				{/*<Link to="home">Home</Link>*/}
				<button onClick={this.toggleMenu} className="primary-nav__item primary-nav-menu-trigger">
					<span className="primary-nav-menu-trigger-icon octicon octicon-navicon" />
					<span className="primary-nav-menu-trigger-label">{this.state.mobileMenuIsVisible ? 'Close' : 'Menu'}</span>
				</button>
				<div className={menuClass} style={{ height }}>
					<div className="primary-nav-menu-inner">
						{menuItems}
					</div>
				</div>
				<a href="https://github.com/elementalui/elemental" target="_blank" title="View on GitHub" className="primary-nav__brand right">
					<img src="./images/github-logo.svg" className="primary-nav__brand-src" />
				</a>
			</nav>
		);
	}
}