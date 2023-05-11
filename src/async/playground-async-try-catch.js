async function runCode() {
    const url = 'https://domain-api.com'

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('API Not Found')
    }
}

await runCode()