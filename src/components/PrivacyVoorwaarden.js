import React from "react"
import Homepage_Overgenerator from "./Homepage_Overgenerator"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function PrivacyVoorwaarden() {
    return (
        <div className="sectionWaarom">
        	
        	<div className="sectionBlock">
				<div>
					<h1>Privacy beleid</h1>
                    <p>Privacy is er belangrijk voor ons. Daarom hebben we deze pagina opgesteld om duidelijk te maken wat we met je gegevens doen.</p>
					<Link to="/" >Ga terug</Link>
					<Link to="/Stap1">Start een Wob-verzoek</Link>
                    <div class="textLongConditions">
                    <p>Dit is de Privacy Policy van Vereniging van Onderzoeksjournalisten (hierna te noemen “VVOJ”, "wij," "ons" of "onze"), een onderneming met adres De Lairessestraat 125, Amsterdam. VVOJ is ingeschreven bij de Kamer van Koophandel onder nummer 34171208. Deze Privacy Policy legt uit hoe wij gegevens verzamelen, gebruiken, delen en beschermen in relatie tot onze website wobgenerator.nl (de “Website”). Wij verzamelen deze gegevens wanneer u onze Website bezoekt met uw computer, tablet of mobiele telefoon (“Computer”). Wij verwerken persoonsgegevens op een manier die in overeenstemming is met de Algemene Verordening Gegevensbescherming (de “AVG”), de op de AVG gebaseerde uitvoeringswetgeving en de andere op dit moment geldende privacywetgeving. </p>
                    <p>Onze Privacy Policy is van toepassing op alle bezoekers, gebruikers en alle anderen die de toegang hebben tot de Website ("Gebruikers"). Door het gebruiken van onze Website, begrijpt u en gaat u akkoord dat VVOJ een platform biedt voor het plaatsen van inhoud, inclusief foto’s, reacties en andere materialen (“Gebruikers Inhoud”). Dit betekent dat andere Gebruikers kunnen zoeken naar uw openbare Gebruikers Inhoud en dat zij deze kunnen bekijken, gebruiken of delen.</p>
                    <h2>Wat voor gegevens verzamelen wij?</h2>
                    <p>Wij verzamelen de volgende gegevens die u ons verstrekt:<br />
                    E-mailadres<br />
                    Naam <br />
                    Telefoonnummer <br />
                    Adres <br />
                    Communicatie tussen VVOJ en u (wij mogen u dienst-gerelateerde e-mails sturen)<br /></p>
                    <h2>Log file informatie</h2>
                    <p>Wij verzamelen alleen informatie die uw browser stuurt als u onze Website bezoekt wanneer dit noodzakelijk is voor het goed functioneren van de Website. Onder het goed functioneren van de Website verstaan wij met name het beschermen van de Website tegen handelingen die de veiligheid van de Website en van uw Computer in gevaar kunnen brengen. Dit logbestand kan informatie bevatten zoals uw IP-adres, browser-type, browser-versie, de pagina’s van onze Website die u bezoekt, de tijd en datum van uw bezoek, de tijd die u besteedt op deze pagina’s en andere statistieken. </p>
                    <h2>Metadata</h2>
                    <p>Metadata zijn meestal technische gegevens die worden geassocieerd met Gebruikers Inhoud. Zo kan metadata beschrijven hoe, wanneer en door wie een deel van de Gebruikers Inhoud werd verzameld en hoe deze Inhoud is geformatteerd. Gebruikers kunnen metadata toevoegen aan hun Gebruikers Inhoud door een hashtag (trefwoorden markeren als u een foto plaatst), geotag (locatie op een foto markeren), reacties of andere gegevens toe te voegen. Dit maakt Gebruikers Inhoud makkelijker doorzoekbaar voor anderen en interactiever. </p>
                    <h2>Analytische diensten</h2>
                    <p>Wij maken gebruik van analytische diensten van derden. Deze helpen ons om ons verkeer en trends van de Website te meten. De tools verzamelen informatie die verzonden zijn door uw Computer, onze Website, de webpagina’s die uw bezoekt, add-ons en door andere informatie die ons helpen bij het verbeteren van onze Website. Deze tools gebruiken ‘cookies’. Dit zijn eenvoudige tekstbestanden die worden opgeslagen op uw harde schijf of in het geheugen van uw Computer. Cookies kunnen uw Computer of de bestanden die op uw Computer staan niet beschadigen. Cookies verzamelen anoniem informatie over uw log-informatie en log-gedrag. Wij gebruiken deze informatie met informatie van andere Gebruikers. Hierdoor is het voor ons niet mogelijk om u als individu te kunnen identificeren. Wij gebruiken voor onze analytische diensten Google Analytics. Google Analytics installeert een permanent cookie in uw webbrowser om u te identificeren. Hierdoor worden uw gegevens gedeeld met Google. Wij delen alleen gegevens met Google die wij op basis van de AVG mogen delen met Google. U kunt volledig voorkomen dat Google Analytics u herkent, door de cookies uit te schakelen in uw browser.</p>
                    <h2>Hoe gebruiken wij deze informatie?</h2>
                    <p>Alle informatie die wij verzamelen gebruiken wij om onze Website te ondersteunen en verbeteren door: <br/>
                    Statistieken te bekijken, zoals het aantal bezoekers en het verkeer naar de Website; <br />
                    Technische problemen te verhelpen of te diagnosticeren.<br />
                    Nieuwe producten te testen en te ontwikkelen; <br />
                    Hoe wordt deze informatie gedeeld? <br /><br />
                    Wij zullen uw (persoons)gegevens niet verhuren of verkopen aan derden. <br /></p>
                    <h2>Partijen waarmee u Gebruikers Inhoud kunt delen</h2>
                    <p>Informatie of inhoud die u vrijwillig openbaar maakt via onze Website, zoals Gebruikers Inhoud, wordt beschikbaar voor het publiek. Wanneer u eenmaal Gebruikers Inhoud heeft geplaatst, kan de Gebruikers Inhoud worden gedeeld door anderen. Alle Gebruikers Inhoud die u openbaar maakt is doorzoekbaar door andere Gebruikers, uw profiel onder voorbehoud. Wanneer u informatie verwijdert die u openbaar heeft gemaakt via de Website, dan kunnen kopieën zichtbaar blijven in het cachegeheugen, of in archiefpagina’s van de Website. Wanneer andere Gebruikers of derden deze inhoud hebben gekopieerd of opgeslagen, zullen deze ook beschikbaar blijven. </p>
                    <h2>Zeggenschapswijziging</h2>
                    <p>Wanneer VVOJ, of een deel daarvan, wordt verkocht, overgedragen of een onze activa bij een andere organisatie terecht komt (bijvoorbeeld als gevolg van een fusie, overname, faillissement, ontbinding of liquidatie), dan kunnen gegevens die via de Website zijn verzameld onder de verkochte of overgedragen zaken vallen. De koper of verkrijger zal de afspraken in deze Privacy Policy moeten opvolgen.</p>
                    <h2>Wettelijk verzoek en voorkoming schade</h2>
                    <p>Op grond van een wettelijk verzoek zijn wij gerechtigd om toegang te krijgen tot uw informatie en dit te bewaren en/of te delen in antwoord op een wettelijk verzoek (zoals een huiszoekingsbevel, gerechtelijk bevel of een dagvaarding). Wij zijn ook gerechtigd om uw informatie te bewaren en/of te delen wanneer wij geloven dat dit noodzakelijk is voor het opsporen, voorkomen en aankaarten van fraude of andere illegale activiteiten en om ons, u en anderen te beschermen. Informatie die wij ontvangen over u kan worden geopend, bewerkt en bewaard voor een langere periode wanneer dit noodzakelijk is vanwege een juridisch verzoek of verplichting, een onderzoek met betrekking tot onze voorwaarden, beleid of om anderszins schade te voorkomen.</p>
                    <p>VVOJ heeft passende technische en organisatorische maatregelen genomen om uw gegevens te beveiligen tegen verlies of tegen enige vorm van onrechtmatige verwerking. Wij gebruiken veiligheidsmaatregelen om te zorgen dat informatie via de Website wordt beveiligd. Echter, VVOJ kan niet verzekeren dat de informatie op de Website niet wordt geopend, onthuld, veranderd of vernietigd. U bent te allen tijde verantwoordelijk voor het beheren van de e-mails tussen u en VVOJ. Wij zij niet verantwoordelijk voor de functionaliteit, privacy of veiligheidsmaatregelen van enige andere organisatie. </p>
                    <h2>Internationale overdraging</h2>
                    <p>Uw informatie kan worden overgedragen en onderhouden op computers en/of servers die zich buiten Nederland en/of de EU bevinden en waar de wetten omtrent gegevensbescherming kunnen verschillen. Wij spannen ons in om ervoor te zorgen dat ook wanneer uw persoonsgegevens buiten de EU worden verwerkt, zij op een juridisch juiste en zorgvuldige wijze buiten de EU worden verwerkt.</p>
                    <h2>Bewaartermijn</h2>
                    <p>In overeenstemming met de AVG en de overige relevante wetgeving, bewaart VVOJ persoonsgegevens niet langer dan noodzakelijk is voor de verwezenlijking van de doeleinden waarvoor zij verzameld of verwerkt worden. Indien u meer informatie wil over hoe lang uw specifieke persoonsgegevens bewaard blijven, kunt u contact opnemen met notdefined@example.com.</p>
                    <p>Recht op inzage, correcties, recht op bezwaar en recht op dataportabiliteit</p>
                    <p>Wanneer u inzage wil in uw persoonsgegevens, als u uw gegevens wilt wijzigingen of verwijderen of als u uw persoonsgegevens geheel of gedeeltelijk wilt laten overdragen aan u of aan een derde dan kunt u contact opnemen met VVOJ door een e-mail te sturen naar wobvvoj@gmail.com of een brief sturen aan:</p>
                    <p>Vereniging van Onderzoeksjournalisten<br />
                    De Lairessestraat 125<br />
                    1075HH, Amsterdam <br /></p>
                    <h2>Applicaties, websites en diensten van derden</h2>
                    <p>Wij zijn niet verantwoordelijk voor de praktijken van applicaties, websites of diensten van derden die gelinkt zijn naar of van onze Website, waaronder de informatie of inhoud die bijgaand is. Onze Privacy Policy is niet van toepassing wanneer u een link gebruikt om van onze Website naar een andere applicatie, website of dienst te gaan. Uw gedragingen op een applicatie, website of dienst van een derde, waaronder de partijen die een link hebben op onze website, zijn onderworpen aan hun eigen regels en beleid. U gaat akkoord dat wij niet verantwoordelijk zijn voor derden die u toegang heeft gegeven tot uw Gebruikers Inhoud. Wanneer u gebruik maakt van een applicatie, website of diensten van derden, en u deze derden toegang geeft tot uw Gebruikers Inhoud, is dit voor eigen risico.</p>
                    <h2>Privacy van kinderen</h2>
                    <p>Onze website vraagt niet specifiek en bewust om gegevens van personen jonger dan 16 jaar (“Kinderen”). Indien wij erachter komen dat wij persoonlijke gegevens hebben verzameld van Kinderen zonder toestemming van hun ouder of voogd, dan zullen wij stappen ondernemen om deze gegevens te verwijderen van onze servers. Als u vermoedens heeft dat uw kind zonder uw toestemming persoonsgegevens heeft verstrekt aan ons, dan kunt u contact met ons opnemen via notdefined@example.com. Indien u als kind persoonsgegevens achter hebt gelaten op onze site en u deze wil verwijderen, dan zullen wij ons inspannen om deze gegevens te verwijderen. Als u het vermoeden heeft dat u als kind persoonsgegevens aan ons heeft verstrekt, kunt u contact met ons opnemen via wobvvoj@gmail.com.</p>
                    <h2>Wijzigingen</h2>
                    <p>VVOJ kan van tijd tot tijd deze Privacy Policy aanpassen of updaten. U wordt daarom geadviseerd om deze Privacy Policy regelmatig te raadplegen. Aanpassingen van deze Privacy Policy treden in werking op het moment dat deze zijn gepubliceerd op deze pagina. </p>
                    <h2>Contact</h2>
                    <p>Wanneer u vragen heeft over deze Privacy Policy, dan kunt u contact opnemen met VVOJ door een e-mail te sturen naar wobvvoj@gmail.com.</p>
                    </div>

				</div> 
				
			</div>
            <Homepage_Overgenerator />
		</div>
    )
}
export default PrivacyVoorwaarden