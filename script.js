// ===== QUESTIONS DATABASE =====
        const questionBank = [            
                {
                question: "Quale norma disciplina la sicurezza nei luoghi di lavoro in Italia?",
                options: ["D.Lgs. 81/2008", "Legge 626/94", "D.Lgs. 152/2006", "Legge 300/70"],
                correct: 0,
                suggestion: "Il Testo Unico sulla Sicurezza (D.Lgs. 81/2008) è la normativa di riferimento per la salute e sicurezza sul lavoro."
            },
            {
                question: "Chi è il responsabile del Servizio di Prevenzione e Protezione (RSPP)?",
                options: ["Il datore di lavoro o persona da lui designata", "Il Rappresentante dei Lavoratori", "Il medico competente", "L'ispettore del lavoro"],
                correct: 0,
                suggestion: "Il RSPP può essere il datore di lavoro stesso o una persona da lui designata con adeguata formazione."
            },
            {
                question: "Qual è la principale funzione del DVR?",
                options: ["Valutare tutti i rischi per la salute e sicurezza", "Registrare gli infortuni", "Calcolare le ferie dei dipendenti", "Gestire le buste paga"],
                correct: 0,
                suggestion: "Il Documento di Valutazione dei Rischi (DVR) identifica e valuta tutti i rischi presenti nell'ambiente di lavoro."
            },
            {
                question: "Ogni quanto deve essere aggiornato il DVR?",
                options: ["In caso di modifiche significative o ogni 3 anni", "Ogni anno", "Ogni 5 anni", "Solo alla costituzione dell'azienda"],
                correct: 0,
                suggestion: "Il DVR va aggiornato quando ci sono cambiamenti organizzativi, tecnologici o almeno ogni 3 anni per revisione."
            },
            {
                question: "Cosa identifica la sigla DPI?",
                options: ["Dispositivi di Protezione Individuale", "Documento di Protezione Infortuni", "Dispositivo Prevenzione Incendi", "Dichiarazione Protezione Impianti"],
                correct: 0,
                suggestion: "I DPI sono attrezzature destinate a essere indossate dal lavoratore per proteggersi dai rischi."
            },
            {
                question: "Chi deve fornire i DPI ai lavoratori?",
                options: ["Il datore di lavoro gratuitamente", "I lavoratori li acquistano", "Il sindacato", "L'INAIL"],
                correct: 0,
                suggestion: "Il datore di lavoro deve fornire gratuitamente i DPI necessari, sostituirli quando necessario e assicurarsi del loro uso."
            },
            {
                question: "Qual è la distanza minima tra i bancali in un magazzino?",
                options: ["Almeno 70-100 cm per consentire transito sicuro", "50 cm", "30 cm", "Non è specificata"],
                correct: 0,
                suggestion: "Serve spazio sufficiente per transito persone/mezzi, evacuazione emergenze e movimentazione merci (min 70-100cm)."
            },
            {
                question: "Qual è il peso massimo sollevabile manualmente da un lavoratore maschio adulto?",
                options: ["25 kg in condizioni ideali", "50 kg", "30 kg sempre", "Non c'è limite"],
                correct: 0,
                suggestion: "Il D.Lgs. 81/2008 indica 25kg come riferimento in condizioni ottimali; va valutato frequenza, presa, postura, distanze."
            },
            {
                question: "Cosa indica un cartello triangolare giallo con bordo nero?",
                options: ["Pericolo/Avvertimento", "Divieto", "Obbligo", "Salvataggio"],
                correct: 0,
                suggestion: "Giallo triangolare = avvertimento (es. carrelli elevatori, carichi sospesi, tensione elettrica)."
            },
            {
                question: "Quale DPI è obbligatorio per chi lavora in magazzino?",
                options: ["Scarpe antinfortunistiche", "Casco sempre", "Guanti sempre", "Occhiali sempre"],
                correct: 0,
                suggestion: "Le scarpe antinfortunistiche sono sempre obbligatorie in magazzino; altri DPI dipendono dai rischi specifici (DVR)."
            },
            {
                question: "Cosa fare in caso di incendio in magazzino?",
                options: ["Allertare, evacuare, usare estintore solo se sicuro", "Spegnere subito da soli", "Nascondersi", "Chiamare dopo aver spento"],
                correct: 0,
                suggestion: "Priorità: dare allarme, evacuare in sicurezza, usare estintore solo se addestrati e incendio iniziale."
            },
            {
                question: "Qual è la larghezza minima delle vie di circolazione interne?",
                options: ["Almeno 80-90 cm per pedoni, di più per mezzi", "50 cm", "1 metro sempre", "Non specificata"],
                correct: 0,
                suggestion: "Vie di circolazione: min 70-80cm pedoni, 90-120cm con mezzi, segnalate e libere da ostacoli."
            },
            {
                question: "Chi deve essere formato sull'uso del muletto?",
                options: ["Solo chi lo utilizza con patentino specifico", "Tutti i dipendenti", "Solo il responsabile", "Nessuno"],
                correct: 0,
                suggestion: "Serve abilitazione specifica (patentino mulettista) con corso teorico-pratico e aggiornamenti quinquennali."
            },
            {
                question: "Qual è la frequenza di controllo degli estintori?",
                options: ["Semestrale", "Annuale", "Trimestrale", "Mai"],
                correct: 0,
                suggestion: "Controllo semestrale (verifica pressione, integrità), sostituzione carica ogni 3-5 anni secondo tipo."
            },
            {
                question: "Cosa indica un cartello rotondo blu?",
                options: ["Obbligo (es. indossare DPI)", "Divieto", "Pericolo", "Uscita"],
                correct: 0,
                suggestion: "Blu rotondo = obbligo (indossare casco, scarpe, protezioni acustiche, lavarsi le mani, ecc.)."
            },
            {
                question: "Chi può rimuovere le protezioni dalle macchine?",
                options: ["Nessuno, salvo manutenzione autorizzata con macchina ferma", "Chiunque se serve", "Solo il datore", "Solo i manutentori sempre"],
                correct: 0,
                suggestion: "Le protezioni non vanno mai rimosse; solo per manutenzione con macchina spenta, lockout/tagout e ripristino immediato."
            },
            {
                question: "Qual è l'altezza massima di stoccaggio senza scaffalature?",
                options: ["Secondo stabilità del carico (max 1,5-2m per bancali)", "Non limitata", "3 metri", "5 metri"],
                correct: 0,
                suggestion: "Bancali a terra: max 1,5-2m altezza per stabilità; oltre serve scaffalatura progettata e ancorata."
            },
            {
                question: "Cosa deve contenere il Piano di Emergenza?",
                options: ["Procedure evacuazione, addetti, vie fuga, punti raccolta", "Solo numeri emergenza", "Solo planimetria", "Non serve"],
                correct: 0,
                suggestion: "Piano emergenza: procedure allertamento/evacuazione, addetti antincendio/primo soccorso, planimetrie, esercitazioni."
            },
            {
                question: "Chi rappresenta i lavoratori per la sicurezza?",
                options: ["Il Rappresentante dei Lavoratori per la Sicurezza (RLS)", "Il sindacato", "Il datore di lavoro", "L'ispettore ASL"],
                correct: 0,
                suggestion: "L'RLS è eletto/designato dai lavoratori, ha diritto a consultazione, informazione, formazione specifica (32h)."
            },
            {
                question: "Qual è il limite di velocità dei carrelli elevatori in magazzino?",
                options: ["Secondo segnaletica/DVR (tipicamente 5-10 km/h)", "30 km/h", "Non limitata", "20 km/h sempre"],
                correct: 0,
                suggestion: "Velocità ridotta (5-10 km/h), adeguata a visibilità, traffico, carico; rispettare segnaletica interna."
            },
            {
                question: "Cosa indica il pittogramma di un teschio?",
                options: ["Sostanza tossica/letale", "Corrosivo", "Infiammabile", "Irritante"],
                correct: 0,
                suggestion: "Teschio e tibie incrociate = tossicità acuta grave (può causare morte/gravi danni per ingestione/inalazione/contatto)."
            },
            {
                question: "Qual è la sanzione per il datore di lavoro che non fornisce DPI?",
                options: ["Arresto o ammenda", "Solo richiamo", "Multa amministrativa lieve", "Nessuna"],
                correct: 0,
                suggestion: "Mancata fornitura DPI: arresto 2-4 mesi o ammenda 3.071-7.862€ (art. 55 D.Lgs. 81/08)."
            },
            {
                question: "Quante uscite di emergenza deve avere un magazzino?",
                options: ["Almeno 2 indipendenti", "1 è sufficiente", "3 sempre", "Dipende solo dalla superficie"],
                correct: 0,
                suggestion: "Almeno 2 vie di fuga indipendenti, larghe adeguate (>80cm), percorso <30-50m, porte verso esodo."
            },
            {
                question: "Chi deve effettuare la sorveglianza sanitaria?",
                options: ["Il medico competente", "Il medico di base", "L'INAIL", "Non è obbligatoria"],
                correct: 0,
                suggestion: "Il medico competente effettua visite preventive, periodiche, su richiesta, cambio mansione, cessazione."
            },
            {
                question: "Cosa deve essere presente nei luoghi di lavoro per il primo soccorso?",
                options: ["Cassetta di pronto soccorso e personale addestrato", "Solo numeri emergenza", "Niente", "Solo aspirina"],
                correct: 0,
                suggestion: "Obbligo cassetta/pacchetto pronto soccorso (DM 388/03) e addetti formati (12/16h secondo gruppo aziendale)."
            },
            {
                question: "Qual è l'illuminamento minimo nei luoghi di lavoro?",
                options: ["Secondo compito visivo (minimo 100-200 lux generale)", "50 lux", "500 lux sempre", "Non specificato"],
                correct: 0,
                suggestion: "Magazzino: min 100-150 lux; zone operative 200-300 lux; lavori di precisione 500-1000 lux."
            },
            {
                question: "Chi deve verificare la conformità CE delle attrezzature?",
                options: ["Il datore di lavoro prima dell'acquisto/uso", "Il venditore", "L'INAIL", "Nessuno"],
                correct: 0,
                suggestion: "Il datore deve verificare marcatura CE, dichiarazione conformità, manuale uso/manutenzione prima di acquistare/usare."
            },
            {
                question: "Cosa indica un cartello rosso rotondo con barra diagonale?",
                options: ["Divieto (es. vietato fumare, accesso, ecc.)", "Obbligo", "Pericolo", "Uscita"],
                correct: 0,
                suggestion: "Rosso rotondo con barra = divieto (fumare, fiamme libere, accesso non autorizzati, transito carrelli, ecc.)."
            },
            {
                question: "Qual è la portata minima di un estintore in un magazzino?",
                options: ["6 litri/kg (13A-89BC)", "3 kg", "10 kg", "Non specificata"],
                correct: 0,
                suggestion: "Estintori: min 6L/kg, capacità 13A-89BC, 1 ogni 200m² (rischio basso), max 30m distanza."
            },
            {
                question: "Chi deve redigere il DUVRI?",
                options: ["Il datore di lavoro committente", "L'appaltatore", "Il coordinatore sicurezza", "Non serve"],
                correct: 0,
                suggestion: "Il DUVRI (Documento Unico Valutazione Rischi Interferenza) è redatto dal committente per lavori in appalto."
            },
            {
                question: "Qual è la periodicità della formazione dei lavoratori?",
                options: ["Aggiornamento ogni 5 anni (6 ore)", "Mai", "Annuale", "Solo all'assunzione"],
                correct: 0,
                suggestion: "Formazione iniziale (4h generale + 4/8/12h specifica) + aggiornamento quinquennale 6 ore."
            },
            {
                question: "Cosa deve fare il lavoratore se individua un rischio?",
                options: ["Segnalarlo immediatamente al preposto/datore", "Risolverlo da solo", "Ignorarlo", "Aspettare l'infortunio"],
                correct: 0,
                suggestion: "Obbligo di segnalazione immediata di situazioni pericolose; divieto di rimuovere protezioni o dispositivi sicurezza."
            },
            {
                question: "Qual è la temperatura minima nei locali di lavoro?",
                options: ["Non inferiore a 18°C (attività sedentarie)", "10°C", "25°C", "Non specificata"],
                correct: 0,
                suggestion: "Min 18°C (lavoro sedentario), 16°C (lavoro fisico leggero), con adeguata ventilazione e umidità 40-60%."
            },
            {
                question: "Chi deve essere avvisato in caso di infortunio sul lavoro?",
                options: ["Datore, INAIL (se >3 gg), ASL (se grave/mortale)", "Solo il datore", "Solo l'INAIL", "Nessuno"],
                correct: 0,
                suggestion: "Prognosi >3gg: denuncia INAIL entro 2gg; infortunio grave (>40gg) o mortale: ASL/Procura immediate."
            },
            {
                question: "Cosa deve contenere la segnaletica di sicurezza?",
                options: ["Pittogrammi, colori, forme normalizzati", "Solo scritte", "Disegni liberi", "Non serve"],
                correct: 0,
                suggestion: "Segnaletica conforme D.Lgs. 81/08 All. XXV: divieto (rosso/rotondo), obbligo (blu/rotondo), pericolo (giallo/triangolo)."
            },
            {
                question: "Qual è la distanza minima da linee elettriche aeree?",
                options: ["5 metri (3m se <1000V con precauzioni)", "1 metro", "10 metri", "Non specificata"],
                correct: 0,
                suggestion: "Distanza di sicurezza 5m (o 3m se <1000V con procedure), più se lavori con gru/piattaforme."
            },
            {
                question: "Chi deve formare i nuovi assunti?",
                options: ["Il datore di lavoro entro 60 giorni", "Non serve", "Il responsabile entro 1 anno", "Solo dopo 6 mesi"],
                correct: 0,
                suggestion: "Formazione obbligatoria prima/contestualmente all'assunzione; massimo entro 60gg se affiancati."
            },
            {
                question: "Qual è il numero minimo di addetti antincendio?",
                options: ["Almeno 1-2 secondo dimensione/rischi", "Non serve", "10", "Solo 1 sempre"],
                correct: 0,
                suggestion: "Numero adeguato a dimensioni, rischi, turnazione; minimo 1 per piccole attività, più per complesse."
            },
            {
                question: "Cosa indica il pittogramma con punto esclamativo?",
                options: ["Irritante, sensibilizzante, tossico", "Esplosivo", "Corrosivo", "Infiammabile"],
                correct: 0,
                suggestion: "Punto esclamativo = irritante cutaneo/oculare, sensibilizzante, tossicità acuta moderata, stupefacente."
            },
            {
                question: "Qual è la sanzione per mancata valutazione dei rischi (DVR)?",
                options: ["Arresto 3-6 mesi o ammenda 2.740-7.014€", "Richiamo", "Multa 100€", "Nessuna"],
                correct: 0,
                suggestion: "Mancato DVR: tra le violazioni più gravi, arresto o ammenda elevata per il datore di lavoro."
            },
            {
                question: "Chi deve autorizzare l'uso di attrezzature particolari?",
                options: ["Il datore di lavoro previa formazione specifica", "Chiunque", "Solo i manutentori", "Non serve autorizzazione"],
                correct: 0,
                suggestion: "Attrezzature speciali (carrelli, PLE, gru, ecc.): serve abilitazione/patentino dopo corso teorico-pratico."
            },
            {
                question: "Qual è l'altezza minima dei soffitti nei locali di lavoro?",
                options: ["3 metri", "2,5 metri", "4 metri", "Non specificata"],
                correct: 0,
                suggestion: "Altezza minima locali chiusi: 3m (riducibile a 2,70m per uffici); maggiore per presenza impianti/scaffalature alte."
            },
            {
                question: "Cosa deve essere fatto prima di entrare in spazi confinati?",
                options: ["Permesso lavoro, verifica atmosfera, ventilazione, DPI", "Niente", "Solo aprire", "Solo indossare maschera"],
                correct: 0,
                suggestion: "Spazi confinati: permesso scritto, rilevazione gas (O2, CO, H2S), ventilazione, imbracatura, sorveglianza esterna."
            },
            {
                question: "Qual è la larghezza minima delle porte interne?",
                options: ["80 cm (85 cm per transito intenso)", "60 cm", "100 cm", "Non specificata"],
                correct: 0,
                suggestion: "Porte: min 80cm (75cm per servizio); 85-90cm se transito intenso; 120cm se >25 persone; verso esodo per emergenza."
            },
            {
                question: "Chi deve essere consultato prima di modifiche organizzative?",
                options: ["Il Rappresentante dei Lavoratori per la Sicurezza", "Nessuno", "Solo il datore decide", "Solo i dirigenti"],
                correct: 0,
                suggestion: "L'RLS deve essere consultato preventivamente su: DVR, DPI, formazione, organizzazione, nomina figure sicurezza."
            },
            {
                question: "Qual è la frequenza della formazione antincendio?",
                options: ["Aggiornamento ogni 5 anni (2-5-8 h)", "Annuale", "Mai", "Solo iniziale"],
                correct: 0,
                suggestion: "Antincendio: formazione iniziale (4/8/16h) + aggiornamento quinquennale (2h basso, 5h medio, 8h alto)."
            },
            {
                question: "Cosa deve essere presente su ogni piano di un edificio?",
                options: ["Planimetria di evacuazione e vie di fuga", "Niente", "Solo estintori", "Solo cartelli divieto fumo"],
                correct: 0,
                suggestion: "Planimetrie: posizione attuale, vie fuga, uscite emergenza, estintori, allarmi, valvole intercettazione."
            },
            {
                question: "Chi deve verificare l'efficacia della formazione?",
                options: ["Il datore di lavoro con verifiche/test", "Nessuno", "Solo il docente", "L'INAIL"],
                correct: 0,
                suggestion: "Il datore deve verificare l'apprendimento con test/prove pratiche e rilasciare attestato di avvenuta formazione."
            },
            {
                question: "Qual è la capacità minima della cassetta di pronto soccorso?",
                options: ["Secondo DM 388/03 per numero dipendenti", "Non specificata", "Solo cerotti", "Solo garze"],
                correct: 0,
                suggestion: "Contenuto minimo: guanti, disinfettante, garze sterili, cerotti, forbici, laccio, ghiaccio istantaneo, coperta termica."
            },
            {
                question: "Cosa deve fare il preposto?",
                options: ["Sovrintendere e verificare attuazione direttive sicurezza", "Solo dare ordini di lavoro", "Niente", "Sostituisce il datore"],
                correct: 0,
                suggestion: "Il preposto vigila su applicazione procedure, uso DPI, comportamenti sicuri; può fermare lavori pericolosi."
            },
            {
                question: "Qual è la periodicità di controllo degli impianti elettrici?",
                options: ["2 anni (5 anni luoghi ordinari)", "Annuale", "Mai", "Solo all'installazione"],
                correct: 0,
                suggestion: "Verifica impianto messa a terra: 2 anni (luoghi lavoro), 5 anni (altri luoghi) da organismi abilitati."
            },
            {
                question: "Cosa indica un cartello verde con pittogramma bianco?",
                options: ["Salvataggio/emergenza (uscita, pronto soccorso)", "Obbligo", "Divieto", "Pericolo"],
                correct: 0,
                suggestion: "Verde rettangolare = segnali salvataggio (uscita emergenza, pronto soccorso, barella, doccia sicurezza, telefono)."
            },
            {
                question: "Chi può effettuare lavori elettrici?",
                options: ["Solo personale qualificato PES/PAV", "Chiunque", "Qualsiasi operaio", "Solo periti elettrotecnici"],
                correct: 0,
                suggestion: "Lavori elettrici: PES (esperto), PAV (avvertito), PEI (idoneo lavori sotto tensione) con formazione CEI 11-27."
            },
            {
                question: "Qual è la distanza di sicurezza dalle scaffalature?",
                options: ["Minimo 70-100 cm per transito", "30 cm", "50 cm", "Non serve"],
                correct: 0,
                suggestion: "Corridoi tra scaffalature: 70-100cm pedoni, 120-150cm con carrelli; segnalati e mantenuti liberi."
            },
            {
                question: "Cosa deve contenere il registro controlli antincendio?",
                options: ["Data, tipo controllo, anomalie, firma responsabile", "Solo date", "Niente", "Solo numeri VVF"],
                correct: 0,
                suggestion: "Registro: controlli estintori, idranti, porte REI, luci emergenza, prove evacuazione con esito e firma."
            },
            {
                question: "Chi nomina il medico competente?",
                options: ["Il datore di lavoro", "I lavoratori", "L'ASL", "L'INAIL"],
                correct: 0,
                suggestion: "Il datore nomina il medico competente quando la sorveglianza sanitaria è obbligatoria per i rischi presenti."
            },
            {
                question: "Qual è la pendenza massima delle rampe pedonali?",
                options: ["8% (10-12% per brevi tratti)", "20%", "15%", "Non specificata"],
                correct: 0,
                suggestion: "Rampe: max 8% (ideale 5%), 10-12% per tratti brevi; disabili max 8% con corrimano e pianerottoli."
            },
            {
                question: "Cosa deve essere presente nei locali a rischio esplosione?",
                options: ["Impianti ATEX, ventilazione, divieto fiamme", "Niente", "Solo estintori", "Solo cartelli"],
                correct: 0,
                suggestion: "Zone ATEX: classificazione, attrezzature certificate, impianti antistatici, ventilazione, divieto fonti ignizione."
            },
            {
                question: "Chi deve aggiornare il DVR dopo un infortunio grave?",
                options: ["Il datore di lavoro con RSPP", "Nessuno", "Solo l'INAIL", "Solo l'ASL"],
                correct: 0,
                suggestion: "Infortunio grave richiede rivalutazione rischi e aggiornamento DVR per prevenire ripetizione eventi."
            },
            {
                question: "Qual è la resistenza minima dei parapetti?",
                options: ["100 kg/m orizzontale", "50 kg", "200 kg", "Non specificata"],
                correct: 0,
                suggestion: "Parapetti: corrente superiore 1m, intermedio 50cm, tavola fermapiede 20cm; resistenza min 100kg/m."
            },
            {
                question: "Cosa deve essere verificato prima di usare una scala?",
                options: ["Integrità pioli, stabilità, dispositivi antiscivolo", "Niente", "Solo altezza", "Solo peso"],
                correct: 0,
                suggestion: "Scale: pioli integri, montanti stabili, piedini antiscivolo, ganci/catene, inclinazione 75° (1:4)."
            },
            {
                question: "Chi deve essere informato sui rischi specifici?",
                options: ["Tutti i lavoratori esposti", "Solo i dirigenti", "Solo i nuovi assunti", "Nessuno"],
                correct: 0,
                suggestion: "Informazione continua a tutti i lavoratori su rischi, misure di prevenzione, procedure emergenza, DPI."
            },
            {
                question: "Qual è la durata minima della formazione per lavoratori?",
                options: ["4 ore generale + 4/8/12 ore specifica", "2 ore", "16 ore sempre", "Non obbligatoria"],
                correct: 0,
                suggestion: "4h generale + specifica (4h rischio basso, 8h medio, 12h alto) secondo settore ATECO."
            },
            {
                question: "Cosa deve essere presente negli spogliatoi?",
                options: ["Armadietti, sedute, separazione sessi", "Niente", "Solo appendiabiti", "Solo lavandini"],
                correct: 0,
                suggestion: "Spogliatoi: separati per sesso, armadietti doppi (lavoro/privato), sedute, ventilazione, dimensioni adeguate."
            },
            {
                question: "Chi può sospendere i lavori per pericolo grave?",
                options: ["Preposto, RSPP, RLS, organi vigilanza", "Solo il datore", "Solo i VVF", "Nessuno"],
                correct: 0,
                suggestion: "Pericolo grave e imminente: preposto deve fermare lavori; lavoratori possono allontanarsi senza sanzioni."
            },
            {
                question: "Qual è la periodicità delle verifiche delle attrezzature di sollevamento?",
                options: ["Annuale per prime 3 anni, poi ogni 2 anni", "Semestrale", "Mai", "Solo all'acquisto"],
                correct: 0,
                suggestion: "Apparecchi sollevamento: verifica INAIL/ASL/organismi prima messa in servizio, poi annuale (3 anni) e biennale."
            },
            {
                question: "Cosa deve contenere il libretto macchina?",
                options: ["Istruzioni uso, manutenzione, rischi residui", "Solo marca", "Solo prezzo", "Niente"],
                correct: 0,
                suggestion: "Manuale: caratteristiche, uso corretto, rischi residui, manutenzione, controlli, ricambi, marcatura CE."
            },
            {
                question: "Chi deve verificare l'idoneità sanitaria dei lavoratori?",
                options: ["Il medico competente", "Il medico di base", "Il datore", "L'INAIL"],
                correct: 0,
                suggestion: "Il medico competente esprime giudizio: idoneo, idoneo con prescrizioni, temporaneamente non idoneo, non idoneo."
            },
            {
                question: "Qual è l'altezza minima per considerare un lavoro in quota?",
                options: ["2 metri da piano stabile", "3 metri", "5 metri", "1 metro"],
                correct: 0,
                suggestion: "Lavoro in quota: ≥2m da piano stabile; serve valutazione, DPI anticaduta, formazione specifica."
            },
            {
                question: "Cosa deve essere presente sulle vie di fuga?",
                options: ["Illuminazione emergenza, segnaletica, porte apribili", "Solo luci", "Niente", "Solo cartelli"],
                correct: 0,
                suggestion: "Vie fuga: segnalate, illuminate (anche emergenza), libere, porte verso esodo con maniglione antipanico."
            },
            {
                question: "Chi deve redigere il POS (Piano Operativo di Sicurezza)?",
                options: ["Il datore di lavoro dell'impresa esecutrice", "Il committente", "Il coordinatore", "Nessuno"],
                correct: 0,
                suggestion: "Ogni impresa in cantiere redige POS: organizzazione, rischi, misure prevenzione, DPI, attrezzature."
            },
            {
                question: "Qual è la durata della formazione per dirigenti?",
                options: ["16 ore + aggiornamento 6h/5anni", "4 ore", "32 ore", "Non prevista"],
                correct: 0,
                suggestion: "Dirigenti: 16 ore (4 moduli giuridico-gestionale-tecnico-relazionale) + 6h aggiornamento quinquennale."
            },
            {
                question: "Cosa deve essere verificato su un ponteggio prima dell'uso?",
                options: ["Ancoraggi, pianali, parapetti, accessi", "Niente", "Solo altezza", "Solo montanti"],
                correct: 0,
                suggestion: "Verifica ponteggio: PIMUS, montaggio qualificato, pianali completi, parapetti, controventature, ancoraggi."
            },
            {
                question: "Chi deve fornire informazioni sui prodotti chimici?",
                options: ["Il fornitore con scheda dati sicurezza", "Il datore", "I lavoratori", "Nessuno"],
                correct: 0,
                suggestion: "Fornitore deve dare SDS (Scheda Dati Sicurezza) 16 sezioni; datore forma lavoratori su uso sicuro."
            },
            {
                question: "Qual è la periodicità di aggiornamento per preposti?",
                options: ["6 ore ogni 5 anni", "4 ore annuali", "Non previsto", "Solo all'inizio"],
                correct: 0,
                suggestion: "Preposti: corso 8h + aggiornamento 6h ogni 5 anni su responsabilità, rischi, comunicazione."
            },
            {
                question: "Cosa deve essere presente in caso di lavori in altezza?",
                options: ["Parapetti, reti, cinture di sicurezza", "Niente", "Solo casco", "Solo corde"],
                correct: 0,
                suggestion: "Priorità: eliminare caduta (parapetti), proteggersi (reti), DPI anticaduta (imbracatura + cordino assorbimento)."
            },
            {
                question: "Chi deve essere formato sulla gestione emergenze?",
                options: ["Tutti i lavoratori + addetti specifici", "Solo addetti antincendio", "Solo il datore", "Nessuno"],
                correct: 0,
                suggestion: "Tutti ricevono informazioni; addetti antincendio/primo soccorso hanno formazione specifica con esercitazioni."
            },
            {
                question: "Qual è la larghezza minima dei corridoi con carrelli?",
                options: ["Larghezza carrello + 120-140 cm", "1 metro", "80 cm", "Non specificata"],
                correct: 0,
                suggestion: "Corridoi con mezzi: larghezza mezzo + 120cm (doppio senso +140cm); segnalati, illuminati, mantenuti liberi."
            },
            {
                question: "Cosa deve contenere l'attestato di formazione?",
                options: ["Dati partecipante, corso, ore, test, firma ente", "Solo nome", "Solo data", "Niente"],
                correct: 0,
                suggestion: "Attestato: anagrafica, denominazione corso, ore, date, contenuti, superamento test, firma legale rappresentante ente."
            },
            {
                question: "Chi deve essere consultato per modifiche degli orari di lavoro?",
                options: ["Il medico competente per rischi specifici", "Nessuno", "Solo il sindacato", "Solo i lavoratori"],
                correct: 0,
                suggestion: "Modifiche turni/orari: consultare medico competente se impattano su sorveglianza sanitaria (es. lavoro notturno)."
            },
            {
                question: "Qual è la temperatura massima nei luoghi di lavoro?",
                options: ["Non specificata ma deve essere confortevole", "30°C", "25°C", "35°C"],
                correct: 0,
                suggestion: "Non c'è limite massimo specifico; va garantito comfort con ventilazione/climatizzazione; microclima valutato in DVR."
            },
            {
                question: "Cosa deve essere fatto prima di utilizzare una nuova sostanza chimica?",
                options: ["Leggere SDS, valutare rischi, formare lavoratori", "Usarla subito", "Solo aprirla", "Solo indossare guanti"],
                correct: 0,
                suggestion: "Prima dell'uso: acquisire SDS, valutare rischi chimici, aggiornare DVR, informare/formare, fornire DPI."
            },
            {
                question: "Chi deve verificare l'applicazione delle misure di prevenzione?",
                options: ["Datore, dirigenti, preposti", "Solo il datore", "Solo l'RSPP", "Nessuno"],
                correct: 0,
                suggestion: "Datore vigila sull'applicazione; dirigenti/preposti controllano quotidianamente; RSPP/RLS verificano efficacia."
            },
            {
                question: "Qual è la durata della formazione per addetti al montaggio ponteggi?",
                options: ["28 ore + aggiornamento 4h/4anni", "16 ore", "8 ore", "Non prevista"],
                correct: 0,
                suggestion: "Ponteggi >2m: corso 28h teorico-pratico + 4h aggiornamento quadriennale per montatori autorizzati."
            },
            {
                question: "Cosa deve essere presente nei depositi di sostanze pericolose?",
                options: ["Ventilazione, segnaletica, kit emergenza, DPI", "Niente", "Solo estintori", "Solo cartelli"],
                correct: 0,
                suggestion: "Depositi: separazione incompatibili, ventilazione, elettrica conforme, segnaletica, kit assorbenti, schede emergenza."
            },
            {
                question: "Chi deve essere nominato per gestire le emergenze?",
                options: ["Addetti antincendio e primo soccorso", "Nessuno", "Solo vigili del fuoco", "Tutti i dipendenti"],
                correct: 0,
                suggestion: "Numero adeguato di addetti antincendio/primo soccorso formati, designati per iscritto, sempre presenti (turnazione)."
            },
            {
                question: "Qual è la periodicità dei controlli sugli impianti di aspirazione?",
                options: ["Secondo fabbricante (tipicamente semestrale/annuale)", "Mai", "Ogni 5 anni", "Solo all'installazione"],
                correct: 0,
                suggestion: "Impianti aspirazione polveri/fumi: controlli filtri/efficienza secondo libretto; verifica efficacia almeno annuale."
            },
            {
                question: "Cosa deve essere fatto in caso di near miss (quasi infortunio)?",
                options: ["Segnalarlo e analizzare le cause", "Ignorarlo", "Solo annotarlo", "Niente"],
                correct: 0,
                suggestion: "Near miss: segnalare, registrare, analizzare cause, adottare azioni correttive preventive; cultura della sicurezza."
            },
            {
                question: "Chi deve autorizzare lavori straordinari in azienda?",
                options: ["Il datore di lavoro con valutazione rischi", "Chiunque", "Solo il preposto", "Non serve autorizzazione"],
                correct: 0,
                suggestion: "Lavori non ordinari: autorizzazione scritta, valutazione rischi, misure specifiche, informazione/formazione."
            },
            {
                question: "Qual è l'obbligo del lavoratore in materia di sicurezza?",
                options: ["Rispettare direttive, usare DPI, segnalare pericoli", "Nessuno", "Solo lavorare", "Solo firmare presenza"],
                correct: 0,
                suggestion: "Lavoratore: prendersi cura di sé/altri, usare correttamente attrezzature/DPI, segnalare deficienze, non rimuovere protezioni."
            },
            {
                question: "Qual è la sanzione per omessa sorveglianza sanitaria?",
                options: ["Arresto 2-4 mesi o ammenda 2.192-4.384€", "Richiamo", "Multa 100€", "Nessuna"],
                correct: 0,
                suggestion: "Mancata sorveglianza sanitaria obbligatoria: sanzioni penali per datore di lavoro."
            },
            {
                question: "Cosa deve contenere il registro degli esposti?",
                options: ["Anagrafica, mansione, esposizioni, controlli sanitari", "Solo nomi", "Solo date", "Non esiste più"],
                correct: 0,
                suggestion: "Per agenti cancerogeni/mutageni/biologici: registro esposti nominativo conservato ≥40 anni, trasmesso ASL/INAIL."
            },
            {
                question: "Chi può accedere ai documenti della sicurezza?",
                options: ["RLS, organi vigilanza, lavoratori (propri dati)", "Solo il datore", "Nessuno", "Solo l'INAIL"],
                correct: 0,
                suggestion: "DVR: accessibile a RLS, ispettori; sorveglianza sanitaria: lavoratore vede propria cartella sanitaria."
            },
            {
                question: "Qual è la periodicità della riunione periodica di sicurezza?",
                options: ["Annuale (aziende >15 dipendenti)", "Semestrale", "Mai", "Solo se c'è infortunio"],
                correct: 0,
                suggestion: "Riunione annuale obbligatoria (>15 dip.): datore, RSPP, medico, RLS; ordine giorno DVR, formazione, DPI."
            },
            {
                question: "Cosa deve essere presente per l'uso di sostanze tossiche?",
                options: ["SDS, DPI specifici, formazione, procedure emergenza", "Niente", "Solo guanti", "Solo maschera"],
                correct: 0,
                suggestion: "Sostanze tossiche: valutazione rischio chimico, DPI appropriati (maschere filtri specifici), formazione, docce/lavaocchi emergenza."
            },
            {
                question: "Chi deve redigere il PSC (Piano di Sicurezza e Coordinamento)?",
                options: ["Il coordinatore per la progettazione (CSP)", "Il committente", "L'impresa", "Nessuno"],
                correct: 0,
                suggestion: "PSC obbligatorio se cantiere con ≥2 imprese; redatto dal CSP nominato dal committente."
            },
            {
                question: "Qual è la formazione minima per addetti PLE (piattaforme elevabili)?",
                options: ["10 ore (4 teoria + 6 pratica) + aggiornamento 4h/5anni", "4 ore", "16 ore", "Non prevista"],
                correct: 0,
                suggestion: "PLE: abilitazione 10h (8h-10h secondo tipo) + aggiornamento 4h quinquennale con esame teorico-pratico."
            },
            {
                question: "Cosa deve essere verificato negli impianti di riscaldamento?",
                options: ["Efficienza, emissioni, sicurezza annualmente", "Niente", "Solo temperatura", "Solo all'installazione"],
                correct: 0,
                suggestion: "Caldaie: controllo efficienza energetica periodico; verifica fumi, ventilazione, sicurezza secondo normativa impianti."
            },
            {
                question: "Chi deve essere informato su modifiche del ciclo produttivo?",
                options: ["RSPP, RLS, lavoratori interessati", "Nessuno", "Solo il datore decide", "Solo i dirigenti"],
                correct: 0,
                suggestion: "Modifiche significative: consultazione RSPP/RLS, valutazione nuovi rischi, aggiornamento DVR, informazione/formazione."
            },
            {
                question: "Qual è la durata del corso per uso carrelli elevatori rischio basso?",
                options: ["12 ore (4 teoria + 8 pratica) + aggiornamento 4h/5anni", "8 ore", "16 ore", "4 ore"],
                correct: 0,
                suggestion: "Carrelli elevatori: 12h (teoria generale + specifica + pratica) + 4h aggiornamento quinquennale."
            },
            {
                question: "Cosa deve contenere il piano di emergenza?",
                options: ["Rischi, procedure evacuazione, ruoli, numeri utili", "Solo numeri VVF", "Solo planimetria", "Niente"],
                correct: 0,
                suggestion: "Piano emergenza: scenari, procedure, responsabilità, vie fuga, punti raccolta, comunicazioni, coordinamento soccorsi."
            },
            {
                question: "Chi deve verificare la conformità delle attrezzature di lavoro?",
                options: ["Il datore di lavoro prima dell'uso", "Nessuno", "Solo il produttore", "Solo l'INAIL"],
                correct: 0,
                suggestion: "Datore verifica: marcatura CE, conformità, idoneità all'uso, manutenzione, controlli periodici secondo libretto."
            },
            {
                question: "Qual è l'altezza massima di stoccaggio senza autorizzazioni speciali?",
                options: ["Varia secondo normativa antincendio e stabilità", "10 metri", "5 metri", "Non c'è limite"],
                correct: 0,
                suggestion: "Limiti stoccaggio: normativa antincendio (attività soggette CPI), stabilità scaffalature, raggiungibilità sicura."
            },
            {
                question: "Cosa deve essere fatto per lavori in spazi confinati?",
                options: ["Permesso lavoro, verifica atmosfera, sorveglianza esterna", "Niente", "Solo entrare", "Solo usare maschera"],
                correct: 0,
                suggestion: "Spazi confinati: DPR 177/11, permesso scritto, test gas, ventilazione, DPI specifici, recupero emergenza, sorvegliante."
            },
            {
                question: "Chi deve firmare il DVR?",
                options: ["Datore, RSPP, medico competente, RLS (consultazione)", "Solo il datore", "Solo l'RSPP", "Tutti i dipendenti"],
                correct: 0,
                suggestion: "Firme DVR: datore (responsabile), RSPP, medico competente; RLS firma per consultazione (non responsabilità)."
            },
            {
                question: "Qual è la periodicità dei controlli sui dispositivi anticaduta?",
                options: ["Annuale da persona competente + visivo ogni uso", "Mai", "Solo all'acquisto", "Ogni 5 anni"],
                correct: 0,
                suggestion: "DPI anticaduta: verifica visiva pre-uso, revisione annuale da ditta specializzata con registrazione."
            },
            {
                question: "Cosa deve essere presente per il lavoro notturno?",
                options: ["Valutazione rischi specifici, sorveglianza sanitaria", "Niente", "Solo illuminazione", "Solo turni"],
                correct: 0,
                suggestion: "Lavoro notturno: valutazione rischi (fatica, sonnolenza), sorveglianza sanitaria, tutele (donne gravide, genitori)."
            },
            {
                question: "Chi deve autorizzare l'uso di attrezzature non conformi?",
                options: ["Nessuno, sono vietate", "Il datore", "L'ispettore", "Chiunque"],
                correct: 0,
                suggestion: "Attrezzature non conformi/prive marcatura CE: divieto assoluto di uso; sanzioni penali per datore."
            },
            {
                question: "Qual è la distanza minima di sicurezza da linee elettriche aeree?",
                options: ["5 metri (3 metri se <1000V con precauzioni)", "1 metro", "10 metri", "2 metri"],
                correct: 0,
                suggestion: "Linee elettriche: 5m distanza, 3m se <1kV con procedura, delimitazione area, segnaletica, formazione operatori."
            },
            {
                question: "Cosa deve contenere il registro infortuni?",
                options: ["Nome, dinamica, giorni prognosi, causa", "Solo nome", "Solo data", "Non esiste più"],
                correct: 0,
                suggestion: "Registro infortuni abolito; denuncia INAIL entro 2gg, comunicazione INAIL/ASL per gravi (>40gg o mortali)."
            },
            {
                question: "Chi può modificare una macchina marcata CE?",
                options: ["Nessuno senza rivalutazione conformità", "Chiunque", "Solo il produttore", "Il datore liberamente"],
                correct: 0,
                suggestion: "Modifiche sostanziali: richiedono nuova valutazione conformità, marcatura CE, documentazione tecnica."
            },
            {
                question: "Qual è la periodicità della verifica degli estintori?",
                options: ["Controllo semestrale + collaudo 3 anni + revisione 6 anni", "Annuale", "Mai", "Solo all'acquisto"],
                correct: 0,
                suggestion: "Estintori: semestrale (peso, cartellino), collaudo 3 anni, revisione 6 anni, sostituzione secondo vita utile."
            },
            {
                question: "Cosa deve essere fatto per lavori con rischio caduta dall'alto?",
                options: ["POS specifico, DPI anticaduta, formazione, punti ancoraggio", "Niente", "Solo casco", "Solo corda"],
                correct: 0,
                suggestion: "Quote >2m: valutazione, protezioni collettive (parapetti), DPI III cat. (imbracatura+assorbitore), ancoraggi certificati."
            },
            {
                question: "Chi deve essere formato sull'uso dei DPI di III categoria?",
                options: ["Tutti i lavoratori che li usano con addestramento", "Solo alcuni", "Nessuno", "Solo il preposto"],
                correct: 0,
                suggestion: "DPI III cat. (anticaduta, respiratori, chimici): addestramento pratico specifico obbligatorio oltre formazione teorica."
            },
            {
                question: "Qual è la sanzione per mancato aggiornamento del DVR?",
                options: ["Arresto 3-6 mesi o ammenda 2.500-6.400€", "Richiamo", "Multa 100€", "Nessuna"],
                correct: 0,
                suggestion: "DVR non aggiornato equiparato a omessa redazione: sanzioni penali gravi per datore di lavoro."
            },
            {
                question: "Cosa deve essere verificato nei carrelli elevatori?",
                options: ["Freni, sterzo, forche, catene, manutenzione", "Niente", "Solo ruote", "Solo batteria"],
                correct: 0,
                suggestion: "Controlli giornalieri: freni, sterzo, clacson, luci, forche integre, livelli; manutenzione programmata registrata."
            },
            {
                question: "Chi deve essere consultato per l'acquisto di nuove attrezzature?",
                options: ["RSPP, medico competente, RLS, lavoratori", "Nessuno", "Solo il fornitore", "Solo l'ufficio acquisti"],
                correct: 0,
                suggestion: "Prima dell'acquisto: valutare conformità, ergonomia, rumorosità, vibrazioni, compatibilità DPI; consultare RSPP/RLS."
            },
            {
                question: "Qual è la durata della formazione per addetti primo soccorso gruppo B-C?",
                options: ["12 ore + aggiornamento 4h/3anni", "4 ore", "16 ore", "8 ore"],
                correct: 0,
                suggestion: "Primo soccorso: 16h gruppo A (>5 dip. industria), 12h gruppo B-C; aggiornamento 6h/4h triennale."
            },
            {
                question: "Cosa deve essere presente per rischio biologico?",
                options: ["Valutazione, DPI, vaccinazioni, protocolli", "Niente", "Solo disinfettante", "Solo mascherina"],
                correct: 0,
                suggestion: "Rischio biologico: classificazione agenti, misure contenimento, DPI, sorveglianza sanitaria, vaccinazioni se disponibili."
            },
            {
                question: "Chi deve redigere le procedure operative di sicurezza?",
                options: ["Datore con RSPP, consultando RLS", "Solo RSPP", "Solo RLS", "Nessuno"],
                correct: 0,
                suggestion: "Procedure: datore con supporto RSPP redige istruzioni operative; consultazione RLS; divulgazione/formazione lavoratori."
            },
            {
                question: "Qual è la temperatura minima nei locali di lavoro?",
                options: ["Almeno 18°C (attività sedentaria)", "10°C", "15°C", "Non specificata"],
                correct: 0,
                suggestion: "Temperature minime: 18°C attività sedentaria, 16°C attività moderata, valutare anche umidità/ventilazione."
            },
            {
                question: "Cosa deve essere fatto per lavori rumorosi?",
                options: ["Valutazione, insonorizzazione, DPI, sorveglianza sanitaria", "Niente", "Solo tappi", "Solo ridurre orario"],
                correct: 0,
                suggestion: "Rumore: fonometria, Lex<80dB informazione, 80-85dB DPI disponibili, >85dB DPI obbligatori+audiometria."
            },
            {
                question: "Chi deve verificare l'efficacia della formazione?",
                options: ["Datore, preposti, RSPP attraverso osservazione", "Nessuno", "Solo l'ente formatore", "Solo al test finale"],
                correct: 0,
                suggestion: "Verifica continua: osservazione comportamenti, audit, near miss, infortuni; eventuale formazione integrativa."
            },
            {
                question: "Qual è la larghezza minima delle porte di emergenza?",
                options: ["80 cm (120 cm se >25 persone)", "60 cm", "100 cm sempre", "Non specificata"],
                correct: 0,
                suggestion: "Porte emergenza: min 80cm (120cm >25 persone), verso esodo, maniglione antipanico, mantenute libere."
            },
            {
                question: "Cosa deve contenere il cartellino di manutenzione?",
                options: ["Data, intervento, anomalie, firma tecnico", "Solo data", "Niente", "Solo firma"],
                correct: 0,
                suggestion: "Registro manutenzioni: data, tipo intervento, componenti sostituiti, anomalie riscontrate, firma operatore qualificato."
            },
            {
                question: "Chi deve essere nominato come RLS?",
                options: ["Eletto dai lavoratori o designato", "Il datore sceglie", "Nessuno", "L'RSPP"],
                correct: 0,
                suggestion: "RLS: eletto dai lavoratori (1 ogni 200 dip.); se non eletto possono ricorrere a RLST territoriale."
            },
            {
                question: "Qual è la periodicità della formazione antincendio?",
                options: ["Aggiornamento 2-5-8h secondo rischio ogni 5 anni", "Annuale", "Mai", "Solo all'assunzione"],
                correct: 0,
                suggestion: "Antincendio: nuovo DM 2021, aggiornamento quinquennale 2h basso, 5h medio, 8h alto rischio."
            },
            {
                question: "Cosa deve essere fatto prima di lavori in quota?",
                options: ["Valutazione, protezioni collettive, DPI, formazione", "Niente", "Solo indossare cintura", "Solo avvisare"],
                correct: 0,
                suggestion: "Priorità: eliminare lavoro in quota, protezioni collettive (ponteggi/reti), ultima opzione DPI anticaduta certificati."
            },
            {
                question: "Chi può rilasciare attestati di formazione sicurezza?",
                options: ["Enti accreditati Regioni", "Chiunque", "Solo università", "Solo aziende"],
                correct: 0,
                suggestion: "Formazione: enti accreditati Regioni secondo criteri Accordo Stato-Regioni; docenti qualificati (es. RSPP con esperienza)."
            },
            {
                question: "Qual è l'obbligo del preposto in caso di violazione?",
                options: ["Interrompere lavori e informare datore", "Niente", "Solo rimproverare", "Licenziare"],
                correct: 0,
                suggestion: "Preposto: interrompere attività pericolose, richiamare lavoratori, informare datore/RSPP per provvedimenti."
            },
            {
                question: "Cosa deve essere presente per rischio vibrazioni?",
                options: ["Valutazione, attrezzature conformi, rotazione, sorveglianza", "Niente", "Solo guanti", "Solo informazione"],
                correct: 0,
                suggestion: "Vibrazioni: misurazioni, valori azione/limite, attrezzature basse emissioni, rotazione compiti, sorveglianza sanitaria."
            },
            {
                question: "Chi deve autorizzare i lavori elettrici sotto tensione?",
                options: ["Datore con procedura specifica e personale PEI", "Chiunque", "Solo elettricista", "Nessuno"],
                correct: 0,
                suggestion: "Lavori sotto tensione: vietati salvo indispensabili; solo PEI con procedura scritta, DPI, attrezzi isolati."
            },
            {
                question: "Qual è la sanzione per mancata fornitura DPI?",
                options: ["Arresto 2-4 mesi o ammenda 1.315-5.699€", "Richiamo", "Multa 50€", "Nessuna"],
                correct: 0,
                suggestion: "Omessa fornitura DPI: sanzioni penali per datore; anche per omessa vigilanza sul corretto utilizzo."
            },
            {
                question: "Cosa deve essere verificato negli scaffali portapallet?",
                options: ["Verticalità, danni, ancoraggi, portata", "Niente", "Solo polvere", "Solo vernice"],
                correct: 0,
                suggestion: "Scaffalature: verifica annuale da tecnico, controlli periodici montanti/traversi, segnalazione danni, rispetto portate."
            },
            {
                question: "Chi deve essere formato sulle procedure di emergenza?",
                options: ["Tutti i lavoratori", "Solo addetti emergenza", "Solo il datore", "Nessuno"],
                correct: 0,
                suggestion: "Tutti i lavoratori: formazione su vie fuga, allarme, punti raccolta, numeri emergenza; addetti hanno formazione specifica."
            },
            {
                question: "Qual è la durata minima delle prove di evacuazione?",
                options: ["Almeno 1-2 volte l'anno", "Mai", "Ogni 5 anni", "Solo all'inizio attività"],
                correct: 0,
                suggestion: "Prove evacuazione: almeno annuali (semestrali consigliato), coinvolgere tutti, valutare tempi, criticità, miglioramenti."
            },
            {
                question: "Cosa deve essere presente per sostanze CMR?",
                options: ["Registro esposti, sorveglianza sanitaria, sostituzione", "Niente", "Solo guanti", "Solo etichetta"],
                correct: 0,
                suggestion: "Cancerogeni/mutageni: sostituzione se possibile, esposizione minima, zone delimitate, registro nominativo 40 anni."
            },
            {
                question: "Chi deve redigere il manuale d'uso delle attrezzature?",
                options: ["Il fabbricante in lingua italiana", "Il datore", "Nessuno", "L'utilizzatore"],
                correct: 0,
                suggestion: "Fabbricante: manuale istruzioni in italiano, completo, comprensibile, con rischi residui, manutenzione, marcatura CE."
            },
            {
                question: "Qual è la periodicità dei controlli sulle funi e catene?",
                options: ["Trimestrale + verifica annuale approfondita", "Annuale", "Mai", "Solo all'acquisto"],
                correct: 0,
                suggestion: "Funi/catene sollevamento: controllo trimestrale, verifica annuale da persona competente con registrazione, dismissione."
            },
            {
                question: "Cosa deve essere fatto per appalti e contratti?",
                options: ["DUVRI, verifica idoneità, cooperazione", "Niente", "Solo contratto", "Solo pagamento"],
                correct: 0,
                suggestion: "Committente: verifica idoneità tecnico-professionale, DUVRI per interferenze, cooperazione/coordinamento, contratto scritto."
            },
            {
                question: "Chi deve essere informato su modifiche organizzative?",
                options: ["RLS, lavoratori interessati, RSPP", "Nessuno", "Solo il datore decide", "Solo sindacato"],
                correct: 0,
                suggestion: "Modifiche: informare RLS preventivamente, valutare nuovi rischi, aggiornare DVR, formare lavoratori interessati."
            },
            {
                question: "Qual è la distanza minima tra scaffalature opposte?",
                options: ["Almeno 1 metro (1,5m con carrelli)", "50 cm", "2 metri", "Non specificata"],
                correct: 0,
                suggestion: "Corridoi tra scaffali opposti: min 1m pedoni, 1,5m+ carrelli secondo dimensioni, segnalati, illuminati."
            },
            {
                question: "Cosa deve contenere il piano di carico-scarico merci?",
                options: ["Procedure, DPI, attrezzature, segnaletica", "Solo orari", "Niente", "Solo nomi autisti"],
                correct: 0,
                suggestion: "Carico/scarico: procedure sicure, attrezzature idonee, segregazione area, DPI, formazione, controllo automezzi."
            },
            {
                question: "Chi deve verificare la conformità dei DPI?",
                options: ["Datore prima della fornitura", "Nessuno", "Solo il venditore", "I lavoratori"],
                correct: 0,
                suggestion: "Datore verifica: marcatura CE, categoria, idoneità ai rischi, conformità normativa, libretto istruzioni."
            },
            {
                question: "Qual è la periodicità della revisione del piano di emergenza?",
                options: ["Almeno triennale o quando cambia layout", "Annuale", "Mai", "Solo all'inizio"],
                correct: 0,
                suggestion: "Piano emergenza: revisione almeno triennale, aggiornamento per modifiche strutturali/organizzative, prove periodiche."
            },
            {
                question: "Cosa deve essere fatto per lavori in presenza di amianto?",
                options: ["Notifica ASL, piano lavori, bonifica certificata", "Niente", "Solo mascherina", "Solo avvisare"],
                correct: 0,
                suggestion: "Amianto: vietata lavorazione; rimozione solo da ditte iscritte Albo, piano lavori, notifica 30gg ASL, smaltimento tracciato."
            },
            {
                question: "Chi deve essere consultato per cambio turni?",
                options: ["RLS, medico competente, lavoratori", "Nessuno", "Solo sindacato", "Solo il datore decide"],
                correct: 0,
                suggestion: "Modifiche organizzative: consultare RLS, valutare impatto su salute (medico), informare lavoratori, rispettare CCNL."
            },
            {
                question: "Qual è l'altezza minima dei soffitti nei locali di lavoro?",
                options: ["3 metri (2,70 uffici)", "2 metri", "4 metri", "Non specificata"],
                correct: 0,
                suggestion: "Altezza minima: 3m locali lavoro, 2,70m uffici; volume minimo 10m³/persona; cubatura adeguata al tipo attività."
            },
            {
                question: "Cosa deve essere presente per il lavoro in solitaria?",
                options: ["Dispositivo uomo a terra, procedure controllo", "Niente", "Solo telefono", "Solo orologio"],
                correct: 0,
                suggestion: "Lavoro isolato: valutazione rischi, dispositivi allarme/localizzazione, controlli periodici, procedure emergenza."
            },
            {
                question: "Chi deve autorizzare l'uso di attrezzature particolari?",
                options: ["Datore dopo verifica idoneità e formazione", "Chiunque", "Solo il preposto", "Nessuno"],
                correct: 0,
                suggestion: "Attrezzature specifiche (carrelli, PLE, gru): autorizzazione scritta previo corso abilitante e verifica idoneità sanitaria."
            },
            {
                question: "Qual è la sanzione per omessa designazione addetti emergenza?",
                options: ["Arresto 2-4 mesi o ammenda 1.315-5.699€", "Richiamo", "Multa 100€", "Nessuna"],
                correct: 0,
                suggestion: "Mancata designazione addetti antincendio/primo soccorso: sanzioni penali; anche per omessa formazione."
            },
            {
                question: "Cosa deve essere verificato negli impianti di sollevamento?",
                options: ["Funi, ganci, freni, limitatori, catene cinematiche", "Niente", "Solo corda", "Solo vernice"],
                correct: 0,
                suggestion: "Controlli apparecchi sollevamento: verifica INAIL/ASL, manutenzione programmata, registro, limitatori carico, dispositivi sicurezza."
            },
            {
                question: "Chi deve essere formato sulla movimentazione manuale carichi?",
                options: ["Tutti i lavoratori esposti al rischio", "Solo magazzinieri", "Solo mulettisti", "Nessuno"],
                correct: 0,
                suggestion: "MMC: formazione specifica su tecniche corrette, rischi, uso ausili, esercizi pratici; aggiornamento periodico."
            },
            {
                question: "Qual è la durata formazione per coordinatori sicurezza cantieri?",
                options: ["120 ore + aggiornamento 40h/5anni", "40 ore", "16 ore", "Non prevista"],
                correct: 0,
                suggestion: "CSP/CSE: corso 120h (giuridico-tecnico-metodologico-pratico) + 40h aggiornamento quinquennale; requisiti professionali."
            },
            {
                question: "Cosa deve essere presente nelle aree di transito pedoni-mezzi?",
                options: ["Separazione fisica, segnaletica, strisce", "Niente", "Solo cartello", "Solo luci"],
                correct: 0,
                suggestion: "Segregazione: barriere fisiche (new jersey/guard rail), strisce gialle/bianche, segnaletica orizzontale/verticale, specchi."
            },
            {
                question: "Chi deve redigere le istruzioni operative?",
                options: ["Datore con RSPP, consultando lavoratori esperti", "Solo RSPP", "Solo lavoratori", "Nessuno"],
                correct: 0,
                suggestion: "Istruzioni: datore coordina redazione con RSPP, coinvolgendo lavoratori esperti; divulgazione attraverso formazione."
            },
            {
                question: "Qual è la periodicità controllo impianti antincendio?",
                options: ["Semestrale (estintori) + annuale (rete idrica/rivelazione)", "Annuale tutto", "Mai", "Solo all'installazione"],
                correct: 0,
                suggestion: "Impianti: estintori 6 mesi, idranti/rivelatori/evacuat[...]ione 6 mesi, allarme/spegnimento annuale; registro controlli."
            },
            {
                question: "Cosa deve essere fatto per rischio stress lavoro-correlato?",
                options: ["Valutazione oggettiva, questionari, azioni migliorative", "Niente", "Solo parlare", "Solo assumere psicologo"],
                correct: 0,
                suggestion: "Stress: valutazione obbligatoria DVR, indicatori oggettivi, eventuale questionari, misure organizzative, supporto psicologico."
            },
            {
                question: "Chi deve essere formato sulle emergenze chimiche?",
                options: ["Tutti gli esposti + addetti emergenza specifici", "Solo chimici", "Solo il datore", "Nessuno"],
                correct: 0,
                suggestion: "Emergenze chimiche: tutti formati su SDS/primo intervento; addetti emergenza su procedure neutralizzazione/contenimento."
            },
            {
                question: "Qual è l'illuminamento minimo in magazzino?",
                options: ["150-200 lux (300 lux aree controllo qualità)", "50 lux", "500 lux", "Non specificato"],
                correct: 0,
                suggestion: "Illuminazione: 150-200 lux magazzino, 300 lux lettura/controllo, 500 lux uffici; luce emergenza su vie fuga."
            },
            {
                question: "Cosa deve essere presente per accesso mezzi esterni?",
                options: ["Procedure ingresso, DPI, informazione rischi", "Niente", "Solo badge", "Solo firma"],
                correct: 0,
                suggestion: "Automezzi esterni: regolamento accesso, informazione rischi/procedure, DPI visitatori, aree segregate, coordinamento."
            },
            {
                question: "Chi deve verificare idoneità tecnico-professionale fornitori?",
                options: ["Datore committente prima dell'affidamento", "Nessuno", "Solo ufficio acquisti", "Solo dopo il lavoro"],
                correct: 0,
                suggestion: "Verifica: DURC, iscrizione CCIAA, assicurazioni, formazione, DVR, attrezzature conformi prima affidamento lavori."
            },
            {
                question: "Qual è la sanzione per mancata elaborazione DVR?",
                options: ["Arresto 3-6 mesi o ammenda 2.500-6.400€", "Richiamo", "Multa 200€", "Nessuna"],
                correct: 0,
                suggestion: "DVR: obbligo entro 90gg inizio attività; omissione = sanzione penale più grave per datore di lavoro."
            },
            {
                question: "Cosa deve contenere il libretto ponteggio?",
                options: ["Autorizzazione ministeriale, disegni, portate, istruzioni", "Solo marca", "Solo altezza", "Niente"],
                correct: 0,
                suggestion: "Libretto: autorizzazione Ministero, schemi montaggio, portate ammissibili, istruzioni montaggio/uso/smontaggio, manutenzione."
            },
            {
                question: "Chi può svolgere la sorveglianza sanitaria?",
                options: ["Medico competente con titolo e iscrizione", "Qualsiasi medico", "Infermiere", "Nessuno"],
                correct: 0,
                suggestion: "Medico competente: specializzazione medicina lavoro o equipollenti, iscrizione elenco Ministero Salute."
            },
            {
                question: "Qual è la periodicità della formazione generale lavoratori?",
                options: ["Una tantum all'assunzione + aggiornamento 6h/5anni", "Annuale", "Mai", "Solo prima volta"],
                correct: 0,
                suggestion: "Formazione: 4h generale una tantum + 4/8/12h specifica all'assunzione; aggiornamento 6h quinquennale."
            },
            {
                question: "Cosa deve essere presente per rischio rapina?",
                options: ["Valutazione, procedure, cassaforte, allarme, formazione", "Niente", "Solo telecamere", "Solo assicurazione"],
                correct: 0,
                suggestion: "Rischio rapina: valutazione, misure tecniche (allarmi/telecamere), organizzative (contante minimo), formazione comportamentale."
            },
            {
                question: "Chi deve autorizzare modifiche agli impianti?",
                options: ["Datore dopo verifica tecnica e aggiornamento DVR", "Chiunque", "Solo elettricista", "Nessuno"],
                correct: 0,
                suggestion: "Modifiche impianti: progetto tecnico, autorizzazioni, aggiornamento DVR, dichiarazione conformità, formazione utilizzatori."
            },
            {
                question: "Qual è l'altezza massima di accumulo bancali?",
                options: ["Secondo stabilità e portata scaffalature", "10 metri", "Non c'è limite", "2 metri"],
                correct: 0,
                suggestion: "Stoccaggio: rispettare portate scaffali, stabilità (5-6 bancali max a terra), accessibilità, normativa antincendio."
            },
            {
                question: "Cosa deve essere fatto prima di lavori su impianti elettrici?",
                options: ["Togliere tensione, verificare assenza, messa a terra, blocco", "Niente", "Solo avvisare", "Solo guanti"],
                correct: 0,
                suggestion: "5 regole sicurezza: 1)togliere tensione, 2)blocco richiusura, 3)verifica assenza, 4)messa a terra, 5)delimitazione."
            },
            {
                question: "Chi deve essere formato sui rischi interferenti?",
                options: ["Tutti i lavoratori esposti a interferenze", "Solo appaltatori", "Solo il datore", "Nessuno"],
                correct: 0,
                suggestion: "DUVRI: informazione/formazione su rischi interferenti, procedure coordinate, DPI, referenti, numeri emergenza."
            },
            {
                question: "Qual è la durata corso RSPP datore di lavoro rischio medio?",
                options: ["32 ore + aggiornamento 10h/5anni", "16 ore", "48 ore", "Non previsto"],
                correct: 0,
                suggestion: "RSPP datore: 16h rischio basso, 32h medio, 48h alto + aggiornamento 6/10/14h quinquennale."
            },
            {
                question: "Cosa deve essere presente per accesso disabili?",
                options: ["Rampe 8%, ascensori, servizi igienici, segnaletica", "Niente", "Solo rampa", "Solo cartello"],
                correct: 0,
                suggestion: "Accessibilità: rampe ≤8%, ascensori, bagni attrezzati, parcheggi riservati, segnaletica tattile, piano evacuazione."
            }
        ];
