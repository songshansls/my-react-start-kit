import React from 'react'
import { my } from 'constants/data'
import { Button } from '@material-ui/core'

import style from './style.css'

/**
 * 绘制一条曲线路径
 * @param  {Object} ctx canvas渲染上下文
 * @param  {Array<number>} start 起点
 * @param  {Array<number>} end 终点
 * @param  {number} curveness 曲度(0-1)
 */
function drawCurvePath( ctx, start, end, curveness ) {
    // 计算中间控制点
    var cp = [
         ( start[ 0 ] + end[ 0 ] ) / 2 - ( start[ 1 ] - end[ 1 ] ) * curveness,
         ( start[ 1 ] + end[ 1 ] ) / 2 - ( end[ 0 ] - start[ 0 ] ) * curveness
    ];
    ctx.moveTo( start[ 0 ], start[ 1 ] );
    ctx.quadraticCurveTo( 
        cp[ 0 ], cp[ 1 ],
        end[ 0 ], end[ 1 ]
    )
}

const drawSinCurve = () => {

}

const step = (timestamp) => {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    element.style.left = Math.min(progress / 10, 200) + 'px';
    if (progress < 2000) {
      requestAnimationFrame(step);
    }
  }


class FE extends React.Component {
    state = {
        progress: 0
    }
    canvasDraw = (canvas) => {
        canvas.height = 400
        canvas.width = 500
        const context = canvas.getContext('2d')
        const gradient = context.createLinearGradient(0, 0, 0, 400)
        gradient.addColorStop(0, '#e0643a')
        gradient.addColorStop(0.5, '#e6803a')
        gradient.addColorStop(1, '#f3d671')
        // gradient.addColorStop(1, 'green')

        // context.fillStyle = '#acd'
        context.fillStyle = gradient
       

        context.save()


        context.fillStyle = '#ddd'
        context.save()

        context.restore()

        context.fillRect(0, 0, 50, 50)
        context.restore()
        
        context.fillRect(60, 60, 50, 50)


        context.strokeStyle = '#555'
        context.strokeRect(0, 0, 500, 400)

        context.clearRect(20, 20, 10, 10)

        context.beginPath()
        context.arc(100, 100, 50, 0, Math.PI, false)

        drawCurvePath(context, [0, 150], [50, 150], 1)

        context.stroke()
        // context.fill()
    }

    animateByJs = text => {
        requestAnimationFrame((timestamp) => {
            console.log(timestamp)
        })
    }

    timer = null
  
    loadBySetTimeout = (element) => {
        this.timer = setTimeout(() => {
            const width = parseInt(element.style.width)
            if(width < 300) {
                element.style.width = width+ 5 + 'px'
                this.loadBySetTimeout(element)
            } else {
                clearTimeout(this.timer)
            }
        }, 10)
    }

    loadBySetInterval = (element) => {
        this.timer = setInterval(() => {
            const width = parseFloat(element.style.width)
            if(width < 300) {
                element.style.width = width + 0.5 + 'px'
            } else {
                clearInterval(this.timer)
            }
        }, 10)
    }

    loadByRequestAnimationFrame = (element) => {
        this.timer = requestAnimationFrame(() => {
            const width = parseInt(element.style.width)
            if(width < 300) {
                element.style.width = width+ 3 + 'px'
                this.loadByRequestAnimationFrame(element)
            } else {
                cancelAnimationFrame(this.timer)
            }
        })
    }

    componentDidMount () {
        const canvas = this.refs.canvas
        if (canvas) {
            this.canvasDraw(canvas)
        }

        const text = this.refs.requestAnimationFrame
        if(text) {
            this.animateByJs(text)
        }
    }

    render () {
        const { progress } = this.state
        return <div className={style.root}>
        {/* fe animation */}
            <canvas ref='canvas'></canvas>
            <span ref='requestAnimationFrame'>requestSAnimationFrame</span>

            <div className={style.progressBorder}>
                <div className={style.progress} ref='progress' style={ { width: 0} }></div>
            </div>
            <Button
                color='primary'
                onClick={() => {
                    const element = this.refs.progress
                    element.style.width = '0px'
                    this.loadBySetTimeout(element)
                    // this.loadBySetInterval(element)
                    // this.loadByRequestAnimationFrame(element)
                }}
            >
            load
            </Button>
            
        </div>
    }
}

export default FE
