var orderList = new App.CheckList('#order-container');

var storeReturn = {};
function makeChecklist () {
    // where storeReturn was previously declared
    remoteDataStore.getAll(function (resp) {
        storeReturn = resp;
    });
    // where tempThing() used to be
}
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