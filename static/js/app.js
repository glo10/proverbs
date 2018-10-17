
(function(){
  const baseUrl = 'http://localhost:4002';
  $(document).ready(function(){
    getAuthors();
    const blockquote = $('blockquote');
    const selectAuthor = $('#selectAuthor');
    const listAuthors = $('#listAuthors');
    setInterval(getProverb,5000);

    selectAuthor.on('change', function(){
      //clear li elements into ul
      listAuthors.empty();
      let author = $(this).val();
      fetch(baseUrl + '/author')
      .then(res => res.json())
      .then(res => {
        for (let i = 0; i < res.length; i++) {
          if(author == res[i].author){
            listAuthors.append('<li class="list-group-item">' + res[i].content + '</li>');
          }
        }
      })
    });

    /**
    *@desc get list authors from the server and add each item into select
    */
    function getAuthors(){
      let authors = [];
        fetch(baseUrl + '/author')
        .then(res => res.json())
        .then(res => {
          //Keep unique value
          for (let i = 0; i < res.length; i++) {
            if(authors.indexOf(res[i].author) == -1)
              authors.push(res[i].author)
          }
          //From unique value array, add option value into select
          for (let i = 0; i < authors.length; i++)
            selectAuthor.append('<option value="' + authors[i] + '">'+  authors[i] + '</option>');
        })
    }

    /**
    *@desc get proverb
    */
    function getProverb(){
      fetch(baseUrl + '/proverb')
      .then(res => res.json())
      .then(res => {
        blockquote.text(res.content + ' - '+ res.author);
      })
    }
  });

})()
