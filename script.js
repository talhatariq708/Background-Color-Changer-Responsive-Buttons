function changeBG (color){
    document.body.style.backgroundColor = color;
    let text = document.getElementsByClassName ("txt");
    if (color == 'black'){
        for (let elm of text){
            elm.style.color = 'white'
        };
    } else {
        for (let elm of text){
            elm.style.color = 'black'
        };
    };

};