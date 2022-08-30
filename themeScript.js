console.log('it works')

let theme = localStorage.getItem('theme')

if (theme == null || theme == 'shrub') {
    setTheme('shrub')
}
else if (theme=='light') {
    setTheme('light')
}
else if (theme=='dark') {
    setTheme('dark')
}

let themeDots = document.querySelectorAll('.theme-dot')

for (var i = 0; i < themeDots.length; i++) {
  themeDots[i].addEventListener('click', function() {
    let mode = this.dataset.mode
    console.log('clicked', mode)
    setTheme(mode)
  })
}


function setTheme(mode) {
    if (mode === 'shrub') {
        document.getElementById('theme-style').href = 'css/default.css'
    }
    else if (mode === 'light') {
      document.getElementById('theme-style').href = 'css/light.css'
    }
    else if (mode === 'dark') {
        document.getElementById('theme-style').href = 'css/dark.css'
    }

    localStorage.setItem('theme', mode)
}
