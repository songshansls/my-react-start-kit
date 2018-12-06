import React from 'react'
import { List, ListItem } from '@material-ui/core'

import style from './style.css'

class NovelList extends React.Component {
    render () {
        const {
            novels
        } = this.props
        return <div className={style.root}>
            <List>
                {
                    novels.map(({ name, author }) => 
                    <ListItem key={name}>
                        <span className={style.novelName}>{name}</span>
                        <span className={style.novelAuthor}>{author}</span>
                    </ListItem>
                    )
                }
            </List>
        </div>
    }
}

export default NovelList
