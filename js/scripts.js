function funcao(){
        a=parseFloat(document.getElementById('a').value);
        b=parseFloat(document.getElementById('b').value);
        c=document.getElementById('c').value;
        del=document.getElementById('del').value;
        
        //Delta
        
        delA='-Sua função tem duas raizes reais.';
        delB='-Sua função não tem raizes reais (elas pertencem ao conjunto dos números complexos ).';
        delC='-Sua função só tem uma raiz real.';
        
        if(del>0){
          document.getElementById('resultado').innerHTML=delA;
        }else if(del<0){
          document.getElementById('resultado').innerHTML=delB;
        }else if(del==0){
          document.getElementById('resultado').innerHTML=delC;
        }
          //Mostrando raizes.
      x1= ((-b+Math.sqrt(del))/(2*a));
      x2= ((-b-Math.sqrt(del))/(2*a));
 
      x1Res='O conjunto solução dessa função é S{'+x1+' , '+x2+' }.';
 
      x2Res='O conjunto solução dessa função é S{'+x2+' , '+x1+' }.';

    if(x1>x2){
        document.getElementById('resultado2').innerHTML=x1Res;
    }else{
        document.getElementById('resultado2').innerHTML=x2Res;
    }
          //Vértices
    xv= -(b)/(2*a);
    yv= -(del)/(4*a);
        //xv
      document.getElementById('resxv').innerHTML=xv;
      
      document.getElementById('resyv').innerHTML=yv;
      }