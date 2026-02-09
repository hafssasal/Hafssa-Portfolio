import { motion } from "framer-motion";

export default function About(){
return(
<section id="about"
className="py-28 px-[12%] text-center text-white">

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-5xl mb-12">
À propos de moi
</motion.h2>

<p className="max-w-3xl mx-auto text-lg leading-8">
Étudiante en Bachelor Génie Logiciel à l’EST Fès, passionnée par
l’ingénierie logicielle, l’architecture des systèmes et les technologies
de développement modernes.  
Je possède une solide expérience académique et professionnelle dans
la conception d’applications web et mobiles ainsi que dans la mise en
place de solutions de supervision réseau utilisant SNMP, Nagios et Cacti.  
Je recherche actuellement un stage en développement logiciel ou
ingénierie systèmes afin de contribuer à des projets innovants tout en
renforçant mes compétences techniques et professionnelles.
</p>

<div className="grid md:grid-cols-5 grid-cols-2 gap-6 mt-16">
{["Rigueur","Travail en équipe","Autonomie","Créativité","Capacité d’analyse"].map(s=>(
<div key={s}
className="bg-white/10 backdrop-blur-lg border rounded-2xl px-6 py-5">
{s}
</div>
))}
</div>

</section>
)
}
