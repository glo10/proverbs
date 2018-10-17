
(function(){
  const baseUrl = 'http://localhost:4002';
  $(document).ready(function(){
    getAuthors();
    const blockquote = $('blockquote');
    const choice = $('#authors');
    const authorProverbs = $('#authorProverbs');

    choice.on('change', function(){
      authorProverbs.empty();
      let proverbs = [];
      let author = $(this).val();
      fetch(baseUrl + '/author')
      .then(res => res.json())
      .then(res => {
        for (let i = 0; i < res.length; i++) {
          if(author == res[i].author){
            authorProverbs.append('<li class="list-group-item">' + res[i].content + '</li>');
          }
        }
      })
    });

    function getAuthors(){
        fetch(baseUrl + '/author')
        .then(res => res.json())
        .then(res => {
          for (let i = 0; i < res.length; i++) {
            choice.append('<option value="' + res[i].author + '">'+  res[i].author + '</option>');
          }
        })
    }

    setInterval(getProverb,5000);

    function getProverb(){
      fetch(baseUrl + '/proverb')
      .then(res => res.json())
      .then(res => {
        blockquote.text(res.content + ' - '+ res.author);
      })
    }
  });

})()
