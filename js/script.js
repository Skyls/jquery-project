
$(window).on("scroll",function(){
    let positionY = $(this).scrollTop();
    console.log(positionY)

    // On modifie la position et la taille de la navbar directement dans le js
    // En lui disant qu'elle se modifie seulement après avoir dépasser 80px en ordonné

    if(positionY > 80){
        $('#navbar').css({
            'position': 'fixed',
            'top': '0px',
            'width': '100%',
            'height': '5%',
            'align-items': 'center',
            'transition': '0.5s',
          });
    }

    // Et quand on repasse en dessous des 80px j'ai refait une navbar qui se rapproche de la première (car j'ai pas réussi à faire en sorte de revenir directement à celle de base)

    if(positionY < 80){
        $('#navbar').css({
            'position': 'absolute',
            'top': '0px',
            'width': '100%',
            'height': '7.5%',
            'align-items': 'center',
          });
    }


    if(positionY <300 ){
        $("#scrolltop").css("opacity", 0);
    }
    if(positionY >300){
        $("#scrolltop").css("opacity", 1);
    }
})

// lorsque positionY est supérieur à 100
    // réduire height de la nav
    // positionner la nav en fixe en haut de la page