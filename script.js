// ========================================
// 🐢 CARPISINA AI - JAVASCRIPT
// Sistema chat e risposte
// ========================================

const messages = document.getElementById("messages");
const input = document.getElementById("userInput");


// ========================================
// FUNZIONE RISPOSTE DI CARPISINA
// ========================================

function reply(t) {

    // Trasforma tutto in minuscolo
    t = t.toLowerCase();


    // ========================================
    // 🐢 DOMANDE SU CARPISINA
    // ========================================

    if (
        t.includes("che cosa è carpisina") ||
        t.includes("cosa è carpisina") ||
        t.includes("cos'è carpisina") ||
        t.includes("cos e carpisina")
    ) {
        return `
        🐢 Carpisina è l'assistente digitale di PixelDrop!
        
        È stata creata per aiutare gli utenti con domande su:
        
        🎮 Gaming
        🖥️ Informatica
        ⚙️ Hardware
        💻 Software
        🌐 Tecnologia
        
        Scrivimi una domanda e proverò ad aiutarti!
        `;
    }


    // ========================================
    // 💬 COME SI USA CARPISINA
    // ========================================

    if (
        t.includes("come si usa carpisina") ||
        t.includes("come funziona carpisina") ||
        t.includes("usare carpisina")
    ) {
        return `
        💬 Usare Carpisina è semplicissimo!
        
        1️⃣ Scrivi la tua domanda nella chat.
        2️⃣ Premi il pulsante di invio.
        3️⃣ Carpisina analizzerà la domanda.
        4️⃣ Riceverai una risposta.
        
        Puoi chiedermi informazioni su gaming, PC, tecnologia e molto altro! 🐢
        `;
    }


    // ========================================
    // 🆓 CARPISINA È GRATUITA
    // ========================================

    if (
        t.includes("carpisina è gratuita") ||
        t.includes("carpisina e gratuita") ||
        t.includes("carpisina gratis") ||
        t.includes("costa carpisina") ||
        t.includes("carpisina è a pagamento")
    ) {
        return `
        🆓 Sì! Attualmente Carpisina è completamente gratuita.
        
        L'obiettivo di PixelDrop è rendere la tecnologia e l'assistenza
        digitale più accessibili a tutti.
        `;
    }


    // ========================================
    // ⚠️ CARPISINA PUÒ SBAGLIARE
    // ========================================

    if (
        t.includes("carpisina può sbagliare") ||
        t.includes("carpisina puo sbagliare") ||
        t.includes("carpisina sbaglia") ||
        t.includes("puoi sbagliare")
    ) {
        return `
        ⚠️ Sì, Carpisina può commettere errori.
        
        Come ogni assistente digitale o intelligenza artificiale,
        alcune informazioni potrebbero essere incomplete o non aggiornate.
        
        Per decisioni importanti consigliamo sempre di verificare
        le informazioni da fonti affidabili. 🐢
        `;
    }


    // ========================================
    // 🌌 COME È NATO PIXELDROP
    // ========================================

    if (
        t.includes("come è nato pixeldrop") ||
        t.includes("come e nato pixeldrop") ||
        t.includes("come è nato pixel drop") ||
        t.includes("come e nato pixel drop") ||
        t.includes("nato pixeldrop")
    ) {
        return `
        🌌 PixelDrop nasce dalla passione per il mondo digitale,
        il gaming e la tecnologia.
        
        L'idea è quella di creare uno spazio moderno dove le persone
        possano trovare informazioni, supporto e strumenti utili.
        
        Da questa idea è nata anche Carpisina 🐢,
        l'assistente digitale della community!
        `;
    }


    // ========================================
    // 🚀 OBIETTIVO DI PIXELDROP
    // ========================================

    if (
        t.includes("obiettivo di pixeldrop") ||
        t.includes("obiettivo pixel drop") ||
        t.includes("scopo di pixeldrop") ||
        t.includes("cos'è pixeldrop")
    ) {
        return `
        🚀 L'obiettivo di PixelDrop è creare una community
        dedicata al mondo digitale.
        
        Un luogo dove trovare:
        
        🎮 Contenuti sul gaming
        🖥️ Guide informatiche
        ⚙️ Consigli hardware
        💻 Aiuto con software
        🐢 Supporto tramite Carpisina
        
        Il progetto è in continua evoluzione!
        `;
    }


    // ========================================
    // 🔮 FUTURO DI PIXELDROP
    // ========================================

    if (
        t.includes("nuove funzionalità") ||
        t.includes("futuro di pixeldrop") ||
        t.includes("aggiornamenti pixeldrop")
    ) {
        return `
        🔮 PixelDrop è un progetto in continua evoluzione!
        
        In futuro potrebbero arrivare nuove funzionalità,
        miglioramenti per Carpisina e nuovi strumenti
        dedicati alla community.
        
        Resta sintonizzato! 🚀
        `;
    }


    // ========================================
    // 🎮 MIGLIORE SCHEDA VIDEO 1080P
    // ========================================

    if (
        t.includes("migliore scheda video") ||
        t.includes("scheda video per 1080p") ||
        t.includes("gpu per 1080p")
    ) {
        return `
        🎮 Per il gaming in 1080p ci sono diverse ottime schede video.
        
        La scelta dipende soprattutto da:
        
        💰 Budget
        🎮 Giochi utilizzati
        🖥️ FPS desiderati
        ⚙️ Componenti del PC
        
        Se mi dici il tuo budget posso aiutarti
        a scegliere una GPU più adatta!
        `;
    }


    // ========================================
    // ⚡ COME AUMENTARE FPS
    // ========================================

    if (
        t.includes("aumentare gli fps") ||
        t.includes("aumentare fps") ||
        t.includes("più fps") ||
        t.includes("piu fps")
    ) {
        return `
        ⚡ Per aumentare gli FPS puoi provare:
        
        1️⃣ Aggiornare i driver della scheda video.
        2️⃣ Chiudere programmi inutili.
        3️⃣ Ridurre alcune impostazioni grafiche.
        4️⃣ Controllare le temperature del PC.
        5️⃣ Attivare tecnologie come DLSS o FSR se disponibili.
        
        Dimmi che gioco usi e le specifiche del PC
        e posso darti consigli più precisi! 🎮
        `;
    }


    // ========================================
    // 🪟 FORMATTARE WINDOWS
    // ========================================

    if (
        t.includes("formattare windows") ||
        t.includes("formattare windows 11") ||
        t.includes("reinstallare windows")
    ) {
        return `
        🪟 Per formattare Windows devi fare attenzione
        perché potresti perdere i tuoi file.
        
        Prima di iniziare:
        
        💾 Fai un backup dei file importanti.
        🔑 Controlla di avere le credenziali necessarie.
        ⚡ Assicurati che il PC non si spenga.
        
        Se vuoi posso spiegarti passo passo
        come reinstallare Windows 11.
        `;
    }


    // ========================================
    // 🚀 BUILD GAMING
    // ========================================

    if (
        t.includes("build da gaming") ||
        t.includes("build gaming") ||
        t.includes("pc da gaming") ||
        t.includes("configurazione gaming")
    ) {
        return `
        🚀 Per creare una buona build da gaming servono
        componenti equilibrati.
        
        I più importanti sono:
        
        🧠 CPU
        🎮 Scheda video
        ⚡ RAM
        💾 SSD
        🔌 Alimentatore
        ❄️ Raffreddamento
        
        Dimmi il tuo budget e i giochi a cui vuoi giocare
        e posso aiutarti a progettare una configurazione!
        `;
    }


    // ========================================
    // 🧠 RAM PER GAMING
    // ========================================

    if (
        t.includes("quale ram") ||
        t.includes("ram per gaming") ||
        t.includes("migliore ram")
    ) {
        return `
        🧠 Per il gaming moderno:
        
        • 16 GB → buon punto di partenza
        • 32 GB → ottima scelta per maggiore margine
        • 64 GB → utile soprattutto per lavori pesanti
        
        È importante controllare anche compatibilità,
        frequenza e tipo di RAM supportato dalla scheda madre.
        `;
    }


    // ========================================
    // 🛡️ ERRORE IN UN GIOCO
    // ========================================

    if (
        t.includes("errore in un gioco") ||
        t.includes("errore gioco") ||
        t.includes("gioco non funziona") ||
        t.includes("crash gioco")
    ) {
        return `
        🛠️ Per aiutarti a risolvere un errore ho bisogno
        di qualche informazione.
        
        Scrivimi:
        
        🎮 Nome del gioco
        ❌ Messaggio di errore completo
        🖥️ Sistema operativo
        ⚙️ Componenti del PC
        
        Con queste informazioni posso provare a capire
        meglio il problema!
        `;
    }


    // ========================================
    // 🔧 PROBLEMI GENERICI
    // ========================================

    if (
        t.includes("problema") ||
        t.includes("errore") ||
        t.includes("non funziona")
    ) {
        return `
        🔧 Posso provare ad aiutarti!
        
        Descrivimi meglio il problema e dimmi:
        
        • Cosa stavi facendo?
        • Cosa succede esattamente?
        • Ci sono messaggi di errore?
        • Che dispositivo stai utilizzando?
        
        Più dettagli mi dai, meglio posso aiutarti! 🐢
        `;
    }


    // ========================================
    // 🤖 RISPOSTA PREDEFINITA
    // ========================================

    return `
    🐢 Bella domanda!
    
    Al momento posso aiutarti soprattutto con:
    
    🎮 Gaming
    🖥️ Informatica
    ⚙️ Hardware
    💻 Software
    🌐 Tecnologia
    🌌 PixelDrop
    
    Prova a spiegarmi meglio cosa vuoi sapere!
    `;
}


