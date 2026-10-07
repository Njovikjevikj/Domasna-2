
export const Address = ({ ListaNaKorisnici }) => {
    console.log(ListaNaKorisnici);

    return (
        <div id='address-list'>
            <h2>Корисници кои се од Скопје:</h2>
            <ul>
                {ListaNaKorisnici.map((user, i) => (
                    user.adresa === 'Скопје' && (
                        <li key={i} style={{ marginBottom: '10px' }}>
                            <strong>Име презиме:</strong> {user.ime} {user.prezime} <br />
                            <strong>Адреса:</strong> {user.adresa} <br />
                            <strong>Возраст:</strong> {user.godini}
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
};