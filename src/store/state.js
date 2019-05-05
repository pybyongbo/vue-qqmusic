import localStorage from "../util/storage"

//状态数据

const initialState = {
    skin:localStorage.getSkin(),//主题
    showStatus:false,
    song:localStorage.getCurrentSong(),//当前歌曲
    songs:localStorage.getSongs()//歌曲列表
}

export default initialState;