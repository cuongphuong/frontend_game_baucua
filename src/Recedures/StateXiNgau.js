var obj = {
    xingau1: '/img/xingau/xx.gif',
    xingau2: '/img/xingau/xx2.gif',
    xingau3: '/img/xingau/xx3.gif',
}

var StateXiNgau = (state = obj, action) => {
    switch (action.type) {
        case 'ADD_XI_NGAU':
            return action.item;
        case 'RESET_XI_NGAU':
            return {
                xingau1: '/img/xingau/xx.gif',
                xingau2: '/img/xingau/xx2.gif',
                xingau3: '/img/xingau/xx3.gif',
            };
        default:
            return state;
    }
}

module.exports = StateXiNgau;