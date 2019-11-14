const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

  /*  Est-ce que tous les livres ont été au moins empruntés une fois ?
    Quel est livre le plus emprunté ?
    Quel est le livre le moins emprunté ?
    Trouve le livre avec l'ID: 873495 ;
    Supprime le livre avec l'ID: 133712 ;
    Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
*/
    console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
    var count = 0
    for (let x = 0 ; x < books.length; x++){
      if (books[x].rented < 0)
      console.log("Au moins un des livres n'a jamais été emprunté.")
      else
        count = count +1;
    }
      if (count === books.length)
        console.log("Tous les livres ont été emprunté au moins une fois.")


    console.log("**************************************")
    console.log("**************************************")
    console.log("Quel est livre le plus emprunté ?")
    books.sort(triRent);
    console.log(books.sort(triRent))
    console.log(books[books.length-1].title  + " est le livre le plus emprunté. Avec : " + books[books.length-1].rented + " emprunts.")

    function triRent(a,b)
    {
    	if (a.rented < b.rented) return -1;
    	else if (a.rented == b.rented) return 0;
    	else return 1;
    }

    console.log("**************************************")
    console.log("**************************************")
    console.log("Quel est le livre le moins emprunté ?")
    console.log(books[0].title + " est le livre le moins emprunté. Avec : " + books[0].rented + " emprunts.")

    console.log("**************************************")
    console.log("**************************************")
    console.log("Trouve le livre avec l'ID: 873495 ;?")

    for (let x = 0 ; x < books.length; x++){
      if (books[x].id === 873495){
        console.log("££££££££££££££££££££")
        console.log(books[x].title + " est le livre avec l'ID: 873495.")
        console.log(books[x])
      }
    }


        console.log("**************************************")
        console.log("**************************************")
        console.log("Supprime le livre avec l'ID: 133712 ;")
        for (let x = 0 ; x < books.length; x++){
          if (books[x].id === 133712){
            console.log("££££££££££££££££££££")
            console.log(books[x].title + " est le livre avec l'ID: 133712. Il sera donc supprimé.")
            console.log(books[x])
            delete books[x]
          }
        }
        console.log(books)

        console.log("**************************************")
        console.log("**************************************")
        console.log("Trier les livres par ordre alphabétique sans le tome supprimé :")
        books.sort(tri);
        console.log("Les livres ont été triés par ordre alphabétique :")
        console.log(books.sort(tri))



        function triRent(a,b)
        {
        	if (a.rented < b.rented) return -1;
        	else if (a.rented == b.rented) return 0;
        	else return 1;
        }

        function tri(a,b)
        {
          if (a.title < b.title) return -1;
          else if (a.title == b.title) return 0;
          else return 1;
        }
