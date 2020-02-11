 const DataText = (state) => [
        {
              id: 1,  
              sentence: `Betreft: Wob-verzoek inzake {onderwerp}`
            },
            {
              id: 2,  
              sentence: "Zeer geachte heer/mevrouw <naam van hoogste bestuurder>,"
            },
            {
              id: 3,  
              sentence: `Met een beroep op de Wet openbaarheid van bestuur (hierna: Wob) verzoek ik, ${state.userName}, journalist, u namens <naam medium> om openbaarmaking van of inzage in hieronder nader te specificeren documenten of informatie bij of onder u over <onderwerp>.`
          }, 
          {
              id: 4,  
              sentence: "In de afhandeling van dit verzoek vraag ik u rekening te houden met het publieke belang van de journalistiek als controleur van een goede en democratische bestuursvoering."
          },      
          {
              id: 5,  
              sentence: "Concreet vraag ik u om:"
            },
            {
              id: 6,  
              sentence: "1. <titel document 1> OF <omschrijving> EN/OF, <datum>, alsmede: alle <voorbereidende stukken en concepten met betrekking tot dit document>; <interne correspondentie (incl./excl. brieven, e-mails, memo’s en gespreksnotities, smsjes en WhatsAppjes) met betrekking tot dit document>; <externe correspondentie (incl./excl. E-mails, memo’s en gespreksnotities, smsjes en WhatsAppjes) met betrekking tot dit document tussen <bestuursorgaan> en derden, waaronder in ieder geval de navolgende partijen (personen, organisaties):> i. <partij 1> ii. <partij 2> iii. <partij enz>"
            },
            {
              id: 7,  
              sentence: "2. <titel document 2> opgesteld op <datum>, alsmede (enz"
            },
            {
              id: 8,  
              sentence: "3. <titel document 3> (enz)"
            },
            {
              id: "9",  
              sentence: "Een overzicht van <eenheid waar de dataset over gaat> in de periode <jaartal>. Een overzicht zou minstens de volgende velden moeten bevatten: o <datum> o <locatie> o <gemeten snelheid> o <enzovoorts> Indien zo’n overzicht niet bestaat dan zou ik graag kopieën willen ontvangen van brondocumenten zodat ik zelf een overzicht kan maken."
            },
            {
              id: "10",  
              sentence: "Alsmede: Alle bij of onder u rustende documenten inzake <onderwerp> over de periode <jaar> OF <jaar-jaar> OF <datum-datum> EN over de periode <blabla>, waaronder: "
            },
            {
              id: "11",  
              sentence: "<Vergaderstukken, waaronder: uitnodigingen, agenda’s, presentielijsten, ingekomen stukken, adviezen, besluiten, besluitenlijsten en notulen>; <Gespreksverslagen>; <Rapporten, waaronder: project- en programmaplannen; adviezen, zowel extern als intern; onderzoeksrapporten en auditrapportages; voortgangsrapportages; evaluaties>; <Presentaties>; <Begrotingen, jaarverslagen en andere financiële documentatie>; <Dataset> <Alle interne correspondentie (incl./excl. brieven, e-mails, memo’s en gespreksnotities, smsjes en WhatsAppjes) met betrekking tot <onderwerp>>; <Alle correspondentie (e-mails, brieven, memo’s, nota’s, notities en anderszins schriftelijk gewisselde stukken) met derden met betrekking tot <onderwerp> tussen <bestuursorgaan> en in ieder geval de navolgende partijen (organisaties, personen)>: "
            },
            {
              id: "12",  
              sentence: "<partij 1><partij 2><partij enz. > "
            },
            {
              id: "13",  
              sentence: "Mocht u beschikken over andere documenten die – aanvullend of in plaats van gevraagde documenten - inzicht in deze bestuurlijke aangelegenheid te kunnen geven, dan verzoek ik u die documenten ook te verstrekken. "
            },
            {
              id: "14",  
              sentence: "Subsidiair verzoek ik om een geanonimiseerde versie van alle documenten gevraagd onder bovengenoemde punten."
            },
            {
              id: "15",  
              sentence: "Mocht u menen documenten of correspondentie zoals bedoeld in dit verzoek te moeten weigeren, dan vraag ik subsidiair om een zakelijke weergave van de inhoud of een samenvatting. Indien u van oordeel bent dat persoonlijke beleidsopvattingen in documenten bestemd voor intern beraad integrale openbaarmaking van de documenten in de weg staan, verzoek ik subsidiair om openbaarmaking van de informatie voor zover die geen persoonlijke beleidsopvatting is, en meer subsidiair om een samenvatting van de informatie."
            },
            {
              id: "16",  
              sentence: "Met documenten bedoel ik vastlegging ongeacht de gegevensdrager: dus naast klassieke papieren documenten bijvoorbeeld ook digitale (data-)bestanden, sms'jes, WhatsApp-berichten en audio- en videobestanden."
            },
            {
              id: "17",  
              sentence: "Ik verzoek u de gevraagde informatie die digitaal bij u aanwezig is in digitale vorm te verstrekken. Van de informatie die alleen analoog (‘hard copy’) in uw archief aanwezig is, ontvang ik graag een kopie. Indien u voornemens bent om hiervoor kopieerkosten in rekening te brengen, verzoek ik u vooraf hierover contact met mij op te nemen."
            },
            {
              id: "18",  
              sentence: "Ik begrijp dat mijn verzoek omvangrijk is. Wellicht kunnen we in goed onderling overleg een selectie maken van documenten die ik daadwerkelijk wens in te zien, en andere documenten die wel onder de reikwijdte van dit verzoek vallen maar die, wat mij betreft, niet verstrekt hoeven te worden. Om die reden stel ik voor dat u een index of overzicht maakt van de gevraagde documenten, zonder nog te beslissen over openbaarmaking van die documenten. Met deze handreiking hoop ik u onnodig werk te besparen."
            }, 
            {
              id: "19",  
              sentence: "Dit verzoek wordt gedaan op basis van de Wet openbaarheid van bestuur. Daaruit vloeit voort dat u binnen 4 weken een besluit moet nemen op dit verzoek. "
            },
            {
              id: "20",  
              sentence: "Daar waar documenten zich niet onder u bevinden en/of u er mee bekend bent dat tevens bij één of meer andere bestuursorganen informatie berust met betrekking tot dit onderwerp, verzoek ik u zonder oprekken van termijnen doorgeleiding van dit verzoek naar het juiste orgaan. Mocht dat inderdaad gebeuren, dan ontvang ik daarover graag bericht."
            },   
            {
              id: "21",  
              sentence: "Bij gehele of gedeeltelijke weigering van een document verzoek ik u de weigering per document respectievelijk per alinea te motiveren. Niet alleen met verwijzing naar het betreffende Wob-artikel, maar tevens met onderbouwing waarom die weigeringsgrond zwaarder weegt dan het algemeen belang van openbaarheid."
            },                      
            {
              id: "22",  
              sentence: "Mocht u vragen hebben over de precieze interpretatie of de gewenste afhandeling van dit verzoek, dan ben ik graag bereid een nadere toelichting te geven. Ik verzoek u hierover binnen twee weken na ontvangst van mijn Wob-verzoek contact op te nemen."
            },   
            {
              id: "23",  
              sentence: "Ik verzoek u de ontvangst van dit verzoek schriftelijk per email of brief aan mij te bevestigen."
            },   
            {
              id: "24",  
              sentence: "Met vriendelijke groet, <handtekening afzender> "
            },   
            {
              id: "25",  
              sentence: "<Naam> <Organisatie> <Adres organisatie> <E-mailadres> <Telefoonnummer>"
            }     
          ]
          export default DataText