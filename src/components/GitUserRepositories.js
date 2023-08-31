import React from 'react';
import Fetch from "components/toolbox/Fetch.js";
import RepoItem from "components/RepoItem";

function GitUserRepositories({ loginId, onSelect = f => f }) {

    const uri = `https://api.github.com/users/${loginId}/repos`;
    return <Fetch uri={uri} renderSuccess={
        (repositoryInfo) => {
            return <RepoItem repositories={repositoryInfo.data} onSelect={onSelect}
            />
        }}
    />
}

export default GitUserRepositories;