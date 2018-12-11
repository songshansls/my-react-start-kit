import React from 'react'
import { my, graphData, graphLinks } from 'constants/data'
import PhaseGraph from 'components/Common/PhaseGraph'

import style from './style.css'

class My extends React.Component {
    render () {

        const {
            avatar,
            name
        } = my

        return <div className={style.root}>
            <div className={style.basicInfo}>
                <div className={style.avatarContainer}>
                    <img className={style.avatar} src={avatar}/>
                </div>
                <div className={style.name}>{name}</div>
                <div className={style.graph}>
                    <PhaseGraph
                        data={graphData}
                        links={graphLinks}
                    />
                </div>
            </div>
        </div>
    }
}

export default My
