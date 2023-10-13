function two(){
  // var PizzaPrice=localStorage.getItem("PizzaPrice");
 
  //  var PizzaName = localStorage.getItem("PizzaName");
  //  var data =JSON.parse(PizzaName);
  //  console.log(PizzaName);
  // var GST=  localStorage.getItem("GST")

  //  var table = document.getElementById('table').getElementsByTagName('tbody')[0];

  //  var row=table.insertRow();
  //  var PizzaPricecell = row.insertCell();
  //  var PizzaNamecell = row.insertCell();
  //  var GSTcell = row.insertCell();

  //  PizzaNamecell.innerText=PizzaName;
  //  PizzaPricecell.innerText=PizzaPrice;
  //  GSTcell.innerText=GST;

   const VegParadise = document.getElementById("VegParadise");

   VegParadise.addEventListener("click", function(){
        let vegPizza1 = {
          PizzaName: "Veggie Paradise",
          PizzaPrice: 499,
          GST: "Rs.20"
        }
   });
   
  //  localStorage.getItem(vegpizza1)
  //  console.log(vegpizza1)


   Veg_Pizza1 = JSON.stringify(vegPizza1);
  //  console.log(Veg_Pizza1);


  
   localStorage.setItem("vegpizza1", Veg_Pizza1)
   console.log(localStorage);

}

// var PizzaPrice=localStorage.getItem("PizzaPrice");
//   var data =JSON.parse(PizzaPrice);
//   console.log(data);




