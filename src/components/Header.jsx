export default function Header(){

    const base = import.meta.env.BASE_URL;

    return(
        <section id="top"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-800 text-white">

        <img src={`${base}assets/hafssa.png`}
        className="w-40 rounded-full border-4 border-white shadow-lg"/>

        <h1 className="text-5xl mt-6 font-bold">Hafssa Salmi</h1>

        <p className="mt-4 text-lg max-w-xl">
        Étudiante en Génie Logiciel spécialisée en développement Full-Stack,
DevOps et supervision des systèmes réseaux.
Je conçois des applications web, mobiles et solutions de monitoring
performantes basées sur des technologies modernes.
        </p>

        <div className="flex gap-6 mt-8">
            <a href="#projects"
            className="px-10 py-3 bg-white text-purple-700 rounded-full font-semibold">
            Voir mes projets
            </a>

            <a href={`${base}assets/HAFSSA SALMI.pdf`} download
            className="px-10 py-3 border border-white rounded-full">
            Télécharger CV
            </a>
        </div>

        </section>
    )
}