// ==========================================
// 🎯 SIMULATORE TEST - SCRIPT.JS COMPLETO
// ==========================================

// ========== PANIERE DOMANDE (ESEMPIO) ==========
const questionBank = [
    {
        question: "Chi deve autorizzare l'uso di attrezzature particolari?",
        options: ["Datore dopo verifica idoneità e formazione", "Chiunque", "Solo il preposto", "Nessuno"],
        correct: 0,
        explanation: "Attrezzature specifiche (carrelli, PLE, gru): autorizzazione scritta previo corso abilitante e verifica idoneità sanitaria."
    },
    // ✅ AGGIUNGI QUI TUTTE LE TUE DOMANDE CON STESSO FORMATO
];

// ========== VARIABILI GLOBALI ==========
let currentQuestions = []; // Domande del test corrente
let currentIndex = 0; // Indice domanda corrente
let userAnswers = []; // Risposte dell'utente
let timeLeft = 0; // Tempo rimanente
let timerInterval = null; // Intervallo timer
let testStartTime = null; // Timestamp inizio test
let testMode = 'sequenziale'; // Modalità test

// ========== AGGIORNA STATISTICHE ==========
function updateStats() {
    document.getElementById('totalQuestions').textContent = questionBank.length;
}

// ========== AVVIO TEST ==========
function startTest() {
    console.log('🚀 Avvio test...');
    
    // Verifica domande caricate
    if (questionBank.length === 0) {
        alert('⚠️ Nessuna domanda disponibile nel paniere!');
        return;
    }
    
    // Leggi parametri
    const numQuestions = parseInt(document.getElementById('numQuestions').value) || 50;
    testMode = document.getElementById('testMode').value;
    const timeLimit = parseInt(document.getElementById('timeLimit').value) || 60;
    
    console.log(`📊 Parametri: ${numQuestions} domande, ${timeLimit} minuti, modalità ${testMode}`);
    
    // ✅ Seleziona domande da questionBank
    currentQuestions = selectQuestions(numQuestions);
    
    if (currentQuestions.length === 0) {
        alert('⚠️ Errore nella selezione delle domande!');
        return;
    }
    
    console.log(`✅ ${currentQuestions.length} domande selezionate`);
    
    // Reset variabili
    currentIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(undefined);
    timeLeft = timeLimit * 60;
    testStartTime = Date.now();
    
    // Nascondi setup, mostra test
    document.getElementById('setupArea').classList.add('hidden');
    document.getElementById('testArea').classList.remove('hidden');
    
    // ✅ Avvia timer AUTOMATICAMENTE e mostra prima domanda
    startTimer();
    displayQuestion();
    updateQuestionMap();
    
    console.log('✅ Test avviato con timer automatico!');
}

