export default function Projects(){

const base = import.meta.env.BASE_URL;

const projects=[

{
name:"Supervision réseau SNMP – PFE",
description:"Conception et mise en place d’une solution complète de supervision réseau permettant la surveillance en temps réel des serveurs Linux et Windows. Le système intègre la collecte des données via SNMP, l’analyse des performances, la génération de graphiques statistiques et l’envoi automatique d’alertes en cas d’anomalie.",
skills:"Nagios XI, Cacti, SNMP, MIB Browser, Linux, Windows Server, VirtualBox",
images:[
`${base}assets/NAGIOSXI1.png`,
`${base}assets/NAGIOSXI2.png`,
`${base}assets/CACTI1.png`,
`${base}assets/CACTI2.png`
]
},

{
name:"Plateforme E-Doctorat",
description:"Développement d’une plateforme web dédiée à la gestion des candidatures doctorales intégrant les fonctionnalités de dépôt de dossiers, validation académique, gestion des commissions et suivi administratif complet des candidats.",
skills:"Spring Boot, MySQL, React, TanStack Query, Design Patterns, Maven, Vite",
images:[
`${base}assets/EDOCTORAT1.png`,
`${base}assets/EDOCTORAT2.png`,
`${base}assets/EDOCTORAT3.png`,
`${base}assets/EDOCTORAT4.png`
]
},

{
name:"Application gestion de stock – CHU Hassan II",
description:"Réalisation d’une application web de gestion des équipements hospitaliers permettant la consultation, l’ajout, la modification et la traçabilité des ressources afin d’améliorer l’efficacité de la gestion interne du centre hospitalier.",
skills:"Angular, Spring Boot, MySQL, Maven, REST API",
images:[
`${base}assets/CHU1.png`,
`${base}assets/CHU2.png`,
`${base}assets/CHU3.png`,
`${base}assets/CHU4.png`
]
},

{
name:"Application Mobile Flutter",
description:"Développement d’une application mobile multiplateforme permettant la gestion des utilisateurs, la synchronisation des données avec une API REST et la mise en place d’une interface moderne responsive adaptée aux besoins fonctionnels de l’utilisateur.",
skills:"Flutter, Ktor, Gradle, GitHub, Render Cloud",
images:[
`${base}assets/appflutter.png`
]
}

]

return(
<section id="projects" className="px-[12%] py-24 text-white">

<h2 className="text-center text-5xl mb-20">Projets réalisés</h2>

<div className="space-y-28">

{projects.map(p=>(
<div key={p.name} className="grid md:grid-cols-2 gap-12 items-center">

<div>
<h3 className="text-3xl font-semibold">{p.name}</h3>
<p className="mt-6 leading-8">{p.description}</p>

<p className="mt-6 text-purple-200">
<b>Technologies :</b> {p.skills}
</p>
</div>

<div className="grid grid-cols-2 gap-4">
{p.images.map((img,i)=>(
<img key={i}
src={img}
className="h-52 w-full object-contain bg-white/10 rounded-2xl p-3 shadow-lg"
/>
))}
</div>

</div>
))}

</div>

</section>
)
}
