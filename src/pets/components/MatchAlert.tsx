
type Props = {
  queryParam:string | (string | null)[] | null,
  petsLength: number
}

export const MatchAltert = ( {queryParam , petsLength}:Props ) => {

  return (
    <>
      <div className="text-center">
        <h4>{ (!queryParam || queryParam.length === 0 ) ? '龴ↀ◡ↀ龴' : `Results for '${queryParam}'`}</h4>
      </div>

      <hr/>
      {
        ( petsLength > 0) &&
        <div className="alert alert-info animate__animated animate__tada">
           Yay! <b>{petsLength}</b> matches found 😻🐶
        </div>
      }
      {
        ( !queryParam || queryParam.length === 0 ) &&
        <div className="alert alert-warning">
          Search something ... 👀
        </div>
      }
      {
        ( queryParam && queryParam.length > 1 && petsLength === 0 ) && 
        <div className="alert alert-danger animate__animated animate__headShake">
          Oops! No matches found 😿😞
        </div>
      }
    </>
  );
}