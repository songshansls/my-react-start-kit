import React from 'react'
import { MenuItem } from '@material-ui/core'
import { sidebar } from 'constants/data'
import { Link, withRouter } from 'react-router-dom'
import { getStringAfter } from 'helpers/util'

import style from './style.css'

class Sidebar extends React.Component {
	state = {
		selectedItem: getStringAfter(this.props.location.pathname, '/')
	}
	render () {
		const { selectedItem } = this.state
		// console.log(sidebar, this.props.location)
		return <div className={style.root}>
			{
				sidebar.map(({ text, route }) => 
					<div
							key={route}
							className={selectedItem === route ? style.selectedItem : style.item}
							onClick={() => {
								this.setState({
									selectedItem: route
								})
							}}
					>
						<Link to={`/${route}`}  key={text}>
							<MenuItem>{text}</MenuItem>
						</Link>
						<img src='/branch.svg' />
					</div> 
				)
			}
		</div>
	}
}

export default withRouter(Sidebar)
