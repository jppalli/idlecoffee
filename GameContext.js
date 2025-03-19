function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
import React, { createContext, useContext, useReducer, useEffect } from 'react';
var GameContext = /*#__PURE__*/ createContext();
// Load saved state from localStorage if available
var loadSavedState = function() {
    try {
        var savedState = localStorage.getItem('coffeeGameState');
        if (savedState) {
            return JSON.parse(savedState);
        }
    } catch (error) {
        console.error('Error loading saved game:', error);
    }
    return null;
};
var initialState = loadSavedState() || {
    beans: 0,
    money: 10,
    beanValue: 1.5,
    autoGrowthRate: 0,
    plotExpansionCost: 25,
    beanVarieties: {
        arabica: {
            name: 'Arábica',
            growthRate: 1,
            value: 1,
            appearance: '☕',
            description: 'Suave y aromático'
        },
        robusta: {
            name: 'Robusta',
            growthRate: 1.2,
            value: 0.8,
            appearance: '🍵',
            description: 'Fuerte y resistente'
        },
        liberica: {
            name: 'Libérica',
            growthRate: 0.8,
            value: 1.5,
            appearance: '🥤',
            description: 'Exótico y frutal'
        }
    },
    sustainabilityScore: 0,
    waterAmount: 10,
    waterRefillRate: 1,
    waterMax: 20,
    plots: Array(12).fill().map(function() {
        return {
            planted: false,
            growthProgress: 0,
            needsWater: false,
            readyToHarvest: false,
            variety: null
        };
    }),
    weather: {
        current: 'sunny',
        multiplier: 1,
        daysUntilChange: 2
    },
    upgrades: {
        waterSystem: {
            owned: false,
            level: 0,
            maxLevel: 3,
            cost: 50,
            effect: "Aumenta el valor de los granos en un 50%",
            levelCostMultiplier: 2.5,
            levelEffects: [
                "Aumenta el valor de los granos en un 50%",
                "Aumenta el valor de los granos en un 100%",
                "Aumenta el valor de los granos en un 150%"
            ]
        },
        solarPanels: {
            owned: false,
            level: 0,
            maxLevel: 3,
            cost: 100,
            effect: "Aumenta el crecimiento automático en 1 grano/seg",
            levelCostMultiplier: 2,
            levelEffects: [
                "Aumenta el crecimiento automático en 1 grano/seg",
                "Aumenta el crecimiento automático en 2 granos/seg",
                "Aumenta el crecimiento automático en 3 granos/seg"
            ]
        },
        compost: {
            owned: false,
            level: 0,
            maxLevel: 3,
            cost: 30,
            effect: "Reduce el tiempo de cosecha en un 20%",
            levelCostMultiplier: 2,
            levelEffects: [
                "Reduce el tiempo de cosecha en un 20%",
                "Reduce el tiempo de cosecha en un 35%",
                "Reduce el tiempo de cosecha en un 50%"
            ]
        },
        rainCollector: {
            owned: false,
            level: 0,
            maxLevel: 2,
            cost: 150,
            effect: "Mejora rendimiento durante sequías en un 40%",
            levelCostMultiplier: 1.8,
            levelEffects: [
                "Mejora rendimiento durante sequías en un 40%",
                "Elimina completamente la penalización por sequía"
            ]
        },
        shadeTrees: {
            owned: false,
            level: 0,
            maxLevel: 2,
            cost: 200,
            effect: "Calidad y valor de granos +25% en todo clima",
            levelCostMultiplier: 2,
            levelEffects: [
                "Calidad y valor de granos +25% en todo clima",
                "Calidad y valor de granos +50% en todo clima"
            ]
        }
    },
    lastTick: Date.now()
};
function gameReducer(state, action) {
    switch(action.type){
        case 'PLANT_SEED':
            if (state.money < 1) return state; // Seeds cost $1 (reduced from $2)
            var plotIndex = action.plotIndex;
            var varietyType = action.variety || 'arabica'; // Default to arabica if no variety specified
            if (plotIndex < 0 || plotIndex >= state.plots.length || state.plots[plotIndex].planted) return state;
            var updatedPlots = _to_consumable_array(state.plots);
            updatedPlots[plotIndex] = {
                planted: true,
                growthProgress: 0,
                needsWater: true,
                readyToHarvest: false,
                variety: varietyType
            };
            return _object_spread_props(_object_spread({}, state), {
                plots: updatedPlots,
                money: state.money - 1
            });
        case 'WATER_PLANT':
            if (state.waterAmount <= 0) return state;
            var waterPlotIndex = action.plotIndex;
            if (waterPlotIndex < 0 || waterPlotIndex >= state.plots.length || !state.plots[waterPlotIndex].planted || state.plots[waterPlotIndex].readyToHarvest) return state;
            var waterUpdatedPlots = _to_consumable_array(state.plots);
            waterUpdatedPlots[waterPlotIndex] = _object_spread_props(_object_spread({}, state.plots[waterPlotIndex]), {
                needsWater: false,
                growthProgress: Math.min(state.plots[waterPlotIndex].growthProgress + 20, 100)
            });
            return _object_spread_props(_object_spread({}, state), {
                plots: waterUpdatedPlots,
                waterAmount: Math.max(state.waterAmount - 1, 0)
            });
        case 'HARVEST_PLANT':
            var harvestPlotIndex = action.plotIndex;
            if (harvestPlotIndex < 0 || harvestPlotIndex >= state.plots.length || !state.plots[harvestPlotIndex].readyToHarvest) return state;
            var harvestUpdatedPlots = _to_consumable_array(state.plots);
            harvestUpdatedPlots[harvestPlotIndex] = {
                planted: false,
                growthProgress: 0,
                needsWater: false,
                readyToHarvest: false,
                variety: null
            };
            // Get bean variety for potential value bonus
            var harvestedPlot = state.plots[harvestPlotIndex];
            var beanVarietyValue = 1;
            if (harvestedPlot.variety && state.beanVarieties[harvestedPlot.variety]) {
                beanVarietyValue = state.beanVarieties[harvestedPlot.variety].value;
            }
            return _object_spread_props(_object_spread({}, state), {
                plots: harvestUpdatedPlots,
                beans: state.beans + 1,
                // Add small money bonus for harvesting to balance early game
                // Add variety-specific value bonus
                money: state.money + 0.5 * beanVarietyValue
            });
        case 'SELL_BEANS':
            if (state.beans <= 0) return state;
            return _object_spread_props(_object_spread({}, state), {
                beans: 0,
                money: state.money + state.beans * state.beanValue * (1 + state.sustainabilityScore / 10)
            });
        case 'BUY_UPGRADE':
            var upgrade = state.upgrades[action.upgrade];
            if (!upgrade || state.money < upgrade.cost) return state;
            // Calculate the new level
            var isLevelUp = upgrade.owned;
            var newLevel = isLevelUp ? upgrade.level + 1 : 1;
            // If trying to level up beyond max level, return current state
            if (newLevel > upgrade.maxLevel) return state;
            // Calculate the new cost for the next level (for UI display)
            var nextLevelCost = Math.floor(upgrade.cost * upgrade.levelCostMultiplier);
            var newState = _object_spread_props(_object_spread({}, state), {
                money: state.money - upgrade.cost,
                upgrades: _object_spread_props(_object_spread({}, state.upgrades), _define_property({}, action.upgrade, _object_spread_props(_object_spread({}, upgrade), {
                    owned: true,
                    level: newLevel,
                    cost: nextLevelCost,
                    effect: upgrade.levelEffects[newLevel - 1]
                }))),
                sustainabilityScore: state.sustainabilityScore + 1
            });
            // Apply upgrade effects based on level
            if (action.upgrade === 'waterSystem') {
                // 50% increase per level (1.5x, 2x, 2.5x)
                var valueMultiplier = 1 + 0.5 * newLevel;
                newState.beanValue = state.beanValue * (valueMultiplier / (isLevelUp ? 1 + 0.5 * (newLevel - 1) : 1));
            } else if (action.upgrade === 'solarPanels') {
                // +1 per level
                newState.autoGrowthRate = isLevelUp ? state.autoGrowthRate + 1 : state.autoGrowthRate + newLevel;
            }
            return newState;
        case 'EXPAND_PLOTS':
            if (state.money < state.plotExpansionCost) return state;
            // Add 4 new plot cells
            var newPlots = _to_consumable_array(state.plots).concat(_to_consumable_array(Array(4).fill().map(function() {
                return {
                    planted: false,
                    growthProgress: 0,
                    needsWater: false,
                    readyToHarvest: false,
                    variety: null
                };
            })));
            return _object_spread_props(_object_spread({}, state), {
                money: state.money - state.plotExpansionCost,
                plots: newPlots,
                // Increase cost for next expansion
                plotExpansionCost: Math.floor(state.plotExpansionCost * 1.5),
                // Also increase bean value slightly with each expansion
                beanValue: state.beanValue * 1.1
            });
        case 'CHANGE_WEATHER':
            var weatherTypes = [
                'sunny',
                'rainy',
                'drought'
            ];
            var newWeather = action.weather || weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
            // Set weather multiplier based on type and upgrades
            var multiplier = 1;
            if (newWeather === 'rainy') {
                multiplier = 1.5; // 50% boost during rain
            } else if (newWeather === 'drought') {
                multiplier = 0.6; // 40% reduction during drought
                // Rain collector upgrade reduces the drought penalty
                if (state.upgrades.rainCollector.owned) {
                    // Level 1: multiplier = 0.9 (10% reduction)
                    // Level 2: multiplier = 1.0 (no reduction)
                    multiplier = state.upgrades.rainCollector.level === 2 ? 1.0 : 0.9;
                }
            }
            return _object_spread_props(_object_spread({}, state), {
                weather: {
                    current: newWeather,
                    multiplier: multiplier,
                    daysUntilChange: Math.floor(Math.random() * 3) + 1 // 1-3 days
                }
            });
        case 'TICK':
            var now = Date.now();
            var deltaTime = (now - state.lastTick) / 1000;
            // Apply weather and upgrades to growth rate
            var growthMultiplier = state.weather.multiplier;
            if (state.upgrades.shadeTrees.owned) {
                // Level 1: 10% boost, Level 2: 25% boost
                var shadeBenefit = state.upgrades.shadeTrees.level === 1 ? 1.1 : 1.25;
                growthMultiplier *= shadeBenefit;
            }
            // Calculate new beans with weather effects for auto-growth (separate from planted plots)
            var weatherAdjustedRate = state.autoGrowthRate * growthMultiplier;
            var newBeans = state.beans + Math.floor(weatherAdjustedRate * deltaTime);
            // Update water amount
            var newWaterAmount = Math.min(state.waterAmount + state.waterRefillRate * deltaTime, state.waterMax);
            // Chance to change weather each day (approx every 30 seconds)
            var daysPassed = Math.floor(deltaTime / 30);
            var newWeatherState = _object_spread({}, state.weather);
            if (daysPassed > 0 && state.weather.daysUntilChange <= daysPassed) {
                // Time to change the weather
                var weatherTypes1 = [
                    'sunny',
                    'rainy',
                    'drought'
                ];
                var currentIndex = weatherTypes1.indexOf(state.weather.current);
                var possibleWeathers = weatherTypes1.filter(function(_, index) {
                    return index !== currentIndex;
                });
                var newWeather1 = possibleWeathers[Math.floor(Math.random() * possibleWeathers.length)];
                // Set weather multiplier
                var multiplier1 = 1;
                if (newWeather1 === 'rainy') {
                    multiplier1 = 1.5;
                } else if (newWeather1 === 'drought') {
                    multiplier1 = state.upgrades.rainCollector.owned ? state.upgrades.rainCollector.level === 2 ? 1.0 : 0.9 : 0.6;
                }
                newWeatherState = {
                    current: newWeather1,
                    multiplier: multiplier1,
                    daysUntilChange: Math.floor(Math.random() * 3) + 1
                };
            } else if (daysPassed > 0) {
                // Just reduce days until change
                newWeatherState.daysUntilChange = Math.max(state.weather.daysUntilChange - daysPassed, 0);
            }
            // Update planted plots
            var updatedGrowthPlots = state.plots.map(function(plot) {
                if (!plot.planted || plot.readyToHarvest) return plot;
                // Plants don't need water during rainy weather
                var needsWater = plot.needsWater;
                if (state.weather.current !== 'rainy') {
                    // Only check for water needs if not raining
                    if (!plot.needsWater && Math.random() < 0.1 * deltaTime) {
                        needsWater = true;
                    }
                    // If plant needs water, it doesn't grow
                    if (needsWater) {
                        return _object_spread_props(_object_spread({}, plot), {
                            needsWater: needsWater
                        });
                    }
                } else if (needsWater) {
                    // If it's raining, automatically water any plants that need it
                    needsWater = false;
                }
                // Calculate growth progress based on weather and time
                // Apply variety-specific growth rates
                var varietyGrowthMultiplier = 1;
                if (plot.variety && state.beanVarieties[plot.variety]) {
                    varietyGrowthMultiplier = state.beanVarieties[plot.variety].growthRate;
                }
                var growthIncrease = 5 * growthMultiplier * varietyGrowthMultiplier * deltaTime;
                // Apply compost upgrade effects
                if (state.upgrades.compost.owned) {
                    // Level 1: 20% faster, Level 2: 35% faster, Level 3: 50% faster
                    var compostBonus = [
                        1.2,
                        1.35,
                        1.5
                    ][state.upgrades.compost.level - 1];
                    growthIncrease *= compostBonus;
                }
                var newProgress = plot.growthProgress + growthIncrease;
                var readyToHarvest = newProgress >= 100;
                return _object_spread_props(_object_spread({}, plot), {
                    growthProgress: Math.min(newProgress, 100),
                    readyToHarvest: readyToHarvest
                });
            });
            // Cap beans to available plots (12)
            var cappedBeans = Math.min(newBeans, 12);
            return _object_spread_props(_object_spread({}, state), {
                beans: cappedBeans,
                lastTick: now,
                weather: newWeatherState,
                plots: updatedGrowthPlots,
                waterAmount: newWaterAmount
            });
        default:
            return state;
    }
}
export var GameProvider = function(param) {
    var children = param.children;
    var _useReducer = _sliced_to_array(useReducer(gameReducer, initialState), 2), state = _useReducer[0], dispatch = _useReducer[1];
    // Save state to localStorage whenever it changes
    useEffect(function() {
        try {
            localStorage.setItem('coffeeGameState', JSON.stringify(state));
        } catch (error) {
            console.error('Error saving game:', error);
        }
    }, [
        state
    ]);
    useEffect(function() {
        var tickInterval = setInterval(function() {
            dispatch({
                type: 'TICK'
            });
        }, 1000);
        return function() {
            return clearInterval(tickInterval);
        };
    }, []);
    return /*#__PURE__*/ _jsxDEV(GameContext.Provider, {
        value: {
            state: state,
            dispatch: dispatch
        },
        children: children
    }, void 0, false, {
        fileName: "GameContext.jsx",
        lineNumber: 436,
        columnNumber: 5
    }, _this);
};
export var useGame = function() {
    return useContext(GameContext);
};
