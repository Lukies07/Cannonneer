document.addEventListener('DOMContentLoaded'), (event) => {
    console.log('DOM fully loaded and parsed');
    let canvas = document.addEventListener('gameCanvas')
    let ctx = canvas.getContext('2d') 

    function resizeCanvas() { 
        canvas.wdith = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
}