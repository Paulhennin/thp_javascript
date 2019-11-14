/*

    Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
    Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
    Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
    Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
    Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;

*/

str = prompt("Essaie de poser une question à ton Ado.")

//Ta phrase fini par un "?"
console.log(str.length)
if (str[str.length - 1] == "?"){
console.log("Ouais, ouais....")
}

//Tu as tout mis en capslock
else if (str === str.toUpperCase() && str !== ""){
console.log("Pwah ! Calme-toi....")
}

//Tu as mis Fortnite dans ta phrase !
else if (str.includes("Fortnite") || str.includes("fortnite")){
  console.log("On s' fait une partie soum-soum ?")
}
//Tu as mis un champs vide
else if (str === "") {
  console.log("Hé ? T'es en PLS ?")
}
// Tu as écris n'importe quoi d'autre que ça .
else
  console.log("Balek.")
