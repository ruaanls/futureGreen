import Image from "next/image";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import richardybs from  "@/../public/richardybs.jpg";
import ruanjs from  "@/../public/ruanjs.jpg";
import izzi from  "@/../public/izzi.jpg";

export default function Integrantes() {
    return (
        <main>
            <section className="sectionIntegrante">
                <h1>Turma 1TDSPW</h1>
                <div className="containerIntegrante">
                <div className="integranteBox">
                    <Image src={richardybs} className="imgSocial" alt="imagem do integrante Richardy"/>
                    <div className="infoIntegrant">
                    <h2>Richardy Borges</h2>
                    <h2>rm - 557883</h2>
                    <div className="Socials">
                        <Link href={"https://github.com/richardybs"} target="_blank"><VscGithub/></Link>
                        <Link href={"https://linkedin.com/in/richardybs"} target="_blank"><FaLinkedin/></Link>
                    </div>
                    </div>
                </div>
                
                <div className="integranteBox">
                    <Image src={ruanjs} className="imgSocial" alt="imagem do integrante Richardy"/>
                    <div className="infoIntegrant">
                    <h2>Ruan Lima Silva</h2>
                    <h2>rm - 558775</h2>
                    <div className="Socials">
                        <Link href={"https://github.com/ruaanls"} target="_blank"><VscGithub/></Link>
                        <Link href={"https://www.linkedin.com/in/ruanls/"} target="_blank"><FaLinkedin/></Link>
                    </div>
                    </div>
                </div>
                
                <div className="integranteBox">
                    <Image src={izzi} className="imgSocial" alt="imagem do integrante Richardy"/>
                    <div className="infoIntegrant">
                    <h2>Henrique Izzi</h2> 
                    <h2>rm - 555413</h2>
                    <div className="Socials">
                        <Link href={"https://github.com/rickizzisj"} target="_blank"><VscGithub/></Link>
                        <Link href={"https://www.linkedin.com/in/henrique-izzi-1a286a259/"} target="_blank"><FaLinkedin/></Link>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
    );
}