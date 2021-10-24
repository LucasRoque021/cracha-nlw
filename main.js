const linksSocialMedia = {
  github: 'LucasRoque021',
  youtube: 'channel/UCDm11JiSqHgkxmXVu_68Pkg',
  facebook: 'lucas.p.roque',
  instagram: 'lucasroque21',
  twitter: 'LucasPRoque'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(li.children[0].href)
  }

  //alert(userName.textContent)    printa h1
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
