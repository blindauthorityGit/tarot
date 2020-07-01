const cards = [
    {
        name: "0 - Der Narr",
        thema: "Aufbruch",
        text:
            "Hier darfst Du auch einmal verrückt (ver-rücken!) spielen. Hier könnte das Chaos beginnen und eine neue Reise, mit leichtem Gepäcke, bevorstehen, vorausgesetzt Du bist bereit Dich darauf einzulassen. Es ist hier der Impuls am Kommen. Ein Teil kann unbeschwert sein, aber auch Unabhängigkeit wollen, es deutet auch auf einen Neubeginn hin.  Hier kannst Du neue Erfahrungen sammeln. Es geht aber auch darum einmal den Weg zu Deinem wahren ICH zu riskieren. Die Zahl Null steht hier für die Endlosigkeit und den ewigen Anfang.",
        kopf:
            "Achte auf Inkonsequenz, Mutlosigkeit, aber auch auf Bestechlichkeit.",
        background: "../img/0_narr.jpg",
        id: "narr",
        index: 0,
    },
    {
        name: "1 - Magie",
        thema: "Willenskraft",
        text:
            "Hier entsteht die Verbindung von Oben und Untern, die Macht und der Wille, werden zum Thema. Unabhängig sein und die Selbstgestaltung ist wesentlich. Es geht um ICH BIN und die Frage bin ich eine Seele in einem Körper oder ein Körper in einer Seele. Hier kommen die Impulse und Ideen mit denen die Möglichkeiten der eigenen Kreativität erkannt werden und in die Tat umgesetzt werden. wollen. Handeln, statt nur zu reagieren – ganz bewusst und mit Disziplin den eigenen Weg in die Tat umsetzen. Die Zahl Eins steht hier für Anfang und den Pioniergeist.",
        kopf:
            "Vorsicht vor Tricks, Manipulationen und Machtmissbrauch. Sich schwach denken.",
        background: "../img/1_magie.jpg",
        id: "magie",
        index: 1,
    },
    {
        name: "Zwei der Federn",
        thema: "Anspannung - den Blick schärfen",
        text:
            "Diese Karte will Deinen Fluss der ewigen Gedanken in die Ruhe bringen. Hier lähmen Dich die Probleme und Deine ewige Zweifelei. Es könnte sich eine gewisse Unbeweglichkeit eingestellt haben. Dein Leben besteht gerade aus Anspannung und Du bist labil. Vielleicht gibt es Grund zur Trauer oder ängstlichen Gedanken. Diese Karte lässt vermuten, dass die Gefühle keinen Ausdruck finden können. In Gedanken läuft das Karussell „soll ich oder soll ich nicht“, es zerreißt Dich fast. Am liebsten würdest Du einfach davon laufen. Es ist an der Zeit, den Dingen in die Augen zu blicken. Um für einen Augenblick das Gedankenkarussell zu beruhigen kann die Meditation hilfreich sein. Es kann das grübeln und zweifeln für eine Zeit in den Hintergrund rücken lassen, um dann den Mut zu aktivieren und Dich zum Handeln zu bringen. Nur das kann etwas verändern. In Beziehungen ist es an der Zeit die Dinge oder Gespräche nicht länger zu verschieben. Fasse Dich an der Hand und gehe mutig an. In der Arbeitswelt liegt es an Dir, aus der Passivität auszusteigen und nun mehr Entschlossenheit zu zeigen. Wage auch einmal etwas Neues.",
        kopf:
            "Diese Karte will Dich vor Selbstbetrug warnen, auch Täuschungen, egal ob Dir selbst gegenüber oder von außen. Gehe Dinge nicht unüberlegt an, aber lasse es nicht nur ein Gespenst Deiner Gedanken sein, sondern habe den Mut ins Handeln zu kommen. Dich unverbindlich aus der Affäre zu ziehen wird Dir nicht gelingen, auch Dinge nur oberflächlich anzugehen wird kein Ende herbeibringen.",
        background: "../img/2_federn.jpg",
        id: "federn",
        index: 2,
    },
    {
        name: "Zwei der Flammen",
        thema: "Abwägen, dann handeln",
        text:
            "Diese Karte dreht sich um Deinen Standpunkt und um neue Zielsetzungen. Beachte dabei Deine Talente und auch deine Visionen und Wünsche. Ideen werden neu formuliert und dann geht es ran an den Speck. Es ist Zeit Dinge umzusetzen. Es geht um das Auswählen und abwägen, eine Entscheidung will getroffen werden, hierzu bedarf es einer gewissen ruhe und Gelassenheit. Für Entscheidungen darf auch immer ein Kompromiss in Frage kommen, wenn Du Dich dazu nicht restlos von Deinen Zielen entfernst, bleibe Dir treu. In Beziehungen solltest Du darauf achten deine Klarheit und Würde nicht zu verlieren, aber trotzdem nicht mit dem Kopf durch die Wand zu gehen. Im Arbeitsbereich verlasse die Geduldszone und komme ins Handeln. Mit Verantwortung und Selbstbewusst kannst Du Deine innere Zerrissenheit nutzen und in ideenreiche Ziele umwandeln.",
        kopf:
            "Hier ist es eine Ermahnung, nicht in Lethargie zu verfallen, ebenso vergiss nicht, dass ein bestimmtes Maß an Konflikten dazugehört. Wenn Du hier nicht zügig handelst, dann wird jemand andere es für Dich machen. Lass Dich nicht von Deiner Komfortzone ablenken. Manche Ziele dienen eher Deiner Selbstgefälligkeit und manchmal ist Dein Handeln oberflächlich, was am Ende andere siegen lässt.",
        background: "../img/2_flammen.jpg",
        id: "flammen",
        index: 3,
    },
    {
        name: "2 - Hohepriesterin",
        thema: "Unbewusstes",
        text:
            "Hier entstehen Vision aus der Stille. Es geht um Verborgenes, alles was Geheimnisse birgt. Deine Geduld ist gefragt. Vertrauen auf die unbewussten Kräfte, also auf die eigene Intuition hören, dabei auf den richtigen Zeitpunkt warten, dann ist das Potenzial vorhanden zur Umsetzung. Sehen, ohne etwas oder jemanden zu beurteilen.",
        kopf:
            "Beachte die emotionalen auf und Abs. Passivität hält Dich auf. Oft unberechenbare Situation.",
        background: "../img/2_hoehepriesterin.jpg",
        id: "2_hoehepriesterin",
        index: 4,
    },
    {
        name: "2 - Kelche",
        thema: "Dein ist auch mein-mein ist auch Dein",
        text:
            "Diese Karte ist eine Begegnung der Versöhnung, es kann sich dabei um menschliche Beziehungen handeln aber auch um die Versöhnung mit Dir. Alles gehört Euch gemeinsam, es ist ausgeglichen. Hier darf die Harmonie nun wohnen. Aber es kann auch sehr gesellig, aber auf jedenfalls friedlich und partnerschaftlich zugehen. Diese Karte kann eine wundervolle Liebesbeziehung auf gleicher Höhe andeuten, aber auch eine neues sich annähern, ein begegnen unter Geleichberechtigten. Es ist an der Zeit einfach und mit geöffneten Herzen sich begegnen. Hier darfst Du zeigen, dass Du es gut meinst mit Dir und dem anderen. Es ist keine Zeit für falsche Scheue. Auch wird ein Handeln, das großzügig und offenen Herzens geschieht, hier gefragt sein. Es geht einfach um das Geben und Nehmen im Gleichgewicht. In Beziehungen werden sich hier alte Disharmonien auflösen und es ist die Zeit sich wieder in den Arm zu nehmen. Akzeptiere den anderen so wie er gerade eben ist und finde wieder Zeit sich mit den Herzensangelegenheiten Deines Gegenübers zu beschäftigen. Es ist auch eine gute Phase um neue herzliche und harmonische Partnerschaften aufzubauen, hier kannst Du die Augen und Ohren öffnen um dann Dein Herz sprechen zu lassen. Im Arbeitsleben ist es die Möglichkeit für die Zukunft sich in die Startposition zu begeben. Als geschickter Verhandler und Überzeuger, mit dem richtigen Stück Liebenswürdigkeit und Lebensfreude, wird es Dich zu neuen Verträgen führen und Deine Ideen können dann in die Tat schreiten.",
        kopf:
            "Diese Karte zeigt eine Trennung an, es kann mit Eifersucht und Neid zusammenhängen. Auch wenn Rache ins Spiel kommt, dann wird es hier ungemütlich. Hüte Dich selbst vor diesen Taten und auch Dich vor Entscheidungen zu drücken. Jegliche Art der Unfreundlichkeit ist zu vermeiden.",
        background: "../img/2_kelche.jpg",
        id: "2_kelche",
        index: 5,
    },
    {
        name: "2 - Münzen",
        thema: "Altes und Neues ins Gleichgewicht bringen",
        text:
            "Hier wirst Du erinnert, dass alles im Fluss sein soll. Du wirst aufgefordert, die Veränderungen und Schwankungen des Lebens einsichtig als etwas ganz Normales zu akzeptieren. Es geht darum, dass Du dich unbeschwert und leicht mit tiefem Vertrauen auf das Gelingen der veränderten Umstände einlässt mit offenen Herzen. Auch in Beziehungen sei für Veränderungen offen. Das einzige beständige ist der Wandel. Im Arbeitsbereich ist es mit Risikobereitschaft und Aktivität verbunden die Flexibilität zu integrieren. Bei Gruppenarbeiten solltest Du Dich aktiv beteiligen.",
        kopf:
            "Hier ruft die Gefahr durch Mutlosigkeit, den Leichtsinn und unselbständigen handeln. Und achte darauf, dass keine falschen Tatsachen vorgespielt werden.",
        background: "../img/2_muenzen.jpg",
        id: "2_muenzen",
        index: 6,
    },
    {
        name: "3 - Federn",
        thema: "Berührung und Schmerz",
        text:
            "Diese Karte zeigt einen notwendigen Schnitt an, der Dich von vergangenen Ängsten und Schuldgefühlen trennen kann. Auch Erinnerungen, die dich an altes Leiden und ängstliche Gedanken binden, werden hier getrennt. Hier leidet das Herz, jetzt ist es an der Zeit Dich von den emotionalen Verletzungen zu trennen und diesen Schmerz zu überwinden. Es kann sich auch um Enttäuschungen und tiefen Kummer handeln. Eine gewisse Schwermut begleitet Dich vielleicht gerade. Aber jetzt ist die Zeit Dich weder vor dem Konflikt, noch dem Schmerz ablenken zu lassen. Diese Erfahrungen sind wichtig um wieder für Dich einzustehen. In Beziehungen ist es an der Zeit alte sehr intime, aber trotzdem belastende oder spannungsgeladen Beziehungen zu prüfen, werde einen Augenblick zum eignen Beobachter. Hier ist nun die zeit dich aus der Angst zu befreien, dass Du zurückgewiesen werden könntest oder gar mit Liebesentzug bestraft wirst. Auch Streitigkeiten musst Du Dich mutig entgegen stellen. Im Arbeitsbereich wird es nicht leicht sein, aber entscheide Dich klar und eindeutig. Nimm keine Zwischenlösungen des lieben Friedens willens an, sondern schaue, dass es für Dich ein befriedigendes Ende finden kann.",
        kopf:
            "Diese Karte wird Selbsttäuschung zeigen und Dich vor Streitigkeiten warnen, oder gar Dir neue Feinde zu schaffen. Sie ermahnt Dich nicht im Affekt zu handeln. Auseinandersetzung wird nicht ausbleiben, flüchten wird es nicht vermeiden können und einem Konflikt wirst Du hier nicht aus dem Weg gehen können.",
        background: "../img/3_federn.jpg",
        id: "3_federn",
        index: 7,
    },
    {
        name: "3 - Flammen",
        thema: "Etwas Neues will geboren werden",
        text:
            "Diese Karte ruft nach Wachstum mit Belohnung oder Zufriedenheit. Es wird sich etwas erfüllen, auf jeden Fall will es sich entfalten. Hier kannst Du optimistisch sein, dass ein Abschluss gefunden wird. Die Aussichten sind gut, egal, ob Du am Anfang steht oder am Ende einer Angelegenheit. Auch während einer Phase wird es günstig aussehen für Dich. In einer kritischen Phase kannst Du jetzt neue Ideen und Aussichten bekommen. In Beziehungen ist es eine gute Zeit für die Zukunft die Weichen zu stellen. Auch darfst Du mit Unterstützung und Mut rechnen. Es ist eine Zeit der Liebe und sich in Höhe von Angesicht zu Angesicht zu begegnen. Im Arbeitsumfeld ist es eine Zeit für neue Anschlüsse, bleibe einfach offen. Es ist die Zeit, in der Du Deine Entscheidungen aus einer inneren Sicherheit treffen kannst. Hier ist die Basis für den soliden Erfolg, diese lässt sich auch gut erweitern.",
        kopf:
            "Jetzt achte gut darauf nicht zu erstarren oder vielleicht verantwortungslos zu handeln. Die Stimme nicht zu laut werden zu lassen um sich Gehör an falscher stelle zu verschaffen und gar dem Größenwahn sich zu verschreiben oder sich selbst maßlos erscheinen zu lassen. Sei bei Deinen Verhandlungen einsichtig. ",
        background: "../img/3_flammen.jpg",
        id: "3_flammen",
        index: 8,
    },
    {
        name: "3 - Die Herrscherin",
        thema: "Lebensfreude",
        text:
            "Aus der Mitte des Herzens, mit Hingabe und Kreativität handeln. Bei dieser Karte kannst Du die Sinnesfreuden entfalten, Deinen natürlichen Instinkten folgen und Deine Leidenschaften folgen. Mit Geduld und Gelassenheit kommst Du zu der realistischen Vorgehensweise. Es kann Wachstum und Entwicklung Deiner emotionaler, geistiger und finanzieller Möglichkeiten kommen. Die Zahl 3 steht hier für „Kreativität und Vielfältigkeit",
        kopf:
            "Mit Gleichgültigkeit ist kein vorwärtskommen. Es könnte Stagnieren. Achte darauf großzügig zu sein. ",
        background: "../img/3_herrscherin.jpg",
        id: "3_herrscherin",
        index: 9,
    },
    {
        name: "3 - Kelche",
        thema: "Wachstum – Zelebrieren – Teilen",
        text:
            "Diese Karte will Dich auffordern, dass es mehr gibt als nur EINE Partnerschaft. Es ist an der Zeit auch mit andern zu teilen, verlasse den intimen Bereich der vertrauten Begrenztheit der ZWEI. Hier werden neue Kontakte förmlich gefeiert. Es werden Grenzen eingerissen und die Geselligkeit zieht ein. Es wird getauscht im Sein, es gibt neue Rollen zu verteilen im Leben. Durch die Feier werden aus der Schwere die Leichtigkeit und die Ernsthaftigkeit verwandelt sich in Freude, alles will sich erneuern. Sorgen werden nicht verdrängt, sondern einfach vergessen. Ebenso steht es hier für eine Geburt, egal ob ein neues Leben das Licht der Welt erblicken wird, oder es um Dein neues ERLEBEN gehen wird. Auch steht alles auf fruchtbaren Boden, was gerade geboren werden will. Hier findet Heilung in Glück und Liebe zum Erfolg. Eine intensive Zeit wird es gerade, die pure Lebensfreude sein will und Dich in eine Ebene des reinen Glückes heben wird. Hier dürfen die wahren Gefühle sich nach oben strecken und endlich kann es Dich damit übergießen und total erfüllen. In der Gemeinschaft kannst Du Dich mit anderen an Gemeinsamkeiten erfreuen und zusammen glücklich und zufrieden genießen. Es ist gerade günstig einfach mal Danke zu sagen und zu leben. In Beziehungen darfst Du andere so nehmen, ohne sie zu verändern, wie sie eben sind und gleichzeitig auch noch auf ihre Bedürfnisse einstellen, was wiederum das Gleiche für Dich bringen wird. In Liebensdingen kannst Du Dich ganz hingeben und mitnehmen lassen, wenn es liebevoll und voller Leben ist für Dich. In der Arbeit kannst Du Deinen Erfolg nun feiern und Dich innerlich bedanken. Hier ist etwas zu Ende gebracht worden. Trotzdem kannst Du auch noch Deinem Drängen nachgeben und neue Gedanken in die Tat bringen. Aber es könnte auch gut sein, dass es eher um Deinen Einsatz in Sachen Ausgeglichenheit und Verständigung in Gruppen geht. Oder gar Dein sozialer Einsatz gefordert ist.",
        kopf:
            "Diese Karte ermannt Dich immer wieder an die Dankbarkeit zu denken und auch in die Handlung zu kommen. Und es geht um Dankbarkeit auf verschiedenen Ebenen. Hüte Dich davor aus den Vergnügungen nicht mehr in den Alltag zu finden, oder gar Dich selbst zu verlieren. Es braucht auch hier Disziplin wieder in den normalen Rhythmus einzutauchen. Und sei niemals zu Selbstsicher, dass es immer nur so weiter geht.",
        background: "../img/3_kelche.jpg",
        id: "3_kelche",
        index: 10,
    },
    {
        name: "3 - Münzen",
        thema: "Anfang, Anerkennung und belohnt werden",
        text:
            "Diese Karte zeigt Wohlstand und Erfolg an. Es kann auch um Wachstum und Ruhm gehen. Aber zuvor war es ein kräftezerrendes Erarbeiten. Mit Geschick und dem Verstand Einsatz gezeigt und nun die Belohnung erhalten. Achte darauf, dass Du auch nach der Be-Entlohnung nicht die angestrebten Ziele aus dem Auge verlierst. In Beziehungen geht es nun darum das Vertrauen weiter auszubauen und dabei aber auch Dir selbst treu zu bleiben. Im Arbeitsleben müssen Qualifikationen und Durchhaltevermögen gezeigt werden. Dann kann hier eine Beförderung oder auch dauerhafter finanzieller Erfolg folgen.",
        kopf:
            "Achte auf Fleiß und hüte Dich vor Unzuverlässigkeit. Ungeduld und verantwortungsloses Handeln wird anders belohnt. ",
        background: "../img/3_muenzen.jpg",
        id: "3_muenzen",
        index: 11,
    },
    {
        name: "4 - Federn",
        thema: "Rückzug-Reflektion",
        text:
            "Diese Karte zeigt den Rückzug, den Schutz und die Ruhe an, die Du benötigst. Es ist an der Zeit einen Raum der inneren Stille zu suchen. Es ist eine Phase der Besinnung und Selbstreflektion. Vielleicht auch die Neuorientierung mit der Prüfung was Du wirklich willst. Eine gewisse Erschöpfung zeigt sich und es kann einsam wirken. Jetzt ist die Zeit der Innenschau um den Geist wieder klar werden zu lassen. Du willst einfach nur den Rückzug aus der lärmenden und stressigen Umwelt. Es gibt einiges zu verarbeiten aus vergangen Tagen um dann eine Veränderung herbei zu rufen. Es mag sein, dass es Dich vielleicht in ein Schweigeretreat zieht. Deine Seele und auch Dein physischer Körper brauchen eine Auszeit. Es ist angesagt endlich wieder aufzutanken. In Beziehungen ist es nun angesagt Dich aus der Situation zurückzuziehen. Du bist genug mit Dir und Deiner Innenkehr beschäftigt. Im Arbeitsleben ist es ratsam Dich gerade nicht neuen Taten zu widmen. Abwarten wäre hier besser und die Ruhe walten lassen. Sei geduldig bis es neue Angebote gibt. Jetzt musst Du erst neue Reserven aufbauen. ",
        kopf:
            "Diese Karte warnt vor sinnlosen Aktivitäten, diese werden nur Deine Kräftevorrat leeren. Alle hektischen Gedanken sind sinnlos. Auch die Flucht und die Sehnsucht nach Erlösung wird das Gedankenkarussell nicht zur Stille bringen. Suhle Dich nicht in Unzufriedenheit und verzweifelter Suche nach dem Sinn dahinter. Resignation ist kein Stille der Erholung, die Du benötigen würdest.",
        background: "../img/4_federn.jpg",
        id: "4_federn",
        index: 12,
    },
    {
        name: "4 - Flammen",
        thema: "Den Himmel berühren – genieße Dein Leben",
        text:
            "Diese Karte ist die Freude und die Anerkennung, sei dankbar für alles was Dir der Alltag beschert. Das Leben will bejaht werden und nicht still stehen, auch wenn es gerade den Lohn dafür ausgibt. Denn wenn Du stehen bleibst, dann hast Du selbst die Handbremse gezogen. Zum gesunden Leben gehört der Optimismus und das Vergnügen, aber halte das Maß. Du darfst auch unbeschwert sein und Dich über harmonische Zeiten mit Deinen Lieben freuen. Es ist eine passende Zeit sich einer Clique oder einem Verein anzuschließen. Für gemeinsame Unternehmungen oder einfach mal mit Dir selbst was unternehmen. Gönne Dir etwas. In der Arbeit werden Dir Angebote oder die Hand gereicht, nimm es mit Freude an. Dein Selbstvertrauen und Dein Mut werden sich den Weg über die Kreativität suchen. Es könnten auch neue, eher sinnvolle Aufgaben sein, die sich anbahnen, bleibe offen.",
        kopf:
            "Durch Unsicherheit und Verschwendung wird es wird schwer gemacht. Undankbarkeit war noch nie ein gutes Zahlungsmittel, Wenn Du Dich nicht an Vereinbarungen hältst oder mit Partner arbeitest, lebst, die unzuverlässig sind, dann wir das genießen nicht stattfinden können. Sie bei aller Freude nicht leichtsinnig. ",
        background: "../img/4_flammen.jpg",
        id: "4_flammen",
        index: 13,
    },
    {
        name: "4 - Der Herrscher",
        thema: "Verantwortung",
        text:
            "Es fängt zuhause an und es geht darum, sich selbst zu organisieren. Oft beginnt es mit Chaos das die Erstarrung lösen kann. Es geht um die Entwicklung der inneren Stärke um Meister des eigenen Lebens zu werden. Dabei muss Geduld geübt werden und in die eigene Verantwortung gegangen werden. Die Zahl 4 steht hier für die Stabilität“",
        kopf:
            "Achte darauf nicht mit dem Kopf durch die Wand zu wollen. Ebenso Härte und Kälte des Herzens walten zu lassen. Rücksichtsloses handeln und egoistisches Handeln ist hier fehl am Platz.",
        background: "../img/4_herrscher.jpg",
        id: "4_herrscher",
        index: 14,
    },
    {
        name: "4 - Kelche",
        thema: "Frustration – Teilnahmslosigkeit",
        text:
            "Diese Karte weist Dich darauf hin, dass es darum geht, eine gewisse Langeweile oder Trägheit zu verlassen. Diese frustrierenden Momente, in denen einfach alles in Betracht kommt, es kann Ärger, Groll, Ängste oder einfach Unmut sein. Aber Du hast einfach keine Lust, Du willst gar nicht teilhaben, es fehlt an Antrieb oder auch an Auftrieb gerade im Augenblick auch nur irgendetwas zu verändern oder gar in Angriff zu nehmen. Es geht darum Deine Gefühle, Deine Unsicherheit darin, zu erkennen und nun die Verantwortung zu übernehmen. Im Moment das Gefühl wahrzunehmen! Wo ist es entstanden? Und was will ich nun damit machen? Festzustellen, inwieweit meine Gefühle mein Befinden und damit mein Leben beeinflussen. Öffnen endlich Dein Bewusstsein und verschließe Dich nicht weiter den Gefühlspaletten des Seins und kehre zurück in die Realität. Hier kann auch ein Hinweis auf eine Welt sein, die sich nur noch im „Space des Internets“ bewegt. Es ist an der Zeit zu erkennen, dass die Welt soviel zu entdecken hat, dass einfach Freude bieten kann und Du wieder am echten Leben mit Zufriedenheit teilhaben könntest. In Beziehungen ist es an Dir, Dich aus den Launen und den dunklen Kammern Deines Seins zu befreien. Gefühle musst Du ganz aus dem Außenbetrachten und erkennen, dass es nur eine Welle ist, die kommt und geht, aber Du nicht die Welle bist. Überall, wo Du auf menschliches Beisammensein triffst, ist es wichtig wieder Aufmerksamkeit zu zeigen und einfach Verständnis für die anderen und die Situation zu zeigen. Im Arbeitsleben ist es an der Zeit, dass Du Dich endlich wieder in Bewegung begibst. Du musst wieder lernen etwas durchzuhalten und auch mehr Verantwortung für Deine Arbeit zeigen. Es wird nur entlohnt, wer auch seine Pflicht erfüllt, sonst wird es am Ende zu ungewünschten Reaktionen kommen. Es ist angesagt wieder zu handeln. Es könnte auch sein, dass diese Krise Dich endlich anregt eine neue Sichtweise oder gar einen neuen Platz für Dich zu suchen.",
        kopf:
            "Diese Karte zeigt eindeutig Lustlosigkeit in Dir an. Nichts stellt Dich gerade wirklich zufrieden. Deine Denkweise muss sich öffnen, sonst wird es so weiterlaufen. Im und über Menschen bestimmt bei Dir gerade der Hass oder Du beginnst beleidigend zu werden. Deine Erwartungen an Dich und die Welt sind gerade nicht realistisch und können nicht umgesetzt werden. Du neigst zurzeit zu Launen und es ist an der Dir Dich Deinen Gefühlen zu stellen, dies mit Dir zu bereinigen und nicht ins außen zu tragen.",
        background: "../img/4_kelche.jpg",
        id: "4_kelche",
        index: 15,
    },
    {
        name: "4 - Münzen",
        thema: "Raum einnehmen",
        text:
            "Hier sind die Stabilität und das Bewahren zu erkennen. Es geht um Strukturen und sich organisieren. Aber auch um Stagnation und Unbeweglichkeit. Es könnten sich Verlustängste zeigen. Das Thema Sicherheit muss nun einen genährten Boden finden, der weder dich erstarren lässt, noch zum Wahn führt. Auch Veränderungen musst Du zulassen. Den Raum einnehmen, wo notwendig begrenzen oder aber auch Fixierungen lösen. In Beziehungen die offene und großzügige Seite kennenlernen. Sinnliche Genüsse einfach zulassen und die Selbstliebe fördern. Im Arbeitsbereich den Mut des Neuen aufbauen. Es geht darum neu oder anders zu denken, sich den Herausforderungen stellen. ",
        kopf:
            "Gefahr droht durch materille Abhängigkeiten, Festhalten an finanziellen und materillen macht Dich zum gefangenen, Geiz und gier nimmt Dir Deine Sicherheit. ",
        background: "../img/4_muenzen.jpg",
        id: "4_muenzen",
        index: 16,
    },
    {
        name: "5 - Federn",
        thema: "ergebnisloser Kampf – Zeit nachzugeben",
        text:
            "Diese Karte zeigt Konflikte und Machtkämpfe an. Es kann sich auch um rücksichtslose und gemeine Streitereien oder Umstände handeln. Alles wird gerade als demütigend oder feindselig empfunden. Du fühlst Dich eingeengt und begrenzt. Es ist an der Zeit dich dem Ganzen zu konfrontieren und allen ohne Kompromisse gegenüber zu stellen. In Beziehungen ist es an der Zeit, dass du begreifst, dass Du dich von konstruktiven Verbindungen lösen musst. Der Umgang mit der eigenen Kraft und der Macht darf hier nicht missbraucht werden. Es ist an Dir zu erkennen, dass es Grenzen gibt, die ganz und gar vernünftig sind. In der Arbeit gilt es sich dem hin zugeben was ist, schaue was ist machbar. Es muss neueingeschätzt werden und es sind neue Ziele notwendig.",
        kopf:
            "Diese Karte will Dich schützen rücksichtslosen Handeln und zerstörerischen Aktionen. Hüte Dich vor gewalttätigen Reaktionen. Mit Verbissenheit wirst Du kein Ziel erreichen. Manipulation und Rachsucht könnten Dich um Kopf und Kragen bringen. Alle negativen Emotionen, wie Wut, Zorn oder Neid werden sich doppelt auf Dich auswirken. ",
        background: "../img/5_federn.jpg",
        id: "5_federn",
        index: 17,
    },
    {
        name: "5 - Flammen",
        thema: "Durchboxen – Konflikt bereit",
        text:
            "Diese Karte zeigt an, dass es um Aggressionen oder einen Wettstreit geht. Es kann auch sein, dass Steine in Deinem Weg liege oder andere Widerstände sich zeigen. Oft sind es die falschen Selbstbilder gegen die Du in Konkurrenz gehst. Hier werden auch Grenzen überschritten, die zu Konflikten führen. Du wirst geprüft werden, denn ein Teil in Dir will der Sieger werden. Etwas will geklärt werden, was hier aber über den Widerstand in Dir geht. Es geht um Innen und um äußere Aspekte, hier ist Dein Mut gefragt, genauso, wie Dein Durchhaltevermögen. Es kann Kräfte zerrend sein, aber es wird nicht wirklich verletzen, sondern die Position klären. Es kann danach sein, wie an einem heißen Sommertag, wenn das Gewitter durchgezogen ist. In Beziehungen wirst Du durch verschiedene Meinungen, endlos fühlend, gehen. Beachte, dass Du nicht kompromisslos wirst. Jeder kleine Zankerei hat auch eine Versöhnung an sich, die Dir wieder Kraft geben kann. So ist das Leben eben. In den Arbeitsphasen ist es sehr anstrengend, Du hast Schwierigkeiten Deine Meinung zu vertreten. Es wird Angreifer geben und der Ring wird eröffnet. Es ist die Zeit Deine Interessen zu vertreten, dabei das gesunde Maß nicht überschreiten und an Deinen Zielen innerlich festhalten, wenn es im außen sich partout nicht durchsetzen lässt.",
        kopf:
            "Hier könnte eine gewisse Angst vor dem Versagen kommen. Auch auf Betrug lässt es sich hier schließen. Hinterlist und Verschlagenheit sind Dinge, die auf Dich zukommen könnten. Achte auch darauf es nicht zu bunt zu treiben. Und bei jedem Konflikt schaue darauf Deine Aggressionen im Zaum zu halten. ",
        background: "../img/5_flammen.jpg",
        id: "5_flammen",
        index: 18,
    },
    {
        name: "5 - Der Hierophant",
        thema: "Vertrauen",
        text:
            "Die Sinnsuche wird ein Thema sein, es geht um das Verstehen und das Selbstvertrauen, dabei die Gelassenheit und Überzeugung zu gewinnen. Höre auf Deine innere Stimme. Und vertraue Deinen Mitmenschen. Ebenso ist es wichtig Deinen Überzeugungen treu zu bleiben und glaube an den guten Ausgang. Die Zahl 5 steht hier für „Abenteuerlust und Freiheit“",
        kopf:
            "Es kann andeuten, dass Scheinheiligkeit und Rechthaberei Dich behindern. Achte drauf nicht Leichtgläubig zu sein.",
        background: "../img/5_hierophant.jpg",
        id: "5_hierophant",
        index: 19,
    },
    {
        name: "5 - Kelche",
        thema: "Trauer – Abschied nehmen",
        text:
            "Diese Karte will Dich ermuntern endlich alte Pfade zu verlassen. Hier darfst Du nun Abschied nehmen von immer und immer wieder kehrenden Enttäuschungen des Lebens. Du musst die Blickrichtung ändern um wieder in die Fülle des Lebens zurückzukehren. Vielleicht auch die dazugehörigen Gefühle nun verabschieden und es Dir wieder erlauben. Es wird Dich gerade noch einmal durch den Schmerz führen, es mag sich nach verlassen sein anfühlen und Diene Seele weint gerade die Tränen der Reinigung und des Schmerzes. Vielleicht bist Du auch betrogen worden oder eine Liebe hat sich als Fehler herausgestellt. Was es auch war und noch ein wenig sein mag, lass die Tränen fließen, denn diese werden dann das Herz wieder öffnen. Diese Art der Trauer wird Dich befreien können und Du kannst dann all diese Verletzungen und den Verlust verarbeiten. Durch die Abschiedsarbeit wirst Du wieder Zuversicht schöpfen können und einen Neuanfang mutig entgegen sehen. In Beziehungen ist es gerade wichtig den Blick tiefer zu werfen. Prüfe mit wem Du Dich binden willst, heißt es hier. Es kann wirklich hilfreich sein, wenn Du hier mit jemanden andern, der dir in Liebe und mit Unterstützung zur Seite steht, einmal die Situation durchleuchtest, bevor die Illusion Dein Berater ist. In der Arbeit hast Du immer noch Gedanken, die Dich an den Verlust oder die Enttäuschung erinnern und Du solltest beginnen diesen Gefühlen nicht länger die Oberhand zu überlassen. Schöpfe Mut aus erfolgreichen Zeiten, oder nimm Dir Vorbilder, um wieder in Deine Kraft und Dein Sein zu kommen.",
        kopf:
            "Diese Karte zeigt Deine Gefühle, die von Schuld und Verbitterung geprägt sind. Die Emotionen stimmen Dich immer noch tiefer und du neigst dazu Dich weiter in Dich zurück zu ziehen. Mit Deiner Haltung, die derzeit niemanden willkommen heißen will, wirst Du langsam immer mehr in die Schattenwelt gezogen. Wenn nichts mehr helfen sollte und Du den Weg nicht alleine erkennen kann, dann suche Dir professionelle Hilfe.",
        background: "../img/5_kelche.jpg",
        id: "5_kelche",
        index: 20,
    },
    {
        name: "5 - Münzen",
        thema: "Selbstzweifel überwinden",
        text:
            "Hier geht es um den Übergang aus der Erstarrung/Lähmung. Ein Teil will noch an der Ordnung und alten Sicherheit festhalten, aber das Unterbewusstsein beginnt Dich in das Leben, welchen die Veränderung ist, zu erinnern. Wandlung ist ein notwendiger Schmerz, der Dich in das Lebendig sein bringt. Hier sind Vertrauen in die eigene Geschicklichkeit und die Lebensfreude gefragt. Lasse Altes hinter Dir und glaube an Dich, das ist es womit die Karte Dich auffordern will. In Beziehungen ist es gerade als wäre die emotionalste tiefste Phase und die Seele in Not, dies kann nur durchdrungen werden, wenn Du den Dingen wirklich zu tiefst auf den Grund gehst, ohne Dich oder andere zu verschonen. Im Arbeitsleben geht es darum neue Möglichkeiten und andere Fähigkeiten zu entwickeln oder entdecken. Und auch hier heißt es „glaube an Dich“, denn der Glaube kann Berge versetzen. ",
        kopf:
            "Es könnten sich Gefühle von Trauer, fehlenden Lebensmut und fast schon der Wunsch nach einem anderen Leben zeigen. Hoffnungslose Phasen sind es in Deinen Gefühlen, aber denke daran „Glaube an Dich und es werden Wunder geschehen“ und schau, was Dich lähmt und lasse Dich ein auf die Transformation. ",
        background: "../img/5_muenzen.jpg",
        id: "5_muenzen",
        index: 21,
    },
    {
        name: "6 - Federn",
        thema: "Vernetzung – notwendige Änderungen",
        text:
            "Diese Karte will Dich auffordern verschiedenen Denkmuster auf einen Punkt zu bringen. Als Teil eines Netzwerkes bist Du in Abhängigkeiten und diese gilt es anzuerkennen. Es ist ein Punkt gekommen an dem du nun bereit bist von andern zu lernen und taugliche Informationen aufzunehmen. Hier ist ein bestimmter Wandel gerade im Gange. Es kann befreiend sein, sich von alten Dingen und umständen zu trennen. Es geht darum Deine eigenen Wege zu erkennen und dann zu entscheiden diese zu begehen. Es ist eine innere Ruhe notwendig um Trauer und Ängste hinter sich zu lassen. Sich von Sorgen zu bewusst zu befreien. Hier ist Dein neuer Optimismus gefragt, um dich dann mit ganzer Kraft zu lösen von alten Erlebnissen und auf neue Ufer einzulassen. In Beziehungen ist es nun ratsam Dich von den Fesseln der Erwartung zu befreien. Gerade jetzt bist Du es, die eigenen Wünsche entwickeln muss und versuchen soll diese verbal auszudrücken. In der Arbeit ist es an der Zeit Deine Selbstzweifel zu überwinden und mit mehr Sicherheit aufzutreten. Vertraue auf Dich und die Zukunft, wenn Du hier eine optimistische Haltung einnehmen kannst, dann wird es zur inneren Ruhe beitragen.",
        kopf:
            "Vermeide jeglichen destruktiven Gedanken, egal. Ob es sich nur um die Angst handelt oder depressive Gedanken. Diese Karte will Dich schützen vor Zweiflern und Selbstzweifel. Lege die Angst beiseite und frage Dich „was ist das Schlimmste was mir passieren kann“, dann wird es vielleicht leichter. Achte dabei immer darauf selbständig zu denken und zu handeln. Lass das ewige grübeln und halte nicht an alten Geschichten oder Handeln fest.",
        background: "../img/6_federn.jpg",
        id: "6_federn",
        index: 22,
    },
    {
        name: "6 - Flammen",
        thema: "Triumph des Moments",
        text:
            "Diese Karte zeigt einen Sieg an, Du verbindest Dich und die Gruppenenergie. Und damit gibt es eine neue Dynamik. Du wirst eine gewisse Befriedigung erleben durch den Erfolg und den Beifall den es gibt in dem Moment. Es könnte auch eine Beförderung anstehen, auf jeden Fall wird, was auch immer Du gerade getan oder gelassen hast, gewürdigt. Hier wurden die Hindernisse überwunden und nun geht es darum wieder neue Reiche zu erobern. Hinter Dir liegt eine Zeit des Verzichtes oder der Aufopferung, welche nun belohnt werden soll. Es ist Dir und Deinen Leistungen zu verdanken, dass Du nun zu einer friedlichen und freudigen Lebenseinstellung zurückfinden kannst. In Beziehungen steht diese Karte für Vertrauen zu Dir und das zu anderen, das Glück kehrt zurück. Wenn hier neue Partner kommen, dann liegt hier ein fruchtbarer Boden für eine neue Ebene einer Beziehung. Im Arbeitsleben könnte eine neue Phase kommen, die Dich aufsteigen lässt. Du kannst durch Motivation und Deine Begabungen anderen als Vorbild dienen. ",
        kopf:
            "Diese Karte will Dich ermahnen nicht mit dem was nun ist anzugeben oder gar nun die Hände in den Schoss zu legen und den lieben Gott die Arbeit machen zu lassen. Auch wird Arroganz und ein zu großes Ego Dir wohl kaum dienlich sein, achte auch darauf, mit wem Du dich einlässt. ",
        background: "../img/6_flammen.jpg",
        id: "6_flammen",
        index: 23,
    },
    {
        name: "6 - Kelche",
        thema: "Wahrheit oder Märchen",
        text:
            "Diese Karte ist eine Innenschau, handelt es sich gerade um Gefühle aus der Vergangenheit oder einer Rückschau in die Du Dich hineingibst. Hier tauchen auf einmal Gefühle aus langer Zeit, vielleicht aus Deiner Kindheit auf oder aber du bist gerade zu naiv um die Realität zu erkennen. Es ist angebracht alles kritisch und klar zu hinterfragen und nicht in alten Zeiten Deiner Gefühle zu verlieren. Hier zeigt sich, dass aus der Vergangenheit etwas nach Heilung ruft. Es kann die Arbeit mit den inneren Anteilen anzeigen oder auch die Wahl des Wortes durch Gebete oder Affirmationen. Es zeigt sich hier auch an, dass es um einen Abnablungsprozess geht, von wem oder was auch immer es gerade sein mag. Auch ist hier ein großes Bedürfnis nach Geborgenheit und einfach mal gehalten zu werden, umsorgt und geliebt, ohne gefallen zu müssen. Du darfst hier alle Erinnerungen, die Dich positiv stimmen hereinbitten und Dich einen Moment tragen lassen um wieder Mut zu fassen Dich neuen Beziehungen zu öffnen. Auch hier wirst Du aufgefordert etwas in Angriff zu nehmen, aus Dir herauszutreten und wieder selbständige Handlungen tätigen. In Beziehungen treffen wir hier auf Wünsche die uns in den sexuellen Genuss bringen sollen, es zeigt uns den Wunsch nach Berührungen und Vertrautheit. Aber auch, dass Du geborgen und sicher sein willst in allen Partnerschaften, auf die Du Dich einlassen willst. Aber am Ende wirst Du diese Gefühle und Gedanken nur in Dir selbst entwickeln können, egal was im Außen passiert. In der Welt der Arbeit und Selbständigkeit ist es an der Zeit Dich von sentimentalen Träumen zu verabschieden. Du hast es falsch eingeschätzt und nun lernst Du aus allem. Du bist bereit Dich wieder Neuem zu stellen, mit der Erfahrung nicht an Altem hängen zu bleiben. Stelle Dir konkrete Aufgaben und Ziele und setze diese Schritt für Schritt um.",
        kopf:
            "Diese Karte zeigt an, dass Du immer noch an alten Zöpfen hängst, lass die Erinnerungen der alten guten Zeit nun endlich einen Platz in einem Fotoalbum finden und kehre zum Leben zurück. Du bist vielleicht gerade dabei jemanden zu einem Idol zu erklären, der die Welt bereits verlassen hat und richtest Deine gesamte Aufmerksamkeit darauf aus. Was ist mit Deinem Leben dann? Wo liegt gerade Dein Focus in Deinem Leben, in der Vergangenheit oder im Hier und Jetzt, wo das Leben stattfindet? Ebenso kann diese Karte Dich darauf hin weisen, dass Dein Verhalten nicht gerade sehr erwachsen ist und Du gerade für Dein handeln und für Dich die Verantwortung weit weg schiebst. ",
        background: "../img/6_kelche.jpg",
        id: "6_kelche",
        index: 24,
    },
    {
        name: "6 - Die Liebenden",
        thema: "Entscheidung",
        text:
            "Bei dieser Karte geht es darum, Deine alte Haut abzulegen und alte Identität zu hinterfragen. Du wirst Dich mit dem tiefen „Nicht-Ich“ auseinandersetzen wollen. Es muss eine Entscheidung getroffen werden von größerer Reichweite, diese muss unabhängig und selbständig getroffen werden.",
        kopf:
            "Du könntest auf Unehrlichkeit treffen. Maßlosigkeit und Unentschlossenheit bringen es ins Wanken. ",
        background: "../img/6_liebenden.jpg",
        id: "6_liebenden",
        index: 25,
    },
    {
        name: "6 - Münzen",
        thema: "Geben und Nehmen",
        text:
            "Diese Karte will Dich animieren Dinge und Situationen aus einer anderen Perspektive zu betrachten. Es geht hier auch um Diplomatische Handlungen und das Geschick, oder die Raffinesse. Hier sind es oft Ziele, die Du noch einmal tiefer betrachten sollst, denn es neigt hier zu Heimlichkeiten, versteckte Informationen oder verstohlenen Handlungen. Achte auch darauf, dass Du nicht manipulativ in das Geschehen eingreifst. Was ist Deine Absicht und wie undurchsichtig sind die zu erwartenden Ergebnisse oder Komponenten? Auch steckt hier der Versuch sich den nicht so angenehmen Situationen heimlich zu entziehen dahinter. Es könnte sich auch um ein verschlagenes Ausweichmanöver handeln. Achte DU darauf, dass Deine Taten und Dein Denken auf Ehrlichkeit beruhen. Aber lerne auch, dass beim Einsatz von Raffinesse es nicht um Taten gehen muss, die unaufrichtig oder betrügerisch sind, sondern es im wahren um den Intellekt und die Schlauheit geht. Denn der ehrliche und aufrichte Spieler wird seinen Gewinn wirklich genießen können. Und je mehr Du jemand anderer sein willst, desto mehr werden Gedanken Dich in die falsche Richtung leiten. Achte auch auf alles, was mit man…. z.B. man darf nicht, man macht dies oder das….An was hältst Du hier fest, gib die inneren Feindbilder frei. In Beziehungen geht es darum niemanden hinter das Licht zu führen, weder Dich zu täuschen, noch die anderen, all Deine Taten sollten eine gute Basis haben. In der Arbeitswelt darfst Du nun mit Taktik und Diplomatie herangehen. Hier ist Raffinesse gefragt um Deine Ziele und Ideen umzusetzen. Aber achte auch bei wichtigen Aktionen genau auf die Klarheit der Dinge und der Menschen, denn hier ist Vorsicht geboten vor Betrug und Heimlichkeiten, die Dir dann Nachteile bringen könnten.",
        kopf:
            "Hüte Dich abhängig zu werden von anderen durch unselbständiges Handeln oder denken. Auch lasse Dich nicht einfach schnell und gedankenlos beeinflussen. Gefahr droht auch durch berechnendes Verhalten oder Selbstgefälligkeit.",
        background: "../img/6_muenzen.jpg",
        id: "6_muenzen",
        index: 26,
    },
    {
        name: "7 - Federn",
        thema: "die sich selbst erfüllende Prophezeiungen erkennen",
        text:
            "Hier ist Deine Großzügigkeit gefragt. Nächstenliebe und Freigiebigkeit ebenen den Weg zum Erfolg und Glück. Mit Hilfsbereitschaft und der Fürsorge kannst Du beschenken und wirst auch wieder beschenkt werden. Hier bist Du gefragt dich um das Wohlergehen der anderen einzusetzen und zu bemühen. Es geht aber nicht um die Oberflächlichen Dinge, sondern das was wirklich benötigt wird. Ebenso geht es darum in Beziehungen Dich unterstützen zu lassen und Hilfe anzunehmen. Lasse hier Dein Herz von Toleranz und Güte führen bei den Entscheidungen. Im Arbeitsleben kann es um Entscheidungen gehen, was Du nun wirklich brauchst um Dein Ziel zu erreichen und was Du abgeben kannst. ",
        kopf:
            "Diese Ermahnung geht um Betrug und Unehrlichkeit, entweder von Dir oder mit Dir. Falsch pokern kann Dich in Probleme bringen und auch danach die Dinge verschönern wird keinen Erfolg tragen. Sei Ehrlich und Aufrichtig. Hüte dich als Beistand von Intrigen und Verrat, alles kommt auf Dich zurück. Auch lästern und schlechtes Reden über andere behalte lieber bei Dir. ",
        background: "../img/7_federn.jpg",
        id: "7_federn",
        index: 27,
    },
    {
        name: "7 - Flammen",
        thema: "Ich lasse es mir nicht gefallen",
        text:
            "Diese Karte nun fordert Dich auf, stehe auf und stehe ein für Dich. Stelle Dich den Herausforderungen des Lebens, verteidige Dich, lasse Dir nicht alles gefallen. Mut zur Wut! Es geht um Dich und Deinen Selbstausdruck, höre auf Dich für alles und alle verantwortlich zu fühlen. Es kann sein, dass es ein Kampf wird, aber diese Auseinandersetzung solltest Du dich stellen. Es geht darum Deinen Willen und Deine eigene Meinung zu verteidigen. Es ist Dein Erfolg und diesen solltest Du diesmal nicht teilen. Es kann auch um den Einsatz einer guten Sache gehen. In Beziehungen geht es darum, dass Du nun dinge klären musst, lasse Dich nicht von den Launen oder der Dickköpfigkeit anderen ablenken. Es gilt, da musst Du nun durch. Im Arbeitsleben zeige einfach, dass man mit Dir auch diskutieren kann. Deine Handlungen sollten entschlossen sein und gib nicht kampflos auf. Resignation wird es noch verschlimmern. Es geht um Deine Wege, die kann kein anderer für Dich gehen. ",
        kopf:
            "Diese Karte warnt vor innerer Härte, die sich nach außen bewegt und vielleicht sogar zerstört. Achte auf willkürliche Handlungen. Alles was unbeweglich ist, könnte eine Gefahr darstellen. Mutlosigkeit und Rücksichtslosigkeit sind Deine Gegner, die Du nicht bezwingen kannst. Jeder Kampf darf nicht zur Verbissenheit werden, an einem Punkt gibt es einen Gewinner und das musst auch Du akzeptieren.",
        background: "../img/7_flammen.jpg",
        id: "7_flammen",
        index: 28,
    },
    {
        name: "7 - Kelche",
        thema: "Illusion und Desillusion",
        text:
            "Diese Karte zeigt eindeutig eine Gefahr an, es könnte sich darum handeln, dass Du einer Täuschung unterliegst, diese kann von außen kommen, aber es kannst auch Du selbst Dich täuschen, weil es einfach zu schön wäre, wenn es so käme. Verliere Dich nicht in der Träumerei und den Hirngespinsten Deines Selbst. Der schönste Traum lässt den trägen und immer wieder kehrenden Alltagstrott nicht verwandeln. Hier ist nun Dein gesunder Menschenverstand gefragt, was ist es was Du Dir da so wünscht, dass Du der Realität entfliehst und wovor entfliehst Du denn? Was ist denn so langweilig an Deinem Leben? Diese Karte kann aber auch eine Verführung bedeuten in Welten in denen es aus der Realität herausführt, es kann ein Zeichen für Bewusstseins verändernder Drogen sein oder auch für Computerspiele im Space der virtuellen Welt. In Beziehungen geht es darum den Werten und Meinungen anderer keine Bedeutung beizumessen, sich nicht in die Irre leiten lassen. Oder gar sich selbst zu täuschen und die eigene Wahrnehmung nicht zu akzeptieren. Alle Arten von Beziehungen wollen hier in das Licht gerückt werden und müssen genau betrachtet werden, damit keine Illusion gewinnen kann. Es ist oft eine Kehrtwende oder eine Umwälzung notwendig um nicht dem falschen Zauber zu unterliegen. In der Arbeit musst Du diszipliniert und mit System an die Sachen ran gehen. Es wird eine Weile Geduld erfordern, bis sich einiges zum Bessern entwickeln wird, oder Dir die Dinge wieder leichter fallen. Achte darauf mit Menschen Deines Vertrauens in einem Team zu arbeiten.",
        kopf:
            "Diese Karte zeigt, dass Deine Zukunftsschmiede gerade eher einem Luftschloss gleicht und wohl eher dazu dient, Dich aus der Realität flüchten lässt, die Dir gerade so gar nicht schmeckt. Achte darauf nicht irgendwelchen Süchten zu verfallen, die ein Bewusstsein verändern oder Dir helfen die Realität nicht wahr zu nehmen, Dich von Deinen Gefühlen trennen oder Dich gar orientierungslos machen werden. Es wird schwer werden hier den Weg zu rück zu finden ohne fremde Hilfe. Es könnte sich auch um Dein nicht vorhandenes Interesse am Weltgeschehen drehen und auch am Geschehen in Deinem Leben und im Leben Deiner Liebe. Und zuletzt versuche aufrichtig zu sein mit Dir und den anderen.",
        background: "../img/7_kelche.jpg",
        id: "7_kelche",
        index: 29,
    },
    {
        name: "7 - Münzen",
        thema: "Das Tun im nicht tun",
        text:
            "Geduld und Gelassenheit ist hier gefragt. Nicht eingreifen und sich einfach auf dem Wachstume, der innerlich und äußerlich sich entfalten will, einlassen. Schritt für Schritt ist hier angesagt, um den richtigen Augenblick zu nutzen. Beziehungen haben jetzt einen Punkt erreicht, wo sie zu beständigen Freundschaften reifen. Im Arbeitsbereich darf nicht überstürzt werden, aber immer achtsam bleiben, wann die passende Chance da ist um ergriffen zu werden. ",
        kopf:
            "Hier kommt Stagnation, Verluste durch Unachtsamkeit oder Langeweile oder gar Unzufriedenheit. Es könnte auch eine zu große Erwartungshaltung alles behindern.",
        background: "../img/7_muenzen.jpg",
        id: "7_muenzen",
        index: 30,
    },
    {
        name: "7 - Wagenlenker(in)",
        thema: "Mut",
        text:
            "Es erfordert Mut, weit zurück zu blicken. Es kann zu unterschiedlichen Emotionen kommen, dabei musst Du mit Deinen Wünschen und Visionen umgehen. Du musst für Deine Vision einstehen und aktiv bereit sein. Zuvor jedoch ist es notwendig Dich mit Deinen eigenen inneren Widersprüchen auseinander zu setzen. Manchmal ist dazu ein wenig Risiko notwendig, dass Du eingehen musst. Bleibe dabei für Neues und die ein oder andere Überraschung offen. Die Zahl 7 steht hier für „Feinfühligkeit und den Verstand“",
        kopf:
            "Hüte dich vor übertriebenes Geltungsbedürfnis und der Selbstüberschätzung. Rücksichtsloser Egoismus kann alles zerstören. Der falsche Weg kann in die Depression führen.",
        background: "../img/7_wagenlenkerin.jpg",
        id: "7_wagenlenkerin",
        index: 31,
    },
    {
        name: "8 - Federn",
        thema: "Eigenen Schatten überwinden",
        text:
            "Diese Karte bittet Dich den Augenblick aus einer anderen Perspektive zu sehen. Es kann der Beobachter sein, der wie ein Adler in der Höhe alles wahrnimmt und die Emotionen nicht in sich kochen lässt. All die Themen, die in Dir gerade die Schatten rufen, sei es die Angst, Einsamkeit oder gar ein Gefühl von ausgeliefert sein, will gesehen und transformiert werden. Hier geschieht alles nur in den Gefühlen, diese aber sind lähmend und bedrückend. Die positiven Aspekte werden ganz und gar weg gedrückt, Du bist fast blind für alles was Deine eigenen Wünsche und Regungen angeht. Hier ist es angesagt, die Erstarrung zu verlassen. Keine Entscheidung ist die Entscheidung weiter zu leiden, also warum triffst Du keine neue positive Entscheidung. Im Leben kann man keine Erfolgsgarantie bekommen. Hier ist es ratsam den Verstand und den Emotionen gleiche Bedeutung anzuerkennen und dann eine Entscheidung heraus aus dem Schatten zu treffen. Wenn Nötig mit fremder Hilfe, denn es benötigt auch einen sofortigen Plan für die Umsetzung, um nicht wieder Rückfällig zu werden. Beziehungen fühlen sich oft wie Gefängnisse an, erkenne wer Dir wirklich die Freiheit raubt. ",
        kopf:
            "Diese Karte will, dass Du nicht in die Unzufriedenheit eintauchst, auch Dich selbst immer wieder zu bemitleiden oder gar den inneren Groll zu hegen. Es könnte hier zu Umständen führen, die Dich verwirren und Du Dich isolieren willst oder so fühlst, es geht aber darum Dir selbst zu vergeben und eine neue Sichtweise einzunehmen. Achte auch stehts drauf, dass Du keine Ketten um Deine Seele legst, damit niemand Dich verletzen kann. Denn alles was Du siehst, das bist auch Du.",
        background: "../img/8_federn.jpg",
        id: "8_federn",
        index: 32,
    },
    {
        name: "8 - Flammen",
        thema: "Konzentration und Inspiration, der Impuls des Neuen",
        text:
            "Diese Karte nun bringt eine neue Energie durch die Konzentration oder eine Inspiration aus Dir. Denn jetzt bist Du fast alles in Einem, die Power eines noch ruhenden Panthers, der gespannte Bogen aber auch die Sehne und der Pfeil. Es geht darum den Geist zur Ruhe zu bringen, alles auf einen Punkt, die Anspannung kaum halten zu können und dann wird alles zu einer Einheit und die Inspiration, der innere Impuls, der weiß, wann es heißt JETZT. Du bist hier aufgefordert aus dem Impuls die Entwicklung zu beurteilen, um dann Ergebnisse mit Hand und Fuß zu liefern. Hier geht es um den Fortschritt und das Entfalten in Deiner Kreativität mit der vollen Power aus Dir heraus. Es kann sich hier um Dinge und Entscheidungen von großer Tragweite handeln. In Beziehungen sei hellwach und stets auf der Hut, denn Überraschungen und stürmische Zeiten warten hier. Gib dem Gegenüber ein klares Zeichen, dass mit Dir nicht zu scherzen ist, Du stehst zu dem was Du von Dir gibst. In der Arbeitswelt, heißt es nun der Initiator zu sein. Du bist es der alles vorantreiben kann und die weisen Ratschläge geben wird. Dein Elan wird Projekte vorantreiben.",
        kopf:
            "Diese Karte ermahnt vor Langeweile und dem alten hinter herlaufen. Zweifel könnten Deine Pläne zu Nichte machen. Mit Dickköpfigkeit kann es zu Ärger und auch größeren Missverständnissen kommen. Lasse Dich von und durch niemanden frustrieren.",
        background: "../img/8_flammen.jpg",
        id: "8_federn",
        index: 33,
    },
    {
        name: "8 - Die Gerechtigkeit",
        thema: "Kraft - Leidenschaft",
        text:
            "Mit dieser Karte kommst Du in einen lebendigen Prozess, der für Gleichgewicht sorgen wird. Hier kommt ein tiefes unbewusstes Verständnis für die animalen Seiten der Psyche, welche angenommen und energetisch integriert werden wollen. Dein Lebensmut und Deiner Freude mit Ruhe und Kraft begegnen. Die Selbstbeherrschung ist die Begleitung um die Dinge in den Griff zu bekommen. Es erfordert Deine Risikobereitschaft und Dein Engagement. Du kannst Dein eigenes Können beweisen. Du kannst Erfolg erhalten, indem Du wohlwollende Worte findest für andere. Die Zahl 8 steht hier für „Ausstrahlung und Durchsetzungsvermögen“",
        kopf:
            "Größenwahn oder Hochmut kann alles zerstören. Ich bezogenen handeln wird Dich ablenken. Der eigene Wille mit Gewalt durch zu setzen, wird es erschweren.",
        background: "../img/8_gerechtigkeit.jpg",
        id: "8_gerechtigkeit",
        index: 34,
    },
    {
        name: "8 - Kelche",
        thema: "Altes trennen und die Balance gewinnen",
        text:
            "Diese Karte zeigt einen wirklichen Verlust und schmerzliche Gefühle an. Hier ist das bewusste sich abwenden gefragt und nun eine Balance zwischen agieren und reagieren zu finden. Jetzt ist ein genau hin spüren und hineinfühlen gefragt, bevor der nächste Schritt getan werden will. Es wir auch immer ein Teil von Dir erledigt werden müssen und ein anderer Teil wir von ganz alleine passieren. Hier ist ein so wertvoller Plan der gerade am Entstehen ist, dass es zukunftsweisend ist, was Du tust oder eben lässt. Hier musst Du ohne Gnade Abschied nehmen lernen und dabei alles Vergangene noch einmal durch Dich ziehen lassen um daraus Deine nächsten Schritte abzuwägen. Es wird wohl kaum ohne die Trauer und die Suche in Dir gehen. In Beziehungen wird es schmerzhaft und auch leidvoll sein, aber bei all dieser Wehmut halte bereits nun die Augen und Ohren wieder auf, denn es geht bereits ein neuer Weg auf und sei bereit neuen Menschen zu begegnen, mit denen Du auch Deinen eigenen Weg gehen darfst. In der Arbeitswelt wirst Du Dich von Deinen Konzepten trennen müssen. Alles was gerade Deine Motivation belastet oder einfach nur wenig Erfolg verspricht wirf über Board, egal, wie lange Du schon daran gearbeitet hast und wie viel Energie es Dich gekostet hat. Es können sonst die schönen neuen Dinge sich den Weg nicht bahnen.",
        kopf:
            "Diese Karte kann man erkennen, dass Deine Seele sich quält. Das dunkle Karussell Deines Geistes hat die Oberhand und bring immer und immer wieder diese Quälerei mit sich. Es kann sich in ständigem eigenem kritischem konstruktivem Gedanken zeigen, aber auch in Schuldgefühlen. Und letztendlich drängt Dich dies alles in die Passivität. Es ist an der Zeit zu erkennen, dass es sich hier um Gedanken aus Dir heraus handelt und es nur eine Person gibt, die das ändern kann und das bist Du. Es ist als würdest Du gerade Deine Form verlieren und es mag sein, dass es notwendig ist Dir eine Stütze zu suchen, jemanden der Dir Wege aufzeigt oder mit Dir an Deinen Lösungen arbeiten kann.",
        background: "../img/8_kelche.jpg",
        id: "8_kelche",
        index: 35,
    },
    {
        name: "8 - Münzen",
        thema: "Auf in die Arbeit und zum Erfolg",
        text:
            "Hier zeigt sich ein Anfang mit Begeisterung. Es benötigt Lerneifer und Anstrengung. Es ist ein Stück harte Arbeit mit einem dauerhaften Erfolg angesagt. Hier kann es dazukommen, dass Du auserwählt bist neue Fertigkeiten zu erlernen. Oder aber auch die inneren und äußeren Erfahrungen die Du erhalten hast mit Freude mit andern zu teilen, zum Wohle alle. Dabei solltest Du Dich immer an höheren und weisen Rat holen und erst dann mit der gebündelten Kraft loslegen. Beziehungen können hier gut ausgebaut werden und Du lernst diese zu pflegen. Du kannst nun gut für andere sorgen. Im Arbeitsbereich geht es darum den passenden Moment herauszufinden um dann wirklich Erfolg damit zu erreichen, weil Du Deine Fähigkeiten geschickt einsetzen kannst. ",
        kopf:
            "Achte drauf nicht zu schnell aufzugeben oder das Ruder abzugeben. Oberflächliches Arbeiten bringt keinen Erfolg. Faulheit und Resignation kann mit Geduld verwechselt werden.",
        background: "../img/8_muenzen.jpg",
        id: "8_muenzen",
        index: 36,
    },
    {
        name: "9 - Der/Die Alte",
        thema: "Reife-Abgrenzung",
        text:
            "Es kommt die Zeit der inneren Entwicklung und des freiwilligen Rückzuges. Für Entscheidungen benötigst Du Gelassenheit und Geduld in der Ruhe um Einsicht zu gewinnen. Bei den wichtigen Entscheidungen bist Du auf Dich gestellt. Gewinne Einsicht, was für Dich wirklich wichtig ist und höre dabei in Dein Herz. Es kann sich um eine spirituelle Reise oder auch um die Seelenreise handeln. Gehe an die Angelegenheit uneinvorgenommen heran. Die Zahl 9 steht hier für „Integrität – Intuition“",
        kopf:
            "Du kannst auf Verbitterung oder Einsamkeit stoßen. Menschen mit Angst vor Veränderungen stören die Entwicklung, ebenso wie die Überangepasstheit und Ignoranz.",
        background: "../img/9_alte.jpg",
        id: "9_alte",
        index: 37,
    },
    {
        name: "9 - Federn",
        thema: "Durch nicht-wahrnehmen töten – Belastung loslassen",
        text:
            "Diese Karte macht Dich aufmerksam, dass es an der Zeit ist die Dinge oder Verhaltensweisen unter die Lupe zu nehmen, egal, ob es der Schmerz der Abweisung, des Ausgrenzens oder sich Verlassen Fühlens, ist. Gehe genau an den Punkt, wo es schmerzt und schau ihn Dir an. Gehe auf das zu, was Dir Angst macht. Jeglicher Kummer, Zukunftsangst oder Alptraum wird unter Licht beleuchtet und verliert an Dunkelheit, aber nur mit Deiner Aktivität kannst Du den Kreislauf beenden, sonst bleibt Dir nur vollständig in Dein Leid einzutauchen und vielleicht sogar darin unter zugehen. Lasse die Gefühle zu und dann lasse los, es ist eine Entscheidung und ein kleiner Moment. Du wirst den Dingen kurz auf den Grund gehen und es mag schreckliche Bilder hervorrufen, aber es sind eben nur Bilder, vertreibe sie und sei wieder frei. In Beziehungen wird es sich um Schuldgefühle und andere negative Gedanken drehen. Vielleicht fühlst Du Dich im Stich gelassen und in einer Beziehung die eher einem Alptraum gleicht, als einer fruchtbaren Begegnung. Jedoch sind es auch hier Deine Gefühle und es ist an der Zeit, dass Du mir Dir liebevoll bist und dann damit ins Außen trittst. Vielleicht auch mit dem ein oder anderen wieder versöhnen solltest. Im Arbeitsleben beende das Karussell der Sorgen und Befürchtungen, schaue nach Erkenntnissen und was die Angelegenheit beenden könnte. Es geht darum den Mut wieder zuzulassen.",
        kopf:
            "Diese Karte möchte Dich daran erinnern, dass die Panik aus Dir kommt und auch Du der bist, der sie beenden kann. Auch wenn es nur Gedanken des Zweifels sind oder Du dir und anderen misstraust, schau was es an dem Anderen oder Dir Gutes gibt. Achte darauf, dass Du bei all dem nicht anfängst Dich von allem zurück zu ziehen und nur noch in Deiner Welt der Negativität festhängst. Ebenso warnt die Karte vor Hysterischen Anfällen, die alle nur auf der Gedankenwelt beruhen, die nicht die Realität ist, denn die Gedanken bauen auf Vergangen auf und stellen nicht die Gegenwart dar.",
        background: "../img/9_federn.jpg",
        id: "9_federn",
        index: 38,
    },
    {
        name: "9 - Flammen",
        thema: "Feuer der Heilung und Reifung",
        text:
            "Diese Karte zeigt ein großes Spektrum des Feuers. Das Feuer kann sowohl wärmen, als auch verletzen. Es zerstört und wärmt, wie es auch ein Symbol von Leidenschaft und Temperament ist. Mit dieser Karte kann es um Prüfungen und Widerständen im Leben einhergehen. Es ist nun an der Zeit diese zu bewältigen. Es besteht ein inneres Gefühl, dabei als Verlierer oder Verletzter hervorzugehen. Es ist an der Zeit auch die letzte Reserve herauszuholen um Dich den Aufgaben des Lebens mutig zu stellen. Deine inneren Einstellungen und Gedanken müssen gerade neu sortiert und kontrolliert werden. Es ist eine Zeit die eigenen Verletzungen zu erkennen und neues Gedankengut anzulegen. In Beziehungen musst Du deine Defensive aufgeben, es ist Zeit zu erkennen, dass gute Partnerschaften nur stattfinden, wenn Du in Einklang mit Dir selbst bist. Nimm manches einfach leichter und mit mehr Gelassenheit. Auch solltest Du lernen Dich offener zu geben, Deine Ängste der emotionalen Verletzungen und Dein falsches Schamgefühl darf endlich geheilt werden. Dies kann nur umgeschrieben werden, wenn Du Dich weiterhin verschlossen gibst. Im Arbeitsleben wird es nicht leichter werden, es kann sich noch verdichten, aber halte durch, bald wird es wieder einen Grund zum Durchatmen geben.",
        kopf:
            "Diese Karte zeigt Misstrauen und Verbitterung. Warum bist Du nur so streng mit Dir, sie fordert Dich auf, diese Seite anzusehen. Du könntest auf Unnachgiebigkeit von außen, aber auch in Dir, treffen. Bleibe in Bewegung, denn nur so kann etwas Neues und Besseres sich zeigen.",
        background: "../img/9_flammen.jpg",
        id: "9_flammen",
        index: 39,
    },
    {
        name: "9 - Kelche",
        thema: "Die Muschel mit der Perle",
        text:
            "Diese Karte zeigt, dass Du durch die anstrengenden Phasen gegangen bist. Hier hat Transformation stattgefunden, es kann sein, dass Schmerzen verwandelt wurden in Einsicht, Weisheit und Zufriedenheit. Jetzt ist es die Zeit sich zufrieden und genussvoll den Freuden des Seins hinzugeben. Du darfst in Dir und mit Dir zufrieden sein. Das Leben bietet den Reichtum und Du kannst es erkennen und anerkennen. Hier ist es einfach an der Zeit das leben frohgemutes und in aller Ruhe, total entspannt mit allen seinen Vorzügen zu genießen. Dein Herzblut darf ausgelebt werden und Du kannst Deinen Neigungen freien lauf lassen. Hier ist es gefragt alle Sinne zu befriedigen. In Beziehungen darfst Du Dich nun in den Freuden und der Heiterkeit wieder finden. Alles ist friedlich und es darf einfach mal richtig entspannt sein. Auch in geselligen Runden wird es für Dich vergnüglich sein. In der Arbeitswelt gibt es kaum besser Tage und auch die Chancen und Möglichkeiten die sich gerade bieten sind optimal. Sei zufrieden und gehe dafür einfach in die Dankbarkeit.  ",
        kopf:
            "Diese Karte sollst Du es vermeiden Dir Gedanken über Dein Glück und Dein sinnliches Leben in diesem Moment zu machen, denn das kann alles wieder zurückwerfen. Sei weder geizig noch gierig und teile doch einfach ein wenig von dem was Du alles im Überfluss hast. Wenn Du beginnst Angst hast es wieder zu verlieren und versucht Deinen Besitz festzukrallen, dann wir es kippen. Bleibe bei allem auch immer ein wenig spontan und halte nicht an der Schwere fest, es darf auch mal leicht gehen.",
        background: "../img/9_kelche.jpg",
        id: "9_kelche",
        index: 40,
    },
    {
        name: "9 - Münzen",
        thema: "Fülle im Verborgenen",
        text:
            "Es ist an der Zeit die Fülle und die Schätze Deines Lebens ans Licht zu bringen und diese zufrieden die Ernte einfahren. Ein Zustand der Leere ist die Voraussetzung um die Fülle zu erfahren. Es geht hier oft um den inneren Besitz und Wohlstand, aber auch um materielles Besitztum und das Glück daran. Hier ist die tiefe Zufriedenheit über den Lohn oder die Kreativität, wie die Selbständigkeit zu erkennen. Lasse Dir es von niemanden verderben. In Beziehungen sei aufgeschlossen und optimistisch und packe die alltäglichen Dinge mit der Herzenswärme an. Die Partnerschaft wird eine große Bereicherung und sorgt für Zufriedenheit. Andere unterstützen Dich mit Großzügigkeit und Du darfst den Erfolg einfahren. In der Arbeit hast Du gute Beziehungen und kannst auf Unterstützung setzen. Du triffst Entscheidungen aus der Mitte und bist damit sicher. ",
        kopf:
            "Hier liegt die Gefahr darin andere auszunutzen oder gar auszuspielen. Wenn Deine Gedanken auf unerreichbare Objekte oder auf das, was Du nicht hast, gerichtet sind, dann erlebst Du statt Fülle einen permanenten Mangelzustand. ",
        background: "../img/9_muenzen.jpg",
        id: "9_muenzen",
        index: 41,
    },
    {
        name: "10 - Federn",
        thema: "Stopp – nimm es so an, wie es ist",
        text:
            "Diese Karte zeigt Dir, dass Widerstand zwecklos ist. Aber auch, dass ein Ende des Schmerzes in Sicht ist, noch ist die Verzweiflung oder Erschöpfung anwesend. Aber die Gedanken, die diese Unruhe auslösten ebnen ab. Nun hast Du die Wahl und kannst endlich das Tal der Alpträume verlassen. Mit Deiner Kraft beginne nun wieder geistige Klarheit zu erreichen und lerne alte Denkprogramme und Verhaltensweisen zu unterscheiden, was ist Deins und was nur übernommen. Hier darf eine Desillusionierung stattfinden. Aber alles will hier bearbeitet und nicht bekämpft werden, es geht darum aus Fehlschlägen und Enttäuschungen zu lernen. Sich selbst nun aus der Hoffnungslosigkeit zu befreien. Wenn Du es akzeptieren kannst, dass Du in einer Sache nun eben keinen Erfolg hattest, oder der Verlierer bist, dann kann hier Heilung stattfinden und sich den negativen Gefühlen zurückziehen. In Beziehungen zeigt sich hier ein Ende, das nicht schmerzfrei gehen wird. Sollten hier Menschen aufeinandertreffen, die sich bewusster begegnen, dann kann es eine Chance sein, durch eine tiefgreifende Krise, sich neu auszurichten und ein neuer Lebensabschnitt kann beginnen. Im Arbeitsleben ist hier eine wirkliche Krise, es fühlt sich vernichtend an und kann auch neue Meilensteine setzen. Aber es kommt ein neuer Auftrag, wenn Du nicht wieder beginnst gegen die Geister zu kämpfen. Gehe in kleinen Schritten und mit Konzentration an neue Ufer heran. ",
        kopf:
            "Diese Karte warnt vor Hoffnungslosigkeit, dem sinnlosen kämpfen, denn es wird zu noch mehr Verletzungen führen und gibt nur einen Verlierer auf dem Schlachtfeld, der bist Du. Achte dabei nicht Deine Lebenskraft sinnlos zu verschwenden, aber sei auch nicht aktionslos. Alles was Dich herunterzieht lehne einfach ab, nicht bekämpfen. Die Lebensfreude wird hier immer wieder auf die Probe gestellt. ",
        background: "../img/10_federn.jpg",
        id: "10_federn",
        index: 42,
    },
    {
        name: "10 - Flammen",
        thema: "Es reicht aber nun-Überlastung",
        text:
            "Diese Karte will Dich daran erinnern, dass Kraft im Leben nicht endlos ist. Sie will ermahnen, dass Du Deine Kraft bewusster einsetzen solltest. Es kann auf sorg volle Gedanken und unterdrückte Gefühle hinweisen. Vielleicht fühlst Du Dich gerade niedergeschlagen und sogar erschöpft. Es mag fast ausweglos erscheinen. Die Dinge wachsen Dir einfach über den Kopf. In Dir nimmst Du gerade alles sehr schwer und zu wichtig. Eine bestimmte Versagensangst baut sich auf und es geht darum diese erst gar nicht die Oberhand bekommen zu lassen. Mit dieser Karte bist Du nun vorgewarnt. Es ist an der Zeit Dinge auch mal andere erledigen zu lassen. Gib die Verantwortung ab und nimm Dir Zeit für Dich. Es muss auch mal eine AusZeit für Dich drin sein um wieder zu neuer Kraft zu kommen. In Beziehungen kann es gerade so sein, dass Du Dich auf vielen Ebenen ausgenützt oder gar benutzt fühlst. Achte einmal darauf, ob es schon eine Abhängigkeit geworden ist. Es ist nun an Dir, das zu verändern, beginne wieder Dich in den Mittelpunkt Deines Lebens zu stellen. In der Arbeit musst Du wieder Deine Grenzen erkennen und auch einhalten. Es gibt ein ArbeitsZeitgesetz, das eingehalten werden darf, auch von Dir. Und meistens auch andere Kollegen, die mal was erledigen können. Vielleicht aber ist es auch an der Zeit, Dich umzusehen. Was in Deinem Leben erfüllt Deinen Lebenssinn, was ist sinnhaft für Dich? Und dann schau nach neuen passenden Aufgaben.",
        kopf:
            "Wenn Du nun auf Sicherheit spielst, dann wirst Du vielleicht alles verlieren. Du hast bereits einiges erreicht und willst es nun auf keinen Fall verlieren, alleine der Gedanke ist schon der erste Schritt dazu. An alles was Du gerade krampfhaft klammerst, das wirst Du eher verlieren. Es könnte eine Phase der Planlosigkeit, des sich innerlich zerrissen Fühlens, auf Dich zukommen. Gib Deine kontrollsucht ab, denn das ist keine wahre Freiheit. ",
        background: "../img/10_flammen.jpg",
        id: "10_flammen",
        index: 43,
    },
    {
        name: "10 - Kelche",
        thema: "Fülle – Harmonie",
        text:
            "Diese Karte zeigt an, dass es nun eine intensive zeit gibt mit Freuden des Lebens in harmonischer und ausgeglichener Zufriedenheit. Hier findet sich die Liebe des Lebens, denn Du bist bereits durch alle Emotionen gegangen und nun bist Du durch. Sei einfach optimistisch und freue Dich. Du wirst ein Bedürfnis haben, hier warmherzig und versöhnlich zu reagieren. Deine offene Lebenseinstellung wird Dich großzügig zeigen und spontan handeln lassen. In Beziehungen darfst Du die Liebe ausleben und damit auch endlich ein Gefühl haben, das Dich fühlen lässt, dass ihr zusammengehört. Du wirst den Menschen gegenüber großzügig zeigen und in Vertrauen, aber voller Gute und in tiefer Freundschaft begegnen. Du fühlst dich im Leben einfach geborgen und kannst es auch so weitergeben und somit Schutz und Vertrauen auch weitergeben. In der Arbeit ist die Teamarbeit Dein Ding und alles was Du hier initiierst wird der Gruppe nutzen. Du bist ein Teamplayer, der den Plan kennt und die neuen Projekte auf den Weg bringen kann, denn Du bist mit ganzen Herzen daran beteiligt. ",
        kopf:
            "Diese Karte will, dass Du Streit, Übertreibung und Übermut vermeidest. Achte auch auf Deine Lebensfreude, dass Du Dir diese nicht durch Deine Arroganz oder fremde Traurigkeit nehmen lässt. Vermeide es Dich mit Missstimmungen zu beschäftigen und achte darauf die innere Ruhe zu bewahren. Und Vorsicht, Du neigst zu Selbstüberschätzungen. ",
        background: "../img/10_kelche.jpg",
        id: "10_kelche",
        index: 44,
    },
    {
        name: "10 - Münzen",
        thema: "Reichtum – Ankommen",
        text:
            "Die innere Sicherheit und die wirkliche Zufriedenheit werden hier zum Thema. Die Fülle des Lebens und die Schönheit genießen. Das Leben in der Fülle darf sich entfalten. In Beziehungen kannst Du nun andere nun großzügig beteiligen. Es braucht die richtigen Momente für neue Kontakte, die sich später als sinnvoll zeigen werden. Im Arbeitsleben kannst Du Dich über Anerkennung und Bewunderung freuen, aber achte darauf trotzdem bei allem Handeln mit Vorsicht und Sorgfalt zu walten. Baue Deine Beziehungen weiter aus. ",
        kopf:
            "Die Karte wahrt vor Leichtsinn und Verschwendungssucht. Wenn Du zu Langeweile neigst, dann versuche Dich zu motivieren. Alle Dinge bei denen Du nicht mit dem Herzen bist werden Dich zurückwerfen. Bleibe fleißig und hänge nicht an den materillen Dingen zu fest. ",
        background: "../img/10_muenzen.jpg",
        id: "10_muenzen",
        index: 45,
    },
    {
        name: "10 - Rad des Lebens",
        thema: "Wandel und Anpassungsfähigkeit",
        text:
            "Kein Anfang und kein Ende, wie auch kein Stillstand. Festhalten am Leid und Glück. Das Schicksal des Lebens annehmen. Gewinne einen Überblick über Dein Leben, während Du die Hintergründe und Zusammenhänge verstehen lernst. Es geht darum Dein Leben anzunehmen, es gibt Dinge, die sind nicht unausweichlich. Es gibt einen richtigen Zeitpunkt zu erkennen, um die Probleme anzupacken um diese zu lösen. Beachte dabei die Möglichkeiten und die günstigen Augenblicke um diese zu erkennen und zu nutzen. Die Zahl 10 steht dafür, dass der Kreislauf geschlossen ist",
        kopf:
            "Achte darauf nicht von Zerstörungswut oder Lebensverneinung in die Passivität getrieben zu werden.",
        background: "../img/10_radlebens.jpg",
        id: "10_radlebens",
        index: 46,
    },
    {
        name: "11 - Die Kraft",
        thema: "Objektivität",
        text:
            "Hier geht es unter anderem um das DA-Sein in ein SICH-Loslassen. Voraussicht ist gefragt mit Aufrichtigkeit und Gleichberechtigung. Hier werden Deine Fähigkeiten die Dinge aus der Ratio heraus abzuwägen gefordert. Die Entscheidungen müssen objektiv und bei klarem Verstande gefällt werden. Jede Handlung muss selbstkritisch geprüft werden. In Handlungen ist Zuverlässigkeit gefragt, wie in Beziehungen auf Augenhöhe es zu Erfolgen führen wird. Ohne eigenverantwortlich, entschlossen und zielstrebig für die Sache einzutreten, werden unparteiische Lösungen nicht gefunden werden. Die Zahl 11 steht hier für die soziale Kompetenz und die Vitalität.",
        kopf:
            "Vorsicht vor Täuschungsmanöver und Unaufrichtigkeit. Fehlender Humor kann Probleme aufbringen. Du könntest auf Gleichgültigkeit stoßen.",
        background: "../img/11_kraft.jpg",
        id: "11_kraft",
        index: 47,
    },
    {
        name: "12 - Die Prüfung",
        thema: "anderer Blickwinkel",
        text:
            "Es ist an der Zeit neue und veränderte Einsichten zu gewinnen. Manchmal benötigt es den Stillstand, es kann sich eine Krise darstelle. Ein Gefühl, ohne ein Echo zu erhalten. Achte auf Deine Gesundheit, vielleicht behindert Dich auch eine Krankheit und bringt Dich in den Stillstand. Es kann sein, dass Du Dich als Opfer empfindest, jetzt ist die Zeit der Hoffnung und auf die Zukunft vertrauen. Verlasse die alten Pfade und wage etwas ganz Neues. Manchmal kann es loslassen und verzichten bedeuten. Bleibe trotz Schwierigkeiten und Verzögerungen geduldig und achte auf den fremden Anstoß. Die Zahl 12 steht hier für die Verbindung von Himmel dem Leben",
        kopf:
            "Du könntest mit Selbstaufgabe konfrontiert werden. Hüte Dich vor Anpassung und Fremdbestimmung. Du könntest auf Engstirnigkeit und Wirklichkeitsflucht treffen. Wenn du die Isolation wählst, wird sich das Thema nicht lösen.",
        background: "../img/12_prüfung.jpg",
        id: "12_prüfung",
        index: 48,
    },
    {
        name: "13 - Tod",
        thema: "Lasse los und wandle",
        text:
            "Es ist Zeit aus Dir selbst herauszuwachsen. Es kann sich um einen Abschied handeln oder das Ende eines Lebensabschnittes, bzw. einer Entwicklungsphase. Lasse Altes hinter Dir. Lasse Dich auf Erfahrungen ein, die Dir Neues bringen werden. Angst vor Beendung von hinderlichen Beziehungen kann die eigene Entwicklung aufhalten. Den Abschluss einer Sache oder Beziehung nun endlich annehmen um die Stufe der Dankbarkeit zu erreichen. Die Zahl 13 steht hier für Läuterung und Neuanfang",
        kopf:
            "Hüte Dich vor der Angst Verlassen zu werden oder zu überleben. Es kann ein Wunsch zur Flucht entstehen, der in die Depression führen kann. Innere Verweigerung und Verneinung behindert den Neuanfang.",
        background: "../img/13_tof.jpg",
        id: "13_tof",
        index: 49,
    },
    {
        name: "14 - Grenzgängerin",
        thema: "Gleichgewicht – Hoffnung",
        text:
            "Bei dieser Karte geht es um das Gleichgewicht finden, indem Du das richte Maß im Umgang mit Menschen und Sachen für das innere und äußere Wohlbefinden. Gegensätze wollen vereint werden. Es geht darum im Leben absichtslos die wahre Freude zu finden. Lerne das kleine Glück und den Frieden des Lebens wieder zu schätzen. Es geht darum im Leben die Stabilität im inneren und Äußern zu finden. Zum Erfolg kommst Du mit sorgfältigen abwägen der Möglichkeiten, dies kannst Du nur erreichen, wenn Du Dir die Zeit und die ruhige Umgebung schaffst. Die Zahl 14 steht hier für die Verbindung des Handelns und des Denkens",
        kopf:
            "Hektische Zeiten oder die eigene Ungeduld sind Hindernisse. Es kann frustrierend und langweilig sein. Jegliche Übertreibung kann sich hier passiv auswirken.",
        background: "../img/14_grenzgaengerin.jpg",
        id: "14_grenzgaengerin",
        index: 50,
    },
    {
        name: "15 - Der Teufel",
        thema: "Angst und Begierden",
        text:
            "Hier kann es Dich treffen, dass Du Deinen Schattenseiten begegnest, oder Du Dich damit beschäftigen musst. Holle es aus der Dunkelheit und beleuchte es. Wer sich diesen Dingen stellt, der kann die Befreiung erleben. Befreie Dich auch Abhängigkeiten und leidenschaftlichen Verstrickungen. Achte darauf, dass Dich nicht die Materie besticht oder abhängig macht. Führe keine Machtkämpfe. Die Zahl 15 steht hier für Geist über die Materie stellen",
        kopf:
            "Hier könnten Machtspiele auf Dich zukommen. Alles was abhängig macht oder ist. Die Kontrolle mit Macht zu erhalten oder es könnten Menschen versuchen dich zu hintergehen.",
        background: "../img/15_teufel.jpg",
        id: "15_teufel",
        index: 51,
    },
    {
        name: "16 - Der Turm",
        thema: "Abgründe tuen sich auf",
        text:
            "Es ist an der Zeit sich von einengenden Mustern zu trennen. Es ist eine Zerstörung und eine Erneuerung der Gewohnheiten. Es geht darum alte Verhalten, Wertvorstellung aufzulösen, Das Leben muss geändert werden, es geht darum mehr Offenheit und Optimismus zu entwickeln. Stelle dich den Konflikten im Leben. Es kann zu außergewöhnlichen Gefühlsausbrüchen kommen, denen es sich gilt zu stellen. Alte Probleme, die sich erneut zeigen, ist es an der Zeit sich zu stellen. Es kann alte, bewährte Sicherheiten in Frage stellen und es ist die richtige Zeit flexibel zu werden. Die Zahl 16 steht hier für Vollkommenheit",
        kopf:
            "Engstirnigkeit und selbstzerstörerische Gedanken blockieren die Energien. Festhalten an alten Verhaltensweisen und Sicherheitsstreben behindern Deine Entwicklung.",
        background: "../img/16_turm.jpg",
        id: "16_turm",
        index: 52,
    },
    {
        name: "17 - Der Stern",
        thema: "Hoffnung – Selbstvertrauen",
        text:
            "Alles ist in ständiger Bewegung mit dem Lebenswillen, lässt es Freude und Heilung bis zu Vervollkommnung entstehen. Hier kommt das richtige Gefühl und Du wirst verstehen können, um eine zukünftige Entwicklung zu fördern. Es darf Hoffnung und Ruhe einkehren mit Aussicht auf zuversichtliche Entwicklung. Du hast die Kraft und die Klarheit um einen Neubeginn zu starten. Es kann auch eine neue Beziehung bedeuten, zu der Du nun offen und vorurteilsfrei übergehen kannst. Nutze Deine Möglichkeiten und neue Ziele. Deine Chance in Verhandlungen stehen gut und es können mit dieser Karte dauerhafte Lösungen und sogar Träume umgesetzt werden. Die Zahl 17 steht hier für „die Nachfolge ist geregelt“ ",
        kopf:
            "Es könnte scheitern an mangelndem Vertrauen oder auch an Deiner hoffnungslosen Ansicht. Lass die Unsicherheit nicht die Oberhand gewinnen. Achte darauf, dass Du nicht ZU selbstzufrieden Dich einfach zurücklehnst, denn damit ist der Fluss unterbrochen. Hüte Dich vor Überheblichkeiten. ",
        background: "../img/17_stern.jpg",
        id: "17_stern",
        index: 53,
    },
    {
        name: "18 - Der Mond",
        thema: "eigenen Tiefen ergründen",
        text:
            "Die Stille in Dir ertastet den Weg vom Meer Deines Unterbewusstseins oder auch dem unbewussten zu den Bergen des alten Wissens. Es könnte ein Weg sein, mit höhen und Tiefen, aber das Meer der Tränen, darf sich in die wahre Essenz verwandeln. Tauche in die Tiefe Deiner Dunkelsten Seiten und steige wie ein Phönix auf. Hier kannst Du Deine wahren Sehnsüchte kennenlernen und setze Dich mutig mit Dir selbst auseinander. Was sind DEINE Gefühle, Sehnsüchte und Träume. Stehe zu Deiner eigenen Verwirrtheit oder Unsicherheit, wenn es um den Kontakt mit anderen geht. Hast Du gerade Träume oder Wünsche bezüglich Gebieten, wie der Arbeit, dann warte und hoffe in Geduld. Achte darauf, dass niemand dich täuscht. Die Zahl 18 steht hier für das unbewusste, dass Neues erschaffen will. ",
        kopf:
            "Achtung vor Lügen und Täuschungsversuchen. Stillstand der durch Feigheit oder Deinen Launen entstehen kann ist auch eine Gefahr. Es könnte sich Chaos oder gar als Illusion herausstellen.",
        background: "../img/18_mond.jpg",
        id: "18_mond",
        index: 54,
    },
    {
        name: "19 - Die Sonne",
        thema: "Klarheit – Ja sagen",
        text:
            "Modellieren der sichtbaren Welt, da das ferne beobachtet werden kann und was im Inneren vorgeht. Alles was getrennt war fügt sich wieder, oder verwandelt sich. Dein Blick wird sich nun den schönen Dingen im Leben widmen. Es ist an der Zeit wieder Kontakte zu pflegen und Du kannst Dich von Deiner offenen Seite leiten lassen. Genieße die Vorzüge der Fülle und der Sonnenseite Deines Lebens mit dem was Du kannst und habe wieder Vertrauen und Mut. Lasse Altes hinter Dir und schmiede schöne Pläne für die Zukunft. Deine selbständige Weise wird zum konkreten handeln. Die Zahl 19 steht hier für die goldenen Zeit.",
        kopf:
            "Achtung vor Gedankenlosen handeln oder der Angst etwas verändern zu müssen. Ebenso vor Größenwahn und Arroganz. Das Gefühl hilflos zu sein wird alles bremsen.",
        background: "../img/19_sonne.jpg",
        id: "19_sonne",
        index: 55,
    },
    {
        name: "20 - Die Erneuerung",
        thema: "Erlösung – Loslassen",
        text:
            "Das Unerwartete willkommen heißen, dabei auf Dich selbst treffen. Es berührt Deine Existenz um Begrenzungen und Hemmungen loszulassen. Es geht um Deine Freiheit und die Entfaltung bis hin zur Selbstwerdung. Dabei müssen festgefahren Muster sterben. Erlebe die Freiheit in Verbundenheit mit Reichtum und Freude in allen Beziehungen, nachdem Du vergangenes hast ziehen lassen, aber erzwinge nichts. Die Veränderung kann die Lösung von alten Problemen bringe, dabei ist immer etwas was gehen, bzw. sterben will. Die Zahl 20 steht hier für Glück kann erreicht werden, durch dem Folgen des inneren Rufes und des Loslassens.",
        kopf:
            "Hüte Dich vor Angst und den Selbstzweifeln. Wer sich von Angst führen lässt könnte versagen. Wenn Du nicht bereit bist die Kontrolle abzulegen, dann könnte es unberechenbar werden. Sei einsichtig und lege die Schuldgefühle beiseite. ",
        background: "../img/20_erneuerung.jpg",
        id: "20_erneuerung",
        index: 56,
    },
    {
        name: "21 - Die Welt",
        thema: "Verwirklichung - vor dem Nichts",
        text:
            "Nun kann es an der Zeit sein, dass Du Deine Erfüllung erhältst, die Ernte kann kommen, wenn Du vorher die Pläne hattest und die Handlungen beachtet hast. Dein Bemühen findet nun Belohnung. Es kann sich auch um die Antriebskraft handeln, in Verbindung mit dem Impuls für die richtige Entwicklung Deiner Persönlichkeit auf höherer Ebene. Hier bist DU am richtigen Ort und auch noch zur richtigen Zeit. Trotzdem bleibe offen dabei für neue Erfahrungen, denn es bahnt sich schon der nächste Zyklus an. In Beziehungen hast Du die Reife erreicht und kannst mit Deinem tiefen Verständnis, mit anderen und Dir, Freude und Zufriedenheit, teilen. In allen Bereich ist das Ziel erreicht, es gibt nichts, was Du gerade noch tuen könntest, sei einfach zufrieden. Die Zahl 21 steht hier für „Weisheit“",
        kopf:
            "Hütte Dich davor hier in der Starre zu verweilen, oder gar faul zu werden. Verantwortungsloses Handeln oder entscheiden bringt nichts Gutes. Unzufriedenheit und Missgunst oder auch Missmut werfen Dich zurück. ",
        background: "../img/21_welt.jpg",
        id: "21_welt",
        index: 57,
    },
    {
        name: "Ass Federn",
        thema: "besonnenes Handeln – geistige Klarheit",
        text:
            "Diese Karte will Dir bewusst machen, dass es manchmal eine Konfrontation benötigt, damit umdenken geschehen kann und sich dann ganz neue Wege eröffnen. Es kann sich hier auch um den Durchbruch handeln, der eine Lösung ist. Hier bist Du aufgefordert in Bewegung zu kommen, es erfordert Leistung und Ausdauer, wie auch Deine Willensstärke. Betrachte die Dinge realistisch und bleibe bei der Wahrheit, dann kannst Du Probleme anpacken und auf eine Übereinkunft hoffen. Diese Karte steht auch für die Gerechtigkeit, den Intellekt und das analysieren. Ebenso fordert sie Dich auf besonnen zu handeln und der Vernunft die Oberhand zu zuweisen. In Beziehungen solltest Du nun bereit sein, Dich mit tieferen Themen zu konfrontieren. Nach Diskussionen treffe besonnen Entscheidungen und bleibe dann Dir selbst treu. In der Arbeitswelt ist Dein analytischer und intelligenter Verstand gefragt, der gut durchdachte Entscheidungen treffen will. Dienen Standpunkt rechtfertigen und die Prioritäten müssen festgelegt werden um anderen Deine Grenzen klar zu zeigen.",
        kopf:
            "Diese Karte will Dich daran erinnern, dass Du aggressives Verhalten unterdrücken sollst. Probleme müssen offengelegt werden, sonst werden sie sich verstärken. Wenn Du versuchst Konflikten aus dem Weg zu gehen, dann werden daraus vielleicht handfeste Streitereien. Missverständnisse gehe offen an. Und zeig Dich entschlossen. Gib Dich keinen Illusionen hin. ",
        background: "../img/as_federn.jpg",
        id: "as_federn",
        index: 58,
    },
    {
        name: "Ass Flammen",
        thema: "Lebenskraft – Ziel anstreben",
        text:
            "Diese Karte ist das Feuer des Lebens, denn die innere Kraft treibt hier an. Der Augenblick ist das einzige was zählt, sei wachsam und handle aus dem Moment heraus. Diese Karte will Dir zeigen, dass es einen inneren Impuls gibt, dem Du vertrauen solltest. Auch geht es um die Vitalität und die Begeisterung. Du kannst mit Elan und Schwung Deinen Plänen folgen. Es kann auch bedeuten, dass im Innersten eine Unruhe herrschen wird, denn das Handeln will gelebt werden und ein konkretes Ziel erreicht werden. Packe die Möglichkeiten an, hier kann es sinn haben und das was Du Dir vorgenommen hast kann vollendet werden. In Beziehungen wird es dazu kommen, dass Du vielleicht für Dich einstehen musst, es kann zu einem Neuanfang kommen, der aber innere Stärke bringen wird. In der Partnerschaft wird es intensiv und das Leben will gelebt werden. In der Arbeit geht es um die neuen Sachen und die Projekte die nun endlich bearbeitet werden wollen. Du kannst gut Deine Träume und Wünsche einbringen, wenn Du selbständig arbeitest. ",
        kopf:
            "Achte darauf nicht kompromisslos oder rücksichtslos zu arbeiten. Auch auf oberflächliche und feige Handlungsweisen ist hier zu achten. Überaktivität kann ein Wahrzeichen sein und handle nicht unberechenbar oder achte darauf, dass andere nicht unberechenbar mit Dir umgehen. Lass Deine Minderwertigkeitsgefühle nicht die Oberhand gewinnen.",
        background: "../img/as_flammen.jpg",
        id: "as_flammen",
        index: 59,
    },
    {
        name: "Ass Kelche",
        thema: "Liebe in Vollkommenheit – Quell der Natur",
        text:
            "Diese Karte zeigt die Herzöffnung an, es steht für das Symbol der Erneuerung. Hier will sich zeigen, dass Du mit dem was Du erreicht hast zufrieden sein kannst. In dieser Karte geht es um Deine echten und tiefen Gefühle, hier kommt ein-sich-öffnen für eine neue Begegnung mit sich SELBST und anderen Menschen, der Ebene der vollkommen Liebe. Alles was sich hier fühlen lässt ist echt und hat Tiefe. Es geht um den Ursprung allen Seins. Hier kannst Du Dich als das erfahren, was Du wirklich bist, wenn Du bereit bist, Dich Deinen innersten Gefühlen gegenüber zu stellen. Es ist an der Zeit alle Deine Wünsche und wonach Du Dich wirklich sehnst, mit ganzen Herzen, offen und frei preis zu geben. Hierfür wird von Dir tiefes Vertrauen in Dich und die Schöpfung gefordert, diese sich hingeben und zuversichtliche Handeln wird sich lohnen. In Beziehungen geht es darum sich neu kennenzulernen in der eigenen Leidenschaft und der Sinnlichkeit der eignen Gefühlswelt, könntest Du in eine ergreifende Liebe fallen und neue Freundschaften mit Dir und anderen den Weg bahnen. Im Arbeitsbereich kommt eine Zeit, in der Du nun auf Dich bauen kannst, Deine Talente und Fertigkeiten werden zu guten Ergebnissen beitragen. Es ist ein günstiger Zeitpunkt dies gerade nun besonders zu zeigen. ",
        kopf:
            "Diese Karte will Dich warnen vor Eifersüchteleien und Rachsucht. Bleibe Dir und Deinem Lieben treu, denn es könnte sonst zu einsamen Zeiten kommen, oder auch dem Gefühl, Du bist nicht mehr Du. Deine Gefühle schenke die nötige Beachtung und versuche diese nicht zu vertuschen. ",
        background: "../img/as_kelche.jpg",
        id: "as_kelche",
        index: 60,
    },
    {
        name: "Ass Münzen",
        thema: "materiellen Erfolg und Sicherheit",
        text:
            "Es geht darum, dass Leben hervorzubringen. Wachstum und Nahrung, alles was die Welt an Möglichkeiten zur Verfügung stellt. Hier ist Einfallsreichtum und Disziplin gefragt, damit Du nicht Deine Reserven aufbrauchen musst. Es geht darum, dass Du alleine nur die Aufgabe lösen kannst. In Beziehungen deutet sich hier eine erfüllte und tiefe Ebenen an. Auch die Suche danach kann eine neue Chance bringen, auf eine intensive Zeit. Im Arbeitsbereich geht es um Deine Beharrlichkeit um an Dein Ziel zu gelangen. Es ist auch eine gute Zeit für Finanzielle Dinge, die auf Dauerhaftigkeit ausgelegt sind. ",
        kopf:
            "Gefahr von Selbstsucht, Gier, aber auch Leichtsinnigkeit und Zügellosigkeit könnten Dich betreffen. Angst um die Existenz. ",
        background: "../img/as_muenzen.jpg",
        id: "as_muenzen",
        index: 61,
    },
    {
        name: "Mutter Federn",
        thema: "Kühler Kopf und Freiheit",
        text:
            "Diese Karte steht für eine unabhängige und stolze Frau, oder den weiblichen Aspekt darin, hier könnten wir von Wahrhaftigkeit sprechen. Hier triffst Du auf weibliche Kräfte, die sich mit Mut, Kritik und Klugheit paaren. Es geht um objektive Entscheidungen und dann engagiert und diszipliniert diese zu verfolgen. Hier sprechen wir von Perfektionismus in der Meisterklasse. Es werden hohe Ansprüche gestellt. Es muss hier mit Geistesverstand gehandelt und entschieden werden, ohne sich verunsichern zu lassen. Ebenso muss alles Verwirrende abgewandt werden, um sich letztendlich selbst von allen Abhängigkeiten zu befreien. Es gibt kein Gefängnis, dass einen freien Geist begrenzen könnte. In Beziehungen wirst Du Dir hier klar darüber, wie verletzlich Du bist. Und trotzdem geht es auch hier um Deine Unabhängigkeit und Dich selbst in einer Beziehung zu verwirklichen. Das Glück der Zugehörigkeit in Freiheit und Wahrhaftigkeit zu atmen. In Arbeitsbereichen musst Du Dir die Freiheit erschaffen und auch verteidigen. Den kühlen Kopf bewahren und Entscheidungen fällen. Du bist ein Troubleshooter und Deine Ideen werden Früchte tragen. ",
        kopf:
            "Die Arroganz und auch die Einsamkeit könnte Dir zu schaffen machen. Es ist auf Boshaftigkeiten zwischen den menschlichen Beziehungen ein Auge zu werfen. Achte auch darauf, dass Du bei all der kühle nicht dazu neigst unnahbar zu werden. Dein Perfektionismus kann auch in Wahn überschlagen. Beachte bei aller Strenge auch die liebe zu Dir und anderen. ",
        background: "../img/mutter_federn.jpg",
        id: "mutter_federn",
        index: 62,
    },
    {
        name: "Mutter Flammen",
        thema: "Innere Sicherheit – Kräfte bündeln",
        text:
            "Die Mutter der Flammen zeigt sich mit Willensstärke Unabhängigkeit und Selbstsicherheit. Wer mit ihr ist, dem gibt sie Lust am Leben und die Ekstase. Es geht hier um Loyalität und Lebensfreude. Diese Karte kann auf eine Frau (oder weibliche Art) hinweisen, die leidenschaftlich und voller Temperament steckt, sie ist mutig und aufgeschlossen, mit der nötigen Portion Fantasie ausgestattet. In Dir soll diese Karte die Entwicklung Deiner tieferen inneren Sicherheit fördern, aber auch Deine natürliche und warmherzige Seite sind angesprochen. Hier wirst Du aufgefordert, Dein Leben in die Hand zu nehmen, Deine Kreativität und Willensstärke gepaart mit der Konzentration auf das Wesentliche in Deinem Leben. In Beziehungen zeigt die Karte starke sexuelle Regungen, hier geht es um pure Leidenschaft. In Freundschaften sollen das Vertrauen und die Wärme sich entwickeln. In Deinem Arbeitsleben ist Deine Kreativität und Selbständige Arbeitsweise notwendig um Dich nach vorne zu bringen. ",
        kopf:
            "Diese Karte will Dich wahren vor Herzlosigkeit oder Eifersucht. Auch die Selbstüberschätzung und Oberflächliche Art ist eine Gefahr. Lasse dich nicht von Anmaßungen treiben. ",
        background: "../img/mutter_flammen.jpg",
        id: "mutter_flammen",
        index: 63,
    },
    {
        name: "Mutter Kelche",
        thema: "Sensibilität – Hingabe",
        text:
            "Diese Karte stellt wieder eine weibliche Person da, oder den weiblichen Aspekt davon, ihre Eigenschaften sind eher sensibel und einfühlsam. Ihr Temperament wird von Spontanität und Phantasie geführt. Hier kommen die Romantik und die kreative Seite zum Ausdruck. Hier bist Du aufgefordert Dich auf einen tiefen Ebenen der Gefühle einzulassen, Deine sensible Seite wird nun ans Tageslicht kommen wollen. Hier geht es um die Romantik und Leidenschaft des weiblichen. Auch die Träumerei und Phantasterei ist nun erlaubt. Wer hier die Frau aufhalten oder festhalten will, dem wird sie einfach durch die Finger fließen, in aller Liebe und Leidenschaft. Ebenso bist Du aufgefordert Dich den Dingen oder Augenblicken ganz und gar hinzugeben. Es wird ein loslassen sein und sich fallen lassen, um dann aus dem Gefühl heraus zu agieren. In Beziehungen geht es um das Miteinander, hier regiert die Liebe und die Zusendung, in diesen Partnerschaften herrscht ein liebevolles und vertrautes miteinander. Hier wird jede die Gefühle des anderen achten und das Glück teilen. Es ist ein Zusammensein das sich harmonisch und voller gemeinsamer Phantasien gestalten kann. Die Leidenschaft trifft die Übereinstimmung und wir einfühlsam gelebt. Im Arbeitsleben wird sich jeder versuchen eine „Win-Win-Situation“ herzustellen. Hier besteht auch eine gewisse Chance Deine phantastischen Ideen und Pläne durch Kreativität vorzuschlagen. ",
        kopf:
            "Diese Karte hat wenig negative Aspekte, es ist nur auf Eifersucht und die Gefühle, dass jemanden oder etwas nicht vergeben wird zu achten. Es könnte auch auf eine einseitige wirkliche Liebe hindeuten, die nicht die Erwiderung findet, was zur Abgrenzung, Rache oder Traurigkeit führen kann. ",
        background: "../img/mutter_kelche.jpg",
        id: "mutter_kelche",
        index: 64,
    },
    {
        name: "Mutter Münzen",
        thema: "Geschäftssinn erwecken",
        text:
            "Hier begegnest Du der praktischen, aber auch sinnlichen Seite. Es könnte um die weiblichen Aspekte von Phantasie, Kreativität und Verantwortung gehen. Hier ist Deine Kraft gefragt, realistisch und mit gesundem Selbstwertgefühl etwas aufzubauen, was in Liebe und Verbundenheit zum Wohle aller sein sollte. Entdecke Deinen eigenen Fähigkeiten und erschaffe Dir damit inneren und äußeren Wohlstand. Bleibe Deiner Sache treu.",
        kopf:
            "Gefahr vor: finanzieller Abhängigkeit und emotionalen Blockaden, Verschwendung, wie auch Genusssucht",
        background: "../img/mutter_muenzen.jpg",
        id: "mutter_muenzen",
        index: 65,
    },
    {
        name: "Sohn Federn",
        thema: "Neugierde und Wandlungsfähigkeit",
        text:
            "Diese Karte symbolisiert einen leichtfüßigen jungen Burschen, oder den Aspekt davon, der sich seiner Neugierde selbst bewusst ist. Aufgeweckt und ein wenig Gleichgültigkeit ist er zur Wandlung bereit. Er mag auch ein wenig ungezogen sein und neigt zu Tratsch und Klatsch. Für manchen mag er zu aufdringlich sein. Hier will es Dich erinnern, dass es leicht zu Provokationen kommen kann, die dann auch in Streitereien oder auch scharfen kritischen Worten enden könnten. Aber auch um die Entdeckung von Inspiration und neuen Visionen. Hier bist Du gefordert Dich mit Allem einmal tiefer zu beschäftigen, das gerade im Rampenlicht steht. Vor allem geht es darum Dinge und Angelegenheiten selbstständig zu durchleuchten. Hier ist Lernen angesagt. In Beziehungen könnte es sein, dass Du dich Anfeindungen und scharfer Kritik gegenüber siehst. Aber auch Du bist gefragt, nicht provokativ auf Freunde zu reagieren. Es macht keinen Sinn dich Diskussionen hinzugeben, die sinnlos sind. Auch Deine Zeit mit Kräftemessen zu vergeuden wird es nicht besser machen. In der Arbeit ist es angesagt einmal was für sich zu behalten, nicht immer will jeder Deinen Rat hören. Versuche eher Deine Diplomatie und es mit Leichtigkeit zu erreichen. ",
        kopf:
            "Diese Karte will Dich erinnern, dass es manchmal auch gut ist sich etwas mit der eigenen Meinung zurückzuhalten. Hütte dich vor neidischen Gedanken und Missgunst. Jetzt ist keine Zeit sich mit aller Gewalt durch zusetzen, das könnte zu Streitigkeiten führen. Schaue auch darauf nicht leichtsinnig zu handeln oder gar grobfahrlässig. Jede Unvorsichtigkeit konnte Dir eine Zeit lang nachhängen. ",
        background: "../img/sohn_federn.jpg",
        id: "sohn_federn",
        index: 66,
    },
    {
        name: "Sohn Flammen",
        thema: "freudige Erlebnisse – Erkenntnisse",
        text:
            "Diese Karte zeigt Dir einen jungen Mann (jugendliche männliche Aspekte) die Dich in die Begeisterung und den Neuanfang führen. Es geht um Gedanken in die Zukunft, eventuell um das Studieren mit Freude und Optimismus. Die Karte bring auch ein wenig Unruhe mit sich, denn es geht um neue Projekte und neue Ideen, deren Impuls. Hier heißt es Augen auf, denn neue Chancen könnten kommen. Nimm den Augenblick wahr, denn ein inneres Bedürfnis treibt Dich geradezu auf den Weg der Erfahrungen und Du willst endlich Achtung erlangen. Diese Karte zeigt auch an, dass es um Deinen Freiheitsmut geht und Du Deinen Wünschen endlich nachgeben solltest. In Beziehungen solltest Du Dir helfen lassen und Inspirationen von außen einfließen lassen. Es könnte auch eine aufregende Beziehung auf Dich zu kommen. Im Arbeitsleben heißt es „ran an die Sache“, Du hast einen Aufschwung an Energien, aber bleibe bei Deinem Fokus und wäge ab, denn es gibt oft mehrere Wege. ",
        kopf:
            "Hier achte auf Deinen jugendlichen Leichtsinn, der Dir die Augen oft verschließt für die weiteren Dinge. Auch Scheinheiligkeit oder gar Lügen holen Dich hier schnell wieder ein. Mit Antriebslosigkeit und Übertreibungen Deiner Leistungen wirst Du hier auf dem Bauch landen.",
        background: "../img/sohn_flammen.jpg",
        id: "sohn_flammen",
        index: 67,
    },
    {
        name: "Sohn Kelche",
        thema: "Kontaktaufnahme – Finde Dich",
        text:
            "Diese Karte steht für einen jungen Mann, oder den männlichen jugendlichen Aspekt, der Dich auf den Grund bringt, um diesen in Dir zu erkunden. Was ist es, was Dir wirklich ein Bedürfnis ist, was liegt im Grund verdeckt und will sich zeigen, welche Eigenschaften trägst Du tief verborgen in Dir? Hier wird sich etwas Neues anbahnen, es wird seine erste Regung von außen erfahren und dann kommt der Antrieb dem zu folgen. Es kann eine Nachricht sein, die dies veranlasst, oder nur ein kurzer Impuls durch eine Kleinigkeit, die Du wahrnimmst. Ebenso stehe die Karte für die „kleine Versöhnung“. Hier findest Du auch Freund an und mir Dir, Du lernst Dich anzunehmen und zu lieben. In Beziehungen wirst Du aufgefordert offen und mit Verständnis auf andere zu reagieren. Hier geht es darum sich mit anderen auszusöhnen und auch wieder eine Grundlage für Gemeinsamkeiten zu schaffen. In der Arbeitsumgebung geht es darum, Deine Beschränkungen zu überwinden und neue Aufgaben, die Dir reizvoll erscheinen, willkommen zu hießen. Ebenso ist es an der Zeit Dir den Rat und die helfende Hand der anderen nicht zu verwehren. Es zeigt auch eine Phase an, in der es besser ist sich als Schöpfer der Dinge zu betätigen, als anders. In Teams sich zu etablieren kann sehr hilfreich sein.",
        kopf:
            "Diese Karte zeigt an, dass es gerade sein könnte, dass Narzissmus in Dein Leben Einzug hält. Aber vielleicht sind es auch die Phantastereien, die Dich weg von der Realität bringen. Es könnte auch an der Zeit die modernen Medien einmal liegen zu lassen und wieder Aktiv zu werden, statt träge und bequem den Tag zu verbringen. Schaue einmal tiefer hinein und kratze nicht nur an der Oberfläche. ",
        background: "../img/sohn_kelche.jpg",
        id: "sohn_kelche",
        index: 68,
    },
    {
        name: "Sohn Münzen",
        thema: "Verwöhnen und Genießen mit Achtsamkeit sich öffnen",
        text:
            "Jetzt kannst Du Dich spielerisch Neuem öffnen, dies können Hobbies aber auch andere Dinge sein. Gehe dabei langsam und ruhig heran und vergiss nicht es zu hegen und zu pflegen, wie die Pflanze einer Saat die Du gesät hast. Du darfst andere damit verwöhnen und Dich verwöhnen lassen. In Beziehungen geht es darum diese mit neuen faszinierenden Ideen zu erhalten. Oder aber sich einer neuen und lustvolleren Partnerschaft zu öffnen um eine neue Phase im Leben zu eröffnen. In der Arbeit erkenne Deine Möglichkeiten um etwas Neues zu erhalten, oder trete aus alten Mühlen heraus. Ergreife die Veränderung. ",
        kopf:
            "Es kann zu einer Überforderung kommen. Auch unbeachtete Ideen und verlorenes Interesse hemmt Dich. Manchmal bist Du ein wenig zerstreut und es kommt zur Verunsicherung. Hüte Dich vor unbeständigem Handeln. ",
        background: "../img/sohn_muenzen.jpg",
        id: "sohn_muenzen",
        index: 69,
    },
    {
        name: "Tochter Federn",
        thema: "lösen von alten Denkmustern",
        text:
            "Diese Karte symbolisiert oft eine junge und geistreiche und bewegliche Frau, oder den weiblichen Aspekt davon. Hier trifft aggressiv und kriegerisch auf weiblich empfangend und zärtlich aufbauend. Alles erstarrte ist neu zu überdenken. Mit Eifer und Tatendrang, von innerer Unruhe getrieben, will sich hier etwas im Außen ändern. Alles ist jung und explosiv, das Denken und Handeln ist genauso impulsiv und ungeduldig. Mit dieser Karte stelle Dich auf eine Windrichtungsänderung ein, es gibt neue Entwicklungen und Du solltest offen für diese Veränderungen sein. Es wird turbulent und krisenreich sein, aber es kann auch eine gute Möglichkeit daraus entstehen. In Beziehungen wird es kritisch, alles muss nüchtern betrachtet werden und es wird unausweichlich zu Konflikten kommen. Das was Dir hier zu empfehlen ist, gehe keine Verpflichtungen ein und sorge für klare und eindeutige Verhältnisse. Das Arbeitsleben wird ebenso eine Schifffahrt auf hoher See, bleibe aufmerksam und nutze Deinen Verstand. Es ist eine gewisse Flexibilität gefragt und ein schnelles Handeln danach",
        kopf:
            "Diese Karte ermahnt Dich zu Hart ins Gericht zu gehen. Achte auch darauf nicht alles mit dem Kopf zu entscheiden. Ebenso sollte eine gewissen Sorgfaltspflicht Dich erfüllen, lasse es nicht an Mitgefühl mangeln. Die jugendliche Unbeherrschtheit und blinde Zerstörung könnten Folgen tragen.",
        background: "../img/tochter_federn.jpg",
        id: "tochter_federn",
        index: 70,
    },
    {
        name: "Tochter Flammen",
        thema: "Impuls – Unabhängigkeit",
        text:
            "Diese Karte steht für eine Junge Frau (oder das jugendliche weibliche) und will in Aktion treten, es geht um die Herausforderungen des Lebens. Ein Drang nach Unabhängigkeit treibt sie/ihn an. Dabei ist es die Suche nach dem Neuen. Es ist eine unbeschreibliche Energie, die mit Zuversicht und brennenden Herzen angegangen wird. Es geht darum sich aus dem alten und bekannten zu lösen, dabei sind Verlockungen und fremde Eindrücke das Abenteuer wert. Hier willst Du Deine Emotionen nicht länger zügeln. Es ist ein dursten nach Selbständigkeit und endlich unabhängig zu sein. Diese Karte bring Übermut und Stürmische Zeiten mit, es ist das jugendliche Gemüt, dass überfließt. Auf der Arbeit wird die Sache immer frontal angepackt, das Risiko rückt dabei in den Schatten. Konkurrenten werden kampfesbereit angenommen.",
        kopf:
            "Achte auf Übertreibungen und Handlungen, die aus dem Affekt kommen. Die Emotionen können so hoch kochen, dass es zerstörerisch sein kann. Ein Thema ist auch die Unzuverlässigkeit und erwarte nicht zu viel von Dir. ",
        background: "../img/tochter_flammen.jpg",
        id: "tochter_flammen",
        index: 71,
    },
    {
        name: "Tochter Kelche",
        thema: "sich treiben lassen um das Ziel zu erreichen – Feinfühligkeit",
        text:
            "Diese Karte steht für eine junge Frau, oder den jugendlichen weiblichen Aspekt, der zeigt Dir, dass das Ziel bereits in Dir ruht. Es geht zum einen um das „nichts tuen“ und sich davon tragen zu lassen. Ebenso aber, sich einfach tragen lassen zu den Themen der Angst und den versteckten Gefühlen, und irgendwie wissend, dass es dort die wahre Freiheit gilt zu entdecken. Hier kommt ein Gefühl auf, dass Du es weißt, dass alles im Fluss ist, dem Du Dich hingeben darfst und er wird Dich zu Deiner Quelle führen. Alles Alte, was Du bisher für die Realität gehalten hast, wird sich lichten und geht-zu-grunde. Du kannst Dich als Beobachter selbst beobachten und wirst Dich in andern gespiegelt sehen. Hier wird eine Sehnsucht Dich treiben, um endlich die Liebe zu finden, die in den Sternen liegt, es ist fast wie die spirituelle Liebe, die Dich zum Ganzen macht. Auch wird hier der Startpunkt sein sich einer Liebe wirklich zu öffnen, es kann sich hier genauso um Partnerschaften, wie auch Tätigkeiten handeln. Mit dieser Karte findest Du die Kraft und Zuversicht, Dich uneingeschränkt nach Außen zu wenden und zu zeigen, wen oder was Du verehrst. Hier sind Idole in Deinem Verstand und Gefühl zu finden. Nun nutze die Gunst der Stunde und erfülle Deine Träume, während Du Inspirationen von außen integrieren kannst und Dich trotzdem der realen Welt stellen wirst. ",
        kopf: "",
        background: "../img/tochter_kelche.jpg",
        id: "tochter_kelche",
        index: 72,
    },
    {
        name: "Tochter Münzen",
        thema: "Gewissenhaft sein im alltäglichen",
        text:
            "Jetzt ist es die Ausdauer und das Durchhaltevermögen. Es geht hier um Fleiß und die Bereitschaft sich anzustrengen, wie Verantwortung zu übernehmen. Ebenso ist die Bescheidenheit ein Thema. Lasse die Dinge auf Dich zukommen und erkenne die Notwendigkeit, während Du die Alltagsroutinen erledigst. In Partnerschaften ist nun ein guter Zeitpunkt die Pläne in die Wirklichkeit umzusetzen. Im Arbeitsleben kannst du mit Ruhe, aber Konsequenz Deine Ziel e erreichen, wenn diese in einem vernünftigen Rahmen gesteckt sind.",
        kopf:
            "Achtung für Unbeständigkeit, Faulheit und Sturheit. Ebenso könnte zu wenig Phantasie Dein Vorhaben beenden. Bleibe ruhig und habe Mut. ",
        background: "../img/tochter_muenzen.jpg",
        id: "tochter_muenzen",
        index: 73,
    },
    {
        name: "Vater Federn",
        thema: "Fairness und gerechtes Handeln",
        text:
            "Diese Karte zeigt einen Mann, der klug und fair handelt, oder den männlichen Aspekt darin. Diese Person ist im Verstand messerscharf und bringt Erfahrung mit, egal, wie alt er/sie ist. Hier wird sachlich und realistisch, jedoch kritisch und auch geschickt verhandelt und gehandelt. Der Verstand hat eine bestimmte flexible Handlungsfähigkeit, wirkt aber oft distanziert. Hier wollen die Dinge und Lage distanziert und möglichst verstandesmäßig, nüchtern gesehen werden. Veränderungen werden herbeigeführt durch Verantwortung und Entschlossenheit zum Handeln. In Beziehungen wirst Du hier Deine Gefühle offen legen, denn nur so kannst Du Mitgefühl für Dich erlernen und dann Dich tief verbinden. Es geht hier darum Deinen Innenkehr aufzugeben um aus der Distanziertheit herauszukommen. Im Arbeitsleben will Dir diese Karte zeigen, dass es an der Zeit ist Verantwortung zu übernehmen und im Team zu lernen die Führung anzunehmen. Hier musst Du aushalten und dann wirst Du zum Meister. ",
        kopf:
            "Jetzt gilt es zu beachten, dass Du nicht betrügst und auch nicht betrogen wirst. Hütte Deine Zunge vor falscher Aussage und der arroganten Art und Weise, oder gar Deinen zynischen Bemerkungen. Mit Härte oder distanzierter Kälte, dem domestizieren von Anderen wirst Du nichts erreichen. All dies wird dich noch weiter isolieren und unnahbar werden lassen. Auch Disziplinlosigkeit und die Nerven blank liegen lassen wird die Sache nicht bessern. Bewahre die Ruhe und begegne Dir selbst. Gib einfach die Kontrolle auf.",
        background: "../img/vater_federn.jpg",
        id: "vater_federn",
        index: 74,
    },
    {
        name: "Vater Flammen",
        thema: "Enthusiasmus – Abenteuer-Trennung fühlend",
        text:
            "Diese Karte zeigt Entschlossenheit und einen geschäftstüchtigen Mann. Aber die Karte weist auch auf die männlichen Aspekte hin und ist mit Ungeduld verbunden. Große Leidenschaft stellt es dar, aber auch einen inneren Kampf des sich getrennt Fühlens. Jener, welcher diese Karte zieht spürt die pure Lust des Abenteuers und will sich erleben. Er/sie wird sich den Herausforderungen des Lebens stellen, dabei kommt er/sie sofort an den Kern der Sache, ohne lange zu fackeln. Kleinigkeiten bringen alles zum überkochen und jegliche Einschränkung wird am liebsten überrollt. In Beziehungen wird er/sie selbstbewusst auftreten, aber auch ein gutes Vorbild sein. Denn die Beschützerrolle liegt hier im Blut. Er/sie kann bestens motivieren, aber auch andere von der eigenen Meinung überzeugen. Im Arbeitsleben haben wir hier einen Menschen der will die Führung und wird da nicht lange drauf warten.  ",
        kopf:
            "Diese Karte warnt vor Intoleranz und dem Hunger nach der Macht. Ebenso kann es sich leicht in Rechthaberei verlieren und Du wirkst engstirnig und manchmal sogar cholerisch. Auch steht es hier für die Wichtigtuerei. ",
        background: "../img/vater_flammen.jpg",
        id: "vater_flammen",
        index: 75,
    },
    {
        name: "Vater Kelche",
        thema: "Vertrauen – Zärtlichkeit",
        text:
            "Diese Karte verbirgt einen Mann, oder die männlichen Aspekte, bei dem Du auf Mitgefühl und liebevolle, sowie kreative und phantasievolle Hingabe treffen könntest. Es geht hier darum, dass Du Dir Deine verletzlichen Seiten einmal genauer unter die Luppe nimmst. Dich neu zu ergründen, das Unterbewusstsein auszuschöpfen, wo noch Verwundungen auf der Seele liegen, die nun geheilt werden wollen. Hierzu muss die Kontrolle abgegeben werden und es geht darum sich in Hingabe der eigenen Verletzungen zu widmen. Vertraue nun auf das was Du gerade fühlst. Du bist durch Höhen und Tiefen gegangen und nun ist es Zeit das Fließen des eigenen Herzschlages zu achten und Dein Leben zu leben. Gefühle wollen nicht kontrolliert werden. In Beziehungen wirst Du Dich in den Hintergrund stellen müssen. Es geht darum Deine sensible Seite weiterzuentwickeln und einfühlsam auf die Zeichen Deiner Mitmenschen zu achten und zu beachten. Auch ist es eine Zeit den Lieben um Dich einfach Deine helfende Hand zu reichen oder ein Ohr für sie zu haben. Im Arbeitsleben hast Du nun echte Chancen Deine Phantasie erfolgreich wirken zu lassen. Durch Kreative Ideen kann es zu den wirklich idealen Möglichkeiten kommen und Du kannst sehen, wie diese sich verwirklichen.",
        kopf:
            "Diese Karte warnt davor Dich nicht entscheiden zu können und ein ewiges Hin und Her zu leben, damit wird dann auch eine ausgedehnte Durststrecke kommen. Es kann zu mangelnder Konzentration kommen und auch die Vergesslichkeit lässt grüßen. Es könnte zu chaotischen Handlungen und Denkmustern führen, die Dich dann schwermütig werden lassen. In Beziehungen könnte es passieren, dass männliche Angeberei Dir nicht die Sympathie bringt, die Du Dir erhoffst. Es zeigt auch einen Konflikt der Emotionen und des Ratio`s an. Was sich durch Unzuverlässigkeit zeigen kann, aber auch eine gewisse Verzweiflung hervorruft. ",
        background: "../img/vater_kelche.jpg",
        id: "vater_kelche",
        index: 76,
    },
    {
        name: "Vater Münzen",
        thema: "Einschätzung – Verwirklichung",
        text:
            "Hier wird Deine Verantwortung gefragt werden. Männliche Seiten, wie Ehrgeiz und Autorität zeigen sich an. Es geht um Anerkennung und materieller Sicherheit. Aktivität mit Kreativität gepaart. Oft stehe die Karte für einen Mann, der stark, sinnlich und klug wirkt und das Leben froh genießen kann. Kann auch auf großen Geschäftssinn hindeuten, der oft durch hartes Arbeiten erreicht wird. Das Erreichte kann auf soliden Beinen stehen. In Beziehungen deutet es oft auf eine liebevolle Begegnung hin und bodenständige Partnerschaft kann sich daraus bilden. ",
        kopf:
            "Ärger mit Korruption, Gier und Geiz, aber auch Vergnügungssucht und Verschwendung von Eigentum.",
        background: "../img/vater_muenzen.jpg",
        id: "vater_muenzen",
        index: 77,
    },
];

