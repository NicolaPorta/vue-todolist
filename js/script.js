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
    mounted: function() {

    },
    methods: {
      addNewElement: function() {
        if(this.newElement != "")
        this.list.push(this.newElement);
        this.newElement = "";
      },
      remove: function (index){
        this.list.splice(index,1);
        if (this.list.length == 0) {
          setTimeout(
            function() {
              alert("BRAVO, HAI FATTO TUTTO QUELLO CHE TI ERI PREFISSATO");
            },500)
        }
      }
    }
  }
);
