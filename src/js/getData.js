export function mget(date) {
  let dataJson = localStorage.getItem('momeList')
  let data = JSON.parse(dataJson)
  if (date) {
    return data[date]
  } else {
    return data
  }
}
export function mset(obj, date) {
  if (date) {
    let dataJson = localStorage.getItem('momeList')
    let data = JSON.parse(dataJson)
    data[date] = obj
    localStorage.setItem('momeList',JSON.stringify(data))
  } else {
    let data = JSON.stringify(obj)
    localStorage.setItem('momeList',data)
  }
}