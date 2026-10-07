
export const Age = ({ ListaNaKorisnici }) => {
    console.log(ListaNaKorisnici);

    return (
        <div id='age-list'>
            <h2>Листа на сите корисници:</h2>
            <ul>
                {ListaNaKorisnici.map((user, i) => (
                    <li key={i} style={{ marginBottom: '10px' }}>
                        <strong>Име презиме:</strong> {user.ime} {user.prezime} <br />
                        <strong>Адреса:</strong> {user.adresa} <br />
                        <strong>Возраст:</strong> {user.godini}{' '}
                        {user.godini < 18 && <span> - Помалку од 18 години</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};