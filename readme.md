

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:

getElementById
1.It selects id only
2.works with specific element
3.Id element needs to be unique
4.It returns single attribute
getElementsByClassName
1.It only select class name
2.works with multiple element
3.It selects multiple element on a shared class 
4.Returns all elements with the specific class name
querySelector
1.It can select any CSS selector
2.works with the element that matches first
3.Flexible to use as it can be use any CSS selector
4.Returns first element hat matches the CSS selector
 
2. How do you **create and insert a new element into the DOM**?

Answer:If we want to create new element into the DOM
firstly we need the the id name of that section where we want to insert new element 
like do const callHistoryData= document.getElementById('call-history-data'). Then
we need to create the element that we want to put there in “ `` ” this parenthesis to be as it is like 
const div= document.createElement('div')
    div.innerHTML=`
    <div class="flex justify-between items-center bg-[#F2F2F2] rounded-xl p-1 mt-3">
      <div>
        <h1>${data.dataName}</h1>
        <p>${data.dataNumber}</p>
      </div>
      <div>
        <h1>${data.date}</h1>
      </div>
    </div>
    `
Lastly add to the patent section like if we want to append as the last child then callHistoryData.appendChild(div) or if we want to append as the first child callHistoryData.prepend(div).

3. What is **Event Bubbling** and how does it work?

Answer: Event bubbling means when the event happens on an element first it runs on that element then it bubbles up to its parent then again it bubbles up to its body unless it stopped.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: Event delegation is a technique where we attach a single event listener to a common parent. It uses one parent listener to handle events on multiple children via event bubbling. Like 
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.dataset.target;  
    copyServiceNumber(targetId);
  });
});
It is useful as it improves performance and maintainability of our code.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: preventDefault() and stopPropagation() are two different methods to control event behavior in DOM.
preventDefault() stops browsers default action associated with a specific event and stopPropagation() stops the event flow.
preventDefault() used to a stop a form from submitting and stopPropagation() used to prevent handling parent from a child button is clicked mainly it shops bubbling.