// ========================================
// AGGIUNGE UN MESSAGGIO ALLA CHAT
// ========================================

function add(text, type = "bot") {

    const message = document.createElement("div");

    message.className = "msg " + type;

    if (type === "bot") {

        message.innerHTML = `
            🐢
            <div>${text}</div>
        `;

    } else {

        const safeText = text.replace(/[&<>]/g, function(character) {

            const characters = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            };

            return characters[character];
        });

        message.innerHTML = `
            <div>${safeText}</div>
        `;
    }

    messages.appendChild(message);

    // Scroll automatico verso l'ultimo messaggio
    messages.scrollTop = messages.scrollHeight;

    return message;
}


// ========================================
// INVIO MESSAGGIO
// ========================================

function send(event) {

    event.preventDefault();

    const text = input.value.trim();

    if (!text) return;


    // Messaggio utente
    add(text, "user");

    input.value = "";


    // Messaggio caricamento
    const loading = add(
        "Carpisina sta pensando...",
        "bot"
    );

    loading.querySelector("div").style.fontStyle = "italic";


    // Simulazione elaborazione
    setTimeout(() => {

        loading.remove();

        add(
            reply(text),
            "bot"
        );

    }, 600);
}


// ========================================
// PULSANTI DOMANDE RAPIDE
// ========================================

function ask(question) {

    input.value = question;

    document
        .getElementById("chat")
        .scrollIntoView({
            behavior: "smooth"
        });

    input.focus();
}


// ========================================
// NUMERO UTENTI ONLINE DINAMICO
// ========================================

setInterval(() => {

    const online = document.getElementById("on");

    if (!online) return;

    const current = Number(
        online.textContent.replace(".", "")
    );

    const change = Math.floor(Math.random() * 7) - 3;

    online.textContent = Math.max(
        200,
        current + change
    );

}, 3500);