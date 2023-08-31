import { useFatch } from 'hooks/useFatch'

import React from 'react'

export default function Fetch({uri, renderSuccess, loadingFallback = <p>loading...</p>,
    renderError = err => <pre>{JSON.stringify(err,null,2)}</pre>}) {
    const {loading, data, error} =useFatch(uri);
    if (loading) return loadingFallback;
    if (error) return renderError(error);
    if (data) return renderSuccess(data)
}
