function getFirstFiveRatings(ratings) {
  if (ratings.length < 5) {
    return false
  }
  return ratings.slice(0, 5)
}

function sumFirstFiveRatings(ratings) {
  const hasRatings = Boolean(ratings)

  if (hasRatings) {
    const firstFiveRatings = getFirstFiveRatings(ratings)

    if (!firstFiveRatings) return { error: 'There must be at least 5 ratings' }

    let ratingsSum = 0;

    for (const rating of firstFiveRatings) {
      ratingsSum += Number(rating)
    }

    const todayInTimestamp = Math.floor(new Date().getTime()/1000.0) // The getTime method returns the time in milliseconds.

    return { ratingsSum, created_at: todayInTimestamp }
  }

  return { error: 'ratings is required' }
}

const appRatings = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3']
console.log(sumFirstFiveRatings(appRatings))