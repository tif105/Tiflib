// start of tif helper .lib
function wrapvalue(max,min,x){
    while(x>max){
        x-=max;
    }
    while(x<min){
        x+=max;
    }
    return x;
}


function Quatfromaxis(x,y,z) {
    var h = parseFloat(y)*Math.PI/360;
    var a = parseFloat(z)*Math.PI/360;
    var b = parseFloat(x)*Math.PI/360;
    var c1 = Math.cos(h);
    var c2 = Math.cos(a);
    var c3 = Math.cos(b);
    var s1 = Math.sin(h);
    var s2 = Math.sin(a);
    var s3 = Math.sin(b);

    this.qw = Math.round((c1*c2*c3 - s1*s2*s3)*100000)/100000;
    this.qx = Math.round((s1*s2*c3 + c1*c2*s3)*100000)/100000;
    this.qy = Math.round((s1*c2*c3 + c1*s2*s3)*100000)/100000;
    this.qz = Math.round((c1*s2*c3 - s1*c2*s3)*100000)/100000;
}


function wasdpad(){
    gamePad ={
        upkey: 0,
        downkey: 0,
        rightkey: 0,
        leftkey: 0,
    }



    document.onkeydown = (e) => {
        switch (e.keyCode){
            case 68 : 
                gamePad.rightkey=1;
                break;
            case 65 :
                gamePad.leftkey=1;
                break;
            case 87 :
                gamePad.upkey=1;
                break;
            case 83 :
                gamePad.downkey=1;
                break;
        }
    }

    document.onkeyup = (e) => {
        switch (e.keyCode){
            case 68 : 
                gamePad.rightkey=0;
                break;
            case 65 :
                gamePad.leftkey=0;
                break;
            case 87 :
                gamePad.upkey=0;
                break;
            case 83 :
                gamePad.downkey=0;
                break;
        }
    }
}