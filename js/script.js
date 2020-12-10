var app = new Vue(
  {
    el: "#root",
    data: {
      list: [
        "Leggere la traccia dell'esercizio",
        "Impostare link e script della pagina HTML",
        "Programmare la pagina Jscript",
        "Fare il refactoring",
        "Pushare l'esercizio",
        "Riposare con una birra"
      ],
      newElement:""
    },
    methods: {
      addNewElement: function() {
        if(this.newElement != "")
        this.list.push(this.newElement);
        this.newElement = "";
      },
      remove: function (index){
        this.list.splice(index,1);
      }
    }
  }
);
