//============== CREATE ARRAY ===============================================//
function createarray() {
    var numbers = [];
    var num = getnum_value();

    for (var i = 0; i < num; i++) {
        numbers.push(Math.floor(Math.random() * 100) + 1);
    }

    for (var i = 0; i < num; i++) {
        console.log(numbers[i]);
    }

    return numbers;
}

//=========================== CREATE DIV ELEMENTS AND APPEND IT ==============//
function create_element()
{  
     remove_child();
     
     var num = getnum_value();
     var numbers = createarray();

     for(var i=0;i<num;i++)
     {
         var d = document.createElement("div");
         d.classList.add("bars_div");
         
         var num_ = numbers[i];
         
         d.style.height =  `${num_*3}px`;
         d.style.transform = `translateX(${i}px)`;

        var bar = document.getElementById("bar_element");
        bar.appendChild(d);
     }

     //Enable all buttons except New Array
     var is = document.getElementById('insertion-sort'); is.disabled = false;
     var bs = document.getElementById('bubble-sort'); bs.disabled = false;
     var qs = document.getElementById('quick-sort'); qs.disabled = false;
    
     var ss = document.getElementById('selection-sort'); ss.disabled = false;
     var n = document.getElementById('number'); n.disabled = false;
}

// ======== REMOVE PREVIOUS CHILDS WHILE MAKING NEW ARRAY ===================//
function remove_child()
{
    var e = document.querySelector("section");
        
    //e.firstElementChild can be used.
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }

}

var delay;
//=========  GET THE VALUE SELECTED FOR LENGTH OF ARRAY =====================// 
function getnum_value()
{
    var num;
    var id = document.getElementById('number');
    num  = parseInt(id.value); 

    if(num == 10 || num == 20)
    delay = 400;
    else if(num==50)
    delay = 300;
    else
    delay = 150;

    return num;
}

//========================= SELECTION SORT =================================//
async function selection_sort()
{
      
    //Disable all buttons 
    var is = document.getElementById('insertion-sort'); is.disabled = true;
    var bs = document.getElementById('bubble-sort'); bs.disabled = true;
    var qs = document.getElementById('quick-sort'); qs.disabled = true;
   
    var n = document.getElementById('number'); n.disabled = true;


    var bars = document.querySelectorAll(".bars_div");

    for(var i=0;i<bars.length;i++)
    {
        var min_idx = i;

        bars[i].style.backgroundColor = "Yellow";

        for(var j = i+1; j < bars.length;j++)
        {
            bars[j].style.backgroundColor = "Red";
            
            await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );
          
          
          var height1 = bars[j].offsetHeight;
          var height2 = bars[min_idx].offsetHeight;

          if(height1 < height2)
          {
            if (min_idx !== i) {
  
                // Provide skyblue color to the (min-idx)th bar
                bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
              }
              min_idx = j;
          }
          else
          {
            bars[j].style.backgroundColor = " rgb(24, 190, 255)";
          }
      
        }
         // swap min_idx and j
         var h1 = bars[min_idx].offsetHeight;
         var h2 = bars[i].offsetHeight;

         bars[i].style.height = `${h1}px`;
         bars[min_idx].style.height = `${h2}px`;

         await new Promise((resolve) =>
         setTimeout(() => {
         resolve();
         },delay)
        );

        // Provide skyblue color to the (min-idx)th bar
        bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
  
        // Provide lightgreen color to the ith bar
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";

    }

        //Enable all buttons except New Array
        var is = document.getElementById('insertion-sort'); is.disabled = false;
        var bs = document.getElementById('bubble-sort'); bs.disabled = false;
        var qs = document.getElementById('quick-sort'); qs.disabled = false;
        
        var n = document.getElementById('number'); n.disabled = false;
}
//========================= SELECTION SORT =================================//

//=========================== QUICK SORT ==================================//
var bars;
async function partition(low,high)
{
   bars[high].style.backgroundColor ="Yellow";
   var pivot = bars[high].offsetHeight;

   var i = (low - 1); 
 
  
    for (var j = low; j <= high - 1; j++) 
    { 
      var h1 = bars[j].offsetHeight;
      bars[j].style.backgroundColor = "Red";
      
      await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );

        if (h1 < pivot) 
        { 
           
          i++;

          var h_i = bars[i].offsetHeight;
          var h_j = bars[j].offsetHeight;

          bars[j].style.height = `${h_i}px`;
          bars[i].style.height = `${h_j}px`;

          bars[i].style.backgroundColor = "Orange";

            if( j != i)
            {
                bars[j].style.backgroundColor = "Pink";
            }
            
        }
        else
        {
            bars[j].style.backgroundColor = "Pink";
        } 

        await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );
    } 

    i++; 
    var h_i = bars[i].offsetHeight;
    var h_h = bars[high].offsetHeight;

    bars[i].style.height = `${h_h}px`;
    bars[high].style.height = `${h_i}px`;
    //swap(&arr[i + 1], &arr[high]); 

    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );

  
  bars[i].style.backgroundColor = "rgb(49, 226, 13)";
  bars[high].style.backgroundColor = "Pink";

  return i;

}

