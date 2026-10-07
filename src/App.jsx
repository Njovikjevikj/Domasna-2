import { Address } from './components/Address';
import { Age } from './components/Age';

export function App() {
  var user1 = {
    ime: 'Јована',
    prezime: 'Јовановска',
    adresa: 'Охрид',
    godini: 15
  };

  var user2 = {
    ime: 'Стефан',
    prezime: 'Стефановски',
    adresa: 'Битола',
    godini: 22
  };

  var user3 = {
    ime: 'Бојана',
    prezime: 'Ристевска',
    adresa: 'Скопје',
    godini: 20
  };

  var user4 = {
    ime: 'Кристијан',
    prezime: 'Димитровски',
    adresa: 'Скопје',
    godini: 16
  };

  var ListaNaKorisnici = [user1, user2, user3, user4];

  return (
    <div id='app'>
      <Age ListaNaKorisnici={ListaNaKorisnici} />
      <hr />
      <Address ListaNaKorisnici={ListaNaKorisnici} />
    </div>
  );
}