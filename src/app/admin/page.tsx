import ListUsers from "../components/users/ListUsers";

export default function adminDashboard() {

    let listDestino = ["destino 1", "destino 2", "destino 3"];
    let listAtracciones = ["atraccion 1", "atraccion 2", "atraccion 3"];
    return (
        <>

            <section>

                <h1>Aca van a ir los destinos populares</h1>
                <ul>
                    {listDestino.map((dest, index) => (
                        <li key={index}>{dest}</li>
                    ))}
                </ul>

            </section>
            <section>

                <h1>Aca van a ir las atracciones mas vendidas</h1>
                <ul>
                    {listAtracciones.map((dest, index) => (
                        <li key={index}>{dest}</li>
                    ))}
                </ul>

                <h1>Aca van a ir las atracciones mas vendidas</h1>
                <ListUsers />


            </section>




        </>
    )
}