const cardsCopy = [...cards];

console.log(cardsCopy.map((e) => e.text.split(".")[0]));

// SHUFFLE CARDS ARRAY

let cardsArray = Array.from(document.getElementsByClassName("cards"));
let cardsArrayBack = Array.from(document.getElementsByClassName("back"));
console.log(cardsArray[0]);

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(cards);

let dropzoneWrap = document.querySelector("#dropzone");
let cardwrapper = document.getElementById("cardWrapper");
console.log(cardsArray);

// MAKE THE CARDS

cardsArray.map((e, i) => {
    // e.style.backgroundImage = "url(" + cards[i].background + ")";
    e.id = cards[i].id;
    e.classList.add(cards[i].index);
    e.dataset.index = cards[i].index;
});

// document.body.addEventListener("click", function () {
//     cardsArray.map((e, i) => {
//         // e.style.backgroundImage = "url(" + cards[i].background + ")";
//         e.classList.add("mischen");
//     });
// });

// INNER BACKGROUND IMAGE

cardsArrayBack.map((e, i) => {
    e.style.backgroundImage = "url(" + cards[i].background + ")";
});

function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    // let img = new Image();
    // img.src = "./img/bg_fh.png";
    // event.dataTransfer.setDragImage(img, 100, 100);
    // var dragIcon = document.createElement("img");
    // dragIcon.src =
    //     "https://www.googlewatchblog.de/wp-content/uploads/rip-googl.jpg";
    // dragIcon.width = 100;
    // event.dataTransfer.setDragImage(dragIcon, -10, -10);

    // event.currentTarget.classList.add("flip-out-hor-top");
    // event.currentTarget.style.opacity = 0.5;
}

