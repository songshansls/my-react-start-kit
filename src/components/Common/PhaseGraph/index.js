import React from 'react'
import echarts from 'echarts'

import style from './style.css'

const getMap = links => {
	const map = new Map()
	links.forEach(link => {
		if(typeof link === 'object'){
			const { source, target } = link
			if(map.get(srouce)) {
				const values = map.get(srouce)
				values.push(target)
			} else {
				map.set(source, [target])
			}
		} else {
			throw new Error('link object is invalid')
		}
	})
}

const getLinksWithStyle = links => {
	const linkMap = getMap(links)
}

class PhaseGraph extends React.Component {
	componentDidMount() {
		const {
			data,
			links
		} = this.props
    const dom = this.refs.root
    const myChart = echarts.init(dom)
    const option = {
			tooltip: {},
			animationDurationUpdate: 1500,
			animationEasingUpdate: 'quinticInOut',
			series : [
				{
					type: 'graph',
					layout: 'circular',
					symbolSize: 80,
					label: {
						normal: {
							show: true
						}
					},
					edgeSymbol: ['circle', 'arrow'],
					edgeSymbolSize: [4, 10],
					edgeLabel: {
							normal: {
									textStyle: {
											fontSize: 20
									}
							}
					},
					data,
					links: getLinksWithStyle(links),
					lineStyle: {
						normal: {
							opacity: 0.9,
							width: 2,
							curveness: 0
						}
					}
				}
			]
			}
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}
    render () {
        return <div className={style.root} ref='root'>
        PhaseGraph
        </div>
    }
}

export default PhaseGraph
