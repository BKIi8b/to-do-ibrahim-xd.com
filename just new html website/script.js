const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');

// this function will allow us to add elements when we click the button
btn.onclick = function(){
    


    
    var txt = input.value;
    if(txt ==''){
        alert('you must write something');
    }else{
        
        li = document.createElement('li');

    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    
    }
    
};
// delete button






/*var deleteButton = querySelector('#deleteButton')
for (i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function() {
      this.parentElement.style.display = 'none';
    });
  }*/
  

/*function Delete(){
    // Removes an element from the document.
    var element = document. getElementById("amogus");
    element.parentNode.removeChild(element);
    }*/
    


