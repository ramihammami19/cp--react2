import React from 'react';
import './PlayerCard.css'; // Import SCSS file

const PlayerCard = ({e}) => {
    console.log(e);
    return (
        <div className="fut-player-card">
            <div className="player-card-top">
                <div className="player-master-info">
                    <div className="player-rating"><span>{e.rat}</span></div>
                    <div className="player-position"><span>{e.pos}</span></div>
                    <div className="player-nation">
                        <img src={e.nationality} alt="" draggable="false" />
                    </div>
                    <div className="player-club">
                        <img src={e.team} alt="" draggable="false" />
                    </div>
                </div>
                <div className="player-picture">
                    <img src={e.imageURL} alt="Messi" draggable="false" />
                    <div className="player-extra">
                        <span>4*SM</span>
                        <span>4*WF</span>
                    </div>
                </div>
            </div>
            <div className="player-card-bottom">
                <div className="player-info">
                    <div className="player-name"><span>{e.name}</span></div>
                    <div className="player-features">
                        <div className="player-features-col">
                            <span>
                                <span className="player-feature-value">{e.pac}</span>
                                <span className="player-feature-title">PAC</span>
                            </span>
                            <span>
                                <span className="player-feature-value">{e.sho}</span>
                                <span className="player-feature-title">SHO</span>
                            </span>
                            <span>
                                <span className="player-feature-value">{e.pas}</span>
                                <span className="player-feature-title">PAS</span>
                            </span>
                        </div>
                        <div className="player-features-col">
                            <span>
                                <span className="player-feature-value">{e.dri}</span>
                                <span className="player-feature-title">DRI</span>
                            </span>
                            <span>
                                <span className="player-feature-value">{e.def}</span>
                                <span className="player-feature-title">DEF</span>
                            </span>
                            <span>
                                <span className="player-feature-value">{e.phy}</span>
                                <span className="player-feature-title">PHY</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
