import React from 'react';

const PlayerData = ({ firstName, lastName, position, team }) => {
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{position}</td>
            <td>{team}</td>
        </tr>
    );
}

export default PlayerData;
