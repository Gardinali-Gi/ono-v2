import cabecalho from './cabecalho.svg';
import bottom from './bottom_city.svg'
import ono from './foto_ono.png'
import './App.css';


function App() {
    document.title = 'Feliz Aniversário ONO'
    return ( <
        div className = "App" >
        <
        head >
        <
        link rel = "preconnect"
        href = "https://fonts.gstatic.com"
        crossorigin / >
        <
        link rel = "preconnect"
        href = "https://fonts.googleapis.com" / >
        <
        link rel = "preconnect"
        href = "https://fonts.gstatic.com"
        crossorigin / >
        <
        link href = "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;700&family=Montserrat:wght@400;700&family=Nunito:wght@400;600;700&display=swap"
        rel = "stylesheet" / >

        </head> <
        header >
        <
        img src = { cabecalho }
        className = "img_header"
        alt = "imagem de cabecalho" / >
        <
        div className = 'inicio' >
        <h1 className = 'titulo' > Parabéns!! </h1>      
        <p className = 'texto_desculpa1' > Seu presente foi entregue em partes, e aqui temos 
        oficialmente a Pt. 2!</p>
        <p className = 'texto_desculpa1' > Aparentemente dia 28 de janeiro é quando uma 
        determinada pessoa faz aniversário e que no ambiente de trabalho conhecemos como Ono,
         o sobrenome lembra muito aquela marca de sabão em pó, mas é uma pessoa, o que é algo
          completamente diferente. </p>
        </div> <
        div className = 'gif_1' >
        <
        img src = 'https://thumbs.gfycat.com/HandyCrispBorderterrier-size_restricted.gif'
        alt = 'fica ok'
        width = "40%" />
        </div> 
        </header> 
        <section>
        <
        div className = 'meio' >
        <p className = 'texto_previsao' > Resolvi enviar este cartão para te desejar 
        muito anos de vida, saúde, paz, alegria e tudo que vem em um combo de aniversário, 
        mas sem bolo. </p> </div>

        
        <div className = 'meio2' >
        < p className = 'texto_2' > Que você continue sendo essa pessoa determinada que sempre 
        tem uma solução para algo e com grande foco acompanhado de uma xícara de café, 
        garrafa de água e uma enroladinha no cabelo para ligar o modo ON! </p> </div> 
        <img className = 'img_1'
        src = { bottom }
        alt = 'imagem 1'/>

        <div className = 'meio3' >
        < p className = 'texto_3' > Não esquecendo de se alimentar para repor todas as 
        energias que gastou só pensando na solução de um problema, ou só porque tá com fome 
        mesmo. </p> </div> 
        <img className = 'img_2'
        src = { bottom }
        alt = 'imagem 1'/>

        <div className = 'meio4' >
        < p className = 'texto_4' > Mas lembrando, use com moderação se autodeclarar como burro
         para se edificar como pessoa. Você é uma das pessoas mais inteligentes de 
         conhecimentos gerais que conheço, e usar isso sem moderação pode criar uma 
         construção sem vigas até desmoronar. </p> </div> 
        <img className = 'img_3'
        src = { bottom }
        alt = 'imagem 1'/>

        <div className = 'meio5' >
        < p className = 'texto_5' > Enfim, me deixo a disposição para te ajudar, caso precise! 
        Por isso o formulário abaixo, que basta me mandar o pedido de ajuda e disparar por 
        e-mail ou telefone que eu receberei! </p>
        < p className = 'texto_6' > Fiz isso, pois certamente não estaremos no mesmo ambiente
         o resto da vida e também não espero que estejamos, pois o céu não é o limite para
          mim e pelo pouco que te conheço, também  não me parece ser o seu.  </p>
        < p className = 'texto_7' > <i>*Pode mandar por aqui também os materias de treinamento
         que estava para ser entregue em 30/06/2022 'Brincadeiras a parte'.</i> </p>
         </div> 
        <img className = 'img_4'
        src = { bottom }
        alt = 'imagem 1'/>

        <div className="linha-horizontal"></div>
        <div className="linha-vertical"></div>
            <form className="formulario" id="formulario" action="https://formsubmit.co/giovannagardinali11@gmail.com" method="post" onsubmit="FormEnviado">
            <label for="email">Email</label><br>
            <input type="email" className="email" id="email" name="email" required><br>
            <label for="assunto">Resumo da solicitação</label><br>
            <input type="text" className="assunto" id="assunto" name="assunto" required><br>
            <label for="mensagem">Como posso te ajudar?</label><br>
            <textarea id="mensagem" className="mensagem" name="mensagem" style="resize: none;" required></textarea><br>
            <input type="hidden" name="_captcha" value="false">
            <input type="submit" value="Enviar email"></button>
            <input id="btn-wpp" className="btn-wpp" type="button" value="Enviar por WhatsApp" onclick="enviarWhatsApp()">
            <input type="hidden" name="_template" value="box">
          </form> 
        </div>
        


        <div className = 'final' >
        < p className = 'texto_2' > Aqui, você pode baixar a sua imagem do quadro e poupar tinta de baleia😎😎 </p>
            <a className = 'download_foto'
        href = { ono }
        download > FOTO DA MONTAGEM </a> 
        </div>
        </section> 

        <footer >
        <img className = 'img_footer'
        src = { bottom }
        alt = 'imagem de footer' / >
        </footer>


        </div>
    );
}

export default App;
