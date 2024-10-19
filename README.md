# React opgave stillet af HeyDay

Min debut med React. 

## Beskrivelse af løsning

I App.js findes det responsive, genanvendelige component og et object til organisering af content.  

Componentet har 5 props til justering:
    content:
        Anvendes til at definere, hvilket content der skal hentes fra content-objektet
    flipped:
        Anvendes til at fortælle om layoutet skal spejlvendes eller ej. Hvis flipped er true, tilføjes klassen flipped-layout.
    text-position:
        Anvendes til at definere text-containerens position. Hvis 'top' tilføjes klassen text-position-top. Hvis 'bottom' tilføjes klassen text-position-bottom. 
    darkBackgroundColor:
        Anvendes hvis componentet skal have en mørk baggrundsfarve. Hvis darkBackgroundColor evalueres til true, ændres farve af h1 og p til hvid af hensyn til kontrast.
    lightBackgroundColor:
        Anvendes hvis componentet skal have en lys baggrundsfarve. 


I index.js er componentet renderet 4 gange med forskellige argumenter, så de forskellige layout muligheder præsenteres.


