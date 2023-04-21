// utilizando Jquery

$(document).ready(function(){
    $('#calc').click(function(){
        let a = $('#a').val();
        let b = $('#b').val();
        let c = $('#c').val();

        let delta = Math.pow(b,2)-(4*a*c);

        //raízes

        let raiz1 = ((-b)+(Math.sqrt(delta)))/(2*a);
        let raiz2 = ((-b)-(Math.sqrt(delta)))/(2*a);

        $('#raiz-1').text(raiz1);
        $('#raiz-2').text(raiz2);

        //vértice

        let xv = (-b)/(2*a);
        let yv = (-delta)/(4*a);

        $('#xv').text(xv);
        $('#yv').text(yv);

        
    })
})