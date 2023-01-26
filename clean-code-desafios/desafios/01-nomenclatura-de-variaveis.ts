// Nomenclatura de variáveis

const categories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getGithubUser(req, res) {
  const username = String(req.query.username)

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const githubInformation = await fetch(`https://api.github.com/users/${username}`);

  if (githubInformation.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`
    })
  }

  const user = await githubInformation.json()

  const orderCategoriesByFollowers = categories.sort((a, b) =>  b.followers - a.followers); 

  const findUserCategory = orderCategoriesByFollowers.find(category => user.followers > category.followers)

  const result = {
    username,
    category: findUserCategory.title
  }

  return result
}

getGithubUser({ query: {
  username: 'josepholiveira'
}}, {})