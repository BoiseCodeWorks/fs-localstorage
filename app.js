let sidebar = document.getElementById('wrapper')

let settings = {
  sidebar: true,
  theme: "purple"
}

let themes = {
  red: "red",
  blue: "blue",
  purple: "purple"
}

function toggleSidebar() {
  settings.sidebar = !settings.sidebar
  saveSettings()
}

function changeTheme(theme) {
  if (!themes[theme]) { return }
  settings.theme = theme
  saveSettings()
}

function saveSettings() {
  window.localStorage.setItem('app__settings', JSON.stringify(settings))
  updateUI()
}

function loadSettings() {
  let savedSettings = JSON.parse(window.localStorage.getItem('app__settings'))
  if (savedSettings) {
    settings = savedSettings
    updateUI()
  }
}


function updateUI() {
  if (settings.sidebar) {
    sidebar.classList.add('toggled')
  } else {
    sidebar.classList.remove('toggled')
  }
  document.body.className = settings.theme
}

loadSettings()