import { Link } from 'react-router';
import type { Pet } from '../Types/Pet';

type Props = {
    pet: Pet
}

export const PetCard = ( { pet }:Props ) => {
    const petImgUrl = `${import.meta.env.BASE_URL}assets/pets-images/${pet.id}.jpg`;
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-5">
                        <img src={ petImgUrl } className="card-img" alt = { pet.name } />
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title"> { pet.name } </h5>
                            <hr/>
                            <h6 className="card-text"> { pet.origin } </h6>
                            <p className='card-text'> { pet.temperament.join(', ') } </p>
                            <p className='card-text'>
                                <small className='text-muted'>
                                    Size: { pet.size }
                                </small>
                            </p>
                            <Link to = { `/pet/${pet.name.toLowerCase()}` }>
                                More...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
