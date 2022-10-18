 
 
let a = prompt("чтобы вычислить объем куба выберите - 1, параллелипипеда - 2, прямоугольного паралеллипипеда - 3, призмы -4, пирамиды -5")

  if (a == 1) {
    function cube(){
    let a = prompt ( "Чтобы узнать объем куба - Введите значение стороны, в см" );
    let result = a*a*a;
    return result;
}
    function pPov() {
        let a = prompt ( "Чтобы узнать площадь куба - Введите значение стороны, в см" );
        let result = 6*a*a
        return result;
    }
alert("Объем куба = " + cube() + " площадь поверхности куба =" + pPov());
  }

else if (a == 2) {
    function parall() {
    let sOsn = prompt ( "Чтобы узнать объем паралеллипипеда  - Введите площадь основания, в см" );
    let h = prompt ( "Чтобы узнать объем паралеллипипеда - Введите высоту, в см" );
    let result = sOsn * h;
    return result;
    }
    function sPP() {
            let sParosn = prompt ( "Чтобы узнать площадь прямоугольного паралеллипипеда - Sосн, в см" );
            let sOParbok = prompt ( "Чтобы узнать площадь прямоугольного паралеллипипеда - Sбок, в см" ); 
            let result = 2*sParosn + sOParbok;
            return result;
        }
        alert("Объем паралеллипипеда =" + parall() + "площадь паралеллипипеда = " + sPP());
    }
   
    


else if(a == 3) {
    function vPR() {
    let aPR = prompt ( "Чтобы узнать объем прямоугольного паралеллипипеда - Введите размер стороны, в см" );
    let bPR = prompt ( "Чтобы узнать объем прямоугольного паралеллипипеда - Введите размер стороны, в см" );
    let cPR = prompt ( "Чтобы узнать объем прямоугольного паралеллипипеда - Введите размер стороны, в см" );
    let result = aPR * bPR * cPR;
    return result;
    }
    function sPP() {
        let m = prompt ( "Чтобы узнать площадь паралеллипипеда - Введите сторону, в см" );
        let f = prompt ( "Чтобы узнать площадь паралеллипипеда - Введите сторону, в см" );
        let l = prompt ( "Чтобы узнать площадь паралеллипипеда - Введите сторону, в см" );
        let result = 2*m*f+2*m*l+2*f*l 
        return result;
    }

 alert("Объем прямоугольного параллелипипеда =" + vPR() + " Площадьпрямоугольного паралеллипипеда" + sPP());
}

else if (a == 4) {
     function vPrizm() {
        let sPrizm = prompt ( "Чтобы узнать объем призмы - Введите площадь основания, в см" );
        let hprizm = prompt ( "Чтобы узнать объем призмы  - Введите высоту, в см" );
        let result = sPrizm * hprizm;
        return result;
     }
     function PrismO() {
            let sPRism = prompt ( "Чтобы узнать площадь призмы - Sосн, в см" );
            let sprisma = prompt ( "Чтобы узнать призмы - Sбок, в см" ); 
            let result = 2*sPRism + sprisma;
            return result;
     }
     alert("Объем призмы =" + vPrizm() + "площадь призмы = " + PrismO());
}
else if(a = 5) {
    function vPiram() {
        let sPiram = prompt ( "Чтобы узнать объем пирамиды - Введите площадь основания, в см" );
        let hPiram = prompt ( "Чтобы узнать объем пирамиды - Введите высоту, в см" );
        let result = 1/3 * sPiram * hPiram;
        return result;
    }
    function sPiramidy() {
        let PPiram = prompt ( "Чтобы узнать площадь пирамиды - Введите площадь основания, в см" );
        let pHPiram = prompt ( "Чтобы узнать площадь пирамиды - Введите высоту, в см" );
        let result = PPiram+pHPiram;
        return result;
    }
    alert("Объем пирамиды =" + vPiram() + " площадь пирамиды" + sPiramidy());
}


