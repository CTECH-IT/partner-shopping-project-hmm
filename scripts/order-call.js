var orderList = new App.CheckList('#order-container');

function makeChecklist () {
    var storeReturn = {};
    remoteDataStore.getAll(function (resp) {
        storeReturn = JSON.parse(resp);
    });
    for (let i of Object.keys(storeReturn)) {
        if ('factor' in JSON.parse(storeReturn[i])) {
            orderList.addRow(JSON.parse(storeReturn[i]));
        };
    }
    orderList.addClickHandler(function (email) {
        remoteDataStore.remove(email);
    });
}