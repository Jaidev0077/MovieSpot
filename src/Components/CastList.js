import React from 'react';

const CastList = (cast) => {
  let str = String(cast.cast)
  const actors = str.split(', ');
  console.log(cast);
  console.log(actors);
  return (
    <div>
      <h2 className="text-muted">Cast</h2>
      <div className="container-fluid">
        <div className="row flex-nowrap overflow-auto mt-2">
          {actors.map((actor, i) =>{
            return (
              <div className="col-3 mx-auto">
                <div className="card card-block h-100">{actor}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    )
}

export default CastList;