const fetchSession = async () => {
    let id;
    if(!sessionStorage.getItem('session_id'))
    {
        let results = await fetch('https://server-life3educate.herokuapp.com/api/assistant/session')      

        results = await results.json()

        if(results.success === true)
        {
            id = results.session_id
            sessionStorage.setItem('session_id', id)
        }
        else 
        {
            alert('error getting session')
        }
    }
    else {
        id = sessionStorage.getItem('session_id')
    }
    return id;
}

export const sendMsg = async (msg) => {
    const id = await fetchSession()
    console.log(id)

    var body = JSON.stringify({"user_message":msg});

    let res = await fetch(`https://server-life3educate.herokuapp.com/api/assistant/message`, {
        headers: {
            'Content-Type': 'application/json',
            'sessionid':  id, 
        },
        method: 'POST',
        body
    });

    res = await res.json();
    console.log(res)
    if(res.success === true){
        return res.msg.result.output.generic[0].text
    }
    else {
        return 'Error retrieving server.'
    }
}

