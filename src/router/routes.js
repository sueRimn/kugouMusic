import NavBar from '@/components/nav-bar/'
//这样配置 可以在路由中使用 也可以在导航中使用
//懒加载
let NewSong = () =>
    import ('@/views/new-song/new-song')
let Rank = () =>
    import ('@/views/rank/rank')
let Plist = () =>
    import ('@/views/plist/plist')
let Singer = () =>
    import ('@/views/singer/singer')


export let routes = [{
        path: '/',
        title: '新歌',
        name: 'NewSong',
        components: {
            navBar: NavBar,
            default: NewSong
        }
    },
    {
        path: '/rank',
        title: '排行',
        name: 'Rank',
        components: {
            navBar: NavBar,
            default: Rank
        }
    },
    {
        path: '/plist',
        title: '歌单',
        name: 'Plist',
        components: {
            navBar: NavBar,
            default: Plist
        }
    },
    {
        path: '/singer',
        title: '歌手',
        name: 'Singer',
        components: {
            navBar: NavBar,
            default: Singer
        }
    }
]