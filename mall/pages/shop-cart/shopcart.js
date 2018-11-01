function showShopCartRedDot () {
  wx.showTabBarRedDot({ index: 2 })
}
function hideShopCartRedDot (){
  wx.showTabBarRedDot({ index: -1 })
}
module.exports = {
  showShopCartRedDot: showShopCartRedDot,
  hideShopCartRedDot: hideShopCartRedDot
}