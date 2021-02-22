/*What is firebase?
 1. FIREBASE STORES ALL THE DATA
 2. TREE STRUCTURE...

        STUDENTS
        ---ROLL NO
                ---NAME
                ---STD
                ---SECTION
                ---GENDER
        ('student'/'roll no'/'section')
3. 32 subsets of nodes

4. 4 things.
        --- save from VScode to firebase(INSERT)---.  .set
        --- read data from firebase to our vs Code
        --- update new data --- .on("value",workingFn, errfun)
        --- delete firebase --- remove
*/
var database;
function setup(){
        createCanvas(600,600);
        database = firebase.database();
        readDB();
        
        buttonV = createButton('Click');
}

function draw(){
        buttonV.mousePressed(function(data){
                writeDB();
        })
 
}
function readDB(){
        var dbRef = database.ref();

        dbRef.on("value",function(vin){
                console.log(vin.val());
        })

}
/*function writeDB(){
        var dbRef = database.ref('Name');

        dbRef.update({
                'Name':'Vinayak',
                'Hobby':'Coding'

        })        
}*/

function writeDB(){
        var dbRef = database.ref();

        dbRef.set({
                'Hobby1':'P',
                'Hobby2': 'A',
                'Hobby3': 'C'
        })
}