var StateChat = (state = null, action) => {
    switch (action.type) {
        case 'ADD_NEW_CHAT':
            if (state === null) {
                state = {};
            }
            return [action.item,...state ];
        default:
            return state;
    }
}

module.exports = StateChat;