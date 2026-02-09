export default function Contact(){
return(
<section id="contact"
className="px-[12%] py-28 text-center text-white bg-gradient-to-r from-purple-800 to-fuchsia-700">

<h2 className="text-5xl mb-6 font-bold">Contact</h2>

<p className="text-lg mb-10">
Disponible pour stage en développement logiciel ou ingénierie systèmes, je suis ouverte à toute opportunité de collaboration. N’hésitez pas à me contacter pour discuter de projets, opportunités professionnelles ou simplement échanger sur les technologies et l’ingénierie logicielle.
</p>

<div className="flex justify-center gap-6 flex-wrap">

<a href="mailto:hafssasalmi54@gmail.com"
className="px-12 py-4 bg-white text-purple-700 font-semibold rounded-full hover:scale-110 transition shadow-xl">
Envoyer un email
</a>

<a href="https://www.linkedin.com/in/hafssa-salmi-profil/"
className="px-12 py-4 border border-white rounded-full hover:bg-white hover:text-purple-700 transition">
LinkedIn
</a>

<a href="https://github.com/hafssasal/"
className="px-12 py-4 border border-white rounded-full hover:bg-white hover:text-purple-700 transition">
GitHub
</a>

</div>

</section>
)
}
