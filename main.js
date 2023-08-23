var botaoNao = document.getElementById('nao')
var botaoSim = document.getElementById('sim')


botaoNao.addEventListener('mouseover', function() {
    botaoNao.style.left = (Math.floor(Math.random() * 300)) + 'px';
    botaoNao.style.top = (Math.floor(Math.random() * 300)) + 'px'
})


botaoSim.addEventListener('click', function(){
    window.alert("VAMBORAAAAAAA 🎉🎉🎉🎉🎉🎉🎉🎉")
})