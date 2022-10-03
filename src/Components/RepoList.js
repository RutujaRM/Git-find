const RepoList = ({ data }) => {   //here data holds array list of repos




   return (

      <div className="card repo-list">
         <h2> 📑 Repo List 🏆</h2>
         <table>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Name</th>
               </tr>
            </thead>
            <tbody>

               {data.map((single_repo, idx) => { //repolist are consist array so use map on that
                  return (
                     <tr key={idx} >
                        <td>{idx + 1}</td>
                        <td>👉<a href={single_repo.html_url} target="_blank" rel="noreferrer" > {single_repo.name} </a></td>  {/* inside single repo data is in form of object so we take keys*/}
                     </tr>

                  );
               })}

            </tbody>
         </table>
      </div>
   )
}

export default RepoList