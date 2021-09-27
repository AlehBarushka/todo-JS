import { initBg } from './modules/bg.js';
import { initTime } from './modules/clock.js';
import { initGreeting } from './modules/greeting.js';
import { initToDoApp } from './modules/todo-app.js';
import { initWeather } from './modules/weather.js';

function main() {
    initTime();
    initGreeting();
    initBg();
    initWeather();
    initToDoApp();
}
export { main };
