import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {
  const playlists = props.playlists;
  return (
    
    <sidebar>
      <img src="juke.svg" className="logo" />

      <section>
        <h4 className="menu-item">
          <Link to='/albums'>ALBUMS</Link>
        </h4>
      </section>

      <section>
        <h4 className="menu-item">
          <Link to='/artists'>ARTISTS</Link>
        </h4>
      </section>

      <hr />
      <section>
        <h4 className="text-muted">PLAYLISTS</h4>
        <h4>
          <hr />
            <ul className="list-unstyled">
            {console.log(props)}
            {/*
              playlists.map(playlist => {
                return (
                  <li key={playlist.id} className="playlist-item menu-item">
                    <Link to="/playlists">{playlist.name}</Link>
                  </li>
                );
              })
            */}
              <li className="playlist-item menu-item">
                <Link to="WHERE_TO_GO">another playlist</Link>
              </li>
            </ul>
          <Link className="btn btn-primary btn-block" to='/playlist'>
          <span className="glyphicon glyphicon-plus"></span> PLAYLIST
          </Link>
        </h4>
      </section>

    </sidebar>
  );
}

export default Sidebar;
