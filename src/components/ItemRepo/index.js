/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {
    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    };

    return (
        <ItemContainer onClick={handleRemove}>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target="_blank" className="ver">
                Ver repositório
            </a>
            <br />
            <a href="#" className="remover">
                Remover
            </a>
            <hr />
        </ItemContainer>
    );
}

export default ItemRepo;
