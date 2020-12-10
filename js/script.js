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
      deleteState:"",
      search: "",
      listFiltered:""
    },
    created: function() {
      this.list.sort();
      this.listFiltered = this.list;
    },
    methods: {
      // add element on list
      addNewElement: function() {
        if(this.newElement != "") {
          this.deleteState = "";
          if(this.list[0] == "BRAVO, HAI FATTO TUTTO!!!") {
            this.list.splice(0,1);
          }
          this.listFiltered.push(this.newElement);
          this.newElement = "";
          this.listFiltered.sort();
        }
      },
      // remove element on list
      remove: function(index) {
        this.listFiltered.splice(index,1);
        if (this.list.length == 0) {
          this.list[index] = "BRAVO, HAI FATTO TUTTO!!!";
          this.deleteState = "delete";
        }
      },
      // delete all element on list
      clearList: function() {
        this.listFiltered = [];
      },
      // filter in list
      filterList: function() {
        if (this.search != "") {
          this.listFiltered = this.listFiltered.filter(
            (element)=> element.includes(this.search)
          );
        } else this.listFiltered = this.list;
      }
    }
  }
);
