import _ from 'lodash'

let loops = []

/**
 * 注册一个定时函数
 * @param {Function} fn 
 * @param {Number} interval 
 */
export function createInterval (fn, interval) {
  let id = _.uniqueId()
  id = setInterval(fn, interval)
  loops.push(id)
  return id
}
/** 
 * 清除指定的定时函数
 * @param {Number} id  
 */
export function clearSingleLoop (id) {
  if (loops.includes(id)) {
    clearInterval(id)
  } 
}
/**
 * 清除所有定时函数 
 */
export function clearAllLoops () {
  loops.forEach(loop => {
    clearInterval(loop)
  })
}