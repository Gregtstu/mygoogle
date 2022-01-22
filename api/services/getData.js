const getData = async (url) => {
    const res = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-user-agent": "desktop",
            "x-proxy-location": "US",
            "x-rapidapi-host": "google-search3.p.rapidapi.com",
            "x-rapidapi-key": "ce86371aefmshd1bd4901f37c4ddp10f73ajsnbaaf8c959310"
        }
    });

    if(!res.ok){
       throw new Error (`Error status: ${res.status} from ${res.url}`)
    }

    return await res.json();
}

export {getData};

