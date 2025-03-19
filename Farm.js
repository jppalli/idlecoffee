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
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from 'react';
import { useGame } from './GameContext.js';
import Weather from './Weather.js';
import { useCashSound, useWaterSound, useHarvestSound, usePlantSound, useClickSound } from './SoundEffects.js';
var Farm = function() {
    var _useGame = useGame(), state = _useGame.state, dispatch = _useGame.dispatch;
    var _useState = _sliced_to_array(useState(null), 2), beanPosition = _useState[0], setBeanPosition = _useState[1];
    var _useState1 = _sliced_to_array(useState(false), 2), showAnimation = _useState1[0], setShowAnimation = _useState1[1];
    var _useState2 = _sliced_to_array(useState('plant'), 2), activeAction = _useState2[0], setActiveAction = _useState2[1]; // 'plant', 'water', 'harvest'
    var _useState3 = _sliced_to_array(useState('arabica'), 2), selectedVariety = _useState3[0], setSelectedVariety = _useState3[1];
    var playCashSound = useCashSound();
    var playWaterSound = useWaterSound();
    var playHarvestSound = useHarvestSound();
    var playPlantSound = usePlantSound();
    var playClickSound = useClickSound();
    var handlePlotClick = function(e, index) {
        // Get position for animations
        var rect = e.currentTarget.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        setBeanPosition({
            x: x,
            y: y
        });
        // Add visual feedback when clicking
        var target = e.currentTarget;
        target.style.transform = 'scale(0.95)';
        setTimeout(function() {
            target.style.transform = 'scale(1)';
        }, 150);
        var plot = state.plots[index];
        // Perform action based on current active action and plot state
        if (activeAction === 'plant' && !plot.planted) {
            dispatch({
                type: 'PLANT_SEED',
                plotIndex: index,
                variety: selectedVariety
            });
            playPlantSound();
        } else if (activeAction === 'water' && plot.planted && plot.needsWater && !plot.readyToHarvest) {
            setShowAnimation(true);
            setTimeout(function() {
                return setShowAnimation(false);
            }, 500);
            dispatch({
                type: 'WATER_PLANT',
                plotIndex: index
            });
            playWaterSound();
        } else if (activeAction === 'harvest' && plot.readyToHarvest) {
            setShowAnimation(true);
            setTimeout(function() {
                return setShowAnimation(false);
            }, 500);
            dispatch({
                type: 'HARVEST_PLANT',
                plotIndex: index
            });
            playHarvestSound();
        }
    };
    var sellBeans = function() {
        if (state.beans > 0) {
            dispatch({
                type: 'SELL_BEANS'
            });
            playCashSound();
        }
    };
    var expandPlots = function() {
        dispatch({
            type: 'EXPAND_PLOTS'
        });
        playClickSound();
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        style: {
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ _jsxDEV(Weather, {}, void 0, false, {
                fileName: "Farm.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '10px 0',
                    backgroundColor: '#dcedc8',
                    borderRadius: '20px',
                    padding: '5px'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: function() {
                            setActiveAction('plant');
                            playClickSound();
                        },
                        style: {
                            backgroundColor: activeAction === 'plant' ? '#689f38' : 'transparent',
                            color: activeAction === 'plant' ? 'white' : '#558b2f',
                            border: 'none',
                            borderRadius: '15px',
                            padding: '8px 12px',
                            fontWeight: 'bold',
                            fontSize: '0.9rem'
                        },
                        children: "\uD83C\uDF31 Plantar"
                    }, void 0, false, {
                        fileName: "Farm.jsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: function() {
                            setActiveAction('water');
                            playClickSound();
                        },
                        style: {
                            backgroundColor: activeAction === 'water' ? '#689f38' : 'transparent',
                            color: activeAction === 'water' ? 'white' : '#558b2f',
                            border: 'none',
                            borderRadius: '15px',
                            padding: '8px 12px',
                            fontWeight: 'bold',
                            fontSize: '0.9rem'
                        },
                        children: "\uD83D\uDCA7 Regar"
                    }, void 0, false, {
                        fileName: "Farm.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: function() {
                            setActiveAction('harvest');
                            playClickSound();
                        },
                        style: {
                            backgroundColor: activeAction === 'harvest' ? '#689f38' : 'transparent',
                            color: activeAction === 'harvest' ? 'white' : '#558b2f',
                            border: 'none',
                            borderRadius: '15px',
                            padding: '8px 12px',
                            fontWeight: 'bold',
                            fontSize: '0.9rem'
                        },
                        children: "✂️ Cosechar"
                    }, void 0, false, {
                        fileName: "Farm.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "Farm.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, _this),
            activeAction === 'plant' && /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#dcedc8',
                    borderRadius: '15px',
                    padding: '8px',
                    margin: '5px 0',
                    gap: '8px'
                },
                children: Object.entries(state.beanVarieties).map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], variety = _param[1];
                    return /*#__PURE__*/ _jsxDEV("button", {
                        onClick: function() {
                            setSelectedVariety(key);
                            playClickSound();
                        },
                        style: {
                            backgroundColor: selectedVariety === key ? '#689f38' : 'transparent',
                            color: selectedVariety === key ? 'white' : '#558b2f',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '6px 10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            fontSize: '0.85rem'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                style: {
                                    fontSize: '1.2rem',
                                    marginBottom: '2px'
                                },
                                children: variety.appearance
                            }, void 0, false, {
                                fileName: "Farm.jsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, _this),
                            /*#__PURE__*/ _jsxDEV("span", {
                                children: variety.name
                            }, void 0, false, {
                                fileName: "Farm.jsx",
                                lineNumber: 159,
                                columnNumber: 15
                            }, _this)
                        ]
                    }, key, true, {
                        fileName: "Farm.jsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, _this);
                })
            }, void 0, false, {
                fileName: "Farm.jsx",
                lineNumber: 130,
                columnNumber: 9
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    backgroundColor: '#1b5e20',
                    borderRadius: '10px',
                    padding: '5px 10px',
                    margin: '10px 0',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("span", {
                        children: [
                            "\uD83D\uDCA7 Agua: ",
                            Math.floor(state.waterAmount),
                            "/",
                            state.waterMax
                        ]
                    }, void 0, true, {
                        fileName: "Farm.jsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("span", {
                        children: "\uD83D\uDCB0 Semillas: $1 cada una"
                    }, void 0, false, {
                        fileName: "Farm.jsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "Farm.jsx",
                lineNumber: 165,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    position: 'relative',
                    minHeight: '240px',
                    backgroundColor: '#a77b5b',
                    borderRadius: '10px',
                    margin: '10px auto',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.3)',
                    backgroundImage: 'linear-gradient(to bottom, #a77b5b, #86624e)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridTemplateRows: "repeat(".concat(Math.ceil(state.plots.length / 4), ", 1fr)"),
                    gap: '8px',
                    padding: '10px'
                },
                children: [
                    state.plots.map(function(plot, index) {
                        return /*#__PURE__*/ _jsxDEV("div", {
                            onClick: function(e) {
                                return handlePlotClick(e, index);
                            },
                            style: {
                                backgroundColor: '#5d4037',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                boxShadow: 'inset 0 0 5px rgba(0,0,0,0.2)',
                                transition: 'all 0.2s ease'
                            },
                            children: plot.planted && /*#__PURE__*/ _jsxDEV(_Fragment, {
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            width: '60%',
                                            height: '70%',
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                style: {
                                                    width: '8px',
                                                    height: '10px',
                                                    backgroundColor: '#3a5311',
                                                    zIndex: 1
                                                }
                                            }, void 0, false, {
                                                fileName: "Farm.jsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, _this),
                                            /*#__PURE__*/ _jsxDEV("div", {
                                                style: {
                                                    width: plot.readyToHarvest ? '25px' : '18px',
                                                    height: plot.readyToHarvest ? '25px' : '18px',
                                                    borderRadius: '50% 50% 8px 8px',
                                                    backgroundColor: plot.readyToHarvest ? '#8bc34a' : plot.needsWater ? '#aaa' : '#558b2f',
                                                    marginTop: '-2px',
                                                    transition: 'all 0.3s ease',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    fontSize: '12px'
                                                },
                                                children: plot.readyToHarvest && plot.variety && state.beanVarieties[plot.variety] && /*#__PURE__*/ _jsxDEV("span", {
                                                    children: state.beanVarieties[plot.variety].appearance
                                                }, void 0, false, {
                                                    fileName: "Farm.jsx",
                                                    lineNumber: 244,
                                                    columnNumber: 23
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "Farm.jsx",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, _this),
                                            plot.readyToHarvest && /*#__PURE__*/ _jsxDEV("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: '12px',
                                                    width: '6px',
                                                    height: '10px',
                                                    backgroundColor: '#654321',
                                                    borderRadius: '40% 40% 60% 60%',
                                                    transform: 'rotate(15deg)'
                                                }
                                            }, void 0, false, {
                                                fileName: "Farm.jsx",
                                                lineNumber: 248,
                                                columnNumber: 21
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "Farm.jsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            width: '80%',
                                            height: '5px',
                                            backgroundColor: '#3e2723',
                                            borderRadius: '2px',
                                            marginTop: '5px',
                                            overflow: 'hidden'
                                        },
                                        children: /*#__PURE__*/ _jsxDEV("div", {
                                            style: {
                                                width: "".concat(plot.growthProgress, "%"),
                                                height: '100%',
                                                backgroundColor: plot.needsWater ? '#ff9800' : '#4caf50',
                                                transition: 'width 0.3s ease'
                                            }
                                        }, void 0, false, {
                                            fileName: "Farm.jsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "Farm.jsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, _this),
                                    plot.needsWater && /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            position: 'absolute',
                                            top: '2px',
                                            right: '2px',
                                            color: '#2196f3',
                                            fontSize: '10px'
                                        },
                                        children: "\uD83D\uDCA7"
                                    }, void 0, false, {
                                        fileName: "Farm.jsx",
                                        lineNumber: 277,
                                        columnNumber: 19
                                    }, _this),
                                    state.weather.current === 'rainy' && plot.needsWater && /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: '2px',
                                            right: '2px',
                                            fontSize: '10px',
                                            animation: 'droplet 2s infinite'
                                        },
                                        children: "\uD83C\uDF27️"
                                    }, void 0, false, {
                                        fileName: "Farm.jsx",
                                        lineNumber: 289,
                                        columnNumber: 19
                                    }, _this)
                                ]
                            }, void 0, true)
                        }, index, false, {
                            fileName: "Farm.jsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, _this);
                    }),
                    showAnimation && beanPosition && /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            position: 'absolute',
                            left: beanPosition.x - 10,
                            top: beanPosition.y - 10,
                            fontSize: '20px',
                            animation: 'float-up 0.5s forwards',
                            opacity: 0,
                            zIndex: 2
                        },
                        children: activeAction === 'water' ? '💧' : activeAction === 'harvest' ? '+1 🫘' : '🌱'
                    }, void 0, false, {
                        fileName: "Farm.jsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("style", {
                        children: "\n            @keyframes float-up {\n              0% { transform: translateY(0); opacity: 1; }\n              100% { transform: translateY(-20px); opacity: 0; }\n            }\n            @keyframes droplet {\n              0% { transform: translateY(-3px); opacity: 0.7; }\n              50% { transform: translateY(0); opacity: 1; }\n              100% { transform: translateY(-3px); opacity: 0.7; }\n            }\n          "
                    }, void 0, false, {
                        fileName: "Farm.jsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "Farm.jsx",
                lineNumber: 178,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    margin: '20px 0'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: sellBeans,
                        style: {
                            backgroundColor: state.beans > 0 ? '#388e3c' : '#a5d6a7',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '20px',
                            fontSize: '1rem',
                            margin: '0 10px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        },
                        children: [
                            "Vender Granos ($",
                            (state.beans * state.beanValue * (1 + state.sustainabilityScore / 10)).toFixed(2),
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "Farm.jsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: function() {
                            dispatch({
                                type: 'EXPAND_PLOTS'
                            });
                            playClickSound();
                        },
                        disabled: state.money < state.plotExpansionCost,
                        style: {
                            backgroundColor: state.money >= state.plotExpansionCost ? '#5d4037' : '#8d6e63',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '20px',
                            fontSize: '1rem',
                            margin: '10px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        },
                        children: [
                            "Expandir Parcelas ($",
                            state.plotExpansionCost,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "Farm.jsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "Farm.jsx",
                lineNumber: 333,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    margin: '10px 0',
                    padding: '8px',
                    backgroundColor: '#f1f8e9',
                    borderRadius: '8px',
                    border: '1px solid #dcedc8',
                    fontSize: '0.85rem'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("h3", {
                        style: {
                            margin: '0 0 5px 0',
                            textAlign: 'center',
                            fontSize: '1rem',
                            color: '#33691e'
                        },
                        children: "Variedades de Caf\xe9"
                    }, void 0, false, {
                        fileName: "Farm.jsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-around'
                        },
                        children: Object.entries(state.beanVarieties).map(function(param) {
                            var _param = _sliced_to_array(param, 2), key = _param[0], variety = _param[1];
                            return /*#__PURE__*/ _jsxDEV("div", {
                                style: {
                                    textAlign: 'center',
                                    padding: '0 5px'
                                },
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            fontSize: '1.2rem'
                                        },
                                        children: variety.appearance
                                    }, void 0, false, {
                                        fileName: "Farm.jsx",
                                        lineNumber: 385,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        style: {
                                            fontWeight: 'bold',
                                            color: '#33691e'
                                        },
                                        children: variety.name
                                    }, void 0, false, {
                                        fileName: "Farm.jsx",
                                        lineNumber: 386,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        children: [
                                            "Crece: ",
                                            variety.growthRate > 1 ? '+' : '',
                                            Math.round((variety.growthRate - 1) * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "Farm.jsx",
                                        lineNumber: 387,
                                        columnNumber: 15
                                    }, _this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        children: [
                                            "Valor: ",
                                            variety.value > 1 ? '+' : '',
                                            Math.round((variety.value - 1) * 100),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "Farm.jsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, _this)
                                ]
                            }, key, true, {
                                fileName: "Farm.jsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "Farm.jsx",
                        lineNumber: 382,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "Farm.jsx",
                lineNumber: 371,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("p", {
                style: {
                    fontSize: '0.9rem',
                    color: '#666'
                },
                children: [
                    "Parcelas: ",
                    state.plots.length,
                    " | Valor del Grano: $",
                    state.beanValue.toFixed(2),
                    /*#__PURE__*/ _jsxDEV("br", {}, void 0, false, {
                        fileName: "Farm.jsx",
                        lineNumber: 396,
                        columnNumber: 9
                    }, _this),
                    "Crecimiento Auto: ",
                    (state.autoGrowthRate * state.weather.multiplier).toFixed(1),
                    "/seg"
                ]
            }, void 0, true, {
                fileName: "Farm.jsx",
                lineNumber: 394,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "Farm.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, _this);
};
export default Farm;
