import { FaJava, FaReact, FaAngular, FaDocker, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiSpringboot, SiFlutter, SiPostgresql, SiMysql, SiTypescript, SiJavascript, SiC, SiCplusplus } from "react-icons/si";

export default function Skills(){

const skills=[
{ name:"Java", icon:<FaJava size={40}/> },
{ name:"C", icon:<SiC size={40}/> },
{ name:"C++", icon:<SiCplusplus size={40}/> },
{ name:"JavaScript", icon:<SiJavascript size={40}/> },
{ name:"TypeScript", icon:<SiTypescript size={40}/> },

{ name:"React", icon:<FaReact size={40}/> },
{ name:"Angular", icon:<FaAngular size={40}/> },
{ name:"Spring Boot", icon:<SiSpringboot size={40}/> },
{ name:"Flutter", icon:<SiFlutter size={40}/> },

{ name:"MySQL", icon:<SiMysql size={40}/> },
{ name:"PostgreSQL", icon:<SiPostgresql size={40}/> },
{ name:"Docker", icon:<FaDocker size={40}/> },
{ name:"Git", icon:<FaGitAlt size={40}/> },
{ name:"Linux", icon:<FaLinux size={40}/> },
];

return(
<section id="skills" className="px-[12%] py-24 text-white text-center">

<h2 className="text-5xl mb-16">Compétences techniques</h2>

<div className="grid md:grid-cols-5 grid-cols-2 gap-8">
{skills.map(s=>(
<div key={s.name}
className="bg-white/10 backdrop-blur-lg border rounded-2xl py-8 flex flex-col items-center gap-4 hover:scale-110 transition duration-300">

{s.icon}
<p>{s.name}</p>

</div>
))}
</div>

</section>
)
}
