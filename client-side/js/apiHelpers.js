function postRequest(location, requestBody, callback) {
    fetch(location, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((jsonData) => callback(jsonData))
      .catch((err) => console.log(err));
  }

function putRequest(location, requestBody, callback) {
    fetch(location, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((jsonData) => callback(jsonData))
      .catch((err) => console.log(err));
  }