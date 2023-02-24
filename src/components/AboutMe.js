import React from "react"
import me1 from "../img/me1.jpg";
import me2 from "../img/me2.jpg";
import me3 from "../img/me3.jpg";
import me4 from "../img/me4.jpg";

export const AboutMeComponent = () => {
    return (
        <main className="main-section">
        <section className="flex-box">
            <figure><img className="flex-item" src={me1} alt="me number one" />
            </figure>
            <figure><img className="flex-item" src={me2} alt="me number two" />    
            </figure>    
            <figure><img className="flex-item" src={me3} alt="me number three" />     
            </figure>    
            <figure><img className="flex-item" src={me4} alt="me number four" />
            </figure>      
        </section>
        <p className="main-text">
        Niklas Sendelbach, jag är 34 år och bor i Sundsvall. 
        Jag tror att personer i min omgivning skulle beskriva mig som glad, inkluderande och engagerad. 
        Jag tycker om att få andra att skratta och må bra!
        <br/><br/>
        Jag bor i ett hus vid Sidsjön strax utanför Sundsvall 
        tillsammans med min fru Frida och våra två barn, Belle och Julian.
        <br/><br/>
        Jag har en rätt stor blandning av intressen, men för många av dom är 
        gemensamma nämnaren att vara utomhus! Jag gillar att fiska, springa, åka skidor eller bara
        gå i skogen och plocka svamp eller bär. Jag har också ett alltid haft ett stort datorintresse,
        så när jag inte orkar vara ute mer så sitter jag gärna framför skärmen och kopplar av.
        </p>
    </main>
            )
}