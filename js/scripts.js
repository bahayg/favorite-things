$(document).ready(function(event){
   $("#formOne").submit(function(event){
     var first = $("input#thing1").val();
     var second = $ ("input#thing2").val();
     var third = $ ("input#thing3").val();
     var forth = $ ("input#thing4").val();
     //var sentence = [$("input#thing1").val(),$("input#thing2").val(), $("input#thing3").val(),$("input#thing4").val()];
      //alert(input);

     var sentence = [first,second,third,forth];
       alert(sentence);
     var fruits = [];
     fruits.push(sentence[1], sentence[0], sentence[2]);
       alert(fruits);
      $("#fruits").append("<li>" + sentence[1] + "</li>")
      $("#fruits").append("<li>" + sentence[0] + "</li>")
      $("#fruits").append("<li>" + sentence[2] + "</li>")
     event.preventDefault();
   });
});
