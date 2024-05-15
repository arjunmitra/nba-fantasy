import React, { useEffect, useState } from 'react';
import PlayerData from './PlayerData';

const DisplayPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [metaData, setMetaData] = useState({ next_cursor: undefined, per_page: undefined });
    
    useEffect(() => {
        const fetchData = async () => {
            const apiKey = process.env.REACT_APP_API_KEY;
            const url = `https://api.balldontlie.io/v1/players`;
            const options = {
                headers: {
                    'Authorization': `${apiKey}`
                }
            };

            const res = await fetch(url, options);
            const data = await res.json();
            console.log(data.data);
            console.log(data.meta);
            console.log(data.meta)
            setPlayers(data.data);
            setMetaData(data.meta);
        };

        fetchData();
    }, []);

    return (
        <>
            <h2>Displaying players</h2>
            <table className= 'table-container'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Team</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <PlayerData
                            key={player.id}
                            firstName={player.first_name}
                            lastName={player.last_name}
                            position={player.position}
                            team={player.team.full_name}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default DisplayPlayers;