function onDragOver(event) {
    event.preventDefault();
    if (event.target.classList[0] == "dropzone") {
        event.target.style.background = "red";
    } else {
        document.getElementById("dropzone3").style.background = "white";
    }
    console.log(event.target);
}

let br = document.createElement("br");

let head = Array.from(document.getElementsByClassName("head"));
let words = Array.from(document.getElementsByClassName("words"));
let txt = document.querySelector(".text");
let txt2 = document.querySelector(".text2");
let txt3 = document.querySelector(".text3");
let thema = document.querySelector(".thema");
let thema2 = document.querySelector(".thema2");
let thema3 = document.querySelector(".thema3");
let kopfPast = document.getElementById("kopfPast");
let kopfPresent = document.getElementById("kopfPresent");
let kopfFuture = document.getElementById("kopfFuture");

let flipped = false;
console.log(thema);

function flipCard(card) {
    let rndm = Math.floor(Math.random() * 100);
    console.log(rndm);
    if (rndm < 10) {
        card.style.transform = "rotate(180deg)";
        flipped = true;
    }
}

let droppedPast = false;
let droppedPresent = false;
let droppedFuture = false;

// PAST DROP

function onDrop(event) {
    event.preventDefault();
    let id = event.dataTransfer.getData("text");
    let draggableElement = document.getElementById(id);
    const dropzone = event.target;
    console.log(draggableElement.dataset.index);

    if (!droppedPast) {
        document.getElementById("vergangenheit").style.display = "none";
        dropzone.appendChild(draggableElement);

        flipCard(draggableElement);

        setTimeout(() => {
            draggableElement.childNodes[1].style.transform = "rotateY(180deg)";
            thema.innerHTML = cardsCopy[draggableElement.dataset.index].name;

            setTimeout(() => {
                words[0].classList.add("fade-in");
            }, 400);

            head[0].innerHTML = cardsCopy[draggableElement.dataset.index].text
                .split(".")
                .shift();

            txt.innerHTML = cardsCopy[draggableElement.dataset.index].text
                .split(".")
                .slice(1);
            if (flipped) {
                dropzone.classList.add("flippedBox");

                kopfPast.classList.add("kopf");
                kopfPast.innerHTML =
                    cardsCopy[draggableElement.dataset.index].kopf;
            }
        }, 200);

        droppedPast = true;
    }
    event.dataTransfer.clearData();
    dropzone.style.opacity = 1;
}

