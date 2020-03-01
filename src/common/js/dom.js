/*
 * @Date: 2020-02-29 16:14:27
 * @LastEditors: BeckoninGshy
 * @LastEditTime: 2020-03-01 23:37:37
 */
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}
