const request = async (method, url, data) => {
    try {
        const user = localStorage.getItem('auth');
        const authStoredData = JSON.parse(user || '{}');

        let headers = {}
        // console.log(`${authStoredData.accessToken} by requester`);
        if (authStoredData.accessToken) {
            headers['X-Authorization'] = authStoredData.accessToken;
        }

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, { headers });
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        const response = await buildRequest;

        // console.log(response);

        if (method !== 'DELETE') {
            const result = await response.json();

            return result;
        } else {
            return;
        }

    } catch (error) {
        console.log(error);
    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');