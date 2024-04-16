fetch('https://10.react.pages.academy/six-cities/hotels').then(res => res.json()).then(hotels => {
  const _comments = hotels.map(hotel => {
    return fetch(`https://10.react.pages.academy/six-cities/comments/${hotel.id}`).then(res => res.json()).then(res => {
      return {
        hotelId: hotel.id,
        comments: res
      }
    })
  })
  const comments = Promise.all(_comments);
  console.log(comments);
})