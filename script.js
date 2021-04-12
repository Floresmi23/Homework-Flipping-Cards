new Vue({
  el: "#flashcards-app",
  data: {
    cards:[
      {
        question:"What year was IUPUI founded?",
        answer:"1969",
        category:"history",
        flipped:false
      },{
        question:"What is 2+2?",
        answer:"Fish",
        category:"math",
        flipped:false
      },{
        question:"Is mayonnaise an instrument?",
        answer:"No",
        category:"science",
        flipped:false
      },{
        question:"",
        answer:"",
        category:"",
        flipped:false
      }
    ]
    
  },
  methods:{
    toggleCard: function(card){
      card.flipped = !card.flipped;
    },
    submit:function(){
     this.list.push({name:this.textField});
  
    
    }
  }
})