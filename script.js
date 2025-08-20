function light(){
    document.body.className = 'light'
    salvar('light');
}
function dark(){
 document.body.className = 'dark'
 salvar('dark')
}
function salvar(tema){
    localStorage.setItem('cor', tema)
}
function loadTheme(){
    const temaSalvo = localStorage.getItem('cor')
    if (temaSalvo) {
        document.body.className = temaSalvo
    }
}
window.onload = loadTheme;