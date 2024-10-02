export default function Profile() {
    return (
        <main className="min-h-screen flex-col items-center justify-between p-24">
            <header>
                <h3>Minha Conta</h3>
            </header>
            <section className="flex flex-col gap-4">
                <div>
                    <h4>Nome</h4>
                    <p>John Doe</p>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Assinatura Charts pre flop</td>
                                <td>Ativa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}