// PRESENT DROP

function onDropPresent(event) {
    event.preventDefault();
    let id = event.dataTransfer.getData("text");
    let draggableElement = document.getElementById(id);
    const dropzone = event.target;
    console.log(thema);

    if (!droppedPresent) {
        document.getElementById("gegenwart").style.display = "none";
        dropzone.appendChild(draggableElement);
        flipCard(draggableElement);
        console.log(draggableElement.childNodes[1]);
        setTimeout(() => {
            draggableElement.childNodes[1].style.transform = "rotateY(180deg)";
            thema2.innerHTML = cardsCopy[draggableElement.dataset.index].name;

            setTimeout(() => {
                words[1].classList.add("fade-in");
            }, 400);

            head[1].innerHTML = cardsCopy[draggableElement.dataset.index].text
                .split(".")
                .shift();

            txt2.innerHTML = cardsCopy[draggableElement.dataset.index].text
                .split(".")
                .slice(1);
            if (flipped) {
                dropzone.classList.add("flippedBox");
                kopfPresent.classList.add("kopf");
                kopfPresent.innerHTML =
                    cardsCopy[draggableElement.dataset.index].kopf;
            }
        }, 200);

        droppedPresent = true;
    }
    event.dataTransfer.clearData();
    dropzone.style.opacity = 1;
}

