import React from 'react'
import style from './style.css'


class Progress extends React.Component {


    componentDidMount () {
        const canvas = this.refs.canvas
        if (canvas) {
            this.canvasDraw(canvas)
        }

        const text = this.refs.requestAnimationFrame
        console.log(1, text)
        if(text) {
         
            this.animateByJs(text)
        }
    }

    render () {
        return <div className={style.root}>
        fe animation
            {/* <canvas ref='canvas'></canvas> */}
            <span ref='requestAnimationFrame'>requestSAnimationFrame</span>
        </div>
    }
}

export default FE
