/*
 * @Date: 2020-02-29 18:41:33
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-03-01 22:47:25
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}