const populateCategories = ['name','type','user','price'];
function generatePage(text){
    const itemsData=JSON.parse(text).items;
    const items=document.getElementById('items').childNodes;
    for(let i=0;i<items.length;i++){
        let itemFields = Array.from(items[i].childNodes);
        for(let keyName of populateCategories) {
           itemFields.filter(x => x.className == keyName)[0].innerHTML = itemsData[i][keyName];
        }
    }
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            generatePage(this.responseText);
        }
    };
    xhttp.open("GET", "/store", true);
    xhttp.send();
}
loadDoc();