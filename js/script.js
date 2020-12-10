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
      newElement:"",
      deleteState:""
    },
    methods: {
      addNewElement: function() {
        if(this.newElement != "") {
          if(this.list[0] = "BRAVO, HAI FATTO TUTTO!!!") {
            this.list.splice(0,1);
          }
          this.list.push(this.newElement);
          this.newElement = "";
        }
      },
      remove: function (index){
        this.list.splice(index,1);
        if (this.list.length == 0) {
          this.list[index] = "BRAVO, HAI FATTO TUTTO!!!";
          this.deleteState = "delete";
          console.log(index);
        }
      }
    }
  }
);
