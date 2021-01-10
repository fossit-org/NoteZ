const myButton = document.getElementById('button')
const myInput = document.getElementById('name')
const myHeading = document.getElementById('heading')

myButton.onclick = function() {
    const myValue =  myInput.value
    const myHeadingValue = myHeading.innerHTML
    
    var myOtherValue = myHeadingValue.split(' ')
    
    myOtherValue[1] = myValue
    
    myHeading.innerHTML = myOtherValue.join(' ')
}