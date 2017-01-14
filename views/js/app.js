(function(){
        var cancelar = getParameterByName("prev");
        var uno=getParameterByName("sexo");
        var sexo=document.getElementById("sexo");
        var nombre=getParameterByName("nombre");
        var nombre_usuario=getParameterByName("nombre_usuario");
        var contrasena=getParameterByName("contrasena");
        var id=getParameterByName("id");
        console.log(nombre);
        console.log(nombre_usuario);
        console.log(contrasena);

      function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }
  var app = angular.module('slidesApp', []);
      app.controller('TextController',['$scope',function ($scope){
        $scope.count=0;
        if(cancelar == 'true'){
          $scope.count = 2;
        }
        this.products=slide1;
        var longi=slide1.length;
        $scope.myFunc=function (){
          if ($scope.count<(longi-1)){
              $scope.count++;
          }
          else{
            document.location.href="../dir/registro1.html";
          }
        }; 

        $scope.count1=0;
        if(uno=="mujer")
        {
          this.products1=slide2b;
        }
        else
        {
          this.products1=slide2a;
        }
        var longi1=slide2a.length;
        $scope.myFunc1=function (){
          if ($scope.count1<(longi1-1)){
              $scope.count1++;
          }
          else{
            document.location.href="../dir/registro2.html?sexo="+uno;
          }
        };     

        $scope.count2=0;
        this.products2=slide3;
        var longi2=slide3.length;
        $scope.myFunc2=function (){
          if ($scope.count2<(longi2-1)){
              $scope.count2++;
          }
          else{
            document.location.href="../dir/bienvenida.html?id="+id;
          }
        };

    }]);
     var slide1=[
       {
        image:"../img/mariapa_feliz.png",
        description:"Hola te doy la bienvenida a este software educativo de la asignatura Ética y Valores II, mi nombre es Sofía soy una reconocida maestra en el IEBO y mi pasión es darle clases a estudiantes  tan inteligentes como tú.",
       },
       {
        image:"../img/mariapa_normal.png",
        description:"Este es un software amigable que pretende acercarte el conocimiento especializado de la  asignatura Ética y Valores II a través del juego (preguntas y respuestas), la competencia sana con tus compañeros, así como prepararte académicamente para superarla exitosamente.",
       },
       {
        image:"../img/mariapa_guiño.png",
        description:"Hoy y el resto de este curso seré tu asistente virtual en esta aventura en el campo de la Ética y Valores, más adelante te daré una explicación detallada de este software; pero por ahora vamos hablar de ti. Veamos… ¿Eres hombre o mujer?",
       }
     ];

     var slide2a=[
       {
        image:"../img/mariapa_normal.png",
        description:"¡Ajá! Lo sabía, eres un chico muy simpático.Oye y a todo esto, por qué no me dices cómo te llamas y cuáles son tus apellidos. También me interesa que selecciones una imagen con la que te identifiques, y llenes los campos que se solicitan en el siguiente formulario:",
       }
     ];

     var slide2b=[
       {
        image:"../img/mariapa_normal.png",
        description:"¡Ajá! Lo sabía, eres una joven muy guapa. Oye y a todo esto, por qué no me dices cómo te llamas y cuáles son tus apellidos. También me interesa que selecciones una imagen con la que te identifiques, y llenes los campos que se solicitan en el siguiente formulario:",
       }
     ];

     var slide3=[
       {
        image:"../img/mariapa_normal.png",
        description:"Perfecto, muy bien '"+nombre+"'. De ahora en adelante te llamaré '"+nombre_usuario+"', recuerda este dato y apuntalo junto con tu contraseña  '"+contrasena+"' en una  libreta para que no se te olviden y puedas continuar con tu aventura cada vez que quieras.",
       },
       {
        image:"../img/mariapa_feliz.png",
        description:"Así que sin más preámbulo, ¡adelante! ¡Bienvenido a la aventura en busca del conocimiento en la asignatura de Ética y Valores II en este software educativo!",
       }
     ];

})(); 