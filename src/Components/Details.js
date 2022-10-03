import moment from "moment"; //This install to know the current days months years 

const Details = ({ data, changeVisibleComponent, visibleComponent }) => {    //this data var holds all data of user

    return (
        <div className="card detail" >
            <img src={data.avatar_url} alt="not Load" className="section-left" />  {/*Show user image */}

            <div className="section-right" >
                <h2>✨{data.name}</h2>
                <h2>💎<a href={data.html_url} target="_blank" rel="noreferrer" >@{data.login}</a>👋</h2>
                <h2>Member {moment(data.created_at).fromNow()}📅</h2>
            </div>

            <div className="detail-buttons" >                 {/*As per click on button the visiblity component change value and as per value the list is shown like repo,followers,following */}
                <button onClick={_ => changeVisibleComponent(1)} className={visibleComponent === 1 ? "active" : ""} >
                    {data.public_repos}                               {/*As per click on button we also change CSS */}
                    <span>Repos</span>
                </button>

                <button onClick={_ => changeVisibleComponent(2)} className={visibleComponent === 2 ? "active" : ""}>
                    {data.followers}
                    <span>followers</span>
                </button>

                <button onClick={_ => changeVisibleComponent(3)} className={visibleComponent === 3 ? "active" : ""}>
                    {data.following}
                    <span>Follwing</span>
                </button>

            </div>

        </div>

    )
}

export default Details