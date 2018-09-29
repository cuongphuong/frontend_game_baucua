var obj = {
    login : false,
    name : 'null'
}

var StateInfoUser = (state = obj, action) => {
    switch (action.type) {
        case 'ADD_INFO_USER':
            return action.item;
        default:
            return state;
    }
}

module.exports = StateInfoUser;