// ========== SELEZIONE DOMANDE ==========
function selectQuestions(num) {
    let questions = [...questionBank]; // ✅ Usa questionBank
    
    // ✅ RANDOMIZZAZIONE PANIERE (se modalità casuale)
    if (testMode === 'casuale') {
        console.log('🔀 Randomizzazione paniere...');
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
    }
    
    // Prendi le prime N domande
    questions = questions.slice(0, Math.min(num, questions.length));
    
    // ✅ RANDOMIZZAZIONE OPZIONI per ogni domanda
    questions.forEach(q => {
        const correctAnswer = q.options[q.correct]; // Salva risposta corretta
        
        // Mescola opzioni
        for (let i = q.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
        }
        
        // Trova nuovo indice risposta corretta
        q.correct = q.options.indexOf(correctAnswer);
    });
    
    return questions;
}

// ========== TIMER ==========
function startTimer() {
    const timerDisplay = document.getElementById('timer');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Avviso ultimi 5 minuti
        if (timeLeft === 300) {
            timerDisplay.classList.add('text-yellow-400', 'animate-pulse');
            alert('⚠️ Restano 5 minuti!');
        }
        
        // Avviso ultimo minuto
        if (timeLeft === 60) {
            timerDisplay.classList.remove('text-yellow-400');
            timerDisplay.classList.add('text-red-500');
            alert('🚨 ULTIMO MINUTO!');
        }
        
        // Tempo scaduto
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('⏰ Tempo scaduto!');
            endTest();
        }
    }, 1000);
}

