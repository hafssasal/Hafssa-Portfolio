export default function Services() {

    const services = [
        { name: 'Développement Web', description: 'React, Angular, Spring Boot, REST API' },
        { name: 'Développement Mobile', description: 'Applications Flutter' },
        { name: 'DevOps & Déploiement', description: 'Docker, GitHub, GitLab CI/CD' },
        { name: 'Bases de données', description: 'MySQL, PostgreSQL' }
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">

            <h2 className="text-center text-5xl font-Ovo">Mes services</h2>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border rounded-lg px-8 py-12">
                        <h3 className="text-lg my-4">{service.name}</h3>
                        <p className="text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
