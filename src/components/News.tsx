type NewsCategory = {
  title: string;
  items: {
    title: string;
    desc: string;
    image: string;
  }[];
};

export const News = () => {

  const categories: NewsCategory[] = [
    {
      title: "Politique",
      items: [
        {
          title: "Un Président Décrète la Sieste Obligatoire à 14h",
          desc: "Fini les coups de barre de l’après-midi ! Un décret inédit impose une sieste nationale quotidienne. Les députés, déjà bien rodés à l’exercice, se félicitent de cette avancée.",
          image: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg"
        },
        {
          title: "Nouveau Parti Politique : « La Démission Totale »",
          desc: "Le programme est simple : ne rien faire et tout laisser tomber. Selon le fondateur, 'moins on fait de lois, moins on se trompe'. Étonnamment, le mouvement attire déjà de nombreux adhérents.",
          image: "https://images.pexels.com/photos/8761518/pexels-photo-8761518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "La Corruption Légalisée Pour Plus De Transparence",
          desc: "Un projet de loi propose de rendre la corruption publique et réglementée, avec des reçus et une TVA sur les pots-de-vin. 'Autant assumer', explique le ministre en charge du scandale.",
          image: "https://images.pexels.com/photos/6266302/pexels-photo-6266302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ]
    },
    {
      title: "Société",
      items: [
        {
          title: "Un Homme Bloqué Dans Une File D’Attente Depuis 3 Jours",
          desc: "Venu pour un simple formulaire, Michel, 42 ans, s’est retrouvé pris au piège d’un labyrinthe administratif. Son état est stable, mais il commence à parler à la machine à ticket.",
          image: "https://images.pexels.com/photos/761295/pexels-photo-761295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Une Ville Instaure un Permis de Traverser la Rue",
          desc: "Le maire justifie cette mesure par un besoin urgent de 'discipline piétonne'. Les habitants doivent désormais passer un examen de clignotement des yeux avant d'obtenir leur attestation.",
          image: "https://images.pexels.com/photos/842963/pexels-photo-842963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Un Couple Oublie Où Il a Garé Sa Voiture… Depuis 10 Ans",
          desc: "Après des années de recherche, ils retrouvent leur voiture sur le parking d’un supermarché, ticket de stationnement intact. 'On croyait qu’on l’avait vendue', avoue le mari, penaud.",
          image: "https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ]
    },
    {
      title: "Sport",
      items: [
        {
          title: "Un Cycliste Perd La Course Après Avoir Suivi Son GPS Jusqu’en Mer",
          desc: "Pensant qu’un raccourci était possible, un coureur du Tour de France s’est retrouvé en train de pédaler sur une jetée. 'J’aurais dû mettre le mode vélo…', a-t-il déclaré en sortant de l’eau.",
          image: "https://images.pexels.com/photos/1843752/pexels-photo-1843752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Championnat du Monde de Cache-Cache : Le Gagnant Toujours Introuvable",
          desc: "Le tournoi, débuté en 2017, ne connaît toujours pas de vainqueur. L’organisation envisage de déclarer forfait au champion actuel, mais refuse d’admettre qu’elle a 'totalement perdu sa trace'.",
          image: "https://images.pexels.com/photos/31080156/pexels-photo-31080156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
          title: "Nouvelle Discipline Olympique : Le Sprint en Tongs",
          desc: "L’épreuve consiste à courir sur du bitume brûlant sans perdre ses tongs. Les favoris viennent des plages méditerranéennes, entraînés depuis leur plus jeune âge sur le chemin de la boulangerie.",
          image: "https://images.pexels.com/photos/133325/pexels-photo-133325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      ]
    }
  ];

  return <section className="news">
    <h1>Actualités</h1>

    { categories.map((category, index) => <section className='news-category' key={index}>
      <h2 className="news-category-title">{category.title}</h2>

      <div className="news-items">
        {category.items.map((item, itemIndex) => <article className="news-item" key={itemIndex}>
          <img className="news-item-image" src={item.image} alt="" />
          <h3 className="news-item-title"><a href="#">{item.title}</a></h3>
          <p className="news-item-desc">{item.desc}</p>
          <a href="#" className="news-item-link">Lire l'article</a>
        </article>)}  

      </div>
      <a href="#" className="news-category-link">Voir tous les articles</a>

    </section> )}
  </section>
  
}