// FUTURE DROP

function onDropFuture(event) {
    event.preventDefault();
    let id = event.dataTransfer.getData("text");
    let draggableElement = document.getElementById(id);
    const dropzone = event.target;
    console.log(thema);

    if (!droppedFuture) {
        document.getElementById("zukunft").style.display = "none";
        dropzone.appendChild(draggableElement);
        flipCard(draggableElement);
        console.log(draggableElement.childNodes[1]);
        setTimeout(() => {
            draggableElement.childNodes[1].style.transform = "rotateY(180deg)";
            thema3.innerHTML = cardsCopy[draggableElement.dataset.index].name;

            setTimeout(() => {
                words[2].classList.add("fade-in");
            }, 400);

            head[2].innerHTML = cardsCopy[draggableElement.dataset.index].text
                .split(".")
                .shift();

            txt3.innerHTML = cardsCopy[draggableElement.dataset.index].text
                .split(".")
                .slice(1);
            if (flipped) {
                dropzone.classList.add("flippedBox");

                kopfFuture.classList.add("kopf");
                kopfFuture.innerHTML =
                    cardsCopy[draggableElement.dataset.index].kopf;
            }
        }, 200);

        droppedFuture = true;
    }
    event.dataTransfer.clearData();
    dropzone.style.opacity = 1;
}

