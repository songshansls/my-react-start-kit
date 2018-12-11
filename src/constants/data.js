export const sidebar = [
    {
        text: 'My',
        route: 'my'
    },{
        text: 'FE',
        route: 'fe'
    },{
        text: 'Real Madrid',
        route: 'rm'
    },{
        text: 'Cpy',
        route: 'cpy'
    }
]

export const my = {
    name: 'Jianqiao.Hu',
    avatar: 'https://lh6.googleusercontent.com/-LTm4t5K5LlU/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7pf8qg3l7ks8URCmHGNNt4YplNvSQ/s96-c/photo.jpg?size=320'
}

export const readList = [
    {
        name: '撒野',
        author: '巫哲'
    },   {
        name: 'GGBR',
        author: 'WZ'
    },{
        name: 'ZFXD',
        author: 'SQC' 
    },{
        name: 'NNQ',
        author: 'SQC' 
    },{
        name: 'TS',
        author: 'BYGJ'
    },{
        name: 'BDXM',
        author: 'WZ'
    },{
        name: 'NYSYL',
        author: 'CJD'
    },{
        name: 'WWLZJZSDLY',
        author: 'SJ'
    },{
        name: 'SPL',
        author: 'Preist'
    },{
        name: 'XQ',
        author: 'GYWX'
    },{
        name: 'TJYXZ',
        author: 'BYGJ'
    }
]

export const graphData = [{
    name: 'closed'
}, {
    name: 'reviewing'
}, {
    name: 'approved'
}, {	
    name: 'rejected'
}]

export const graphLinks = [
    {
        source: 'reviewing',
        target: 'rejected'
}, 
{
        source: 'reviewing',
        target: 'closed'
}, {
    source: 'reviewing',
    target: 'approved'
}, {
    source: 'rejected',
    target: 'reviewing'
}]