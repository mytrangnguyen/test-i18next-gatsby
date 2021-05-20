export const DispatchContactForm = async (formValues) => {
    const result = { success: Boolean, message: String }
    const request = await fetch(process.env.GATSBY_API_URL, {
        method: 'POST',
        headers: {
        'Content-type': 'application/json',
        },
        body: JSON.stringify(formValues),
    })
    const serverResponse = await request.json();
    if(request.status === 200) {
        result.success = true;
    } else {
        result.success = false;
        result.message = `${serverResponse.error}: ${serverResponse.message}`
    };
    return result;
};

