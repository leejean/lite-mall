//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    loadingHidden: false , // loading
    goods: [
      
    ],
    loadingMoreHidden:true,
  },
  onLoad: function () {
    var that = this
    wx.showTabBarRedDot({ index: 2 })
    that.getGoodsList()
  },
  //监听该页面用户下拉刷新事件
  onPullDownRefresh: function () {
    var that = this
    that.getGoodsList()
  },
  //页面上拉触底事件的处理函数
  onReachBottom: function () {
    var that = this
    that.getGoodsList()
  },
  getGoodsList: function () {
    var that = this;
    wx.request({
      url: 'https://leejean.cn/api/school/findHotSchools?topsize=1',
      data: {},
      success: function(res) {
        that.setData({
          goods:[],
          loadingMoreHidden:true
        });
        // if (res.data.code != 0 || res.data.data.length == 0) {
        //   that.setData({
        //     loadingMoreHidden:false,
        //   });
        //   return;
        // }
        var goods = [{
          "id": 6765,
          "pic": "https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg",
          "name": "x500 个钻石小福袋",
          "minPrice": 998.88,
          "originalPrice": 788.99,
        }, {
            "id": 6765,
            "pic": "https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg",
            "name": "x500 个钻石小福袋",
            "minPrice": 998.88,
            "originalPrice": 788.99,
          }, {
            "id": 6765,
            "pic": "https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg",
            "name": "x500 个钻石小福袋",
            "minPrice": 998.88,
            "originalPrice": 788.99,
          }, {
            "id": 6765,
            "pic": "https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg",
            "name": "x500 个钻石小福袋",
            "minPrice": 998.88,
            "originalPrice": 788.99,
          }, {
            "id": 6765,
            "pic": "https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg",
            "name": "x500 个钻石小福袋",
            "minPrice": 998.88,
            "originalPrice": 788.99,
          }, {
            "id": 6765,
            "pic": "https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg",
            "name": "x500 个钻石小福袋",
            "minPrice": 998.88,
            "originalPrice": 788.99,
          }
        ];
        that.setData({
          goods:goods,
        });
      }
    })
  }
})
