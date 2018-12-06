import React from 'react'
import NovelList from './NovelList'
import { readList } from 'constants/data'
import style from './style.css'

class Cpy extends React.Component {
	render () {
		return <div className={style.root}>
			<div className={style.left}>
				<div className={style.title}>Read List</div>
					<div className={style.readList}>
						<NovelList
							novels={readList}
						/>
					</div>
			</div>
		</div>
	}
}

export default Cpy
