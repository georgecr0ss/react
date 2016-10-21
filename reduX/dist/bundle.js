(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var todo = function todo(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
      break;
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, { completed: !state.completed });
    default:

      break;

  }
};
var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case "ADD_TODO":
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
      break;
    case "TOGGLE_TODO":
      return state.map(function (t) {
        return todo(t, action);
      });
      break;
    default:
      return state;
      break;
  }
};
var testAddTodo = function testAddTodo() {
  var stateBefore = [];
  var action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  var stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }];
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

var toggleTodo = function toggleTodo() {
  var stateBefore = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }, {
    id: 1,
    text: 'Go shopping',
    completed: false
  }];
  var action = {
    type: 'TOGGLE_TODO',
    id: 1
  };
  var stateAfter = [{
    id: 0,
    text: 'Learn Redux',
    completed: false
  }, {
    id: 1,
    text: 'Go shopping',
    completed: true
  }];

  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(todos(stateBefore, action)).toEqual(stateAfter);
};

testAddTodo();
toggleTodo();
console.log("Test Passed");

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQUEsSUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzlCLFVBQVEsT0FBTyxJQUFmO0FBQ0UsU0FBSyxVQUFMO0FBQ0UsYUFBUTtBQUNKLFlBQUksT0FBTyxFQURQO0FBRUosY0FBTSxPQUFPLElBRlQ7QUFHSixtQkFBVztBQUhQLE9BQVI7QUFLQTtBQUNGLFNBQUssYUFBTDtBQUNFLFVBQUcsTUFBTSxFQUFOLEtBQWEsT0FBTyxFQUF2QixFQUEyQjtBQUN6QixlQUFPLEtBQVA7QUFDRDtBQUNELGFBQU8sT0FBTyxNQUFQLENBQ0gsRUFERyxFQUVILEtBRkcsRUFHSCxFQUFDLFdBQVcsQ0FBQyxNQUFNLFNBQW5CLEVBSEcsQ0FBUDtBQUtGOztBQUVBOztBQW5CRjtBQXNCRCxDQXZCRDtBQXdCQSxJQUFNLFFBQVEsU0FBUixLQUFRLEdBQXdCO0FBQUEsTUFBdkIsS0FBdUIsdUVBQWYsRUFBZTtBQUFBLE1BQVgsTUFBVzs7QUFDcEMsVUFBUSxPQUFPLElBQWY7QUFDRSxTQUFLLFVBQUw7QUFDRSwwQ0FDSyxLQURMLElBRUUsS0FBSyxTQUFMLEVBQWdCLE1BQWhCLENBRkY7QUFJQTtBQUNGLFNBQUssYUFBTDtBQUNFLGFBQU8sTUFBTSxHQUFOLENBQVU7QUFBQSxlQUFLLEtBQUssQ0FBTCxFQUFRLE1BQVIsQ0FBTDtBQUFBLE9BQVYsQ0FBUDtBQUNBO0FBQ0Y7QUFDRSxhQUFPLEtBQVA7QUFDQTtBQVpKO0FBY0QsQ0FmRDtBQWdCQSxJQUFNLGNBQWMsU0FBZCxXQUFjLEdBQU07QUFDeEIsTUFBTSxjQUFjLEVBQXBCO0FBQ0EsTUFBTSxTQUFTO0FBQ2IsVUFBTSxVQURPO0FBRWIsUUFBSSxDQUZTO0FBR2IsVUFBTTtBQUhPLEdBQWY7QUFLQSxNQUFNLGFBQWEsQ0FDakI7QUFDRSxRQUFJLENBRE47QUFFRSxVQUFNLGFBRlI7QUFHRSxlQUFXO0FBSGIsR0FEaUIsQ0FBbkI7QUFPQSxhQUFXLFdBQVg7QUFDQSxhQUFXLE1BQVg7QUFDQSxTQUNFLE1BQU0sV0FBTixFQUFtQixNQUFuQixDQURGLEVBRUUsT0FGRixDQUVVLFVBRlY7QUFHRCxDQW5CRDs7QUFxQkEsSUFBTSxhQUFhLFNBQWIsVUFBYSxHQUFNO0FBQ3ZCLE1BQU0sY0FBYyxDQUNsQjtBQUNFLFFBQUksQ0FETjtBQUVFLFVBQU0sYUFGUjtBQUdFLGVBQVc7QUFIYixHQURrQixFQU1sQjtBQUNFLFFBQUksQ0FETjtBQUVFLFVBQU0sYUFGUjtBQUdFLGVBQVc7QUFIYixHQU5rQixDQUFwQjtBQVlBLE1BQU0sU0FBUztBQUNiLFVBQU0sYUFETztBQUViLFFBQUk7QUFGUyxHQUFmO0FBSUEsTUFBTSxhQUFhLENBQ2pCO0FBQ0UsUUFBSSxDQUROO0FBRUUsVUFBTSxhQUZSO0FBR0UsZUFBVztBQUhiLEdBRGlCLEVBTWpCO0FBQ0UsUUFBSSxDQUROO0FBRUUsVUFBTSxhQUZSO0FBR0UsZUFBVztBQUhiLEdBTmlCLENBQW5COztBQWFBLGFBQVcsV0FBWDtBQUNBLGFBQVcsTUFBWDtBQUNBLFNBQ0UsTUFBTSxXQUFOLEVBQW1CLE1BQW5CLENBREYsRUFFRSxPQUZGLENBRVUsVUFGVjtBQUdELENBbkNEOztBQXFDQTtBQUNBO0FBQ0EsUUFBUSxHQUFSLENBQVksYUFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiQUREX1RPRE9cIjpcclxuICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICBpZDogYWN0aW9uLmlkLFxyXG4gICAgICAgICAgdGV4dDogYWN0aW9uLnRleHQsXHJcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJUT0dHTEVfVE9ET1wiOlxyXG4gICAgICBpZihzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICB7fSxcclxuICAgICAgICAgIHN0YXRlLFxyXG4gICAgICAgICAge2NvbXBsZXRlZDogIXN0YXRlLmNvbXBsZXRlZH1cclxuICAgICAgICApXHJcbiAgICBkZWZhdWx0OlxyXG5cclxuICAgIGJyZWFrO1xyXG5cclxuICB9XHJcbn1cclxuY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkFERF9UT0RPXCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcclxuICAgICAgXVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJUT0dHTEVfVE9ET1wiOlxyXG4gICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKVxyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuY29uc3QgdGVzdEFkZFRvZG8gPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RhdGVCZWZvcmUgPSBbXVxyXG4gIGNvbnN0IGFjdGlvbiA9IHtcclxuICAgIHR5cGU6ICdBRERfVE9ETycsXHJcbiAgICBpZDogMCxcclxuICAgIHRleHQ6ICdMZWFybiBSZWR1eCdcclxuICB9XHJcbiAgY29uc3Qgc3RhdGVBZnRlciA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDAsXHJcbiAgICAgIHRleHQ6ICdMZWFybiBSZWR1eCcsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICAgIH1cclxuICBdXHJcbiAgZGVlcEZyZWV6ZShzdGF0ZUJlZm9yZSlcclxuICBkZWVwRnJlZXplKGFjdGlvbilcclxuICBleHBlY3QoXHJcbiAgICB0b2RvcyhzdGF0ZUJlZm9yZSwgYWN0aW9uKVxyXG4gICkudG9FcXVhbChzdGF0ZUFmdGVyKVxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0YXRlQmVmb3JlID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMCxcclxuICAgICAgdGV4dDogJ0xlYXJuIFJlZHV4JyxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHRleHQ6ICdHbyBzaG9wcGluZycsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2VcclxuICAgIH1cclxuICBdO1xyXG4gIGNvbnN0IGFjdGlvbiA9IHtcclxuICAgIHR5cGU6ICdUT0dHTEVfVE9ETycsXHJcbiAgICBpZDogMVxyXG4gIH1cclxuICBjb25zdCBzdGF0ZUFmdGVyID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMCxcclxuICAgICAgdGV4dDogJ0xlYXJuIFJlZHV4JyxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHRleHQ6ICdHbyBzaG9wcGluZycsXHJcbiAgICAgIGNvbXBsZXRlZDogdHJ1ZVxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGRlZXBGcmVlemUoc3RhdGVCZWZvcmUpXHJcbiAgZGVlcEZyZWV6ZShhY3Rpb24pXHJcbiAgZXhwZWN0KFxyXG4gICAgdG9kb3Moc3RhdGVCZWZvcmUsIGFjdGlvbilcclxuICApLnRvRXF1YWwoc3RhdGVBZnRlcilcclxufVxyXG5cclxudGVzdEFkZFRvZG8oKVxyXG50b2dnbGVUb2RvKClcclxuY29uc29sZS5sb2coXCJUZXN0IFBhc3NlZFwiKTtcclxuIl19
