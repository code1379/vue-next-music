
// 批量获取歌曲 url
import { get } from "@/service/base";

export function processSongs(songs) {
  if(!songs.length) {
    return Promise.resolve(songs)
  }
  // mid 是歌曲 mid 的数组
  // 因为现在后端接口估计改了，所以我们直接把歌曲的 url 现在都先写死，实现功能
  return get("/api/getSongsUrl", {
    mid: songs.map(item => item.mid)
  }).then((res) => {
    // const map = res.map
    // return songs.map(song => {
    //   song.url = map[song.mid]
    //   return song
    // }).filter(song => {
    //   return song.url.indexOf("vkey") > -1
    // })
    return songs.map(song => {
      song.url = 'https://isure.stream.qqmusic.qq.com/C400000hRGWA0NFIF1.m4a?guid=6919564652&vkey=A43D2231EC34063BF8B628D12ACA0131ADB0C7BCEA0AEAA4D4447CA54F316418E78792612AB9B21FE45B04574EA32F23A330922C260D08EB&uin=&fromtag=123032';
      return song
    })
  })
}