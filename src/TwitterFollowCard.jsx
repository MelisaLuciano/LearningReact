import { useState } from "react";

export function TwitterFollowCard ({ userName, children, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
  ? 'is-following tw-followCard-button'
  : 'tw-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className="tw-followCard-img" alt="gatito" src={`https://unavatar.io/{userName}`}/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className=".tw-followCard-div">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
  )
}