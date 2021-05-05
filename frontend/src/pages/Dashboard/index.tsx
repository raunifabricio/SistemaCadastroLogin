import React from 'react';

const Dasboard: React.FC = () => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>
                        <a href="/users">Cadastro de usuarios</a>
                </li>
                <li>
                    <a href="/list">Listagem de usuarios</a>
                </li>
            </ul>
        </div>
    );
};

export default Dasboard;