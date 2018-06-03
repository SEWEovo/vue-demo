var app = new Vue({
  el: '#app',
  data:{
  	 newPerson: {
                    name: '',
                    age: 0,
                    sex: 'Male'
                },
  	  	people:[
  		{
  			name:'葱',
  			age:20,
  			sex:'女',
  		},
  		{
  			name:'姜',
  			age:10,
  			sex:'男',
  		},
  		{
  			name:'蒜',
  			age:22,
  			sex:'男',
  		},
  	]},
  	         methods:{
                createPerson: function(){
                    this.people.push(this.newPerson);
                    // 添加完newPerson对象后，重置newPerson对象
                    this.newPerson = {name: '', age: 0, sex: 'Male'}
                },
                deletePerson: function(index){
                    // 删一个数组元素
                    this.people.splice(index,1);
                }
            }
})