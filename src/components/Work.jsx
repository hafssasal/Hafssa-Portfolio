export default function Work() {

    const work = [
        {
            name: 'Plateforme E-Doctorat',
            description: 'Gestion des candidatures doctorales et automatisation du workflow académique'
        },
        {
            name: 'Système de supervision réseau',
            description: 'Monitoring des machines via SNMP avec alertes et statistiques graphiques'
        },
        {
            name: 'Application de gestion de stock – CHU Hassan II',
            description: 'Application web de gestion du matériel hospitalier'
        },
        {
            name: 'Site web assurances – AtlantaSanad',
            description: 'Paiement en ligne, gestion utilisateurs et réclamations'
        }
    ];

    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">

            <h2 className="text-center text-5xl font-Ovo">Mes projets</h2>

            <div className="grid grid-cols-auto my-10 gap-5">
                {work.map((work) => (
                    <div key={work.name} className="border rounded-lg p-6">
                        <h2 className="font-semibold">{work.name}</h2>
                        <p className="text-sm">{work.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
