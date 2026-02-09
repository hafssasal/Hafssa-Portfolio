import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer(){
return(
<footer className="text-center py-12 text-white">

<div className="flex justify-center gap-6 text-2xl">

<a href="mailto:hafssasalmi54@gmail.com"><FaEnvelope/></a>
<a href="https://github.com/hafssasal"><FaGithub/></a>
<a href="https://www.linkedin.com/in/hafssa-salmi-profil/"><FaLinkedin/></a>

</div>

<p className="mt-6">
© {new Date().getFullYear()} Hafssa Salmi
</p>

</footer>
)
}
