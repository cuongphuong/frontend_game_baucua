var redux = require('redux'); // add thư viện redux
var StateInfoUser = require('../Recedures/StateInfoUser.js');
var StateGame = require('../Recedures/StateGame.js');
var StateChat = require('../Recedures/StateChat.js');
var StateXiNgau = require('../Recedures/StateXiNgau.js');
//Khai báo các state

var reducer = redux.combineReducers({
    StateInfoUser : StateInfoUser,
    StateGame : StateGame,
    StateChat : StateChat,
    StateXiNgau : StateXiNgau
});

module.exports = reducer;