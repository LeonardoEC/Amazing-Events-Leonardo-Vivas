
import './homeComponentStyle.css'

const HOMECOMPONENT = () =>{
    return(
        <section className='homeComponent__container container'>
            <div>
                <h1 className='title'>Amazing Events</h1>
                <h3>Home</h3>
            </div>
            <div className='homeComponent__bottomArea'>
                <div>
                    <p>
                        Quienes somos ?
                    </p>
                    <p>
                        Somos Amaizing event bla bla bla
                    </p>
                </div>
                <div>
                    <p>Carrusel con los mejores eventos</p>
                </div>
            </div>
        </section>
    )
}

export default HOMECOMPONENT