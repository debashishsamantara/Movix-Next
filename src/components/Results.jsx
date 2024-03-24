function Results({ results }) {
    return (
        <div>
            {results.map((result) => (
                <div key={result.id}>
                    <h2>{result.overview}</h2>
                </div>
            ))}
        </div>
    )
}

export default Results;
