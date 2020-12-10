var app = new Vue(
  {
    el: "#root",
    data: {
      list: [
        "leggere la traccia dell'esercizio",
        "impostare link e script della pagina HTML",
        "programmare la pagina Jscript",
        "fare il refactoring",
        "pushare l'esercizio",
        "riposare con una birra"
      ],
      newElement:"",
      deleteState:""
    },
    created: function() {
      this.list.sort();
    },
    methods: {
      addNewElement: function() {
        if(this.newElement != "") {
          this.deleteState = "";
          if(this.list[0] == "BRAVO, HAI FATTO TUTTO!!!") {
            this.list.splice(0,1);
          }
          this.list.push(this.newElement);
          this.newElement = "";
          console.log(this.list);
          this.list.sort();
        }
      },
      remove: function(index) {
        this.list.splice(index,1);
        if (this.list.length == 0) {
          this.list[index] = "BRAVO, HAI FATTO TUTTO!!!";
          this.deleteState = "delete";
        }
      },
      clearList: function() {
        this.list = [];
      }
    }
  }
);
