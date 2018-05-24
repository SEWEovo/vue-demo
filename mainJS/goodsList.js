var app = new Vue({
  el: '#app',
  data:{
  	select:false,
  	goodsList:[
  	{
  		name:'可乐',
  		brand:'可口可乐公司',
  		location:'海外',
  		size:'300ml',
  		number:10,
  		send:'海外仓库',
  		price:3,
  		num:2,
  	},
  	{
  		name:'雪碧',
  		brand:'可口可乐公司',
  		location:'海外',
  		size:'270ml',
  		number:10,
  		send:'海外仓库',
  		price:3,
  		num:1,

  	},
  	{
  		name:'芬达',
  		brand:'可口可乐公司',
  		location:'海外',
  		size:'300ml',
  		number:20,
  		send:'海外仓库',
  		price:4,
  		num:4,
  	},
  	{
  		name:'美年达',
  		brand:'可口可乐公司',
  		location:'海外',
  		size:'300ml',
  		number:16,
  		send:'海外仓库',
  		price:2,
  		num:3,
  	},
  	]
  },
   methods:{
   	selectAll:function(){
   		for(var i=0;i<this.goodsList.length;i++){
   			this.goodsList[i].select=true;
   		}
   	},
   	selectNone:function(){
   		for(var i=0;i<this.goodsList.length;i++){
   			this.goodsList[i].select=false;
   		}
   	},
   	deleteOne:function(index){
   		//选中之后删除
   		//this.goodsList=this.goodsList.filter(function (item) {return !item.select});
   		//点击删除按钮后直接删除
   		this.goodsList.splice(index,1);
   	},
   	deleteGoods:function(){
   		this.goodsList=this.goodsList.filter(function (item) {return !item.select});
   	},
   },
   computed: {
    isSelectAll:function(){
        //如果每一条数据的select都为true，返回true，否则返回false;
        return this.goodsList.every(function (val) { return val.select});
    },
    getTotal:function(){
        //获取goodsList中select为true的数据。
        var _proList=this.goodsList.filter(function (val) { return val.select}),totalPrice=0;
        for(var i=0,len=_proList.length;i<len;i++){
            //总价累加
            totalPrice+=_proList[i].num*_proList[i].price;
        }
        //选择产品的件数就是_proList.length，总价就是totalPrice
        return {totalNum:_proList.length,totalPrice:totalPrice}
    },
},
  mounted:function () {
        var _this=this;
        this.goodsList.map(function (goods) {
            _this.$set(goods, 'select', false);
        })
    },
})
