fetch("https://oogpwbkj6g.execute-api.us-west-1.amazonaws.com/Prod/put_count")
    .then(data => fetch("https://oogpwbkj6g.execute-api.us-west-1.amazonaws.com/Prod/get_count"))
    .then(data => data.json())
    .then(data => document.getElementById('count').innerHTML = data['count'])