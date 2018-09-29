var obj = {
    test: true,
    isPlayGame: false,
    isTa : false,
    isXiNgau: false,
    isCloseGame: false,
    persent: 0,
    heightChat: '20px',
    lstAvatar: null,
    chuPhong: null,
    objCuoc: { nai: null, bau: null, ga: null, ca: null, cua: null, tom: null },
}
var StateGame = (state = obj, action) => {
    switch (action.type) {
        case 'CHANGE_ITEM_INFO_GAME':
            return action.item;
        case 'REMOVE_INFO_GAME':
            break;
        default:
            return state;
    }
}

module.exports = StateGame;