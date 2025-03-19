function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from 'react';
import { useGame } from './GameContext.js';
import { useClickSound } from './SoundEffects.js';
var Store = function() {
    var _useGame = useGame(), state = _useGame.state, dispatch = _useGame.dispatch;
    var playClickSound = useClickSound();
    var buyUpgrade = function(upgrade) {
        dispatch({
            type: 'BUY_UPGRADE',
            upgrade: upgrade
        });
        playClickSound();
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        style: {
            padding: '10px'
        },
        children: [
            /*#__PURE__*/ _jsxDEV("h2", {
                style: {
                    textAlign: 'center',
                    color: '#3a5311'
                },
                children: "Mejoras Ecol\xf3gicas"
            }, void 0, false, {
                fileName: "Store.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("p", {
                style: {
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    marginBottom: '20px'
                },
                children: "\xa1La agricultura sostenible aumenta tus ganancias y ayuda al medio ambiente!"
            }, void 0, false, {
                fileName: "Store.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                },
                children: Object.entries(state.upgrades).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], upgrade = _param[1];
                    return /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            backgroundColor: upgrade.owned ? '#a5d6a7' : 'white',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                children: [
                                    /*#__PURE__*/ _jsxDEV("h3", {
                                        style: {
                                            margin: '0 0 5px 0',
                                            color: '#3a5311'
                                        },
                                        children: [
                                            key === 'waterSystem' ? '💧 Riego por Goteo' : key === 'solarPanels' ? '☀️ Paneles Solares' : key === 'compost' ? '♻️ Sistema de Compostaje' : key === 'rainCollector' ? '🌧️ Colector de Lluvia' : '🌳 Árboles de Sombra',
                                            upgrade.owned && /*#__PURE__*/ _jsxDEV("span", {
                                                style: {
                                                    fontSize: '0.7rem',
                                                    backgroundColor: '#4caf50',
                                                    color: 'white',
                                                    padding: '2px 6px',
                                                    borderRadius: '10px',
                                                    marginLeft: '8px'
                                                },
                                                children: [
                                                    "Nivel ",
                                                    upgrade.level
                                                ]
                                            }, void 0, true, {
                                                fileName: "Store.jsx",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "Store.jsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("p", {
                                        style: {
                                            margin: 0,
                                            fontSize: '0.8rem'
                                        },
                                        children: upgrade.effect
                                    }, void 0, false, {
                                        fileName: "Store.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "Store.jsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, _this),
                            upgrade.owned && upgrade.level >= upgrade.maxLevel ? /*#__PURE__*/ _jsxDEV("span", {
                                style: {
                                    backgroundColor: '#388e3c',
                                    color: 'white',
                                    padding: '5px 10px',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem'
                                },
                                children: "Nivel M\xe1ximo"
                            }, void 0, false, {
                                fileName: "Store.jsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, _this) : /*#__PURE__*/ _jsxDEV("button", {
                                onClick: function() {
                                    return buyUpgrade(key);
                                },
                                disabled: state.money < upgrade.cost,
                                style: {
                                    backgroundColor: state.money >= upgrade.cost ? '#388e3c' : '#a5d6a7',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 15px',
                                    borderRadius: '4px',
                                    cursor: state.money >= upgrade.cost ? 'pointer' : 'not-allowed'
                                },
                                children: upgrade.owned ? "Mejorar a Nivel ".concat(upgrade.level + 1, " - $").concat(upgrade.cost) : "Comprar $".concat(upgrade.cost)
                            }, void 0, false, {
                                fileName: "Store.jsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, _this)
                        ]
                    }, key, true, {
                        fileName: "Store.jsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, _this);
                })
            }, void 0, false, {
                fileName: "Store.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#f1f8e9',
                    borderRadius: '8px',
                    border: '1px solid #c5e1a5'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("h3", {
                        style: {
                            margin: '0 0 10px 0',
                            color: '#3a5311',
                            textAlign: 'center'
                        },
                        children: [
                            "Puntuaci\xf3n de Sostenibilidad: ",
                            state.sustainabilityScore
                        ]
                    }, void 0, true, {
                        fileName: "Store.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        style: {
                            margin: 0,
                            fontSize: '0.9rem',
                            textAlign: 'center'
                        },
                        children: "\xa1Cada punto aumenta el valor de tus granos en un 10%!"
                    }, void 0, false, {
                        fileName: "Store.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "Store.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "Store.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, _this);
};
export default Store;
