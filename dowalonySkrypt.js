let oceny = [];
let wyswietlaneOceny = []; 

function parsujOcene(ocena) {
  const oczyszczonaOcena = ocena.replace(/\s+/g, '');
  if (oczyszczonaOcena.endsWith('-')) {
    return parseFloat(oczyszczonaOcena.slice(0, -1)) - 0.25; 
  } else if (oczyszczonaOcena.endsWith('+')) {
    return parseFloat(oczyszczonaOcena.slice(0, -1)) + 0.25; 
  }
  return parseFloat(oczyszczonaOcena); 
}

function dodajOcene() {
  const wejscieOceny = document.getElementById('wejscieOceny').value.trim();
  const sparsowanaOcena = parsujOcene(wejscieOceny);

  if (!isNaN(sparsowanaOcena) && sparsowanaOcena >= 1 && sparsowanaOcena <= 6) {
    oceny.push(sparsowanaOcena);
    wyswietlaneOceny.push(wejscieOceny);
    aktualizujOceny();
  } else {
    alert('Wpisz poprawną ocenę, np. 2, 2-, 5+ itp.');
  }

  document.getElementById('wejscieOceny').value = '';
}

function aktualizujOceny() {
  const listaOcen = document.getElementById('listaOcen');
  const wynikSredniej = document.getElementById('wynikSredniej');

  listaOcen.textContent = `Oceny: ${wyswietlaneOceny.join(', ')}`;
  const suma = oceny.reduce((a, b) => a + b, 0);
  const srednia = (oceny.length > 0) ? (suma / oceny.length).toFixed(2) : '0';

  wynikSredniej.textContent = `Średnia: ${srednia}`;
}

function wyczyscOceny() {
  oceny = [];
  wyswietlaneOceny = [];
  document.getElementById('listaOcen').textContent = 'Oceny: Brak';
  document.getElementById('wynikSredniej').textContent = 'Średnia: 0';
}
