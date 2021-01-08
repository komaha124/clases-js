class Circle {
    constructor(radius = 2){
        this.radius = radius;
    }

    get Radius1(){
        return this.radius;
    }

    set Radius2(num1){
        this.radius = Number(num1);
    }

    get DiametrCircle(){
        return this.radius*2;
    }

    get CircleArea(){
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }

    get СircumFerence(){
        return (2 * Math.PI *  this.radius).toFixed(2);
    }
 
}

let a = new Circle();


function show(){
    let Output = document.getElementById('radius');
    clean()
    Output.insertAdjacentHTML('beforeend',`Радиус окружности - ${a.Radius1}`);
}

function clean() {
    let compareClean = document.getElementById("radius");
    while (compareClean.firstChild) {
        compareClean.removeChild(compareClean.firstChild);
    }
}

function showRadius(){
let inputText = document.getElementById("RadNum").value;
let compareClean = document.getElementById("radius");

if (inputText =="" || Number(inputText) < 1){
    clean()
    compareClean.insertAdjacentHTML('beforeend',`нужно число больше 0`);
   
}else{
a.Radius2 = inputText;
clean()
compareClean.insertAdjacentHTML('beforeend',`Новый радиус окружности - ${a.Radius1}`);
}
}

function showDiametr(){
    let compareClean = document.getElementById("radius");
    clean()
    compareClean.insertAdjacentHTML('beforeend',`Диаметр - ${a.DiametrCircle}`);
    
}

function CircleAArea(){
    let compareClean = document.getElementById("radius");
    clean()
    compareClean.insertAdjacentHTML('beforeend',`Площадь окружности - ${a.CircleArea}`);
}

function СircumFFerence(){
    let compareClean = document.getElementById("radius");
    clean()
    compareClean.insertAdjacentHTML('beforeend',`Длина окружности - ${a.СircumFerence}`);
}