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
      newElement:"ciao"
    },
    methods: {
      addNewElement: function() {
        this.list.push(this.newElement);
      },
      remove: function (index){
        this.list.splice(index);
      }
    }
  }
);
