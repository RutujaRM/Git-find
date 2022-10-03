const Followerslist = ({ data }) => {

    return (
        <div className="card followers-list">

            <h2>🤩 Followers List </h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th colSpan={2} >Name</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((elem, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1} </td>
                                    <td>
                                        <img src={elem.avatar_url} alt="profile" />
                                    </td>
                                    <td>
                                        <a href={elem.html_url} target="_blank" rel="noreferrer"> {elem.login} </a>
                                    </td>

                                </tr>
                            );
                        })
                    }

                </tbody>

            </table>
        </div>
    )
}

export default Followerslist