// ========== VISUALIZZAZIONE DOMANDA ==========
function displayQuestion() {
    console.log('🔥 displayQuestion() chiamata - Index:', currentIndex);
    
    const question = currentQuestions[currentIndex];
    
    if (!question) {
        console.error('❌ Domanda non trovata!');
        return;
    }
    
    console.log('📝 Domanda:', question.question);
    
    // Aggiorna numero domanda
    document.getElementById('questionNumber').textContent = currentIndex + 1;
    document.getElementById('totalQuestionsTest').textContent = currentQuestions.length;
    
    // Mostra testo domanda
    document.getElementById('questionText').textContent = question.question;
    
    // Mostra immagine se presente
    const imgContainer = document.getElementById('questionImage');
    if (question.image) {
        imgContainer.innerHTML = `<img src="${question.image}" alt="Immagine domanda" class="max-w-full h-auto rounded-lg shadow-lg">`;
        imgContainer.classList.remove('hidden');
    } else {
        imgContainer.classList.add('hidden');
    }
    
    // Genera opzioni
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-card p-4 rounded-lg border-2 border-gray-600 bg-gray-700/50 cursor-pointer transition-all hover:border-orange-500 hover:bg-orange-500/10';
        
        // Se già risposto, evidenzia
        if (userAnswers[currentIndex] === index) {
            optionDiv.classList.add('bg-orange-500/20', 'border-orange-500');
        }
        
        optionDiv.innerHTML = `
            <div class="flex items-start gap-3">
                <span class="font-bold text-orange-400">${String.fromCharCode(65 + index)}.</span>
                <span class="flex-1 text-white">${option}</span>
            </div>
        `;
        
        // ✅ AVANZAMENTO AUTOMATICO AL CLICK
        optionDiv.addEventListener('click', () => {
            selectAnswer(index);
            
            // Vai alla domanda successiva dopo 500ms
            setTimeout(() => {
                if (currentIndex < currentQuestions.length - 1) {
                    nextQuestion();
                }
            }, 500);
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Aggiorna pulsanti navigazione
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === currentQuestions.length - 1;
    
    // Aggiorna mappa domande
    updateQuestionMap();
    
    console.log('✅ Domanda visualizzata');
}

// ========== SELEZIONE RISPOSTA ==========
function selectAnswer(optionIndex) {
    console.log(`✅ Risposta selezionata: ${optionIndex}`);
    
    userAnswers[currentIndex] = optionIndex;
    
    // Rimuovi evidenziazione precedente
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('bg-orange-500/20', 'border-orange-500');
    });
    
    // Evidenzia opzione selezionata
    const selectedCard = document.querySelectorAll('.option-card')[optionIndex];
    selectedCard.classList.add('bg-orange-500/20', 'border-orange-500');
    
    // Aggiorna mappa
    updateQuestionMap();
}

