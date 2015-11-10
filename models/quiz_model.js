var AbstractQuiz = require('../models/abstract_quiz_model.js');

function Quiz() {

  AbstractQuiz.call(this);

  this.q.push(

    { pregunta: '¿Cuantos anillos ha ganado Michael Jordan?',
      respuesta: function(x) {
        return (/^\s*seis\s*$/i).exec(x);
      }
    },

    {
      pregunta: '¿Quien es el entrenador con más anillos de la NBA?',
      respuesta: function(x) {
        return (/\s*phill jackson\s*$/i).exec(x);
      }
    },

    { pregunta: '¿Cuantos titulos ganó el Real Madrid Baloncesto en la pasada temporada?',
      respuesta: function(x) {
        return (/\s*cinco\s*$/i).exec(x);
      }
    },

    { pregunta: '¿Cúal es la nacionalidad de Milos Teodosic?',
      respuesta: function(x) {
        return (/\s*serbio\s*$/i).exec(x);
      }
    },
    
    { pregunta: '¿En qué año murió Drazen Petrovic?',
      respuesta: function(x) {
        return (/\s*1993\s*$/i).exec(x);
      }
    },
    
    { pregunta: '¿Quien fue el mejor amigo de Petrovic en sus comienzos en la NBA?',
      respuesta: function(x) {
        return (/\s*vlade divac\s*$/i).exec(x);
      }
    }

  );

  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<3;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      var n2 = Math.randomInt(9)+1;
      self.q.push(
        { pregunta: '¿ '+n1+'x'+n2+" ?",
          respuesta: function(x) {
            return (x == n1*n2);
        }
      })
    })();
  }
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

Quiz.prototype.numQuestions = function() {
  return this.q.length;
}

Quiz.prototype.getQ = function(x){
  return this.q[x]['pregunta'];
}

module.exports = Quiz;