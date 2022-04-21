var orderList = new App.CheckList('#order-container');

var storeReturn = {};
function tempThing() {
    for (let i of Object.keys(storeReturn)) {
        console.log(i);
        if ('factor' in storeReturn[i]) {
            orderList.addRow(storeReturn[i]);
        };
    }
    orderList.addClickHandler(function (email) {
        remoteDataStore.remove(email);
    });
}
function makeChecklist () {
    remoteDataStore.getAll(function (resp) {
        storeReturn = resp;
        tempThing();
    });
}