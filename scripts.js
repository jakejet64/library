const body = document.querySelector('body');

let bookAddMenu = document.createElement('div');
bookAddMenu.classList.add('bookAddMenu');
bookAddMenu.innerHTML = `
<button class="close" onClick="closeBookMenu()">Close</button>

<div class="addBookInputForm">
    <form action="">
        <input type="text" placeholder="Title" name="title">
        <input type="text" placeholder="Author" name="author">
        <input type="text" placeholder="Pages" name="pages">
        <label for="read">Read?</label>
        <input type="checkbox" name="read">
        <button type="button" onClick="addBook()">Submit</button>
        <button type="reset">Clear</button>
    </form>
</div>
`;


let addingBook = false;

function addBookMenu() {
    if(!addingBook){
        body.appendChild(bookAddMenu);
        addingBook = true;
    }
}

function closeBookMenu() {
    if(addingBook){
        body.removeChild(bookAddMenu);
        addingBook = false;
    }
}

function addBook(){
    const title = bookAddMenu.querySelector("[name='title']").value;
    const author = bookAddMenu.querySelector("[name='author']").value;
    const pages = bookAddMenu.querySelector("[name='pages']").value;
    const read = bookAddMenu.querySelector("[name='read']").checked;
    console.log(title + ", " + author + ", " + pages + ", " + read);
}