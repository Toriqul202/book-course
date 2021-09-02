//  ------------------load book data ---------
const loadBook=()=>{
    
    const searchField=document.getElementById('searchField');
    const searchText=searchField.value
    const url =`https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(response=>response.json())
    
    .then(data=>getBookDetail(data))

}

// ----------book detail--------------- 
const getBookDetail= detail=>{
    const parent=document.getElementById('parent')
    parent.textContent='';
   detail.docs?.forEach(book => {
     
     const div=document.createElement('div')
     
     div.classList.add('col-lg-3')
     div.innerHTML=`
       
         <div class="col border rounded p-3 ">
         <div class="d-flex justify-content-center mb-2">
        
          
         <img src='https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg'> 
         </div>
        
          
          <h5 class="p-3 broder border rounded">Book Name:${book.title ? book.title :'Not Found' }</h5>
          <h5 class="p-3 broder border rounded">Author Name:${book.author_name?book.author_name[0] :'Not Found' }</h5>
          <h5 class="p-3 broder border rounded">Publisher Name:${book.publisher?book.publisher[0] :'Not Found' }</h5>
          <h5 class="p-3 broder border rounded">Publish Date:${book.publish_date?book.publish_date[0]:'Not Found'}</h5>
          <h5 class="p-3 broder border rounded">First Publish Year:${book.first_publish_year ? book.first_publish_year:'Not Found'}</h5>
          
          </div>
        
        `
     
     

     parent.appendChild(div)
     console.log(book)
     console.log(detail)
    
    
     
     
   });
//    founding book meassege 
   const searchField=document.getElementById('searchField')
   if(searchField.value == ''){
    document.getElementById('quantityMessage').innerText=`Type Something For Search `
   }
   else{
    document.getElementById('quantityMessage').innerText=`${detail.docs.length} results found of ${detail.num_found} `
   }
   
    
    
  
};










