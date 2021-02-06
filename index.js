var names = [
    {
        question: 'This is my first question',
        answer: 'this is the answer for 1'
    },
    {
        question: 'This is my second question',
        answer: 'this is the answer for 2'
    },
    {
        question: 'This is my third question',
        answer: 'this is the answer for 3'
    },
    {
        question: 'This is my fourth question',
        answer: 'this is the answer for 4'
    },
    {
        question: 'This is my fifth question',
        answer: 'this is the answer for 5'
    },
]

//console.log(names)

$('#loader').modal({
    backdrop: 'static',
    keyboard: false
})
$('#loader').modal('show');
window.onload = function(){
    $('#loader').modal('hide');
}
names.forEach(function(value, index) {
    
    var mainDiv = document.createElement('div')
    mainDiv.className = 'd-flex justify-content-center align-items-center vh-100'
    
    var mainCard = document.createElement('div')
    mainCard.className = 'card'
    
    var cardHeader = document.createElement('div')
    cardHeader.className = 'card-header py-4 px-5'
    
    var question = document.createElement('h2')
    question.id = 'question_' + index
    question.innerHTML = 'Question #' + (index + 1) + ': ' + value.question
    
    var cardBody = document.createElement('div')
    cardBody.className = 'card-body'
    
    var answerForm = document.createElement('form')
    answerForm.method = 'post'
    answerForm.enctype = 'multipart/form-data'
    answerForm.className = 'text-center'
    
    var formGroup = document.createElement('div')
    formGroup.className = 'form-group'
    
    var formLabel = document.createElement('label')
    formLabel.for = 'answer_' + index
    formLabel.innerHTML = 'Answer'
    
    var formInput = document.createElement('input')
    formInput.type = 'text'
    formInput.className = 'form-control'
    formInput.id = 'answer_' + index
    formInput.placeholder = 'Your Answer'
    
    var submitBtn = document.createElement('button')
    submitBtn.className = 'btn btn-primary'
    submitBtn.id = 'submit_' + index
    submitBtn.type = 'submit'
    submitBtn.innerHTML = 'Submit'
    submitBtn.onclick = function(e) {
        e.preventDefault()
        if (formInput.value === value.answer) {
            window.alert('Answer is correct')
        } else {
            window.alert('Answer is wrong')
        }
    }
    
    cardHeader.appendChild(question)
    mainCard.appendChild(cardHeader)
    mainDiv.appendChild(mainCard)
    formGroup.appendChild(formLabel)
    formGroup.appendChild(formInput)
    answerForm.appendChild(formGroup)
    answerForm.appendChild(submitBtn)
    cardBody.appendChild(answerForm)
    mainCard.appendChild(cardBody)
    
    document.getElementById('allQuestions').appendChild(mainDiv)
})