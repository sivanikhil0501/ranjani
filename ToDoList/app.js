// $("#btn1").click(function(){
//     console.log("added");
//    const add = document.createElement("input");
//    add.setAttribute("type","text");
//    $(".plus").append(add);
//    $("#save").click(function(){
//       const divide = $(".move").append('<div class="removebtn>');
//       const mover = $(".move").append(add);
//       const mover1 = $(".move").append('<button id ="btn2">Remove</button>');
//       const divide1 = $(".move").append('</div>'); 
//       const mover2 = $(".plus").remove(add);
   
//   $("#btn2").on('click','.removebtn',function(){
// $(this).closest("div").empty;
//   });
//    })
// });
//        console.log("clicking remove");
       
//     //   $(this).parent().remove;
//       // const rem1 = $("#btn2").closest("button").remove;
//    })
// })
//  })
//const todo =new Array();
$("#btn1").click(function(){
   console.log("entered");
   var content = $("#value1").val();
   console.log(content);
   // todo.push(content);
   // console.log(todo);
   if(typeof(!localStorage==undefined)){
      localStorage.setItem(content,value1);
   };
// $("#save").click(function(){
//   // $(".move").append("<li id='"+todo+" >" + "<button>Remove</button>");
const ul = document.getElementById("list");
const add =document.createElement('li');
add.textContent = content;
console.log(add);
//add.setAttribute('id',candid);
//add.appendChild(document.createTextNode(candid));

const sub = document.createElement('button');
 sub.innerHTML = "Remove";
 sub.className = "rem";
 add.append(sub);
 $(".list").append(add);
//  $(".rem").click(function(){
//    // $(".list").empty();
//     $(this).closest("li").empty();
//  });
 
//$("#candid").append(todo);
});
$(".list").on("click",".rem",function(){
   $(this).closest("li").remove();
});


