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
                <h1>Integrantes do Projeto</h1>
                <div className="containerIntegrante">
                <div className="integranteBox">
                    <Image src={richardybs} className="imgSocial" alt="imagem do integrante Richardy"/>
                    <div className="infoIntegrant">
                    <h2>Richardy Borges</h2>
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
                    <div className="Socials">
                        <Link href={"https://github.com/ruaanls"} target="_blank"><VscGithub/></Link>
                        {/* arruma com base no seu */}
                        <Link href={"https://github.com/ruaanls"} target="_blank"><FaLinkedin/></Link>
                    </div>
                    </div>
                </div>
                
                <div className="integranteBox">
                    <Image src={izzi} className="imgSocial" alt="imagem do integrante Richardy"/>
                    <div className="infoIntegrant">
                    <h2>Henrique Izzi</h2>
                    <div className="Socials">
                        <Link href={"https://github.com/rickizzisj"} target="_blank"><VscGithub/></Link>
                        {/* arruma com base no seu */}
                        <Link href={"https://github.com/rickizzisj"} target="_blank"><FaLinkedin/></Link>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
    );
}