(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.GmapVue = {}));
})(this, (function (exports) { 'use strict';

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /**
   * This function helps you to bind events from Google Maps API to Vue events
   *
   * @param  {Object} vueInst the Vue instance
   * @param  {Object} googleMapsInst the Google Maps instance
   * @param  {string[]} events an array of string with all events that you want to bind
   * @returns {void}
   */
  function bindEvents(vueInst, googleMapsInst, events) {
    events.forEach(function (eventName) {
      if (vueInst.$gmapOptions.autoBindAllEvents || vueInst.$listeners[eventName]) {
        googleMapsInst.addListener(eventName, function (ev) {
          vueInst.$emit(eventName, ev);
        });
      }
    });
  }

  /**
   * Function that helps you to capitalize the first letter on a word
   *
   * @param  {string} text the text that you want to capitalize
   * @returns {string}
   */
  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  /**
   * Function that helps you to get all non nullable props from a component
   *
   * @param  {Object} vueInst the Vue component instance
   * @param  {Object} props the props object
   * @returns {Object}
   */
  function getPropsValues(vueInst, props) {
    return Object.keys(props).reduce(function (acc, prop) {
      if (vueInst[prop] !== undefined) {
        acc[prop] = vueInst[prop];
      }
      return acc;
    }, {});
  }

  /**
   * This function is a helper for return to the user the internal Google Maps promise
   * and can wait until it is ready.
   * This piece of code was orignally written by sindresorhus and can be seen here
   * @see https://github.com/sindresorhus/lazy-value/blob/master/index.js
   *
   *  @param  {Function} fn a function that actually return the promise or async value
   * @returns {Function} anonymous function that returns the value returned by the fn parameter
   */
  function getLazyValue(fn) {
    var called = false;
    var ret;
    return function () {
      if (!called) {
        called = true;
        ret = fn();
      }
      return ret;
    };
  }

  /**
   * Strips out the extraneous properties we have in our
   * mapped props definitions
   *
   * @param {Object} mappedProps the mapped props object
   * @returns {Object}
   */
  function mappedPropsToVueProps(mappedProps) {
    return Object.entries(mappedProps).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        prop = _ref2[1];
      var value = {};
      if ('type' in prop) value.type = prop.type;
      if ('default' in prop) value.default = prop.default;
      if ('required' in prop) value.required = prop.required;
      return [key, value];
    }).reduce(function (acc, _ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];
      acc[key] = val;
      return acc;
    }, {});
  }

  /**
   * This function simulates a down arrow key event when user
   * hits return (enter) on the autocomplete component selection
   * the first occurrence in the list.
   *
   * This piece of code was orignally written by amirnissim
   * and has been ported to Vanilla.js by GuillaumeLeclerc
   * @see http://stackoverflow.com/a/11703018/2694653
   *
   * @param  {Object} input the HTML input node element reference
   * @returns {void}
   */
  function downArrowSimulator(input) {
    // eslint-disable-next-line no-underscore-dangle -- Is old style should be analyzed
    var _addEventListener = input.addEventListener ? input.addEventListener : input.attachEvent;

    /**
     * Add event listener wrapper that will replace to default addEventListener or attachEvent function
     *
     * @param  {string} type the event type
     * @param  {Function} listener function should be executed when the event is fired
     * @returns {void}
     */
    function addEventListenerWrapper(type, listener) {
      // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
      // and then trigger the original listener.
      if (type === 'keydown') {
        var origListener = listener;
        // eslint-disable-next-line no-param-reassign -- Is old style this should be analyzed
        listener = function (event) {
          var suggestionSelected = document ? document.getElementsByClassName('pac-item-selected').length > 0 : null;
          if (event.which === 13 && !suggestionSelected) {
            var simulatedEvent = document.createEvent('Event');
            simulatedEvent.keyCode = 40;
            simulatedEvent.which = 40;
            origListener.apply(input, [simulatedEvent]);
          }
          origListener.apply(input, [event]);
        };
      }
      _addEventListener.apply(input, [type, listener]);
    }
    input.addEventListener = addEventListenerWrapper;
    input.attachEvent = addEventListenerWrapper;
  }

  /**
   * When you have two-way bindings, but the actual bound value will not equal
   * the value you initially passed in, then to avoid an infinite loop you
   * need to increment a counter every time you pass in a value, decrement the
   * same counter every time the bound value changed, but only bubble up
   * the event when the counter is zero.
   *
   * @param  {Function} fn Function to be executed to determine if the event was executed
   *
      Example:

      Let's say DrawingRecognitionCanvas is a deep-learning backed canvas
      that, when given the name of an object (e.g. 'dog'), draws a dog.
      But whenever the drawing on it changes, it also sends back its interpretation
      of the image by way of the @newObjectRecognized event.

      <input
        type="text"
        placeholder="an object, e.g. Dog, Cat, Frog"
        v-model="identifiedObject" />
      <DrawingRecognitionCanvas
        :object="identifiedObject"
        @newObjectRecognized="identifiedObject = $event"
        />

      new TwoWayBindingWrapper((increment, decrement, shouldUpdate) => {
        this.$watch('identifiedObject', () => {
          // new object passed in
          increment()
        })
        this.$deepLearningBackend.on('drawingChanged', () => {
          recognizeObject(this.$deepLearningBackend)
            .then((object) => {
              decrement()
              if (shouldUpdate()) {
                this.$emit('newObjectRecognized', object.name)
              }
            })
        })
      })
   */
  function twoWayBindingWrapper(fn) {
    var counter = 0;
    fn(function () {
      counter += 1;
    }, function () {
      counter = Math.max(0, counter - 1);
    }, function () {
      return counter === 0;
    });
  }

  /**
   * Watch the individual properties of a PoD object, instead of the object
   * per se. This is different from a deep watch where both the reference
   * and the individual values are watched.
   *
   * In effect, it throttles the multiple $watch to execute at most once per tick.
   *
   * @param  {Object} vueInst the component instance
   * @param  {string[]} propertiesToTrack string array with all properties that you want to track
   * @param  {Function} handler function to be fired when the prop change
   * @param  {boolean} immediate=false
   * @returns {void}
   */
  function watchPrimitiveProperties(vueInst, propertiesToTrack, handler) {
    var immediate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var isHandled = false;

    /**
     * Function in charge to execute the handler function if it was not fired
     *
     * @returns void
     */
    function requestHandle() {
      if (!isHandled) {
        isHandled = true;
        vueInst.$nextTick(function () {
          isHandled = false;
          handler();
        });
      }
    }
    propertiesToTrack.forEach(function (prop) {
      vueInst.$watch(prop, requestHandle, {
        immediate: immediate
      });
    });
  }

  /**
   * Binds the properties defined in props to the google maps instance.
   * If the prop is an Object type, and we wish to track the properties
   * of the object (e.g. the lat and lng of a LatLng), then we do a deep
   * watch. For deep watch, we also prevent the _changed event from being
   * emitted if the data source was external.
   *
   * @param  {Object} vueInst the component instance
   * @param  {Object} googleMapsInst the Google Maps instance
   * @param  {Object} props object with the component props tha should be synched with the Google Maps instances props
   * @returns {void}
   */
  function bindProps(vueInst, googleMapsInst, props) {
    Object.keys(props).forEach(function (attribute) {
      var _props$attribute = props[attribute],
        twoWay = _props$attribute.twoWay,
        type = _props$attribute.type,
        trackProperties = _props$attribute.trackProperties,
        noBind = _props$attribute.noBind;
      if (!noBind) {
        var setMethodName = "set".concat(capitalizeFirstLetter(attribute));
        var getMethodName = "get".concat(capitalizeFirstLetter(attribute));
        var eventName = "".concat(attribute.toLowerCase(), "_changed");
        var initialValue = vueInst[attribute];
        if (typeof googleMapsInst[setMethodName] === 'undefined') {
          throw new Error( // TODO: Analyze all disabled rules in the file
          // eslint-disable-next-line no-underscore-dangle -- old code should be analyzed
          "".concat(setMethodName, " is not a method of (the Maps object corresponding to) ").concat(vueInst.$options._componentTag));
        }

        // We need to avoid an endless
        // propChanged -> event emitted -> propChanged -> event emitted loop
        // although this may really be the user's responsibility
        if (type !== Object || !trackProperties) {
          // Track the object deeply
          vueInst.$watch(attribute, function () {
            var attributeValue = vueInst[attribute];
            googleMapsInst[setMethodName](attributeValue);
          }, {
            immediate: typeof initialValue !== 'undefined',
            deep: type === Object
          });
        } else {
          watchPrimitiveProperties(vueInst, trackProperties.map(function (prop) {
            return "".concat(attribute, ".").concat(prop);
          }), function () {
            googleMapsInst[setMethodName](vueInst[attribute]);
          }, vueInst[attribute] !== undefined);
        }
        if (twoWay && (vueInst.$gmapOptions.autoBindAllEvents || vueInst.$listeners[eventName])) {
          googleMapsInst.addListener(eventName, function () {
            vueInst.$emit(eventName, googleMapsInst[getMethodName]());
          });
        }
      }
    });
  }

  /**
   * This are GoogleMapsOptions that we want to have like
   * props in our Vue component.
   * This properties are in the way that GoogleMaps accept it
   * and with extraneous properties for the VueJs API.
   * In a previous version of this plugin, to avoid repetition,
   * we created a .js file component with a `mappedProps` key on it
   * and used a variety of helper functions to clean it and bind it
   * to Vue props and watch them, etc.
   * To day our primary main goal is get a more intuitive and descriptive
   * API and a better documentation of it, following this goals we move
   * this extraneous properties to an independent file in order to consume
   * it when is needed.
   * Please you need to remind that you need to create properties in the
   * correspondent Vue component with the same names and the same values
   * for those properties that are not extraneous to Vue.
   */

  var autocompleteMappedProps = {
    bounds: {
      type: Object
    },
    componentRestrictions: {
      type: Object,
      // Do not bind -- must check for undefined
      // in the property
      noBind: true
    },
    types: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  };
  var drawingManagerMappedProps = {
    circleOptions: {
      type: Object,
      twoWay: false,
      noBind: true
    },
    markerOptions: {
      type: Object,
      twoWay: false,
      noBind: true
    },
    polygonOptions: {
      type: Object,
      twoWay: false,
      noBind: true
    },
    polylineOptions: {
      type: Object,
      twoWay: false,
      noBind: true
    },
    rectangleOptions: {
      type: Object,
      twoWay: false,
      noBind: true
    }
  };
  var heatMapLayerMappedProps = {
    options: {
      type: Object,
      twoWay: false,
      default: function _default() {}
    },
    data: {
      type: Array,
      twoWay: true
    }
  };
  var infoWindowMappedProps = {
    content: {
      type: Object,
      twoWay: true
    },
    options: {
      type: Object,
      required: false,
      default: function _default() {
        return {};
      }
    },
    position: {
      type: Object,
      twoWay: true
    },
    zIndex: {
      type: Number,
      twoWay: true
    }
  };
  var kmlLayerMappedProps = {
    clickable: {
      type: Boolean,
      twoWay: true,
      noBind: true
    },
    map: {
      type: Object,
      twoWay: true
    },
    preserveViewport: {
      type: Boolean,
      twoWay: true,
      noBind: true
    },
    screenOverlays: {
      type: Boolean,
      twoWay: true,
      noBind: true
    },
    suppressInfoWindows: {
      type: Boolean,
      twoWay: true,
      noBind: true
    },
    url: {
      type: String,
      twoWay: false
    },
    zIndex: {
      type: Number,
      twoWay: true
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  };
  var mapMappedProps = {
    center: {
      required: true,
      twoWay: true,
      type: Object,
      noBind: true
    },
    zoom: {
      required: false,
      twoWay: true,
      type: Number,
      noBind: true
    },
    heading: {
      type: Number,
      twoWay: true
    },
    mapTypeId: {
      twoWay: true,
      type: String
    },
    tilt: {
      twoWay: true,
      type: Number
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  };
  var markerMappedProps = {
    animation: {
      twoWay: true,
      type: Number
    },
    attribution: {
      type: Object
    },
    clickable: {
      type: Boolean,
      twoWay: true,
      default: true
    },
    cursor: {
      type: String,
      twoWay: true
    },
    draggable: {
      type: Boolean,
      twoWay: true,
      default: false
    },
    icon: {
      twoWay: true
    },
    label: {},
    opacity: {
      type: Number,
      default: 1
    },
    options: {
      type: Object
    },
    place: {
      type: Object
    },
    position: {
      type: Object,
      twoWay: true
    },
    shape: {
      type: Object,
      twoWay: true
    },
    title: {
      type: String,
      twoWay: true
    },
    zIndex: {
      type: Number,
      twoWay: true
    },
    visible: {
      twoWay: true,
      default: true
    }
  };
  var streetViewPanoramaMappedProps = {
    zoom: {
      twoWay: true,
      type: Number
    },
    pov: {
      twoWay: true,
      type: Object,
      trackProperties: ['pitch', 'heading']
    },
    position: {
      twoWay: true,
      type: Object,
      noBind: true
    },
    pano: {
      twoWay: true,
      type: String
    },
    motionTracking: {
      twoWay: false,
      type: Boolean
    },
    visible: {
      twoWay: true,
      type: Boolean,
      default: true
    },
    options: {
      twoWay: false,
      type: Object,
      default: function _default() {
        return {};
      }
    }
  };
  var polygonMappedProps = {
    clickable: {
      type: Boolean,
      noBind: true
    },
    draggable: {
      type: Boolean
    },
    editable: {
      type: Boolean
    },
    fillColor: {
      type: String,
      noBind: true
    },
    fillOpacity: {
      type: Number,
      noBind: true
    },
    strokeColor: {
      type: String,
      noBind: true
    },
    strokeOpacity: {
      type: Number,
      noBind: true
    },
    strokePosition: {
      type: Number,
      noBind: true
    },
    strokeWeight: {
      type: Number,
      noBind: true
    },
    visible: {
      type: Boolean
    },
    options: {
      type: Object
    },
    path: {
      type: Array,
      twoWay: true,
      noBind: true
    },
    paths: {
      type: Array,
      twoWay: true,
      noBind: true
    }
  };
  var polylineMappedProps = {
    clickable: {
      type: Boolean,
      noBind: true
    },
    draggable: {
      type: Boolean
    },
    editable: {
      type: Boolean
    },
    strokeColor: {
      type: String,
      noBind: true
    },
    strokeOpacity: {
      type: Number,
      noBind: true
    },
    strokeWeight: {
      type: Number,
      noBind: true
    },
    visible: {
      type: Boolean
    },
    options: {
      twoWay: false,
      type: Object
    },
    path: {
      type: Array,
      twoWay: true
    }
  };
  var rectangleMappedProps = {
    bounds: {
      type: Object,
      twoWay: true
    },
    clickable: {
      type: Boolean,
      noBind: true
    },
    draggable: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      noBind: true
    },
    fillOpacity: {
      type: Number,
      noBind: true
    },
    strokeColor: {
      type: String,
      noBind: true
    },
    strokeOpacity: {
      type: Number,
      noBind: true
    },
    strokePosition: {
      type: Number,
      noBind: true
    },
    strokeWeight: {
      type: Number,
      noBind: true
    },
    visible: {
      type: Boolean
    },
    options: {
      type: Object,
      twoWay: false
    }
  };
  var circleMappedProps = {
    center: {
      type: Object,
      twoWay: true,
      required: true
    },
    radius: {
      type: Number,
      twoWay: true
    },
    clickable: {
      type: Boolean,
      noBind: true
    },
    draggable: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      noBind: true
    },
    fillOpacity: {
      type: Number,
      noBind: true
    },
    strokeColor: {
      type: String,
      noBind: true
    },
    strokeOpacity: {
      type: Number,
      noBind: true
    },
    strokePosition: {
      type: Number,
      noBind: true
    },
    strokeWeight: {
      type: Number,
      noBind: true
    },
    visible: {
      type: Boolean
    },
    options: {
      type: Object,
      twoWay: false
    }
  };
  var placeInputMappedProps = {
    bounds: {
      type: Object
    },
    defaultPlace: {
      type: String,
      default: ''
    },
    componentRestrictions: {
      type: Object,
      default: null
    },
    types: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    placeholder: {
      required: false,
      type: String
    },
    className: {
      required: false,
      type: String
    },
    label: {
      required: false,
      type: String,
      default: null
    },
    selectFirstOnEnter: {
      require: false,
      type: Boolean,
      default: false
    }
  };
  var clusterIconMappedProps = {
    algorithm: {
      type: Object
    },
    onClusterClick: {
      type: Function
    },
    renderer: {
      type: Object
    },
    options: {
      type: Object
    }
  };

  //

  /**
   * Autocomplete component
   * @displayName GmapAutocomplete
   * @see [source code](/guide/autocomplete.html#source-code)
   */
  var script$d = {
    name: 'AutocompleteInput',
    props: {
      /**
       * Map bounds this is an LatLngBounds
       * object builded with
       * @value new google.maps.LatLngBounds(...)
       * @see [Map Bounds](https://developers.google.com/maps/documentation/javascript/places-autocomplete#set-the-bounds-on-creation-of-the-autocomplete-object)
       */
      bounds: {
        type: Object,
        default: undefined,
      },
      /**
       * Restrict the search to a specific country
       * @value `{[key: string]: string}`
       * @see [componentRestrictions](https://developers.google.com/maps/documentation/javascript/places-autocomplete#restrict-the-search-to-a-specific-country)
       */
      componentRestrictions: {
        type: Object,
        default: undefined,
      },
      /**
       * Map types this is an array of strings
       * @value string[]
       * @see [Map Bounds](https://developers.google.com/maps/documentation/javascript/places-autocomplete#set-the-bounds-on-creation-of-the-autocomplete-object)
       */
      types: {
        type: Array,
        default: undefined,
      },
      /**
       * Select the first result in the list when press enter keyboard
       * @values true, false
       */
      selectFirstOnEnter: {
        required: false,
        type: Boolean,
        default: false,
      },
      /**
       * the unique ref set to the component passed in the slot input
       */
      slotRefName: {
        required: false,
        type: String,
        default: 'input',
      },
      /**
       * The name of the ref to obtain the html input element
       * if its a child  of component in the slot input
       * very useful whe we use a component like v-text-field of vuetify
       * that has a 'input' ref pointing to the final html input element
       */
      childRefName: {
        required: false,
        type: String,
        default: 'input',
      },
      /**
       * Other options that you can pass to the Google Mapas
       * Autocomplete API
       * @values geocode, address, regions
       * @see [Options](https://developers.google.com/maps/documentation/javascript/places-autocomplete#add-autocomplete)
       */
      options: {
        type: Object,
        default: undefined,
      },
      /**
       * To avoid paying for data that you don't need,
       * be sure to use Autocomplete.setFields() to specify
       * only the place data that you will use.
       *
       * @see [Place information](https://developers.google.com/maps/documentation/javascript/places-autocomplete#get-place-information)
       * @see [setFields](https://developers.google.com/maps/documentation/javascript/reference/places-widget#Autocomplete.setFields)
       * @see [PlaceResult](https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult)
       */
      setFieldsTo: {
        required: false,
        type: Array,
        default: null,
      },
    },
    watch: {
      /**
       * This watcher is incharge to update
       * the component restrictions when is
       * changed from the parent
       */
      componentRestrictions(v) {
        if (v !== undefined) {
          this.$autocomplete.setComponentRestrictions(v);
        }
      },
    },
    async mounted() {
      await this.$gmapApiPromiseLazy();

      let scopedInput = null;

      if (this.$scopedSlots.default) {
        if (!Object.keys(this.$scopedSlots.default()[0].context.$refs).length) {
          throw new Error(
            'If you use the slot input you must add a ref to the element that you will use as the input, and if you use a vue component, eg: v-text-field, etc, you need to set the childRefName indicating what is the ref name of the html input elemnt behind your component.'
          );
        }

        scopedInput =
          this.$scopedSlots.default()[0].context.$refs[this.slotRefName];

        if (scopedInput && scopedInput.$refs) {
          scopedInput = scopedInput.$refs[this.childRefName];
        }

        if (scopedInput) {
          this.$refs.input = scopedInput;
        }
      }

      if (this.selectFirstOnEnter) {
        downArrowSimulator(this.$refs.input);
      }

      if (typeof google.maps.places.Autocomplete !== 'function') {
        throw new Error(
          "google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?"
        );
      }

      const autocompleteOptions = {
        ...getPropsValues(this, autocompleteMappedProps),
        ...this.options,
      };

      this.$autocomplete = new google.maps.places.Autocomplete(
        this.$refs.input,
        autocompleteOptions
      );

      bindProps(this, this.$autocomplete, autocompleteMappedProps);

      if (this.setFieldsTo) {
        this.$autocomplete.setFields(this.setFieldsTo);
      }

      // Not using `bindEvents` because we also want
      // to return the result of `getPlace()`
      this.$autocomplete.addListener('place_changed', () => {
        /**
         * Place change event
         * @event place_changed
         * @property {object} place `this.$autocomplete.getPlace()`
         * @see [Get place information](https://developers.google.com/maps/documentation/javascript/places-autocomplete#get-place-information)
         */
        this.$emit('place_changed', this.$autocomplete.getPlace());
      });
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$$autocomplete && this.$$autocomplete.setMap) {
        this.$$autocomplete.setMap(null);
      }
    },
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true;
      // functional template
      if (isFunctionalTemplate) {
        options.functional = true;
      }
    }
    // scopedId
    if (scopeId) {
      options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
      // server build
      hook = function (context) {
        // 2.3 injection
        context = context ||
        // cached call
        this.$vnode && this.$vnode.ssrContext ||
        // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true
        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        }
        // inject component styles
        if (style) {
          style.call(this, createInjectorSSR(context));
        }
        // register component module identifier for async chunk inference
        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      };
      // used by ssr in case component is cached and beforeCreate
      // never gets called
      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }
    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        const originalRender = options.render;
        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
    return script;
  }

  /* script */
  const __vue_script__$d = script$d;

  /* template */
  var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default",function(){return [_c('input',_vm._g(_vm._b({ref:"input"},'input',_vm.$attrs,false),_vm.$listeners))]},{"attrs":_vm.$attrs,"listeners":_vm.$listeners})],2)};
  var __vue_staticRenderFns__$6 = [];

    /* style */
    const __vue_inject_styles__$d = undefined;
    /* scoped */
    const __vue_scope_id__$d = undefined;
    /* module identifier */
    const __vue_module_identifier__$d = undefined;
    /* functional template */
    const __vue_is_functional_template__$d = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$d = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$d,
      __vue_script__$d,
      __vue_scope_id__$d,
      __vue_is_functional_template__$d,
      __vue_module_identifier__$d,
      false,
      undefined,
      undefined,
      undefined
    );

  /**
   * @class MapElementMixin
   *
   * Add a inject object to inject $mapPromise and a provide function to the
   * component this function save the returned Google Maps object in the $map
   * property after the $mapPromise is resolved.
   *
   * ## The mixin code:
   * ```js
    export default {
      inject: {
        $mapPromise: { default: 'abcdef' },
      },
      provide() {
        this.$mapPromise.then((map) => {
          this.$map = map;
        });

        return {};
      },
    };
   * ```
   *
   * @property $mapPromise - The map property that should return the `$map`.<br>
   *           **Note**: although this mixin is not "providing" anything,
   *           components' expect the `$map` property to be present on the component.
   *           In order for that to happen, this mixin must intercept the `$mapPromise
   *           .then(() => {})` first before its component does so.
   *
   *           Since a `provide()` on a mixin is executed before a `provide()` on the
   *           component, putting this code in `provide()` ensures that the `$map` is
   *           already set by the time the component's `provide()` is called.
   * @property $map - The Google map (valid only after the promise (`$mapPromise`) returns)
   */
  var mapElementMixin = {
    inject: {
      $mapPromise: {
        default: 'abcdef'
      }
    },
    provide: function provide() {
      var _this = this;
      /**
       * **Note**: although this mixin is not "providing" anything,
       * components' expect the `$map` property to be present on the component.
       * In order for that to happen, this mixin must intercept the `$mapPromise
       * .then(() => {})` first before its component does so.
       *
       * Since a `provide()` on a mixin is executed before a `provide()` on the
       * component, putting this code in `provide()` ensures that the `$map` is
       * already set by the time the component's `provide()` is called.
       */
      this.$mapPromise.then(function (map) {
        _this.$map = map;
      });
      return {};
    }
  };

  /**
   * Circle component
   * @displayName GmapCircle
   * @see [source code](/guide/circle.html#source-code)
   * @see [official reference](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#Circle)
   */
  var script$c = {
    name: 'CircleShape',
    mixins: [mapElementMixin],
    render() {
      return '';
    },
    provide() {
      // events to bind with toWay
      const events = [
        'click',
        'dblclick',
        'drag',
        'dragend',
        'dragstart',
        'mousedown',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'rightclick',
      ];

      // Infowindow needs this to be immediately available
      const promise = this.$mapPromise
        .then((map) => {
          this.$map = map;

          // Initialize the maps with the given options
          const initialOptions = {
            ...this.options,
            map,
            ...getPropsValues(this, circleMappedProps),
          };

          const { options: extraOptions, ...finalOptions } = initialOptions;

          this.$circleObject = new google.maps.Circle(finalOptions);

          bindProps(this, this.$circleObject, circleMappedProps);
          bindEvents(this, this.$circleObject, events);

          return this.$circleObject;
        })
        .catch((error) => {
          throw error;
        });

      // TODO: analyze the efects of only returns the instance and remove completely the promise
      this.$circlePromise = promise;
      return { $circlePromise: promise };
    },
    props: {
      /**
       * The center of the Circle.
       * @value { lat: 41.878, lng: -87.629 }
       * @see [Circle simple](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.center)
       */
      center: {
        type: Object,
        required: true,
      },
      /**
       * The radius in meters on the Earth's surface.
       * @value 10
       * @see [Circle simple](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.radius)
       */
      radius: {
        type: Number,
        default: 10,
      },
      /**
       * Indicates whether this Polygon handles mouse events. Defaults to true.
       * @value true, false
       * @see [Circle draggable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.clickable)
       */
      clickable: {
        type: Boolean,
        default: false,
      },
      /**
       * If set to true, the user can drag this circle over the map. Defaults to false.
       * @value true, false
       * @see [Circle simple](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.draggable)
       */
      draggable: {
        type: Boolean,
        default: false,
      },
      /**
       * If set to true, the user can edit this circle by dragging the control points shown at the center and around the circumference of the circle. Defaults to false.
       * @value true, false
       * @see [Circle simple](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.editable)
       */
      editable: {
        type: Boolean,
        default: false,
      },
      /**
       * The fill color. All CSS3 colors are supported except for extended named colors.
       * @value '#000'
       * @see [Circle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.fillColor)
       */
      fillColor: {
        type: String,
        default: '',
      },
      /**
       * The fill opacity between 0.0 and 1.0
       * @value 1
       * @see [Circle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.fillOpacity)
       */
      fillOpacity: {
        type: Number,
        default: 1,
      },
      /**
       * The stroke color. All CSS3 colors are supported except for extended named colors.
       * @value '#000'
       * @see [Circle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.strokeColor)
       */
      strokeColor: {
        type: String,
        default: '',
      },
      /**
       * The stroke opacity between 0.0 and 1.0.
       * @value 1
       * @see [Circle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.strokeOpacity)
       */
      strokeOpacity: {
        type: Number,
        default: 1,
      },
      /**
       * The stroke position. Defaults to CENTER.
       * @value 1
       * @see [Circle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.strokePosition)
       * @see [StrokePosition constant](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#StrokePosition)
       */
      strokePosition: {
        type: Number,
        default: 0,
      },
      /**
       * The stroke width in pixels.
       * @value 1
       * @see [Circle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.strokeWeight)
       */
      strokeWeight: {
        type: Number,
        default: 1,
      },
      /**
       * Whether this polyline is visible on the map. Defaults to true.
       * @value 1
       * @see [Circle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#CircleOptions.visible)
       */
      visible: {
        type: Boolean,
        default: true,
      },
      /**
       * The Google Maps circle options
       * @value {
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          map,
          center: citymap[city].center,
          radius: Math.sqrt(citymap[city].population) * 100,
        }
       * @see [Circle simple](https://developers.google.com/maps/documentation/javascript/examples/circle-simple)
       */
      options: {
        type: Object,
        default: undefined,
      },
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$circleObject && this.$circleObject.setMap) {
        this.$circleObject.setMap(null);
      }
    },
  };

  /* script */
  const __vue_script__$c = script$c;

  /* template */

    /* style */
    const __vue_inject_styles__$c = undefined;
    /* scoped */
    const __vue_scope_id__$c = undefined;
    /* module identifier */
    const __vue_module_identifier__$c = undefined;
    /* functional template */
    const __vue_is_functional_template__$c = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$c = /*#__PURE__*/normalizeComponent(
      {},
      __vue_inject_styles__$c,
      __vue_script__$c,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      false,
      undefined,
      undefined,
      undefined
    );

  // do not edit .js files directly - edit src/index.jst

  var fastDeepEqual = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;
      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
        return true;
      }
      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0;) {
        var key = keys[i];
        if (!equal(a[key], b[key])) return false;
      }
      return true;
    }

    // true if both NaN, false otherwise
    return a !== a && b !== b;
  };

  const ARRAY_TYPES = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];

  /** @typedef {Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor} TypedArrayConstructor */

  const VERSION = 1; // serialized format version
  const HEADER_SIZE = 8;
  class KDBush {
    /**
     * Creates an index from raw `ArrayBuffer` data.
     * @param {ArrayBuffer} data
     */
    static from(data) {
      if (!(data instanceof ArrayBuffer)) {
        throw new Error('Data must be an instance of ArrayBuffer.');
      }
      const [magic, versionAndType] = new Uint8Array(data, 0, 2);
      if (magic !== 0xdb) {
        throw new Error('Data does not appear to be in a KDBush format.');
      }
      const version = versionAndType >> 4;
      if (version !== VERSION) {
        throw new Error(`Got v${version} data when expected v${VERSION}.`);
      }
      const ArrayType = ARRAY_TYPES[versionAndType & 0x0f];
      if (!ArrayType) {
        throw new Error('Unrecognized array type.');
      }
      const [nodeSize] = new Uint16Array(data, 2, 1);
      const [numItems] = new Uint32Array(data, 4, 1);
      return new KDBush(numItems, nodeSize, ArrayType, data);
    }

    /**
     * Creates an index that will hold a given number of items.
     * @param {number} numItems
     * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
     * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
     * @param {ArrayBuffer} [data] (For internal use only)
     */
    constructor(numItems, nodeSize = 64, ArrayType = Float64Array, data) {
      if (isNaN(numItems) || numItems < 0) throw new Error(`Unpexpected numItems value: ${numItems}.`);
      this.numItems = +numItems;
      this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
      this.ArrayType = ArrayType;
      this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;
      const arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
      const coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT;
      const idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT;
      const padCoords = (8 - idsByteSize % 8) % 8;
      if (arrayTypeIndex < 0) {
        throw new Error(`Unexpected typed array class: ${ArrayType}.`);
      }
      if (data && data instanceof ArrayBuffer) {
        // reconstruct an index from a buffer
        this.data = data;
        this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
        this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
        this._pos = numItems * 2;
        this._finished = true;
      } else {
        // initialize a new index
        this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords);
        this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
        this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
        this._pos = 0;
        this._finished = false;

        // set header
        new Uint8Array(this.data, 0, 2).set([0xdb, (VERSION << 4) + arrayTypeIndex]);
        new Uint16Array(this.data, 2, 1)[0] = nodeSize;
        new Uint32Array(this.data, 4, 1)[0] = numItems;
      }
    }

    /**
     * Add a point to the index.
     * @param {number} x
     * @param {number} y
     * @returns {number} An incremental index associated with the added item (starting from `0`).
     */
    add(x, y) {
      const index = this._pos >> 1;
      this.ids[index] = index;
      this.coords[this._pos++] = x;
      this.coords[this._pos++] = y;
      return index;
    }

    /**
     * Perform indexing of the added points.
     */
    finish() {
      const numAdded = this._pos >> 1;
      if (numAdded !== this.numItems) {
        throw new Error(`Added ${numAdded} items when expected ${this.numItems}.`);
      }
      // kd-sort both arrays for efficient search
      sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0);
      this._finished = true;
      return this;
    }

    /**
     * Search the index for items within a given bounding box.
     * @param {number} minX
     * @param {number} minY
     * @param {number} maxX
     * @param {number} maxY
     * @returns {number[]} An array of indices correponding to the found items.
     */
    range(minX, minY, maxX, maxY) {
      if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');
      const {
        ids,
        coords,
        nodeSize
      } = this;
      const stack = [0, ids.length - 1, 0];
      const result = [];

      // recursively search for items in range in the kd-sorted arrays
      while (stack.length) {
        const axis = stack.pop() || 0;
        const right = stack.pop() || 0;
        const left = stack.pop() || 0;

        // if we reached "tree node", search linearly
        if (right - left <= nodeSize) {
          for (let i = left; i <= right; i++) {
            const x = coords[2 * i];
            const y = coords[2 * i + 1];
            if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
          }
          continue;
        }

        // otherwise find the middle index
        const m = left + right >> 1;

        // include the middle item if it's in range
        const x = coords[2 * m];
        const y = coords[2 * m + 1];
        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

        // queue search in halves that intersect the query
        if (axis === 0 ? minX <= x : minY <= y) {
          stack.push(left);
          stack.push(m - 1);
          stack.push(1 - axis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
          stack.push(m + 1);
          stack.push(right);
          stack.push(1 - axis);
        }
      }
      return result;
    }

    /**
     * Search the index for items within a given radius.
     * @param {number} qx
     * @param {number} qy
     * @param {number} r Query radius.
     * @returns {number[]} An array of indices correponding to the found items.
     */
    within(qx, qy, r) {
      if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');
      const {
        ids,
        coords,
        nodeSize
      } = this;
      const stack = [0, ids.length - 1, 0];
      const result = [];
      const r2 = r * r;

      // recursively search for items within radius in the kd-sorted arrays
      while (stack.length) {
        const axis = stack.pop() || 0;
        const right = stack.pop() || 0;
        const left = stack.pop() || 0;

        // if we reached "tree node", search linearly
        if (right - left <= nodeSize) {
          for (let i = left; i <= right; i++) {
            if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
          }
          continue;
        }

        // otherwise find the middle index
        const m = left + right >> 1;

        // include the middle item if it's in range
        const x = coords[2 * m];
        const y = coords[2 * m + 1];
        if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

        // queue search in halves that intersect the query
        if (axis === 0 ? qx - r <= x : qy - r <= y) {
          stack.push(left);
          stack.push(m - 1);
          stack.push(1 - axis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
          stack.push(m + 1);
          stack.push(right);
          stack.push(1 - axis);
        }
      }
      return result;
    }
  }

  /**
   * @param {Uint16Array | Uint32Array} ids
   * @param {InstanceType<TypedArrayConstructor>} coords
   * @param {number} nodeSize
   * @param {number} left
   * @param {number} right
   * @param {number} axis
   */
  function sort(ids, coords, nodeSize, left, right, axis) {
    if (right - left <= nodeSize) return;
    const m = left + right >> 1; // middle index

    // sort ids and coords around the middle index so that the halves lie
    // either left/right or top/bottom correspondingly (taking turns)
    select(ids, coords, m, left, right, axis);

    // recursively kd-sort first half and second half on the opposite axis
    sort(ids, coords, nodeSize, left, m - 1, 1 - axis);
    sort(ids, coords, nodeSize, m + 1, right, 1 - axis);
  }

  /**
   * Custom Floyd-Rivest selection algorithm: sort ids and coords so that
   * [left..k-1] items are smaller than k-th item (on either x or y axis)
   * @param {Uint16Array | Uint32Array} ids
   * @param {InstanceType<TypedArrayConstructor>} coords
   * @param {number} k
   * @param {number} left
   * @param {number} right
   * @param {number} axis
   */
  function select(ids, coords, k, left, right, axis) {
    while (right > left) {
      if (right - left > 600) {
        const n = right - left + 1;
        const m = k - left + 1;
        const z = Math.log(n);
        const s = 0.5 * Math.exp(2 * z / 3);
        const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
        const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
        const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
        select(ids, coords, k, newLeft, newRight, axis);
      }
      const t = coords[2 * k + axis];
      let i = left;
      let j = right;
      swapItem(ids, coords, left, k);
      if (coords[2 * right + axis] > t) swapItem(ids, coords, left, right);
      while (i < j) {
        swapItem(ids, coords, i, j);
        i++;
        j--;
        while (coords[2 * i + axis] < t) i++;
        while (coords[2 * j + axis] > t) j--;
      }
      if (coords[2 * left + axis] === t) swapItem(ids, coords, left, j);else {
        j++;
        swapItem(ids, coords, j, right);
      }
      if (j <= k) left = j + 1;
      if (k <= j) right = j - 1;
    }
  }

  /**
   * @param {Uint16Array | Uint32Array} ids
   * @param {InstanceType<TypedArrayConstructor>} coords
   * @param {number} i
   * @param {number} j
   */
  function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
  }

  /**
   * @param {InstanceType<TypedArrayConstructor>} arr
   * @param {number} i
   * @param {number} j
   */
  function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  /**
   * @param {number} ax
   * @param {number} ay
   * @param {number} bx
   * @param {number} by
   */
  function sqDist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
  }

  const defaultOptions = {
    minZoom: 0,
    // min zoom to generate clusters on
    maxZoom: 16,
    // max zoom level to cluster the points on
    minPoints: 2,
    // minimum points to form a cluster
    radius: 40,
    // cluster radius in pixels
    extent: 512,
    // tile extent (radius is calculated relative to it)
    nodeSize: 64,
    // size of the KD-tree leaf node, affects performance
    log: false,
    // whether to log timing info

    // whether to generate numeric ids for input features (in vector tiles)
    generateId: false,
    // a reduce function for calculating custom cluster properties
    reduce: null,
    // (accumulated, props) => { accumulated.sum += props.sum; }

    // properties to use for individual points when running the reducer
    map: props => props // props => ({sum: props.my_value})
  };

  const fround = Math.fround || (tmp => x => {
    tmp[0] = +x;
    return tmp[0];
  })(new Float32Array(1));
  const OFFSET_ZOOM = 2;
  const OFFSET_ID = 3;
  const OFFSET_PARENT = 4;
  const OFFSET_NUM = 5;
  const OFFSET_PROP = 6;
  class Supercluster {
    constructor(options) {
      this.options = Object.assign(Object.create(defaultOptions), options);
      this.trees = new Array(this.options.maxZoom + 1);
      this.stride = this.options.reduce ? 7 : 6;
      this.clusterProps = [];
    }
    load(points) {
      const {
        log,
        minZoom,
        maxZoom
      } = this.options;
      if (log) console.time('total time');
      const timerId = `prepare ${points.length} points`;
      if (log) console.time(timerId);
      this.points = points;

      // generate a cluster object for each point and index input points into a KD-tree
      const data = [];
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (!p.geometry) continue;
        const [lng, lat] = p.geometry.coordinates;
        const x = fround(lngX(lng));
        const y = fround(latY(lat));
        // store internal point/cluster data in flat numeric arrays for performance
        data.push(x, y,
        // projected point coordinates
        Infinity,
        // the last zoom the point was processed at
        i,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1 // number of points in a cluster
        );

        if (this.options.reduce) data.push(0); // noop
      }

      let tree = this.trees[maxZoom + 1] = this._createTree(data);
      if (log) console.timeEnd(timerId);

      // cluster points on max zoom, then cluster the results on previous zoom, etc.;
      // results in a cluster hierarchy across zoom levels
      for (let z = maxZoom; z >= minZoom; z--) {
        const now = +Date.now();

        // create a new set of clusters for the zoom and index them with a KD-tree
        tree = this.trees[z] = this._createTree(this._cluster(tree, z));
        if (log) console.log('z%d: %d clusters in %dms', z, tree.numItems, +Date.now() - now);
      }
      if (log) console.timeEnd('total time');
      return this;
    }
    getClusters(bbox, zoom) {
      let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
      const minLat = Math.max(-90, Math.min(90, bbox[1]));
      let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
      const maxLat = Math.max(-90, Math.min(90, bbox[3]));
      if (bbox[2] - bbox[0] >= 360) {
        minLng = -180;
        maxLng = 180;
      } else if (minLng > maxLng) {
        const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
        const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
        return easternHem.concat(westernHem);
      }
      const tree = this.trees[this._limitZoom(zoom)];
      const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
      const data = tree.data;
      const clusters = [];
      for (const id of ids) {
        const k = this.stride * id;
        clusters.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
      }
      return clusters;
    }
    getChildren(clusterId) {
      const originId = this._getOriginId(clusterId);
      const originZoom = this._getOriginZoom(clusterId);
      const errorMsg = 'No cluster with the specified id.';
      const tree = this.trees[originZoom];
      if (!tree) throw new Error(errorMsg);
      const data = tree.data;
      if (originId * this.stride >= data.length) throw new Error(errorMsg);
      const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
      const x = data[originId * this.stride];
      const y = data[originId * this.stride + 1];
      const ids = tree.within(x, y, r);
      const children = [];
      for (const id of ids) {
        const k = id * this.stride;
        if (data[k + OFFSET_PARENT] === clusterId) {
          children.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
        }
      }
      if (children.length === 0) throw new Error(errorMsg);
      return children;
    }
    getLeaves(clusterId, limit, offset) {
      limit = limit || 10;
      offset = offset || 0;
      const leaves = [];
      this._appendLeaves(leaves, clusterId, limit, offset, 0);
      return leaves;
    }
    getTile(z, x, y) {
      const tree = this.trees[this._limitZoom(z)];
      const z2 = Math.pow(2, z);
      const {
        extent,
        radius
      } = this.options;
      const p = radius / extent;
      const top = (y - p) / z2;
      const bottom = (y + 1 + p) / z2;
      const tile = {
        features: []
      };
      this._addTileFeatures(tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom), tree.data, x, y, z2, tile);
      if (x === 0) {
        this._addTileFeatures(tree.range(1 - p / z2, top, 1, bottom), tree.data, z2, y, z2, tile);
      }
      if (x === z2 - 1) {
        this._addTileFeatures(tree.range(0, top, p / z2, bottom), tree.data, -1, y, z2, tile);
      }
      return tile.features.length ? tile : null;
    }
    getClusterExpansionZoom(clusterId) {
      let expansionZoom = this._getOriginZoom(clusterId) - 1;
      while (expansionZoom <= this.options.maxZoom) {
        const children = this.getChildren(clusterId);
        expansionZoom++;
        if (children.length !== 1) break;
        clusterId = children[0].properties.cluster_id;
      }
      return expansionZoom;
    }
    _appendLeaves(result, clusterId, limit, offset, skipped) {
      const children = this.getChildren(clusterId);
      for (const child of children) {
        const props = child.properties;
        if (props && props.cluster) {
          if (skipped + props.point_count <= offset) {
            // skip the whole cluster
            skipped += props.point_count;
          } else {
            // enter the cluster
            skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
            // exit the cluster
          }
        } else if (skipped < offset) {
          // skip a single point
          skipped++;
        } else {
          // add a single point
          result.push(child);
        }
        if (result.length === limit) break;
      }
      return skipped;
    }
    _createTree(data) {
      const tree = new KDBush(data.length / this.stride | 0, this.options.nodeSize, Float32Array);
      for (let i = 0; i < data.length; i += this.stride) tree.add(data[i], data[i + 1]);
      tree.finish();
      tree.data = data;
      return tree;
    }
    _addTileFeatures(ids, data, x, y, z2, tile) {
      for (const i of ids) {
        const k = i * this.stride;
        const isCluster = data[k + OFFSET_NUM] > 1;
        let tags, px, py;
        if (isCluster) {
          tags = getClusterProperties(data, k, this.clusterProps);
          px = data[k];
          py = data[k + 1];
        } else {
          const p = this.points[data[k + OFFSET_ID]];
          tags = p.properties;
          const [lng, lat] = p.geometry.coordinates;
          px = lngX(lng);
          py = latY(lat);
        }
        const f = {
          type: 1,
          geometry: [[Math.round(this.options.extent * (px * z2 - x)), Math.round(this.options.extent * (py * z2 - y))]],
          tags
        };

        // assign id
        let id;
        if (isCluster || this.options.generateId) {
          // optionally generate id for points
          id = data[k + OFFSET_ID];
        } else {
          // keep id if already assigned
          id = this.points[data[k + OFFSET_ID]].id;
        }
        if (id !== undefined) f.id = id;
        tile.features.push(f);
      }
    }
    _limitZoom(z) {
      return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
    }
    _cluster(tree, zoom) {
      const {
        radius,
        extent,
        reduce,
        minPoints
      } = this.options;
      const r = radius / (extent * Math.pow(2, zoom));
      const data = tree.data;
      const nextData = [];
      const stride = this.stride;

      // loop through each point
      for (let i = 0; i < data.length; i += stride) {
        // if we've already visited the point at this zoom level, skip it
        if (data[i + OFFSET_ZOOM] <= zoom) continue;
        data[i + OFFSET_ZOOM] = zoom;

        // find all nearby points
        const x = data[i];
        const y = data[i + 1];
        const neighborIds = tree.within(data[i], data[i + 1], r);
        const numPointsOrigin = data[i + OFFSET_NUM];
        let numPoints = numPointsOrigin;

        // count the number of points in a potential cluster
        for (const neighborId of neighborIds) {
          const k = neighborId * stride;
          // filter out neighbors that are already processed
          if (data[k + OFFSET_ZOOM] > zoom) numPoints += data[k + OFFSET_NUM];
        }

        // if there were neighbors to merge, and there are enough points to form a cluster
        if (numPoints > numPointsOrigin && numPoints >= minPoints) {
          let wx = x * numPointsOrigin;
          let wy = y * numPointsOrigin;
          let clusterProperties;
          let clusterPropIndex = -1;

          // encode both zoom and point index on which the cluster originated -- offset by total length of features
          const id = ((i / stride | 0) << 5) + (zoom + 1) + this.points.length;
          for (const neighborId of neighborIds) {
            const k = neighborId * stride;
            if (data[k + OFFSET_ZOOM] <= zoom) continue;
            data[k + OFFSET_ZOOM] = zoom; // save the zoom (so it doesn't get processed twice)

            const numPoints2 = data[k + OFFSET_NUM];
            wx += data[k] * numPoints2; // accumulate coordinates for calculating weighted center
            wy += data[k + 1] * numPoints2;
            data[k + OFFSET_PARENT] = id;
            if (reduce) {
              if (!clusterProperties) {
                clusterProperties = this._map(data, i, true);
                clusterPropIndex = this.clusterProps.length;
                this.clusterProps.push(clusterProperties);
              }
              reduce(clusterProperties, this._map(data, k));
            }
          }
          data[i + OFFSET_PARENT] = id;
          nextData.push(wx / numPoints, wy / numPoints, Infinity, id, -1, numPoints);
          if (reduce) nextData.push(clusterPropIndex);
        } else {
          // left points as unclustered
          for (let j = 0; j < stride; j++) nextData.push(data[i + j]);
          if (numPoints > 1) {
            for (const neighborId of neighborIds) {
              const k = neighborId * stride;
              if (data[k + OFFSET_ZOOM] <= zoom) continue;
              data[k + OFFSET_ZOOM] = zoom;
              for (let j = 0; j < stride; j++) nextData.push(data[k + j]);
            }
          }
        }
      }
      return nextData;
    }

    // get index of the point from which the cluster originated
    _getOriginId(clusterId) {
      return clusterId - this.points.length >> 5;
    }

    // get zoom of the point from which the cluster originated
    _getOriginZoom(clusterId) {
      return (clusterId - this.points.length) % 32;
    }
    _map(data, i, clone) {
      if (data[i + OFFSET_NUM] > 1) {
        const props = this.clusterProps[data[i + OFFSET_PROP]];
        return clone ? Object.assign({}, props) : props;
      }
      const original = this.points[data[i + OFFSET_ID]].properties;
      const result = this.options.map(original);
      return clone && result === original ? Object.assign({}, result) : result;
    }
  }
  function getClusterJSON(data, i, clusterProps) {
    return {
      type: 'Feature',
      id: data[i + OFFSET_ID],
      properties: getClusterProperties(data, i, clusterProps),
      geometry: {
        type: 'Point',
        coordinates: [xLng(data[i]), yLat(data[i + 1])]
      }
    };
  }
  function getClusterProperties(data, i, clusterProps) {
    const count = data[i + OFFSET_NUM];
    const abbrev = count >= 10000 ? `${Math.round(count / 1000)}k` : count >= 1000 ? `${Math.round(count / 100) / 10}k` : count;
    const propIndex = data[i + OFFSET_PROP];
    const properties = propIndex === -1 ? {} : Object.assign({}, clusterProps[propIndex]);
    return Object.assign(properties, {
      cluster: true,
      cluster_id: data[i + OFFSET_ID],
      point_count: count,
      point_count_abbreviated: abbrev
    });
  }

  // longitude/latitude to spherical mercator in [0..1] range
  function lngX(lng) {
    return lng / 360 + 0.5;
  }
  function latY(lat) {
    const sin = Math.sin(lat * Math.PI / 180);
    const y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
    return y < 0 ? 0 : y > 1 ? 1 : y;
  }

  // spherical mercator to longitude/latitude
  function xLng(x) {
    return (x - 0.5) * 360;
  }
  function yLat(y) {
    const y2 = (180 - y * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  }

  /**
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * util class that creates a common set of convenience functions to wrap
   * shared behavior of Advanced Markers and Markers.
   */
  class MarkerUtils {
    static isAdvancedMarkerAvailable(map) {
      return google.maps.marker && map.getMapCapabilities().isAdvancedMarkersAvailable === true;
    }
    static isAdvancedMarker(marker) {
      return google.maps.marker && marker instanceof google.maps.marker.AdvancedMarkerElement;
    }
    static setMap(marker, map) {
      if (this.isAdvancedMarker(marker)) {
        marker.map = map;
      } else {
        marker.setMap(map);
      }
    }
    static getPosition(marker) {
      // SuperClusterAlgorithm.calculate expects a LatLng instance so we fake it for Adv Markers
      if (this.isAdvancedMarker(marker)) {
        if (marker.position) {
          if (marker.position instanceof google.maps.LatLng) {
            return marker.position;
          }
          // since we can't cast to LatLngLiteral for reasons =(
          if (marker.position.lat && marker.position.lng) {
            return new google.maps.LatLng(marker.position.lat, marker.position.lng);
          }
        }
        return new google.maps.LatLng(null);
      }
      return marker.getPosition();
    }
    static getVisible(marker) {
      if (this.isAdvancedMarker(marker)) {
        /**
         * Always return true for Advanced Markers because the clusterer
         * uses getVisible as a way to count legacy markers not as an actual
         * indicator of visibility for some reason. Even when markers are hidden
         * Marker.getVisible returns `true` and this is used to set the marker count
         * on the cluster. See the behavior of Cluster.count
         */
        return true;
      }
      return marker.getVisible();
    }
  }

  /**
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  class Cluster {
    constructor({
      markers,
      position
    }) {
      this.markers = markers;
      if (position) {
        if (position instanceof google.maps.LatLng) {
          this._position = position;
        } else {
          this._position = new google.maps.LatLng(position);
        }
      }
    }
    get bounds() {
      if (this.markers.length === 0 && !this._position) {
        return;
      }
      const bounds = new google.maps.LatLngBounds(this._position, this._position);
      for (const marker of this.markers) {
        bounds.extend(MarkerUtils.getPosition(marker));
      }
      return bounds;
    }
    get position() {
      return this._position || this.bounds.getCenter();
    }
    /**
     * Get the count of **visible** markers.
     */
    get count() {
      return this.markers.filter(m => MarkerUtils.getVisible(m)).length;
    }
    /**
     * Add a marker to the cluster.
     */
    push(marker) {
      this.markers.push(marker);
    }
    /**
     * Cleanup references and remove marker from map.
     */
    delete() {
      if (this.marker) {
        MarkerUtils.setMap(this.marker, null);
        this.marker = undefined;
      }
      this.markers.length = 0;
    }
  }

  /**
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @hidden
   */
  class AbstractAlgorithm {
    constructor({
      maxZoom = 16
    }) {
      this.maxZoom = maxZoom;
    }
    /**
     * Helper function to bypass clustering based upon some map state such as
     * zoom, number of markers, etc.
     *
     * ```typescript
     *  cluster({markers, map}: AlgorithmInput): Cluster[] {
     *    if (shouldBypassClustering(map)) {
     *      return this.noop({markers})
     *    }
     * }
     * ```
     */
    noop({
      markers
    }) {
      return noop(markers);
    }
  }
  /**
   * @hidden
   */
  const noop = markers => {
    const clusters = markers.map(marker => new Cluster({
      position: MarkerUtils.getPosition(marker),
      markers: [marker]
    }));
    return clusters;
  };

  /**
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
   *
   * @see https://www.npmjs.com/package/supercluster for more information on options.
   */
  class SuperClusterAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
      var {
          maxZoom,
          radius = 60
        } = _a,
        options = __rest(_a, ["maxZoom", "radius"]);
      super({
        maxZoom
      });
      this.state = {
        zoom: -1
      };
      this.superCluster = new Supercluster(Object.assign({
        maxZoom: this.maxZoom,
        radius
      }, options));
    }
    calculate(input) {
      let changed = false;
      const state = {
        zoom: input.map.getZoom()
      };
      if (!fastDeepEqual(input.markers, this.markers)) {
        changed = true;
        // TODO use proxy to avoid copy?
        this.markers = [...input.markers];
        const points = this.markers.map(marker => {
          const position = MarkerUtils.getPosition(marker);
          const coordinates = [position.lng(), position.lat()];
          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates
            },
            properties: {
              marker
            }
          };
        });
        this.superCluster.load(points);
      }
      if (!changed) {
        if (this.state.zoom <= this.maxZoom || state.zoom <= this.maxZoom) {
          changed = !fastDeepEqual(this.state, state);
        }
      }
      this.state = state;
      if (changed) {
        this.clusters = this.cluster(input);
      }
      return {
        clusters: this.clusters,
        changed
      };
    }
    cluster({
      map
    }) {
      return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(map.getZoom())).map(feature => this.transformCluster(feature));
    }
    transformCluster({
      geometry: {
        coordinates: [lng, lat]
      },
      properties
    }) {
      if (properties.cluster) {
        return new Cluster({
          markers: this.superCluster.getLeaves(properties.cluster_id, Infinity).map(leaf => leaf.properties.marker),
          position: {
            lat,
            lng
          }
        });
      }
      const marker = properties.marker;
      return new Cluster({
        markers: [marker],
        position: MarkerUtils.getPosition(marker)
      });
    }
  }

  /**
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Provides statistics on all clusters in the current render cycle for use in {@link Renderer.render}.
   */
  class ClusterStats {
    constructor(markers, clusters) {
      this.markers = {
        sum: markers.length
      };
      const clusterMarkerCounts = clusters.map(a => a.count);
      const clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
      this.clusters = {
        count: clusters.length,
        markers: {
          mean: clusterMarkerSum / clusters.length,
          sum: clusterMarkerSum,
          min: Math.min(...clusterMarkerCounts),
          max: Math.max(...clusterMarkerCounts)
        }
      };
    }
  }
  class DefaultRenderer {
    /**
     * The default render function for the library used by {@link MarkerClusterer}.
     *
     * Currently set to use the following:
     *
     * ```typescript
     * // change color if this cluster has more markers than the mean cluster
     * const color =
     *   count > Math.max(10, stats.clusters.markers.mean)
     *     ? "#ff0000"
     *     : "#0000ff";
     *
     * // create svg url with fill color
     * const svg = window.btoa(`
     * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
     *   <circle cx="120" cy="120" opacity=".6" r="70" />
     *   <circle cx="120" cy="120" opacity=".3" r="90" />
     *   <circle cx="120" cy="120" opacity=".2" r="110" />
     *   <circle cx="120" cy="120" opacity=".1" r="130" />
     * </svg>`);
     *
     * // create marker using svg icon
     * return new google.maps.Marker({
     *   position,
     *   icon: {
     *     url: `data:image/svg+xml;base64,${svg}`,
     *     scaledSize: new google.maps.Size(45, 45),
     *   },
     *   label: {
     *     text: String(count),
     *     color: "rgba(255,255,255,0.9)",
     *     fontSize: "12px",
     *   },
     *   // adjust zIndex to be above other markers
     *   zIndex: 1000 + count,
     * });
     * ```
     */
    render({
      count,
      position
    }, stats, map) {
      // change color if this cluster has more markers than the mean cluster
      const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
      // create svg literal with fill color
      const svg = `<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${count}</text>
</svg>`;
      const title = `Cluster of ${count} markers`,
        // adjust zIndex to be above other markers
        zIndex = Number(google.maps.Marker.MAX_ZINDEX) + count;
      if (MarkerUtils.isAdvancedMarkerAvailable(map)) {
        // create cluster SVG element
        const parser = new DOMParser();
        const svgEl = parser.parseFromString(svg, "image/svg+xml").documentElement;
        svgEl.setAttribute("transform", "translate(0 25)");
        const clusterOptions = {
          map,
          position,
          zIndex,
          title,
          content: svgEl
        };
        return new google.maps.marker.AdvancedMarkerElement(clusterOptions);
      }
      const clusterOptions = {
        position,
        zIndex,
        title,
        icon: {
          url: `data:image/svg+xml;base64,${btoa(svg)}`,
          anchor: new google.maps.Point(25, 25)
        }
      };
      return new google.maps.Marker(clusterOptions);
    }
  }

  /**
   * Copyright 2019 Google LLC. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * Extends an object's prototype by another's.
   *
   * @param type1 The Type to be extended.
   * @param type2 The Type to extend with.
   * @ignore
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function extend(type1, type2) {
    /* istanbul ignore next */
    // eslint-disable-next-line prefer-const
    for (let property in type2.prototype) {
      type1.prototype[property] = type2.prototype[property];
    }
  }
  /**
   * @ignore
   */
  class OverlayViewSafe {
    constructor() {
      // MarkerClusterer implements google.maps.OverlayView interface. We use the
      // extend function to extend MarkerClusterer with google.maps.OverlayView
      // because it might not always be available when the code is defined so we
      // look for it at the last possible moment. If it doesn't exist now then
      // there is no point going ahead :)
      extend(OverlayViewSafe, google.maps.OverlayView);
    }
  }

  /**
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var MarkerClustererEvents;
  (function (MarkerClustererEvents) {
    MarkerClustererEvents["CLUSTERING_BEGIN"] = "clusteringbegin";
    MarkerClustererEvents["CLUSTERING_END"] = "clusteringend";
    MarkerClustererEvents["CLUSTER_CLICK"] = "click";
  })(MarkerClustererEvents || (MarkerClustererEvents = {}));
  const defaultOnClusterClickHandler = (_, cluster, map) => {
    map.fitBounds(cluster.bounds);
  };
  /**
   * MarkerClusterer creates and manages per-zoom-level clusters for large amounts
   * of markers. See {@link MarkerClustererOptions} for more details.
   *
   */
  class MarkerClusterer extends OverlayViewSafe {
    constructor({
      map,
      markers = [],
      algorithmOptions = {},
      algorithm = new SuperClusterAlgorithm(algorithmOptions),
      renderer = new DefaultRenderer(),
      onClusterClick = defaultOnClusterClickHandler
    }) {
      super();
      this.markers = [...markers];
      this.clusters = [];
      this.algorithm = algorithm;
      this.renderer = renderer;
      this.onClusterClick = onClusterClick;
      if (map) {
        this.setMap(map);
      }
    }
    addMarker(marker, noDraw) {
      if (this.markers.includes(marker)) {
        return;
      }
      this.markers.push(marker);
      if (!noDraw) {
        this.render();
      }
    }
    addMarkers(markers, noDraw) {
      markers.forEach(marker => {
        this.addMarker(marker, true);
      });
      if (!noDraw) {
        this.render();
      }
    }
    removeMarker(marker, noDraw) {
      const index = this.markers.indexOf(marker);
      if (index === -1) {
        // Marker is not in our list of markers, so do nothing:
        return false;
      }
      MarkerUtils.setMap(marker, null);
      this.markers.splice(index, 1); // Remove the marker from the list of managed markers
      if (!noDraw) {
        this.render();
      }
      return true;
    }
    removeMarkers(markers, noDraw) {
      let removed = false;
      markers.forEach(marker => {
        removed = this.removeMarker(marker, true) || removed;
      });
      if (removed && !noDraw) {
        this.render();
      }
      return removed;
    }
    clearMarkers(noDraw) {
      this.markers.length = 0;
      if (!noDraw) {
        this.render();
      }
    }
    /**
     * Recalculates and draws all the marker clusters.
     */
    render() {
      const map = this.getMap();
      if (map instanceof google.maps.Map && map.getProjection()) {
        google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
        const {
          clusters,
          changed
        } = this.algorithm.calculate({
          markers: this.markers,
          map,
          mapCanvasProjection: this.getProjection()
        });
        // Allow algorithms to return flag on whether the clusters/markers have changed.
        if (changed || changed == undefined) {
          // Accumulate the markers of the clusters composed of a single marker.
          // Those clusters directly use the marker.
          // Clusters with more than one markers use a group marker generated by a renderer.
          const singleMarker = new Set();
          for (const cluster of clusters) {
            if (cluster.markers.length == 1) {
              singleMarker.add(cluster.markers[0]);
            }
          }
          const groupMarkers = [];
          // Iterate the clusters that are currently rendered.
          for (const cluster of this.clusters) {
            if (cluster.marker == null) {
              continue;
            }
            if (cluster.markers.length == 1) {
              if (!singleMarker.has(cluster.marker)) {
                // The marker:
                // - was previously rendered because it is from a cluster with 1 marker,
                // - should no more be rendered as it is not in singleMarker.
                MarkerUtils.setMap(cluster.marker, null);
              }
            } else {
              // Delay the removal of old group markers to avoid flickering.
              groupMarkers.push(cluster.marker);
            }
          }
          this.clusters = clusters;
          this.renderClusters();
          // Delayed removal of the markers of the former groups.
          requestAnimationFrame(() => groupMarkers.forEach(marker => MarkerUtils.setMap(marker, null)));
        }
        google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
      }
    }
    onAdd() {
      this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
      this.render();
    }
    onRemove() {
      google.maps.event.removeListener(this.idleListener);
      this.reset();
    }
    reset() {
      this.markers.forEach(marker => MarkerUtils.setMap(marker, null));
      this.clusters.forEach(cluster => cluster.delete());
      this.clusters = [];
    }
    renderClusters() {
      // Generate stats to pass to renderers.
      const stats = new ClusterStats(this.markers, this.clusters);
      const map = this.getMap();
      this.clusters.forEach(cluster => {
        if (cluster.markers.length === 1) {
          cluster.marker = cluster.markers[0];
        } else {
          // Generate the marker to represent the group.
          cluster.marker = this.renderer.render(cluster, stats, map);
          // Make sure all individual markers are removed from the map.
          cluster.markers.forEach(marker => MarkerUtils.setMap(marker, null));
          if (this.onClusterClick) {
            cluster.marker.addListener("click", /* istanbul ignore next */
            event => {
              google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
              this.onClusterClick(event, cluster, map);
            });
          }
        }
        MarkerUtils.setMap(cluster.marker, map);
      });
    }
  }

  //

  /**
   * Cluster component
   * @displayName GmapCluster
   * @see [source code](/guide/cluster.html#source-code)
   * @see [Official documentation](https://googlemaps.github.io/js-markerclusterer/modules.html)
   * @see [Marker clusterer](https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript)
   */
  var script$b = {
    name: 'ClusterIcon',
    mixins: [mapElementMixin],
    provide() {
      // events to bind with toWay
      const events = [
        'click',
        'rightclick',
        'dblclick',
        'drag',
        'dragstart',
        'dragend',
        'mouseup',
        'mousedown',
        'mouseover',
        'mouseout',
      ];

      // Infowindow needs this to be immediately available
      const promise = this.$mapPromise
        .then((map) => {
          this.$map = map;

          // Initialize the maps with the given options
          const initialOptions = {
            // TODO: analyze the below line because I think it can be removed
            ...this.options,
            map,
            ...getPropsValues(this, clusterIconMappedProps),
          };
          const { options: extraOptions, ...finalOptions } = initialOptions;

          if (typeof MarkerClusterer === 'undefined') {
            throw new Error(
              'MarkerClusterer is not installed! require() it or include it from https://cdnjs.cloudflare.com/ajax/libs/js-marker-clusterer/1.0.0/markerclusterer.js'
            );
          }

          const {
            map: mapInstance,
            markers,
            algorithm,
            onClusterClick,
            renderer,
          } = finalOptions;

          this.$clusterObject = new MarkerClusterer({
            map: mapInstance,
            markers,
            algorithm,
            onClusterClick,
            renderer,
          });

          bindProps(this, this.$clusterObject, {});
          bindEvents(this, this.$clusterObject, events);

          Object.keys({}).forEach((prop) => {
            if ({}[prop].twoWay) {
              this.$on(`${prop.toLowerCase()}_changed`, this.reinsertMarkers);
            }
          });

          return this.$clusterObject;
        })
        .catch((error) => {
          throw error;
        });

      // TODO: analyze the efects of only returns the instance and remove completely the promise
      this.$clusterPromise = promise;
      return { $clusterPromise: promise };
    },
    props: {
      /**
       * An algorithm to cluster markers. Default is SuperClusterAlgorithm. Must provide a
       * calculate method accepting AlgorithmInput and returning an array of Cluster.
       * @values undefined
       * @see [algorithm](https://googlemaps.github.io/js-markerclusterer/interfaces/MarkerClustererOptions.html#algorithm)
       */
      algorithm: {
        type: Object,
        default: undefined,
      },
      /**
       * Function to run when the user clicks the cluster.
       * @values undefined
       * @see [onClusterClick](https://googlemaps.github.io/js-markerclusterer/interfaces/MarkerClustererOptions.html#onClusterClick)
       */
      onClusterClick: {
        type: Function,
        default: undefined,
      },
      /**
       * An object that converts a Cluster into a `google.maps.Marker`. Default is DefaultRenderer.
       * @values undefined
       * @see [renderer](https://googlemaps.github.io/js-markerclusterer/interfaces/MarkerClustererOptions.html#renderer)
       */
      renderer: {
        type: Object,
        default: undefined,
      },
      /**
       * Other options that you can pass to the MarkerClusterer
       * @values undefined
       */
      options: {
        type: Object,
        default: undefined,
      },
    },
    beforeDestroy() {
      /* Performance optimization when destroying a large number of markers */
      this.$children.forEach((marker) => {
        if (marker.$clusterObject === this.$clusterObject) {
          marker.$clusterObject = null;
        }
      });

      if (this.$clusterObject) {
        this.$clusterObject.clearMarkers();
      }
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$clusterObject && this.$clusterObject.setMap) {
        this.$clusterObject.setMap(null);
      }
    },
    updated() {
      if (this.$clusterObject) {
        this.$clusterObject.render();
      }
    },
    methods: {
      reinsertMarkers() {
        const oldMarkers = [...this.$clusterObject.markers];
        this.$clusterObject.clearMarkers();
        this.$clusterObject.addMarkers(oldMarkers);
      },
    },
  };

  /* script */
  const __vue_script__$b = script$b;

  /* template */
  var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)};
  var __vue_staticRenderFns__$5 = [];

    /* style */
    const __vue_inject_styles__$b = undefined;
    /* scoped */
    const __vue_scope_id__$b = undefined;
    /* module identifier */
    const __vue_module_identifier__$b = undefined;
    /* functional template */
    const __vue_is_functional_template__$b = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$b = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$b,
      __vue_script__$b,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  /**
   * DrawingManager component
   * @displayName GmapDrawingManager
   * @see [source code](/guide/drawing-manager.html#source-code)
   * @see [Official documentation](https://developers.google.com/maps/documentation/javascript/drawinglayer)
   * @see [Official reference](https://developers.google.com/maps/documentation/javascript/reference/drawing)
   */
  var script$a = {
    name: 'DrawingManager',
    mixins: [mapElementMixin],
    provide() {
      // Infowindow needs this to be immediately available
      const promise = this.$mapPromise
        .then((map) => {
          this.$map = map;

          // Initialize the maps with the given options
          const initialOptions = {
            // TODO: analyze the below line because I think it can be removed
            ...this.options,
            map,
            ...getPropsValues(this, drawingManagerMappedProps),
          };

          const { options: extraOptions, ...finalOptions } = initialOptions;

          this.drawingModes = Object.keys(finalOptions).reduce((modes, opt) => {
            const val = opt.split('Options');

            if (val.length > 1) {
              modes.push(val[0]);
            }

            return modes;
          }, []);

          const position =
            this.position && google.maps.ControlPosition[this.position]
              ? google.maps.ControlPosition[this.position]
              : google.maps.ControlPosition.TOP_LEFT;

          finalOptions.drawingMode = null;
          finalOptions.drawingControl = !this.$scopedSlots.default;
          finalOptions.drawingControlOptions = {
            drawingModes: this.drawingModes,
            position,
          };

          // https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
          this.$drawingManagerObject = new google.maps.drawing.DrawingManager(
            finalOptions
          );

          bindProps(this, this.$drawingManagerObject, drawingManagerMappedProps);

          this.$drawingManagerObject.addListener('overlaycomplete', (e) =>
            this.addShape(e)
          );

          this.$map.addListener('click', this.clearSelection);

          if (this && this.finalShapes && this.finalShapes.length) {
            this.drawAll();
          }

          return this.$drawingManagerObject;
        })
        .catch((error) => {
          throw error;
        });

      // TODO: analyze the efects of only returns the instance and remove completely the promise
      this.$drawingManagerPromise = promise;
      return { $drawingManagerPromise: promise };
    },
    props: {
      /**
       * The circle options
       * @see [circleOptions interface](https://developers.google.com/maps/documentation/javascript/reference/polygon#CircleOptions)
       */
      circleOptions: {
        type: Object,
        default: undefined,
      },
      /**
       * The marker options
       * @see [markerOptions interface](https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions)
       */
      markerOptions: {
        type: Object,
        default: undefined,
      },
      /**
       * The polygon options
       * @see [polygonOptions interface](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolygonOptions)
       */
      polygonOptions: {
        type: Object,
        default: undefined,
      },
      /**
       * The polyline options
       * @see [polylineOptions interface](https://developers.google.com/maps/documentation/javascript/reference/polygon#PolylineOptions)
       */
      polylineOptions: {
        type: Object,
        default: undefined,
      },
      /**
       * The rectangle options
       * @see [rectangleOptions interface](https://developers.google.com/maps/documentation/javascript/reference/polygon#RectangleOptions)
       */
      rectangleOptions: {
        type: Object,
        default: undefined,
      },
      /**
       * The position of the toolbar
       * **Possible values**: `'TOP_CENTER', 'TOP_LEFT', 'TOP_RIGHT', 'LEFT_TOP', 'RIGHT_TOP', 'LEFT_CENTER',
       * 'RIGHT_CENTER', 'LEFT_BOTTOM', 'RIGHT_BOTTOM', 'BOTTOM_CENTER', 'BOTTOM_LEFT', 'BOTTOM_RIGHT'`
       */
      position: {
        type: String,
        default: '',
      },
      /**
       * An array of shapes that you can set to render in the map and saves on it the new shapes that you add.
       */
      shapes: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        selectedShape: null,
        drawingModes: [],
        options: {
          drawingMode: null,
          drawingControl: true,
          drawingControlOptions: {},
        },
        finalShapes: [],
      };
    },
    watch: {
      position(position) {
        if (this.$drawingManagerObject) {
          const drawingControlOptions = {
            position:
              position && google.maps.ControlPosition[position]
                ? google.maps.ControlPosition[position]
                : google.maps.ControlPosition.TOP_LEFT,
            drawingModes: this.drawingModes,
          };
          this.$drawingManagerObject.setOptions({ drawingControlOptions });
        }
      },
      circleOptions(circleOptions) {
        if (this.$drawingManagerObject) {
          this.$drawingManagerObject.setOptions({ circleOptions });
        }
      },
      markerOptions(markerOptions) {
        if (this.$drawingManagerObject) {
          this.$drawingManagerObject.setOptions({ markerOptions });
        }
      },
      polygonOptions(polygonOptions) {
        if (this.$drawingManagerObject) {
          this.$drawingManagerObject.setOptions({ polygonOptions });
        }
      },
      polylineOptions(polylineOptions) {
        if (this.$drawingManagerObject) {
          this.$drawingManagerObject.setOptions({ polylineOptions });
        }
      },
      rectangleOptions(rectangleOptions) {
        if (this.$drawingManagerObject) {
          this.$drawingManagerObject.setOptions({ rectangleOptions });
        }
      },
    },
    mounted() {
      this.finalShapes = [...this.shapes];
    },
    destroyed() {
      this.clearAll();

      // Note: not all Google Maps components support maps
      if (this.$drawingManagerObject && this.$drawingManagerObject.setMap) {
        this.$drawingManagerObject.setMap(null);
      }
    },
    methods: {
      /**
       * The setDrawingMode method is binded into the default component slot
       *
       * @method setDrawingMode
       * @param {string} mode - mode - Possible values 'marker', 'circle', 'polygon', 'polyline', 'rectangle', null
       * @returns {void}
       * @public
       */
      setDrawingMode(mode) {
        this.$drawingManagerObject.setDrawingMode(mode);
      },
      drawAll() {
        const shapeType = {
          circle: google.maps.Circle,
          marker: google.maps.Marker,
          polygon: google.maps.Polygon,
          polyline: google.maps.Polyline,
          rectangle: google.maps.Rectangle,
        };

        const self = this;
        this.finalShapes.forEach((shape) => {
          const shapeDrawing = new shapeType[shape.type](shape.overlay);
          shapeDrawing.setMap(this.$map);
          shape.overlay = shapeDrawing;
          google.maps.event.addListener(shapeDrawing, 'click', () => {
            self.setSelection(shape);
          });
        });
      },
      clearAll() {
        this.clearSelection();
        this.finalShapes.forEach((shape) => {
          shape.overlay.setMap(null);
        });
      },
      clearSelection() {
        if (this.selectedShape) {
          this.selectedShape.overlay.setEditable(false);
          this.selectedShape.overlay.setDraggable(false);
          this.selectedShape = null;
        }
      },
      setSelection(shape) {
        this.clearSelection();
        this.selectedShape = shape;
        shape.overlay.setEditable(true);
        shape.overlay.setDraggable(true);
      },
      /**
       * The deleteSelection method is binded into the default component slot
       *
       * @method deleteSelection
       * @param - It doesn't requires any parameter
       * @returns {void}
       * @public
       */
      deleteSelection() {
        if (this.selectedShape) {
          this.selectedShape.overlay.setMap(null);
          const index = this.finalShapes.indexOf(this.selectedShape);
          if (index > -1) {
            this.finalShapes.splice(index, 1);
          }
        }
      },
      addShape(shape) {
        this.setDrawingMode(null);
        this.finalShapes.push(shape);

        /**
         * update:shapes event
         * @event update:shapes
         * @property {array} place `this.finalShapes`
         */
        this.$emit('update:shapes', [...this.finalShapes]);

        const self = this;
        google.maps.event.addListener(shape.overlay, 'click', () => {
          self.setSelection(shape);
        });
        google.maps.event.addListener(shape.overlay, 'rightclick', () => {
          self.deleteSelection();
        });
        this.setSelection(shape);
      },
    },
  };

  /* script */
  const __vue_script__$a = script$a;

  /* template */
  var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default",null,{"setDrawingMode":_vm.setDrawingMode,"deleteSelection":_vm.deleteSelection})],2)};
  var __vue_staticRenderFns__$4 = [];

    /* style */
    const __vue_inject_styles__$a = undefined;
    /* scoped */
    const __vue_scope_id__$a = undefined;
    /* module identifier */
    const __vue_module_identifier__$a = undefined;
    /* functional template */
    const __vue_is_functional_template__$a = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$a = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$a,
      __vue_script__$a,
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      false,
      undefined,
      undefined,
      undefined
    );

  /**
   * HeatmapLayer component
   * @displayName HeatmapLayer
   * @see [source code](/guide/heatmap-layer.html#source-code)
   * @see [Official documentation](https://developers.google.com/maps/documentation/javascript/heatmaplayer)
   */
  var script$9 = {
    name: 'HeatmapLayer',
    mixins: [mapElementMixin],
    render() {
      return '';
    },
    provide() {
      const events = [];

      // Infowindow needs this to be immediately available
      const promise = this.$mapPromise
        .then((map) => {
          this.$map = map;

          // Initialize the maps with the given options
          const initialOptions = {
            // TODO: analyze the below line because I think it can be removed
            ...this.options,
            map: this.$map,
            ...getPropsValues(this, heatMapLayerMappedProps),
          };

          const { options: extraOptions, ...finalOptions } = initialOptions;

          this.$heatmapLayerObject = new google.maps.visualization.HeatmapLayer(
            finalOptions
          );

          bindProps(this, this.$heatmapLayerObject, heatMapLayerMappedProps);
          bindEvents(this, this.$heatmapLayerObject, events);

          return this.$heatmapLayerObject;
        })
        .catch((error) => {
          throw error;
        });

      // TODO: analyze the efects of only returns the instance and remove completely the promise
      this.$heatmapLayerPromise = promise;
      return { $heatmapLayerPromise: promise };
    },
    props: {
      /**
       * Extra options that you want to pass to the component
       */
      options: {
        type: Object,
        default: () => {},
      },
      /**
       * The heat map data, is an array of `new google.maps.LatLng`,
       * @see [heatmap options](https://developers.google.com/maps/documentation/javascript/heatmaplayer#add-a-heatmap-layer)
       * @example `[new google.maps.LatLng(37.782, -122.447)]`
       */
      data: {
        type: Array,
        default: undefined,
      },
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$heatmapLayerObject && this.$heatmapLayerObject.setMap) {
        this.$heatmapLayerObject.setMap(null);
      }
    },
  };

  /* script */
  const __vue_script__$9 = script$9;

  /* template */

    /* style */
    const __vue_inject_styles__$9 = undefined;
    /* scoped */
    const __vue_scope_id__$9 = undefined;
    /* module identifier */
    const __vue_module_identifier__$9 = undefined;
    /* functional template */
    const __vue_is_functional_template__$9 = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$9 = /*#__PURE__*/normalizeComponent(
      {},
      __vue_inject_styles__$9,
      __vue_script__$9,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  /**
   * InfoWindow component
   * @displayName Info-Window
   * @see [source code](/guide/info-window.html#source-code)
   * @see [Official documentation](https://developers.google.com/maps/documentation/javascript/infowindows)
   * @see [Official reference](https://developers.google.com/maps/documentation/javascript/reference/info-window)
   */
  var script$8 = {
    name: 'InfoWindow',
    mixins: [mapElementMixin],
    inject: {
      $markerPromise: {
        default: null,
      },
    },
    provide() {
      const events = ['domready', 'closeclick', 'content_changed'];

      // Infowindow needs this to be immediately available
      const promise = this.$mapPromise
        .then((map) => {
          this.$map = map;

          // Initialize the maps with the given options
          const initialOptions = {
            // TODO: analyze the below line because I think it can be removed
            ...this.options,
            map,
            ...getPropsValues(this, infoWindowMappedProps),
          };

          const {
            options: extraOptions,
            position,
            ...finalOptions
          } = initialOptions;

          finalOptions.content = this.$refs.flyaway;

          if (this.$markerPromise) {
            this.$markerPromise.then((markerObject) => {
              this.$markerObject = markerObject;
              return markerObject;
            });
          }

          this.$infoWindowObject = new google.maps.InfoWindow(finalOptions);

          bindProps(this, this.$infoWindowObject, infoWindowMappedProps);
          bindEvents(this, this.$infoWindowObject, events);

          // TODO: This function names should be analyzed
          /* eslint-disable no-underscore-dangle -- old style */
          this._openInfoWindow();
          this.$watch('opened', () => {
            this._openInfoWindow();
          });
          /* eslint-enable no-underscore-dangle */

          return this.$infoWindowObject;
        })
        .catch((error) => {
          throw error;
        });

      // TODO: analyze the efects of only returns the instance and remove completely the promise
      this.$infoWindowPromise = promise;
      return { $infoWindowPromise: promise };
    },
    props: {
      /**
       * NOTE: This prop overrides the content of the default slot, use only one of them, not both at the same time
       * Content to display in the InfoWindow. This can be an HTML element, a plain-text string, or a string containing HTML. The InfoWindow will be sized according to the content. To set an explicit size for the content, set content to be a HTML element with that size.
       * @value undefined
       * @see [InfoWindow content](https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindowOptions.content)
       */
      content: {
        type: [String, Object],
        default: undefined,
      },
      /**
       * Determines if the info-window is open or not
       */
      opened: {
        type: Boolean,
        default: true,
      },
      /**
       * Contains the LatLng at which this info window is anchored.
       * Note: An InfoWindow may be attached either to a Marker object
       * (in which case its position is based on the marker's location)
       * or on the map itself at a specified LatLng.
       *
       * The LatLng at which to display this InfoWindow. If the InfoWindow is opened with an anchor, the anchor's position will be used instead.
       * @value undefined
       * @type LatLng|LatLngLiteral
       * @see [InfoWindow position](https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindowOptions.position)
       */
      position: {
        type: Object,
        default: undefined,
      },
      /**
       * All InfoWindows are displayed on the map in order of their zIndex, with higher values displaying in front of InfoWindows with lower values. By default, InfoWindows are displayed according to their latitude, with InfoWindows of lower latitudes appearing in front of InfoWindows at higher latitudes. InfoWindows are always displayed in front of markers.
       * @value 0
       * @see [InfoWindow position](https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindowOptions.zIndex)
       */
      zIndex: {
        type: Number,
        default: 0,
      },
      /**
       * Extra options that you want to pass to the component
       */
      options: {
        type: Object,
        required: false,
        default: undefined,
      },
    },
    mounted() {
      const el = this.$refs.flyaway;
      el.parentNode.removeChild(el);
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$infoWindowObject && this.$infoWindowObject.setMap) {
        this.$infoWindowObject.setMap(null);
      }
    },
    methods: {
      // TODO: we need to analyze the following method name
      // eslint-disable-next-line no-underscore-dangle -- old code
      _openInfoWindow() {
        if (this.opened) {
          if (this.$markerObject !== null) {
            this.$infoWindowObject.open(this.$map, this.$markerObject);
          } else {
            this.$infoWindowObject.open(this.$map);
          }
        } else {
          this.$infoWindowObject.close();
        }
      },
    },
  };

  /* script */
  const __vue_script__$8 = script$8;

  /* template */
  var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"flyaway"},[_vm._t("default")],2)])};
  var __vue_staticRenderFns__$3 = [];

    /* style */
    const __vue_inject_styles__$8 = undefined;
    /* scoped */
    const __vue_scope_id__$8 = undefined;
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$8 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$8,
      __vue_script__$8,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      false,
      undefined,
      undefined,
      undefined
    );

  /**
   * KmlLayer component
   * @displayName Kml-Layer
   * @see [source code](/guide/kml-layer.html#source-code)
   * @see [Official documentation](https://developers.google.com/maps/documentation/javascript/kmllayer)
   * @see [Official reference](https://developers.google.com/maps/documentation/javascript/reference/kml)
   */
  var script$7 = {
    name: 'KmlLayer',
    mixins: [mapElementMixin],
    render() {
      return '';
    },
    provide() {
      const events = [
        'click',
        'rightclick',
        'dblclick',
        'mouseup',
        'mousedown',
        'mouseover',
        'mouseout',
      ];

      // Infowindow needs this to be immediately available
      const promise = this.$mapPromise
        .then((map) => {
          this.$map = map;

          // Initialize the maps with the given options
          const initialOptions = {
            // TODO: analyze the below line because I think it can be removed
            ...this.options,
            map,
            ...getPropsValues(this, kmlLayerMappedProps),
          };

          const { options: extraOptions, ...finalOptions } = initialOptions;

          this.$kmlLayerObject = new google.maps.KmlLayer(finalOptions);

          bindProps(this, this.$kmlLayerObject, kmlLayerMappedProps);
          bindEvents(this, this.$kmlLayerObject, events);

          return this.$kmlLayerObject;
        })
        .catch((error) => {
          throw error;
        });

      this.$kmlLayerPromise = promise;
      return { $kmlLayerPromise: promise };
    },
    props: {
      /**
       * If true, the layer receives mouse events. Default value is true.
       * @see [KmlLayerOptions interface](https://developers.google.com/maps/documentation/javascript/reference/kml#KmlLayerOptions.clickable)
       */
      clickable: {
        type: Boolean,
        default: true,
      },
      /**
       * Specifies the Map on which to render the KmlLayer. You can hide a KmlLayer by setting this value to null within the setMap() method
       * @see [KmlLayerOptions interface](https://developers.google.com/maps/documentation/javascript/reference/kml#KmlLayerOptions.map)
       */
      map: {
        type: Object,
        default: undefined,
      },
      /**
       * By default, the input map is centered and zoomed to the bounding box of the contents of the layer. If this option is set to true, the viewport is
       * left unchanged, unless the map's center and zoom were never set.
       * @see [KmlLayerOptions interface](https://developers.google.com/maps/documentation/javascript/reference/kml#KmlLayerOptions.preserveViewport)
       */
      preserveViewport: {
        type: Boolean,
        default: false,
      },
      /**
       * Whether to render the screen overlays. Default true.
       * @see [KmlLayerOptions interface](https://developers.google.com/maps/documentation/javascript/reference/kml#KmlLayerOptions.screenOverlays)
       */
      screenOverlays: {
        type: Boolean,
        default: false,
      },
      /**
       * Suppress the rendering of info windows when layer features are clicked.
       * @see [KmlLayerOptions interface](https://developers.google.com/maps/documentation/javascript/reference/kml#KmlLayerOptions.suppressInfoWindows)
       */
      suppressInfoWindows: {
        type: Boolean,
        default: undefined,
      },
      /**
       * The URL of the KML document to display.
       * @see [KmlLayerOptions interface](https://developers.google.com/maps/documentation/javascript/reference/kml#KmlLayerOptions.url)
       */
      url: {
        type: String,
        default: '',
      },
      /**
       * The z-index of the layer.
       * @see [KmlLayerOptions interface](https://developers.google.com/maps/documentation/javascript/reference/kml#KmlLayerOptions.zIndex)
       */
      zIndex: {
        type: Number,
        default: undefined,
      },
      /**
       * More options that you can pass to the component
       * @value boolean
       */
      options: {
        type: Object,
        default: undefined,
      },
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$kmlLayerObject && this.$kmlLayerObject.setMap) {
        this.$kmlLayerObject.setMap(null);
      }
    },
  };

  /* script */
  const __vue_script__$7 = script$7;

  /* template */

    /* style */
    const __vue_inject_styles__$7 = undefined;
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
      {},
      __vue_inject_styles__$7,
      __vue_script__$7,
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      false,
      undefined,
      undefined,
      undefined
    );

  /* eslint-disable no-underscore-dangle -- old style, should be analyzed */
  /**
   * @class MountableMixin
   *
   * Mixin for objects that are mounted by Google Maps Javascript API.
   *
   * These are objects that are sensitive to element resize  operations
   * so it exposes a property which accepts a bus
   * ## The mixin code:
   * ```js
    export default {
      props: ['resizeBus'],

      data() {
        return {
          _actualResizeBus: null,
        };
      },

      created() {
        if (typeof this.resizeBus === 'undefined') {
          this.$data._actualResizeBus = this.$gmapDefaultResizeBus;
        } else {
          this.$data._actualResizeBus = this.resizeBus;
        }
      },

      methods: {
        _resizeCallback() {
          this.resize();
        },
        _delayedResizeCallback() {
          this.$nextTick(() => this._resizeCallback());
        },
      },

      watch: {
        resizeBus(newVal) {
          this.$data._actualResizeBus = newVal;
        },
        '$data._actualResizeBus': function actualResizeBus(newVal, oldVal) {
          if (oldVal) {
            oldVal.$off('resize', this._delayedResizeCallback);
          }
          if (newVal) {
            newVal.$on('resize', this._delayedResizeCallback);
          }
        },
      },

      destroyed() {
        if (this.$data._actualResizeBus) {
          this.$data._actualResizeBus.$off('resize', this._delayedResizeCallback);
        }
      },
    };
   * ```
   * @property {Function|undefined} resizeBus Vue props to set your custom resize bus function, otherwise it takes the default `$gmapDefaultResizeBus`
   * @property {Function|undefined} _actualResizeBus The current default resize bus function, **this should not be used outside of this mixin**
   */
  var mountableMixin = {
    props: ['resizeBus'],
    data: function data() {
      return {
        _actualResizeBus: null
      };
    },
    created: function created() {
      if (typeof this.resizeBus === 'undefined') {
        this.$data._actualResizeBus = this.$gmapDefaultResizeBus;
      } else {
        this.$data._actualResizeBus = this.resizeBus;
      }
    },
    methods: {
      _resizeCallback: function _resizeCallback() {
        this.resize();
      },
      _delayedResizeCallback: function _delayedResizeCallback() {
        var _this = this;
        this.$nextTick(function () {
          return _this._resizeCallback();
        });
      }
    },
    watch: {
      resizeBus: function resizeBus(newVal) {
        this.$data._actualResizeBus = newVal;
      },
      '$data._actualResizeBus': function (newVal, oldVal) {
        if (oldVal) {
          oldVal.$off('resize', this._delayedResizeCallback);
        }
        if (newVal) {
          newVal.$on('resize', this._delayedResizeCallback);
        }
      }
    },
    destroyed: function destroyed() {
      if (this.$data._actualResizeBus) {
        this.$data._actualResizeBus.$off('resize', this._delayedResizeCallback);
      }
    }
  };
  /* eslint-enable no-underscore-dangle */

  //

  /**
   * Map component
   * @displayName Map
   * @see [source code](/guide/map.html#source-code)
   * @see [Official documentation](https://developers.google.com/maps/documentation/javascript/basics)
   * @see [Official reference](https://developers.google.com/maps/documentation/javascript/reference/map)
   */
  var script$6 = {
    name: 'MapLayer',
    mixins: [mountableMixin],
    provide() {
      this.$mapPromise = new Promise((resolve, reject) => {
        this.$mapPromiseDeferred = { resolve, reject };
      });

      return {
        $mapPromise: this.$mapPromise,
      };
    },
    props: {
      /**
       * The initial Map center.
       * @see https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
       */
      center: {
        type: Object,
        required: true,
      },
      /**
       * The initial Map zoom level. Valid values: Integers between zero, and up to the supported maximum zoom level.
       * @see https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
       */
      zoom: {
        type: Number,
        required: false,
        default: undefined,
      },
      /**
       * The heading for aerial imagery in degrees measured clockwise from cardinal direction North. Headings are snapped to the nearest available angle for which imagery is available.
       * @see https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
       */
      heading: {
        type: Number,
        default: undefined,
      },
      /**
       * The initial Map mapTypeId. Defaults to ROADMAP.
       * @see https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
       */
      mapTypeId: {
        type: String,
        default: 'roadmap',
      },
      /**
       * For vector maps, sets the angle of incidence of the map. The allowed values are restricted depending on the zoom level of the map. For raster maps, controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are 0 and 45. The value 0 causes the map to always use a 0° overhead view regardless of the zoom level and viewport. The value 45 causes the tilt angle to automatically switch to 45 whenever 45° imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45° imagery is not available (this is the default behavior). 45° imagery is only available for satellite and hybrid map types, within some locations, and at some zoom levels. Note: getTilt returns the current tilt angle, not the value specified by this option. Because getTilt and this option refer to different things, do not bind() the tilt property; doing so may yield unpredictable effects.
       * @see https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
       */
      tilt: {
        type: Number,
        default: undefined,
      },
      /**
       * Extra options that you want pass to the component
       */
      options: {
        type: Object,
        default: undefined,
      },
    },
    data() {
      return {
        recyclePrefix: '__gmc__',
      };
    },
    computed: {
      finalLat() {
        return this.center && typeof this.center.lat === 'function'
          ? this.center.lat()
          : this.center.lat;
      },
      finalLng() {
        return this.center && typeof this.center.lng === 'function'
          ? this.center.lng()
          : this.center.lng;
      },
      finalLatLng() {
        return { lat: this.finalLat, lng: this.finalLng };
      },
    },
    watch: {
      zoom(zoom) {
        if (this.$mapObject) {
          this.$mapObject.setZoom(zoom);
        }
      },
    },
    beforeDestroy() {
      const recycleKey = this.getRecycleKey();
      if (window[recycleKey]) {
        window[recycleKey].div = this.$mapObject.getDiv();
      }
    },
    mounted() {
      return this.$gmapApiPromiseLazy()
        .then(() => {
          const events = [
            'bounds_changed',
            'click',
            'dblclick',
            'drag',
            'dragend',
            'dragstart',
            'idle',
            'mousemove',
            'mouseout',
            'mouseover',
            'resize',
            'rightclick',
            'tilesloaded',
          ];

          // getting the DOM element where to create the map
          const element = this.$refs['vue-map'];

          // creating the map
          const initialOptions = {
            ...this.options,
            ...getPropsValues(this, mapMappedProps),
          };

          // don't use delete keyword in order to create a more predictable code for the engine
          const { options: extraOptions, ...finalOptions } = initialOptions;
          const options = finalOptions;

          const recycleKey = this.getRecycleKey();
          if (
            this &&
            this.options &&
            this.options.recycle &&
            window[recycleKey]
          ) {
            element.appendChild(window[recycleKey].div);
            this.$mapObject = window[recycleKey].map;
            this.$mapObject.setOptions(options);
          } else {
            // console.warn('[gmap-vue] New google map created')
            this.$mapObject = new google.maps.Map(element, options);
            window[recycleKey] = { map: this.$mapObject };
          }

          // binding properties (two and one way)
          bindProps(this, this.$mapObject, mapMappedProps);
          // binding events
          bindEvents(this, this.$mapObject, events);

          // manually trigger center and zoom
          twoWayBindingWrapper((increment, decrement, shouldUpdate) => {
            this.$mapObject.addListener('center_changed', () => {
              if (shouldUpdate()) {
                /**
                 * This event is fired when the map center property changes. It sends the position displayed at the center of the map. If the center or bounds have not been set then the result is undefined. (types: `LatLng|undefined`)
                 *
                 * @event center_changed
                 * @type {(LatLng|undefined)}
                 */
                this.$emit('center_changed', this.$mapObject.getCenter());
              }
              decrement();
            });

            const updateCenter = () => {
              increment();
              this.$mapObject.setCenter(this.finalLatLng);
            };

            watchPrimitiveProperties(
              this,
              ['finalLat', 'finalLng'],
              updateCenter
            );
          });
          this.$mapObject.addListener('zoom_changed', () => {
            /**
             * This event is fired when the map zoom property changes. It sends the zoom of the map. If the zoom has not been set then the result is undefined. (types: `number|undefined`)
             *
             * @event zoom_changed
             * @type {(number|undefined)}
             */
            this.$emit('zoom_changed', this.$mapObject.getZoom());
          });
          this.$mapObject.addListener('bounds_changed', () => {
            /**
             * This event is fired when the viewport bounds have changed. It sends The lat/lng bounds of the current viewport.
             *
             * @event bounds_changed
             * @type {LatLngBounds}
             */
            this.$emit('bounds_changed', this.$mapObject.getBounds());
          });

          this.$mapPromiseDeferred.resolve(this.$mapObject);

          return this.$mapObject;
        })
        .catch((error) => {
          throw error;
        });
    },
    methods: {
      /**
       * This method trigger the resize event of Google Maps
       * @method resize
       * @param {undefined}
       * @returns {void}
       * @public
       */
      resize() {
        if (this.$mapObject) {
          google.maps.event.trigger(this.$mapObject, 'resize');
        }
      },
      /**
       * Preserve the previous center when resize the map
       * @method resizePreserveCenter
       * @param {undefined}
       * @returns {void}
       * @public
       */
      resizePreserveCenter() {
        if (!this.$mapObject) {
          return;
        }

        const oldCenter = this.$mapObject.getCenter();
        google.maps.event.trigger(this.$mapObject, 'resize');
        this.$mapObject.setCenter(oldCenter);
      },

      // Override mountableMixin::_resizeCallback
      // because resizePreserveCenter is usually the
      // expected behaviour
      // TODO: analyze the following disabled rule
      // eslint-disable-next-line no-underscore-dangle -- old code
      _resizeCallback() {
        this.resizePreserveCenter();
      },
      /**
       * Changes the center of the map by the given distance in pixels. If the distance is less than both the width and height of the map, the transition will be smoothly animated. Note that the map coordinate system increases from west to east (for x values) and north to south (for y values).
       * @method panBy
       * @param {number} x - Number of pixels to move the map in the x direction.
       * @param {number} y - Number of pixels to move the map in the y direction.
       * @returns {void}
       * @public
       */
      panBy(...args) {
        if (this.$mapObject) {
          this.$mapObject.panBy(...args);
        }
      },
      /**
       * Changes the center of the map to the given LatLng. If the change is less than both the width and height of the map, the transition will be smoothly animated.
       * @method panTo
       * @param {(LatLng|LatLngLiteral)} latLng - The new center latitude/longitude of the map. (types `LatLng|LatLngLiteral`)
       * @returns {void}
       * @public
       */
      panTo(...args) {
        if (this.$mapObject) {
          this.$mapObject.panTo(...args);
        }
      },
      /**
       * Pans the map by the minimum amount necessary to contain the given LatLngBounds. It makes no guarantee where on the map the bounds will be, except that the map will be panned to show as much of the bounds as possible inside {currentMapSizeInPx} - {padding}. For both raster and vector maps, the map's zoom, tilt, and heading will not be changed.
       * @method panToBounds
       * @param {(LatLngBounds|LatLngBoundsLiteral)} latLngBounds - The bounds to pan the map to. (types: `LatLngBounds|LatLngBoundsLiteral`)
       * @param {(number|Padding)} [padding] - optional Padding in pixels. A number value will yield the same padding on all 4 sides. The default value is 0. (types: `number|Padding`)
       * @returns {void}
       * @public
       */
      panToBounds(...args) {
        if (this.$mapObject) {
          this.$mapObject.panToBounds(...args);
        }
      },
      /**
       * Sets the viewport to contain the given bounds.
  Note: When the map is set to display: none, the fitBounds function reads the map's size as 0x0, and therefore does not do anything. To change the viewport while the map is hidden, set the map to visibility: hidden, thereby ensuring the map div has an actual size. For vector maps, this method sets the map's tilt and heading to their default zero values.
       * @method fitBounds
       * @param {(LatLngBounds|LatLngBoundsLiteral)} bounds - Bounds to show. (types: `LatLngBounds|LatLngBoundsLiteral`)
       * @param {(number|Padding)} [padding] - optional Padding in pixels. The bounds will be fit in the part of the map that remains after padding is removed. A number value will yield the same padding on all 4 sides. Supply 0 here to make a fitBounds idempotent on the result of getBounds. (types: `number|Padding`)
       * @returns {void}
       * @public
       */
      fitBounds(...args) {
        if (this.$mapObject) {
          this.$mapObject.fitBounds(...args);
        }
      },
      /**
       * Get the recycle key of the map
       * @method getRecycleKey
       * @param {undefined}
       * @returns {void}
       * @public
       */
      getRecycleKey() {
        return this && this.options && this.options.recycle
          ? this.recyclePrefix + this.options.recycle
          : this.recyclePrefix;
      },
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$mapObject && this.$mapObject.setMap) {
        this.$mapObject.setMap(null);
      }
    },
  };

  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return (id, style) => addStyle(id, style);
  }
  let HEAD;
  const styles = {};
  function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });
    if (!style.ids.has(id)) {
      style.ids.add(id);
      let code = css.source;
      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
        // http://stackoverflow.com/a/26603875
        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }
      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);
        if (HEAD === undefined) {
          HEAD = document.head || document.getElementsByTagName('head')[0];
        }
        HEAD.appendChild(style.element);
      }
      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        const index = style.ids.size - 1;
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  /* script */
  const __vue_script__$6 = script$6;

  /* template */
  var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-map-container"},[_c('div',{ref:"vue-map",staticClass:"vue-map"}),_vm._v(" "),_c('div',{staticClass:"vue-map-hidden"},[_vm._t("default")],2),_vm._v(" "),_vm._t("visible")],2)};
  var __vue_staticRenderFns__$2 = [];

    /* style */
    const __vue_inject_styles__$6 = function (inject) {
      if (!inject) return
      inject("data-v-58f81a38_0", { source: ".vue-map-container{position:relative}.vue-map-container .vue-map{left:0;right:0;top:0;bottom:0;position:absolute}.vue-map-hidden{display:none}", map: undefined, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      false,
      createInjector,
      undefined,
      undefined
    );

  /**
   * Marker component
   * @displayName Marker
   * @see [source code](/guide/marker.html#source-code)
   * @see [Official documentation](https://developers.google.com/maps/documentation/javascript/markers)
   * @see [Official reference](https://developers.google.com/maps/documentation/javascript/reference/marker)
   */
  var script$5 = {
    name: 'MarkerIcon',
    mixins: [mapElementMixin],
    inject: {
      $clusterPromise: {
        default: null,
      },
    },
    provide() {
      const events = [
        'click',
        'rightclick',
        'dblclick',
        'drag',
        'dragstart',
        'dragend',
        'mouseup',
        'mousedown',
        'mouseover',
        'mouseout',
      ];

      const promise = this.$mapPromise
        .then((map) => {
          this.$map = map;

          // Initialize the maps with the given options
          const initialOptions = {
            // TODO: analyze the below line because I think it can be removed
            ...this.options,
            map,
            ...getPropsValues(this, markerMappedProps),
          };

          const { options: extraOptions, ...finalOptions } = initialOptions;

          if (this.$clusterPromise) {
            finalOptions.map = null;
          }

          this.$markerObject = new google.maps.Marker(finalOptions);

          bindProps(this, this.$markerObject, markerMappedProps);
          bindEvents(this, this.$markerObject, events);

          this.$markerObject.addListener('dragend', () => {
            const newPosition = this.$markerObject.getPosition();
            /**
             * An event to detect when a position changes
             * @property {Object} position Object with lat and lng values, eg: { lat: 10.0, lng: 10.0 }
             */
            this.$emit('update:position', {
              lat: newPosition.lat(),
              lng: newPosition.lng(),
            });
          });

          if (this.$clusterPromise) {
            this.$clusterPromise.then((clusterObject) => {
              clusterObject.addMarker(this.$markerObject);
              this.$clusterObject = clusterObject;
            });
          }

          return this.$markerObject;
        })
        .catch((error) => {
          throw error;
        });

      this.$markerPromise = promise;
      return { $markerPromise: promise };
    },
    props: {
      /**
       * Which animation to play when marker is added to a map.
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      animation: {
        type: Number,
        default: undefined,
      },
      /**
       * This property was not found on the Googole Maps documentation, but it was defined in the previous version of this component.
       * Any suggestion is welcome here.
       */
      attribution: {
        type: Object,
        default: undefined,
      },
      /**
       * If true, the marker receives mouse and touch events. Default value is true.
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      clickable: {
        type: Boolean,
        default: true,
      },
      /**
       * Mouse cursor type to show on hover.
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      cursor: {
        type: String,
        default: undefined,
      },
      /**
       * If true, the marker can be dragged. Default value is false.
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      draggable: {
        type: Boolean,
        default: false,
      },
      /**
       * Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url.
       * Its type can be string|Icon|Symbol optional
       * @see [Icon type](https://developers.google.com/maps/documentation/javascript/reference/marker#Icon)
       * @see [Symbol type](https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol)
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      icon: {
        type: [String, Object],
        default: undefined,
      },
      /**
       * Adds a label to the marker. A marker label is a letter or number that appears inside a marker. The label can either be a string, or a MarkerLabel object. If provided and MarkerOptions.title is not provided, an accessibility text (e.g. for use with screen readers) will be added to the marker with the provided label's text. Please note that the label is currently only used for accessibility text for non-optimized markers.
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      label: {
        type: [String, Object],
        default: undefined,
      },
      /**
       * A number between 0.0, transparent, and 1.0, opaque.
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      opacity: {
        type: Number,
        default: 1,
      },
      /**
       * Extra options passed to this component.
       */
      options: {
        type: Object,
        default: undefined,
      },
      /**
       * This property was not found on the Googole Maps documentation, but it was defined in the previous version of this component.
       * Any suggestion is welcome here.
       */
      place: {
        type: Object,
        default: undefined,
      },
      /**
       * Marker position. The position is required to display the marker and can be provided with Marker.setPosition if not provided at marker construction.
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      position: {
        type: Object,
        default: undefined,
      },
      /**
       * Image map region definition used for drag/click.
       * @see [MarkerShape type](https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerShape)
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      shape: {
        type: Object,
        default: undefined,
      },
      /**
       * Rollover text. If provided, an accessibility text (e.g. for use with screen readers) will be added to the marker with the provided value. Please note that the title is currently only used for accessibility text for non-optimized markers.
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      title: {
        type: String,
        default: undefined,
      },
      /**
       * If true, the marker is visible.
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      visible: {
        type: Boolean,
        default: true,
      },
      /**
       * All markers are displayed on the map in order of their zIndex, with higher values displaying in front of markers with lower values. By default, markers are displayed according to their vertical position on screen, with lower markers appearing in front of markers further up the screen.
       * @see https://developers.google.com/maps/documentation/javascript/reference/marker
       */
      zIndex: {
        type: Number,
        default: undefined,
      },
    },
    destroyed() {
      if (!this.$markerObject) {
        return;
      }

      if (this.$clusterObject) {
        // Repaint will be performed in `updated()` of cluster
        this.$clusterObject.removeMarker(this.$markerObject, true);
      } else if (this.$markerObject && this.$markerObject.setMap) {
        this.$markerObject.setMap(null);
      }
    },
    render(h) {
      if (!this.$slots.default || this.$slots.default.length === 0) {
        return '';
      }
      if (this.$slots.default.length === 1) {
        // So that infowindows can have a marker parent
        return this.$slots.default[0];
      }

      /**
       * @slot Default slot of the component.
       */
      return h('div', this.$slots.default);
    },
  };

  /* script */
  const __vue_script__$5 = script$5;

  /* template */

    /* style */
    const __vue_inject_styles__$5 = undefined;
    /* scoped */
    const __vue_scope_id__$5 = undefined;
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
      {},
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  /**
   * PlaceInput component
   * @deprecated
   * @displayName PlaceInput
   * @see [source code](/guide/place-input.html#source-code)
   * @see [Map Bounds](https://developers.google.com/maps/documentation/javascript/places-autocomplete#set-the-bounds-on-creation-of-the-autocomplete-object)
   */
  var script$4 = {
    name: 'PlaceInput',
    props: {
      /**
       * Map bounds this is an LatLngBounds
       * object builded with
       * @value new google.maps.LatLngBounds(...)
       * @see [Map Bounds](https://developers.google.com/maps/documentation/javascript/places-autocomplete#set-the-bounds-on-creation-of-the-autocomplete-object)
       */
      bounds: {
        type: Object,
        default: undefined,
      },
      /**
       * A default value for the html input
       * @value string
       */
      defaultPlace: {
        type: String,
        default: '',
      },
      /**
       * Restrict the search to a specific country
       * @value `{[key: string]: string}`
       * @see [componentRestrictions](https://developers.google.com/maps/documentation/javascript/places-autocomplete#restrict-the-search-to-a-specific-country)
       */
      componentRestrictions: {
        type: Object,
        default: null,
      },
      /**
       * Map types this is an array of strings
       * @value string[]
       * @see [Map Bounds](https://developers.google.com/maps/documentation/javascript/places-autocomplete#set-the-bounds-on-creation-of-the-autocomplete-object)
       */
      types: {
        type: Array,
        default: undefined,
      },
      /**
       * A placeholder for the html input
       * @value string
       */
      placeholder: {
        required: false,
        type: String,
        default: undefined,
      },
      /**
       * A html class name for the html input
       * @value string
       */
      className: {
        required: false,
        type: String,
        default: undefined,
      },
      /**
       * A label for the html input
       * @value string
       */
      label: {
        required: false,
        type: String,
        default: null,
      },
      /**
       * If true the first element on the list will be selected
       * when you press enter in the html input.
       * @value boolean
       */
      selectFirstOnEnter: {
        require: false,
        type: Boolean,
        default: false,
      },
    },
    created() {
      window.console.warn(
        'The PlaceInput class is deprecated! Please consider using the Autocomplete input instead, it will be removed in the next major release of this plugin.'
      );
    },
    mounted() {
      const { input } = this.$refs;

      // Allow default place to be set
      input.value = this.defaultPlace;

      this.$watch('defaultPlace', () => {
        input.value = this.defaultPlace;
      });

      this.$gmapApiPromiseLazy().then(() => {
        const options = getPropsValues(this, placeInputMappedProps);

        if (this.selectFirstOnEnter) {
          downArrowSimulator(this.$refs.input);
        }

        if (typeof google.maps.places.Autocomplete !== 'function') {
          throw new Error(
            "google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?"
          );
        }

        this.$autoCompleter = new google.maps.places.Autocomplete(
          this.$refs.input,
          options
        );

        const {
          placeholder,
          place,
          defaultPlace,
          className,
          label,
          selectFirstOnEnter,
          ...rest
        } = placeInputMappedProps;

        bindProps(this, this.$autoCompleter, rest);

        this.$autoCompleter.addListener('place_changed', () => {
          /**
           * Place change event
           * @event place_changed
           * @property {object} place `this.$autocomplete.getPlace()`
           * @see [Get place information](https://developers.google.com/maps/documentation/javascript/places-autocomplete#get-place-information)
           */
          this.$emit('place_changed', this.$autoCompleter.getPlace());
        });
      });
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$autoCompleter && this.$autoCompleter.setMap) {
        this.$autoCompleter.setMap(null);
      }
    },
  };

  /* script */
  const __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_c('span',{domProps:{"textContent":_vm._s(_vm.label)}}),_vm._v(" "),_c('input',{ref:"input",class:_vm.className,attrs:{"type":"text","placeholder":_vm.placeholder}})])};
  var __vue_staticRenderFns__$1 = [];

    /* style */
    const __vue_inject_styles__$4 = undefined;
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      false,
      undefined,
      undefined,
      undefined
    );

  /**
   * Polygon component
   * @displayName GmapPolygon
   * @see [source code](/guide/polygon.html#source-code)
   * @see [official docs](https://developers.google.com/maps/documentation/javascript/examples/polygon-arrays?hl=es)
   * @see [official reference](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#Polygon)
   */
  var script$3 = {
    name: 'PolygonShape',
    mixins: [mapElementMixin],
    render() {
      return '';
    },
    provide() {
      const events = [
        'click',
        'dblclick',
        'drag',
        'dragend',
        'dragstart',
        'mousedown',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'rightclick',
      ];

      const $polygonPromise = this.$mapPromise
        .then((map) => {
          this.$map = map;

          // Initialize the maps with the given options
          const initialOptions = {
            ...this.options,
            map,
            ...getPropsValues(this, polygonMappedProps),
          };
          const {
            options: extraOptions,
            path: optionPath,
            paths: optionPaths,
            ...finalOptions
          } = initialOptions;

          this.$polygonObject = new google.maps.Polygon(finalOptions);

          bindProps(this, this.$polygonObject, polygonMappedProps);
          bindEvents(this, this.$polygonObject, events);

          let clearEvents = () => {};

          // Watch paths, on our own, because we do not want to set either when it is
          // empty
          this.$watch(
            'paths',
            (paths) => {
              if (paths) {
                clearEvents();

                this.$polygonObject.setPaths(paths);

                const updatePaths = () => {
                  /**
                   * An event to detect when a paths changes
                   * @property {array} paths `this.$polygonObject.getPaths()` |
                   */
                  this.$emit('paths_changed', this.$polygonObject.getPaths());
                };
                const eventListeners = [];

                const mvcArray = this.$polygonObject.getPaths();

                for (let i = 0; i < mvcArray.getLength(); i += 1) {
                  const mvcPath = mvcArray.getAt(i);
                  eventListeners.push([
                    mvcPath,
                    mvcPath.addListener('insert_at', updatePaths),
                  ]);
                  eventListeners.push([
                    mvcPath,
                    mvcPath.addListener('remove_at', updatePaths),
                  ]);
                  eventListeners.push([
                    mvcPath,
                    mvcPath.addListener('set_at', updatePaths),
                  ]);
                }

                eventListeners.push([
                  mvcArray,
                  mvcArray.addListener('insert_at', updatePaths),
                ]);
                eventListeners.push([
                  mvcArray,
                  mvcArray.addListener('remove_at', updatePaths),
                ]);
                eventListeners.push([
                  mvcArray,
                  mvcArray.addListener('set_at', updatePaths),
                ]);

                // TODO: analyze, we change map to forEach because clearEvents is a void function and the returned array is not used
                clearEvents = () => {
                  eventListeners.forEach(([, listenerHandle]) => {
                    google.maps.event.removeListener(listenerHandle);
                  });
                };
              }
            },
            {
              deep: this.deepWatch,
              immediate: true,
            }
          );

          this.$watch(
            'path',
            (path) => {
              if (path) {
                clearEvents();

                this.$polygonObject.setPaths(path);

                const mvcPath = this.$polygonObject.getPath();
                const eventListeners = [];

                const updatePaths = () => {
                  /**
                   * ### path_changed (undefined)
                   *
                   * An event to detect when a path change
                   * @property {array} path `this.$polygonObject.getPath()`
                   */
                  this.$emit('path_changed', this.$polygonObject.getPath());
                };

                eventListeners.push([
                  mvcPath,
                  mvcPath.addListener('insert_at', updatePaths),
                ]);
                eventListeners.push([
                  mvcPath,
                  mvcPath.addListener('remove_at', updatePaths),
                ]);
                eventListeners.push([
                  mvcPath,
                  mvcPath.addListener('set_at', updatePaths),
                ]);

                // TODO: analyze, we change map to forEach because clearEvents is a void function and the returned array is not used
                clearEvents = () => {
                  eventListeners.forEach(([, listenerHandle]) => {
                    google.maps.event.removeListener(listenerHandle);
                  });
                };
              }
            },
            {
              deep: this.deepWatch,
              immediate: true,
            }
          );

          return this.$polygonObject;
        })
        .catch((error) => {
          throw error;
        });

      this.$polygonPromise = $polygonPromise;
      return { $polygonPromise };
    },
    props: {
      /**
       * If set true the object will be deep watched
       * @value boolean
       */
      deepWatch: {
        type: Boolean,
        default: false,
      },
      /**
       * Indicates whether this Polygon handles mouse events. Defaults to true.
       * @value true, false
       * @see [Polygon draggable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.clickable)
       */
      clickable: {
        type: Boolean,
        default: false,
      },
      /**
       * Indicates if the polygon is draggable
       * @value true, false
       * @see [Polygon dragable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.draggable)
       */
      draggable: {
        type: Boolean,
        default: false,
      },
      /**
       * Indicates if the polygon is editable
       * @value true, false
       * @see [Polygon editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.editable)
       */
      editable: {
        type: Boolean,
        default: false,
      },
      /**
       * The fill color. All CSS3 colors are supported except for extended named colors.
       * @value '#000'
       * @see [Polygon editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.fillColor)
       */
      fillColor: {
        type: String,
        default: '',
      },
      /**
       * The fill opacity between 0.0 and 1.0
       * @value 1
       * @see [Polygon editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.fillOpacity)
       */
      fillOpacity: {
        type: Number,
        default: 1,
      },
      /**
       * The stroke color. All CSS3 colors are supported except for extended named colors.
       * @value '#000'
       * @see [Polygon editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.strokeColor)
       */
      strokeColor: {
        type: String,
        default: '',
      },
      /**
       * The stroke opacity between 0.0 and 1.0.
       * @value 1
       * @see [Polygon editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.strokeOpacity)
       */
      strokeOpacity: {
        type: Number,
        default: 1,
      },
      /**
       * The stroke position. Defaults to CENTER.
       * @value 1
       * @see [Polygon editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.strokePosition)
       * @see [StrokePosition constant](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#StrokePosition)
       */
      strokePosition: {
        type: Number,
        default: 0,
      },
      /**
       * The stroke width in pixels.
       * @value 1
       * @see [Polygon editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.strokeWeight)
       */
      strokeWeight: {
        type: Number,
        default: 1,
      },
      /**
       * Whether this polyline is visible on the map. Defaults to true.
       * @value 1
       * @see [Polygon editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.visible)
       */
      visible: {
        type: Boolean,
        default: true,
      },
      /**
       * More options that you can pass to the component
       * @value boolean
       */
      options: {
        type: Object,
        default: undefined,
      },
      /**
       * Indicates if the polygon is editable
       * @value Array
       * @see [Polygon path](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.path)
       */
      path: {
        type: Array,
        noBind: true,
        default: undefined,
      },
      /**
       * Indicates if the polygon is editable
       * @value Array
       * @see [Polygon paths](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolygonOptions.paths)
       */
      paths: {
        type: Array,
        noBind: true,
        default: undefined,
      },
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$polygonObject && this.$polygonObject.setMap) {
        this.$polygonObject.setMap(null);
      }
    },
  };

  /* script */
  const __vue_script__$3 = script$3;

  /* template */

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
      {},
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      false,
      undefined,
      undefined,
      undefined
    );

  /**
   * PolyLine component
   * @displayName GmapPolyline
   * @see [source code](/guide/polyline.html#source-code)
   * @see [official docs](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#Polyline)
   * @see [official reference](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#Polyline)
   */
  var script$2 = {
    name: 'PolylineShape',
    mixins: [mapElementMixin],
    render() {
      return '';
    },
    provide() {
      const events = [
        'click',
        'dblclick',
        'drag',
        'dragend',
        'dragstart',
        'mousedown',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'rightclick',
      ];

      const promise = this.$mapPromise
        .then((map) => {
          this.$map = map;

          // Initialize the maps with the given options
          const initialOptions = {
            ...this.options,
            map,
            ...getPropsValues(this, polylineMappedProps),
          };
          const { options: extraOptions, ...finalOptions } = initialOptions;

          this.$polylineObject = new google.maps.Polyline(finalOptions);

          bindProps(this, this.$polylineObject, polylineMappedProps);
          bindEvents(this, this.$polylineObject, events);

          let clearEvents = () => {};

          this.$watch(
            'path',
            (path) => {
              if (path) {
                clearEvents();

                this.$polylineObject.setPath(path);

                const mvcPath = this.$polylineObject.getPath();
                const eventListeners = [];

                const updatePaths = () => {
                  /**
                   * An event to detect when a path change
                   * @property {array} path `this.$polygonObject.getPath()`
                   */
                  this.$emit('path_changed', this.$polylineObject.getPath());
                };

                eventListeners.push([
                  mvcPath,
                  mvcPath.addListener('insert_at', updatePaths),
                ]);
                eventListeners.push([
                  mvcPath,
                  mvcPath.addListener('remove_at', updatePaths),
                ]);
                eventListeners.push([
                  mvcPath,
                  mvcPath.addListener('set_at', updatePaths),
                ]);

                clearEvents = () => {
                  // TODO: analyze, we change map to forEach because clearEvents is a void function and the returned array is not used
                  eventListeners.forEach(([, listenerHandle]) => {
                    google.maps.event.removeListener(listenerHandle);
                  });
                };
              }
            },
            {
              deep: this.deepWatch,
              immediate: true,
            }
          );

          return this.$polylineObject;
        })
        .catch((error) => {
          throw error;
        });

      // TODO: analyze the efects of only returns the instance and remove completely the promise
      this.$polylinePromise = promise;
      return { $polylinePromise: promise };
    },
    props: {
      /**
       * If set true the object will be deep watched
       * @value boolean
       */
      deepWatch: {
        type: Boolean,
        default: false,
      },
      /**
       * Indicates whether this Polygon handles mouse events. Defaults to true.
       * @value true, false
       * @see [Polyline draggable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolylineOptions.clickable)
       */
      clickable: {
        type: Boolean,
        default: false,
      },
      /**
       * Indicates if the polyline is draggable
       * @value true, false
       * @see [Polyline draggable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolylineOptions.draggable)
       */
      draggable: {
        type: Boolean,
      },
      /**
       * Indicates if the polygon is editable
       * @value true, false
       * @see [Polyline editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolylineOptions.editable)
       */
      editable: {
        type: Boolean,
      },
      /**
       * The stroke color. All CSS3 colors are supported except for extended named colors.
       * @value '#000'
       * @see [Polyline editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolylineOptions.strokeColor)
       */
      strokeColor: {
        type: String,
        default: '',
      },
      /**
       * The stroke opacity between 0.0 and 1.0.
       * @value 1
       * @see [Polyline editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolylineOptions.strokeOpacity)
       */
      strokeOpacity: {
        type: Number,
        default: 1,
      },
      /**
       * The stroke width in pixels.
       * @value 1
       * @see [Polyline editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolylineOptions.strokeWeight)
       */
      strokeWeight: {
        type: Number,
        default: 1,
      },
      /**
       * Whether this polyline is visible on the map. Defaults to true.
       * @value 1
       * @see [Polyline editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolylineOptions.visible)
       */
      visible: {
        type: Boolean,
        default: true,
      },
      /**
       * More options that you can pass to the component
       * @value boolean
       */
      options: {
        type: Object,
        default: undefined,
      },
      /**
       * Indicates if the polygon is editable
       * @value Array
       * @see [Polyline path](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#PolylineOptions.path)
       */
      path: {
        type: Array,
        default: undefined,
      },
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$polylineObject && this.$polylineObject.setMap) {
        this.$polylineObject.setMap(null);
      }
    },
  };

  /* script */
  const __vue_script__$2 = script$2;

  /* template */

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
      {},
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      undefined,
      undefined,
      undefined
    );

  /**
   * Rectangle component
   * @displayName GmapRectangle
   * @see [source code](/guide/rectangle.html#source-code)
   * @see [official docs](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#Rectangle)
   * @see [official reference](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#Rectangle)
   */
  var script$1 = {
    name: 'RectangleShape',
    mixins: [mapElementMixin],
    render() {
      return '';
    },
    provide() {
      const events = [
        'click',
        'dblclick',
        'drag',
        'dragend',
        'dragstart',
        'mousedown',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'rightclick',
      ];

      const $rectanglePromise = this.$mapPromise
        .then((map) => {
          this.$map = map;

          // Initialize the maps with the given options
          const initialOptions = {
            ...this.options,
            map,
            ...getPropsValues(this, rectangleMappedProps),
          };
          const { options: extraOptions, ...finalOptions } = initialOptions;

          this.$rectangleObject = new google.maps.Rectangle(finalOptions);

          bindProps(this, this.$rectangleObject, rectangleMappedProps);
          bindEvents(this, this.$rectangleObject, events);

          return this.$rectangleObject;
        })
        .catch((error) => {
          throw error;
        });

      this.$rectanglePromise = $rectanglePromise;
      return { $rectanglePromise };
    },
    props: {
      /**
       * The bounds.
       * @value object
       * @type LatLngBounds|LatLngBoundsLiteral
       * @see [Rectangle bounds](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#RectangleOptions.bounds)
       */
      bounds: {
        type: Object,
        default: undefined,
      },
      /**
       * Indicates whether this Polygon handles mouse events. Defaults to true.
       * @value true, false
       * @see [Rectangle draggable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#RectangleOptions.clickable)
       */
      clickable: {
        type: Boolean,
        default: false,
      },
      /**
       * If set to true, the user can drag this rectangle over the map. Defaults to false.
       * @value boolean
       * @see [Rectangle draggable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#RectangleOptions.draggable)
       */
      draggable: {
        type: Boolean,
        default: false,
      },
      /**
       * If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge. Defaults to false.
       * @value boolean
       * @see [Rectangle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#RectangleOptions.editable)
       */
      editable: {
        type: Boolean,
        default: false,
      },
      /**
       * The fill color. All CSS3 colors are supported except for extended named colors.
       * @value '#000'
       * @see [Rectangle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#RectangleOptions.fillColor)
       */
      fillColor: {
        type: String,
        default: '',
      },
      /**
       * The fill opacity between 0.0 and 1.0
       * @value 1
       * @see [Rectangle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#RectangleOptions.fillOpacity)
       */
      fillOpacity: {
        type: Number,
        default: 1,
      },
      /**
       * The stroke color. All CSS3 colors are supported except for extended named colors.
       * @value '#000'
       * @see [Rectangle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#RectangleOptions.strokeColor)
       */
      strokeColor: {
        type: String,
        default: '',
      },
      /**
       * The stroke opacity between 0.0 and 1.0.
       * @value 1
       * @see [Rectangle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#RectangleOptions.strokeOpacity)
       */
      strokeOpacity: {
        type: Number,
        default: 1,
      },
      /**
       * The stroke position. Defaults to CENTER.
       * @value 1
       * @see [Rectangle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#RectangleOptions.strokePosition)
       * @see [StrokePosition constant](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#StrokePosition)
       */
      strokePosition: {
        type: Number,
        default: 0,
      },
      /**
       * The stroke width in pixels.
       * @value 1
       * @see [Rectangle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#RectangleOptions.strokeWeight)
       */
      strokeWeight: {
        type: Number,
        default: 1,
      },
      /**
       * Whether this polyline is visible on the map. Defaults to true.
       * @value 1
       * @see [Rectangle editable](https://developers.google.com/maps/documentation/javascript/reference/polygon?hl=es#RectangleOptions.visible)
       */
      visible: {
        type: Boolean,
        default: true,
      },
      /**
       * More options that you can pass to the component
       * @value boolean
       */
      options: {
        type: Object,
        default: undefined,
      },
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$rectangleObject && this.$rectangleObject.setMap) {
        this.$rectangleObject.setMap(null);
      }
    },
  };

  /* script */
  const __vue_script__$1 = script$1;

  /* template */

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = undefined;
    /* style inject */
    
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
      {},
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      undefined,
      undefined,
      undefined
    );

  //

  /**
   * Street View Panorama component
   * @displayName GmapStreetViewPanorama
   * @see [source code](/guide/street-view-panorama.html#source-code)
   * @see [official docs](https://developers.google.com/maps/documentation/javascript/reference/street-view?hl=es#StreetViewPanorama)
   */
  var script = {
    name: 'StreetViewPanorama',
    mixins: [mountableMixin],
    provide() {
      this.$panoPromise = new Promise((resolve, reject) => {
        this.$panoPromiseDeferred = { resolve, reject };
      });
      return {
        $panoPromise: this.$panoPromise,
        $mapPromise: this.$panoPromise, // so that we can use it with markers
      };
    },
    props: {
      /**
       * The zoom of the panorama, specified as a number. A zoom of 0 gives a 180 degrees Field of View.
       * @value number
       * @see [StreetViewPanorama zoom](https://developers.google.com/maps/documentation/javascript/reference/street-view?hl=es#StreetViewPanoramaOptions.zoom)
       */
      zoom: {
        type: Number,
        default: undefined,
      },
      /**
       * The camera orientation, specified as heading and pitch, for the panorama.
       * @value object
       * @type StreetViewPov
       * @see [StreetViewPanorama pov](https://developers.google.com/maps/documentation/javascript/reference/street-view?hl=es#StreetViewPanoramaOptions.pov)
       */
      pov: {
        type: Object,
        default: undefined,
      },
      /**
       * The LatLng position of the Street View panorama.
       * @value object
       * @type LatLng|LatLngLiteral
       * @see [StreetViewPanorama position](https://developers.google.com/maps/documentation/javascript/reference/street-view?hl=es#StreetViewPanoramaOptions.position)
       */
      position: {
        type: Object,
        default: undefined,
      },
      /**
       * The panorama ID, which should be set when specifying a custom panorama.
       * @value string
       * @see [StreetViewPanorama pano](https://developers.google.com/maps/documentation/javascript/reference/street-view?hl=es#StreetViewPanoramaOptions.pano)
       */
      pano: {
        type: String,
        default: undefined,
      },
      /**
       * Whether motion tracking is on or off. Enabled by default when the motion tracking control is present, so that the POV (point of view) follows the orientation of the device. This is primarily applicable to mobile devices. If motionTracking is set to false while motionTrackingControl is enabled, the motion tracking control appears but tracking is off. The user can tap the motion tracking control to toggle this option.
       * @value boolean
       * @see [StreetViewPanorama motionTracking](https://developers.google.com/maps/documentation/javascript/reference/street-view?hl=es#StreetViewPanoramaOptions.motionTracking)
       */
      motionTracking: {
        type: Boolean,
      },
      /**
       * If true, the Street View panorama is visible on load.
       * @value boolean
       * @see [StreetViewPanorama visible](https://developers.google.com/maps/documentation/javascript/reference/street-view?hl=es#StreetViewPanoramaOptions.visible)
       */
      visible: {
        type: Boolean,
        default: true,
      },
      /**
       * More options that you can pass to the component
       * @value boolean
       */
      options: {
        type: Object,
        default: undefined,
      },
    },
    replace: false, // necessary for css styles
    computed: {
      finalLat() {
        return this.position && typeof this.position.lat === 'function'
          ? this.position.lat()
          : this.position.lat;
      },
      finalLng() {
        return this.position && typeof this.position.lng === 'function'
          ? this.position.lng()
          : this.position.lng;
      },
      finalLatLng() {
        return {
          lat: this.finalLat,
          lng: this.finalLng,
        };
      },
    },
    watch: {
      zoom(zoom) {
        if (this.$panoObject) {
          this.$panoObject.setZoom(zoom);
        }
      },
    },
    mounted() {
      const events = ['closeclick', 'status_changed'];

      return this.$gmapApiPromiseLazy()
        .then(() => {
          // getting the DOM element where to create the map
          const element = this.$refs['vue-street-view-pano'];

          // creating the map
          const options = {
            ...this.options,
            ...getPropsValues(this, streetViewPanoramaMappedProps),
          };

          const { options: extraOptions, ...finalOptions } = options;

          this.$panoObject = new google.maps.StreetViewPanorama(
            element,
            finalOptions
          );

          // binding properties (two and one way)
          bindProps(this, this.$panoObject, streetViewPanoramaMappedProps);
          // binding events
          bindEvents(this, this.$panoObject, events);

          // manually trigger position
          twoWayBindingWrapper((increment, decrement, shouldUpdate) => {
            // Panos take a while to load
            increment();

            this.$panoObject.addListener('position_changed', () => {
              if (shouldUpdate()) {
                this.$emit('position_changed', this.$panoObject.getPosition());
              }
              decrement();
            });

            const updateCenter = () => {
              increment();
              this.$panoObject.setPosition(this.finalLatLng);
            };

            watchPrimitiveProperties(
              this,
              ['finalLat', 'finalLng'],
              updateCenter
            );
          });

          this.$panoPromiseDeferred.resolve(this.$panoObject);

          return this.$panoPromise;
        })
        .catch((error) => {
          throw error;
        });
    },
    methods: {
      resize() {
        if (this.$panoObject) {
          google.maps.event.trigger(this.$panoObject, 'resize');
        }
      },
    },
    destroyed() {
      // Note: not all Google Maps components support maps
      if (this.$panoObject && this.$panoObject.setMap) {
        this.$panoObject.setMap(null);
      }
    },
  };

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-street-view-pano-container"},[_c('div',{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),_vm._v(" "),_vm._t("default")],2)};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-32786ad9_0", { source: ".vue-street-view-pano-container{position:relative}.vue-street-view-pano-container .vue-street-view-pano{left:0;right:0;top:0;bottom:0;position:absolute}", map: undefined, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  var _excluded = ["mappedProps", "name", "ctr", "ctrArgs", "events", "beforeCreate", "afterCreate", "props"],
    _excluded2 = ["options"];

  /**
   * Custom assert for local validation
   *
   * @param  {boolean} v The expression that should return a boolean value, if false the assertion fails
   * @param  {string} message Error message to be displayed
   */
  // eslint-disable-next-line no-underscore-dangle -- old style should be analyzed
  function _assert(v, message) {
    if (!v) throw new Error(message);
  }

  /**
   * A helper to build your own component for the plugin
   *
   * @param {Object} options
   * @param {Object} options.mappedProps - Definitions of props
   * @param {Object} options.mappedProps.PROP.type - Value type
   * @param {Boolean} options.mappedProps.PROP.twoWay
   *  - Whether the prop has a corresponding PROP_changed
   *   event
   * @param {Boolean} options.mappedProps.PROP.noBind
   *  - If true, do not apply the default bindProps / bindEvents.
   * However it will still be added to the list of component props
   * @param {Object} options.props - Regular Vue-style props.
   *  Note: must be in the Object form because it will be
   *  merged with the `mappedProps`
   *
   * @param {Object} options.events - Google Maps API events
   *  that are not bound to a corresponding prop
   * @param {String} options.name - e.g. `polyline`
   * @param {Function} options.ctr - constructor, e.g.
   *  `google.maps.Polyline`. However, since this is not
   *  generally available during library load, this becomes
   *  a function instead, e.g. () => google.maps.Polyline
   *  which will be called only after the API has been loaded
   *
   *  default: () => String
   *
   * @param {Function} options.ctrArgs -
   *   If the constructor in `ctr` needs to be called with
   *   arguments other than a single `options` object, e.g. for
   *   GroundOverlay, we call `new GroundOverlay(url, bounds, options)`
   *   then pass in a function that returns the argument list as an array
   *
   *   default: (MappedProps, OtherVueProps) => Array
   *
   * Otherwise, the constructor will be called with an `options` object,
   *   with property and values merged from:
   *
   *   1. the `options` property, if any
   *   2. a `map` property with the Google Maps
   *   3. all the properties passed to the component in `mappedProps`
   * @param {Function} options.beforeCreate -
   *  Hook to modify the options passed to the initializer
   *
   *  default: (Object) => Any
   *
   * @param {Function} options.afterCreate -
   *  Hook called when
   *
   *  default: (options.ctr, Object) => Any
   *
   * @returns {Object} A component object that should be exported by default from a Vue component
   */
  function mapElement(providedOptions) {
    var mappedProps = providedOptions.mappedProps,
      name = providedOptions.name,
      ctr = providedOptions.ctr,
      ctrArgs = providedOptions.ctrArgs,
      events = providedOptions.events,
      beforeCreate = providedOptions.beforeCreate,
      afterCreate = providedOptions.afterCreate,
      props = providedOptions.props,
      rest = _objectWithoutProperties(providedOptions, _excluded);
    var promiseName = "$".concat(name, "Promise");
    var instanceName = "$".concat(name, "Object");
    _assert(!(props instanceof Array), '`props` should be an object, not Array');
    return _objectSpread2(_objectSpread2({}, typeof GENERATE_DOC !== 'undefined' ? {
      $vgmOptions: providedOptions
    } : {}), {}, {
      mixins: [mapElementMixin],
      props: _objectSpread2(_objectSpread2({}, props), mappedPropsToVueProps(mappedProps)),
      render: function render() {
        return '';
      },
      provide: function provide() {
        var _this = this;
        var promise = this.$mapPromise.then(function (map) {
          // Infowindow needs this to be immediately available
          _this.$map = map;

          // Initialize the maps with the given options
          var initialOptions = _objectSpread2(_objectSpread2({}, _this.options), {}, {
            map: map
          }, getPropsValues(_this, mappedProps));
          // don't use delete keyword in order to create a more predictable code for the engine
          initialOptions.options;
            var finalOptions = _objectWithoutProperties(initialOptions, _excluded2); // delete the extra options
          var options = finalOptions;
          if (beforeCreate) {
            var result = beforeCreate.bind(_this)(options);
            if (result instanceof Promise) {
              return result.then(function () {
                return {
                  options: options
                };
              });
            }
          }
          return {
            options: options
          };
        }).then(function (_ref) {
          var _Function$prototype$b;
          var options = _ref.options;
          var ConstructorObject = ctr();
          // https://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
          _this[instanceName] = ctrArgs ? new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [ConstructorObject, null].concat(_toConsumableArray(ctrArgs(options, getPropsValues(_this, props || {}))))))() : new ConstructorObject(options);
          bindProps(_this, _this[instanceName], mappedProps);
          bindEvents(_this, _this[instanceName], events);
          if (afterCreate) {
            afterCreate.bind(_this)(_this[instanceName]);
          }
          return _this[instanceName];
        });
        this[promiseName] = promise;
        return _defineProperty({}, promiseName, promise);
      },
      destroyed: function destroyed() {
        // Note: not all Google Maps components support maps
        if (this[instanceName] && this[instanceName].setMap) {
          this[instanceName].setMap(null);
        }
      }
    }, rest);
  }

  /**
   * This function allow to auto detect an external load of the Google Maps API
   * or load it dynamically from our component.
   *
   * @param  {Function} resolveFn the function that indicates to the plugin that Google Maps is loaded
   * @param  {Function} customCallback the custom callback to execute when the plugin load. This option will be removed on the next major release
   */
  function createCallbackAndChecksIfMapIsLoaded(resolveFn, customCallback) {
    var callbackExecuted = false;
    window.GoogleMapsCallback = function () {
      try {
        resolveFn();
        callbackExecuted = true;
        // TODO: this should be removed on the next major release
        if (customCallback) {
          customCallback();
        }
      } catch (error) {
        window.console.error('Error executing the GoogleMapsCallback', error);
      }
    };
    var timeoutId = setTimeout(function () {
      var intervalId = setInterval(function () {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = undefined;
        }
        if ((window && window.google && window.google.maps) != null && !callbackExecuted) {
          window.GoogleMapsCallback();
          callbackExecuted = true;
        }
        if (callbackExecuted) {
          clearInterval(intervalId);
          intervalId = undefined;
        }
      }, 500);
    }, 1000);
  }

  /**
   * This function is a factory of the promise lazy creator
   * it helps you creating the function that will call the
   * Google Maps API in an async way
   *
   * @param  {Function} googleMapsApiInitializer function that initialize the Google Maps API
   * @param  {Object} GoogleMapsApi Vue instance that will help to know if the google API object is ready
   * @returns {Function}
   */
  function getPromiseLazyCreatorFn(googleMapsApiInitializer, GoogleMapsApi) {
    /**
     * The creator of the lazy promise
     *
     * @param  {Object|undefined} options=undefined configuration object to initialize the GmapVue plugin
     * @param  {boolean} options.dynamicLoad=false load the Google Maps API dynamically, if you set this to `true` the plugin doesn't load the Google Maps API
     * @param  {boolean} options.installComponents=true install all components
     * @param  {boolean} options.autoBindAllEvents=false auto bind all Google Maps API events
     * @param  {Object|undefined} options.load=undefined options to configure the Google Maps API
     * @param  {string} options.load.key your Google Maps API key
     * @param  {string} options.load.libraries=places the Google Maps libraries that you will use eg: 'places,drawing,visualization'
     * @param  {string|undefined} options.load.v=undefined the Google Maps API version, default latest
     * @param  {string|undefined} options.load.callback=GoogleMapsCallback This must be ignored if have another callback that you need to run when Google Maps API is ready please use the `customCallback` option.
     * @param  {string|undefined} options.load.customCallback=undefined This option was added on v3.0.0 but will be removed in the next major release. If you already have an script tag that loads Google Maps API and you want to use it set you callback in the `customCallback` option and our `GoogleMapsCallback` callback will execute your custom callback at the end; it must attached to the `window` object, is the only requirement.
     */

    return function promiseLazyCreator(options) {
      /**
       * Things to do once the API is loaded
       *
       * @returns {Object} the Google Maps API object
       */
      function onMapsReady() {
        GoogleMapsApi.isReady = true;
        return window.google;
      }

      // If library should load the API
      if (options && options.load && options.load.key || options.dynamicLoad) {
        return getLazyValue(function () {
          // This will only be evaluated once
          if (typeof window === 'undefined') {
            // server side -- never resolve this promise
            return new Promise(function () {}).then(onMapsReady);
          }
          return new Promise(function (resolve, reject) {
            try {
              createCallbackAndChecksIfMapIsLoaded(resolve, window[options && options.load && options.load.customCallback]);
              if (!options.dynamicLoad) {
                googleMapsApiInitializer(options.load, options.loadCn);
              }
            } catch (err) {
              reject(err);
            }
          }).then(onMapsReady);
        });
      }

      // If library should not handle API, provide
      // end-users with the global `GoogleMapsCallback: () => undefined`
      // when the Google Maps API has been loaded
      var promise = new Promise(function (resolve) {
        if (typeof window === 'undefined') {
          // Do nothing if run from server-side
          return;
        }
        createCallbackAndChecksIfMapIsLoaded(resolve, window[options && options.load && options.load.customCallback]);
      }).then(onMapsReady);
      return getLazyValue(function () {
        return promise;
      });
    };
  }

  /**
   * This function returns the initializer function, it is exported
   * in that way because we need to generate a closure to define a
   * private property called `isApiSetUp` to detect if the Google Maps
   * API was initializer in a previous execution.
   * The function that it exports is the function that we use inside
   * of promise-lazy file to initialize the Google Maps API if
   * it is required.
   *
   * @returns {Function} The initializer function
   */
  function createGoogleMapsAPIInitializer() {
    var isApiSetUp = false;

    /**
     * The initializer function, it adds into the head of the page the Google Maps API script tag to loads the library
     *
     * @param {Object|undefined} options=undefined The configuration Object. (@see https://developers.google.com/maps/documentation/javascript/url-params)
     *                         `libraries`.
     * @param  {string} options.key Your Google Maps API key
     * @param  {string} options.libraries=places The Google Maps libraries that you will use eg: 'places,drawing,visualization', can be given as an array too (@see https://developers.google.com/maps/documentation/javascript/libraries)
     * @param  {string|undefined} options.v=undefined The Google Maps API version, default latest
     * @param  {string|undefined} options.callback=GoogleMapsCallback This must be ignored if have another callback that you need to run when Google Maps API is ready please use the `customCallback` option.
     * @param  {string|undefined} options.customCallback=undefined This option was added on v3.0.0 but will be removed in the next major release. If you already have an script tag that loads Google Maps API and you want to use it set you callback in the `customCallback` option and our `GoogleMapsCallback` callback will execute your custom callback at the end; it must attached to the `window` object, is the only requirement.
     * @param {boolean} loadCn=false    Boolean. If set to true, the map will be loaded from google maps China
     *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
     */
    var googleMapsAPIInitializer = function googleMapsAPIInitializer(options, loadCn) {
      /**
       * Allow options to be an object.
       * This is to support more esoteric means of loading Google Maps,
       * such as Google for business
       * https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
       */
      if (_typeof(options) !== 'object') {
        throw new Error('options should  be an object');
      }

      // Do nothing if run from server-side
      if (typeof document === 'undefined') {
        return;
      }
      var finalOptions = _objectSpread2({}, options);
      var libraries = finalOptions.libraries;
      if (!isApiSetUp) {
        isApiSetUp = true;
        var baseUrl = typeof loadCn === 'boolean' && loadCn ? 'https://maps.google.cn' : 'https://maps.googleapis.com';
        var googleMapScript = document.createElement('SCRIPT');

        // libraries
        if (Array.isArray(libraries)) {
          finalOptions.libraries = libraries.join(',');
        }
        finalOptions.callback = 'GoogleMapsCallback';
        var query = Object.keys(finalOptions).map(function (key) {
          return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(finalOptions[key]));
        }).join('&');
        var url = "".concat(baseUrl, "/maps/api/js?").concat(query);
        googleMapScript.setAttribute('src', url);
        googleMapScript.setAttribute('async', '');
        googleMapScript.setAttribute('defer', '');
        document.head.appendChild(googleMapScript);
      } else {
        window.console.info('You already started the loading of google maps');
      }
    };
    return googleMapsAPIInitializer;
  }
  var googleMapsApiInitializer = createGoogleMapsAPIInitializer();

  /**
   * HACK: Cluster should be loaded conditionally
   * However in the web version, it's not possible to write
   * `import 'gmap-vue/src/components/cluster'`, so we need to
   * import it anyway (but we don't have to register it)
   * Therefore we use babel-plugin-transform-inline-environment-variables to
   * set BUILD_DEV to truthy / falsy
   */
  // const Cluster = ((s) => s.default || s)(
  //   require('./components/cluster-icon.vue')
  // );

  /**
   * @var
   * @type {Object|undefined}
   *
   * An independent Vue instance that helps us to know when the Google Maps API is loaded.
   */
  var GoogleMapsApi;

  // TODO: analyze the possibility of use globalThis here
  /**
   * This function helps you to get the Google Maps API
   * when its ready on the window object
   * @function
   */
  function getGoogleMapsAPI() {
    return GoogleMapsApi.isReady && window.google;
  }

  /**
   * Export all components and mixins
   * @constant
   * @type  {Object} components and mixins object
   * @property  {Object}  HeatmapLayer - Vue component HeatmapLayer
   * @property  {Object}  KmlLayer - Vue component KmlLayer
   * @property  {Object}  Marker - Vue component Marker
   * @property  {Object}  Polyline - Vue component Polyline
   * @property  {Object}  Polygon - Vue component Polygon
   * @property  {Object}  Circle - Vue component Circle
   * @property  {Object}  Cluster - Vue component Cluster
   * @property  {Object}  Rectangle - Vue component Rectangle
   * @property  {Object}  DrawingManager - Vue component DrawingManager
   * @property  {Object}  InfoWindow - Vue component InfoWindow
   * @property  {Object}  MapLayer - Vue component MapLayer
   * @property  {Object}  PlaceInput - Vue component PlaceInput
   * @property  {Object}  Autocomplete - Vue component Autocomplete
   * @property  {Object}  StreetViewPanorama - Vue component StreetViewPanorama
   * @property  {Object}  MapElementMixin - Vue component MapElementMixin
   * @property  {Object}  MountableMixin - Vue component MountableMixin
   */
  var components = {
    HeatmapLayer: __vue_component__$9,
    KmlLayer: __vue_component__$7,
    Marker: __vue_component__$5,
    Polyline: __vue_component__$2,
    Polygon: __vue_component__$3,
    Circle: __vue_component__$c,
    Cluster: __vue_component__$b,
    Rectangle: __vue_component__$1,
    DrawingManager: __vue_component__$a,
    InfoWindow: __vue_component__$8,
    MapLayer: __vue_component__$6,
    PlaceInput: __vue_component__$4,
    Autocomplete: __vue_component__$d,
    StreetViewPanorama: __vue_component__,
    MapElementMixin: mapElementMixin,
    MountableMixin: mountableMixin
  };

  /**
   * Export all helpers
   * @constant
   * @type  {Object} object containing all helpers
   * @property  {Function}  initGoogleMapsApi - function to initialize the Google Maps API
   * @property  {Function}  MapElementFactory - function to initialize the Google Maps API
   */
  var helpers = {
    googleMapsApiInitializer: googleMapsApiInitializer,
    MapElementFactory: mapElement
  };

  /**
   * GmapVue install function
   *
   * @param  {Object} Vue the vue instance
   * @param  {Object|undefined} options=undefined configuration object to initialize the GmapVue plugin
   * @param  {boolean} options.dynamicLoad=false load the Google Maps API dynamically, if you set this to `true` the plugin doesn't load the Google Maps API
   * @param  {boolean} options.installComponents=true install all components
   * @param  {boolean} options.autoBindAllEvents=false auto bind all Google Maps API events
   * @param  {Object|undefined} options.load=undefined options to configure the Google Maps API
   * @param  {string} options.load.key your Google Maps API key
   * @param  {string} options.load.libraries=places the Google Maps libraries that you will use eg: 'places,drawing,visualization'
   * @param  {string|undefined} options.load.v=undefined the Google Maps API version, default latest
   * @param  {string|undefined} options.load.callback=GoogleMapsCallback This must be ignored if have another callback that you need to run when Google Maps API is ready please use the `customCallback` option.
   * @param  {string|undefined} options.load.customCallback=undefined This option was added on v3.0.0 but will be removed in the next major release. If you already have an script tag that loads Google Maps API and you want to use it set you callback in the `customCallback` option and our `GoogleMapsCallback` callback will execute your custom callback at the end; it must attached to the `window` object, is the only requirement.
   */
  function gmapVuePluginInstallFn(Vue, options) {
    // see defaults
    var finalOptions = _objectSpread2({
      dynamicLoad: false,
      installComponents: true,
      autoBindAllEvents: false,
      load: {
        libraries: 'places'
      }
    }, options);

    /**
     * Update the global `GoogleMapsApi`. This will allow
     * components to use the `google` global reactively
     * via:
     *   import { getGoogleMapsAPI } from 'gmap-vue'
     *   export default {  computed: { google: getGoogleMapsAPI }  }
     */
    GoogleMapsApi = new Vue({
      data: {
        isReady: false
      }
    });
    var defaultResizeBus = new Vue();

    /**
     * Use a lazy to only load the API when
     * a GMap component is loaded
     *
     * @constant
     * @type {Function} the promise lazy creator function
     */
    var promiseLazyCreator = getPromiseLazyCreatorFn(googleMapsApiInitializer, GoogleMapsApi);
    /**
     * The gmapApiPromiseLazy function to can wait until Google Maps API is ready
     *
     * @constant
     * @type {Function}
     */
    var gmapApiPromiseLazy = promiseLazyCreator(finalOptions);

    /**
     * Instance properties
     *
     * In every component you have a references to
     * this.$gmapDefaultResizeBus - function to use the default resize bus
     * this.$gmapApiPromiseLazy - function that you can use to wait until Google Maps API is ready
     * this.$gmapOptions - object with the final options passed to Google Maps API to configure it
     */
    Vue.mixin({
      created: function created() {
        this.$gmapDefaultResizeBus = defaultResizeBus;
        this.$gmapApiPromiseLazy = gmapApiPromiseLazy;
        this.$gmapOptions = finalOptions;
      }
    });

    /**
     * Static properties
     *
     * These properties are the same references that you can find in the instance
     * but they are static because they are attached to the main Vue object.
     * Vue.$gmapDefaultResizeBus - function to use the default resize bus
     * Vue.$gmapApiPromiseLazy - function that you can use to wait until Google Maps API is ready
     * Vue.$gmapOptions - object with the final options passed to Google Maps API to configure it
     */
    Vue.$gmapDefaultResizeBus = defaultResizeBus;
    Vue.$gmapApiPromiseLazy = gmapApiPromiseLazy;
    Vue.$gmapOptions = finalOptions;
    if (finalOptions.installComponents) {
      Vue.component('GmapMap', __vue_component__$6);
      Vue.component('GmapMarker', __vue_component__$5);
      Vue.component('GmapInfoWindow', __vue_component__$8);
      Vue.component('GmapHeatmapLayer', __vue_component__$9);
      Vue.component('GmapKmlLayer', __vue_component__$7);
      Vue.component('GmapPolyline', __vue_component__$2);
      Vue.component('GmapPolygon', __vue_component__$3);
      Vue.component('GmapCircle', __vue_component__$c);
      Vue.component('GmapRectangle', __vue_component__$1);
      Vue.component('GmapDrawingManager', __vue_component__$a);
      Vue.component('GmapAutocomplete', __vue_component__$d);
      Vue.component('GmapPlaceInput', __vue_component__$4);
      Vue.component('GmapStreetViewPanorama', __vue_component__);
    }
  }

  /**
   * Export default of the default Vue object for plugins
   * Export for ESM modules
   *
   * @property {Function} install function to install the plugin
   * @see gmapVuePluginInstallFn
   */
  var main = {
    install: gmapVuePluginInstallFn
  };

  exports.components = components;
  exports["default"] = main;
  exports.getGoogleMapsAPI = getGoogleMapsAPI;
  exports.helpers = helpers;
  exports.install = gmapVuePluginInstallFn;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