// ========== NAVIGAZIONE ==========
function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        displayQuestion();
    }
}

function goToQuestion(index) {
    currentIndex = index;
    displayQuestion();
}

// ========== MAPPA DOMANDE ==========
function updateQuestionMap() {
    const mapContainer = document.getElementById('questionMap');
    mapContainer.innerHTML = '';
    
    currentQuestions.forEach((_, index) => {
        const button = document.createElement('button');
        button.className = 'w-10 h-10 rounded-lg font-bold transition-all';
        button.textContent = index + 1;
        
        // Stato: non risposta / risposta / corrente
        if (index === currentIndex) {
            button.className += ' bg-orange-500 text-white scale-110 shadow-lg';
        } else if (userAnswers[index] !== undefined) {
            button.className += ' bg-green-600 text-white';
        } else {
            button.className += ' bg-gray-700 text-gray-400 hover:bg-gray-600';
        }
        
        button.addEventListener('click', () => goToQuestion(index));
        mapContainer.appendChild(button);
    });
    
    // Aggiorna contatore risposte
    const answered = userAnswers.filter(a => a !== undefined).length;
    document.getElementById('answeredCount').textContent = answered;
}

// ========== FINE TEST ==========
function endTest() {
    clearInterval(timerInterval);
    
    // Calcola risultati
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === undefined) {
            unanswered++;
        } else if (userAnswers[index] === question.correct) {
            correct++;
        } else {
            wrong++;
        }
    });
    
    const score = ((correct / currentQuestions.length) * 100).toFixed(1);
    const timeElapsed = Math.floor((Date.now() - testStartTime) / 1000);
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    
    // Nascondi test, mostra risultati
    document.getElementById('testArea').classList.add('hidden');
    document.getElementById('resultsArea').classList.remove('hidden');
    
    // Mostra statistiche
    document.getElementById('finalScore').textContent = `${score}%`;
    document.getElementById('correctAnswers').textContent = correct;
    document.getElementById('wrongAnswers').textContent = wrong;
    document.getElementById('unansweredQuestions').textContent = unanswered;
    document.getElementById('timeElapsed').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Determina esito
    const outcomeElement = document.getElementById('testOutcome');
    if (score >= 80) {
        outcomeElement.textContent = '✅ PROMOSSO!';
        outcomeElement.className = 'text-4xl font-bold text-green-400';
    } else {
        outcomeElement.textContent = '❌ NON PROMOSSO';
        outcomeElement.className = 'text-4xl font-bold text-red-400';
    }
    
    // Genera revisione
    generateReview();
}

