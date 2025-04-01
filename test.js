function randomText() {
    const characters = [
        'm╒┴yò1╒╒▌(^mm_↔☼▌▓┼╒┴yò1╒╒▌', 
        '╒┴yò1╒╒▌(^m$█╒⌂~▌t#_1⌘╒┴yò',
        '╒╒▌(^mm╒┴yò1⌂†≈μ▓╒╒▌_π', 
        't^m╒┴yò1~╒▌⌂(^m∀¶∆╒▓┴≡yò', 
        '╒╒▌⌂m╒┴yò1╒▌(^_Λ◄█tζ', 
        '▓t⌂╒┴yò1╒▌m╒┴^λ⌘╒┼_♪', 
        '♬_╒╒▌m╒┴yò1~(^λµ(⊂)▓_▒', 
        'x▓▒┼╒┴yò_╒▌╒╒↔Λ▓µ▌t', 
        '╒┴y╒┴m╒▌t⌂[^^]m1θ⌘_╒',
        'π⌐╒▌≡yò1╒┴m⊂∩#≈⌘μ▓₧', 
        '▌▓▒⌂▌(^t╒┴yò⌂1⊕╒π▓_⌂', 
        '╒⌐yò1╒┴z▓╒▌⌂^^m→°╒▌m', 
        'm⌐╒▌1╒┴yò⌂~■▌(^⌘⌂▒s'
    ];

    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

setTimeout(function() {
    const element = document.getElementById("return");
    let counter = 0;
    
    const interval = setInterval(function() {
        element.innerText = randomText();
        counter++;
        
        if (counter >= 50) { // Let it continue for a little longer
            clearInterval(interval);
            element.innerText = ""; // final text
        }
    }, 100);
}, 500);