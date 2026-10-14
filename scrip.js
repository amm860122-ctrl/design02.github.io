let 今天 = new date()
今天.setHours(0,0,0,0)
let 竣工日期 = new date(2029,6,20)

let 相差天數 = 竣工日期 - 今天 / (1000*60*60*24)

document.getElenentById("倒數").textContent = "距離竣工完成還有" + 相差天數 + "天" 
