import React from "react"
import Cvbild from "../img/CVbild.jpg";

export const HomeComponent = () => {
    return (
    <div>    
    <main className="main-section">
        <div className="main-content">
        <section className="flex-box">
            <div className="flex-text">
            <h4>Välkommen!</h4>
            <p>
                Hösten 2022 valde jag att ta studieledigt från min nuvarande tjänst för 
                att studera till systemutvecklare. Jag ville göra något nytt och av allt som fanns tillgängligt 
                för mig att göra så var detta det enda som riktigt pirrade till i magen. Det är en tanke som funnits
                en längre tid, så jag tog steget och valde att byta riktning för min karriär! 
                </p>
            </div>
            <img className="big-picture" src={Cvbild} alt="display me" />
        </section>
        </div>
    </main>
    
    </div>
            )
}