async function solve(low,high)
{
   if(low < high)
   {
     var idx = await partition(low,high);

     await solve(low,idx-1);
     await solve(idx+1,high);
   }
   else //if(low == high)
   {
    bars[low].style.backgroundColor = "rgb(49, 226, 13)";
   }

}

async function quicksort()
{

  //Disable all buttons 
  var is = document.getElementById('insertion-sort'); is.disabled = true;
  var bs = document.getElementById('bubble-sort'); bs.disabled = true;
  var ss = document.getElementById('selection-sort'); ss.disabled = true;
 
  var n = document.getElementById('number'); n.disabled = true;

   bars = document.querySelectorAll(".bars_div");   
    
   await solve(0,bars.length-1); 

   for(var k =0; k<= bars.length-1;k++)
   bars[k].style.backgroundColor = "rgb(49, 226, 13)";

   var is = document.getElementById('insertion-sort'); is.disabled = false;
  var bs = document.getElementById('bubble-sort'); bs.disabled = false;
  var ss = document.getElementById('selection-sort'); ss.disabled = false;
  
  var n = document.getElementById('number'); n.disabled = false;

}
//=========================== QUICK SORT ===================================//

//========================== INSERTION SORT ================================//
async function insertionsort()
{

  //Disable all buttons 
  var ss = document.getElementById('selection-sort'); ss.disabled = true;
  var bs = document.getElementById('bubble-sort'); bs.disabled = true;
  var qs = document.getElementById('quick-sort'); qs.disabled = true;
 
  var n = document.getElementById('number'); n.disabled = true;
  var bars = document.querySelectorAll(".bars_div");   
    
  var i, key, j;
  for (i = 1; i < bars.length; i++)
  {
      key = bars[i].offsetHeight;
      bars[i].style.backgroundColor = "Yellow";

      await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );

      j = i - 1;
      bars[j].style.backgroundColor = "Red";
      
      await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );


      while (j >= 0 && bars[j].offsetHeight > key)
      {
          var b_j1 =  bars[j + 1].offsetHeight;
          var b_j =  bars[j].offsetHeight;


          bars[j + 1].style.height = `${b_j}px`; 
          bars[j].style.height = `${b_j1}px`; 

          bars[j + 1].style.backgroundColor = "rgb(49, 226, 13)";
          bars[j].style.backgroundColor = "Red";
          
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );


          j = j - 1;
      }
      
      if(j == i-1)
      {
        bars[j].style.backgroundColor = "rgb(49, 226, 13)";
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      }

      var b_j1 =  bars[j + 1].offsetHeight;
      bars[j+1].style.height = `${key}px`;
     
      bars[j+1].style.backgroundColor = "rgb(49, 226, 13)";

      await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );

  }
  var ss = document.getElementById('selection-sort'); ss.disabled = false;
  var bs = document.getElementById('bubble-sort'); bs.disabled = false;
  var qs = document.getElementById('quick-sort'); qs.disabled = false;
  
  var n = document.getElementById('number'); n.disabled = false;
}
//========================= INSERTION SORT =================================//

//======================== BUBBLE SORT ====================================//
async function bubblesort() {

  //Disable all buttons 
  var is = document.getElementById('insertion-sort'); is.disabled = true;
  var ss = document.getElementById('selection-sort'); ss.disabled = true;
  var qs = document.getElementById('quick-sort'); qs.disabled = true;
 
  var n = document.getElementById('number'); n.disabled = true;

  var bars = document.querySelectorAll(".bars_div");

  var i, j;
  var n = bars.length;

  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {

      bars[j].style.backgroundColor = "Red";

      await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );

      if (bars[j].offsetHeight > bars[j + 1].offsetHeight) 
      {
         var h_j =    bars[j].offsetHeight;
         var h_j1 = bars[j + 1].offsetHeight;

         bars[j].style.height = `${h_j1}px`;
         bars[j+1].style.height = `${h_j}px`;
         
         bars[j].style.backgroundColor = " rgb(24, 190, 255)";
         bars[j+1].style.backgroundColor = "Red";

         await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );
      }
      else
      {
        bars[j].style.backgroundColor = " rgb(24, 190, 255)";
      }
    }

    bars[n-i-1].style.backgroundColor = "rgb(49, 226, 13)";
  }
  bars[0].style.backgroundColor = "rgb(49, 226, 13)"

  var is = document.getElementById('insertion-sort'); is.disabled = false;
  var ss = document.getElementById('selection-sort'); ss.disabled = false;
  var qs = document.getElementById('quick-sort'); qs.disabled = false;
  
  var n = document.getElementById('number'); n.disabled = false;
}
//======================== BUBBLE SORT ====================================//





