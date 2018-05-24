module.exports = {
  get: function() {
    var data = [];
    fetch('http://localhost:3000/rooms')
      .then((response) => response.json())
      .then((responseJson) =>
        responseJson.forEach(function(i) {
          data.push(createData(i.text));
        }),
      ).catch((error) => {
        console.error(error);
    });
    return data;
  },
}

function createData(message) {
  return {
      _id: Math.round(Math.random() * 1000000),
      text: message,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'Developer',
      },
      sent: true,
      received: true,
    }
}