// MOBILE DRAGGER

let mobileBox = Array.from(document.getElementsByClassName("mobileTest"));
let box = document.getElementById("box");

// box.addEventListener("touchmove", function (e) {
//     let touchLocation = e.targetTouches[0];
//     box.style.left = touchLocation.pageX + "px";
//     box.style.top = touchLocation.pageY + "px";
// });

let theCards = Array.from(document.getElementsByClassName("cards"));
let dropzoneOne = document.getElementById("dropzone");
let bodyRect = document.body.getBoundingClientRect();
let xOne = dropzoneOne.getBoundingClientRect().x;
let yOne = dropzoneOne.getBoundingClientRect().y;
let lastMove = null;

// function touchmove(event){
//     event.preventDefault();
//     lastMove = event;
//     let touchLocation = event.targetTouches[0];
//     e.style.left = touchLocation.pageX + 102 + "px";
//     e.style.top = touchLocation.pageY - 150 + "px";
// }

if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
) {
    document.getElementById("cardWrapper").style.height = "20rem";

    theCards.forEach((e) => {
        e.style.position = "absolute";
        let theCard = e;
        e.addEventListener("touchmove", function (event) {
            event.preventDefault();
            lastMove = event;
            let touchLocation = event.targetTouches[0];
            e.style.left = touchLocation.pageX + 102 + "px";
            e.style.top = touchLocation.pageY - 150 + "px";
        });
        e.addEventListener("touchend", function (event) {
            let evX = Math.floor(event.changedTouches[0].pageX);
            let evY = Math.floor(event.changedTouches[0].pageY);
            let dX = dropzoneOne.getBoundingClientRect().x;
            let dY = dropzoneOne.getBoundingClientRect().y;
            // console.log(dropzoneOne.getBoundingClientRect());
            // console.log(evX, evY, dX);
            if (evX > dX && evX < dX + 240 && evY > dY && evY < dY + 335) {
                if (!droppedPast) {
                    dropzoneOne.style.background = "red";
                    e.style.left = dX + 210 + "px";
                    e.style.top = dY + 10 + "px";
                    console.log(e.style.left, dX);
                    // e.removeEventListener("touchmove" );
                    setTimeout(() => {
                        e.childNodes[1].style.transform = "rotateY(180deg)";
                        thema.innerHTML = cardsCopy[e.dataset.index].name;

                        setTimeout(() => {
                            words[0].classList.add("fade-in");
                        }, 400);

                        head[0].innerHTML = cardsCopy[e.dataset.index].text
                            .split(".")
                            .shift();

                        txt.innerHTML = cardsCopy[e.dataset.index].text
                            .split(".")
                            .slice(1);
                        if (flipped) {
                            dropzone.classList.add("flippedBox");

                            kopfPast.classList.add("kopf");
                            kopfPast.innerHTML =
                                cardsCopy[e.dataset.index].kopf;
                        }
                    }, 200);
                }
            }
        });
    });

    console.log(bodyRect, dropzoneOne.getBoundingClientRect());

    theCards.map((e, i) => {
        e.style.right = i * 12 + "px";
    });
}
