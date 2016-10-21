(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var toggleTodo = function toggleTodo(todo) {
  return Object.assign({}, todo, {
    completed: !todo.completed
  });
};

var testToggleTodo = function testToggleTodo() {
  var todoBefore = {
    id: 0,
    text: 'Learn Readux',
    completed: false
  };
  var todoAfter = {
    id: 0,
    text: 'Learn Readux',
    completed: true
  };
  deepFreeze(todoBefore);
  expect(toggleTodo(todoBefore)).toEqual(todoAfter);
};

testToggleTodo();
console.log("all test passed");

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sYUFBYSxTQUFiLFVBQWEsQ0FBQyxJQUFELEVBQVU7QUFDM0IsU0FBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLElBQWxCLEVBQXVCO0FBQzVCLGVBQVcsQ0FBQyxLQUFLO0FBRFcsR0FBdkIsQ0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTSxpQkFBaUIsU0FBakIsY0FBaUIsR0FBTTtBQUMzQixNQUFNLGFBQWE7QUFDakIsUUFBSSxDQURhO0FBRWpCLFVBQU0sY0FGVztBQUdqQixlQUFXO0FBSE0sR0FBbkI7QUFLQSxNQUFNLFlBQVk7QUFDaEIsUUFBSSxDQURZO0FBRWhCLFVBQU0sY0FGVTtBQUdoQixlQUFXO0FBSEssR0FBbEI7QUFLQSxhQUFXLFVBQVg7QUFDQSxTQUNFLFdBQVcsVUFBWCxDQURGLEVBRUUsT0FGRixDQUVVLFNBRlY7QUFHRCxDQWZEOztBQWlCQTtBQUNBLFFBQVEsR0FBUixDQUFZLGlCQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHRvZ2dsZVRvZG8gPSAodG9kbykgPT4ge1xyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0b2RvLHtcclxuICAgIGNvbXBsZXRlZDogIXRvZG8uY29tcGxldGVkXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgdGVzdFRvZ2dsZVRvZG8gPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kb0JlZm9yZSA9IHtcclxuICAgIGlkOiAwLFxyXG4gICAgdGV4dDogJ0xlYXJuIFJlYWR1eCcsXHJcbiAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgfVxyXG4gIGNvbnN0IHRvZG9BZnRlciA9IHtcclxuICAgIGlkOiAwLFxyXG4gICAgdGV4dDogJ0xlYXJuIFJlYWR1eCcsXHJcbiAgICBjb21wbGV0ZWQ6IHRydWVcclxuICB9XHJcbiAgZGVlcEZyZWV6ZSh0b2RvQmVmb3JlKVxyXG4gIGV4cGVjdChcclxuICAgIHRvZ2dsZVRvZG8odG9kb0JlZm9yZSlcclxuICApLnRvRXF1YWwodG9kb0FmdGVyKVxyXG59XHJcblxyXG50ZXN0VG9nZ2xlVG9kbygpXHJcbmNvbnNvbGUubG9nKFwiYWxsIHRlc3QgcGFzc2VkXCIpO1xyXG4iXX0=
