import React from 'react';

function Table(props) {

     return (
          <div>
               <table className="table table-striped">
                    <thead className="thead-dark">
                         <tr>
                              <th scope="col">#</th>
                              <th scope="col">Picture</th>
                              <th scope="col">Name</th>
                              <th scope="col">Gender</th>
                              <th scope="col">Email</th>
                              <th scope="col">Cell</th>
                         </tr>
                    </thead>

                    <tbody>
                         {
                              props.result.map(elem => (
                                   <tr key={elem.key}>
                                        <th scope="row">{(elem.key + 1)}</th>
                                        <td>
                                             <img src={elem.picture} className="rounded-circle" alt={"Profile picture of " + elem.name} />
                                        </td>
                                        <td>{elem.name}</td>
                                        <td>{elem.gender}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.cell}</td>
                                   </tr>
                              ))
                         }
                    </tbody>
               </table>
          </div>
     );
}

export default Table;