// ========== REVISIONE RISPOSTE ==========
function generateReview() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        const isUnanswered = userAnswer === undefined;
        
        const reviewCard = document.createElement('div');
        reviewCard.className = `p-6 rounded-lg border-2 ${
            isUnanswered ? 'border-gray-600 bg-gray-800/50' :
            isCorrect ? 'border-green-600 bg-green-900/20' :
            'border-red-600 bg-red-900/20'
        }`;
        
        reviewCard.innerHTML = `
            <div class="flex items-start gap-4 mb-4">
                <span class="text-2xl">${
                    isUnanswered ? '⚪' :
                    isCorrect ? '✅' : '❌'
                }</span>
                <div class="flex-1">
                    <h3 class="font-bold text-lg text-white mb-2">Domanda ${index + 1}</h3>
                    <p class="text-gray-300 mb-4">${question.question}</p>
                    
                    ${question.image ? `<img src="${question.image}" class="max-w-md h-auto rounded-lg mb-4">` : ''}
                    
                    <div class="space-y-2">
                        ${question.options.map((opt, i) => `
                            <div class="p-3 rounded ${
                                i === question.correct ? 'bg-green-600/30 border-2 border-green-500' :
                                i === userAnswer && i !== question.correct ? 'bg-red-600/30 border-2 border-red-500' :
                                'bg-gray-700/50'
                            }">
                                <span class="font-bold ${i === question.correct ? 'text-green-400' : 'text-gray-400'}">
                                    ${String.fromCharCode(65 + i)}.
                                </span>
                                <span class="text-white ml-2">${opt}</span>
                                ${i === question.correct ? ' <span class="text-green-400 font-bold">✓ CORRETTA</span>' : ''}
                                ${i === userAnswer && i !== question.correct ? ' <span class="text-red-400 font-bold">✗ TUA RISPOSTA</span>' : ''}
                            </div>
                        `).join('')}
                    </div>
                    
                    ${!isCorrect && question.explanation ? `
                        <div class="mt-4 p-4 bg-blue-900/30 border-l-4 border-blue-500 rounded">
                            <p class="text-sm text-blue-200"><strong>💡 Spiegazione:</strong> ${question.explanation}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
        
        reviewContainer.appendChild(reviewCard);
    });
}

