function findUserByUsername(arr, username){
    return arr.find(function(val){
        return val.username === username
    });
}
removeUser(arr, username){
    return arr.splice(arr.findIndex(function(val){
        return val.username === username;
    }),1)[0];
}