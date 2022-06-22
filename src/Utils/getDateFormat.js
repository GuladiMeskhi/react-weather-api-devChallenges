export const getDateFormat = (str) => {
	const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    let dateArr = str.split(/[^a-zA-Z0-9]/g)
    let monthDay = dateArr.splice(1,2).reverse()
    let time = parseInt(monthDay[1])
    let newFormat = []
    newFormat.push(monthDay[0],months[time-1])
    return newFormat.join(' ')
}