// ========== RESET TEST (RIPETI STESSO TEST) ==========
function repeatTest() {
    clearInterval(timerInterval);
    
    // Reset variabili MA mantieni le stesse domande
    currentIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(undefined);
    
    const timeLimit = parseInt(document.getElementById('timeLimit').value) || 60;
    timeLeft = timeLimit * 60;
    testStartTime = Date.now();
    
    // Torna al test
    document.getElementById('resultsArea').classList.add('hidden');
    document.getElementById('testArea').classList.remove('hidden');
    
    // Riavvia
    startTimer();
    displayQuestion();
    updateQuestionMap();
}

// ========== GENERA NUOVO TEST ==========
function generateNewTest() {
    clearInterval(timerInterval);
    
    // Torna al setup
    document.getElementById('resultsArea').classList.add('hidden');
    document.getElementById('setupArea').classList.remove('hidden');
    
    // Reset completo
    currentQuestions = [];
    currentIndex = 0;
    userAnswers = [];
    timeLeft = 0;
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 App inizializzata');
    
    // ✅ Aggiorna stats con questionBank
    updateStats();
    
    // ✅ POPUP DISCLAIMER OBBLIGATORIO
    const startBtn = document.getElementById('startTestBtn');
    const modal = document.getElementById('disclaimerModal');
    const acceptBtn = document.getElementById('acceptDisclaimer');
    const cancelBtn = document.getElementById('cancelDisclaimer');
    
    startBtn.addEventListener('click', () => {
        console.log('✅ Click START');
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    });
    
    acceptBtn.addEventListener('click', () => {
        console.log('✅ Disclaimer accettato');
        modal.classList.add('hidden');
        modal.style.display = 'none';
        startTest(); // ✅ Timer parte automaticamente qui
    });
    
    cancelBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    });
    
    // Navigazione
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('prevBtn').addEventListener('click', prevQuestion);
    document.getElementById('endTestBtn').addEventListener('click', () => {
        if (confirm('⚠️ Vuoi terminare il test?')) {
            endTest();
        }
    });
    
    // ✅ 2 PULSANTI FINALI
    document.getElementById('repeatTestBtn').addEventListener('click', repeatTest);
    document.getElementById('newTestBtn').addEventListener('click', generateNewTest);
    
    console.log('✅ Event listeners registrati');
});
