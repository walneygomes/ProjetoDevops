$(document).ready(function(){
  $("#card").show();      
 

    const urlGithub = 'http://localhost:9009/produtos';


    getProdutos();



function getProdutos(productGa){


    let request = new XMLHttpRequest();
    request.open('GET' , urlGithub);
    request.responseType= 'json';
    request.send();

    request.onload = function(){
        let responseData = request.response;
            console.log(responseData)
            if (productGa) {
                let produtosEncontrados=[]
                for(let i = 0; i<responseData.length;i++){
                    if(responseData[i].name==productGa){
                        produtosEncontrados.push(responseData[i]); 
                    }
                }
                formatProduto(produtosEncontrados);

            }else{
                formatProduto(responseData);


            }
    

    
        }
}
function formatProduto(produtos){
    console.log("wal")
    showProduto(produtos); 
    }

function showProduto(produtos){
  
    $("#card").empty()
        for(let i=0 ; i<produtos.length;i++){
        let card = `
                        <div id="card" class="float-left">
                        
                            <div class="card-body">
                            <img src=${ produtos[i].url}   height="400" alt="gta capa">

                            <h5 class="card-title">${ produtos[i].name}</h5>

                            <p class="card-text">${ produtos[i].preco } </p>

                        
                              <p> ${ produtos[i].descricao }</p>

                            </h5>
                            </div>

                            <button type="button" class="btn btn-primary btn-md">Add to Cart</button>

            

                           
                    </div>`
        
        $("#card").append(card)
        }

  
}

$("#buscar").click(function(){
   
    

    let dadoName = $("input").val();
    getProdutos(dadoName)
})


   //salva o cliente 
        //no banco de dados
        //realiza o metodo post
        const saveClient = () => {
            const _id = $('[name=id]').val()
            const name = $('[name=name]').val()
            const preco = $('[name=preco]').val()
            const descricao = $('[name=descricao]').val()
            const url = $('[name=url]').val()
            console.log(descricao)
            
            
            $.ajax({
                method: _id ? 'PUT' : 'POST',
                url: `${urlGithub}/${_id}`,
                data: _id ? { _id, name,preco,descricao,url } : { name,preco,descricao,url },
                success: getProdutos
            })
        }
    
        $(() => {
           
            $('[save]').click(saveClient)
        })


})