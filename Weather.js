var _this = this;
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from 'react';
import { useGame } from './GameContext.js';
var Weather = function() {
    var state = useGame().state;
    // Get weather icon based on current weather
    var getWeatherIcon = function() {
        switch(state.weather.current){
            case 'sunny':
                return '☀️';
            case 'rainy':
                return '🌧️';
            case 'drought':
                return '🏜️';
            default:
                return '☀️';
        }
    };
    // Get weather name in Spanish
    var getWeatherName = function() {
        switch(state.weather.current){
            case 'sunny':
                return 'Soleado';
            case 'rainy':
                return 'Lluvioso';
            case 'drought':
                return 'Sequía';
            default:
                return 'Soleado';
        }
    };
    // Get effect description in Spanish
    var getWeatherEffect = function() {
        switch(state.weather.current){
            case 'sunny':
                return 'Crecimiento normal';
            case 'rainy':
                return 'Crecimiento +50%, Plantas auto-regadas';
            case 'drought':
                return state.upgrades.rainCollector.owned ? 'Crecimiento -10%' : 'Crecimiento -40%';
            default:
                return 'Crecimiento normal';
        }
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: state.weather.current === 'sunny' ? '#ffb74d' : state.weather.current === 'rainy' ? '#64b5f6' : '#ffe082',
            padding: '8px',
            borderRadius: '6px',
            margin: '8px 0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    fontSize: '1.5rem',
                    marginRight: '10px'
                },
                children: getWeatherIcon()
            }, void 0, false, {
                fileName: "Weather.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            fontWeight: 'bold'
                        },
                        children: getWeatherName()
                    }, void 0, false, {
                        fileName: "Weather.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        style: {
                            fontSize: '0.8rem'
                        },
                        children: getWeatherEffect()
                    }, void 0, false, {
                        fileName: "Weather.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "Weather.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ _jsxDEV("div", {
                style: {
                    marginLeft: 'auto',
                    fontSize: '0.8rem',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    padding: '2px 6px',
                    borderRadius: '10px'
                },
                children: [
                    state.weather.daysUntilChange,
                    " d\xeda",
                    state.weather.daysUntilChange !== 1 ? 's' : ''
                ]
            }, void 0, true, {
                fileName: "Weather.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "Weather.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, _this);
};
export default Weather;
