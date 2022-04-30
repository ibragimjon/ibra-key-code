const removesKey = document.querySelector('.removes-key')
const removesKeyCode = document.querySelector('.removes-keyCode')
const removesCode = document.querySelector('.removes-code')



document.addEventListener('keypress', (e)=>{
    removesKey.innerHTML = e.key
    removesKeyCode.innerHTML = e.code
    removesCode.innerHTML = e.keyCode
})