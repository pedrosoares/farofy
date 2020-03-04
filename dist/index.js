(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  Array.prototype.asyncMap = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(func) {
      var nArray, array, i, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nArray = [];
              array = this;
              _context.t0 = regeneratorRuntime.keys(array);

            case 3:
              if ((_context.t1 = _context.t0()).done) {
                _context.next = 14;
                break;
              }

              i = _context.t1.value;

              if (!array.hasOwnProperty(i)) {
                _context.next = 12;
                break;
              }

              response = func(array[i], i);
              _context.t2 = nArray;
              _context.next = 10;
              return response;

            case 10:
              _context.t3 = _context.sent;

              _context.t2.push.call(_context.t2, _context.t3);

            case 12:
              _context.next = 3;
              break;

            case 14:
              return _context.abrupt("return", nArray);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Array.prototype.asyncForEach = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(func) {
      var array, i;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              array = this;
              _context2.t0 = regeneratorRuntime.keys(array);

            case 2:
              if ((_context2.t1 = _context2.t0()).done) {
                _context2.next = 9;
                break;
              }

              i = _context2.t1.value;

              if (!array.hasOwnProperty(i)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 7;
              return func(array[i], i);

            case 7:
              _context2.next = 2;
              break;

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

})));
